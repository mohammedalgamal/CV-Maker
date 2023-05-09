import { Component } from "react";
import "../styles/Footer.css";
import logo from "../Images/github-mark-white.png";

export default class Footer extends Component {
    render() {
        return (
            <div className = "Footer">
                <div className = "text">
                    Copyright © mohammedalgamal 
                </div>
                <a href="https://github.com/mohammedalgamal/CV-Maker">
                    <img alt="GitHub Logo" src={logo}></img>
                </a>
            </div>
        )
    }
}