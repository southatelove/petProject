import { classNames } from "shared/lib/classNames/classNames";
import cls from "./BugButton.module.scss";
import { Button } from "shared";
import { useEffect, useState } from "react";

interface BugButtonProps {
  className?: string;
}

// Компонент для тестироавнния ErrorBoundary
export const BugButton: React.FC<BugButtonProps> = (props) => {
  const { className } = props;

  const [error, setError] = useState(false);
  const onThrow = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <div className={classNames(cls.BugButton, {}, [className])}>
      <Button onClick={onThrow}>throw Error</Button>
    </div>
  );
};
