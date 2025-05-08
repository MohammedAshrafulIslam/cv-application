
export default function EducationalExperience({
  schoolName, degree, startDate, endDate, onCNG
}){

 return(

   <div className="form-block">
     
     <form className="ed-exp-form">
      
      <input
        name="schoolName"
        type="text"
        placeholder="School Name"
        value={schoolName}
        onChange={onCNG}
       />

      <input
        name="degree"
        type="text"
        placeholder="Degree"
        value={degree}
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


     
     
     </form>
   </div>
 )
}