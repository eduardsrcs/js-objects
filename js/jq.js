$(document).ready(function(){
  // console.log($('#but1'))
  $('#but1').click(function(){
    console.log('I\'m clicked by jQuery')
  })
})

// onclick event from native js
document.getElementById('but2').onclick = function(){
  console.log('Onclick event')
}

// addEventListener from native js
document.getElementById('but3').addEventListener('click', function(){
  console.log('Onclick event by addEventListener method')
})

function clickFunction(){
  console.log('Button\'s onclick event')
}