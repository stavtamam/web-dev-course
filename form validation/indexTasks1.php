<?php
session_start();
$user = [
    "uname" => "stav tamam",
    "email" => "stavtamam@gmail.com",
    "password" => "131097"
];
$_SESSION['user'] = $user;

# check if the email and password valid V
# check password min 6 char 
# show error massage for each one of the inputs V
# if everthing is ok redirect the user to a new page with welcome massage V
# for email use regex 


$err ="";
if(isset($_POST['submit'])){
    if(isset($_POST['email']) && isset($_POST['password'])){
        if(preg_match("/[\D][\w]/", $_POST['email']) && $_POST['email'] === $user['email']){
            if(!empty($_POST['password']) && is_numeric($_POST['password']) && $_POST['password'] === $user['password']){
                $email = $_POST['email'];
                $password = $_POST['password'];
                header("location: page2.php?email=$email&password=$password");
            }else{
                $err = "you must enter valid details";
            }
        }
    }
}




?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital@1&family=Modak&display=swap" rel="stylesheet"> 
        <title>form validation</title>
        <style>
            body{
                background-image: url('sea.jpg');
                padding: 5%;
            }
            .div{
              text-align: center;
              margin: 0 auto;
            background: #43C6AC;  /* fallback for old browsers */
            background: -webkit-linear-gradient(to right, #191654, #43C6AC);  /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to right, #191654, #43C6AC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
              width: 500px;
              height: 500px;
              border: 4px solid #333333;
              border-radius: 5px;
              box-sizing: border-box;
            }
            h2{
            font-family: 'Modak', cursive;
            font-size: 5em;
            text-align: center;
            color: white;
            margin: 0;
            }
label{
    font-size: 2em;
    font-family: 'Lato', sans-serif;
    color: white;
}
input{
    border-radius: 5px;
    font-size: 1.5em;
    font-family: 'Lato', sans-serif;
}
.div2{
    margin: 2% 2%;
    width: 50px;
    height: 50px;
    
}

        </style>
    </head>
<body>
    <div class= "div">
        <div class= "div2">
        <a href="https://bendor.tk/stav/indextasks1.php"><img src="https://img.icons8.com/plasticine/50/000000/trash--v1.png"/> </a>
        </div>
        <h2>Sign In</h2>
        <form action="https://bendor.tk/stav/indextasks1.php" method="post">
  <label for="email">Email:</label><br>
  <input type="email" name="email" ><br>  
  <label for="password">Password:</label><br>
  <input type="password" name="password" ><br><br>
  <input type="submit" name="submit" value="Submit">
</form> 
<span style="color: red"><?= $err ;?></span>
</div>
  </body>
  </html>
