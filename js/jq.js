// jQuery code

$(document).ready(function(){
  // console.log($('#but1'))
  $('#text2').hide()

  $('#but1').click(function(){
    console.log('I\'m clicked by jQuery')
    $('#text1').slideToggle(700)
    $('#text2').slideToggle(700)
  })

  $.get('https://jsonplaceholder.typicode.com/users', function(data, status){
    console.log(data)
    console.log(status)
  })

  $('#fsubmit').click(()=>{
    $.post("http://192.168.1.151/test.php",
    // $.post("http://localhost/php/test.php",
    {
      name: $('#user').val(),
      city: $('#pass').val()
    },
    function(data, status){
      console.log("Data: " + data + "\nStatus: " + status);
      if(status == 'success') {
        $('#modal').html('<h1>Success Login</h1>')
        setTimeout(() => {
          location.reload()
        }, 3000);
      }
    })
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