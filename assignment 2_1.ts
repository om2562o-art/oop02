type Student = [string, number];

const students: Student[] = [
    ["Alice", 85],
    ["Bob", 72],
    ["Charlie", 58],
    ["David", 45]
];

for (const [name, score] of students) {
    if (score >= 80) grade = "A";
    else if (score >= 70) grade = "B";
    else if (score >= 60) grade = "C";
    else if (score >= 50) grade = "D";
    else grade = "F";

    console.log(`${name} received ${score} and grade ${grade}`);
}