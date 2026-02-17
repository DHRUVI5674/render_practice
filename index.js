// const express = require("express");

// const app = express();
// app.use(express.json());
// const users = [
//   { id: 1, name: "Arjun", role: "student" },
//   { id: 2, name: "Priyesha", role: "mentor" },
//   { id: 3, name: "Priya", role: "student" },
//   { id: 4, name: "Riya", role: "mentor" },
// ];

// app.get("/", (req, res) => {
//   res.send("Express server is running");
// });

// app.get("/users", (req, res) => {
//   res.status(200).json(users);
// });

// app.get("/users/hello",(one,two)=>{
//     console.log(one.params);
//     console.log("Second Code");
//     two.status(200).json(users);
// })

// app.get("/users/:id", (req, res) => {
//   const userId = Number(req.params.id);
//   const user = users.find(u => u.id === userId);

//   if (!user) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   res.status(200).json(user);
// });


// app.post("/users", (req, res) => {
//   const user1 = {
//     id: req.body[0].id,
//     name: req.body[0].name,
//     role: req.body[0].role
//   };
//   const user2 = {
//     id: req.body[1].id,
//     name: req.body[1].name,
//     role: req.body[1].role
//   };
//   const user3 = {
//     id: req.body[2].id,
//     name: req.body[2].name,
//     role: req.body[2].role
//   };
//   console.log("user1 :",user1);
//   console.log("user2 :",user2);
//   console.log("user3 :",user3);
//   users.push(user1);
//   users.push(user2);
//   users.push(user3);

//   res.status(201).send("Value added in in-memory db");
//   //students.insertOne(newUser);
// });

// app.listen(3000, () => {
//   console.log("Server started on port 3000");
// });







// const express = require("express");
// const app = express();

// app.use(express.json());

// const products = [
//   {
//     id: 1,
//     title: "Fjallraven Backpack",
//     price: 109.95,
//     category: "men's clothing",
//     image: "image-url",
//     rating: { rate: 3.9, count: 120 }
//   },
//   {
//     id: 2,
//     title: "Mens Casual T-Shirts",
//     price: 22.3,
//     category: "men's clothing",
//     image: "image-url",
//     rating: { rate: 4.1, count: 259 }
//   },
//   {
//     id: 3,
//     title: "Cotton Jacket",
//     price: 55.99,
//     category: "womens clothing",
//     image: "image-url",
//     rating: { rate: 4.7, count: 500 }
//   }
// ];


// app.get("/all", (req, res) => {
//   res.status(200).json(products);
// });


// app.get("/product/:id", (req, res) => {
//   const pId = Number(req.params.id);
//   const product = products.find(p => p.id === pId);

//   if (!product) {
//     return res.status(404).json({ message: "Product not found" });
//   }

//   res.status(200).json(product);
// });


// app.get("/category/:category", (req, res) => {
//   const category = req.params.category;

//   const filtered = products.filter(p => p.category.toLowerCase().includes(category.toLowerCase()));

//   if (filtered.length === 0) {
//     return res.status(404).json({ message: "No products found" });
//   }

//   res.status(200).json(filtered);
// });


// app.post("/product", (req, res) => {

//   const Product1 = {
//     id: req.body[0].id,
//     title: req.body[0].title,
//     price: req.body[0].price,
//     category: req.body[0].category,
//     image: req.body[0].image,
//     rating: req.body[0].rating
//   };
//   const Product2 = {
//     id: req.body[1].id,
//     title: req.body[1].title,
//     price: req.body[1].price,
//     category: req.body[1].category,
//     image: req.body[1].image,
//     rating: req.body[1].rating
//   };
//   const Product3 = {
//     id: req.body[2].id,
//     title: req.body[2].title,
//     price: req.body[2].price,
//     category: req.body[2].category,
//     image: req.body[2].image,
//     rating: req.body[2].rating
//   };

//   products.push(Product1);
//   products.push(Product2);
//   products.push(Product3);

//   res.status(201).json({
//     message: "Product created successfully",
//     // product: newProduct
//   });
// });


// app.listen(3000, () => {
//   console.log("Server started on port 3000");
// });




// const express = require("express");

// const app = express();

// app.use(express.json());

// const users = [
//   { id: 1, name: "Arjun", role: "student" },
//   { id: 2, name: "Priyesha", role: "mentor" },
//   { id: 3, name: "Mahi", role: "mentor" },
//   { id: 4, name: "Moksh", role: "student" },
//   { id: 5, name: "Nandini", role: "student" },
// ];

// app.get("/", (req, res) => {
//   res.send("Express server is running");
// });

// app.get("/users", (req, res) => {
//   res.status(200).json(users);
// });
// app.get("/user", (req, res) => {
//   res.status(200).json(users);
// });

// app.get("/users/:id", (req, res) => {
//   const userId = Number(req.params.id);
//   const user = users.find(u => u.id === userId);

//   if (!user) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   res.status(200).json(user);
// });


// app.post("/users", (req, res) => {
//   const newUser = {
//     id: users.length + 1,
//     name: req.body.name,
//     role: req.body.role
//   };

//   users.push(newUser);

//   res.status(201).json({
//     message: "User created",
//     user: newUser
//   });
// });

// app.put("/users/:id", (req, res) => {
//   const userId = Number(req.params.id);
//   const index = users.findIndex(u => u.id === userId);

//   if (index === -1) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   users[index] = {
//     id: userId,
//     name: req.body.name,
//     role: req.body.role,
//     age:req.body.age
//   };

//   res.status(200).json({
//     message: "User replaced",
//   });
// });

// app.delete("/users/:id", (req, res) => {
//   const userId = Number(req.params.id);
//   const index = users.findIndex(u => u.id === userId);

//   if (index === -1) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   users.splice(index, 1);

//   res.status(204).end().json({
//     message: "User is deleted",
//   });;
  
// });

// app.patch("/users/:id", (req, res) => {
//   const userId = Number(req.params.id);
//   const user = users.find(u => u.id === userId);

//   if (!user) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   if (req.body.name) user.name = req.body.name;
//   if (req.body.role) user.role = req.body.role;

//   res.status(200).json({
//     message: "User updated",
//     user
//   });
// });

// app.delete("/user/:name", (req, res) => {
//   const user = req.params.name;
//   const index = users.findIndex(u => u.name.toLowerCase().includes(user.toLowerCase()));

//   if (index === -1) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   users.splice(index, 1);

//   res.status(204).end();
  
// });

// app.patch("/user/:name", (req, res) => {
//   const userId = req.params.id;
//   const user = users.find(u => u.name.toLowerCase().includes(userId.toLowerCase()));

//   if (!user) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   if (req.body.name) user.name = req.body.name;
//   if (req.body.role) user.role = req.body.role;

//   res.status(200).json({
//     message: "User updated",
//     user
//   });
// });

// app.listen(3000, () => {
//   console.log("Server started on port 3000");
// });




const express = require("express");

const app = express();

app.use(express.json());

const users = [
  { att: "80", uid: 108123, total_sub: "14",bonus:"20",name:"Dhruvi" },
  { att: "88", uid: 108125, total_sub: "6",bonus:"22",name:"Mahi" },
  { att: "89", uid: 108223, total_sub: "12",bonus:"10",name:"Chetan" },
  { att: "95", uid: 109723, total_sub: "10",bonus:"17",name:"Moksh" },
  { att: "74", uid: 109238, total_sub: "5",bonus:"19",name:"Priya" },
];

app.get("/user", (req, res) => {
  res.status(200).json(users);
});

app.get("/user/:uid", (req, res) => {
  const userUId = Number(req.params.uid);
  const user = users.find(u => u.uid === userUId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});


app.post("/user", (req, res) => {
  const newUser = {
    att: req.body.att,
    uid:req.body.uid,
    total_sub:req.body.total_sub,
    bonus:req.body.bonus,
    name: req.body.name
  };

  users.push(newUser);

  res.status(201).json({
    message: "User created",
    user: newUser
  });
});

app.put("/user/:uid", (req, res) => {
  const userUId = Number(req.params.uid);
  const index = users.findIndex(u => u.uid === userUId);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users[index] = {
     att: req.body.att,
    uid:req.body.uid,
    total_sub:req.body.total_sub,
    bonus:req.body.bonus,
    name: req.body.name
  };

  res.status(200).json({
    message: "User replaced",
  });
});

app.delete("/user/:uid", (req, res) => {
  const userUId = Number(req.params.uid);
  const index = users.findIndex(u => u.uid === userUId);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users.splice(index, 1);

  res.status(204).end().json({
    message: "User is deleted",
  });;
  
});

app.patch("/user/:uid", (req, res) => {
  const userUId = Number(req.params.uid);
  const user = users.find(u => u.uid === userUId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  if (req.body.name) user.name = req.body.name;
  if (req.body.role) user.role = req.body.role;

  res.status(200).json({
    message: "User updated",
    user
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
