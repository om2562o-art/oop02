let scores: number[] = [75, 85, 95, 64, 35];

let std: [number, string] = [1, "John Doe"];

let scoresString: string = scores.join(",");
console.log(`Score: ${scoresString}`);

console.log(`Student ID: ${std[0]}, Name: ${std[1]}`);

let totalScore: number = 0;
for (let i = 0; i < scores.length; i++) {
    console.log(`Test ${i + 1} Score: ${scores[i]}`);
    totalScore += scores[i];
}

let averageScore: number = totalScore / scores.length;

console.log(`Total Score: ${totalScore}`);
console.log(`Average Score: ${averageScore}`);