import React, {Component} from 'react';
import {Overlay} from './Overlay';

export class Background extends Component {
    componentWillMount() {
        let small;
        if (window.innerWidth < 1100) {
            small = true;
            this.setState({imgSrc: '../img/shark-two.png'});
        } else {
            small = false;
            this.setState({imgSrc: '../img/shark-two-narrow.png'});
        }
        addEventListener('resize', () => {
            console.log('resizing');
            if (small) {
                small = false;
                if (window.innerWidth > 1100) {
                    this.setState({
                        imgSrc: '../img/shark-two-narrow.png'
                    });
                }
            } else {
                if (window.innerWidth < 1100) {
                    small = true;
                    this.setState({
                        imgSrc: '../img/shark-two.png'
                    })
                }
            }
        });
    }
    render() {
        return (
            <div>
                <Overlay />
                <img 
                    className="background-img"
                    src={this.state.imgSrc}
                />
            </div>
        )
    }
}