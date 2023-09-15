let redDiv = document.getElementById('red')
let yellowDiv=document.getElementById("yellow")
let greenDiv=document.getElementById("green")
redDiv.onclick = () => console.log('red')
yellowDiv.onclick = () => console.log('yellow')
greenDiv.onclick = () => console.log('green')


let clear= document.getElementById("cleargame")
const squares = document.querySelectorAll('.colorSquare')

const timesClicked = {'red': 0,'yellow': 0,'green':0 } //here we have created an object in JS with three submembers with their initial values as 0
squares.forEach(square => {//foreach loop loops through each squares[].value and uspe onclick function lagaenge humlog
  square.onclick = () => { //ES6 FUNCTION WHICH PERFORMS ACTION ON CLICK
    timesClicked[square.value]+=1 //INCREASES VALUE BY 1
    square.innerText = timesClicked[square.value]
  }
})

function clearScores() {
  timesClicked.red = 0
  timesClicked.yellow = 0
  timesClicked.green = 0
  squares.forEach(square => {
    square.innerText = ''
  })
}

clear.onclick = () => clearScores()


//THE CODE AFTER THIS LINE IS PURELY WRITTEN FOR LEARNING PURPOSE AND HOLDS NO VALUE TO ANYONE OTHER THAN ME REVISING THE STUFF
// const squares = document.querySelectorAll('.colorSquare')
// console.log(squares)
// console.log(squares[0].value)
// console.log(squares[1].value)
// console.log(squares[2].value)

// for(x=0;x<3;x++)
//   {
//     console.log(squares[x].value)
//   }