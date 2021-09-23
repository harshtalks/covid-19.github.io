import React from 'react'
import { CardComponent } from './CountryCard.styles'


const CountryCard = ({title, stats, swipeAvail}) => {
    return (
        <CardComponent>
            <h4>{title}</h4>
            <h2>{stats}</h2>
            {
                
                <h5 className="swipeInfo">{swipeAvail ? 'Swipe to see more Info' : 'Scroll Down for Trends'}</h5>}
        </CardComponent>
    )
}

export default CountryCard
