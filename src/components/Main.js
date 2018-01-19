import React, {Component} from 'react';
import { Footer } from './Footer';
import { Background } from './Background';

export class Main extends Component {
    componentWillMount() {
        this.setState({
            footerData: [{
                title: 'Links',
                src: '../img/icon.png',
                href: '/links'
            }, {
                title: 'This Week\'s Works',
                src: '../img/works.jpg',
                href: '/works'
            }, {
                title: 'Resume',
                src: '../img/write.png',
                href: '/resume'
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
