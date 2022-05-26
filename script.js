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
const body = document.querySelector('#board')
const message = document.querySelector('#message')

const em = 'http://127.0.0.1:5500/1x/Em.png';
const cir = 'http://127.0.0.1:5500/1x/cir.png';
const bP = 'http://127.0.0.1:5500/1x/bP.png';
const bR = 'http://127.0.0.1:5500/1x/bR.png';
const bH = 'http://127.0.0.1:5500/1x/bH.png';
const bB = 'http://127.0.0.1:5500/1x/bB.png';
const bQ = 'http://127.0.0.1:5500/1x/bQ.png';
const bK = 'http://127.0.0.1:5500/1x/bK.png';
const wP = 'http://127.0.0.1:5500/1x/wP.png';
const wR = 'http://127.0.0.1:5500/1x/wR.png';
const wB = 'http://127.0.0.1:5500/1x/wB.png';
const wH = 'http://127.0.0.1:5500/1x/wH.png';
const wQ = 'http://127.0.0.1:5500/1x/wQ.png';
const wK = 'http://127.0.0.1:5500/1x/wK.png';


let moving = ''
let movingSq = ''
let turn = 'w'
let kingMoved = false
let check = false

const board = [
    [a1, b1, c1, d1, e1, f1, g1, h1],
    [a2, b2, c2, d2, e2, f2, g2, h2],
    [a3, b3, c3, d3, e3, f3, g3, h3],
    [a4, b4, c4, d4, e4, f4, g4, h4],
    [a5, b5, c5, d5, e5, f5, g5, h5],
    [a6, b6, c6, d6, e6, f6, g6, h6],
    [a7, b7, c7, d7, e7, f7, g7, h7],
    [a8, b8, c8, d8, e8, f8, g8, h8], ]

const board2 = board
console.log(safe(board[7][4]))

function diagnol(i, j){

}

function unHighlight() {
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            board[i][j].classList.remove('take')
            if(board[i][j].src === cir){
                board[i][j].src = em
            }
        }
    }
}

function safe(square){
  for (let i = 0; i < board.length; i++){
    for (let j = 0; j < board.length; j++){
      if(board[i][j] == square && board[i][j].src === wK){
              if(i < 6 && j > 0){
                if(board[i+2][j-1].src === bH){
                  return false
                }    
              }
              if(i < 6 && j < 7){
                if(board[i+2][j+1].src === bH){
                  return false
                } 
              }
              if(i > 1 && j > 0){
                if(board[i-2][j-1].src === bH){
                  return false
                } 
              }
              if(i > 1 && j < 7){
                if(board[i-2][j+1].src === bH){
                  return false
                } 
              }
              if(i > 0 && j < 6){
                if(board[i-1][j+2].src === bH){
                  return false
                } 
              }
              if(i < 7 && j < 6){
                if(board[i+1][j+2].src === bH){
                  return false
                } 
              }
              if(i > 0 && j > 1){
                if(board[i-1][j-2].src === bH){
                  return false
                } 
              }
              if(i > 0 && j < 6){
                if(board[i-1][j+2].src === bH){
                  return false
                }
              }
              if(i < 7 && j < 6){
                if(board[i+1][j-2].src === bH){
                  return false
                } 
              }
            for (let x = 1; x < 9; x++){
              if(i-x >= 0 && j+x < 8){
                if(board[i-x][j+x] && board[i-x][j+x].src === em){
                } else {
                  if(board[i-x][j+x].src === bB || board[i-x][j+x].src === bQ){
                    return false
                  }  
                  x = 9;
                }
              }
            }
            for (let y = 1; y < 9; y++){
              if(i-y >= 0 && j-y >= 0){
                if(board[i-y][j-y] && board[i-y][j-y].src === em){
                } else {
                  if(board[i-y][j-y].src === bB || board[i-y][j-y].src === bQ){
                    return false
                  }
                  y = 9;
                }
              }
            }
            for (let z = 1; z<9; z++){
              if(i+z <= 7 && j+z <= 7){
                if(board[i+z][j+z] && board[i+z][j+z].src === em){
                } else {
                  if(board[i+z][j+z].src === bB || board[i+z][j+z].src === bQ){
                    return false
                  }
                  z = 9;
                }
              }
            }
            for (let o = 1; o<9; o++){ 
              if(i+o <= 7 && j-o >= 0){
                if(board[i+o][j-o] && board[i+o][j-o].src === em){
                } else {
                  if(board[i+o][j-o].src === bB || board[i+o][j-o].src === bQ){
                    return false
                  }
                  o = 9;
                }
              }
            }
            for(let x = i; x < 7; x++){
              if(board[x+1][j].src != em) {
                if(board[x+1][j].src[25] === bR || board[x+1][j].src[25] === bQ) {
                  return false
                } 
                x = 7
              }
            }    
            for(let y = i; y > 0; y--){                       
              if(board[y-1][j].src != em) {
                if(board[y-1][j].src === bR || board[y-1][j].src === bQ) {
                   return false
                }
                y = 0
              }                    
            }
            for(let z = j; z < 7; z++){
              if(board[i][z+1].src != em) {
                if(board[i][z+1].src === bR || board[i][z+1].src === bQ) {
                  return false
                }
                z = 7
              } 
            }
            for(let h = j; h > 0; h--){
              if(board[i][h-1].src != em){
                if(board[i][h-1].src === bR || board[i][h-1].src === bQ) {
                  return false
                }
                h = 0
              } 
            }
            if(i < 7){
              if(board[i+1][j].src === bK){
                return false
              }
            }
            if(i < 7 && j < 7){
              if(board[i+1][j+1].src === bK){
                return false
              }
            }
            if(j > 0 && i < 7){
              if(board[i+1][j-1].src === bK){
                return false
              }
            }
            if(i > 0){
              if(board[i-1][j].src === bK){
                return false
              }
            }
            if(j > 0){
              if(board[i][j-1].src === bK){
                return false
              }
            }
            if(j < 7){
              if(board[i][j+1].src === bK){
                return false
              }
            }
            if(i>0 && j>0){
              if(board[i-1][j-1].src === bK || board[i-1][j-1].src === bP){
                return false 
              }
            }
            if(i>0 && j<7){
              if(board[i-1][j+1].src === bK || board[i-1][j+1].src === bP){
                return false
              }
            }
            if(board[i][j] == square && board[i][j].src === bK){
              if(i < 6 && j > 0){
                if(board[i+2][j-1].src === wH){
                  return false
                }    
              }
              if(i < 6 && j < 7){
                if(board[i+2][j+1].src === wH){
                  return false
                } 
              }
              if(i > 1 && j > 0){
                if(board[i-2][j-1].src === wH){
                  return false
                } 
              }
              if(i > 1 && j < 7){
                if(board[i-2][j+1].src === wH){
                  return false
                } 
              }
              if(i > 0 && j < 6){
                if(board[i-1][j+2].src === wH){
                  return false
                } 
              }
              if(i < 7 && j < 6){
                if(board[i+1][j+2].src === wH){
                  return false
                } 
              }
              if(i > 0 && j > 1){
                if(board[i-1][j-2].src === wH){
                  return false
                } 
              }
              if(i > 0 && j < 6){
                if(board[i-1][j+2].src === wH){
                  return false
                }
              }
              if(i < 7 && j < 6){
                if(board[i+1][j-2].src === wH){
                  return false
                } 
              }
              for (let x = 1; x < 9; x++){
                if(i-x >= 0 && j+x < 8){
                  if(board[i-x][j+x] && board[i-x][j+x].src === em){
                  } else {
                    if(board[i-x][j+x].src === wB || board[i-x][j+x].src === wQ){
                      return false
                    }  
                    x = 9;
                  }
                }
              }
              for (let y = 1; y < 9; y++){
                if(i-y >= 0 && j-y >= 0){
                  if(board[i-y][j-y] && board[i-y][j-y].src === em){
                  } else {
                    if(board[i-y][j-y].src === wB || board[i-y][j-y].src === wQ){
                      return false
                    }
                    y = 9;
                  }
                }
              }
              for (let z = 1; z<9; z++){
                if(i+z <= 7 && j+z <= 7){
                  if(board[i+z][j+z] && board[i+z][j+z].src === em){
                  } else {
                    if(board[i+z][j+z].src === wB || board[i+z][j+z].src === wQ){
                      return false
                    }
                    z = 9;
                  }
                }
              }
              for (let o = 1; o<9; o++){ 
                if(i+o <= 7 && j-o >= 0){
                  if(board[i+o][j-o] && board[i+o][j-o].src === em){
                  } else {
                    if(board[i+o][j-o].src === wB || board[i+o][j-o].src === wQ){
                      return false
                    }
                    o = 9;
                  }
                }
              }
              for(let x = i; x < 7; x++){
                if(board[x+1][j].src != em) {
                  if(board[x+1][j].src[25] === wR) {
                    return false
                  } 
                  x = 7
                }
              }    
              for(let y = i; y > 0; y--){                       
                if(board[y-1][j].src != em) {
                  if(board[y-1][j].src === wR) {
                     return false
                  }
                  y = 0
                }                    
              }
              for(let z = j; z < 7; z++){
                if(board[i][z+1].src != em) {
                  if(board[i][z+1].src === wR) {
                    return false
                  }
                  z = 7
                } 
              }
              for(let h = j; h > 0; h--){
                if(board[i][h-1].src != em){
                  if(board[i][h-1].src === wR) {
                    return false
                  }
                  h = 0
                } 
              }
              if(i < 7){
                if(board[i+1][j].src === wK){
                  return false
                }
              }
              if(i < 7 && j < 7){
                if(board[i+1][j+1].src === wK){
                  return false
                }
              }
              if(j > 0 && i < 7){
                if(board[i+1][j-1].src === wK){
                  return false
                }
              }
              if(i > 0){
                if(board[i-1][j].src === wK){
                  return false
                }
              }
              if(j > 0){
                if(board[i][j-1].src === wK){
                  return false
                }
              }
              if(j < 7){
                if(board[i][j+1].src === wK){
                  return false
                }
              }
              if(i>0 && j>0){
                if(board[i-1][j-1].src === wK || board[i-1][j-1].src === wP){
                  return false 
                }
              }
              if(i>0 && j<7){
                if(board[i-1][j+1].src === wK || board[i-1][j+1].src === wP){
                  return false
                }
              }
            }
                             
      }
    }
  }
  return true
}

function take(square){
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            if(square === board[i][j].id && board[i][j].classList.contains('take')){
                for(let x = 0; x < board.length; x++){
                    for(let y = 0; y < board.length; y++){
                        if(movingSq === board[x][y].id){
                          let taken = board[i][j].src
                          if(turn === 'w'){
                            board[i][j].src = board[x][y].src
                            board[x][y].src = em
                            unHighlight()
                            for(let q = 0; q < board.length; q++){
                              for(let w = 0; w < board[q].length; w++){
                                if(board[q][w].src === bK){
                                  if(safe(board[q][w]) === false){
                                    check = true                                    
                                  } else {
                                    check = false
                                  }
                                } 
                                if(board[q][w].src === wK){
                                  if(safe(board[q][w]) === false){
                                    message.textContent = 'Your king would be exposed!'
                                    board[x][y].src = board[i][j].src
                                    board[i][j].src = taken
                                    turn === 'w' ? turn = 'b' : turn = 'w'
                                  }
                                }
                              }
                            }
                            turn === 'w' ? turn = 'b' : turn = 'w'
                          }
                          if(turn === 'b'){
                            board[i][j].src = board[x][y].src
                            board[x][y].src = em
                            unHighlight()
                            for(let q = 0; q < board.length; q++){
                              for(let w = 0; w < board[q].length; w++){
                                if(safe(board[q][w]) === false && board[q][w].src === wK){
                                  check = true
                                  turn === 'w' ? turn = 'b' : turn = 'w'
                                } else {
                                  check = false
                                  turn === 'w' ? turn = 'b' : turn = 'w'
                                } 
                                if(safe(board[q][w]) === false && board[q][w].src === bK){
                                  board[x][y].src = board[i][j].src
                                  board[i][j].src = taken
                                  turn === 'w' ? turn = 'b' : turn = 'w'
                                  message.textContent = 'Your king would be exposed!'
                                }
                              }
                            }
                            turn === 'w' ? turn = 'b' : turn = 'w'
                          }
                            check ? message.textContent = 'Check' : message.textContent = ''
                        }
                    }
                }
            }
        }
    }
}

//http://127.0.0.1:5500/1x/bR.png    
function highlight(peice, square){
  if(peice[1] === 'K'){
    take(square) 
    unHighlight()
    moving = peice
    movingSq = square
    for (let i = 0; i < board.length; i++){
      for (let j = 0; j < board.length; j++){
        if(board[i][j].id == square && board[i][j].src === wK && turn === 'w'){
          if(i < 7){
            if(board[i+1][j].src === em){
              board[i+1][j].src = cir
            }
          }
          if(i < 7 && j < 7){
            if(board[i+1][j+1].src === em){
              board[i+1][j+1].src = cir
            }
          }
          if(j > 0 && i < 7){
            if(board[i+1][j-1].src === em){
              board[i+1][j-1].src = cir
            }
          }
          if(i > 0){
            if(board[i-1][j].src === em){
              board[i-1][j].src = cir
            }
          }
          if(j > 0){
            if(board[i][j-1].src === em){
              board[i][j-1].src = cir
            }
          }
          if(j < 7){
            if(board[i][j+1].src === em){
              board[i][j+1].src = cir
            }
          }
          if(i>0 && j>0){
            if(board[i-1][j-1].src === em){
              board[i-1][j-1].src = cir
            }
          }
          if(i>0 && j<7){
            if(board[i-1][j+1].src === em){
              board[i-1][j+1].src = cir
            }
          }
        }
      }
    }
  }
  if(peice[1] === 'Q'){
    take(square) 
    unHighlight()
    moving = peice
    movingSq = square
    for (let i = 0; i < board.length; i++){
      for (let j = 0; j < board.length; j++){
        if(board[i][j].id == square && board[i][j].src === wQ && turn === 'w'){
          for (let x = 1; x < 9; x++){
            if(i-x >= 0 && j+x < 8){
              if(board[i-x][j+x] && board[i-x][j+x].src === em){
                board[i-x][j+x].src = cir;
              } else {
                if(board[i-x][j+x].src[25] === 'b'){
                  board[i-x][j+x].classList.add('take')
                }  
                x = 9;
              }
            }
          }
          for (let y = 1; y < 9; y++){
            if(i-y >= 0 && j-y >= 0){
              if(board[i-y][j-y] && board[i-y][j-y].src === em){
                board[i-y][j-y].src = cir;
              } else {
                if(board[i-y][j-y].src[25] === 'b'){
                  board[i-y][j-y].classList.add('take')
                }
                y = 9;
              }
            }
          }
          for (let z = 1; z<9; z++){
            if(i+z <= 7 && j+z <= 7){
              if(board[i+z][j+z] && board[i+z][j+z].src === em){
                board[i+z][j+z].src = cir;
              } else {
                if(board[i+z][j+z].src[25] === 'b'){
                  board[i+z][j+z].classList.add('take')
                }
                z = 9;
              }
            }
          }
          for (let o = 1; o<9; o++){ 
            if(i+o <= 7 && j-o >= 0){
              if(board[i+o][j-o] && board[i+o][j-o].src === em){
                board[i+o][j-o].src = cir;
              } else {
                if(board[i+o][j-o].src[25] === 'b'){
                  board[i+o][j-o].classList.add('take')
                }
                o = 9;
              }
            }
          }
          for(let x = i; x < 7; x++){
            if(board[x+1][j].src != em) {
              if(board[x+1][j].src[25] === 'b') {
                console.log('true')
                board[x+1][j].classList.add('take')
              } 
              x = 7
              }
              else board[x+1][j].src = cir
          }    
          for(let y = i; y > 0; y--){                       
            if(board[y-1][j].src != em) {
              if(board[y-1][j].src[25] === 'b') {
                 board[y-1][j].classList.add('take')
              }
              y = 0
            }
            else board[y-1][j].src = cir                     
          }
          for(let z = j; z < 7; z++){
            if(board[i][z+1].src != em) {
              if(board[i][z+1].src[25] === 'b') {
                board[i][z+1].classList.add('take')
              }
              z = 7
            } 
            else board[i][z+1].src = cir
          }
          for(let h = j; h > 0; h--){
            if(board[i][h-1].src != em){
              if(board[i][h-1].src[25] === 'b') {
                board[i][h-1].classList.add('take')
              }
              h = 0
            } 
            else board[i][h-1].src = cir
          }              
        }
        if(board[i][j].id == square && board[i][j].src === bQ && turn === 'b'){
          for (let x = 1; x < 9; x++){
            if(i-x >= 0 && j+x < 8){
              if(board[i-x][j+x] && board[i-x][j+x].src === em){
                board[i-x][j+x].src = cir;
              } else {
                if(board[i-x][j+x].src[25] === 'w'){
                  board[i-x][j+x].classList.add('take')
                }  
                x = 9;
              }
            }
          }
          for (let y = 1; y < 9; y++){
            if(i-y >= 0 && j-y >= 0){
              if(board[i-y][j-y] && board[i-y][j-y].src === em){
                board[i-y][j-y].src = cir;
              } else {
                if(board[i-y][j-y].src[25] === 'w'){
                  board[i-y][j-y].classList.add('take')
                }
                y = 9;
              }
            }
          }
          for (let z = 1; z<9; z++){
            if(i+z <= 7 && j+z <= 7){
              if(board[i+z][j+z] && board[i+z][j+z].src === em){
                board[i+z][j+z].src = cir;
              } else {
                if(board[i+z][j+z].src[25] === 'w'){
                  board[i+z][j+z].classList.add('take')
                }
                z = 9;
              }
            }
          }
          for (let o = 1; o<9; o++){ 
            if(i+o <= 7 && j-o >= 0){
              if(board[i+o][j-o] && board[i+o][j-o].src === em){
                board[i+o][j-o].src = cir;
              } else {
                if(board[i+o][j-o].src[25] === 'w'){
                  board[i+o][j-o].classList.add('take')
                }
                o = 9;
              }
            }
          }
          for(let x = i; x < 7; x++){
            if(board[x+1][j].src != em) {
              if(board[x+1][j].src[25] === 'w') {
                board[x+1][j].classList.add('take')
              } 
              x = 7
              }
              else board[x+1][j].src = cir
          }    
          for(let y = i; y > 0; y--){                       
            if(board[y-1][j].src != em) {
              if(board[y-1][j].src[25] === 'w') {
                 board[y-1][j].classList.add('take')
              }
              y = 0
            }
            else board[y-1][j].src = cir                     
          }
          for(let z = j; z < 7; z++){
            if(board[i][z+1].src != em) {
              if(board[i][z+1].src[25] === 'w') {
                board[i][z+1].classList.add('take')
              }
              z = 7
            } 
            else board[i][z+1].src = cir
          }
          for(let h = j; h > 0; h--){
            if(board[i][h-1].src != em){
              if(board[i][h-1].src[25] === 'w') {
                board[i][h-1].classList.add('take')
              }
              h = 0
            } 
            else board[i][h-1].src = cir
          }              
        }
      }
    }
  }
  if(peice[1] === 'H'){
    take(square)
    unHighlight()
    moving = peice
    movingSq = square
    for (let i = 0; i < board.length; i++){
      for (let j = 0; j < board.length; j++){
        if(board[i][j].id == square && board[i][j].src === wH && turn === 'w'){
          if(i < 6 && j > 0){
            if(board[i+2][j-1].src === em){
              board[i+2][j-1].src = cir
            } else if(board[i+2][j-1].src[25] === 'b'){
              board[i+2][j-1].classList.add('take')
            }    
          }
          if(i < 6 && j < 7){
            if(board[i+2][j+1].src === em){
              board[i+2][j+1].src = cir
            } else if(board[i+2][j+1].src[25] === 'b'){
              board[i+2][j+1].classList.add('take')
            }
          }
          if(i > 1 && j > 0){
            if(board[i-2][j-1].src === em){
              board[i-2][j-1].src = cir
            } else if(board[i-2][j-1].src[25] === 'b'){
              board[i-2][j-1].classList.add('take')
            }
          }
          if(i > 1 && j < 7){
            if(board[i-2][j+1].src === em){
              board[i-2][j+1].src = cir
            } else if(board[i-2][j+1].src[25] === 'b'){
              board[i-2][j+1].classList.add('take')
            }
          }
          if(i > 0 && j < 6){
            if(board[i-1][j+2].src === em){
              board[i-1][j+2].src = cir
            } else if(board[i-1][j+2].src[25] === 'b'){
              board[i-1][j+2].classList.add('take')
            }
          }
          if(i < 7 && j < 6){
            if(board[i+1][j+2].src === em){
              board[i+1][j+2].src = cir
            } else if(board[i+1][j+2].src[25] === 'b'){
              board[i+1][j+2].classList.add('take')
            }
          }
          if(i > 0 && j > 1){
            if(board[i-1][j-2].src === em){
              board[i-1][j-2].src = cir
            } else if(board[i-1][j-2].src[25] === 'b'){
              board[i-1][j-2].classList.add('take')
            }
          }
          if(i > 0 && j < 6){
            if(board[i-1][j+2].src === em){
              board[i-1][j+2].src = cir
            } else if(board[i-1][j+2].src[25] === 'b'){
              board[i-1][j+2].classList.add('take')
            }
          }
          if(i < 7 && j < 6){
            if(board[i+1][j-2].src === em){
              board[i+1][j-2].src = cir
            } else if(board[i+1][j-2].src[25] === 'b'){
              board[i+1][j-2].classList.add('take')
            }
          }
        }
        if(board[i][j].id == square && board[i][j].src === bH && turn === 'b'){
          if(i < 6 && j > 0){
            if(board[i+2][j-1].src === em){
              board[i+2][j-1].src = cir
            } else if(board[i+2][j-1].src[25] === 'w'){
              board[i+2][j-1].classList.add('take')
            }    
          }
          if(i < 6 && j < 7){
            if(board[i+2][j+1].src === em){
              board[i+2][j+1].src = cir
            } else if(board[i+2][j+1].src[25] === 'w'){
              board[i+2][j+1].classList.add('take')
            }
          }
          if(i > 1 && j > 0){
            if(board[i-2][j-1].src === em){
              board[i-2][j-1].src = cir
            } else if(board[i-2][j-1].src[25] === 'w'){
              board[i-2][j-1].classList.add('take')
            }
          }
          if(i > 1 && j < 7){
            if(board[i-2][j+1].src === em){
              board[i-2][j+1].src = cir
            } else if(board[i-2][j+1].src[25] === 'w'){
              board[i-2][j+1].classList.add('take')
            }
          }
          if(i > 0 && j < 6){
            if(board[i-1][j+2].src === em){
              board[i-1][j+2].src = cir
            } else if(board[i-1][j+2].src[25] === 'w'){
              board[i-1][j+2].classList.add('take')
            }
          }
          if(i < 7 && j < 6){
            if(board[i+1][j+2].src === em){
              board[i+1][j+2].src = cir
            } else if(board[i+1][j+2].src[25] === 'w'){
              board[i+1][j+2].classList.add('take')
            }
          }
          if(i > 0 && j > 1){
            if(board[i-1][j-2].src === em){
              board[i-1][j-2].src = cir
            } else if(board[i-1][j-2].src[25] === 'w'){
              board[i-1][j-2].classList.add('take')
            }
          }
          if(i > 0 && j < 6){
            if(board[i-1][j+2].src === em){
              board[i-1][j+2].src = cir
            } else if(board[i-1][j+2].src[25] === 'w'){
              board[i-1][j+2].classList.add('take')
            }
          }
          if(i < 7 && j > 1){
            if(board[i+1][j-2].src === em){
              board[i+1][j-2].src = cir
            } else if(board[i+1][j-2].src[25] === 'w'){
              board[i+1][j-2].classList.add('take')
            }
          }
        }
      }
    }
  }
  if(peice[1] === 'B'){
    take(square)
    unHighlight()
    moving = peice
    movingSq = square
    for (let i = 0; i < board.length; i++){
      for (let j = 0; j < board.length; j++){
        if(board[i][j].id == square && board[i][j].src === wB && turn === 'w'){
          for (let x = 1; x < 9; x++){
            if(i-x >= 0 && j+x < 8){
              if(board[i-x][j+x] && board[i-x][j+x].src === em){
                board[i-x][j+x].src = cir;
              } else {
                if(board[i-x][j+x].src[25] === 'b'){
                  board[i-x][j+x].classList.add('take')
                }  
                x = 9;
              }
            }
          }
          for (let y = 1; y < 9; y++){
            if(i-y >= 0 && j-y >= 0){
              if(board[i-y][j-y] && board[i-y][j-y].src === em){
                board[i-y][j-y].src = cir;
              } else {
                if(board[i-y][j-y].src[25] === 'b'){
                  board[i-y][j-y].classList.add('take')
                }
                y = 9;
              }
            }
          }
          for (let z = 1; z<9; z++){
            if(i+z <= 7 && j+z <= 7){
              if(board[i+z][j+z] && board[i+z][j+z].src === em){
                board[i+z][j+z].src = cir;
              } else {
                if(board[i+z][j+z].src[25] === 'b'){
                  board[i+z][j+z].classList.add('take')
                }
                z = 9;
              }
            }
          }
          for (let o = 1; o<9; o++){ 
            if(i+o <= 7 && j-o >= 0){
              if(board[i+o][j-o] && board[i+o][j-o].src === em){
                board[i+o][j-o].src = cir;
              } else {
                if(board[i+o][j-o].src[25] === 'b'){
                  board[i+o][j-o].classList.add('take')
                }
                o = 9;
              }
            }
          }
        }    
        if(board[i][j].id == square && board[i][j].src === bB && turn === 'b'){
          for (let x = 1; x < 9; x++){
            if(i-x >= 0 && j+x < 9){
              if(board[i-x][j+x] && board[i-x][j+x].src === em){
                board[i-x][j+x].src = cir;
              } else {
                if(board[i-x][j+x].src[25] === 'w'){
                  board[i-x][j+x].classList.add('take')
                }  
                x = 9;
              }
            }
          }
          for (let y = 1; y < 9; y++){
            if(i-y >= 0 && j-y >= 0){
              if(board[i-y][j-y] && board[i-y][j-y].src === em){
                board[i-y][j-y].src = cir;
              } else {
                if(board[i-y][j-y].src[25] === 'w'){
                  board[i-y][j-y].classList.add('take')
                }
                y = 9;
              }
            }
          }
          for (let z = 1; z<9; z++){
            if(i+z <= 7 && j+z <= 7){
              if(board[i+z][j+z] && board[i+z][j+z].src === em){
                board[i+z][j+z].src = cir;
              } else {
                if(board[i+z][j+z].src[25] === 'w'){
                  board[i+z][j+z].classList.add('take')
                }
                z = 9;
              }
            }
          }
          for (let o = 1; o<9; o++){ 
            if(i+o <= 7 && j-o >= 0){
              if(board[i+o][j-o] && board[i+o][j-o].src === em){
                board[i+o][j-o].src = cir;
              } else {
                if(board[i+o][j-o].src[25] === 'w'){
                  board[i+o][j-o].classList.add('take')
                }
                o = 9;
              }
            }
          }        
        }
      }
    }
  }  
  if(peice[1] === 'R'){
    take(square)
    unHighlight()
    moving = peice
    movingSq = square
    for(let i = 0; i < board.length; i++){
      for(let j = 0; j < board[i].length; j++){
        if(board[i][j].id == square && board[i][j].src === wR && turn === 'w'){
          for(let x = i; x < 7; x++){
            if(board[x+1][j].src != em) {
              if(board[x+1][j].src[25] === 'b') {
                console.log('true')
                board[x+1][j].classList.add('take')
              } 
              x = 7
              }
              else board[x+1][j].src = cir
          }    
                    for(let y = i; y > 0; y--){                       
                        if(board[y-1][j].src != em) {
                            if(board[y-1][j].src[25] === 'b') {
                                board[y-1][j].classList.add('take')
                            }
                            y = 0
                        }
                        else board[y-1][j].src = cir                     
                    }
                    for(let z = j; z < 7; z++){
                        if(board[i][z+1].src != em) {
                            if(board[i][z+1].src[25] === 'b') {
                                board[i][z+1].classList.add('take')
                            }
                            z = 7
                        } 
                        else board[i][z+1].src = cir
                    }
                    for(let h = j; h > 0; h--){
                        if(board[i][h-1].src != em){
                            if(board[i][h-1].src[25] === 'b') {
                                board[i][h-1].classList.add('take')
                            }
                            h = 0
                        } 
                        else board[i][h-1].src = cir
                    }
                }
                if(board[i][j].id == square && board[i][j].src === bR && turn === 'b'){
                    for(let x = i; x < 7; x++){
                        if(board[x+1][j].src != em) {
                            if(board[x+1][j].src[25] === 'w') {
                                board[x+1][j].classList.add('take')
                            } 
                            x = 7
                        }
                        else board[x+1][j].src = cir
                    }    
                    for(let y = i; y > 0; y--){                       
                        if(board[y-1][j].src != em) {
                            if(board[y-1][j].src[25] === 'w') {
                                board[y-1][j].classList.add('take')
                            }
                            y = 0
                        }
                        else board[y-1][j].src = cir                     
                    }
                    for(let z = j; z < 7; z++){
                        if(board[i][z+1].src != em) {
                            if(board[i][z+1].src[25] === 'w') {
                                board[i][z+1].classList.add('take')
                            }
                            z = 7
                        } 
                        else board[i][z+1].src = cir

                    }
                    for(let h = j; h > 0; h--){
                        if(board[i][h-1].src != em){
                            if(board[i][h-1].src[25] === 'w') {
                                board[i][h-1].classList.add('take')
                            }
                            h = 0
                        } 
                        else board[i][h-1].src = cir
                    }
                }
            }
        }
    }  
    if(peice[1] === 'P'){
        take(square)
        unHighlight()
        moving = peice
        movingSq = square
            for(let i = 0; i < board.length; i++){
                for(let j = 0; j < board[i].length; j++){
                  if(board[i][j].id == square && board[i][j].src === bP && turn === 'b'){
                        if(board[i + 1][j].src === em && board[i][j].src === bP){
                            board[i + 1][j].src = cir
                            if(i === 1 && board[i + 2][j].src == em){
                                board[i + 2][j].src = cir
                            }
                        } 
                        if(board[i][j].id == square){
                            if(board[i+1][j+1].src[25] === 'w'){
                                board[i+1][j+1].classList.add('take')
                            }
                            if(board[i+1][j-1].src[25] === 'w'){
                                board[i+1][j-1].classList.add('take')
                            }
                        }
                    }
                    if(board[i][j].id == square && board[i][j].src === wP && turn === 'w'){
                      if(board[i - 1][j].src === em && board[i][j].src === wP){
                        board[i - 1][j].src = cir
                        if(i === 6 && board[i - 2][j].src == em){
                            board[i - 2][j].src = cir
                        }
                      } 
                      if(board[i][j].id == square){
                        if(board[i-1][j+1].src[25] === 'b'){
                            board[i-1][j+1].classList.add('take')
                        }
                        if(j > 0){
                            if(board[i-1][j-1].src[25] === 'b'){
                                board[i-1][j-1].classList.add('take')
                          }
                        } 
                      }
                    }  
                }
            }
        } 
    

    if(peice[1] === 'm') unHighlight()

    if(peice[1] === 'i'){
        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[i].length; j++){
                if(square === board[i][j].id){
                    for(let x = 0; x < board.length; x++){
                        for(let y = 0; y < board.length; y++){
                          for(let l = 0; l < board.length; l++){
                            for(let k = 0; k < board[l].length; k++){
                              if(board[l][k].src === wK && turn === 'w'){
                                if(movingSq === board[x][y].id){
                                  board[i][j].src = board[x][y].src
                                  board[x][y].src = em
                                  for(let u = 0; u < board.length; u++){
                                    for (let m = 0; m < board[u].length; m++){
                                      if (board[u][m].src === bK){
                                        if(safe(board[u][m]) === false){
                                          check = true
                                        } else check = false
                                      }
                                    }
                                  }
                                  if(safe(board[l][k]) === false){
                                    turn === 'w' ? turn = 'b' : turn = 'w'
                                    board[x][y].src = board[i][j].src
                                    board[i][j].src = em
                                  }
                                }                               
                              }
                                if(board[l][k].src === bK && turn === 'b'){
                                  if(movingSq === board[x][y].id){
                                    board[i][j].src = board[x][y].src
                                    board[x][y].src = em
                                    for(let u = 0; u < board.length; u++){
                                      for (let m = 0; m < board[u].length; m++){
                                        if (board[u][m].src === wK){
                                          if(safe(board[u][m]) === false){
                                            check = true
                                          } else check = false
                                        }
                                      }
                                    }
                                    if(safe(board[l][k]) === false){
                                      turn === 'w' ? turn = 'b' : turn = 'w'
                                      board[x][y].src = board[i][j].src
                                      board[i][j].src = em
                                    }
                                  }                               
                                }
                              }
                              unHighlight()
                            }
                        }
                    }
                }
            }
        }
        turn === 'w' ? turn = 'b' : turn = 'w'
        check ? message.textContent = 'Check' : message.textContent = ''
    }
}

for(let i = 0; i < board.length; i++){
    for(let j = 0; j < board[i].length; j++){
        board[i][j].addEventListener('click', function(){
            let peice = this.src.split('/')
            highlight(peice[peice.length - 1], this.id)
        })
    }
}
