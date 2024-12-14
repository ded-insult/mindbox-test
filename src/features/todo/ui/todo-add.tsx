import { Textfield } from "@/shared/ui/textfield";

export const TodoAddAction = ({
  addTodo,
  setTodoText,
  todoText,
}: {
  addTodo: (text: string) => void;
  setTodoText: (value: string) => void;
  todoText: string;
}) => (
  <>
    <Textfield
      placeholder="Введите задачу, которую хотите решить"
      leftContent={"<"}
      value={todoText}
      onChange={(e) => setTodoText(e.target.value)}
    />

    <button disabled={!todoText} onClick={() => addTodo(todoText)}>
      Добавить
    </button>
  </>
);
