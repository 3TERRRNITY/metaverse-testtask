export interface IButtonProps {
  title: string;
  disabled: boolean;
  wallet?: boolean;
  onClick?: () => void;
}

export interface FramerMagneticProps {
  children: React.ReactNode;
}

export interface ILayoutContainer {
  children: React.ReactNode;
}
export interface IParticipantsProps {
  id: number;
  username: string;
  email: string;
  address?: string;
}
export interface IParticipantsTableProps {
  participants: IParticipantsProps[];
  onUpdateFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  onUpdateParticipants: (participants: IParticipantsProps[]) => void;
}

export interface ITextareaProps {
  placeholder: string;
  disabled?: boolean;
  label: string;
  type: string;
  name: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
