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
            <div className="CV">
                {firstName}, {lastName}, {jobTitle},
                {address}, {phoneNumber}, {email}, {description}

                {experiences.map(experience => {
                    return ([experience.id, experience.position, experience.company, experience.city, experience.startDate, experience.endDate]);
                })}

                {educations.map(education => {
                    return ([education.id, education.university, education.city, education.degree, education.subject, education.startDate, education.endDate]);
                })}
            </div>
        )
    }
}