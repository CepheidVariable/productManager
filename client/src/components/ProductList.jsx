import React from 'react';

export default ({productsList}) => {
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
                    {productsList.map( (p, idx) => {
                        return(
                            <tr key={idx}>
                                <td>{p.title}</td>
                                <td>{p.description}</td>
                                <td>{formatter.format(p.price)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}