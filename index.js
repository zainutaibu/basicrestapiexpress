const express = require ('express');
const app = express();
const PORT =4000;

//ye middleware k liye use karte hai
app.use(express.json());

//ab mai route bana rahi hu

app.get('/',(req,res)=>{
    res.json("welcome")
});

app.get('/users',(req,res)=>{
    const users =[
        {id:1,name:"zainab"}, // ye wala jo riute hai isme maine khud detail di hu isliye get di hu 
        {id:2,name:"zain"}
    ]
    res.json(users)
});


app.post('/users',(req,res)=>{
    const newuser=req.body;
    res.status(201).json({
        message:'user add successfully',
        users:newuser
    });
});

app.put("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedData = req.body;
  let user = users.find(u => u.id === userId);
  if (!user) return res.status(404).json({ message: "User not found" });// ye humlog update karne k liye kare hai
  user.name = updatedData.name || user.name;
  res.json({ message: "User updated", user });
});

app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === userId);
  if (index === -1) return res.status(404).json({ message: "User not found" }); // ye hum log delete k liye kare hai
  users.splice(index, 1);
  res.json({ message: "User deleted", users });
});




//ye humlog server start karne k liye lete hai
app.listen(PORT,()=>{
    console.log('server is running on port 4000')
});