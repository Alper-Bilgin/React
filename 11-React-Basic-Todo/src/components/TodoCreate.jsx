import React, { useState } from "react";
import "../App.css";

function TodoCreate({ onCreateTodo }) {
  // Kullanıcının girdiği yeni todo
  const [newTodo, setNewTodo] = useState("");
  // input alanını temizler
  const clearInput = () => {
    setNewTodo("");
  };
  // Yeni todo ögesi oluşturulur
  const createTodo = () => {
    // İnput boşsa işleme girmez
    if (!newTodo) return;
    // Todo içeriği
    const request = {
      id: Math.floor(Math.random() * 99999999999),
      content: newTodo,
    };
    onCreateTodo(request);
    clearInput();
  };
  return (
    <div className="todo-create">
      <input
        value={newTodo}
        // İnput alanını günceller
        onChange={(e) => setNewTodo(e.target.value)}
        className="todo-input"
        type="text"
        placeholder="Todo giriniz"
      />
      <button onClick={createTodo} className="todo-create-button">
        Todo Oluştur
      </button>
    </div>
  );
}

export default TodoCreate;
