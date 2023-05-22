import { useState } from "react";
import React from 'react';
import Data from "./Data";
import CV from "./CV";
import uniqid from "uniqid";
import "../styles/Main.css";

export default function Main() {
  const initialState = 
  {
    firstName: "",
    lastName: "",
    jobTitle: "",
    address: "",
    phoneNumber: "",
    email: "",
    description: "",
    experiences: [
      {
        id: uniqid(),
        position: "",
        company: "",
        city: "",
        startDate: "",
        endDate: "",
      },
    ],
    educations: [
      {
        id: uniqid(),
        university: "",
        degree: "",
        city: "",
        subject: "",
        startDate: "",
        endDate: "",
      },
    ],
  }
  
  const [stateData, setStateData] = useState(initialState);

  // General Info change function
  const changeData = (e, data) => {
    setStateData((prevState) => {
      return {
      ...prevState,
      [data]: e.target.value,
  }})};

  // Experience Info utils
  const addExperienceObject = () => {
    setStateData((prevState) => {
      return {
        ...prevState,
        experiences: prevState.experiences.concat(
          {
            id: uniqid(),
            position: "",
            company: "",
            city: "",
            startDate: "",
            endDate: "",
      })}
    });
  };

  const handleExperienceChange = (e, id, data) => {
    setStateData((prevState) => {
      return {
        ...prevState,
        experiences: prevState.experiences.map((experience) => {
          if (experience.id === id) {
            experience[data] = e.target.value;
            return experience;
          }
          return experience;
        })
      }
    })
  };

  const deleteExperienceObject = (id) => {
    setStateData((prevState) => {
      return {
        ...prevState,
        experiences: prevState.experiences.filter(
          (experience) => experience.id !== id
    )}});
  };

  // Education Info utils
  const addEducationObject = () => {
    setStateData((prevState) => {
      return {
        ...prevState,
        educations: prevState.educations.concat(
          {
            id: uniqid(),
            university: "",
            degree: "",
            city: "",
            subject: "",
            startDate: "",
            endDate: "",
      })}
    });
  };

  const handleEducationChange = (e, id, data) => {
    setStateData((prevState) => {
      return {
        ...prevState,
        educations: prevState.educations.map((education) => {
          if (education.id === id) {
            education[data] = e.target.value;
            return education;
          }
          return education;
        })
      }
    })
  };

  const deleteEducationObject = (id) => {
    setStateData((prevState) => {
      return {
        ...prevState,
        educations: prevState.educations.filter(
          (education) => education.id !== id
    )}});
  };

  // Buttons functions
  const handlePDFButton = () => {
    return "";
  };

  const handleResetButton = () => {
    setStateData(initialState);
  };


  return (
      <div className="Main">
        <Data
          // General Info
          firstName={stateData.firstName}
          lastName={stateData.lastName}
          jobTitle={stateData.jobTitle}
          address={stateData.address}
          phoneNumber={stateData.phoneNumber}
          email={stateData.email}
          description={stateData.description}
          changeData={changeData}
          
          // Experience Info
          experiences={stateData.experiences}
          addExperienceObject={addExperienceObject}
          handleExperienceChange={handleExperienceChange}
          deleteExperienceObject={deleteExperienceObject}

          // Education Info
          educations={stateData.educations}
          addEducationObject={addEducationObject}
          handleEducationChange={handleEducationChange}
          deleteEducationObject={deleteEducationObject}

          // Buttons Functions
          handlePDFButton={handlePDFButton}  
          handleResetButton={handleResetButton}
        ></Data>
        <CV
          firstName={stateData.firstName}
          lastName={stateData.lastName}
          jobTitle={stateData.jobTitle}
          address={stateData.address}
          phoneNumber={stateData.phoneNumber}
          email={stateData.email}
          description={stateData.description}
          experiences={stateData.experiences}
          educations={stateData.educations}
        ></CV>
      </div>
  );
}