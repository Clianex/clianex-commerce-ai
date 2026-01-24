(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/GitHub/clianex-commerce-ai/components/dashboard/KPICard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KPICard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/clianex-commerce-ai/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function KPICard({ label, value, trend }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl border bg-white p-6 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-slate-500",
                children: label
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/clianex-commerce-ai/components/dashboard/KPICard.jsx",
                lineNumber: 4,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 text-3xl font-bold text-slate-900",
                children: value
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/clianex-commerce-ai/components/dashboard/KPICard.jsx",
                lineNumber: 5,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-1 text-xs text-emerald-600",
                children: trend
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/clianex-commerce-ai/components/dashboard/KPICard.jsx",
                lineNumber: 8,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/clianex-commerce-ai/components/dashboard/KPICard.jsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = KPICard;
var _c;
__turbopack_context__.k.register(_c, "KPICard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/clianex-commerce-ai/components/dashboard/useDashboard.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDashboard",
    ()=>useDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/clianex-commerce-ai/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useDashboard() {
    _s();
    const [activeModules, setActiveModules] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDashboard.useEffect": ()=>{
            fetch("/api/modules").then({
                "useDashboard.useEffect": (res)=>res.json()
            }["useDashboard.useEffect"]).then({
                "useDashboard.useEffect": (modules)=>setActiveModules(modules.filter({
                        "useDashboard.useEffect": (m)=>m.active
                    }["useDashboard.useEffect"]))
            }["useDashboard.useEffect"]);
        }
    }["useDashboard.useEffect"], []);
    const kpis = [
        {
            label: "Módulos activos",
            value: activeModules.length,
            trend: "+ real"
        },
        {
            label: "Automatizaciones",
            value: activeModules.length * 4,
            trend: "+ dinámico"
        },
        {
            label: "Impacto estimado",
            value: `${activeModules.length * 15}%`,
            trend: "+ IA"
        },
        {
            label: "Coste mensual",
            value: `${activeModules.length * 19}€`,
            trend: "optimizado"
        }
    ];
    return {
        kpis,
        activeModules
    };
}
_s(useDashboard, "rA8pXKvbfCojyfw5EXOmWEVH8XE=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/clianex-commerce-ai/components/dashboard/DashboardGrid.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/clianex-commerce-ai/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$components$2f$dashboard$2f$KPICard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/clianex-commerce-ai/components/dashboard/KPICard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$components$2f$dashboard$2f$useDashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/clianex-commerce-ai/components/dashboard/useDashboard.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function DashboardGrid() {
    _s();
    const { kpis, activeModules } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$components$2f$dashboard$2f$useDashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboard"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 sm:grid-cols-2 xl:grid-cols-4",
                children: kpis.map((kpi)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$components$2f$dashboard$2f$KPICard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        ...kpi
                    }, kpi.label, false, {
                        fileName: "[project]/Documents/GitHub/clianex-commerce-ai/components/dashboard/DashboardGrid.jsx",
                        lineNumber: 14,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/clianex-commerce-ai/components/dashboard/DashboardGrid.jsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-x1 font-semibold text-slate-900",
                        children: "Módulos activos"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/clianex-commerce-ai/components/dashboard/DashboardGrid.jsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    activeModules.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm text-slate-500",
                        children: "No hay módulos activos. Activa módulos desde el Marketplace."
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/clianex-commerce-ai/components/dashboard/DashboardGrid.jsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mt-4 space-y-2",
                        children: activeModules.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "rounded-lg border bg-white px-4 py-2 text-sm",
                                children: m.name
                            }, m.id, false, {
                                fileName: "[project]/Documents/GitHub/clianex-commerce-ai/components/dashboard/DashboardGrid.jsx",
                                lineNumber: 31,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/clianex-commerce-ai/components/dashboard/DashboardGrid.jsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/clianex-commerce-ai/components/dashboard/DashboardGrid.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/clianex-commerce-ai/components/dashboard/DashboardGrid.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(DashboardGrid, "kR9KIIfE6bdamHl0oEyI7lB9Koo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$components$2f$dashboard$2f$useDashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboard"]
    ];
});
_c = DashboardGrid;
var _c;
__turbopack_context__.k.register(_c, "DashboardGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_GitHub_clianex-commerce-ai_components_dashboard_61181cc8._.js.map