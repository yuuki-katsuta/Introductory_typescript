import axios from "axios";
import { useState } from "react";
import "./styles.css";
// import { Practice1 } from "./practices/Practice1";
// import { Practice2 } from "./practices/Practice2";
// import { Practice3 } from "./practices/Practice3";
// import { Practice4 } from "./practices/Practice4";
import { Todo } from "./Todo";

//Todoデータの型指定
type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function App() {
  //stateの型定義
  //useState<any>でtodosの型を指定できる
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
  console.log(todos);
  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo title={todo.title} userid={todo.userId} key={todo.id} />
      ))}
    </div>
  );
}
