import { TodoType } from "./types/todo";

// Pickを使うと既存の型から必要なプロパティを部分的に抜き出せる
// Pick<TodoType, "userId" | "title" | "completed"

// OmitはPickの逆で既存の型から省くプロパティを指定する
export const Todo = (props: Omit<TodoType, "id">) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(ユーザー：${userId})`}</p>;
};
