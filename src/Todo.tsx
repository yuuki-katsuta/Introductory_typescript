type TodoType = {
  userId: number;
  title: string;
  completed: boolean;
  //completed?: でcompletedがなくても大丈夫
};

//propsの型を定義
export const Todo = (props: TodoType) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>;
};
