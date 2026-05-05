// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import ExamHero from "../../components/examPage/ExamHero";
// import examData from "../../data/examData";
// import "./ExamContent.css";

// const ExamPage = () => {
//   const { examId } = useParams();
//   const exam = examData[examId];
//   const navigate = useNavigate();
//   const storedUser = localStorage.getItem("user");
//   const user = useSelector((state) => state.auth.user) ||
//     (storedUser ? JSON.parse(storedUser) : null);

//   if (!exam) {
//     return <h2 style={{ padding: "120px" }}>Exam not found</h2>;
//   }

//   return (
//     <div>
//       <ExamHero title={exam.heroTitle} />

//       <section className="exam-content">

//         <h2>{exam.title}</h2>

//         {exam.about && (
//           <>
//             <h3>About the Exam</h3>
//             <p>{exam.about}</p>
//           </>
//         )}

//         {exam.why && (
//           <>
//             <h3>Why is it Conducted?</h3>
//             <p>{exam.why}</p>
//           </>
//         )}

//         {exam.pattern && (
//           <>
//             <h3>Exam Pattern</h3>
//             <ul>
//               {exam.pattern.map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>
//           </>
//         )}

//         {exam.seats && (
//           <>
//             <h3>Seat Matrix</h3>
//             <p>{exam.seats}</p>
//           </>
//         )}

//         {/* TABLES */}
//         {exam.tables &&
//           exam.tables.map((table, index) => {

//             const hasCampusGroups =
//               table.campusGroups && table.campusGroups.length > 0;

//             return (
//               <div className="exam-table" key={index}>

//                 <h3>{table.title}</h3>

//                 <div className="table-scroll">

//                   <table className="matrix-table">

//                     <thead>

//                       {/* MULTI HEADER TABLE */}
//                       {hasCampusGroups ? (
//                         <>
//                           <tr>
//                             <th rowSpan="2">Programme</th>

//                             {table.campusGroups.map((campus, i) => (
//                               <th key={i} colSpan={campus.columns.length}>
//                                 {campus.name}
//                               </th>
//                             ))}
//                           </tr>

//                           <tr>
//                             {table.campusGroups.map((campus) =>
//                               campus.columns.map((col, i) => (
//                                 <th key={campus.name + i}>{col}</th>
//                               ))
//                             )}
//                           </tr>
//                         </>
//                       ) : (
//                         <tr>
//                           {table.headers &&
//                             table.headers.map((header, i) => (
//                               <th key={i}>{header}</th>
//                             ))}
//                         </tr>
//                       )}

//                     </thead>

//                     <tbody>
//                       {table.rows &&
//                         table.rows.map((row, rIndex) => (
//                           <tr key={rIndex}>
//                             {row.map((cell, cIndex) => (
//                               <td key={cIndex}>{cell}</td>
//                             ))}
//                           </tr>
//                         ))}
//                     </tbody>

//                   </table>

//                 </div>

//               </div>
//             );
//           })}

//         {exam.facts && (
//           <div className="exam-table">
//             <h3>Quick Facts</h3>

//             <table>
//               <tbody>
//                 {exam.facts.map((fact, index) => (
//                   <tr key={index}>
//                     <td>{fact[0]}</td>
//                     <td>{fact[1]}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}

//       </section>


//       <button
//         className="purchase-btn"
//         onClick={() =>
//           navigate(`/materials?categoryId=a831697b-6251-4ecf-894b-0538c6115768`)
//         }
//       >
//         PURCHASE NOW
//       </button>
//     </div>
//   );
// };

// export default ExamPage;

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ExamHero from "../../components/examPage/ExamHero";
import examData from "../../data/examData";
import "./ExamContent.css";

const ExamPage = () => {
  const { examId } = useParams(); // 👈 from route (nid, nift etc)
  const exam = examData[examId];
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [isLoadingMaterials, setIsLoadingMaterials] = useState(false);
  const [hasMaterials, setHasMaterials] = useState(false);

  const storedUser = localStorage.getItem("user");
  const user =
    useSelector((state) => state.auth.user) ||
    (storedUser ? JSON.parse(storedUser) : null);

  // 🔥 FETCH CATEGORIES
  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoadingCategories(true);
      try {
        const res = await fetch(
          "https://api.sugaam.in/api/catalog/categories",
          { credentials: "include" }
        );

        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error("Error fetching categories:", err);
      } finally {
        setIsLoadingCategories(false);
      }
    };

    fetchCategories();
  }, []);

  // 🔥 FIND MATCHING CATEGORY
  const normalizeText = (text) =>
    (text || "")
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "")
      .trim();

  const normalizedExamId = normalizeText(examId);
  const selectedCategory = categories.find((cat) => {
    const displayName = normalizeText(cat.displayName);
    const shortName = normalizeText((cat.displayName || "").split(" ")[0]);

    return (
      displayName === normalizedExamId ||
      displayName.includes(normalizedExamId) ||
      normalizedExamId.includes(displayName) ||
      shortName === normalizedExamId ||
      normalizedExamId.includes(shortName)
    );
  });

  useEffect(() => {
    if (!selectedCategory) {
      setHasMaterials(false);
      return;
    }

    const fetchMaterials = async () => {
      setIsLoadingMaterials(true);
      try {
        const res = await fetch(
          `https://api.sugaam.in/api/catalog/exams/${selectedCategory.id}/materials`,
          { credentials: "include" }
        );
        const data = await res.json();
        setHasMaterials(Array.isArray(data) && data.length > 0);
      } catch (err) {
        console.error("Error checking materials for category:", err);
        setHasMaterials(false);
      } finally {
        setIsLoadingMaterials(false);
      }
    };

    fetchMaterials();
  }, [selectedCategory]);

  // 🔍 DEBUG (you can remove later)
  console.log("Exam ID:", examId);
  console.log("Categories:", categories);
  console.log("Selected Category:", selectedCategory);
  console.log("Has Materials:", hasMaterials);

  if (!exam) {
    return <h2 style={{ padding: "120px" }}>Exam not found</h2>;
  }

  return (
    <div>
      <ExamHero title={exam.heroTitle} />

      <section className="exam-content">
        <h2>{exam.title}</h2>

        {exam.about && (
          <>
            <h3>About the Exam</h3>
            <p>{exam.about}</p>
          </>
        )}

        {exam.why && (
          <>
            <h3>Why is it Conducted?</h3>
            <p>{exam.why}</p>
          </>
        )}

        {exam.pattern && (
          <>
            <h3>Exam Pattern</h3>
            <ul>
              {exam.pattern.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        )}

        {exam.seats && (
          <>
            <h3>Seat Matrix</h3>
            <p>{exam.seats}</p>
          </>
        )}

        {/* TABLES */}
        {exam.tables &&
          exam.tables.map((table, index) => {
            const hasCampusGroups =
              table.campusGroups && table.campusGroups.length > 0;

            return (
              <div className="exam-table" key={index}>
                <h3>{table.title}</h3>

                <div className="table-scroll">
                  <table className="matrix-table">
                    <thead>
                      {hasCampusGroups ? (
                        <>
                          <tr>
                            <th rowSpan="2">Programme</th>

                            {table.campusGroups.map((campus, i) => (
                              <th key={i} colSpan={campus.columns.length}>
                                {campus.name}
                              </th>
                            ))}
                          </tr>

                          <tr>
                            {table.campusGroups.map((campus) =>
                              campus.columns.map((col, i) => (
                                <th key={campus.name + i}>{col}</th>
                              ))
                            )}
                          </tr>
                        </>
                      ) : (
                        <tr>
                          {table.headers &&
                            table.headers.map((header, i) => (
                              <th key={i}>{header}</th>
                            ))}
                        </tr>
                      )}
                    </thead>

                    <tbody>
                      {table.rows &&
                        table.rows.map((row, rIndex) => (
                          <tr key={rIndex}>
                            {row.map((cell, cIndex) => (
                              <td key={cIndex}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}

        {exam.facts && (
          <div className="exam-table">
            <h3>Quick Facts</h3>

            <table>
              <tbody>
                {exam.facts.map((fact, index) => (
                  <tr key={index}>
                    <td>{fact[0]}</td>
                    <td>{fact[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* 🔥 UPDATED BUTTON */}
      <button
        className="purchase-btn"
        disabled={
          isLoadingCategories ||
          isLoadingMaterials ||
          !selectedCategory ||
          !hasMaterials
        }
        onClick={() => {
          if (!selectedCategory || !hasMaterials) return;

          navigate(`/materials?categoryId=${selectedCategory.id}`);
        }}
      >
        {isLoadingCategories || isLoadingMaterials
          ? "Checking materials..."
          : selectedCategory
          ? hasMaterials
            ? "STUDY MATERIAL"
            : "Materials unavailable"
          : "Materials unavailable"}
      </button>
      {!isLoadingCategories && !selectedCategory && (
        <p style={{ marginTop: "12px", color: "#d00" }}>
          Study materials are not available for this exam yet.
        </p>
      )}
      {!isLoadingCategories && selectedCategory && !hasMaterials && (
        <p style={{ marginTop: "12px", color: "#d00" }}>
          Materials are not published yet for this exam category.
        </p>
      )}
    </div>
  );
};

export default ExamPage;