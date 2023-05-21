import React from 'react';

export default function Education(props) {
    return (
      <div className="Education myBox">
        <input
          type="text"
          placeholder="University"
          onChange={(e) => {
            props.handleEducationChange(e, props.id, "university");
          }}
        ></input>

        <input
          type="text"
          placeholder="Degree"
          onChange={(e) => {
            props.handleEducationChange(e, props.id, "degree");
          }}
        ></input>

        <input
          type="text"
          placeholder="City"
          onChange={(e) => {
            props.handleEducationChange(e, props.id, "city");
          }}
        ></input>

        <input
          type="text"
          placeholder="Subject"
          onChange={(e) => {
            props.handleEducationChange(e, props.id, "subject");
          }}
        ></input>

        <input
          type="text"
          placeholder="Start date"
          onChange={(e) => {
            props.handleEducationChange(e, props.id, "startDate");
          }}
        ></input>

        <input
          type="text"
          placeholder="End date"
          onChange={(e) => {
            props.handleEducationChange(e, props.id, "endDate");
          }}
        ></input>

        <button
          className="generalBtn deleteBtn"
          onClick={() => {
            props.deleteEducationObject(props.id);
          }}
        >
          Delete Education
        </button>
      </div>
    );
};
