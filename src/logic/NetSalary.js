import GrossSalary from './GrossSalary'
import SalaryTax from './SalaryTax'

//calculation of total salary after taxes
const NetSalary = (input) => {
  const netSalary = GrossSalary(input) - SalaryTax(GrossSalary(input), input)

  return(netSalary)
}

export default NetSalary