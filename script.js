let n = 16;
const container = document.querySelector('.container');
//const width = container.offsetWidth;

function createGrid(n){
    let width = container.offsetWidth / n;
    for(let i = 1; i <= n * n; i++){
        const div = document.createElement('div');

        div.style.width = `${width}px`;
        div.style.height = `${width}px`;
        div.classList.add('gridElement');
        container.appendChild(div);
    }
}

createGrid(n);
