

const favColor = () => alert('Blue')
const favPlace = () => alert("New York City")
const favRitual = () => alert('playing bball')


const showGoals = (e) => {
    if(goals.style.display === 'none' ){
        goals.style.display = 'block'
    }else {
        goals.style.display = "none"
    }
}


const showI = (e) => {

    if(interests.style.display === 'none' ){
        interests.style.display = 'block'
    }else {
        interests.style.display = "none"
    }
}



// let interests = document.querySelector('.interests')

let color = document.querySelector('#color')
let place = document.querySelector('#place')
let ritual = document.querySelector('#ritual')


let interestsBtn = document.querySelector('.InterestLink')
let goalsBtn = document.querySelector('.goalsLink')


let interests = document.querySelector('.interests')
let goals = document.querySelector('.goals')



color.addEventListener('click', favColor)
place.addEventListener('click', favPlace)
ritual.addEventListener('click', favRitual)

interestsBtn.addEventListener('click', showI)
goalsBtn.addEventListener('click', showGoals)

