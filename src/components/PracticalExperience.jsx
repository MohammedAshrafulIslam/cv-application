



export default function PracticalExperience({
  position,
  companyName,
  startDate,
  endDate,
  mainTask,
  onCNG,
  onEdit,
  onSubmit,
  isEditing
}){
 return(
  
   <div className="practical-exp">
     <h3>Experience</h3>
    { isEditing ? (
     <form className="practical-exp-form" onSubmit={onSubmit}>
       
        <input
        name="position"
        type="text"
        placeholder="Position"
        value={position}
        onChange={onCNG}
       />

      <input
        name="companyName"
        type="text"
        placeholder="Company Name"
        value={companyName}
        onChange={onCNG}
      />
      <input
       type="date" 
       name="startDate" 
       placeholder="Start Date (e.g. 12/05/2000)"
       value={startDate}
       onChange={onCNG}
      />

      <input
       type="date" 
       name="endDate" 
       placeholder="End Date (e.g. 12/05/2005)"
       value={endDate}
       onChange={onCNG}
      />

      <input
       type="text" 
       name="mainTask" 
       placeholder="Main Task"
       value={mainTask}
       onChange={onCNG}
      />
      <button type="submit">Submit</button>
      </form>
        ) : (
          <div>
          <p><strong>Position</strong> {position}</p>
          <p><strong>Company Name:</strong> {companyName}</p>
          <p>{startDate} – {endDate}</p>
          <p><strong>Main Task:</strong> {mainTask}</p>
          <button onClick={onEdit}>Edit</button>
        </div>
        )
      }
   </div>
 )
}