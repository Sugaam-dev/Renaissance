import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ExamHero from "../../components/examPage/ExamHero";
import examData from "../../data/examData";
import "./ExamContent.css";

const ExamPage = () => {
  const { examId } = useParams();
  const exam = examData[examId];
  const navigate = useNavigate();

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

                      {/* MULTI HEADER TABLE */}
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

      <button
        className="purchase-btn"
        onClick={() => navigate(`/auth?exam=${examId}`)}
      >
        PURCHASE NOW
      </button>
    </div>
  );
};

export default ExamPage;