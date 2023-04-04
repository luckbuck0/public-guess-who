$(document).ready(onReady)
console.log('You got this!');
let names=[]
console.log('Here are all the available people:', people);

function onReady(){
    console.log('Youre doing great');
    displayProfiles()
}

function displayProfiles(){
    console.log('Nice getting there');
    for (let individual of people) {
        $('#profileDisplay').append(`
        <span>${individual.image} <span>
        `)
        names.push(individual.name)
        
        let randomName= names[randomNumber(0,9)]
        console.log('this',randomName);
        $('.clickme').text(randomName)
  }
}


function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
console.log('this', names); 