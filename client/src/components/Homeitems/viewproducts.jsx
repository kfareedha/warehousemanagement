import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getAllproducts } from "../../api/productRequest";

function Productlist() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getproducts();
  }, []);
  const getproducts = async () => {
    const { data } = await getAllproducts();
    console.log(data, "pro");
    setProducts(data);
  };

  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Stock</th>
            <th>Warehouse</th>
          </tr>
        </thead>
        <tbody>
          {products?.length > 0 ? (
            products.map((product, i) => (
              <tr key={product.id}>
                <td>{i + 1}</td>
                <td>{product.productName}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>

                <td>{product?.warehouse?.warehouseName} </td>
                
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Products</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Productlist;
