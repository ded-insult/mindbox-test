import { useCallback, useMemo, useState } from "react";

import type { Tasks } from "@/entities/task";

const SECOND_MOCK: Tasks = {
  "2024-12-14T10:38:54.222Z": {
    children: "Тестовое задание",
    isCompleted: "in-progress",
  },
  "2024-12-14T10:38:53.798Z": {
    children: "Mindbox - круто :)",
    isCompleted: "completed",
  },
};

export type FilterStatus = "all" | "completed" | "in-progress";

export const useTodo = () => {
  const [todos, setTodos] = useState<Tasks>(SECOND_MOCK);
  const [filter, setFilter] = useState<FilterStatus>("all");
  const [todoText, setTodoText] = useState("");

  const filteredTodos = useMemo(() => {
    return Object.entries(todos).filter(([_, todo]) => {
      if (filter === "completed") {
        return todo.isCompleted === "completed";
      } else if (filter === "in-progress") {
        return todo.isCompleted === "in-progress";
      }
      return true;
    });
  }, [todos, filter]);

  const addTodo = (text: string) => {
    const newTodo = {
      [new Date().toISOString()]: {
        children: text,
        isCompleted: "in-progress",
      },
    } as Tasks;

    setTodos((todos) => ({
      ...todos,
      ...newTodo,
    }));

    setTodoText("");
  };

  const removeTodo = useCallback((id: string) => {
    setTodos((todos) => {
      const { [id]: _, ...rest } = todos;

      return rest;
    });
  }, []);

  const deleteCompleted = () => {
    const filteredByCompleteStatus = Object.entries(todos).reduce(
      (acc, [id, todo]) => {
        if (todo.isCompleted !== "completed") {
          acc[id] = todo;
        }

        return acc;
      },
      {} as Tasks
    );

    setTodos(filteredByCompleteStatus);
  };

  const changeStatus = useCallback((id: string) => {
    setTodos((todos) => {
      const status = todos[id].isCompleted;

      return {
        ...todos,
        [id]: {
          ...todos[id],
          isCompleted: status === "completed" ? "in-progress" : "completed",
        },
      };
    });
  }, []);

  return {
    todos: filteredTodos,
    addTodo,
    removeTodo,
    todoText,
    setTodoText,
    changeStatus,
    deleteCompleted,
    setFilter,
    filteredTodos,
  };
};
