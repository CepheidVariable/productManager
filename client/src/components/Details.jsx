import axios from "axios";
import { useEffect, useState } from "react"

const Details = ({id}) => {
    const [product, setProduct] = useState({});

    // Create number formatter
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    
    useEffect( ()=> {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => setProduct(res.data.results[0]));
    }, [id]);

    return (
        product && 
            <div className="text-center mt-5">
                <p><strong>{product.title}</strong></p>
                <p>{product.description}</p>
                <p>{formatter.format(product.price)}</p>
            </div>
    )
}

export default Details;