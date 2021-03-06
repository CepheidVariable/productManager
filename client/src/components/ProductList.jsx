import {Link} from '@reach/router';

const ProductList = props => {
    const {productsList, destroyHandler} = props;
    // Create number formatter
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return(
        <div>
            <h2 className="mt-5">Products List:</h2>
            <table className="table col-8  ml-auto mr-auto">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {productsList.map( (p, idx) => 
                        <tr key={idx}>
                            <td>{<Link to={`products/show/${p._id}`} >{p.title}</Link>}</td>
                            <td>{p.description}</td>
                            <td>{formatter.format(p.price)}</td>
                            <td>
                                <Link to={`products/edit/${p._id}`} className="btn btn-sm btn-secondary">Edit</Link>
                                <button onClick={() => destroyHandler(p._id)} className="btn btn-sm btn-danger ml-2">Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ProductList;