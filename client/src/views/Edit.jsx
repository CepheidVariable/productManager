import { useState, useEffect } from "react"
import axios from 'axios';
import ProductForm from "../components/ProductForm";
import { navigate } from "@reach/router";

const Edit = props => {
    const [product, setProduct] = useState();

    const [errors, setErrors] = useState({
        title:"",
        price:"",
        description:""
    })

    useEffect( () => {
        axios.get('http://localhost:8000/api/products/' + props.id)
            .then(res => setProduct(res.data.results[0]))
            .catch(err => {
                console.log(err);
            });
    }, [props]);

    const handleChange = e =>{
        setProduct({
            ...product,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + props.id, product)
            .then(res => navigate('/'))
            .catch(err => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            });

        // setProduct({
        //     title: "",
        //     price: "",
        //     description: ""    
        // });
    }


    return(
        product ?
        <ProductForm
            inputs={product}
            action={"Edit Joke"}
            submitValue="Update"
            onChangeHandler={handleChange}
            onSubmitHandler={handleSubmit}
            errors={errors}
        /> : <h2>Loading...</h2>
    )
}

export default Edit;