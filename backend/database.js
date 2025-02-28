import mongoose from "mongoose";

const URI = "mongodb://localhost:27017/ZonaDigitalDB20230357";

mongoose.connect(URI);

const connection = mongoose.connection;


connection.once("open", () => 
  {
    console.log("Connected");
} );

connection.once("disconnected", () => 
    {
      console.log("disconnected");
  } );


  connection.once("error", (error) => 
    {
      console.log("error found" + error);
  } );



