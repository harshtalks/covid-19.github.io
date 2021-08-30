import React from 'react'
import { CardDiv } from './Card.style'

const Card = ({cardTitle, cardStat, cardChange, color , img, text}) => {
    return (
        <CardDiv color = {color}>
            <div className="inner">
                <div>
                <h5>{cardTitle}</h5>
            <h2>{cardStat}</h2>
            <p> <span>{cardChange}</span> {text}</p>
            </div>
            <div>
                <img src={img} alt = 'icon hospitals'/>
            </div>
            </div>
        </CardDiv>
    )
}

export default Card
