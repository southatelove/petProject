import { classNames } from "shared/lib/classNames/classNames";
import React from "react";
import cls from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { Button, Text } from "shared";
import { Input } from "shared/ui/Input/Input";
import { memo, useCallback } from "react";
import { ButtonTheme } from "shared/ui/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  loginActions,
  loginReducer,
} from "features/AuthByUsername/model/slice/loginSlice";

import { loginByUsername } from "features/AuthByUsername/model/services/loginByUsername/loginByUsername";
import { TextTheme } from "shared/ui/Text/Text";
import { getLoginUsername } from "features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername";
import { getLoginIsLoading } from "features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginError } from "features/AuthByUsername/model/selectors/getLoginError/getLoginError";
import { getLoginPassword } from "features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword";
import {
  DynamicModuleLoader,
  ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducerList = {
  loginForm: loginReducer,
};

const LoginForm: React.FC<LoginFormProps> = memo((props) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );
  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title={t("Форма Авторизации")} theme={TextTheme.PRIMARY} />
        {error && (
          <Text
            text={t("Вы ввели неправильный логин или пароль")}
            theme={TextTheme.ERROR}
          />
        )}
        <Input
          placeholder={t("Введите логин")}
          type="text"
          className={cls.input}
          autoFocus={true}
          onChange={onChangeUsername}
          value={username}
        />
        <Input
          placeholder={t("Введите пароль")}
          type="text"
          className={cls.input}
          onChange={onChangePassword}
          value={password}
        />
        <Button
          className={cls.loginBtn}
          onClick={onLoginClick}
          theme={ButtonTheme.OUTLINE}
          disabled={isLoading}
        >
          {t("Войти")}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
