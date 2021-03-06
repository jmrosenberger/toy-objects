const toyToFind = 5;


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

const yoyo = {
    id: 4,
    name: "yoyo",
    maker: "unknown",
    currentStock: 355,
    minRestock: 50,
    wholesalePrice: 1.00,
    listPrice: 3.00
};

const slingShot = {
    id: 5,
    name: "sling shot",
    maker: "unknown",
    currentStock: 35,
    minRestock: 25,
    wholesalePrice: 1.25,
    listPrice: 5.50
};


toys.push(yoyo);

toys.push(slingShot);



const addToyToInventory = (toyObject) => {
    const lastIndex = toys.length - 1
    const currentLastToy = toys[lastIndex]
    const maxId = currentLastToy.id
    const idForNewToy = maxId + 1

    toyObject.id = idForNewToy
    toys.push(toyObject)
}

const babyRattle = {
    name: "baby rattle",
    maker: "toymaker",
    currentStock: 55,
    minRestock: 15,
    wholesalePrice: 1.00,
    listPrice: 3.00
}

addToyToInventory(babyRattle)


//     ------ Commented out to reduce output in terminal
//            without losing prior work completed ------

console.log(toys);



for (const toy of toys) {

    console.log(toy.name)
};



for (const toy of toys) {
    
    if (toy.id === toyToFind) {

        
        toy.wholesalePrice = toy.wholesalePrice + toy.wholesalePrice.toFixed(2) * 0.05;
        
        toy.listPrice = toy.listPrice + toy.listPrice.toFixed(2) * 0.05;
        
        const profitMargin = (toy.listPrice - toy.wholesalePrice).toFixed(2);
        
        console.log(`The ${toy.name} costs $${toy.wholesalePrice} wholesale, with a list 
        price of $${toy.listPrice} which equals a profit of $${profitMargin} 
        per unit.
        `)
    }
}

