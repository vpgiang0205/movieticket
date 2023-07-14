import React, { Component } from 'react'
import Seats from './Seats'
import './moviecss.css'

export default class MovieSeat extends Component {
    render() {
        return (
            <div>
                <div className="container py-5">
                    <div>
                        <h1 className='mb-5 text-center text-white'>MOVIE SEAT SELECTION</h1>
                    </div>
                    <div className="main">
                           <Seats/>
                    </div>
                </div>
            </div>
        )
    }
}
