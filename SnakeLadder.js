console.log("hgffyghbkjn")
var gp1 = "anchal chudail"
document.getElementById("p1").value = gp1

var gp2 = "sanjana"
document.getElementById('p2').value = gp2

var gp3 = "mummy"
document.getElementById('p3').value = gp3

var gp4 = "papa"
document.getElementById('p4').value = gp4

snake = [{ mouth: 22, tail: 5 }, { mouth: 23, tail: 2 }, { mouth: 27, tail: 13 }, { mouth: 25, tail: 11 }, { mouth: 24, tail: 9 },{ mouth: 26, tail: 13},{ base: 7, top: 22 }, { base: 11, top: 26 }, { base: 5, top: 18 }, { base: 20, top: 30 }]
var i
var a = {}
function bite1() {
  console.log("na")
  for (i = 0; i < snake.length; i++) {
    a = snake[i]
    for (const b in a) {

      if (s1 == a.mouth) {
        s1 = a.tail
      }
      else if (s1 == a.base) {
        s1 = a.top
      }
    }
  }
}

function bite2() {
  console.log("na")
  for (i = 0; i < snake.length; i++) {
    a = snake[i]
    for (const b in a) {

      if (s2 == a.mouth) {
        s2 = a.tail
      }
      else if (s2 == a.base) {
        s2 = a.top
      }
    }
  }
}

function bite3() {
  console.log("na")
  for (i = 0; i < snake.length; i++) {
    a = snake[i]
    for (const b in a) {

      if (s3 == a.mouth) {
        s3 = a.tail
      }
      else if (s3 == a.base) {
        s3 = a.top
      }
    }
  }
}

function bite4() {
  console.log("na")
  for (i = 0; i < snake.length; i++) {
    a = snake[i]
    for (const b in a) {

      if (s4 == a.mouth) {
        s4 = a.tail
      }
      else if (s4 == a.base) {
        s4 = a.top
      }
    }
  }
}


function random() {
  score = Math.floor(Math.random() * 6 + 1)
  console.log(score)

}


var flag = 0;
var s1 = 0, s2 = 0; s3 = 0, s4 = 0;

var btn = document.querySelector("button")
btn.addEventListener("click", function () {

  
  if (flag == 0) {
    random()
    s1 = s1 + score 
    console.log("s1: "+ s1 )
    document.getElementById('score1').value = s1
    bite1()
    document.getElementById('score1').value = s1
    if ( s1 >= 50 ) {
      document.getElementById('win').value = gp1
      console.log("win win")
      flag = 5
    }
    else {
      flag = 1
    }
  }

  else if(flag == 1) {

      random()
      s2 = s2 + score 
      console.log("s2: "+ s2 )
      document.getElementById('score2').value=s2
       bite2()
       document.getElementById('score2').value=s2
       if(s2 >= 50){
          document.getElementById('win').value=gp2
          flag = 5
      }
    else{
      flag = 2
    }
  }
  else if(flag == 2) {

      random()
      s3 = s3 + score
      console.log("s3: "+ s3 )
      document.getElementById('score3').value=s3
      bite3()
       document.getElementById('score3').value=s3
       if(s3 >= 50){
          document.getElementById('win').value=gp3
          flag = 5
      }
    else{
      flag = 3
    }
      }
  else if(flag == 3)
  {

      random()
      s4 = s4 + score
      console.log("s4: "+ s4 )
      document.getElementById('score4').value=s4
      bite4()
      document.getElementById('score4').value=s4
      if(s4 >= 50){
          document.getElementById('win').value=gp4
          flag = 5        
      }
    else{
      flag = 0
    }
  }
})







