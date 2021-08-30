import React from 'react'
import { Container } from '../../GlobalStyles/Container'
import Card from '../Card'
import { Section } from './Cards.styles'
import { formatNumbers, findIncremet } from '../../Tools/helpers'

const Cards = ({data}) => {
    const caseChanged = findIncremet(data.todayCases, data.cases);
    const DeathChanged = findIncremet(data.todayDeaths, data.deaths);
    const recoveredChanged = findIncremet(data.todayRecovered, data.recovered);
    const activeChanged = findIncremet(data.recovered+data.deaths, data.cases);
    return (
        <Container>
            <Section>
            <Card cardTitle = "total cases" cardStat = {formatNumbers(data.cases)} 
            cardChange = {caseChanged} color = '#e63946'
            img = {'https://img.icons8.com/color/90/000000/hospital.png'}
            text = {'Increase from yesterday'}
            />
            <Card cardTitle = "total deaths" cardStat = {formatNumbers(data.deaths)} 
            cardChange = {DeathChanged}   color = '#2a9d8f'
            img = "https://img.icons8.com/metro/52/fa314a/death.png"
            text = {'Increase from yesterday'}
            />
            <Card cardTitle = "total recovery" cardStat = {formatNumbers(data.recovered)} 
            cardChange = {recoveredChanged}  color = '#4361ee'
            img = "https://img.icons8.com/color/96/000000/recovery.png"
            text = {'Increase from yesterday'}
            />
            <Card cardTitle = "active cases" cardStat = {formatNumbers(data.active)} 
            cardChange = {activeChanged}  color = '#52b788'
            img = "https://img.icons8.com/ios-glyphs/90/fa314a/bed.png"
            text = {'Decrease from the beggining'}
            />
        </Section>
        </Container>
    )
}

export default Cards
