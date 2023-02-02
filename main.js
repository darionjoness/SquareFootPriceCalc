const materialOptions = document.querySelectorAll('#select option')
const squareFt = document.querySelector('.inputSquareFt input')
const btn = document.querySelector('.btn')

// Create an array of material objects
const materials = [
    {
        name: 'vinyl',
        priceSqFt: 0.20
    },
    {
        name: 'brick',
        priceSqFt: 0.30
    },
    {
        name: 'concrete',
        priceSqFt: 0.20
    },
    {
        name: 'wood',
        priceSqFt: 0.25
    },
    {
        name: 'roof',
        priceSqFt: 0.35
    }
]


// Add event listener to the button that runs a getEstimate function
btn.addEventListener('click', calcEstimate)

// Create get Estimate function
function calcEstimate(){
    // Loop through each materialOption
    materialOptions.forEach(option => {
        // Check if the option is selected
        if(option.selected){
            // If true loop through the materials array
            materials.forEach(material => {
                // Find the option value that matches the material name
                if(option.value === material.name){
                    // Create a variable holindg the priceSqFt
                    const currentPrice = material.priceSqFt
                    // Sets currentSqFt to the return of getInput function
                    const currentSqFt = getInput()
                    // Sets finalEstimate too the return of getFinalEstimate
                    const finalEstimate = getFinalEstimate(currentPrice, currentSqFt)
                    // Set innerHTML of the finalPrice to the finalEstimate
                    document.querySelector('#finalPrice').innerHTML = `$${finalEstimate.toFixed(2)}`
                }
            })
        }
    })
}

function getInput(){
    // Get the value of the squareFt input
    const squareFeet = squareFt.value;

    // Check if squareFeet is not a number
    if(isNaN(squareFeet)){
        // Create a p element called newP
        const newP = document.createElement('p')
        // Add a classList to the newP
        newP.classList.add('errorMessage')
        // Set the innerText to the newP
        newP.innerText = 'Type a number!'
        // Append the newP to the inputSquareFt div
        document.querySelector('.inputSquareFt').appendChild(newP)
        // After 1.5 seconds clear the errorMessage
        setTimeout(() => {
            document.querySelector('.errorMessage').remove()
        }, 1500)
    }
    // Return squareFeet
    return squareFeet
}

// Create getFinalEstimate function
function getFinalEstimate(currentPrice, currentSqFt){
    // Create estimate variable with the value of the currentPrice multiplied by the currentSqFt
    const estimate = (currentPrice * currentSqFt)
    // Return estimate
    return estimate
}







