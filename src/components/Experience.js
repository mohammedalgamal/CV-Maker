import React from 'react';

export default function Experience(props) {
    return (
      <div className="Experience myBox">
        <input
          type="text"
          placeholder="Position"
          onChange={(e) => {
            props.handleExperienceChange(e, props.id, "position");
          }}
        ></input>

        <input
          type="text"
          placeholder="Company"
          onChange={(e) => {
            props.handleExperienceChange(e, props.id, "company");
          }}
        ></input>

        <input
          type="text"
          placeholder="City"
          onChange={(e) => {
            props.handleExperienceChange(e, props.id, "city");
          }}
        ></input>

        <input
          type="text"
          placeholder="Start date"
          onChange={(e) => {
            props.handleExperienceChange(e, props.id, "startDate");
          }}
        ></input>

        <input
          type="text"
          placeholder="End date"
          onChange={(e) => {
            props.handleExperienceChange(e, props.id, "endDate");
          }}
        ></input>

        <button
          className="generalBtn deleteBtn"
          onClick={() => {
            props.deleteExperienceObject(props.id);
          }}
        >
          Delete Experience
        </button>
      </div>
    );
  }
