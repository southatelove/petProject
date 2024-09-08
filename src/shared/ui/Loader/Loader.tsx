import { classNames } from "shared/lib/classNames/classNames";
import "./Loader.scss";

interface LoaderProps {
  className?: string;
}

export const Loader: React.FC<LoaderProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames("lds-ellipsis", {}, [className])}>
      <div className="loadingio-spinner-eclipse-nq4q5u6dq7r">
        <div className="ldio-x2uulkbinbj">
          <div></div>
        </div>
      </div>
    </div>
  );
};
