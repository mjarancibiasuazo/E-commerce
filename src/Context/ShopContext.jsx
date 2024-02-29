import React, { createContext, useState } from 'react'
import all_product from '../Components/Assets/all_product'

{/*CREACIÓN DEL CONTEXTO: Se crea un nuevo contexto de React llamado ShopContext utilizando la función createContext. 
Este contexto se utilizará para pasar datos relacionados con la tienda (como el inventario de productos 
y el carrito de compras) a componentes secundarios de manera eficiente. */}

export const ShopContext = createContext(null);

{/*FUNCIÓN getDefaultCart: Se define una función llamada getDefaultCart, que inicializa un carrito de compras vacío con la cantidad de 
cada ítem establecida en 0. Esta función se utiliza para establecer el estado inicial del carrito de compras cuando 
se carga el componente ShopContextProvider.*/}

const getDefaultCart = () => {
    let cart = {};

    for (let index = 0; index < all_product.length+1; index++) {
            cart[ index ] = 0;
        }
        return cart;
    }

{/*COMPONENTE ShopContextProvider:
Este es el componente principal que actúa como un proveedor de contexto. Se define como una función llamada ShopContextProvider.
Utiliza el hook useState para definir un estado llamado cartItems, que representa el carrito de compras del usuario. Inicialmente, 
se establece con el valor devuelto por la función getDefaultCart.*/}
const ShopContextProvider = ( props ) => {
    
    const [ cartItems, setCartItems ] = useState( getDefaultCart());
  
    
{/*Define dos funciones, addToCart y removeFromCart, que se utilizan para agregar y eliminar elementos del carrito de compras, 
respectivamente. Estas funciones actualizan el estado del carrito de compras utilizando el hook setCartItems.*/}
    const addToCart = ( itemId ) => {
        setCartItems(( prev ) => ({...prev, [ itemId ]:prev[itemId]+1 }))

        console.log(cartItems);
    }

    const removeFromCart =  ( itemId ) => {
        setCartItems(( prev ) => ({...prev, [ itemId ]:prev[itemId]-1 }))
    }

    {/*TOTAL PRECIO PRODUCTOS */}
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for( const item in cartItems )
        {
            if( cartItems[ item ]>0 )
            {

                let itemInfo = all_product.find(( product )=> product.id===Number(item ))
                totalAmount += itemInfo.new_price * cartItems[ item ];
            }
           
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for( const item in cartItems )
        {
            if( cartItems[item]>0)
            {
                totalItem+= cartItems[ item ]
            }
            
        }
        return totalItem;
    }

{/*Crea un objeto contextValue que contiene el inventario de productos, el carrito de compras y las funciones para agregar y eliminar 
elementos del carrito.
Envuelve los componentes secundarios dentro del componente ShopContext.Provider, proporcionando el valor del contexto a través de la 
propiedad value. Esto permite que los componentes secundarios accedan a los datos y funciones proporcionadas por el contexto.
Finalmente, devuelve los componentes secundarios encapsulados dentro del proveedor de contexto.*/}
    const contextValue = {  getTotalCartItems, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart }
    return (
        <ShopContext.Provider value={ contextValue }>
            { props.children }
        </ShopContext.Provider>
    )
}

export default ShopContextProvider