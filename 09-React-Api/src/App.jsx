import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

// json-server --watch .\src\db.json --port 3005
// http://localhost:3005/users
const BASE_URL = "http://localhost:3005";

function App() {
  const getAllUsers = async () => {
    //GET : veri çekmek için kullanılır
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data);
  };

  const getUserById = async (userId) => {
    //ALT GR + iki kere virgüle basılacak.
    const response = await axios.get(`${BASE_URL}/users/${userId}`);
    console.log(response.data);
  };

  const createUser = async (newUser) => {
    //POST : veri eklemek için kullanılır.
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log("response", response.data);
  };

  const updateUser = async (userId, updatedUser) => {
    //PUT : veri güncellemek için kullanılır.
    await axios.put(`${BASE_URL}/users/${userId}`, updatedUser);
  };

  const deleteUserById = async (userId) => {
    //DELETE : veriyi silmek için kullanılır.
    const deletedResponse = await axios.delete(`${BASE_URL}/users/${userId}`);
    console.log(deletedResponse.data);
  };

  useEffect(() => {
    // getAllUsers();
    // getUserById(0);
    // const newUser = {
    //   id: "2",
    //   username: "berke",
    //   password: "0709",
    // };
    // createUser(newUser);
    // updateUser("2", {
    //   username: "beko",
    //   password: "0000",
    // });
    // deleteUserById("5")
  }, []);
  return <></>;
}

export default App;
