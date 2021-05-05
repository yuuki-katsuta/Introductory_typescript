import { VFC } from "react";
import { User } from "./types/user";

//propsの型を定義
type Props = {
  //propsはuserを受け取り、その型がUserである
  user: User;
};

//<Props>でpropsの型を定義
export const UserProfile: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      <dd>{user.hobbies?.join(" / ")}</dd>
    </dl>
  );
};
//.hobbies?とすることでプロパティがなない場合そこでundefindを返す（オプショナルチェイニング）
