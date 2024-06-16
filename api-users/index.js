import express from "express";
import { v4 } from "uuid";
import cors from "cors";

const port = 3001;
const app = express();
app.use(express.json());
app.use(cors());

const users = []

const checkUserId = (request, response, next) => {
  const { id } = request.params;

  const index = users.findIndex((user) => user.id === id);

  if (index < 0) {
    return response.status(404).json({ error: "User not found" })
  }

  request.userIndex = index;
  request.userId = id;

  next();
};

app.get("/users", (request, response) => {

  return response.status(201).json(users);
});

app.post("/users", (request, response) => {
  {
    const { name, age } = request.body;

    const user = { id: v4(), name, age };

    users.push(user);

    return response.status(201).json(user);
  }
});

app.put("/users/:id", checkUserId, (request, response) => {

  const { name, age } = request.body;
  const index = request.userIndex;
  const id = request.userId;

  const updateUser = { id, name, age };

  users[index] = updateUser;

  return response.json(updateUser);

});

app.delete("/users/:id", checkUserId, (request, response) => {

  const index = request.userIndex;

  users.splice(index, 1);

  return response.status(204).json();
});

app.listen(port, () => {
  console.log(`Server started on ${port}`)
});


