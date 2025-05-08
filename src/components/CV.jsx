

export default function CV(props){
  const { fullName, email, phone, url } = props.data

  

  const {position, companyName ,startDate, endDate, mainTask} = props.expData


  return (
    <div className="cv">
      <div className="cv-header">
        <h1>{fullName}</h1>
        <p>{email} · {phone} · <a href={url} target="_blank" rel="noreferrer">{url}</a></p>
      </div>
  
      <section className="cv-section">
        <h2>Education</h2>

        {props.edData.map((entry, index) => (
          <div className="cv-entry" key={index}>
            <p className="cv-label">{entry.schoolName}</p>
            <p>{entry.degree}</p>
            <p className="cv-dates">{entry.startDate} – {entry.endDate}</p>
          </div>
        ))}

        <h2>Experience</h2>
        <div className="cv-entry">
          <p className="cv-label">{position}</p>
          <p>{companyName}</p>
          <p className="cv-dates">{startDate} – {endDate}</p>
          <p>{mainTask}</p>
        </div>
      </section>
    </div>
  )
}