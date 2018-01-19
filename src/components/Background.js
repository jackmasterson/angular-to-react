import React, {Component} from 'react';
import {Overlay} from './Overlay';

export class Background extends Component {
    componentWillMount() {
        let small;
        if (window.innerWidth < 1100) {
            small = true;
            this.setState({imgSrc: 'shark-two'});
        } else {
            small = false;
            this.setState({imgSrc: 'shark-two-narrow'});
        }
        addEventListener('resize', () => {
            if (small) {
                small = false;
                if (window.innerWidth > 1100) {
                    this.setState({
                        imgSrc: 'shark-two-narrow'
                    });
                }
            } else {
                small = true;
                if (window.innerWidth < 1100) {
                    this.setState({
                        imgSrc: 'shark-two'
                    })
                }
            }
        });
    }
    render() {
        return (
            <div>
                <Overlay />
                <div className={this.state.imgSrc}></div>
            </div>
        )
    }
}