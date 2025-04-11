import cls from "./SidebarItem.module.scss";
import { AppLink } from "shared";
import { AppLinkTheme } from "shared/ui/AppLink/AppLink";

import { useTranslation } from "react-i18next";
import { SidebarItemType } from "widgets/Sidebar/model/Items";
import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";

import React from "react";

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();

  return (
    <>
      <AppLink
        theme={AppLinkTheme.SECONDARY}
        to={item.path}
        className={classNames(cls.item, { [cls.collapsed]: collapsed })}
      >
        <item.Icon className={cls.icon} />
        <span className={cls.link}>{t(item.text)}</span>
      </AppLink>
    </>
  );
});
