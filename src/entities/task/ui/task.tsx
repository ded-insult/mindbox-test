import { memo, ReactNode } from "react";

import s from "./task.module.css";

type Status = "completed" | "in-progress";

export type Task = {
  children: ReactNode;
  isCompleted: Status;
};

export type Tasks = { [key: string]: Task };

interface Props {
  actions?: ReactNode;
  todo: Task;
}

export const TaskItem = memo((props: Props) => {
  const { todo, actions } = props;
  const { children, isCompleted } = todo;

  return (
    <div className={s.main}>
      <StatusCircle status={isCompleted} />
      {children}
      {actions}
    </div>
  );
});

const StatusCircle = ({ status }: { status: Status }) => (
  <div className={status === "in-progress" ? s.progress : s.complete} />
);
