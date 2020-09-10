import jobs from '../data/Jobs'

//calculation of additional salary based on years of experience
const ExperienceRaise = (baseSalary, yearsOfExperience) => {
    
  let raisePercentage

  if (yearsOfExperience > 10) {
    raisePercentage = 60
  } else if (yearsOfExperience > 7) {
    raisePercentage = 40
  } else if (yearsOfExperience > 3) {
    raisePercentage = 20
  } else {
    raisePercentage = 0
  }

  let experienceRaise = baseSalary * raisePercentage / 100

  return(experienceRaise)
}

//calculation of total salary before taxes
const GrossSalary = (input) => {
  const job = jobs.find(job => job.name === input.job)
  const baseSalary = job.salary
  const yearsOfExperience = input.experience
  let grossSalary =  baseSalary + ExperienceRaise(baseSalary, yearsOfExperience)
    
  return(grossSalary)
}

export default GrossSalary