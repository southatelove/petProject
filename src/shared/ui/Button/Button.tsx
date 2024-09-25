import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes } from "react";
import React from "react";
// import "app/styles/index.scss";

export enum ThemeButton {
  CLEAR = "clear",
  OUTLINE = "outline",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  theme?: ThemeButton;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props;

  return (
    <button
      className={classNames(cls.Button, { [cls[theme]]: true }, [className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
