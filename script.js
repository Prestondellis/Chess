'use strict'

let squares = document.getElementsByClassName('squares')
let color = 0
let rowCount = 0 
for(let i = 0; i < squares.length; i++){
    if(color === 1){
        squares[i].classList.add('green')
        color--
    } else {
        squares[i].classList.add('cream')
        color++
    }
    rowCount++
    if(rowCount === 8){
        color === 1 ? color = 0 : color = 1
        rowCount = 0
    }
}

const a1 = document.querySelector('#a1')
const b1 = document.querySelector('#b1')
const c1 = document.querySelector('#c1')
const d1 = document.querySelector('#d1')
const e1 = document.querySelector('#e1')
const f1 = document.querySelector('#f1')
const g1 = document.querySelector('#g1')
const h1 = document.querySelector('#h1')
const a2 = document.querySelector('#a2')
const b2 = document.querySelector('#b2')
const c2 = document.querySelector('#c2')
const d2 = document.querySelector('#d2')
const e2 = document.querySelector('#e2')
const f2 = document.querySelector('#f2')
const g2 = document.querySelector('#g2')
const h2 = document.querySelector('#h2')
const a3 = document.querySelector('#a3')
const b3 = document.querySelector('#b3')
const c3 = document.querySelector('#c3')
const d3 = document.querySelector('#d3')
const e3 = document.querySelector('#e3')
const f3 = document.querySelector('#f3')
const g3 = document.querySelector('#g3')
const h3 = document.querySelector('#h3')
const a4 = document.querySelector('#a4')
const b4 = document.querySelector('#b4')
const c4 = document.querySelector('#c4')
const d4 = document.querySelector('#d4')
const e4 = document.querySelector('#e4')
const f4 = document.querySelector('#f4')
const g4 = document.querySelector('#g4')
const h4 = document.querySelector('#h4')
const a5 = document.querySelector('#a5')
const b5 = document.querySelector('#b5')
const c5 = document.querySelector('#c5')
const d5 = document.querySelector('#d5')
const e5 = document.querySelector('#e5')
const f5 = document.querySelector('#f5')
const g5 = document.querySelector('#g5')
const h5 = document.querySelector('#h5')
const a6 = document.querySelector('#a6')
const b6 = document.querySelector('#b6')
const c6 = document.querySelector('#c6')
const d6 = document.querySelector('#d6')
const e6 = document.querySelector('#e6')
const f6 = document.querySelector('#f6')
const g6 = document.querySelector('#g6')
const h6 = document.querySelector('#h6')
const a7 = document.querySelector('#a7')
const b7 = document.querySelector('#b7')
const c7 = document.querySelector('#c7')
const d7 = document.querySelector('#d7')
const e7 = document.querySelector('#e7')
const f7 = document.querySelector('#f7')
const g7 = document.querySelector('#g7')
const h7 = document.querySelector('#h7')
const a8 = document.querySelector('#a8')
const b8 = document.querySelector('#b8')
const c8 = document.querySelector('#c8')
const d8 = document.querySelector('#d8')
const e8 = document.querySelector('#e8')
const f8 = document.querySelector('#f8')
const g8 = document.querySelector('#g8')
const h8 = document.querySelector('#h8')

const board = [
    [a1, b1, c1, d1, e1, f1, g1, h1],
    [a2, b2, c2, d2, e2, f2, g2, h2],
    [a3, b3, c3, d3, e3, f3, g3, h3],
    [a4, b4, c4, d4, e4, f4, g4, h4],
    [a5, b5, c5, d5, e5, f5, g5, h5],
    [a6, b6, c6, d6, e6, f6, g6, h6],
    [a7, b7, c7, d7, e7, f7, g7, h7],
    [a8, b8, c8, d8, e8, f8, g8, h8], ]


function highlight(peice, square){
    console.log(peice)
    console.log(square)
    if(peice[1] === 'R'){
        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[i].length; j++){
                console.log(board[i][j].id)
            }
        }
    }
}

a1.addEventListener('click', function() {
    let peice = this.src.split('/')
    highlight(peice[peice.length - 1], this.id)
})

a2.addEventListener('click', function(){
    findpeice(this)
})
