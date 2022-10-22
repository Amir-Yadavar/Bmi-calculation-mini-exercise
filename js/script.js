let $ = document
let rangeWeight = $.getElementById('weight')
let rangeHeight = $.getElementById('height')
let spanWeight = $.getElementById('weight-val')
let spanHeight = $.getElementById('height-val')
let p = $.getElementById('result')
let pCategory = $.getElementById('category')
let figure = $.getElementsByTagName('figure')

function bmiCalculator() {
    let weightUser = rangeWeight.value
    let heightUser = rangeHeight.value

    let bmivalue = (weightUser / (Math.pow(heightUser / 100, 2))).toFixed(1)
    

    spanWeight.innerHTML = weightUser + ' kg'
    spanHeight.innerHTML = heightUser + ' cm'

    p.innerHTML = bmivalue

    if (bmivalue < 18.5) {
        pCategory.innerHTML = 'Under Weight'
        pCategory.style.color = '#ffc44d'
        p.style.color = '#ffc44d'
        figure[0].style.opacity = '1'
        figure[0].style.visibility = 'visible'
        figure[1].style.opacity = '0'
        figure[1].style.visibility = 'hidden'
        figure[2].style.opacity = '0'
        figure[2].style.visibility = 'hidden'
        figure[3].style.opacity = '0'
        figure[3].style.visibility = 'hidden'

    } else if (bmivalue >= 18.5 && bmivalue <= 24.9) {
        pCategory.innerHTML = 'Normal Weight'
        pCategory.style.color = '#0be881'
        p.style.color = '#0be881'
        figure[1].style.opacity = '1'
        figure[1].style.visibility = 'visible'
        figure[0].style.opacity = '0'
        figure[0].style.visibility = 'hidden'
        figure[2].style.opacity = '0'
        figure[2].style.visibility = 'hidden'
        figure[3].style.opacity = '0'
        figure[3].style.visibility = 'hidden'

    } else if (bmivalue >= 25 && bmivalue < 29.9) {
        pCategory.innerHTML = 'Over Weight'
        pCategory.style.color = "#ff884d"
        p.style.color = '#ff884d'
        figure[2].style.opacity = '1'
        figure[2].style.visibility = 'visible'
        figure[1].style.opacity = '0'
        figure[1].style.visibility = 'hidden'
        figure[0].style.opacity = '0'
        figure[0].style.visibility = 'hidden'
        figure[3].style.opacity = '0'
        figure[3].style.visibility = 'hidden'
    } else {
        pCategory.innerHTML = 'Fat'
        pCategory.style.color = "#ff5e4d"
        p.style.color = '#ff5e4d'
        figure[3].style.opacity = '1'
        figure[3].style.visibility = 'visible'
        figure[1].style.opacity = '0'
        figure[1].style.visibility = 'hidden'
        figure[2].style.opacity = '0'
        figure[2].style.visibility = 'hidden'
        figure[0].style.opacity = '0'
        figure[0].style.visibility = 'hidden'
    }
}

rangeWeight.addEventListener('input', bmiCalculator)
rangeHeight.addEventListener('input', bmiCalculator)


