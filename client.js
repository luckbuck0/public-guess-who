$(document).ready(onReady)

console.log('You got this!');
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
    }

}