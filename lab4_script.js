const calculate= () => {
    var cr1 = parseInt(document.getElementById("firstclassCredit").value);
    var cr2 = parseInt(document.getElementById("secondclassCredit").value);
    var cr3 = parseInt(document.getElementById("thirdclassCredit").value);
    var cr4 = parseInt(document.getElementById("fourthclassCredit").value);
    var cr5 = parseInt(document.getElementById("fifthclassCredit").value);
    var gr1 = document.getElementById("firstclassScore").value;
    var gr2 = document.getElementById("secondclassScore").value;
    var gr3 = document.getElementById("thirdclassScore").value;
    var gr4 = document.getElementById("fourthclassScore").value;
    var gr5 = document.getElementById("fifthclassScore").value;

    var num1 = 0, num2 = 0, num3 = 0, num4 = 0, num5 = 0;
    if(gr1 == 'A'){
        num1 = 4.0;
    }
    else if (gr1 == 'B'){
        num1 = 3.0;
    }
    else if (gr1 == 'C'){
        num1 = 2.0;
    }
    else if (gr1 == 'D'){
        num1 = 1.0;
    }
    else if (gr1 == 'F'){
        num1 = 0.0;
    }
    else alert("Please enter a valid letter grade for Course 1");

    if(gr2 == 'A'){
        num2 = 4.0;
    }
    else if (gr2 == 'B'){
        num2 = 3.0;
    }
    else if (gr2 == 'C'){
        num2 = 2.0;
    }
    else if (gr2 == 'D'){
        num2 = 1.0;
    }
    else if (gr2 == 'F'){
        num2 = 0.0;
    }
    else alert("Please enter a valid letter grade for Course 2");

    if(gr3 == 'A'){
        num3 = 4.0;
    }
    else if (gr3 == 'B'){
        num3 = 3.0;
    }
    else if (gr3 == 'C'){
        num3 = 2.0;
    }
    else if (gr3 == 'D'){
        num3 = 1.0;
    }
    else if (gr3 == 'F'){
        num3 = 0.0;
    }
    else alert("Please enter a valid letter grade for Course 3");

    if(gr4 == 'A'){
        num4 = 4.0;
    }
    else if (gr4 == 'B'){
        num4 = 3.0;
    }
    else if (gr4 == 'C'){
        num4 = 2.0;
    }
    else if (gr4 == 'D'){
        num4 = 1.0;
    }
    else if (gr4 == 'F'){
        num4 = 0.0;
    }
    else alert("Please enter a valid letter grade for Course 4");

    if(gr5 == 'A'){
        num5 = 4.0;
    }
    else if (gr5 == 'B'){
        num5 = 3.0;
    }
    else if (gr5 == 'C'){
        num5 = 2.0;
    }
    else if (gr5 == 'D'){
        num5 = 1.0;
    }
    else if (gr5 == 'F'){
        num5 = 0.0;
    }
    else alert("Please enter a valid letter grade for Course 5");

    var total = (cr1 * num1) + (cr2 + num2) + (cr3 + num3) + (cr4 + num4) + (cr5 * num5);
    var gpa = total/(cr1 + cr2 + cr3 + cr4 + cr5);
    document.getElementById("GPA").innerHTML = "GPA: "+gpa.toFixed(2);
}