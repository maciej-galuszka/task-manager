type ButtonProps = {
  className: string;
  onClick?: () => void;
  children: React.ReactNode;
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
