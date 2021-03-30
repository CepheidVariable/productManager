import { useState } from "react"
import ProductForm from "../components/ProductForm";
import axios from 'axios';

export default props => {
    const [product, setProduct] = useState({
        title: "",
        price: "",
        description: ""
    });

    const handleChange = e =>{
        setProduct({
            ...product,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', product)
            .then(res => console.log("response: ", res))
            .catch(err => console.log("error: ", err));

        setProduct({
            title: "",
            price: "",
            description: ""    
        });
    }

    return(
        <>
            <ProductForm
                inputs={product}
                title={"Create Joke"}
                submitValue="Create"
                onChangeHandler={handleChange}
                onSubmitHandler={handleSubmit}
            />
        </>
    )
}