import { Component } from "react";

export default class CV extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    
    render() {
        const { firstName, lastName,
             jobTitle, address, phoneNumber, email,
              description, experiences, educations } = this.props;
        return (
            <div>
                {firstName}, {lastName}, {jobTitle},
                {address}, {phoneNumber}, {email}, {description},
                {experiences}, {educations}
            </div>
        )
    }
}