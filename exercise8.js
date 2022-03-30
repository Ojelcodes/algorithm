// The student will get A+ grade if the total marks are in the range 89..100 inclusive,
// if the examination is "Final-exam." the student will get A+ grade and total marks must be greater than or equal to 90.
// Return true if the student get A+ grade or false otherwise. 

function studentGrade(a, finalExam=false){
    let grade=a;
    if (a>=90 && finalExam==true) {
       return true
    } else if (a>=89 && finalExam==false) {
        return true
    } else {
       return false
    }
}
console.log(studentGrade(100, true))