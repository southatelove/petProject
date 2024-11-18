import React from "react";
import cls from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavBarProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Navbar = ({ className }: NavBarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>/</div>
    </div>
  );
};
