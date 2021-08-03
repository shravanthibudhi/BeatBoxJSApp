/**
 * 1. Create a keydown listener to track what keys are hit
 * 2. Create a Beat class to represent the beat object in utils.js
 * 3. Complete triggerBeat() to play upon the press of a,s,d,f,g,h,j,k,l
 * 4. Button pt1: Initialize color and element values
 * 5. Button pt2: Set button color upon initialization 
 * 6. Initialize all button instances in beats
 * 7. Button pt3: Complete select function to set the color and shadow of button upon pressing
 * 8. Button pt4: Call the select() function upon key press 
 * 9. Button pt5: Remove the button style upon transition end | Use deselect function
 * TODO: Add background image
 * First 3: #00fffe
 * 4,5,6,7: #FF00FF
 * 8, 9: #FFFFFF
 */

let beats = {
    "65": {
        beat: new Beat("./assets/Piano Chord 331.mp3"),
        button: new Button("#00fffe", 65)
    },
    "83": {
        beat: new Beat("./assets/Piano Chord 209.mp3"),
        button: new Button("#00fffe", 83)
    },
    "68": {
        beat: new Beat("./assets/Piano Chord 208.mp3"),
        button: new Button("#00fffe", 68)
    },
    "70": {
        beat: new Beat("./assets/Drum Sticks Hit 3.mp3"),
        button: new Button("#00fffe", 70)
    },
    "71": {
        beat: new Beat("./assets/Drum Snare Roll.mp3"),
        button: new Button("#00fffe", 71)
    },
    "72": {
        beat: new Beat("./assets/PREL Musical 57.mp3"),
        button: new Button("#00fffe", 72)
    },
    "74": {
        beat: new Beat("./assets/Cymbal Suspended 2.mp3"),
        button: new Button("#00fffe", 74)
    },
    "75": {
        beat: new Beat("./assets/Musical Compos 33.mp3"),
        button: new Button("#00fffe", 75)
    },
    "76": {
        beat: new Beat("./assets/Musical Orches 4.mp3"),
        button: new Button("#00fffe", 76)
    }
}

/**
 * Function to play the beat upon a press of key
 */
triggerBeat = (event) => {
    const keyCode = event.keyCode;
    if(keyCode in beats){
        let keyPress = beats[keyCode]
        keyPress.beat.play();
        keyPress.button.select();
    }
}

/**
 * Keydown listener to fire triggerBeat function
 */
document.addEventListener('keydown', triggerBeat)
 
