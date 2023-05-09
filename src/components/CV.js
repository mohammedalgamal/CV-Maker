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

                <div className="main">
                    
                    <div className="descriptionCv myDiv">
                        <p className="title">Description</p>
                        {description}
                    </div>

                    <p className="title">Experience</p>
                    <div className="experienceCV myDiv">
                        {experiences.map(experience => {
                        return (
                            <div className="experienceDiv arrayData">
                                <div className="left">
                                    <div className="upperRight sideTitle">
                                        {experience.position}
                                    </div>
                                    <div className="lowerRight info">
                                        {experience.company}, {experience.city}
                                    </div>
                                </div>
                                
                                <div className="right">
                                    <div className="dates sideTitle">
                                        {experience.startDate} - {experience.endDate}
                                    </div>
                                </div>

                            </div>
                        );
                        })}
                    </div>

                    <p className="title">Education</p>
                    <div className="educationCV myDiv">
                        {educations.map(education => {
                        return (                                
                            <div className="educationDiv arrayData">
                                <div className="left">
                                    <div className="upperRight sideTitle">
                                        {education.university}, {education.city}
                                    </div>
                                    <div className="lowerRight info">
                                        Degree: {education.degree}
                                        <br></br>
                                        Subject: {education.subject}
                                    </div>
                                </div>

                                <div className="right">
                                    <div className="dates sideTitle">
                                        {education.startDate} - {education.endDate}
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
                        <div className="info myDiv">
                            <p className="sideTitle">Address</p>
                            {address}
                        </div>
                        <div className="info myDiv">
                            <p className="sideTitle">Phone Number</p>
                            {phoneNumber}
                        </div>
                        <div className="info myDiv">
                            <p className="sideTitle">Email</p>
                            {email}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}