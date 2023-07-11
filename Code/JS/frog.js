let frogContainer = document.getElementById("frog-container");
let frogs = [];
let baseSize = 69;

class Frog {
    constructor(x, y, velX, velY, rSpeed, size, index) {
        this.element = document.createElement("img");
        this.element.src = "Media/Images/frog.webp";
        this.element.style.width = `${baseSize * size}px`;
        this.element.style.zIndex = `${Math.floor(index)}`;
        frogContainer.appendChild(this.element);

        this.x = x;
        this.y = y;

        this.velocityX = velX;
        this.velocityY = velY;

        this.rotation = 0;
        this.rotationSpeed = rSpeed;
        this.size = baseSize * size;
    }

    Update() {
        this.x += this.velocityX;
        this.y += this.velocityY;
        this.rotation += this.rotationSpeed;

        if(this.x < -this.size) {
            this.x = window.innerWidth + this.size;
        }
        if(this.x > window.innerWidth + this.size) {
            this.x = -this.size;
        }

        if(this.y < -this.size) {
            this.y = window.innerHeight + this.size;
        }
        if(this.y > window.innerHeight + this.size) {
            this.y = -this.size;
        }

        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
        this.element.style.transform = `translate(-50%, -50%) rotateZ(${this.rotation}deg)`;
    }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function Update() {
    frogs.forEach((frog => {
        frog.Update();
    }));


    window.requestAnimationFrame(Update);
}

window.requestAnimationFrame(Update);

function AddFrog() {
    frogs.push(new Frog(
        getRandomArbitrary(0, window.innerWidth),
        -200,
        getRandomArbitrary(-1.2, 1.2),
        getRandomArbitrary(-1.2, 1.2),
        getRandomArbitrary(-1, 1),
        getRandomArbitrary(0.75, 1.25),
        getRandomArbitrary(-100, 100)
    ));
}
