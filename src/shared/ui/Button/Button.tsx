import { classNames, Mods } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, memo } from "react";
import React from "react";
// import "app/styles/index.scss";

export enum ButtonTheme {
  CLEAR = "clear",
  CLEAR_INVERTED = "clear_inverted",
  OUTLINE = "outline",
  OUTLINE_RED = "outline_red",
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
  theme?:
    | "clear"
    | "outline"
    | "background"
    | "background_inverted"
    | "clear_inverted"
    | "outline_red"; // Проблема совместимости argTypes&typescript.Enum old versions
  square?: boolean;
  size?: "size_m" | "size_l" | "size_xl";
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = memo((props) => {
  const {
    className,
    children,
    theme = ButtonTheme.OUTLINE,
    square,
    size = ButtonSize.M,
    disabled,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: true,
    [cls.disabled]: disabled,
  };
  return (
    <button
      className={classNames(cls.Button, mods, [className])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
