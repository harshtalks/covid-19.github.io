import React from 'react'
import { Container } from '../../GlobalStyles/Container'
import { Row } from './Loader.styles'

const Loader = () => {
    return (
        <Container>
        <Row>
            <div className="sonar-wrapper">
              <div className="sonar-emitter">
                 <div className="sonar-wave"></div>
              </div>
            </div>
       </Row>

        </Container>
    )
}

export default Loader
