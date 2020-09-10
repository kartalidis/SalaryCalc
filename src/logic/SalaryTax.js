import baseTaxTable from '../data/BaseTaxTable';

//calculation of base tax
const BaseTax = (salary, baseTaxPercentage) => {
    let baseTax = salary * baseTaxPercentage / 100
    console.log('basetax ' + baseTax)
    console.log('salary ' + salary)
    return(baseTax)
}

//calculation of additional tax, with low bracket for salaries between 36 and 45k and high bracket for 45k+
const ExtraTax = (salary, highTax) => {
    const lowBracketPercentage = 50
    const highBracketPercentage = 70

    let extraTax

    if (highTax === false) {
        extraTax = salary * lowBracketPercentage / 100
    } else {
        extraTax = salary * highBracketPercentage / 100
    }

    console.log('extratax ' + extraTax)
    return(extraTax)
} 

//calculation of total salary tax
const SalaryTax = (salary, input) => {
    const lowBracket = 35999
    const highBracket = 45000

    const selectedRegion = input.region
    const taxYear = baseTaxTable.find(taxYear => taxYear.year === input.year)

    console.log(selectedRegion)
    const baseTaxPercentage = taxYear.[selectedRegion]
    
    let salaryTax

    //calculation of possible additional tax based on the salary bracket
    if (salary > highBracket) {
        salaryTax = BaseTax(salary, baseTaxPercentage) + ExtraTax(highBracket - lowBracket, false) + ExtraTax(salary - highBracket, true)
    } else if (salary > lowBracket) {
        salaryTax = BaseTax(salary, baseTaxPercentage) + ExtraTax(salary - lowBracket, false)
    } else {
        salaryTax = BaseTax(salary, baseTaxPercentage)
    }

    return(salaryTax)
}


export default SalaryTax;