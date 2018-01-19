import React, {Component} from 'react';

export class Overlay extends Component {
    render() {
        return (
            <div className="overlay">
                <ul className="overlay-emphasis">
                    <li className="overlay-li">
                        <h3>Jack Masterson</h3>
                    </li>
                </ul>
                <ul className="overlay-non">
                    <li className="overlay-li">
                        <h4>JavaScript Developer</h4>
                    </li>
                    <li className="overlay-li">
                        <h4>New York, NY</h4>
                    </li>
                </ul>
            </div>
        )
    }
}