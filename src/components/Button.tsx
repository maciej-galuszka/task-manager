type ButtonProps = {
  className: string;
  onClick: () => void;
  children: string;
  type?: 'button' | 'submit';
};

export function Button({
  className,
  onClick,
  children,
  type = 'button',
}: ButtonProps) {
  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
