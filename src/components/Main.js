import { Component } from "react";
import Data from "./Data";
import CV from "./CV";
import uniqid from "uniqid";

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            jobTitle: "",
            address: "",
            phoneNumber: "",
            email: "",
            description: "",
            experiences: [{
                id: uniqid(),
                position: "",
                company: "", 
                city: "",
                startDate: "",
                endDate: "",
            }],
            educations: [{
                id: uniqid(),
                university: "",
                degree: "",
                city: "",
                subject: "",
                startDate: "",
                endDate: "",
            }],
        };
    }

    changeData = (e, data) => {

        this.setState({
            [data]: e.target.value
        });
    };

    addExperienceObject = () => {
        this.setState({
            experiences: this.state.experiences.concat({
                id: uniqid(),
                position: "",
                company: "", 
                city: "",
                startDate: "",
                endDate: "",
            })
        });
    };

    deleteExperienceObject = (id) => {
        this.setState({
            experiences: this.state.experiences.filter(experience => experience.id !== id)
        })
    }

    handleExperienceChange = (e, id, data) => {
        this.setState({
            experiences: this.state.experiences.map(experience => {
                if (experience.id === id) {
                    experience[data] = e.target.value;
                    return experience;
                };

                return experience;
            })
        });
    };

    addEducationObject = () => {
        this.setState({
            educations: this.state.educations.concat({
                id: uniqid(),
                university: "",
                degree: "",
                city: "",
                subject: "",
                startDate: "",
                endDate: "",
            })
        });
    };

    deleteEducationObject = (id) => {
        this.setState({
            educations: this.state.educations.filter(education => education.id !== id)
        })
    }

    handleEducationChange = (e, id, data) => {
        this.setState({
            educations: this.state.educations.map(education => {
                if (education.id === id) {
                    education[data] = e.target.value;
                    return education;
                };

                return education;
            })
        });
    };

    handleResetButton = () => {
        this.setState({
            firstName: "",
            lastName: "",
            jobTitle: "",
            address: "",
            phoneNumber: "",
            email: "",
            description: "",
            experiences: [{
                id: uniqid(),
                position: "",
                company: "", 
                city: "",
                startDate: "",
                endDate: "",
            }],
            educations: [{
                id: uniqid(),
                university: "",
                degree: "",
                city: "",
                subject: "",
                startDate: "",
                endDate: "",
            }],
        });
    };
    
    render() {
        const { firstName, lastName, jobTitle,
             address, phoneNumber, email,
              description, experiences, educations } = this.state;

        const generalData = [firstName, lastName, jobTitle,
             address, phoneNumber, email, description];
            
        const experiencesUtils = [experiences, this.addExperienceObject,
             this.handleExperienceChange, this.deleteExperienceObject];

        const educationsUtils = [educations, this.addEducationObject,
             this.handleEducationChange, this.deleteEducationObject];

        return (
            <div className="Main">
                <Data generalData = {generalData}
                experiencesUtils = {experiencesUtils} educationsUtils = {educationsUtils}
                 changeData = {this.changeData} handleResetButton = {this.handleResetButton}
                 ></Data>
                <CV 
                firstName = {firstName} 
                lastName = {lastName} 
                jobTitle = {jobTitle}
                address = {address}
                phoneNumber = {phoneNumber}
                email = {email}
                description = {description}
                experiences = {experiences}
                educations = {educations}
                ></CV>
            </div>
        )
    }
}