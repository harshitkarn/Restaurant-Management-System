<?php
if(!(isset($_GET['username']))){
    header("Location: ../index.html");
    exit;
}
if($_GET['username']=='hk4602'&&$_GET['password']=='9521246172'){
    //echo "login success";
}
else{
    echo '<script type="text/JavaScript">
    alert("Invalid username or password");
    window.location="../index.html";
    </script>';
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Page</title>
</head>
<body>
    <div>Adding soon</div>
</body>
</html>