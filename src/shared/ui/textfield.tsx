import { ComponentPropsWithRef, ReactNode } from "react";

import s from "./textfield.module.css";

interface Props extends ComponentPropsWithRef<"input"> {
  leftContent?: ReactNode;
}

export const Textfield = (props: Props) => {
  const { leftContent, ...rest } = props;

  return (
    <div className={s.main}>
      {leftContent && <div className={s.leftContent}>{leftContent}</div>}

      <input {...rest} type="text" />
    </div>
  );
};
