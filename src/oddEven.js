function generateNumber() {
  // generate a random integer(hint : Math.random)
  let randomNum = Math.floor(Math.random()*101) + 1
  console.log(randomNum);

  let NumSection = document.getElementById("number")

  NumSection.textContent = randomNum


  checkOddEven(randomNum)

}

function checkOddEven(num) {
  // logic for even / odd
  let display = document.getElementById("odd-even")


  if (num % 2 ==0){
    display.textContent = "The number is even"
  }
  else{
    display.textContent = "The number is odd"
  }
}

window.onload = function () {
  // add event listeners to the button here
  let button = document.getElementById("generate-number")
  button.addEventListener("click",function(){
    // console.log(randomNum)

    generateNumber()
  })

  
};

// donot change the following export statement

if (typeof exports !== "undefined") {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}
