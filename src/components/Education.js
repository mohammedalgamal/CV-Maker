import { Component } from "react";

export default class Education extends Component {
    render() {
        return (
            <div className="Education">
                <input type="text" placeholder="University" 
                onChange={(e) => {this.props.handleEducationChange(e, this.props.id, "university")}}></input>

                <input type="text" placeholder="Degree" 
                onChange={(e) => {this.props.handleEducationChange(e, this.props.id, "degree")}}></input>

                <input type="text" placeholder="City" 
                onChange={(e) => {this.props.handleEducationChange(e, this.props.id, "city")}}></input>

                <input type="text" placeholder="Subject" 
                onChange={(e) => {this.props.handleEducationChange(e, this.props.id, "subject")}}></input>

                <input type="text" placeholder="Start date"
                onChange={(e) => {this.props.handleEducationChange(e, this.props.id, "startDate")}}></input>

                <input type="text" placeholder="End date"
                onChange={(e) => {this.props.handleEducationChange(e, this.props.id, "endDate")}}></input>

                <button onClick={() => {
                    this.props.deleteEducationObject(this.props.id)
                }}>Delete Education</button>
            </div>
        );
    }
}