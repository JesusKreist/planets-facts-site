import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";

interface MobileMenuState {
  isOpen: boolean;
  toggle: () => void;
}

export const useMobileMenuStore = create<MobileMenuState>()(
  devtools(
    (set) => ({
      isOpen: false,
      toggle: () =>
        set((state) => {
          return { isOpen: !state.isOpen };
        }),
    }),
    {
      name: "mobile-menu",
    }
  )
);
