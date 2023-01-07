//FOR MOUSE CLICK;
// document.querySelector(".w").classList.add("pressed");
for (var i = 0; i < document.getElementsByClassName("drum").length; i++) {
    document.getElementsByClassName("drum")[i].addEventListener("click", function () {
        splash(this.innerHTML);
        animate(this.innerHTML.toLowerCase());
    });
    // document.querySelector("button").addEventListener("click",ts);
}

// FOR KEYBOARD PRESSED;

document.addEventListener("keypress", function (e) {
    splash(e.key);
    // console.log(e.key);
    animate(e.key.toLowerCase());
});

function animate(k){
    console.log(k);
    var box = document.querySelector("."+k);
    box.classList.add("pressed");
    setTimeout(function () {
        box.classList.remove("pressed");
    },100)

}

function splash(k) {
    switch (k) {
        case 'W':
            var drum1 = new Audio("sounds/tom-1.mp3");
            drum1.play();
            break;
        case 'A':
            var drum1 = new Audio("sounds/tom-2.mp3");
            drum1.play();
            break;
        case 'S':
            var drum1 = new Audio("sounds/tom-3.mp3");
            drum1.play();
            break;
        case 'D':
            var drum1 = new Audio("sounds/tom-4.mp3");
            drum1.play();
            break;
        case 'J':
            var drum1 = new Audio("sounds/snare.mp3");
            drum1.play();
            break;
        case 'K':
            var drum1 = new Audio("sounds/crash.mp3");
            drum1.play();
            break;
        case 'L':
            var drum1 = new Audio("sounds/kick-bass.mp3");
            drum1.play();
            break;
            case 'w':
                var drum1 = new Audio("sounds/tom-1.mp3");
                drum1.play();
                break;
            case 'a':
                var drum1 = new Audio("sounds/tom-2.mp3");
                drum1.play();
                break;
            case 's':
                var drum1 = new Audio("sounds/tom-3.mp3");
                drum1.play();
                break;
            case 'd':
                var drum1 = new Audio("sounds/tom-4.mp3");
                drum1.play();
                break;
            case 'j':
                var drum1 = new Audio("sounds/snare.mp3");
                drum1.play();
                break;
            case 'k':
                var drum1 = new Audio("sounds/crash.mp3");
                drum1.play();
                break;
            case 'l':
                var drum1 = new Audio("sounds/kick-bass.mp3");
                drum1.play();
                break;
        default: alert("Make sure you press the right button");
    }


}

