import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Calculator from './Calculator'
import Result from './Result'
import Info from './Info'

const Content = ({handleSubmit, experienceValue, setExperienceValue, jobValue, setJobValue, regionValue,setRegionValue, yearValue, setYearValue,result, open}) => {
  return (
      //responsive layout for the content, aka calculator, result and instruction text
    <Container>
      <Row>
        <Col md>
          <Calculator
            handleSubmit={handleSubmit} 
            experienceValue={experienceValue} setExperienceValue={setExperienceValue} 
            jobValue={jobValue} setJobValue={setJobValue} 
            regionValue={regionValue} setRegionValue={setRegionValue} 
            yearValue={yearValue} setYearValue={setYearValue} />
          <Result result={result} open={open} />
        </Col>
        <Col md>
          <Info/>
        </Col>
      </Row>
    </Container>
  )
}

export default Content