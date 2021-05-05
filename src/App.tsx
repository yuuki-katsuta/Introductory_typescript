import axios from "axios";
import { useState } from "react";
import "./styles.css";
// import { Practice1 } from "./practices/Practice1";
// import { Practice2 } from "./practices/Practice2";
// import { Practice3 } from "./practices/Practice3";
// import { Practice4 } from "./practices/Practice4";
import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import { Text } from "./Text";

export default function App() {
  //stateの型定義
  //useState< >でtodosの型を指定できる
  //配列型で配列の中身がtypeのTodoType
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    //取得データに対して型指定
    //TodoTypeの配列が取得できることを表す
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };

  return (
    <div className="App">
      <Text color="red" fontSize="18px" />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
          key={todo.id}
        />
      ))}
    </div>
  );
}
