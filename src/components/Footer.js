import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const FooterObject = (footer) => {
    let foot;
    if (footer.isExternal) {
        foot = <a 
                target="_blank"
                href={footer.href}>
            <img
                className="footer-img"
                src={footer.src}/>
            <h3>{footer.title}</h3>
        </a>
    } else {
        foot = <Link to={footer.href}>
            <img
                className="footer-img"
                src={footer.src} />
            <h3>{footer.title}</h3>
        </Link>
    }
    return foot;
}

export class Footer extends Component {

    render() {
        return (
            this.props.footerData.map((footer, key) => {
                return (
                    <li className="footer-li"
                        key={key}>
                        <FooterObject {...footer}/>
                        <Link to="/"
                            className="home-button">
                            <img
                                className="house-icon"
                                src="../img/home.png" />
                        </Link>
                    </li>
                )
            })
        )
    }
}