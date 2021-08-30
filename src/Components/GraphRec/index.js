import React, {useEffect, useCallback} from 'react'
import { Container } from '../../GlobalStyles/Container'
import { Content } from '../GraphRec/GraphRec.styles'
import Chart from 'chart.js/auto';
const GraphRec = ({countries, setSearch}) => {

    const recLabels = Object.keys(countries.recovered)
    const recValues = Object.values(countries.recovered)

    const essentialJS = useCallback(
        (type,element) => {
        const ctl = document.getElementById(element)
        window.newChart = new Chart(ctl, {
            type: type,
            data: {
                labels: recLabels,
                datasets: [
                    {
                        data: recValues,
                        label: 'Recoveries so Far',
                        fill: true,
                        borderColor: "#38b000",
                        backgroundColor: '#70e000'
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
                    text: 'World COVID-19 Recovery Trend'
                }
            }
            
        })
        
    },
        [recLabels,recValues],
    )
    useEffect(() => {
        if(window.newChart instanceof Chart){
            window.newChart.destroy();
        }
        essentialJS('line', 'LineChart-rec');
    },[essentialJS])
    return (
        <Container>
            <Content>
               <div>
                    <h2>Trend - Recovery</h2>  
               </div>
                <canvas id="LineChart-rec" ></canvas>
            </Content>
            
        </Container>
    )
}

export default GraphRec
