"use client";

import { useEffect, useState } from "react";
import { FaGraduationCap, FaTimes } from "react-icons/fa";
import { education } from "@/data/site";

export default function EducationSheet() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(event) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button className="btn btn-ghost education-button" type="button" onClick={() => setOpen(true)}>
        <FaGraduationCap aria-hidden="true" /> Education
      </button>

      {open && (
        <div className="sheet-layer" role="presentation" onMouseDown={() => setOpen(false)}>
          <section
            className="bottom-sheet"
            role="dialog"
            aria-modal="true"
            aria-labelledby="education-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="sheet-handle" />
            <div className="sheet-head">
              <div>
                <p className="kicker">🎓 Academic path</p>
                <h2 id="education-title">Education and current degrees</h2>
              </div>
              <button className="icon-button" type="button" onClick={() => setOpen(false)} aria-label="Close education panel">
                <FaTimes aria-hidden="true" />
              </button>
            </div>
            <ol className="timeline">
              {education.map((item, index) => (
                <li key={item.stage}>
                  <span className="timeline-index">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <strong>{item.stage}</strong>
                    <p>{item.note}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </div>
      )}
    </>
  );
}
