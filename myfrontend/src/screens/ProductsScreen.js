import React, { useEffect, useState } from "react";
import {useDispatch, useSelector, } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { listProducts, saveProduct, deleteProduct } from "../actions/productActions";
import { signin } from "../actions/userActions";

function ProductScreen (props){
const [modalVisible, setModalVisible] = useState(false);
const [id, setId] = useState('');
const [name, setName] = useState('');
const [price, setPrice] = useState('');
const [image, setImage] = useState('');
const [brand, setBrand] = useState('');
const [category, setCategory] = useState('');
const [countInStock, setCountInStock] = useState('');
const [description, setDescription] = useState('');
const productList = useSelector(state => state.productList);
const {loading, products, error} = productList;

const productSave = useSelector(state=>state.productSave);
const {loading: loadingSave, success :successSave, error: errorSave} = productSave;

const productDelete = useSelector(state=>state.productDelete);
const { loading: loadingDelete, success :successDelete, error: errorDelete} = productDelete;
const dispatch = useDispatch();

useEffect(()=>{
    if(successSave){
        setModalVisible(false);
    }
    dispatch(listProducts());
    return () =>{ 
        //
    };
}, [successSave, successDelete]);
const openModale = (product) =>{
    setModalVisible(true);
    setId(product._id);
    setName(product.name);
    setPrice(product.price);
    setImage(product.image);
    setBrand(product.brand);
    setDescription(product.description);
    setCategory(product.category);
    setCountInStock(product.countInStock);

}
 const submitHandler = (e) =>{
     e.preventDefault();
     dispatch(saveProduct({_id: id,name, price, brand, image, category, countInStock, description}));
 }
 const deleteHandler = (product) =>{
  dispatch(deleteProduct(product._id));   
 }
return <div className="content content-margined"> 
    <div className="product-header">
        <h3>Products</h3>
        <button className="button primary" onClick={()=> openModale({})}>Create Product</button>
    </div>
    {modalVisible && <div className="form"> 
<form onSubmit= {submitHandler} >
    <ul className="form-container">
        <li><h2>Create Product</h2></li>
        <li>{ loadingSave && <div>loading...</div>}
            { errorSave && <div>error</div>}
        </li>
        <li><label htmlFor="name">Name  </label> 
        <input type="text" name="name" value={name} id="name" onChange={(e)=>setName(e.target.value)}></input>
        </li>
        <li><label htmlFor="price">Price  </label> 
        <input type="text" name="price"  value={price} id="price" onChange={(e)=>setPrice(e.target.value)}></input>
        </li>
        <li><label htmlFor="image">Image  </label> 
        <input type="text" name="image"  value={image} id="image" onChange={(e)=>setImage(e.target.value)}></input>
        </li>
        <li><label htmlFor="brand">Brand  </label> 
        <input type="text" name="brand"  value={brand} id="brand" onChange={(e)=>setBrand(e.target.value)}></input>
        </li>
        <li><label htmlFor="countInStock">Count In Stock  </label> 
        <input type="text" name="countInStock"  value={countInStock} id="countInStock" onChange={(e)=>setCountInStock(e.target.value)}></input>
        </li>
        <li><label htmlFor="category">Category  </label> 
        <input type="text" name="category"  value={category} id="category" onChange={(e)=>setCategory(e.target.value)}></input>
        </li>
        <li><label htmlFor="description">Description  </label> 
        <textarea name="description"  value={description} id="description" onChange={(e)=>setDescription(e.target.value)}></textarea>
        </li>
        <li>
            <button type="submit" className="button primary">{id ? "Update" : "Create"}</button>
        </li>
        <li>
            <button type="button" onClick={()=>setModalVisible(false)} className="button ">Back</button>
        </li>
    </ul>
</form>
</div>
    }

    <div className="product-list">
        <table className="tabel">
            <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Brand</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product =>( <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>
                    <button className="button " onClick={()=>openModale(product)}>Edit</button>
                    {" "}
                    <button className="button " onClick={()=>deleteHandler(product)}>Delete</button>
                </td>
            </tr>  ))}
         
            </tbody>
        </table>
    </div>
    


</div>
}
export default ProductScreen;
