$(document).ready(function(){

  $('form#lists').submit(function(event){
    event.preventDefault();

    var inputTask = $('input#task').val();
// console.log(inputTask);
    $('ul.tasks').append("<li class = 'task'>" + inputTask + "</li>");

    $('input#task').val('');

    $('.task').click(function() {
      $('ul.completed-tasks').append(this);
      //$(this).clone().appendTo('ul.completed-tasks');
    });




  });

});
