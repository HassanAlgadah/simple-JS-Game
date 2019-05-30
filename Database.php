<?php


$name = $_GET["name"];
$score = $_GET["score"];
$level = $_GET["level"];

    $con = mysqli_connect("localhost","root","","swe");
    if(mysqli_errno($con)){
        echo "somrthing went wrong";
    }
    $qury = "INSERT INTO scoring VALUES('$name','$score','$level')";
    mysqli_query($con,$qury);
    mysqli_close($con);
    echo "its been added";

