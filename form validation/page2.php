<?php
session_start();
$try= "";
$error= "";
if(isset($_GET['email']) && isset($_GET['password'])){
    if($_SESSION['user']['email'] == $_GET['email'] && $_SESSION['user']['password'] == $_GET['password']){
    $email= $_GET['email'];
    $password= $_GET['password'];
    // echo "welcome"." ".$email." ".$password; 
    $try = "Welcome ".$_SESSION['user']['uname'];
    }else{
        $error= "404";
    }
}
?>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital@1&family=Modak&display=swap" rel="stylesheet"> 
        <title>Document</title>
        <style>
            body{
                background-image: url('sea.jpg');
                text-align: center;
                margin: 10%;
            }
            a{
                font-size: 2em;
                text-decoration: none;
                font-family: 'Lato', sans-serif;
                color: white;
            }
            span{
                font-size: 4em;
                color: white;
            }
            div{
                font-family: 'Modak', cursive;
              text-align: center;
              margin: 0 auto;
            background: #43C6AC;  /* fallback for old browsers */
            background: -webkit-linear-gradient(to right, #191654, #43C6AC);  /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to right, #191654, #43C6AC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
              width: 800px;
              height: 200px;
              border: 4px solid #333333;
              border-radius: 5px;
              box-sizing: border-box;
            }
        </style>
    </head>
    <body>
        <div>
            <span><?= $try ;?></span>
            <span><?= $error ;?></span> <br>
    <a href="https://bendor.tk/stav/indextasks1.php">RETURN TO MAIN PAGE</a>
    </div>  
</body>
    </html>