document.getElementById('calc').addEventListener('click', result);

function result(event) {
    event.preventDefault();
    const inputs = document.querySelectorAll('input[type="number"]');
    let totalMarks = 0;

    inputs.forEach(input => {
        let value = parseFloat(input.value);
        totalMarks += value;
    });

    let averageMarks = totalMarks / inputs.length;

    document.getElementById('total').textContent = "Total marks: " + totalMarks;
    document.getElementById('average').textContent = "Average marks: " + averageMarks.toFixed(2);

    let grade;
    if (averageMarks <= 34) {
        grade = "Fail";
    } else if (averageMarks >= 90) {
        grade = "A+ GRADE";
    } else if (averageMarks >= 75) {
        grade = "A GRADE";
    } else if (averageMarks >= 60) {
        grade = "B GRADE";
    } else if (averageMarks >= 50) {
        grade = "C GRADE";
    } else {
        grade = "D GRADE";
    }

    document.getElementById('grade').textContent = "Grade: " + grade;
}
