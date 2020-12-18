import React from 'react';
import ItemCount from '../../components/ItemCount/ItemCount';


class ItemListContainer extends React.Component {

    render(){
        const {saludo} = this.props

        let stock = 10;
        const handleAdd = (counter) => {

            return () =>{
                if(stock <= 0){
                    alert('No hay stock')
                }else{
                    alert(`Se agregan ${counter} items`)
                }
            }          
        }

        return(
            <>
            <h1>{saludo}</h1>
            <div> 
            <ItemCount onAdd={handleAdd} stock={stock} inicial={1}/>
            </div>
            </>
        )
    }
}



export default ItemListContainer ;