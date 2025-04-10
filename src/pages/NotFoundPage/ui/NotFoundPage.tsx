import { classNames } from "shared/lib/classNames/classNames";
import cls from "./NotFoundPage.module.scss";
import { useTranslation } from "react-i18next";
import React, { memo } from "react";

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = memo((props) => {
  const { className } = props;

  const { t } = useTranslation();

  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
      {t("Страница не найдена")}
    </div>
  );
});
