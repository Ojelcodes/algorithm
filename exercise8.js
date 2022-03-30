// The student will get A+ grade if the total marks are in the range 89..100 inclusive,
// if the examination is "Final-exam." the student will get A+ grade and total marks must be greater than or equal to 90.
// Return true if the student get A+ grade or false otherwise.

function studentGrade(score, isfinalExam=false){
    // let grade=score;
    if (score>=90 && isfinalExam==true) {
       return true
    } else if (score>=89 && isfinalExam==false) {
        return true
    } else {
       return false
    }
}
console.log(studentGrade(100, true))
console.log(studentGrade(88))