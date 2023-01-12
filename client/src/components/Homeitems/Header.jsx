import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Addproduct from "../../components/Homeitems/Addproduct";
import AddWarehouse from "../../components/Homeitems/Addwarehouse";
import Viewproducts from "../../components/Homeitems/viewproducts";
import Viewwares from "../../components/Homeitems/viewwarehouse";

function Header({ setIsAddingWare, setIsAddingproduct }) {
  const [show, setShow] = useState(false);
  const [showp, setShowp] = useState(false);
  const [viewP, setViewP] = useState(false);
  const [viewW, setViewW] = useState(false);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <>
      <header>
        <h1> Product Management Software</h1>
        <div
          style={{
            marginTop: "30px",
            marginBottom: "18px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button onClick={() => setShow(!show)} className="round-button">
            Add Warehouse
          </button>
          <button onClick={() => setShowp(!showp)} className="round-button">
            Add Product
          </button>
          <button onClick={() => setViewP(!viewP)} className="round-button">
            All Product
          </button>
          <button onClick={() => setViewW(!viewW)} className="round-button">
            All Warehouses
          </button>
          {/* <button onClick={logout} className="round-button">
            Log out
          </button> */}
        </div>
      </header>
      {show && <AddWarehouse />}
      {showp && <Addproduct />}
      {viewP && <Viewproducts />}
      {viewW && <Viewwares />}
    </>
  );
}

export default Header;
