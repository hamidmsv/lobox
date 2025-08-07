export type Option = {
  label: string;
  value: string;
  icon?: string;
};

export interface MultiSelectProps {
  options: Option[];
  onAddOption: (option: Option) => void;
}
