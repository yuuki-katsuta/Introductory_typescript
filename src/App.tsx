import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import { User } from "./types/user";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";

const user: User = {
  name: "yuuki",
  hobbies: ["映画", "ゲーム"]
};

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
      <UserProfile user={user} />
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
