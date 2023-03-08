import { create } from "zustand";

export const useStore = create(() => ({
  openFeature: false,
  openExplode:false,
  openSpeedmeeter:false,
  openDimension:false,
}));



