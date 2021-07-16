const toys = [
    {
        id: 1,
        name: "furby",
        maker: "mattel",
        currentStock: 1500,
        minRestock: 100,
        wholesalePrice: 1.00,
        listPrice: 25.00
    },
    {
        id: 2,
        name: "stretch armstrong",
        maker: "mattel",
        currentStock: 1200,
        minRestock: 100,
        wholesalePrice: 2.00,
        listPrice: 22.00
    },
    {
        id: 3,
        name: "gi joe",
        maker: "hasbro",
        currentStock: 900,
        minRestock: 100,
        wholesalePrice: 2.50,
        listPrice: 35.00
    }
];

const sillyPutty = {
    id: 4,
    name: "silly putty",
    maker: "unknown",
    currentStock: 776,
    minRestock: 150,
    wholesalePrice: 0.75,
    listPrice: 2.75
};

toys.push(sillyPutty);


console.log(toys);

for (const toy of toys) {
    console.log(toy.name)
}

