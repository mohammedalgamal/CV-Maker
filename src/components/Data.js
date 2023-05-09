import { Component } from "react";
import Experience from "./Experience";
import Education from "./Education";

export default class Data extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    };

    render() {
        const generalData = this.props.generalData;
        const experiencesUtils = this.props.experiencesUtils;
        const educationsUtils = this.props.educationsUtils;
        
        return (
            <div className="Data">
                <div className="General">
                    <p className="title">Personal Information</p>
                    <div className="personal myBox">
                        <input type="text" placeholder="First name" value={generalData[0]}
                        onChange={(e) => {this.props.changeData(e, "firstName")}}></input>

                        <input type="text" placeholder="Last name" value={generalData[1]}
                        onChange={(e) => {this.props.changeData(e, "lastName")}}></input>

                        <input type="text" placeholder="Job title" value={generalData[2]}
                        onChange={(e) => {this.props.changeData(e, "jobTitle")}}></input>

                        <input type="text" placeholder="Address" value={generalData[3]}
                        onChange={(e) => {this.props.changeData(e, "address")}}></input>

                        <input type="number" placeholder="Phone number" value={generalData[4]}
                        onChange={(e) => {this.props.changeData(e, "phoneNumber")}}></input>

                        <input type="email" placeholder="Email" value={generalData[5]}
                        onChange={(e) => {this.props.changeData(e, "email")}}></input>

                        <textarea placeholder="Description" value={generalData[6]}
                        onChange={(e) => {this.props.changeData(e, "description")}}></textarea>
                    </div>
                </div>

                <div className = "Experiences">
                    <p className="title">Experience</p>
                    <div className="ExperienceContent myBox">
                        {experiencesUtils[0].map(exp => {
                            return <Experience key = {exp.id} id = {exp.id}
                            handleExperienceChange = {experiencesUtils[2]}
                            deleteExperienceObject = {experiencesUtils[3]} />
                        })}
                        <button className="addExperience generalBtn" onClick={() => {
                            experiencesUtils[1]()}}>Add experience</button>
                    </div>
                </div>

                <div className = "Educations">
                    <p className="title">Education</p>
                    <div className="EducationContent myBox">
                        {educationsUtils[0].map(exp => {
                            return <Education key = {exp.id} id = {exp.id}
                            handleEducationChange = {educationsUtils[2]}
                            deleteEducationObject = {educationsUtils[3]} />
                        })}
                        <button className="addEducation generalBtn" onClick={() => {
                            educationsUtils[1]()}}>Add education</button>
                    </div>

                </div>

                <div className="Buttons myBox">
                    <button className="generalBtn PDFBtn" onClick={() => {
                        this.props.handlePDFButton();
                    }}>Generate CV as PDF</button>

                    <button className="generalBtn resetBtn" onClick={() => {
                        this.props.handleResetButton();
                    }}>Reset</button>
                </div>
            </div>
        )
    }
}