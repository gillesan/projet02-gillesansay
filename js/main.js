/* 
 * projet02-gillesansay
 * gestion de quizz
 */


$(document).ready(function () {
    console.log("ready!");

//AJAX



    /*$.get('quizz.php', {question: 2}, function (data) {
     var question2 = JSON.parse(data);
     var enonce2 = question2.question;
     var prop2 = question2.proposition;
     var cor2 = question2.correct;
     });
     
     $.get('quizz.php', {question: 3}, function (data) {
     var question3 = JSON.parse(data);
     var enonce3 = question1.question;
     var prop3 = question1.proposition;
     var cor3 = question1.correct;
     });*/



//EVENT

    $('#source').click(function (event) {
        $('#source').addClass('questionFrame');
        $('#source').removeClass('boutonFrame');
        $('#source').text('');
        
        $('#source').append('<div id="enonce"></div>');
        
        $('#source').append('<form id="no" action="/action_page.php"></form>');
 
        $('#source').append('<div id="validate"></div>');
        $('#source #validate').append('<div id="precedente" class="boutonFrame greyText">Précédente</div><div id="suivante" class="boutonFrame">Suivante</div><div id="valider" class="boutonFrame greyText">Valider</div>');
        $('#source').removeAttr('id', 'source');
        $('.questionFrame').attr('id', 'questionNumero1');

        $.get('quizz.php', {question: 1}, function (data) {
            var quest1 = JSON.parse(data);
            console.log(quest1);
            var enonce1 = quest1.question;
            $("#enonce").text(enonce1);
            var prop1 = quest1.propositions;
            $('#no').append('<input type="radio" name="input0" value="'+prop1[0]+'">'+prop1[0]+'<br>');
            $('#no').append('<input type="radio" name="input1" value="'+prop1[1]+'">'+prop1[1]+'<br>');
            $('#no').append('<input type="radio" name="input2" value="'+prop1[2]+'">'+prop1[2]+'<br>');
            $('#no').removeAttr('id', 'no');
            var cor1 = quest1.correct;
        });
    });


    $('#precedente').click(function (event) {
        console.log('precedente');

    });
    
    $('#suivante').click(function (event) {
        
        console.log('suivante');
    });
    
    $('#valider').click(function (event) {
        
        console.log(valider);
        console.log($('radio:checked').val());
        
    });

});

