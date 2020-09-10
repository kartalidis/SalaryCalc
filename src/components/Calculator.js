import React from 'react'
import RangeSlider from 'react-bootstrap-range-slider'
import { Form, Button, ButtonGroup, ToggleButton} from 'react-bootstrap'
import jobs from '../data/Jobs'
import baseTaxTable from '../data/BaseTaxTable'

const Calculator = ({handleSubmit, experienceValue, setExperienceValue, jobValue, setJobValue, regionValue, setRegionValue, yearValue, setYearValue}) => {
  const regions = [
    { name: 'Stockholm', value: 'stockholm' },
    { name: 'Gothenburg', value: 'gothenburg' }
  ]
  
  return (
    //the form where the user fills their info to calculate the net salary
    <Form onSubmit = {handleSubmit}>
      <Form.Group>
        <Form.Label as="legend">Years of experience</Form.Label>
        <RangeSlider
          value = {experienceValue}
          variant="secondary"
          onChange={e => setExperienceValue(e.target.value)}
        />        
      </Form.Group>
      <Form.Group>
        <Form.Label as="legend">I am a(n):</Form.Label>
        <ButtonGroup toggle>
          {jobs.map((job, id) => (
            <ToggleButton
              key={id}
              type="radio"
              variant="secondary"
              name="radio"
              value={job.name}
              checked={jobValue === job.name}
              onChange={(e) => setJobValue(e.currentTarget.value)}
            >
              {job.name}
            </ToggleButton>))}
        </ButtonGroup>
      </Form.Group>
      <Form.Group>
        <Form.Label as="legend">I live in:</Form.Label>
        <Form.Control as="select" onChange={(e) => setRegionValue(e.currentTarget.value)}>
          {regions.map((region, id) => (
            <option
              key={id}
              name="region"
              value={region.value}
            >
              {region.name}
            </option>))}
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label as="legend">Income year:</Form.Label>
        <ButtonGroup toggle>
          {baseTaxTable.map((table, id) => (
            <ToggleButton
              key={id}
              type="radio"
              variant="secondary"
              name="radio"
              value={table.year}
              checked={yearValue === table.year}
              onChange={(e) => setYearValue(e.currentTarget.value)}
            >
              {table.year}
            </ToggleButton>))}
        </ButtonGroup>
      </Form.Group>
      <Button variant="primary" size="lg" type="submit">
                  Calculate
      </Button>
      <p></p>
    </Form>
  )
}

export default Calculator