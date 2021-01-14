export interface HeaderWithFilterProps {
  desc: string;
}

export interface BtnFilterProps {
  desc: string;
  target: string;
  icon: JSX.Element;
}

export interface StylesProps {
  link: string;
  color: string;
}

export interface VideoModalProps {
  state: boolean;
  link?: string;
  name?: string;
}
