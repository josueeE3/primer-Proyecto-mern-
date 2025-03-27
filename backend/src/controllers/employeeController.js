const employeeController = {};
import Employee from "../models/employee.js";

employeeController.getEmployee = async (req, res) => {

    const employee = await Employee.find()

    res.json(employee)
}                   


//insert 


employeeController.createEmployee = async (req, res) => {

    const {name, lastName,rol, birthday, email,password,telephone,dui} = req.body;
    
    const newEmployee = new Employee({name, lastName, rol, birthday, email,password,telephone,dui});

    await newEmployee.save()

    res.json({message: "employee saved"});
}
 


employeeController.deleteEmployee = async (req, res) => {

    await Employee.findOneAndDelete(req.params.id)
}

employeeController.updateEmployee = async (req,res) => {

    const {name, lastName,rol, birthday, email,password,telephone,dui} = req.body;

    await Employee.findByIdAndUpdate(req.params.id, {name, lastName,rol, birthday, email,password,telephone,dui}, {new: true});

    res.json({message: "employee updated "})
}

export default employeeController;