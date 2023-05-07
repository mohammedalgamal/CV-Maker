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
                position: "a",
                company: "b", 
                city: "c",
                startDate: "d",
                endDate: "e",
            }],
            educations: [],
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
    
    render() {
        const { firstName, lastName, jobTitle,
             address, phoneNumber, email,
              description, experiences, educations } = this.state;

        const experiencesUtils = [experiences, this.addExperienceObject,
             this.handleExperienceChange, this.deleteExperienceObject];

        return (
            <div className="Main">
                <Data experiencesUtils = {experiencesUtils} changeData = {this.changeData}></Data>
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