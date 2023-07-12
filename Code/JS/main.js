let main = document.getElementsByClassName("main-container")[0];
let clicker = document.getElementById("landing");

function removeClasses() {
    main.classList.remove("flip-yes");
    main.classList.remove("flip-no");
}

function PlayAudio(path) {
    let audio = new Audio(path);
    audio.play();
}

function flipYES() {
    removeClasses()

    main.classList.add("flip-yes");

    setTimeout(() => {
        for(let i=0; i < 20; i++) {
            AddFrog();
        }

        for(let i=149; i > -1; i--) {
            let div = document.createElement("div");
            div.classList.add(`confetti-${i}`);

            document.getElementsByClassName("confetti-wrapper")[0].appendChild(div);
        }

        let duration = 500;
        if(Math.random() > 0.5) {
            PlayAudio('Media/Audio/airhorn.mp3');

            duration = 3000;
        } else {
            PlayAudio('Media/Audio/partyblower.mp3');

            duration = 1000;
        }


        setTimeout(() => {
            if(Math.random() < 0.98) {
                PlayAudio('Media/Audio/iwmd-full.mp3');
            } else {
                PlayAudio('Media/Audio/iwmd-dance.mp3');
            }
        }, duration)

    }, 4000)
}

function flipNO() {
    removeClasses()
    main.classList.add("flip-no");
}

const date = new Date();
let day = date.getDay();


clicker.addEventListener("click", () => {
    setTimeout(() => {
        clicker.style.opacity = "0";
        document.getElementById("no").style.opacity = "100%";
    }, 500)

    if(day === 3) {
        flipYES();
    } else {
        flipNO();
    }
})

document.body.addEventListener('touchstart', function(e){ e.preventDefault(); });