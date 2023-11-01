<?php
function getLetterGradeColor($grade) {
    switch (strtoupper($grade)) {
        case "A":
            return "green";
        case "B":
            return "blue";
        case "C":
            return "yellow";
        case "D":
            return "pink";
        case "F":
            return "red";
        default:
            return "black";
    }
}

$grade = $_POST["grade"];
$color = getLetterGradeColor($grade);

echo "<label style='color: $color;'>$grade</label>";
?>