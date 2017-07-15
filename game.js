
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
//Start of set column of buttons from top to bottom
$("#12").on('click',function(){
    var x = prompt(quest6)
    if (x === ans6) {
        alert('You got it!')
    } else {
        alert('Sorry, that is wrong!');
    }
});
$("#22").on('click',function(){
    var x = prompt(quest7)
    if (x === ans7) {
        alert('You got it!')
    } else {
        alert('Sorry, that is wrong!');
    }
});
$("#32").on('click',function(){
    var x = prompt(quest8)
    if (x === ans8) {
        alert('You got it!')
    } else {
        alert('Sorry, that is wrong!');
    }
});
$("#42").on('click',function(){
    var x = prompt(quest9)
    if (x === ans9) {
        alert('You got it!')
    } else {
        alert('Sorry, that is wrong!');
    }
});
$("#52").on('click',function(){
    var x = prompt(quest10)
    if (x === ans10) {
        alert('You got it!')
    } else {
        alert('Sorry, that is wrong!');
    }
});
//Third row of columns of buttons from top to bottom

///questions:
var quest1 = "Who is the known as the 'Lady with the lamp?'";
var quest2 = 'Who was the first christian roman emperor?';
var quest3 = "Who is known as the 'The maid of New Orleans?'";
var quest4 = 'Who became an American Chess Grandmaster at age 15?';
var quest5 = "'Who is known as Americas Cowboy Philosopher?'";
var quest6 = "'I have a dream!'";
var quest7 = "'I can resist anything but temptation'";
// var quest8 = "' Two roads diverged in the a wood and I took the one less traveled.'";
// var quest9 = "' Believe you can and you're halfway there'";
// var quest10 = "'I didn’t fail the test. I just found 100 ways to do it wrong.'";
// var quest11 = 'What does AA stand for?';
// var quest12 = 'What does CIA stand for?';
// var quest13 = 'What does EPA stand for?';
// var quest14 = 'What does AWOL stand for?';
// var quest15 = 'What does CAD stand for?;
// var quest16 = "What city is known as the 'City of Lakes'";
// var quest17 = 'What is the oldest State Capital in the US?';
// var quest18 = "What city is known as the 'Big Peach?'";
// var quest19 = "What city is known as the 'City of Roses?'";
// var quest20 = 'What was the first capital in California?'
// var quest21 = 'What is a baby whale called?'
// var quest22 = 'A group of Doves is called what?'
// var quest23 = 'A snake hears with what organ?'
// var quest24 = 'From what country does the Dalmation dog breed come from?;
// var quest25 = 'In British Columbia it's illegal to kill what animal?'

////Answers: 
var ans1 = 'Who is Florence Nightingale';
var ans2 = 'Who is Constantine';
var ans3 = 'Who is Joan of Arc';
var ans4 = 'Who is Bobby Fischer';
var ans5 = 'Who is Will Rogers';
var ans6 = 'Who is Martin Luther King';
var ans7= 'Who is Oscar Wilde';
// var ans8 ='Who is Robert Frost';
// var ans9 = 'Who is Theodore Roosevelt';
// var ans10 = 'Who is Benjamin Franklin';
// var ans11 = 'What is Alcoholics Anonymous';
// var ans12 = 'What is the Central Intelligence Agency';
// var ans13 = 'What is the Environmental Protection Agency';
// var ans14 = 'What is Abscence without leave';
// var ans15 = 'What is Computer Aided Design';
// var ans16 = 'What is Minneapolis, Minnesota';
// var ans17 = 'What is Santa Fe, New Mexico';
// var ans18 = 'What is Atlanta, Georgia';
// var ans19 = 'What is Portland, Oregon';
// var ans20 = 'What is San Jose';
// var ans21 = 'What is a calf';
// var ans22 = 'What is a dule';
// var ans23 = 'What is a tongue';
// var ans24 = 'What is Yugoslavia'
// var ans25 = 'What is Sasquatch'

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


