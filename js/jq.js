// jQuery code

$(document).ready(function(){
  // console.log($('#but1'))
  $('#text2').hide()
  $('#but1').click(function(){
    console.log('I\'m clicked by jQuery')
    $('#text1').slideToggle(700)
    $('#text2').slideToggle(700)
  })
})

// NATIVE JS
const modal = document.getElementById('modal')

// onclick event from native js
document.getElementById('but2').onclick = function(){
  console.log('Onclick event')
  modal.classList.toggle('showed')
}

// addEventListener from native js
document.getElementById('but3').addEventListener('click', function(){
  console.log('Onclick event by addEventListener method')
})

function clickFunction(){
  console.log('Button\'s onclick event')
}