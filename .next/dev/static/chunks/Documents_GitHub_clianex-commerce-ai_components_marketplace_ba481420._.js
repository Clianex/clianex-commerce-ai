(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/GitHub/clianex-commerce-ai/components/marketplace/ModuleCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ModuleCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/clianex-commerce-ai/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function ModuleCard({ module, onToggle }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative rounded-2xl border bg-white p-6 shadow-sm transition
        ${module.active ? "border-green-500" : "border-slate-200"}
      `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-semibold
          ${module.active ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-600"}
        `,
                children: module.active ? "Activo" : "Inactivo"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/clianex-commerce-ai/components/marketplace/ModuleCard.jsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            module.featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute -top-3 left-4 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white",
                children: "Recomendado"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/clianex-commerce-ai/components/marketplace/ModuleCard.jsx",
                lineNumber: 22,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl font-semibold text-slate-900",
                children: module.name
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/clianex-commerce-ai/components/marketplace/ModuleCard.jsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-sm text-slate-600",
                children: module.description
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/clianex-commerce-ai/components/marketplace/ModuleCard.jsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-semibold text-indigo-600",
                        children: module.price
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/clianex-commerce-ai/components/marketplace/ModuleCard.jsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onToggle,
                        className: `rounded-lg px-4 py-2 text-sm font-semibold transition
            ${module.active ? "bg-slate-200 text-slate-700 hover:bg-slate-300" : "bg-indigo-600 text-white hover:bg-indigo-700"}
          `,
                        children: module.active ? "Desactivar" : "Activar"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/clianex-commerce-ai/components/marketplace/ModuleCard.jsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/clianex-commerce-ai/components/marketplace/ModuleCard.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/clianex-commerce-ai/components/marketplace/ModuleCard.jsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = ModuleCard;
var _c;
__turbopack_context__.k.register(_c, "ModuleCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/clianex-commerce-ai/components/marketplace/useModules.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useModules",
    ()=>useModules
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/clianex-commerce-ai/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useModules(initialModules) {
    _s();
    const [modules, setModules] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialModules);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useModules.useEffect": ()=>{
            fetch("/api/modules").then({
                "useModules.useEffect": (res)=>res.json()
            }["useModules.useEffect"]).then({
                "useModules.useEffect": (userModules)=>{
                    setModules({
                        "useModules.useEffect": (prev)=>prev.map({
                                "useModules.useEffect": (m)=>{
                                    const found = userModules.find({
                                        "useModules.useEffect.found": (u)=>u.moduleId === m.id
                                    }["useModules.useEffect.found"]);
                                    return found ? {
                                        ...m,
                                        active: found.active
                                    } : m;
                                }
                            }["useModules.useEffect"])
                    }["useModules.useEffect"]);
                    setLoading(false);
                }
            }["useModules.useEffect"]);
        }
    }["useModules.useEffect"], []);
    async function toggleModule(id) {
        await fetch("/api/modules/toggle", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                moduleId: id
            })
        });
        setModules((prev)=>prev.map((m)=>m.id === id ? {
                    ...m,
                    active: !m.active
                } : m));
    }
    return {
        modules,
        toggleModule,
        loading
    };
}
_s(useModules, "5NXeh1cjSCKhpgBqAphIl+Frdk4=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/clianex-commerce-ai/components/marketplace/ModuleGrid.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ModuleGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/clianex-commerce-ai/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$components$2f$marketplace$2f$ModuleCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/clianex-commerce-ai/components/marketplace/ModuleCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$components$2f$marketplace$2f$useModules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/clianex-commerce-ai/components/marketplace/useModules.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const INITIAL_MODULES = [
    {
        id: "autoblogging",
        name: "Auto Blogging AI",
        description: "Genera artículos optimizados y publícalos automáticamente.",
        price: "Gratis",
        featured: false,
        active: false
    },
    {
        id: "shop-ai",
        name: "Shop AI",
        description: "Optimiza productos, precios y conversiones con IA.",
        price: "19€/mes",
        featured: true,
        active: false
    },
    {
        id: "analytics",
        name: "Analytics Pro",
        description: "Dashboards inteligentesentes para decisiones avanzadas.",
        price: "29€/mes",
        featured: false,
        active: false
    },
    {
        id: "providers",
        name: "Gestión de Proveedores",
        description: "Automatiza sourcing, pedidos y comunicación.",
        price: "Premium",
        featured: false,
        active: false
    }
];
function ModuleGrid() {
    _s();
    const { modules, toggleModule } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$components$2f$marketplace$2f$useModules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModules"])(INITIAL_MODULES);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid gap-8 sm:grid-cols-2 xl:grid-cols-3",
        children: modules.map((module)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$components$2f$marketplace$2f$ModuleCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                module: module,
                onToggle: ()=>toggleModule(module.id)
            }, module.id, false, {
                fileName: "[project]/Documents/GitHub/clianex-commerce-ai/components/marketplace/ModuleGrid.jsx",
                lineNumber: 47,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/clianex-commerce-ai/components/marketplace/ModuleGrid.jsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(ModuleGrid, "rC+mXz4C05dOb2w/O1fgDCpMbL4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$components$2f$marketplace$2f$useModules$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModules"]
    ];
});
_c = ModuleGrid;
var _c;
__turbopack_context__.k.register(_c, "ModuleGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_GitHub_clianex-commerce-ai_components_marketplace_ba481420._.js.map