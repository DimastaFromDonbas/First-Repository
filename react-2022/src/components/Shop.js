import React, { useState } from "react";
import {Container,Row} from 'react-bootstrap'
import Product from "./Product";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { selectAllProducts } from "../rdx/items/selectors";
import { setProducts } from "../rdx/items/actions";
import FilterProduct from "./FilterProduct";

function Shop() {
    const products = useSelector(selectAllProducts)
    const dispatch = useDispatch()

    const [seachProductPrice, setSeachProductPrice] = useState("")
    const [searchProductPriceMax, setsearchProductPriceMax] = useState(0)

    function processSearchProduct(e){
        let search = Number(e.currentTarget.value)
        setSeachProductPrice(search || '');
    }

    function processSearchProductMax(e){
        let search = e.currentTarget.value
        if(Number(search) < Number(seachProductPrice)) {
            setSeachProductPrice(0)
        }
        setsearchProductPriceMax(search)
    }

    function selectProduct(id ,value) {
        // setProducts( products.filter(product => product.id !== id))
        dispatch(setProducts(products.map((product) => {
            if(product.id === id) {
                return {...product, selected: value}
            }
                return {...product}
        })))
    }



    return<> 

    <Cart selectProduct={selectProduct} products={products.filter(el => el.selected)} />

    <FilterProduct seachProductPrice={seachProductPrice} processSearchProduct = {processSearchProduct} processSearchProductMax={processSearchProductMax} products = {products} />

    <Container>
        <Row>
            {products.filter(product => searchProductPriceMax > 0 ? product.price >= seachProductPrice && product.price <= searchProductPriceMax : product.price >= seachProductPrice).map(product => <Product selectProduct={selectProduct} key={product.id}  product={product} />)}
        </Row>
    </Container>
     </>
}

export default Shop

