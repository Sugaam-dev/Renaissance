import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./MaterialsPage.css";

const MaterialsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);
  const categoryId = query.get("categoryId");
  const openResources = query.get("openResources") === "true";

  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);

  const openDocument = async (documentId) => {
    try {
      const res = await fetch(
        `https://api.sugaam.in/api/catalog/documents/${documentId}/access`,
        { credentials: "include" }
      );

      if (!res.ok) {
        alert("Please subscribe to access this content");
        navigate("/pricing");
        return;
      }

      const relativeUrl = await res.text();
      const streamUrl = `https://api.sugaam.in${relativeUrl}`;
      window.open(streamUrl, "_blank");
    } catch (err) {
      console.error("Error opening document:", err);
      alert("Something went wrong");
    }
  };

  useEffect(() => {
    if (!categoryId) return;

    const fetchMaterials = async () => {
      try {
        const res = await fetch(
          `https://api.sugaam.in/api/catalog/exams/${categoryId}/materials`,
          {
            credentials: "include",
          }
        );

        const data = await res.json();
        setMaterials(data);
      } catch (err) {
        console.error("Error fetching materials:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMaterials();
  }, [categoryId]);

  useEffect(() => {
    if (loading || !openResources || hasAutoOpened || materials.length === 0) return;

    const documentToOpen = materials.find((mat) => !mat.locked) || materials[0];
    if (documentToOpen) {
      setHasAutoOpened(true);
      openDocument(documentToOpen.id);
    }
  }, [loading, openResources, hasAutoOpened, materials, navigate]);

  if (loading) return <p>Loading materials...</p>;

  return (
    <div className="materials-page">
      <div className="materials-header">
        <h2>Study Materials</h2>
      </div>

      <div className="materials-grid">
        {materials.map((mat) => (
          <div
            key={mat.id}
            className={`material-card ${mat.locked ? "locked" : ""}`}
          >
            <h4>{mat.title}</h4>

            {mat.locked ? (
              <button
                className="secondary-button"
                onClick={() =>
                  navigate(
                    categoryId ? `/pricing?categoryId=${categoryId}` : "/pricing"
                  )
                }
              >
                🔒 Upgrade to access
              </button>
            ) : (
              <button
                className="primary-button"
                onClick={async () => {
                  try {
                    const res = await fetch(
                      `https://api.sugaam.in/api/catalog/documents/${mat.id}/access`,
                      { credentials: "include" }
                    );

                    if (!res.ok) {
                      // locked case
                      alert("Please subscribe to access this content");
                      navigate(
                        categoryId
                          ? `/pricing?categoryId=${categoryId}`
                          : "/pricing"
                      );
                      return;
                    }
                    const relativeUrl = await res.text();

                    const streamUrl = `https://api.sugaam.in${relativeUrl}`; // ⚠️ important (NOT json)

                    console.log("STREAM URL:", streamUrl);

                    // open PDF in new tab
                    window.open(streamUrl, "_blank");
                  } catch (err) {
                    console.error("Error opening document:", err);
                    alert("Something went wrong");
                  }
                }}
              >
                Open
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaterialsPage;