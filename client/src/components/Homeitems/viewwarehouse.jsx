import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getAllware } from "../../api/productRequest";

function Warelist() {
  const [wares, setWares] = useState([]);
  useEffect(() => {
    getwarehouses();
  }, []);
  const getwarehouses = async () => {
    const { data } = await getAllware();
    console.log(data, "ware");
    setWares(data);
  };

  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Warehouse Name</th>
          </tr>
        </thead>
        <tbody>
          {wares?.length > 0 ? (
            wares.map((ware, i) => (
              <tr key={ware.id}>
                <td>{i + 1}</td>
                <td>{ware.warehouseName}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Warehouses</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Warelist;
