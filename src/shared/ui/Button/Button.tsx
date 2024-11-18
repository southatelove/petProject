import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes } from "react";
import React from "react";
// import "app/styles/index.scss";

export enum ButtonTheme {
  CLEAR = "clear",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "background_inverted",
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  theme?: "clear" | "outline" | "background" | "background_inverted"; // Проблема совместимости argTypes&typescript.Enum old versions
  square?: boolean;
  size?: "size_m" | "size_l" | "size_xl";
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { className, children, theme, square, size, ...otherProps } = props;

  const mods: Record<string, boolean> = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: true,
  };
  return (
    <button
      className={classNames(cls.Button, mods, [className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
