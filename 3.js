let inventoryobject = [
    {
        name : 'book',
        category : 'stationary',
        priceinusd : 8
    },
    {
        name : 'pen',
        category : 'stationary',
        priceinusd : 5
    },
    {
        name : 'pencil',
        category : 'stationary',
        priceinusd : 2
    },
    {
        name : 'eraser',
        category : 'stationary',
        priceinusd : 1
    },
    {
        name : 'sharpner',
        category : 'stationary',
        priceinusd : 1
    }
]

let exchangerate = 80;

function convertingintoinr(priceinusd){
    return priceinusd * exchangerate;
}

let inventoryininr = inventoryobject.map((item) => ({
    ...item,    //The spread operator ...item creates a copy of the existing properties of the item object.
    priceinr : convertingintoinr(item.priceinusd),  //his adds a new property priceinr to the object, which is calculated by converting the priceinusd property of the item to INR using the convertingintoinr function.
}))

console.log(inventoryininr);


 


