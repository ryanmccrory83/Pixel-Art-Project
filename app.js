//Your code goes here
const canvas = document.querySelector('.canvas')
let currentColor

function createCanvas() {
    for (let i = 0; i < 486; i++) {
        const cell = document.createElement('div')
        cell.classList.add('cell')

        cell.addEventListener('click', (event => {
            event.target.style.backgroundColor = currentColor
        }))

        canvas.appendChild(cell)
    }
}

const colorPalette = document.querySelector('.color-palette')

const colors = ['firebrick', 'dodgerblue', 'goldenrod', 'wheat', 'chartreuse', 'salmon', 'white','red','green','orange','purple','black']

function createColorPalette (){
    colors.forEach(color => {
        const brush = document.createElement('div')
        brush.classList.add('brush')
        brush.style.backgroundColor = color
        brush.style.border = "thin solid black"; 
        brush.dataset.color = color

        brush.addEventListener('click', (event => {
            currentColor = event.target.dataset.color
            console.log(currentColor)
            for(let i = 0; i < document.querySelectorAll('.brush').length; i++){
                document.querySelectorAll('.brush')[i].style.border = "thin solid black";
            }
            event.target.style.border = "thick solid black"; 
        }))

        colorPalette.appendChild(brush)
    })
}
createCanvas();
createColorPalette();