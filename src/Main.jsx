import React from 'react'
import data from './data'

export default function Main(props) {
    console.log(data)
    return (
            <div className='card'>
                <img src={props.coverImg} alt="mount fuji-pics" className = "card--img"/>
                <div className='card-rightside'>
                    <div className = "card-top-content">
                        <div className='card-loc'>
                            <img src={require('./images/location icon.png')} alt="location img"/>
                            <h3>{props.country}</h3>
                        </div>
                        <a href="https://www.google.com/maps/">view on Google Maps</a>
                    </div>
                        <h2>{props.location}</h2>
                        <div className = "description">
                            <h3 className='card-date'><b>12 Jan, 2021 - 24 Jan, 2021</b></h3>
                            <p className='loc-details'>{props.description}</p>
                        </div>
                    </div>
            </div>
    )
}
