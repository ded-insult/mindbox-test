import { memo } from "react";

import { TaskItem, Task } from "@/entities/task";

export const TodoList = memo(
  ({
    todos,
    removeTodo,
    changeStatus,
  }: {
    todos: [string, Task][];
    removeTodo: (id: string) => void;
    changeStatus: (id: string) => void;
  }) => (
    <>
      {!todos.length && <h2>Нет задач</h2>}

      {todos.map(([id, todo]) => (
        <div key={id}>
          <TaskItem todo={todo} />
          <button onClick={() => removeTodo(id)}>Удалить</button>
          <button onClick={() => changeStatus(id)}>Изменить статус</button>
        </div>
      ))}
    </>
  )
);
