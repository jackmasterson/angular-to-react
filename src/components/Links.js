import React, { Component } from 'react';
import {Footer} from './Footer';

export class Links extends Component {
    componentWillMount() {
        this.setState({
            footerData: [{
                title: 'Github',
                src: '../img/github.png',
                href: 'https://github.com/jackmasterson',
                isExternal: true,
            }, {
                title: 'LinkedIn',
                src: '../img/linkedin.png',
                href: 'http://linkedin.com/in/mastersonjack',
                isExternal: true,
            }]
        })
    }
    render() {
        return (
            <ul className="footer-ul">
                <Footer footerData={this.state.footerData}/>
            </ul>
        )
    }
}