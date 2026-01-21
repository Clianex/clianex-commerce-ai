// Simulación ligera de estado (luego podremos cambiar a DB o KV)
let activeModules = new Set(["trending-products"]);

export const isModuleActive = (slug) => activeModules.has(slug);

export const toggleModule = (slug) => {
  if (activeModules.has(slug)) {
    activeModules.delete(slug);
  } else {
    activeModules.add(slug);
  }
  return Array.from(activeModules);
};

export const getActiveModules = () => Array.from(activeModules);
