import React, {Component} from 'react';
import {Footer} from './Footer';

export class Works extends Component {
    componentWillMount() {
        this.setState({
            footerData: [{
                title: 'Chat In the Box',
                src: '../img/chat.png',
                href: 'https://chat-in-the-box.herokuapp.com/',
                isExternal: true,
            }, {
                title: 'Star Wars API',
                src: '../img/star-wars.png',
                href: 'https://jackmasterson.github.io/starwars/',
                isExternal: true,
            }],
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