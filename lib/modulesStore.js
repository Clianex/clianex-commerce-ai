"use client";

import { create } from "zustand";

export const useModulesStore = create((set) => ({
  modules: {
    autoblogging: false,
    shopAI: false,
    analytics: false,
    providers: false,
  },

  toggleModule: (id) =>
    set((state) => ({
      modules: {
        ...state.modules,
        [id]: !state.modules[id],
      },
    })),
}));
