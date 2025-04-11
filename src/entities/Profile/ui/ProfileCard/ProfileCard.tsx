import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ProfileCard.module.scss";
import React from "react";
import { useSelector } from "react-redux";
import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfileData";
import { getProfileIsLoading } from "entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileError } from "entities/Profile/model/selectors/getProfileError/getProfileError";
import { Button, Text } from "shared";
import { useTranslation } from "react-i18next";
import { ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation("profile");

  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text text={t("Профиль")}></Text>
        <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn}>
          {t("Редактировать")}
        </Button>
      </div>
      <div className={cls.data}>
        <Input
          value={data?.first}
          placeholder={t("Ваше имя")}
          className={cls.input}
        />
        <Input
          value={data?.lastname}
          placeholder={t("Ваша фамилия")}
          className={cls.input}
        />
      </div>
    </div>
  );
};
