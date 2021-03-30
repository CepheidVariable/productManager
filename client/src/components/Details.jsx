import axios from "axios";
import { useEffect, useState } from "react"

export default ({id}) => {
    const [product, setProduct] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    // Create number formatter
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    
    useEffect( ()=> {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => setProduct(res.data.results[0]));
            setIsLoaded(true);
    }, []);

    return (
        <div className="text-center mt-5">
            <p><strong>{isLoaded && product.title}</strong></p>
            <p>{isLoaded && product.description}</p>
            <p>{isLoaded && formatter.format(product.price)}</p>
        </div>
    )
}