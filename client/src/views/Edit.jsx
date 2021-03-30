import { useState } from "react"
import ProductForm from "../components/ProductForm";

const Edit = props => {
    const [product, setProduct] = useState({
        title: "",
        price: "",
        description: ""
    });

    return(
        <>
            <ProductForm
                inputs = {product}
        </>
    )
}

export default Edit;