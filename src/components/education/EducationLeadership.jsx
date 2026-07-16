export function EducationLeadership() {
  const qualifications = [
    {
      icon: "🎓",
      title: "Undergraduate",
      degree: "Bachelor of Engineering",
      field: "Electronics & Communication Engineering",
      school: "Madras Institute of Technology (MIT)",
      university: "Anna University",
      period: "2022 – 2026",
      achievement: "CGPA: 9.13 / 10",
    },
    {
      icon: "🏫",
      title: "Higher Secondary (HSC)",
      degree: "Biology with Mathematics (PCMB)",
      field: "",
      school: "Bharathi Matric Higher Secondary School",
      university: "",
      period: "2021 – 2022",
      achievement: "Percentage: 97.17%",
    },
    {
      icon: "📘",
      title: "Secondary School (SSLC)",
      degree: "",
      field: "",
      school: "Bharathi Matric Higher Secondary School",
      university: "",
      period: "2019 – 2020",
      achievement: "Percentage: 99.4%",
    },
  ];

  return (
    <div className="education-timeline">
      {qualifications.map((item) => (
        <div className="education-step" key={item.title}>
          <div className="education-icon" aria-hidden="true">
            {item.icon}
          </div>
          <div className="education-card">
            <div className="education-card-top">
              <span className="education-label">{item.title}</span>
              {item.period ? <span className="education-period">{item.period}</span> : null}
            </div>
            {item.degree ? <h4>{item.degree}</h4> : null}
            {item.field ? <p>{item.field}</p> : null}
            {item.school ? <p className="education-school">{item.school}</p> : null}
            {item.university ? <p className="education-university">{item.university}</p> : null}
            <div className="education-achievement">{item.achievement}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
