name1 = document.getElementById("Text");
submetBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function(){
    let grade = Number(name1.value);
    let latterGrade ;
    let showPrefix = true;

    switch (true) {
        case isNaN(grade):
            latterGrade = "Please enter a valid number.";
            showPrefix = false;
            break;
        case (grade < 0 || grade > 100):
            latterGrade = "Please enter a number between 0 and 100.";
            showPrefix = false;
            break;
        case (grade >= 90 && grade <= 100):
            latterGrade = "A+";
            break;
        case (grade >= 85 && grade < 90):
            latterGrade = "A+";
            break;
        case (grade >= 80 && grade < 85):
            latterGrade = "A";
            break;
        case (grade >= 75 && grade < 80):
            latterGrade = "B+";
            break;
        case (grade >= 70 && grade < 75):    
            latterGrade = "B";
            break;
        case (grade >= 65 && grade < 70):    
            latterGrade = "C+";
            break;
        case (grade >= 60 && grade < 65):    
            latterGrade = "C";
            break;
        case (grade >= 55 && grade < 60):    
            latterGrade = "D+";
            break;
        case (grade >= 50 && grade < 55):    
            latterGrade = "D";
            break;
        default:
            latterGrade = "F";
            showPrefix = false;
            break;
    }

    const resultElement = document.getElementById("result");
    if (showPrefix) {
        resultElement.innerHTML = `<span class="grade-label">Your grade is:</span> <span id="gradeValue">${latterGrade}</span>`;

    } else if(showPrefix === false) {
        resultElement.innerHTML = `<span class="grade-label">Your grade is:</span> <span id="gradeValue" style="color: red; font-weight: bold; font-size: 18px;">${latterGrade}</span>`;
    }else {
        resultElement.innerHTML = `<span style="color: red; font-weight: bold; font-size: 18px;">${latterGrade}</span>`;

    }
});
