import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LangSwitcher.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "shared";
import { ButtonTheme } from "shared/ui/Button/Button";
import React, { memo } from "react";

interface LangSwitcherProps {
  className?: string;
  collapsedLanguage?: boolean;
}

export const LangSwitcher = memo(
  ({ className, collapsedLanguage }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
      i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };

    return (
      <Button
        theme={ButtonTheme.CLEAR}
        onClick={toggle}
        className={classNames(cls.langSwitcher, {}, [className])}
      >
        {t(collapsedLanguage ? "Короткий язык" : "Язык")}
      </Button>
    );
  }
);
