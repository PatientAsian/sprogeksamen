// Copyright by David Kracht Lam a.k.a. Patient Asian
// Click button to add value to an array, then display the total value

$(function(){
    $('#answer').hide();
    $('#wronganswer').hide();
  
    $('.correctanswer').click(function(){
      $('#answer').fadeIn('slow');
    });
  
    $('.wronganswer').click(function(){
      $('#wronganswer').fadeIn('slow');
    });
  
});

// Values
  
  var correct = 10;
  var hint = 5;
  var wrong = 0;
  var total = [0];
  var answer = document.getElementById("answer");
  
  document.getElementById("result").innerHTML = total;
  
// Push functions
  function pushCorrect() {
      total.unshift(correct);
      document.getElementById("result").innerHTML = total;
      document.getElementById("result").innerHTML = total.reduce(getSum);
  }

  function pushHint() {
      total.unshift(hint);
      document.getElementById("result").innerHTML = total;
      document.getElementById("result").innerHTML = total.reduce(getSum);
  }

  
// Get total sum
  function getSum(total, num) {
    return total + num;
  }
  
  function myFunction(item) {
      document.getElementById("result").innerHTML = total.reduce(getSum);
  }

