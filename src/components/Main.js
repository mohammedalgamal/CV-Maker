import { Component } from "react";
import Data from "./Data";
import CV from "./CV";

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
            experiences: [],
            educations: [],
        };
    }

    changeData = (e, data) => {

        this.setState({
            [data]: e.target.value
        })
    }
    
    render() {
        const { firstName, lastName, jobTitle,
             address, phoneNumber, email,
              description, experiences, educations } = this.state;
        return (
            <div className="Main">
                <Data changeData = {this.changeData}></Data>
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