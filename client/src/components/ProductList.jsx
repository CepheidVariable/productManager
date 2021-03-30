import {Link} from '@reach/router';

const ProductList = ({productsList}) => {
    // Create number formatter
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return(
        <div>
            <h2>Products List:</h2>
            <table className="table col-8  ml-auto mr-auto">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {productsList.map( (p, idx) => 
                        <tr key={idx}>
                            <td>{<Link to={`people/${p._id}`} >{p.title}</Link>}</td>
                            <td>{p.description}</td>
                            <td>{formatter.format(p.price)}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ProductList;