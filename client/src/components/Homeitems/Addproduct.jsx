import React, { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";
import { addProduct } from "../../api/productRequest.js";
import { getAllware } from "../../api/productRequest";
function Addproduct({ setIsAddingproduct }) {
  const [productName, setName] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [ware, setWare] = useState("");

  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);
  const [wares, setWares] = useState([]);
  useEffect(() => {
    getwarehouses();
  }, []);
  const getwarehouses = async () => {
    const { data } = await getAllware();
    console.log(data, "ware");
    setWares(data);
  };
  const handleAdd = async (e) => {
    e.preventDefault();
    if (!productName || !price || !stock || !ware) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const newProduct = {
      productName,
      price,
      stock,
      ware,
    };
    const { data } = await addProduct(newProduct);
    console.log(data, "add data");

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${productName}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Product</h1>
        <label htmlFor="firstName">Product Name</label>
        <input
          id="productName"
          type="text"
          ref={textInput}
          name="productName"
          value={productName}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="lastName">Price</label>
        <input
          id="price"
          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor="registernum">Stock </label>
        <input
          id="stock"
          type="number"
          name="stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
        <label htmlFor="grade">Warehouse </label>
        
        <label for="cars">Choose a warehouse:</label>
        <select onChange={(e) => setWare(e.target.value)} name="cars" id="cars">
          {wares.map((options) => (
            <option value={options._id}>{options.warehouseName}</option>
          ))}
        </select>

        {/* <input type="radio"></input> */}

        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAddingproduct(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default Addproduct;
