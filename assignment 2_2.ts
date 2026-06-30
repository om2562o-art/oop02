type Book = [string, boolean];

const library: Book[] = [
    ["The Great Gatsby", true],
    ["To Kill a Mockingbird", false],
    ["1984", true],
    ["Pride and Prejudice", false],
    ["The Catcher in the Rye", false]
];

let available = 0;
let borrowed = 0;

for (const [title, isBorrowed] of library) {
    if (isBorrowed) {
        console.log(`${title} - Status: Borrowed`);
        borrowed++;
    } else {
        console.log(`${title} - Status: Available`);
        available++;
    }
}

console.log(`Total Available Books: ${available}`);
console.log(`Total Borrowed Books: ${borrowed}`);