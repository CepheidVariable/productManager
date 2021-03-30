import axios from "axios";
import { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

export default() => {
    const [products, setProducts] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data.results);
                setIsLoaded(true);
            });
    }, []);

    return (
        <>
            <ProductForm />
            <hr/>
            {isLoaded && <ProductList productsList={products} />}
        </>
    );
}