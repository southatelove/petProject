import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Portal.module.scss";
import { createPortal } from "react-dom";

interface PortalProps {
  children?: React.ReactNode;
  element?: HTMLElement;
}

export const Portal: React.FC<PortalProps> = (props) => {
  const { children, element = document.body } = props;

  return createPortal(children, element);
};
