import React, { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";
import { addWarehouse } from "../../api/productRequest.js";
function AddWarehouse({ warehouse, setIsAddingWare }) {
  const [ware, setWare] = useState("");
  console.log(ware);

  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!ware) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "wareHouse number is required.",
        showConfirmButton: true,
      });
    }
    console.log(ware, "wareeee");

    const { data } = await addWarehouse(ware);
    console.log(data, "add data");

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: "data has been Added",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Warehouse</h1>
        <label htmlFor="firstName">Warehouse Name</label>
        <input
          id="ware"
          type="text"
          ref={textInput}
          name="ware"
          value={ware}
          onChange={(e) => setWare(e.target.value)}
        />

        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAddingWare(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default AddWarehouse;
