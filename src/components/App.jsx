import React from "react"
import GeneralInfo from "./GeneralInfo.jsx"
import EducationalExperience from "./EducationalExperience.jsx"
import PracticalExperience from "./PracticalExperience.jsx"
import CV from "./CV.jsx"
import '../styles/App.css';



export default function App(){
 //make a state for getting information here then pass it to respective components 
 // then create a event handler when there is change update the states by calling 
 // that function from the child component then the App(parent component) re renders.
 
/*
   1) App stores the state (generalInfo)
   2) App passes it to GeneralInfo as data
   3) GeneralInfo reads the data and updates via onChange
   4) All updates bubble up to App, which re-renders with the new state

  **keep the input names in all the forms same as the initial value names of state!!
*/



// state for general information
  const [genInfo, setGenInfo] = React.useState(
    {
     fullName: "",
     email: "",
     phone: "",
     url: ""
    }
  )
 
  function handleGenInfo(e){
   const { name, value } = e.target;
   setGenInfo( (prev) => ({
       ...prev,
       [name] : value
   }))
  }

  const [isEditingGenInfo, setIsEditingGenInfo] = React.useState(true)

  function handleGeneralSubmit(e){
        e.preventDefault();
        setIsEditingGenInfo(false)
  }

  function handleGeneralEdit(e){
    e.preventDefault();
    setIsEditingGenInfo(true)
  }





//state for education section

  const [edInfo, setEdInfo] = React.useState([
   {
    schoolName: "",
    degree: "",
    startDate: "",
    endDate: ""
   }]
  )
   function handleEdInfo(index, event){
    const {name, value} = event.target;

    // to keep track of which form we are updating we will use index with map()
    // if i == index go into this index of our array and change this object.
    const updated = edInfo.map(
      (entry, i) =>
        i === index ? {
          ...entry,
        [name]: value
        } : entry

    )

    setEdInfo(updated);
  
   }

   // now to create another section if the user wants to add new university/college

   function addEducationEntry(){
     // take the previous objects of the array and add another object with the fields, this is what the code is doing, remember we are storing the fields in and object and the objects inside an array.
     setEdInfo(
       (prev) => [
         ...prev,
         {schoolName: "",
         degree: "",
         startDate: "",
         endDate: ""}
       ]
       )
   }
      const [isEditingEducation, setIsEditingEducation] = React.useState(true)

        function handleEducationEdit(e){
          e.preventDefault()
          setIsEditingEducation(true)
        }

        function handleEducationSubmit(e){
          e.preventDefault()
          setIsEditingEducation(false)
        }




   // state for practical experience section

   const [experience, setExperience] = React.useState(
    {
     position: "",
     companyName: "",
     startDate: "",
     endDate: "",
     mainTask: ""
    }
   )

   function handleExperience(event){
     const{name, value} = event.target

     setExperience(
      (prevExp) => (
       {
        ...prevExp,
        [name] : value
       }
      )
     )
   }


   const [isEditingExperience, setIsEditingExperience] = React.useState(true)

   function handleExperienceSubmit(e){
     e.preventDefault()
     setIsEditingExperience(false)
   }

   function handleExperienceEdit(e){
     e.preventDefault()
     setIsEditingExperience(true)
   }


 // note: the onChange in generalinfo is just a variable it is not the same as the one in html. you can name it onCNG as well doesnt matter but make sure you use OnCNG in the child component (where you are passing it)
 // also genInfo is passed as an nested object so you have to console log and see in this case inside generalInfo component it went as data so inside props object it was data object so to access the properties like fullName you have to do props.data.fullName.
 // for the next components we will pass individual values e.g. fullName={getInfo.fullName} to explore the other options.


 return(
   <main className="app-container">
     
    <div className="form-sections">
      
      <GeneralInfo data={genInfo} onChange={handleGenInfo} isEditing={isEditingGenInfo}  onSubmit={handleGeneralSubmit} onEdit={handleGeneralEdit} 
      />


      {/* so we map into the array with objects then in the array each index has the objects that we want to pass as props so we fetch that and pass it using map */}
      {/* about the onCNG => now as we are not dealing with just one form,
      we have to specify which entry is getting updated,
        so we have to pass both the index (which entry changed)
          and what the new input is (event) */}

          <div className="ed-exp">
            <h3>Education</h3>

            {  isEditingEducation ? (
            
            <>

            {edInfo.map((entry, index) => (

             
              <EducationalExperience
                key={index}
                index={index}
                schoolName={entry.schoolName}
                degree={entry.degree}
                startDate={entry.startDate}
                endDate={entry.endDate}
                onCNG={(event) => handleEdInfo(index, event)}
              />
              
            
            ))}
             <button onClick={handleEducationSubmit}>Submit</button>
             <button onClick={addEducationEntry}>Add Education</button>
            </>
              ): 

            ( edInfo.map((entry, index) => (
                  <div key={index} className="form-block">
                    <p><strong>School:</strong> {entry.schoolName}</p>
                    <p><strong>Degree:</strong> {entry.schoolName}</p>
                    <p><strong>Start:</strong> {entry.startDate}</p>
                    <p><strong>End:</strong> {entry.endDate}</p>
                    <button onClick={handleEducationEdit}>Edit</button>
                  </div>


              ))
            )
          }
            

            
          </div>

      <PracticalExperience
       position={experience.position}
       companyName = {experience.companyName}
       startDate = {experience.startDate}
       endDate = {experience.endDate}
       mainTask = {experience.mainTask}
       onCNG = {handleExperience}
       isEditing={isEditingExperience}
       onSubmit={handleExperienceSubmit}
       onEdit={handleExperienceEdit}       
      />
      
     </div>  
     <CV data={genInfo} edData={edInfo}  expData={experience}/>
   </main>
 )
}