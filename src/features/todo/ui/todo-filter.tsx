import { FilterStatus } from "../model/use-todo";

import s from "./todo.module.css";

export const TodoFilter = ({
  deleteCompleted,
  setFilter,
  todoLength,
}: {
  deleteCompleted: () => void;
  setFilter: (filter: FilterStatus) => void;
  todoLength: number;
}) => (
  <div className={s.actions}>
    <button onClick={deleteCompleted}>Удалить выполненные</button>

    <button onClick={() => setFilter("completed")}>Показать выполненные</button>

    <button onClick={() => setFilter("all")}>Показать все</button>

    <button onClick={() => setFilter("in-progress")}>Показать активные</button>

    <h3>Осталось: {todoLength}</h3>
  </div>
);
