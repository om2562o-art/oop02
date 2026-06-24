let inventory: [string, number, number][] = [
    ["Laptop", 999.99, 10],
    ["Smartphone", 599.99, 25],
    ["Tablet", 299.99, 15],
    ["Monitor", 199.99, 20],
    ["Keyboard", 49.99, 30]
];

for (let product of inventory) {
    console.log(`Product: ${product[0]}, Price: $${product[1]}, Quantity: ${product[2]}`);
}