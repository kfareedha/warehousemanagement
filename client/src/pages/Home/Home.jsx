import React, { useState } from "react";
import Swal from "sweetalert2";

import "./Home.css";
import Header from "../../components/Homeitems/Header";
import addProduct from "../../components/Homeitems/Addproduct";
import addWare from "../../components/Homeitems/Addwarehouse";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const [products, setProduts] = useState("");
  const [warehouse, setWarehouse] = useState("");
  const [IsAddingproduct, setIsAddingproduct] = useState(false);
  const [IsAddingware, setIsAddingWare] = useState(false);
  return (
    <div className="container">
      <Header />
    </div>
  );
}

export default Home;
