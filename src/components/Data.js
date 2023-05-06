import { Component } from "react";

export default class Data extends Component {
    render() {
        return (
            <div className="Data">

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
        )
    }
}