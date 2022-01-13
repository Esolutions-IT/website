<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="./public/css/package.min.css" />
    </head>
    <body>
        <?php
            //dependencies
            include("src/includes/dependencies/_navigation.php");

            //modules
            include("src/includes/modules/home/_hero.php");
        ?>
        <div class="content">
            <?php
                include("src/includes/modules/home/_about.php");
                include("src/includes/modules/home/_services.php");
            ?>
        </div>

        <script src="./public/js/main.js"></script>
    </body>
</html>
