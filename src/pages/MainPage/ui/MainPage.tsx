import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { Input } from "shared/ui/Input/Input";

export default function MainPage() {
  const { t } = useTranslation();

  const [value, setValue] = useState("");

  const onChange = (val: string) => {
    setValue(val);
  };
  return (
    <div>
      {t("Главная страница")}

      <Input
        value={value}
        onChange={onChange}
        placeholder="Введите текст"
      ></Input>
    </div>
  );
}
