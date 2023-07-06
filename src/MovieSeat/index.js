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
                    <div className="main row">
                        <div className='main__Content col-6'>
                            <div className="txt-center">

                                <p id="notification" />

                                <div className="screen bg-warning text-center">
                                    <h2 className="wthree">Screen this way</h2>
                                </div>


                                <table id="seatsBlock" className='w-100 my-3'>
                                    <thead>
                                        <tr>
                                            <td />
                                            <td>1</td>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                            <td />
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                            <td>9</td>
                                            <td>10</td>
                                            <td>11</td>
                                            <td>12</td>
                                        </tr>
                                    </thead>
                                    
                                    <Seats /> {/* Hiển thị ghế theo từng dòng */}
                                </table>


                                <div className='text-center'>
                                    <button type='button' className='btn btn-dark'>Confirm Selection</button>
                                </div>
                                <ul className="d-flex">
                                    <li className="smallBox greenBox">Selected Seat</li>
                                    <li className="smallBox redBox">Reserved Seat</li>
                                    <li className="smallBox emptyBox">Empty Seat</li>
                                </ul>
                            </div>

                        </div>

                        <div className='main__Content col-6'>
                            <div className="text-center">
                                <h3 className=''>Selected Seats </h3>
                                <table className="Displaytable w3ls-table" width="100%">
                                    <tbody>
                                        <tr>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Action</th>
                                        </tr>
                                        <tr>
                                            <td>
                                                <textarea id="nameDisplay" defaultValue={"Ten"} />
                                            </td>
                                            <td>
                                                <textarea id="NumberDisplay" defaultValue={"Gia tien"} />
                                            </td>
                                            <td>
                                                <textarea id="seatsDisplay" defaultValue={"X button"} />
                                            </td>
                                        </tr>
                                        <tr className='bg-warning'>
                                            <td>
                                                Total
                                            </td>
                                            <td></td>
                                            <td>00</td>
                                        </tr>
                                    </tbody></table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
