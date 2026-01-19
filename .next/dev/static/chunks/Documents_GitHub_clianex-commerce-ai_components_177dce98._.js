(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/GitHub/clianex-commerce-ai/components/PredictiveSearch.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PredictiveSearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/clianex-commerce-ai/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/clianex-commerce-ai/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/clianex-commerce-ai/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const SAMPLE_RESULTS = [
    {
        id: "trend-products",
        label: "Productos en tendencia"
    },
    {
        id: "supplier-connect",
        label: "Conectar proveedor"
    },
    {
        id: "ai-optimizer",
        label: "Optimizador IA"
    }
];
function PredictiveSearch() {
    _s();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const results = query ? SAMPLE_RESULTS.filter((r)=>r.label.toLowerCase().includes(query.toLowerCase())) : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-64",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                placeholder: "Buscar módulos...",
                className: "w-full border rounded-lg px-3 py-2 text-sm",
                value: query,
                onChange: (e)=>setQuery(e.target.value)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/clianex-commerce-ai/components/PredictiveSearch.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            query && results.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-0 right-0 mt-1 bg-white border rounded-lg shadow-lg z-50",
                children: results.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/marketplace/${r.id}`,
                        className: "block px-4 py-2 hover:bg-gray-100 text-sm",
                        children: r.label
                    }, r.id, false, {
                        fileName: "[project]/Documents/GitHub/clianex-commerce-ai/components/PredictiveSearch.jsx",
                        lineNumber: 33,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/clianex-commerce-ai/components/PredictiveSearch.jsx",
                lineNumber: 31,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/clianex-commerce-ai/components/PredictiveSearch.jsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(PredictiveSearch, "HYX2QbDDdTtlu7GfoQbAPZOIM6k=");
_c = PredictiveSearch;
var _c;
__turbopack_context__.k.register(_c, "PredictiveSearch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/clianex-commerce-ai/components/GeoBanner.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GeoBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/clianex-commerce-ai/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/clianex-commerce-ai/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function GeoBanner() {
    _s();
    const [country, setCountry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GeoBanner.useEffect": ()=>{
            fetch("https://ipapi.co/json/").then({
                "GeoBanner.useEffect": (res)=>res.json()
            }["GeoBanner.useEffect"]).then({
                "GeoBanner.useEffect": (data)=>setCountry(data.country_name)
            }["GeoBanner.useEffect"]).catch({
                "GeoBanner.useEffect": ()=>setCountry(null)
            }["GeoBanner.useEffect"]);
        }
    }["GeoBanner.useEffect"], []);
    if (!country) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-900 text-white text-center text-sm py-2",
        children: [
            "🇪🇺 Oferta especial disponible en: ",
            country
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/clianex-commerce-ai/components/GeoBanner.jsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(GeoBanner, "9L3Zg5FcscnsQ/D6FObYQh4sBQ4=");
_c = GeoBanner;
var _c;
__turbopack_context__.k.register(_c, "GeoBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/clianex-commerce-ai/components/LanguageSwitcher.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LanguageSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/clianex-commerce-ai/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/clianex-commerce-ai/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const LANGS = [
    "es",
    "en",
    "fr",
    "de"
];
function LanguageSwitcher() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const changeLang = (lang)=>{
        router.replace(`/${lang}${pathname.replace(/^\/(es|en|fr|de)/, "")}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
        onChange: (e)=>changeLang(e.target.value),
        className: "border rounded-lg text-sm px-2 py-1",
        children: LANGS.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: l,
                children: l.toUpperCase()
            }, l, false, {
                fileName: "[project]/Documents/GitHub/clianex-commerce-ai/components/LanguageSwitcher.jsx",
                lineNumber: 21,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/clianex-commerce-ai/components/LanguageSwitcher.jsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(LanguageSwitcher, "gA9e4WsoP6a20xDgQgrFkfMP8lc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$clianex$2d$commerce$2d$ai$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = LanguageSwitcher;
var _c;
__turbopack_context__.k.register(_c, "LanguageSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_GitHub_clianex-commerce-ai_components_177dce98._.js.map