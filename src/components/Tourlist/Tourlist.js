import './Tourlist.scss';
import Tour from '../Tour/Tour';

import React, { Component } from 'react';

import { tourData } from '../tourData'

export default class Tourlist extends Component {
    state = {
        tours: tourData
    }

    removeTour = id => {
        const { tours } = this.state.tours;
        const sortedTours = tours.filter(tour => tour.id !== id);
        this.setState({
            tours: sortedTours
        })
    }

    render() {
        const { tours } = this.state;
        console.log(tours);
        return (
            <section className="tourList">
                {
                    tours.map(tour => {
                        return (<Tour key={tour.id} tour={tour} removeTour={this.removeTour} />)
                    })
                }
            </section>
        )
    }
}


