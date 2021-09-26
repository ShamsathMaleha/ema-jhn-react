import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {


    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data);
            setDisplayProduct(data);
        });
            
        
    },[]);
   

    const [cart, setCart]=useState([]);

    useEffect(()=>{
        if(products.length){
             const saveCart =getStoredCart();
             const storedCart =[];

            for(const key in saveCart ){
                const addedProduct = products.find(product => product.key === key);
                if(addedProduct){
                    const quantity = saveCart[key];
                    addedProduct.quantity=quantity;
                    storedCart.push(addedProduct)
                }
              
            }
            setCart(storedCart);
         }

    },[products])

    const[displayProducts,setDisplayProduct]=useState([]);

   
    
    const handleAddToCart =(product)=>{
        const newCart =[...cart, product];
        setCart(newCart);
        // save to local storage 
        addToDb(product.key)
    }


    const handleSearch =event =>{
        const serachText =event.target.value;
        const matchedProducts =products.filter (product=>product.name.toLowerCase().includes(serachText.toLowerCase()))
        setDisplayProduct(matchedProducts);
    }
    return (

        <>

        <div className="search-container">
            <input type="text" onChange={handleSearch} placeholder="search" />
        </div>
                <div className="shop-container">
                <div className="product-container">
                    
                    {
                        displayProducts.map(product=> <Product 
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}
                            />)
                    }
                </div>
                <div className="cart-container">
                <Cart cart={cart}></Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;