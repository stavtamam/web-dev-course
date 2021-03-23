<?php
// $date = $_POST['date'];

//todays date split:
$today = new DateTime().toLocaleDateString().split('/');
$todayYear = today[2].str_split($today);
$todayMonth = today[0].split('');
$todayMonthNum = parseInt(today[0]);
//birthday split:
$date;
$birthDay;
$birthMonth;
$birthMonthNum;

//spliting and summing the digits from the input:
function digits($digit) {
    $digitSum = 0;
    if ($digit.length >= 4) {
        $digitSum +=
            parseInt($digit[0]) +
            parseInt($digit[1]) +
            parseInt($digit[2]) +
            parseInt($digit[3]);
        return $digitSum;
    } else if ($digit.length > 1) {
        $digitSum += parseInt($digit[0]) + parseInt($digit[1]);
        $digitSplit = $digitSum.toString().split('');
        // console.log(digitSum);

        if ($digitSplit.length > 1) {
            $digitSum = parseInt($digitSplit[0]) + parseInt($digitSplit[1]);
            // console.log(digitsSum);
            return $digitSum;
        } else {
            // console.log(digit);
            return $digitSum;
        }
    } else {
        // console.log(digit);
        return $digit;
    }
}

//taking the results from digits and calculating personal year:
function personalYear() {
    if ($birthMonthNum > 6) {
        $a = 1;
        $digitsSum = a + digits($birthDay) + digits($birthMonth) + digits($todayYear);
        $g = digitsSum.toString().split('');
        $g = parseInt($g[0]) + parseInt($g[1]);
        return $g;
    } else {
        $a = 0;
        $digitsSum = $a + digits($birthDay) + digits($birthMonth) + digits($todayYear);
        $f = $digitsSum.toString().split('');
        if (f.length > 1) {
            $g = parseInt($f[0]) + parseInt($f[1]);
            return $g;
        } else {
            $f = parseInt($f);
            console.log($f);
            return $f;
        }
    }
}

//taking the result from personal year tand calculating previous personal year:
function prevPersonalYear() {
    if (personalYear() == 1) {
        return 9;
    } else {
        $h = personalYear() - 1;
        return $h;
    }
}

//calculating which function to turn on...
function thisYear() {
    $j;
    if ($birthMonthNum > $todayMonthNum) {
        $j = prevPersonalYear();
        // console.log(j)
        return $j;
    } else {
        $j = personalYear();
        // console.log(j)
        return $j;
    }
}


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Your Personal Year</title>
</head>
<body>
<h1>Your Date Of Birth:</h1>
<form action="tarotcards.php" method="post">
    <input type="date" name= "date">
    <input type="submit" id="submit" value="submit" name="submit">
</form>
</body>
</html>