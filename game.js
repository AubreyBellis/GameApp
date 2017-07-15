
//test
// function whenClicked(){
//     alert('you did it.');
// }
// // When the user clicks the button, open the modal 
// $('#11').on('click', function(){
//    whenClicked();
// })

//write function for each question and answer with if else 

$("#11").on('click',function(input) {
    var x = prompt(quest1)
    if (x === ans1) {
        alert('You got it!');
    } else {
        alert('Sorry, that is wrong!');
    }
});
$('#21').on('click',function() {
    var x = prompt(quest2)
    if (x === ans2) {
        alert('You got it!');
    } else {
        alert('Sorry, that is wrong!');
    }
});
$("#31").on('click',function() {
    var x = prompt(quest3)
    if (x === ans3) {
        alert('You got it!')
    } else {
        alert('Sorry, that is wrong!');
    }
});
$("#41").on('click',function(){
    var x = prompt(quest4)
    if (x === ans4) {
        alert('You got it!')
    } else {
        alert('Sorry, that is wrong!');
    }
});
$("#51").on('click',function(){
    var x = prompt(quest5)
    if (x === ans5) {
        alert('You got it!')
    } else {
        alert('Sorry, that is wrong!');
    }
});
$("#12").on('click',function(){
    var x = prompt(quest6)
    if (x === ans6) {
        alert('You got it!')
    } else {
        alert('Sorry, that is wrong!');
    }
});


///questions:
var quest1 = "Who is the known as the 'Lady with the lamp?'";
var quest2 = 'Who was the first christian roman emperor?';
var quest3 = "Who is known as the 'The maid of New Orleans?'";
var quest4 = 'Who became an American Chess Grandmaster at age 15?';
var quest5 = 'Who is known as -Americas Cowboy Philosopher?';
var quest6 = "'I have a dream!'";
// var quest7 = ""'I can resist anything but temptation'";
// var quest8 = 
// var quest9 =
// var quest10 =
// var quest11 =
// var quest12 =
// var quest13 =
// var quest14 =
// var quest15 =
// var quest16 = 
// var quest17 =
// var quest18 =
// var quest19 =
// var quest20 = 
// var quest21 =
// var quest22 =
// var quest23 =
// var quest24 =
// var quest25 =

////Answers: 
var ans1 = 'Who is Florence Nightingale'
var ans2 = 'Who is Constantine'
var ans3 = 'Who is Joan of Arc'
var ans4 = 'Who is Bobby Fischer'
var ans5 = 'Who is Will Rogers'
var ans6 = 'Who is Martin Luther King'
// var ans7 = 'Who is Oscar Wilde'
// var ans8 =
// var ans9 =
// var ans10 =
// var ans11 = 
// var ans12 =
// var ans13 = 
// var ans14 =
// var ans15 =
// var ans16 = 
// var ans17 = 
// var ans18 =
// var ans19 =
// var ans20 =
// var ans21 =
// var ans22 =
// var ans23 =
// var ans24 =
// var ans25 = 

$(document).ready(function(){
  $('input[type=text][title],input[type=password][title],textarea[title]').each(function(i){
    $(this).addClass('input-prompt-' + i);
    var promptSpan = $('<span class="input-prompt"/>');
    $(promptSpan).attr('id', 'input-prompt-' + i);
    $(promptSpan).append($(this).attr('title'));
    $(promptSpan).click(function(){
      $(this).hide();
      $('.' + $(this).attr('id')).focus();
    });
    if($(this).val() != ''){
      $(promptSpan).hide();
    }
    $(this).before(promptSpan);
    $(this).focus(function(){
      $('#input-prompt-' + i).hide();
    });
    $(this).blur(function(){
      if($(this).val() == ''){
        $('#input-prompt-' + i).show();
      }
    });
  });
});


