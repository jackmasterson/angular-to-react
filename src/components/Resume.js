import React, { Component } from 'react';
import {Footer} from './Footer';

export class Resume extends Component {
    componentWillMount() {
        this.setState({
            footerData: [{
                title: 'Resume',
                src: '../img/no-image.png',
                href: 'resume.html',
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