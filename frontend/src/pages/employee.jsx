import { useForm} from "react-hook-form";
import Swal from 'sweetalert2';
import { useEmployees } from "../context/employeeContext";
import { useNavigate } from "react-router-dom";



function EmployeeForm() {

  const { createEmployee, getEmployees } = useEmployees();

  const { register, handleSubmit, formState: { errors }, } = useForm();

  
  const onSubmit = async (values) => {
    try {
      const res = await createEmployee(values);

      if (res?.data?.message === "Empleado guardado exitosamente") {
        await getEmployees();
        navigate("/dashboard/employeesList");

        Swal.fire({
          title: '¡Éxito!',
          text: 'Empleado registrado correctamente',
          icon: 'success',
          confirmButtonText: 'Aceptar',
        });
      } else {
        throw new Error("La respuesta no fue la esperada.");
      }
    } catch (error) {
      console.error("Error en onSubmit:", error);

      Swal.fire({
        title: 'Error',
        text: error.response?.data?.message || error.message || "Error al registrar el empleado",
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
    }
  };

  const navigate = useNavigate();

  const navegarEmployees = () => {
    navigate("/dashboard/employeesList");
    };

  return (
    <div className="mx-auto mt-1 p-8 bg-white shadow-lg rounded-lg min-h-[440px] max-w-4xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              placeholder="Nombre"
              {...register("name", { required: "El nombre es obligatorio" })}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div>
            <input
              type="text"
              placeholder="Apellido"
              {...register("lastName", { required: "El apellido es obligatorio" })}
            />
            {errors.lastname && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Fecha de nacimiento</label>
            <input
              type="date"
              {...register("birthday", { required: "La fecha de nacimiento es obligatoria" })}
            />
            {errors.birthday && <p className="text-red-500 text-sm">{errors.birthday.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Fecha de contratación</label>
            <input
              type="date"
              {...register("hiredate", { required: "La fecha de contratación es obligatoria" })}
            />
            {errors.hiredate && <p className="text-red-500 text-sm">{errors.hiredate.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <input
              type="email"
              placeholder="Correo electrónico"
              {...register("email", { required: "El correo es obligatorio" })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <input
              type="text"
              placeholder="Dirección"
              {...register("address", { required: "La dirección es obligatoria" })}
            />
            {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <input
              type="password"
              placeholder="Contraseña"
              {...register("password", {
                required: "La contraseña es obligatoria",
                minLength: { value: 8, message: "Debe tener al menos 8 caracteres" },
                maxLength: { value: 15, message: "Máximo 15 caracteres" },
              })}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <div>
            <input
              type="number"
              placeholder="Teléfono (8 dígitos)"
              {...register("telephone", {
                required: "El teléfono es obligatorio",
                minLength: { value: 8, message: "Debe tener 8 dígitos" },
                maxLength: { value: 8, message: "Debe tener 8 dígitos" },
              })}
            />
            {errors.telephone && <p className="text-red-500 text-sm">{errors.telephone.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <input
              type="text"
              placeholder="DUI (10 caracteres)"
              {...register("dui", {
                required: "El DUI es obligatorio",
                minLength: { value: 10, message: "Debe tener al menos 10 caracteres" },
              })}
            />
            {errors.dui && <p className="text-red-500 text-sm">{errors.dui.message}</p>}
          </div>

          <div>
            <input
              type="number"
              placeholder="Número ISSS (11 dígitos)"
              {...register("isssNumber", {
                required: "El número ISSS es obligatorio",
                minLength: { value: 11, message: "Debe tener 11 dígitos" },
                maxLength: { value: 11, message: "Debe tener 11 dígitos" },
              })}
            />
            {errors.isssNumber && <p className="text-red-500 text-sm">{errors.isssNumber.message}</p>}
          </div>
        </div>

        <div className="flex items-center space-x-2 mt-4">
          <input type="checkbox" {...register("isverified")} />
          <label className="text-sm">¿Verificado?</label>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-black py-3 rounded-lg font-semibold hover:bg-green-500 transition-colors"
        >
          Registrar
        </button>
      </form>
      <button onClick={navegarEmployees}>
          Ver empleados
        </button>
    </div>
  );
}

export default EmployeeForm;
