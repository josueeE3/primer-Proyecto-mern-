import { createContext, useContext, useState } from "react";
import {createEmployeeReq, getEmployeesReq, deleteEmployeeReq} from "../api/employee"

const employeeContext = createContext();

export const useEmployees = () => {

    const context = useContext(employeeContext)

    if (!context) {
        throw new Error("useEmployees must be used within a EmployeeProvider");
        
    }
    return context;
}

export function EmployeeProvider({ children}){

    const [employees, setEmployees] = useState([]);

    const getEmployees = async () => {
      try {
        const res = await getEmployeesReq()
        console.log(res)
        setEmployees(res.data)
        return res

      } catch (error) {
        console.log(error)
      }
    }

    const createEmployee = async (employee) => {

        const res = await createEmployeeReq(employee)
        console.log(res)
        return res;

    }

    const deleteEmployee = async (id) => {
      try {
        const res = await deleteEmployeeReq(id);
        console.log("Respuesta del backend al eliminar:", res); // <-- AQUÍ
    
        if (res.status === 204) {
          setEmployees((prev) => prev.filter((employee) => employee._id !== id));
        }
      } catch (error) {
        console.log("Error al eliminar empleado:", error);
      }
    };
    

    return(
      <employeeContext.Provider value={{
        employees,
        createEmployee,
        getEmployees,
        deleteEmployee
      }}>
        {children}
      </employeeContext.Provider>
    )
}