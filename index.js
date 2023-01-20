let buttons = document.querySelectorAll('button');
console.log(buttons)
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        handleSound(e.target.innerHTML);
        handleAnimation(e.target.innerHTML);
    });
})

document.addEventListener("keydown", (e) => {
    handleSound(e.key);
    handleAnimation(e.key);

})





function handleSound(sound) {
    switch (sound) {
        case "w":
            let w = new Audio('./sounds/tom-1.mp3');
            w.play();
            break;

        case "a":
            let a = new Audio('./sounds/tom-2.mp3');
            a.play();
            break;
        case "s":
            let s = new Audio('./sounds/tom-3.mp3');
            s.play();
            break;
        case "d":
            let d = new Audio('./sounds/tom-4.mp3');
            d.play();
            break;
        case "j":
            let j = new Audio('./sounds/snare.mp3');
            j.play();
            break;
        case "k":
            let k = new Audio('./sounds/crash.mp3');
            k.play();
            break;
        case "l":
            let l = new Audio('./sounds/kick-bass.mp3');
            l.play();
            break;


        default:
            break;
    }
}
function handleAnimation(selected) {
    let button = document.querySelector(`.${selected}`);
    button.classList.add('pressed');
    setTimeout(() => {
        button.classList.remove('pressed');
    }, 100);
}


