import axios from "axios";
import { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

export default() => {
    const [products, setProducts] = useState();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data.results);
            });
    }, []);

    return (
        <>
            <ProductForm />
            <hr/>
            {products && <ProductList productsList={products} />}
        </>
    );
}