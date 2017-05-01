<!DOCTYPE html>
<!--
gestion de quizz
projet02-gillesansay
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>projet02-gillesansay</title>
        <link href="css/css.css" rel="stylesheet" type="text/css"/>
    </head>
    <body>
        <h1>Gestion de quizz</h1>
        <h2>Gilles Ansay</h2>
        <div>
            <div id="commencer" class="boutonFrame">Commencer le quizz</div>
            
            <div id="jeuFrame" class="jeuFrame hidden">
                <div id="enonce"></div>
                <form id="propositions" action="/action_page.php">

                </form>
                <div>
                    <div id="validate"></div>
                    <div id="precedente" class="boutonFrame greyText">Précédente</div>
                    <div id="suivante" class="boutonFrame">Suivante</div>
                    <div id="valider" class="boutonFrame greyText">Valider</div>
                </div>
            </div>
        </div>

        <script src="js/jquery-3.2.1.js" type="text/javascript"></script>
        
        <script src="js/object.js" type="text/javascript"></script>
        <script src="js/function.js" type="text/javascript"></script>
        <script src="js/main.js" type="text/javascript"></script>
    </body>

</html>
