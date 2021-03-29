import { useState } from "react";
import axios from 'axios';

export default props =>{
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();

    const onSubmitHandler = e => {
        e.preventDefault();
        
    }

    return (
        <form onSubmit={onSubmitHandler} className="col-6 mt-5">
            <div className="form-group row">
                <label htmlFor="title" className="col-sm-3 col-form-label">Title:</label>
                <div className="col-sm-2">
                    <input className="form-control" name="title" onChange={ e => setTitle(e.target.value) } />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="price" className="col-sm-3 col-form-label">Price:</label>
                <div className="col-sm-2">
                    <input className="form-control" name="price" onChange={ e => setPrice(e.target.value) } />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="description" className="col-sm-3 col-form-label">Description:</label>
                <div className="col-sm-2">
                    <input className="form-control" name="description" onChange={ e => setDescription(e.target.value) } />
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-2">
                    <input className="form-control btn btn-dark" type="submit" value="Submit" />
                </div>
            </div>
        </form>
    )
}