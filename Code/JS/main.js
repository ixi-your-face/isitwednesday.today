let main = document.getElementsByClassName("main-container")[0];


function removeClasses() {
    main.classList.remove("flip-yes");
    main.classList.remove("flip-no");
}

function flipYES() {
    removeClasses()

    main.classList.add("flip-yes");

    setTimeout(() => {
        for(let i=0; i < 20; i++) {
            AddFrog();
        }
    }, 4000)
}

function flipNO() {
    removeClasses()
    main.classList.add("flip-no");
}

const date = new Date();
let day = date.getDay();

if(day === 3) {
    flipYES();
} else {
    flipNO();
}
