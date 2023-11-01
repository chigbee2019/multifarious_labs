<?php
function calculateLetterGrade($gpa) {
    if ($gpa >= 3.5) {
        return ['letter' => 'A', 'color' => 'green'];
    } elseif ($gpa >= 2.7) {
        return ['letter' => 'B', 'color' => 'blue'];
    } elseif ($gpa >= 2.0) {
        return ['letter' => 'C', 'color' => 'yellow'];
    } elseif ($gpa >= 1.5) {
        return ['letter' => 'D', 'color' => 'pink'];
    } else {
        return ['letter' => 'F', 'color' => 'red'];
    }
}

$gpa = floatval($_POST["gpa"]);
$letterGrade = calculateLetterGrade($gpa);
echo json_encode($letterGrade);
?>
