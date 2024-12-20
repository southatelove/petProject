import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "shared";
import { Input } from "shared/ui/Input/Input";
import React from "react";

interface LoginFormProps {
  className?: string;
}

export const LoginForm: React.FC<LoginFormProps> = (props) => {
  const { className } = props;

  const { t } = useTranslation();
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        placeholder={t("Введите username")}
        type="text"
        className={cls.input}
        autoFocus={true}
      ></Input>
      <Input
        placeholder={t("Введите пароль")}
        type="text"
        className={cls.input}
      ></Input>
      <Button className={cls.loginBtn}>{t("Войти")}</Button>
    </div>
  );
};
