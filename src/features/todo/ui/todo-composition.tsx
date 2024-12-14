import { useTodo } from "../model/use-todo";
import { TodoList } from "./todo-list";
import { TodoAddAction } from "./todo-add";
import { TodoHeader } from "./todo-header";
import { TodoFilter } from "./todo-filter";

import s from "./todo.module.css";

export const TodoComposition = () => {
  const {
    todos,
    addTodo,
    setTodoText,
    todoText,
    removeTodo,
    changeStatus,
    setFilter,
    deleteCompleted,
  } = useTodo();

  return (
    <div className={s.main}>
      <TodoHeader />

      <TodoAddAction
        addTodo={addTodo}
        setTodoText={setTodoText}
        todoText={todoText}
      />

      <TodoList
        changeStatus={changeStatus}
        removeTodo={removeTodo}
        todos={todos}
      />

      <TodoFilter
        setFilter={setFilter}
        todoLength={todos.length}
        deleteCompleted={deleteCompleted}
      />
    </div>
  );
};
