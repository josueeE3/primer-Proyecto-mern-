const employeeController = {};
import Employee from "../models/employee.js";

employeeController.getEmployee = async (req, res) => {

    const employee = await Employee.find()

    res.json(employee)
}                   


//insert 


employeeController.createEmployee = async (req, res) => {
    try {
      const { name, lastName, rol, birthday, email, address,hiredate, password, telephone, dui,isssNumber } = req.body;
  
      const emailExists = await Employee.findOne({ email });
      if (emailExists) {
        return res.status(400).json({ message: "El email ya está registrado" });
      }
  
      const duiExists = await Employee.findOne({ dui });
      if (duiExists) {
        return res.status(400).json({ message: "El DUI ya está registrado" });
      }
  
      const newEmployee = new Employee({ name, lastName, rol, birthday, email, address,hiredate, password, telephone, dui,isssNumber });
      await newEmployee.save();
  
      res.json({ message: "Empleado guardado exitosamente" });
    } catch (error) {
      console.error("Error al crear empleado:", error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  };
  
 


employeeController.deleteEmployee = async (req, res) => {

    await Employee.findOneAndDelete(req.params.id)
    res.json({message: "employee deleted "})

}

employeeController.updateEmployee = async (req,res) => {

    const {name, lastName,rol, birthday, email,password,telephone,dui} = req.body;

    await Employee.findByIdAndUpdate(req.params.id, {name, lastName,rol, birthday, email,password,telephone,dui}, {new: true});

    res.json({message: "employee updated "})
}

export default employeeController;