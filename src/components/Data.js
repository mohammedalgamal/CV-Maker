import { Component } from "react";
import Experience from "./Experience";

export default class Data extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    };

    render() {
        const experiencesUtils = this.props.experiencesUtils;

        return (
            <div className="Data">
                <div className="General">
                    <input type="text" placeholder="First name" 
                    onChange={(e) => {this.props.changeData(e, "firstName")}}></input>

                    <input type="text" placeholder="Last name" 
                    onChange={(e) => {this.props.changeData(e, "lastName")}}></input>

                    <input type="text" placeholder="Job title" 
                    onChange={(e) => {this.props.changeData(e, "jobTitle")}}></input>

                    <input type="text" placeholder="Address"
                    onChange={(e) => {this.props.changeData(e, "address")}}></input>

                    <input type="number" placeholder="Phone number"
                    onChange={(e) => {this.props.changeData(e, "phoneNumber")}}></input>

                    <input type="email" placeholder="Email"
                    onChange={(e) => {this.props.changeData(e, "email")}}></input>

                    <textarea placeholder="Description"
                    onChange={(e) => {this.props.changeData(e, "description")}}></textarea>
                </div>

                <div className = "Experiences">
                    {experiencesUtils[0].map(exp => {
                        return <Experience key = {exp.id} id = {exp.id}
                        handleChangeInExperience = {experiencesUtils[2]}
                        deleteExperienceObject = {experiencesUtils[3]} />
                    })}
                    <button className="addExperience" onClick={() => {
                        experiencesUtils[1]()}}>Add experience</button>
                </div>

            </div>
        )
    }
}