import React from 'react'
import { CardComponent } from './CountryCard.styles'


const CountryCard = ({title, stats}) => {
    return (
        <CardComponent>
            <h4>{title}</h4>
            <h2>{stats}</h2>
            <h5 className="swipeInfo">Swipe to see more Info</h5>
        </CardComponent>
    )
}

export default CountryCard
