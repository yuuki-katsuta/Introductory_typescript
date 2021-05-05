import { VFC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

//FC<Props>で関数コンポーネントであることを表し、propsの型を<>で指定する
//FCは暗黙的にchildrenを受け取れる
//VFCはchildrenを受け取らない
export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>てきすと</p>;
};
