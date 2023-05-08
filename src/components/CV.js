import { Component } from "react";

export default class CV extends Component {
    render() {
        const { firstName, lastName,
             jobTitle, address, phoneNumber, email,
              description, experiences, educations } = this.props;

        return (
            <div className="CV">
                <div className="upper">
                    <p className="name">{firstName} {lastName}</p>
                    <p className="job">{jobTitle}</p>
                </div>

                <div className="lower">
                    <div className="main">
                        
                        <div className="description">
                            <p className="title">Description</p>
                            {description}
                        </div>

                        <div className="experienceCV">
                            <p className="title">Experience</p>
                            {experiences.map(experience => {
                            return (
                                <div className="experienceDiv arrayData">
                                    <div className="left">
                                        <div className="dates">
                                            {experience.startDate} - {experience.endDate}
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="upper">
                                            {experience.position}
                                        </div>
                                        <div className="lower">
                                            {experience.company}, {experience.city}
                                        </div>
                                    </div>
                                </div>
                            );
                            })}
                        </div>

                        <div className="educationCV">
                            <p className="title">Education</p>
                            {educations.map(education => {
                            return (                                
                                <div className="educationDiv arrayData">
                                    <div className="left">
                                        <div className="dates">
                                            {education.startDate} - {education.endDate}
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="upper">
                                            {education.university}, {education.city}
                                        </div>
                                        <div className="lower">
                                            Degree: {education.degree}
                                            <br></br>
                                            Subject: {education.subject}
                                        </div>
                                    </div>
                                </div>
                        );
                            })}
                        </div>

                    </div>

                    <div className="extra">
                        <div className="personalDetails">
                            <p className="title">Personal Details</p>
                            <div className="info">
                                <p className="sideTitle">Address</p>
                                {address}
                            </div>
                            <div className="info">
                                <p className="sideTitle">Phone Number</p>
                                {phoneNumber}
                            </div>
                            <div className="info">
                                <p className="sideTitle">Email</p>
                                {email}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}