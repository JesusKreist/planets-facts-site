import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";

interface MobileMenuState {
  isOpen: boolean;
  toggle: () => void;
}

export const useMobileMenuStore = create<MobileMenuState>()(
  devtools(
    persist(
      (set) => ({
        isOpen: false,
        toggle: () =>
          set((state) => {
            console.log("toggled");
            return { isOpen: !state.isOpen };
          }),
      }),
      {
        name: "bear-storage",
      }
    )
  )
);
