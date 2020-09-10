import React, { useState } from 'react'
import NetSalary from './logic/NetSalary'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'

const App = () => {
  const [experienceValue, setExperienceValue] = React.useState(0)
  const [jobValue, setJobValue] = useState('Programmer')
  const [regionValue, setRegionValue] = useState('stockholm')
  const [yearValue, setYearValue] = useState('2019')
  const [result, setResult] = useState('')
  const [open, setOpen] = useState(false)
  
  //event handler for submitting the form
  const handleSubmit = (event) => {
    event.preventDefault()
    const formObject = {
      experience: experienceValue,
      job: jobValue,
      region: regionValue,
      year: yearValue
    }
    let netSalary = NetSalary(formObject)
    setResult(netSalary)
    setOpen(true)
  }

  return (
    <div>
      <Header />
      <Content 
        handleSubmit={handleSubmit} 
        experienceValue={experienceValue} setExperienceValue={setExperienceValue} 
        jobValue={jobValue} setJobValue={setJobValue} 
        regionValue={regionValue} setRegionValue={setRegionValue} 
        yearValue={yearValue} setYearValue={setYearValue}
        result={result} open={open}
      />
      <Footer />
    </div>
  )
}

export default App