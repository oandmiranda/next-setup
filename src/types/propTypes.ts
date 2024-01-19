export interface InputFieldProps {
  label: string;
  type?: string;
}

export interface ButtonProps {
  title: string;
  type?: 'submit' | 'button' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface FormProps {
  children: React.ReactNode;
}

export interface BoxProps {
  as?: keyof JSX.IntrinsicElements;
  styleSheet?: StyleSheet;
  children: React.ReactNode;
}

export interface StyleSheet {
  backgroundColor: string;
}
