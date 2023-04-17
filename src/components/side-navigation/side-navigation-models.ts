export const NavWidth = { collapsed: 65, expanded: 260 };

export interface ILink {
  icon?: any;
  label: string;
  path?: string;
  rightIcon?: any;
  onClick?: () => void;
}

export interface IGroupLink {
  icon?: any;
  label: string;
  path?: string;
  links?: Array<ILink>;
  onClick?: () => void;
}
