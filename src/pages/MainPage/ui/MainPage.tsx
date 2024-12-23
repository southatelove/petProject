import { useTranslation } from "react-i18next";
import React from "react";

export default function MainPage() {
  const { t } = useTranslation();

  return <div>{t("Главная страница")}</div>;
}
