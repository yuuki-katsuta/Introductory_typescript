import { VFC } from "react";
import { TodoType } from "./types/todo";

//propsの型を定義
//Pick<TodoType, "userId" | "title" | "completed">とすることで、TodoTypeから必要なプロパティを抽出することができる
//Omit<TodoType, "id">として不要な型を指定して、それ以外を使用する事が可能
export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>;
};
