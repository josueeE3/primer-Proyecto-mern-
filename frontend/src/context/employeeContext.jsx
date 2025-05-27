import { createContext, useContext, useState } from "react";
import {createEmployeeReq, getEmployeesReq, deleteEmployeeReq} from "../api/employee"
import { toast } from 'react-toastify'; // asegúrate de tener esto importado


const employeeContext = createContext();

  const ApiEmployees="http://localhost:4000/api/employees";


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
      try {
        const res = await createEmployeeReq(employee);
    
        if (res.status >= 200 && res.status < 300) {
          return res;
        } else {
          throw new Error("Error inesperado al crear el empleado");
        }
      } catch (error) {
        console.error("Error en createEmployee:", error);
        // No vuelvas a lanzar si el error no es fatal
        throw error;
      }

    }

    const deleteEmployee = async (id) => {
      try {
        const response = await fetch(`${ApiEmployees}/${id}`, {
          method: "DELETE",
        });
    
        if (!response.ok) {
          throw new Error("Failed to delete employee");
        }
    
        const result = await response.json();
        console.log("Deleted:", result);
    
        toast.success("Empleado eliminado");
    
        // Opción 1: actualiza manualmente sin volver a llamar a la API
        setEmployees((prev) => prev.filter((emp) => emp._id !== id));
    
        // Opción 2 (alternativa): volver a llamar a la API para obtener empleados actualizados
        // await getEmployees();
    
      } catch (error) {
        console.error("Error deleting employee:", error);
        toast.error("Error al eliminar el empleado");
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