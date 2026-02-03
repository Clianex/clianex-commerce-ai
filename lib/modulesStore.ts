"use client";

import { create } from "zustand";

type ModuleId = "autoblogging" | "shopAI" | "analytics" | "providers";

interface ModulesState {
  modules: Record<ModuleId, boolean>;
  toggleModule: (id: ModuleId) => void;
}

export const useModulesStore = create<ModulesState>((set) => ({
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
