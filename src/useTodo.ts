// アプリ間で使用する値, ロジックを一括定義

import { InjectionKey, ref } from "vue";

type Todo = {
  id: number;
  title: string;
};

// 初期値
const defineTodos = [
  { id: 0, title: "first" },
  { id: 1, title: "second" },
];

// 全てをobjectとしてexport
// 即時関数で書くこと
export const todos = (() => {
  // data object定義
  const todos = ref<Todo[]>(defineTodos);

  // メソッド
  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: Math.random(),
      title,
    };
    todos.value.push(newTodo);
  };

  // まとめてobjectにして返す
  return { todos, addTodo };
})();

// provide inject の名前被りを防ぐためInjectionKeyを生成
// import先で型情報を認識させる
type TodoType = typeof todos;
export const todoKey: InjectionKey<TodoType> = Symbol("useTodos");
