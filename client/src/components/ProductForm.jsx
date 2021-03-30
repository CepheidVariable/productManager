const ProductForm = props =>{
    const {inputs, onChangeHandler, onSubmitHandler, action, submitValue, errors} = props;

    return (
        <form onSubmit={onSubmitHandler} className="col-6 mt-2">
            <h2 className="text-center mb-3">{action}</h2>
            <div className="form-group row">
                <label htmlFor="title" className="col-sm-3 col-form-label">Title:</label>
                <div className="col-sm-9">
                    <input
                        type="text"
                        name="title"
                        className="form-control"
                        value= {inputs.title}
                        onChange={onChangeHandler}
                    />
                </div>
                <span className="text-danger offset-3 pl-3">{errors.title && errors.title.message}</span>
            </div>           
            <div className="form-group row">
                <label htmlFor="price" className="col-sm-3 col-form-label">Price:</label>
                <div className="col-sm-3 input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                    </div>
                    <input
                        type="text"
                        name="price"
                        className="form-control"
                        value={inputs.price}
                        onChange={onChangeHandler}
                    />
                </div>
            <span className="text-danger text-left offset-3 pl-3 col-7">{errors.price && errors.price.message}</span>
            </div>
            <div className="form-group row">
                <label htmlFor="description" className="col-sm-3 col-form-label">Description:</label>
                <div className="col-sm-9">
                    <textarea
                        name="description"
                        className="form-control"
                        value={inputs.description}
                        onChange={onChangeHandler}
                    />
                </div>
                <span className="text-danger offset-3 pl-3">{errors.description && errors.description.message}</span>
            </div>
            <div className="form-group row">
                <div className="col-sm-2">
                    <input
                        type="submit"
                        className="form-control btn btn-dark"
                        value={submitValue}
                    />
                </div>
            </div>
        </form>
    )
}

export default ProductForm;