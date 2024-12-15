import "@testing-library/jest-dom";
import { act, renderHook } from "@testing-library/react";

import { useTodo } from "../model/use-todo";

// Изначальный пример

// const SECOND_MOCK: Tasks = {
//   "2024-12-14T10:38:54.222Z": {
//     children: "Тестовое задание",
//     isCompleted: "in-progress",
//   },
//   "2024-12-14T10:38:53.798Z": {
//     children: "Mindbox - круто :)",
//     isCompleted: "completed",
//   },
// };

describe("проеврка хука useTodo", () => {
  beforeAll(() => {});

  it("Проверка изначальных значений", () => {
    const { result } = renderHook(() => useTodo());
    const todos = result.current.todos;

    // Изначально задачи 2, поэтому проверяем на 2
    expect(todos).toHaveLength(2);
    expect(todos[0][1].children).toBe("Тестовое задание");
    expect(todos[1][1].children).toBe("Mindbox - круто :)");
  });

  it("Проверка добавления тудушки", () => {
    const { result } = renderHook(() => useTodo());

    act(() => {
      result.current.addTodo("Mindbox");
    });

    const todos = result.current.todos;

    expect(todos).toHaveLength(3);
    expect(todos[2][1].children).toBe("Mindbox");
  });

  it("Проверка удаления тудушки", () => {
    const { result } = renderHook(() => useTodo());
    const todoIdToRemove = Object.keys(result.current.todos)[0];

    act(() => {
      result.current.removeTodo(todoIdToRemove);
    });

    const todos = result.current.todos;

    expect(todos).toHaveLength(2);
  });
});
