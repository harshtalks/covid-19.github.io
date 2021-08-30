import React, {useCallback, useEffect} from 'react'
import { Container } from '../../GlobalStyles/Container'
import { Content } from './GraphCases.style'
import Chart from 'chart.js/auto';
import PickBar from '../PickBar';

const Graph = ({countries, setSearch}) => {


    const labels = Object.keys(countries.cases)
    const actualValues = Object.values(countries.cases)

    const essentialJS = useCallback(
        (type,element) => {
        const ctl = document.getElementById(element)
        window.casesChart = new Chart(ctl, {
            type: type,
            data: {
                labels: labels,
                datasets: [
                    {
                        data: actualValues,
                        label: 'Cases so Far',
                        fill: true,
                        borderColor: "#00b4d8",
                        backgroundColor: '#48cae4'
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
                    text: 'World COVID-19 Case Trend'
                }
            }
            
        })
        
    },
    [labels, actualValues]
    )
    
    useEffect(() => {
         if(window.casesChart instanceof Chart){
            window.casesChart.destroy();
        }
        essentialJS('line', 'LineChart');
       
    },[essentialJS])

    return (
        <Container>
            <Content>
               <div>
                    <div className = "textBar">
                        <h2>Trend - Cases</h2>
                        <p>Historical DATA since 22 January. Initially set to world wide data. <br/>
                        Choose country using the option bar in right side.
                        </p>
                    </div>
                    <PickBar setSearch = {setSearch}/>
               </div>
                <canvas id="LineChart" ></canvas>
            </Content>
            
        </Container>
    )
}

export default Graph
