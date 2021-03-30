import { useState } from "react"
import ProductForm from "../components/ProductForm";

export default props => {
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