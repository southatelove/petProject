import { classNames } from "shared/lib/classNames/classNames";
import cls from "./PageLoader.module.scss";
import { Loader } from "shared";
import { memo } from "react";

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: React.FC<PageLoaderProps> = memo((props) => {
  const { className } = props;

  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>
      <Loader />
    </div>
  );
});
