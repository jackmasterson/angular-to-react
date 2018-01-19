import React, {Component} from 'react';
import {Footer} from './Footer';

export class Works extends Component {
    componentWillMount() {
        this.setState({
            footerData: [{
                title: 'Neighborhood Map',
                src: '../img/map.png',
                href: 'https://rawgit.com/neighborhoodmap'
            }, {
                title: 'Neighborhood Map',
                src: '../img/map.png',
                href: 'https://rawgit.com/neighborhoodmap'
            }, {
                title: 'Neighborhood Map',
                src: '../img/map.png',
                href: 'https://rawgit.com/neighborhoodmap'
            }, {
                title: 'Neighborhood Map',
                src: '../img/map.png',
                href: 'https://rawgit.com/neighborhoodmap'
            }, {
                title: 'Neighborhood Map',
                src: '../img/map.png',
                href: 'https://rawgit.com/neighborhoodmap'
            }, {
                title: 'Neighborhood Map',
                src: '../img/map.png',
                href: 'https://rawgit.com/neighborhoodmap'
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