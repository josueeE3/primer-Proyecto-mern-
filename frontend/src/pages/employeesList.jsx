import { useEffect } from "react";
import { useEmployees } from "../context/employeeContext";
import EmployeeCard from "../components/employeeCard.jsx";

function EmployeesList() {
  const { getEmployees, employees } = useEmployees();

  useEffect(() => {
    getEmployees();
  }, []);

  if (employees.length === 0) return <h2>No hay empleados guardados</h2>;

  return (
    <div>
      {employees.map((employee) => (
        <EmployeeCard key={employee._id} employee={employee}/>
        
      ))} 
    </div>
   );
}

export default EmployeesList;
