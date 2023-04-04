import styles from './default-button.module.scss';

type Props = {
  text: string;
  className?: string;
  disabled?: boolean;
  onClick?: ({ ...rest }) => unknown;
};

const DefaultButton = ({
  text,
  className,
  onClick,
  disabled = false,
}: Props) => {
  return (
    <button
      type="button"
      className={`${
        styles['default-btn']
      } rounded-[5px] bg-gradient-to-r from-[#04CED1] to-[#00FBFF] px-[16px] py-[6px] ${className} focus:ring ${
        disabled ? 'bg-white/50 bg-none' : ''
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default DefaultButton;
