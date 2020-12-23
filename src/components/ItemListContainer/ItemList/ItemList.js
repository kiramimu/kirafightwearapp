import React from 'react';
import Item from '../Item/Item.js'

function ItemList({ items }) {
    return <>
        <li> items[0] </li>
        <li> items[0] </li>
        <li> items[0] </li>
    </>
    // Desarrolla la vista utilizando un array de items y un map
}


export default ItemList



let promesa = new Promise((resultado)=>{
    setTimeout(resultado(products),2000)
});

    
promesa.then((resultado)=>{
    
})
    
    
    
    
products.map((item)=>{
    return <Item /*aqui van los params de cada item*/ />
})