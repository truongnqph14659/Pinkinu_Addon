import { FC } from 'react';
import styles from './loading.module.scss';

interface LoadingProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  loading: boolean;
}

const Loading: FC<LoadingProps> = ({
  className,
  loading = false,
  children,
}) => {
  return (
    <div
      className={`relative flex h-full flex-col justify-center overflow-hidden align-middle ${className}`}
    >
      <div className={loading ? styles.on : styles.off}>
        <div className={styles.loader}></div>
        <div className="text-3xl font-bold text-[#4c4c4c]">Loading</div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Loading;
