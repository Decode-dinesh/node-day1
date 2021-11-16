const fs = require("fs");

 const express =  require("express");


 const app = express();
 const port = 3000;

 app.use(express.json());

 let createRoom = [];
 let bookRoom = [];


 app.post("/createroom", (req, res)=>{
     createRoom.push(req.body);
     res.status(200).json("A new room is created sucessfully");
 });


 app.get("/bookedRooms", (req, res) => {
     let room = bookRoom.map((data) => {
         return {
             RoomId: data.RoomId,
             Status: "Booked",
             CustomerName: data.CustomerName,
             Date: data.Date,
             startTime: data.startTime,
             EndTime: data.EndTime,
         };
     });
     res.status(200).json(room);
 });


app.post("/bookedCustomers", (req, res) => {
    bookRoom.push(req.body);
    res.status(200).json("A room is booked uccessfully");
});

app.get("/bookedcustomers", (req, res) => {
    let customer = bookRoom.map((data) => {
        return {
            CustomerName: data.CustomerName,
            RoomId: data.RoomId
        };
    });
    res.status(200).json(customer);

})

app.listen(port, () => {
    console.log(`server is listening to port ${port}`);
})
