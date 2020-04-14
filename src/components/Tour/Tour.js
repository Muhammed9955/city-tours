import './Tour.scss'

import React, { Component } from 'react'

export default class Tour extends Component {
    state = {
        showInfo: false
    };
    handelInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }

    render() {
        const { city, img, name, info, id } = this.props.tour;
        const { removeTour } = this.props
        return (
            <article className="tour">
                <div className="img-contianer">
                    <img width="200" src={img} alt="img" />
                    <span className="close-btn" onClick={() => { removeTour(id) }}>
                        <i className="fas fa-window-close" />
                    </span>
                </div>

                <div className="tour-info" >
                    <h3>{city}</h3>
                    <h4> {name} </h4>
                    <h5>info
                        <span onClick={this.handelInfo}>
                            <i className='fas fa-caret-square-down' />
                        </span>
                    </h5>
                    {this.state.showInfo && <p>{info} </p>}
                </div>

            </article>
        )
    }
}
