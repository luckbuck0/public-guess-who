# jQuery Guess Who

You will be creating a little pick-the-person game with HTML, CSS, and jQuery!

## Update Your GitHub Profile Picture
Before you get started writing code, please update your GitHub profile to include a picture of yourself. 

## Display Profile Pictures
On document load, append four (or more!) divs on to the DOM with jQuery, each containing an image from each member of your groups GitHub profile.  As an example, the below HTML would produce Huck's GitHub profile picture where `huckbee` is Huck's GitHub username.

```
<img src='https://github.com/huckbee.png' alt='Profile image of Huck'>
```
Consider that each div needs to *know* which person it is. **HINT:** Look into jQuery's .data method.

## Start the Game

Prompt the player to pick one of the people by displaying a randomly selected name.

![guess who](http://i36.photobucket.com/albums/e2/antoinette-prime/Screen%20Shot%202017-04-18%20at%209.24.31%20AM_zpspcfnrzsq.png)

Here is a handy function to generate a random number given a minimum and maximum.

```
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
```

## Game Logic

* If the player clicks on the correct person, give them a success message.
* Prompt the player to pick another person randomly and let them keep playing.
* If they pick the wrong person, let them know.

## Hard Mode
When the player clicks on the correct person, add a visual cue that indicates the they picked the correct person. Then change it back after 2 seconds and resume the game. You'll need to use the [built in `setTimeout()`] (https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout) function for the timing. This function waits a given amount of time and then calls a function you specify.

## Pro Mode
Add some jQuery effects or animations to your game! There are quite a few built in. [See the Docs!] (https://api.jquery.com/category/effects/)
