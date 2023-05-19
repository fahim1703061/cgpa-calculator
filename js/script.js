function calculateCGPA() {
    var currentCGPA = parseFloat(document.getElementById('current-cgpa').value);
    var semestersCompleted = parseInt(document.getElementById('semesters-completed').value);
    var totalSemesters = 8;
    var targetCGPA = parseFloat(document.getElementById('target-cgpa').value);
    var targetSemesters = parseInt(document.getElementById('target-semesters').value);

    if (semestersCompleted >= totalSemesters) {
        document.getElementById('required-gpa').innerHTML = "You have completed all semesters.";
        return;
    }

    var remainingSemesters = targetSemesters - semestersCompleted;
    var totalPoints = currentCGPA * semestersCompleted;
    var targetPoints = targetCGPA * targetSemesters;
    var requiredPoints = targetPoints - totalPoints;
    var requiredGPA = requiredPoints / remainingSemesters;

    document.getElementById('required-gpa').innerHTML = "You need to earn a GPA of at least " + requiredGPA.toFixed(2) + " in the next semester to achieve a CGPA of " + targetCGPA + " after " + targetSemesters + " semester(s).";
}
