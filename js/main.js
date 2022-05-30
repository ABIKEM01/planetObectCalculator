const planets = [
    {
        name:'Earth',
        gravity: 9.8
    },
    {
        name:'Mercury',
        gravity: 3.61
    },
    {
        name:'Venus',
        gravity: 8.83
    },
    {
        name:'Mars',
        gravity: 3.75
    },
    {
        name:'Jupiter',
        gravity: 26.0
    },
    {
        name:'Saturn',
        gravity: 11.2
    },
    {
        name:'Uranus',
        gravity: 10.5
    },
    {
        name:'Neptune',
        gravity: 13.3
    },
    {
        name:'Pluto',
        gravity: 0.61
    },
    {
        name:'Moon',
        gravity:1.62
    }
]
function button(){
    let mass = document.getElementById('inputId').value
    let selectdPlanet = document.getElementById('planetId').value
    for(let i=0; i<planets.length; i++){
        if(planets[i].name.toLowerCase() == selectdPlanet.toLowerCase()){
            let answer = planets[i].gravity * mass;
            let myResult = document.getElementById('resultContainer').innerHTML =
             ` 
             <p id="result">The weight of the object on ${selectdPlanet}</p> 
             <div  id="answerimage">${answer.toFixed(2)}N</div>
             
             `
            
            return myResult 

        }
    }
    return alert(document.getElementById('answerimage').innerHTML =`invalid`)
}

let alertMe = "welcome to me"
function alert1(alertMe){
    return alertMe
}

let alert2 = (alertMe)=>{
    return alertMe
}


alert1(alertMe)