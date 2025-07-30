export type DummyData = {
  name: string;
  id: number;
};

export interface DummyButton {
  label: string;
  id: number;
  onClick: () => void;
  bgColor: string;
  textColor: string;
  font: string;
  textSize: string;
  colSpan: number;
}
