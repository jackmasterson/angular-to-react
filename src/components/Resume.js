import React, { Component } from 'react';
import {Footer} from './Footer';

export class Resume extends Component {
    componentWillMount() {
        this.setState({
            footerData: [{
                title: 'Resume',
                src: '../img/resume.png',
                href: 'https://docs.google.com/document/d/1xVepoiTiLho8S9t3YDlXPND1DV0em3ayakRHMEJwGb4/edit?usp=sharing',
                isExternal: true,
            }]
        })
    }
    render() {
        return (
            <ul className="footer-ul">
                <Footer footerData={this.state.footerData} />
            </ul>
        )
    }
}