<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="./public/css/package.min.css" />
        <link rel="stylesheet" type="text/css" href="./public/css/lightslider.css">
    </head>
    <body>
        <?php
            //dependencies
            include("src/includes/dependencies/_navigation.php");

            //modules
            include("src/includes/modules/home/_hero.php");
        ?>
        <div class="content" style="background-color:#303030;">
            <?php
                include("src/includes/modules/home/_about.php");
                include("src/includes/modules/home/_services.php");
                // include("src/includes/modules/home/_portfolio.php");
            ?>
        </div>
        <script type="text/javascript" src="./public/js/JQuery3.3.1.js"></script>
        <script type="text/javascript" src="./public/js/lightslider.js"></script>
        <script type="text/javascript" src="./public/js/main.js"></script>
        
    </body>
</html>
