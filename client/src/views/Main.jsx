import axios from "axios";
import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import Create from '../views/Create';

const Main = () => {
    const [products, setProducts] = useState();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data.results);
            });
    }, []);

    const handleDestroyProduct = id => {
        console.log(id);
        axios.delete('http://localhost:8000/api/products/' + id)
            .then(res => setProducts(res.data.results))
            .catch(err => console.log(err))
    }

    return (
        <>
            <Create />
            <hr/>
            {products && 
                <ProductList
                    productsList={products}
                    destroyHandler={handleDestroyProduct}
                />
            }
        </>
    );
}

export default Main;