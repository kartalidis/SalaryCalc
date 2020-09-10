
import React from 'react'
import { Fade, Card } from 'react-bootstrap'

const Result = ({result, open}) => {
  return (
    //the result of the calculation, which fades in once the user submits the form
    <div>
      <Fade in={open}>
        <Card>
          <Card.Header>
            <strong className="mr-auto">Result</strong>
          </Card.Header>
          <Card.Body>Your net income is: {result} kr</Card.Body>
        </Card>
      </Fade>
      <p></p>
    </div>
  )
}

export default Result