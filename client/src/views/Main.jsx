import axios from "axios";
import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import Create from '../views/Create';

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
            <Create />
            <hr/>
            {products && <ProductList productsList={products} />}
        </>
    );
}