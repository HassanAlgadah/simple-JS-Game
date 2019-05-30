<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>myGame</title>
    <style>
        .border {
            margin: 0;
            position: absolute;
            border: 3px solid black;
            width: 600px;
            height: 800px;
        }

        .cube {
            background-color: red;
            width: 80px;
            height: 80px;
            position: absolute;
            left: 400px;
            top: 400px;
        }

        #bu {
            width: 288px;
            height: 70px;
            left: 150px;
            position: relative;
            top: 30px;
            color: black;
            background-color: darkred;
            background-image: url("download.png");
            background-position: 50% 50%;
            border: none;
        }


        .inc {
            position: relative;
            left: -400px;
        }

        #text {
            float: right;
            margin-right: 40%;
        }

        #info {
            margin-bottom: 30%;
        }
        table, th, td {
            border: 1px solid black;
            padding: 5px;

        }


    </style>
    <script src="MyGame.js"></script>
</head>
<body>
<div id="text">

    <div id="info">
        <p id="cor" style="color: darkred ; font-size: 50px" >Try not to Touch the Red Block</p>
        <p id="corr" style="top: 180px ;font-size: 40px; color: darkred"></p>
        <p id="dd" style="font-size: 40px; color: darkred" ></p>

        <form>
            <label style="font-size: 20px">increase difficulty as time pass
                <input type="checkbox" id="checkbo">
            </label>
        </form>
    </div>

    <div id="data">
            <p style="color: darkred">your name: <input id="nameof" type="text" name="nameof"></p>
            <button onclick="showUser()"> submit score!</button>
    </div>
    <table style="margin-top: 50px">
        <th>name</th>
        <th>score</th>
        <th>level</th>

        <?php
        $con = mysqli_connect("localhost","root","","swe");
        if(mysqli_errno($con)){
            echo "somrthing went wrong";
        }
        $qury = "SELECT * FROM scoring ORDER BY LEVEL DESC";
        $result = mysqli_query($con,$qury);
        while($row = mysqli_fetch_array($result)) {
            echo "<tr>";
            echo "<td>" . $row['NAME'] . "</td>";
            echo "<td>" . $row['SCORE'] . "</td>";
            echo "<td>" . $row['LEVEL'] . "</td>";
            echo "</tr>";
        }
        ?>
    </table>


</div>
<div id="border" class="border">
    <button id="bu"></button>
    <button class="inc" style="left:155px" id="incress" onclick="incres()">increase difficulty<br>+</button>
    <button class="inc" id="dcress" onclick="decress()">decrease difficulty <br>-</button>
    <div id="cube" class="cube">
        <img src="Capture.PNG" height="80px" width="80px">
    </div>
</div>

</body>
</html>