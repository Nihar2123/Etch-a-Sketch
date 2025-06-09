let n = 16;
const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
let lightness = 100;
//const width = container.offsetWidth;

function createGrid(n){
    lightness = 110;
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
    let width = container.offsetWidth / n;
    for(let i = 1; i <= n * n; i++){
        const div = document.createElement('div');

        div.style.width = `${width}px`;
        div.style.height = `${width}px`;
        div.classList.add('gridElement');
        container.appendChild(div);

        div.addEventListener('mouseenter', () =>{
            if(lightness > 0){lightness -= 10;}
            let color = getRandomColor();
            div.style.backgroundColor = `hsl(${color}, 100%, ${lightness}%)`;
        });
        div.addEventListener('mouseleave', () =>{
            div.style.backgroundColor = 'white';
        });
    }
}

function getRandomColor(){
    // const r = Math.floor(Math.random() * 255);
    // const g = Math.floor(Math.random() * 255);
    // const b = Math.floor(Math.random() * 255);
    // return `rgb(${r}, ${g}, ${b})`;
    return Math.floor(Math.random()*359);
}

//createGrid(n);
btn.addEventListener('click', function(){
    let x = prompt('Enter a number (1 - 100)');
    x = +x;
    if(x >= 1 && x <= 100){
        n = x;
        createGrid(n);
    }
    else
        alert('Invalid number');
});
