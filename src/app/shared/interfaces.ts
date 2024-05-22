export interface CarColor {
  code: string;
  description: string;
  price: number;
}

export interface CarModel {
  code: string;
  description: string;
  colors: CarColor[];
}

export interface CarConfig {
  id: number;
  description: string;
  range: number;
  speed: number;
  price: number;
}

export interface CarOptions {
  configs: CarConfig[];
  towHitch: boolean;
  yoke: boolean;
}
