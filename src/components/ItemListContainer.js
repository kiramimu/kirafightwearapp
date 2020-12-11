import React from 'react';


class ItemListContainer extends React.Component {

    render(){
        const {saludo} = this.props

        return(
            <h1>{saludo}</h1>
        )
    }
}


export default ItemListContainer ;