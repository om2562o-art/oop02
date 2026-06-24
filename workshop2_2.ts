let score: number = 10;
let grade:string = '';
if (score>=80){
    grade = 'A'
}else if (score>=70){
    grade = 'B'
}else if (score>=60){
    grade = 'C'
}else if (score>=50){
    grade = 'D'
}else{
    grade = 'F'
}
console.log("--- Grading Result ---");
console.log("Success Case: Score: %d | Grade: %s",score,grade);
console.log("----------------------")