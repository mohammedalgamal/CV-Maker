import { Component } from "react";

export default class Experience extends Component {
    render() {
        return (
            <div className="Experience">
                <input type="text" placeholder="Position" 
                onChange={(e) => {this.props.handleExperienceChange(e, this.props.id, "position")}}></input>

                <input type="text" placeholder="Company" 
                onChange={(e) => {this.props.handleExperienceChange(e, this.props.id, "company")}}></input>

                <input type="text" placeholder="City" 
                onChange={(e) => {this.props.handleExperienceChange(e, this.props.id, "city")}}></input>

                <input type="date" placeholder="Start date"
                onChange={(e) => {this.props.handleExperienceChange(e, this.props.id, "startDate")}}></input>

                <input type="date" placeholder="End date"
                onChange={(e) => {this.props.handleExperienceChange(e, this.props.id, "endDate")}}></input>

                <button onClick={() => {
                    this.props.deleteExperienceObject(this.props.id)
                }}>Delete Experience</button>
            </div>
        );
    }
}