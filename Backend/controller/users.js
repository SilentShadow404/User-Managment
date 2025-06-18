const users = require('../data.json');


const getUsers = (req, res) => {
  res.send(users);
}


const createUser = (req, res) => {
  const user = req.body;
  users.push(user);
  res.send(`User with the name ${user.name} added to the database!`);
}

const updateUser = (req, res) => {
  const { id } = req.params;
  const idNum = parseInt(id);
  const { name, email, age, city } = req.body;

  const user = users.find((user) => user.id === idNum);
  if (user) {
    user.name = name ?? user.name;
    user.email = email ?? user.email;
    user.age = age ?? user.age;
    user.city = city ?? user.city;
    res.json(user);  
  } else {
    res.status(404).json({ message: `User with the id ${idNum} not found!` });
  }
}



const deleteUser = (req, res) => {
  const { id } = req.params;
  const idNum = parseInt(id);
  const userIndex = users.findIndex((user) => user.id === idNum);
  
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.send(`User with the id ${idNum} has been deleted!`);
  } else {
    res.status(404).send(`User with the id ${idNum} not found!`);
  }
}


module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser
};
