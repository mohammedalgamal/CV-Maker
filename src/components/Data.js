import React from 'react';
import Experience from "./Experience";
import Education from "./Education";

export default function Data(props) {
    return (
      <div className="Data">
        <div className="General">
          <p className="title">Personal Information</p>
          <div className="personal myBox">
            <input
              type="text"
              placeholder="First name"
              value={props.firstName}
              onChange={(e) => {
                props.changeData(e, "firstName");
              }}
            ></input>

            <input
              type="text"
              placeholder="Last name"
              value={props.lastName}
              onChange={(e) => {
                props.changeData(e, "lastName");
              }}
            ></input>

            <input
              type="text"
              placeholder="Job title"
              value={props.jobTitle}
              onChange={(e) => {
                props.changeData(e, "jobTitle");
              }}
            ></input>

            <input
              type="text"
              placeholder="Address"
              value={props.address}
              onChange={(e) => {
                props.changeData(e, "address");
              }}
            ></input>

            <input
              type="number"
              placeholder="Phone number"
              value={props.phoneNumber}
              onChange={(e) => {
                props.changeData(e, "phoneNumber");
              }}
            ></input>

            <input
              type="email"
              placeholder="Email"
              value={props.email}
              onChange={(e) => {
                props.changeData(e, "email");
              }}
            ></input>

            <textarea
              placeholder="Description"
              value={props.description}
              onChange={(e) => {
                props.changeData(e, "description");
              }}
            ></textarea>
          </div>
        </div>

        <div className="Experiences">
          <p className="title">Experience</p>
          <div className="ExperienceContent myBox">
            {props.experiences.map((exp) => {
              return (
                <Experience
                  key={exp.id}
                  id={exp.id}
                  handleExperienceChange={props.handleExperienceChange}
                  deleteExperienceObject={props.deleteExperienceObject}
                />
              );
            })}
            <button
              className="addExperience generalBtn"
              onClick={() => {
                props.addExperienceObject();
              }}
            >
              Add experience
            </button>
          </div>
        </div>

        <div className="Educations">
          <p className="title">Education</p>
          <div className="EducationContent myBox">
            {props.educations.map((exp) => {
              return (
                <Education
                  key={exp.id}
                  id={exp.id}
                  handleEducationChange={props.handleEducationChange}
                  deleteEducationObject={props.deleteEducationObject}
                />
              );
            })}
            <button
              className="addEducation generalBtn"
              onClick={() => {
                props.addEducationObject();
              }}
            >
              Add education
            </button>
          </div>
        </div>

        <div className="Buttons myBox">
          <button
            className="generalBtn resetBtn"
            onClick={() => {
              props.handleResetButton();
            }}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
