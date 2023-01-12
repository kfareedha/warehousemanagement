import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });
// export const getStudent = (studentId) => API.get(`/student/${studentId}`);
export const addProduct = (formData) => {
  console.log(formData, "form data product");
  return API.post(`/addproduct`, formData);
};

export const addWarehouse = (formData) => {
  console.log(formData, "form data");
  const d = {
    warehouseName: formData,
  };
  return API.post(`/addwarehouse`, d);
};

export const getAllproducts = () => API.get("/getproducts");
export const getAllware = () => API.get("/getware");
// export const updateStudent = (id, formData) =>
//   API.put(`/student/${id}`, formData);

// export const deleteStudent = (id) => API.delete(`/student/${id}`);

// import axios from "axios";
// const API = axios.create({ baseURL: "http://localhost:5000" });
// export const getAllStudents = (formData) =>
//   API.get("/student/allstudents", formData);
// export const addStudent = (formData) => API.post("/student/add", formData);
// export const updateStudent = (formData, id) =>
//   API.put(`/student/${id}`, formData);
// export const deleteStudent = (id) => API.delete(`/student/${id}`);
