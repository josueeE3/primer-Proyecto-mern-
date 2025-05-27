import axios from "./axios"

const API = 'http://localhost:4000/api'

//export const registerEmployee = employee => axios.post(`${API}/registerEmployees`, employee)

export const getEmployeesReq = () => axios.get("/employees")
export const getEmployeeReq = (id) => axios.get(`/employees/${id}`)

export const createEmployeeReq = (employee) => axios.post("/employees", employee)
export const updateEmployeeReq = (employee) => axios.put(`/employees/${employee._id}`, employee)

export const deleteEmployeeReq = (id) => axios.delete(`/employees/${id}`)
