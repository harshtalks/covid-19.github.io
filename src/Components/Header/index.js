import React from 'react'
import { Container } from '../../GlobalStyles/Container'
import { Section, Content} from './Header.style'

const Header = () => {
    return (
        <Container>
            <Section>
                <Content>
                    <div>
                    <h1>COVID-19 Tracker</h1>
                    <p>Covid 19 Live Information</p>
                    </div>
                   
                </Content>
            </Section>
        </Container>
    )
}

export default Header
