import React from "react";

const education = [
  {
    degree: "MCA",
    university: "ABES Engineering College",
    year: "Oct 2025 - Aug 2027",
    detail: "GPA: 8.34",
  },
  {
    degree: "BCA",
    university: "DIT University",
    year: "Sept 2022 - May 2025",
    detail: "GPA: 8.0",
  },
  {
    degree: "High school",
    university: "DPS",
    year: " Sept 2018 - May 2019",
    detail: "GPA:9.1",
  },
];

const Education = () => {
  return (
    <div className="timeline" id="education">
      <div className="timeline-container">

        {education.map((item, index) => (
          <div key={index} className={`timeline-row ${index%2===0 ? "timeline-left" : "timeline-right" }`}>
            <div className="timeline-content active">
            <h3 className="timeline-heading">{item.degree}</h3>
              <p className="timeline-subheading">{item.university}</p>
              <p className="timeline-duration">{item.year}</p>
              <p className="timeline-detail">{item.detail}</p>
            </div>

            <div className="timeline-content" />
          </div>
        ))}
      </div>
      <div className="timneline-spine"> </div>
    </div>
  );
}

export default Education;
