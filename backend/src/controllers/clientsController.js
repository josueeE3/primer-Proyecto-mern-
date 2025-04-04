const clientsController = {};
import Clients from "../models/clients.js";

clientsController.getClient = async (req, res) => {

    const clients = await Clients.find()

    res.json(clients)
}                   


//insert 


clientsController.createClient = async (req, res) => {

    const {name, lastName, birthday, email,password,telephone,dui} = req.body;
    
    const newClient = new Clients({name, lastName, birthday, email,password,telephone,dui});

    await newClient.save()

    res.json({message: "client saved"});
}
 


clientsController.deleteClient = async (req, res) => {

    await Clients.findOneAndDelete(req.params.id)
}

clientsController.updateClient = async (req,res) => {

    const {name, lastName, birthday, email,password,telephone,dui} = req.body;

    await Clients.findByIdAndUpdate(req.params.id, {name, lastName, birthday, email,password,telephone,dui}, {new: true});

    res.json({message: "client updated "})
}

export default clientsController;