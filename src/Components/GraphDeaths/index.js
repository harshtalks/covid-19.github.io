import React, {useEffect, useCallback} from 'react'
import { Container } from '../../GlobalStyles/Container'
import { Content } from '../GraphDeaths/GraphDeaths.styles'
import Chart from 'chart.js/auto';

const GraphDeath = ({countries, setSearch}) => {

    const deathLabels = Object.keys(countries.deaths)
    const deathValues = Object.values(countries.deaths)

    const essentialJS = useCallback(
        (type,element) => {
        const ctl = document.getElementById(element)
        window.deathChart = new Chart(ctl, {
            type: type,
            data: {
                labels: deathLabels,
                datasets: [
                    {
                        data: deathValues,
                        label: 'Deaths so Far',
                        fill: true,
                        borderColor: "#c9184a",
                        backgroundColor: '#ff4d6d'
                    }
                ]
            },
            options:{
                responsive: true,
                layout: {
                    padding: 20,
                    
                },
                title: {
                    display: true,
                    text: 'World COVID-19 Death Trend'
                }
            }
            
        })
    },
        [deathLabels,deathValues]
    )
    useEffect(() => {
        if(window.deathChart instanceof Chart){
            window.deathChart.destroy();
        }
        essentialJS('line', 'LineChart-death');
    },[essentialJS])


    return (
        <Container>
            <Content>
               <div>
                    <h2>Trend - Death</h2>
                    
               </div>
                <canvas id="LineChart-death" ></canvas>
            </Content>
            
        </Container>
    )
}

export default GraphDeath
