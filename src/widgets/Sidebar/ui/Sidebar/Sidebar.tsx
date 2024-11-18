import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { AppLink, Button } from "shared";
import React from "react";
import { ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routerConfig/routeConfig";
import { useTranslation } from "react-i18next";

import AboutIcon from "shared/assets/icons/about-20-20.svg";
import MainIcon from "shared/assets/icons/main-20-20.svg";

interface SidebarProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const { className, children, onClick } = props;

  const { t } = useTranslation();

  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square={true}
        size={ButtonSize.L}
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={cls.items}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.main}
          className={cls.item}
        >
          <MainIcon className={cls.icon} />
          <span className={cls.link}>{t("Главная")}</span>
        </AppLink>

        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.about}
          className={cls.item}
        >
          <AboutIcon className={cls.icon} />
          <span className={cls.link}> {t("О Сайте")}</span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </div>
  );
};
