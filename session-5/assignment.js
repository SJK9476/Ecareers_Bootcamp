let itemArray = [
    {
        item: 'PS4 Pro',
        stock: 3,
        original: 399.99,
    },
    {
        item: 'Xbox Series X',
        stock: 1,
        original: 499.99,
        discount: 0.1,
    },
    {
        item: 'Nintendo Switch',
        stock: 4,
        original: 299.99,
    },
    {
        item: 'PS2 Console',
        stock: 1,
        original: 299.99,
        discount: 0.8,
    },
    {
        item: 'Nintendo 64',
        stock: 2,
        original: 199.99,
        discount: 0.65,
    }
];

// let newItemArray = [];

// function calculateValue () {

//     itemArray.forEach((item) => {
        
//         if(item.discount) {
//             let salePrice = (item.original - (item.original * item.discount)).toFixed(2);

//             newItemArray.push({
//                 item: item.item,
//                 stock: item.stock,
//                 original: item.original,
//                 discount: item.discount,
//                 Sale: salePrice,
//                 total: (salePrice * item.stock).toFixed(2),
//             })
//         } else {
//             newItemArray.push(
//                 {
//                     item: item.item,
//                     stock: item.stock,
//                     original: item.original,
//                     total: (item.original * item.stock).toFixed(2),
//                 }
//             )
//         }
//     })

// }

// calculateValue();

// console.log(newItemArray);

let updatedSalesTotal = salesTotal(itemArray);
console.log(updatedSalesTotal);

function salesTotal(itemArray){
    let updatedItems = 
    itemArray.map(inputSale => {
        let {original, discount=0.0} = inputSale
        inputSale['sale'] = (original - original * discount).toFixed(2)
        inputSale['total'] = (inputSale.sale * inputSale.stock).toFixed(2)
        return inputSale
    });
    return updatedItems
}

// .map is more efficient when dealing with arrrays due to it automatically returning a new array. Avoids the need to declare an empty array variable.