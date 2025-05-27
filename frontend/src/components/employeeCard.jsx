import { useEmployees } from "../context/employeeContext";

function EmployeeCard({ employee }) {
  const { deleteEmployee } = useEmployees();
  return (
    <div className="employee-card bg-orange-50 p-4 m-4 rounded-lg shadow-md">
      <h3>
        {employee.name} {employee.lastName}
      </h3>
      <p>
        <strong>Cumpleaños:</strong> {employee.birthday}
      </p>
      <p>
        <strong>Email:</strong> {employee.email}
      </p>
      <p>
        <strong>Dirección:</strong> {employee.address}
      </p>
      <p>
        <strong>Fecha de contratación:</strong> {employee.hiredate}
      </p>
      <p>
        <strong>Teléfono:</strong> {employee.telephone}
      </p>
      <p>
        <strong>DUI:</strong> {employee.dui}
      </p>
      <p>
        <strong>Número del ISSS:</strong> {employee.isssNumber}
      </p>

      <button className="rounded-lg m-2">Editar</button>
      <button
        className="rounded-lg m-2"
        onClick={() => {
          deleteEmployee(employee._id);
          console.log("Click en eliminar:", employee._id);
        }}
      >
        Eliminar
      </button>
    </div>
  );
}

export default EmployeeCard;
