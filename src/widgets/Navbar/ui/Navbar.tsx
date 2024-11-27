import React, { useCallback, useState } from "react";
import cls from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Modal } from "shared/ui/Modal/Modal";
import { useTranslation } from "react-i18next";
import { Button } from "shared";
import { ButtonTheme } from "shared/ui/Button/Button";

interface NavBarProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Navbar = ({ className }: NavBarProps) => {
  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onToggleModal}
      >
        {t("Войти")}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est impedit
        sed magni quas recusandae soluta necessitatibus officia dolor inventore
        totam. Magnam eaque amet eius neque, maiores eos error iste? Dolores
        assumenda, aliquid quaerat, quae blanditiis unde dicta itaque molestias
        dolore vel voluptatibus deleniti pariatur et. Illo, mollitia dicta!
        Atque, voluptas officiis. Maxime facilis accusamus iure voluptate
        architecto sequi rerum, est placeat libero debitis voluptates voluptatem
        officiis maiores alias omnis itaque? Et, odit corporis? Repudiandae non
        officia in beatae, iste numquam odio sint laudantium neque praesentium
        ducimus culpa ratione cum error eligendi officiis amet eum excepturi
        nisi fugiat, optio saepe tempora.
      </Modal>
    </div>
  );
};
