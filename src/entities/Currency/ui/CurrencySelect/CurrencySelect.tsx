import { classNames } from "shared/lib/classNames/classNames";
import cls from "./CurrencySelect.module.scss";
import { Select } from "shared/ui/Select/Select";
import { Currency } from "entities/Currency/model/types/currency";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import React from "react";

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect: React.FC<CurrencySelectProps> = memo((props) => {
  const { className, value, onChange, readonly } = props;
  const { t } = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, []);

  return (
    <Select
      className={classNames(cls.CurrencySelect, {}, [className])}
      label={t("Укажите валюту")}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
});
