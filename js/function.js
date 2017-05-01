/*
 function nom_de_la_fonction(paramètres) {
 // instructions...
 return valeur_de_retour;
 // nécessaire si la fonction retourne une valeur
 }
 */

function getAjax(numQuestion) {
    $.get('quizz.php', {question: numQuestion}, function (data) {
        var quest = JSON.parse(data);
        console.log(quest);

        $("#enonce").text(quest.question);
        $('#propositions input').remove();
        $('#propositions label').remove();
        $('#propositions br').remove();
        $('#propositions').append('<input type="radio" id="1" name="input" value="' + quest.propositions[0] + '"><label for="1">' + quest.propositions[0] + '</label><br>');
        $('#propositions').append('<input type="radio" id="2" name="input" value="' + quest.propositions[1] + '"><label for="2">' + quest.propositions[1] + '</label><br>');
        $('#propositions').append('<input type="radio" id="3" name="input" value="' + quest.propositions[2] + '"><label for="3">' + quest.propositions[2] + '</label><br>');


        //return valeur_de_retour;
    });
}

function concatNum(numQuestion) {
    if (numQuestion < 1) {
        numQuestion = 1;
    } else if (numQuestion > 5) {
        numQuestion = 5;
    }

    return numQuestion;
}

function checkCSSbutton(numQuestion) {
    if (numQuestion === 1) {
        $('#precedente').addClass('greyText');
    } else if (numQuestion === 5) {
        $('#suivante').addClass('greyText');
    }else {
        $('#precedente').removeClass('greyText');
        $('#suivante').removeClass('greyText');
    }


}