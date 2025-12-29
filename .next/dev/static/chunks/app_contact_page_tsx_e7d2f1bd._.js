(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/contact/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ContactPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(48);
    if ($[0] !== "df2301a605941b34d5a7c2e04563e3df10adef9f85d4561c6ed54d3a2db9c778") {
        for(let $i = 0; $i < 48; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "df2301a605941b34d5a7c2e04563e3df10adef9f85d4561c6ed54d3a2db9c778";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: ""
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] !== formData) {
        t1 = ({
            "ContactPage[handleSubmit]": (e)=>{
                e.preventDefault();
                console.log("Form submitted:", formData);
                alert("Message envoy\xE9! Nous vous r\xE9pondrons bient\xF4t.");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: ""
                });
            }
        })["ContactPage[handleSubmit]"];
        $[2] = formData;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const handleSubmit = t1;
    let t2;
    if ($[4] !== formData) {
        t2 = ({
            "ContactPage[handleChange]": (e_0)=>{
                setFormData({
                    ...formData,
                    [e_0.target.name]: e_0.target.value
                });
            }
        })["ContactPage[handleChange]"];
        $[4] = formData;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const handleChange = t2;
    let t3;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-4xl font-bold text-center mb-12 text-gray-900",
            children: "Contactez-nous"
        }, void 0, false, {
            fileName: "[project]/app/contact/page.tsx",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl font-bold mb-6 text-gray-800",
            children: "Nos coordonnées"
        }, void 0, false, {
            fileName: "[project]/app/contact/page.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-blue-100 p-3 rounded-lg mr-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-6 h-6 text-blue-600",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            }, void 0, false, {
                                fileName: "[project]/app/contact/page.tsx",
                                lineNumber: 81,
                                columnNumber: 186
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            }, void 0, false, {
                                fileName: "[project]/app/contact/page.tsx",
                                lineNumber: 81,
                                columnNumber: 342
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/contact/page.tsx",
                        lineNumber: 81,
                        columnNumber: 93
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/contact/page.tsx",
                    lineNumber: 81,
                    columnNumber: 44
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-gray-800",
                            children: "Adresse"
                        }, void 0, false, {
                            fileName: "[project]/app/contact/page.tsx",
                            lineNumber: 81,
                            columnNumber: 465
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: "Rue de l'Église, Défalé"
                        }, void 0, false, {
                            fileName: "[project]/app/contact/page.tsx",
                            lineNumber: 81,
                            columnNumber: 521
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: "Togo"
                        }, void 0, false, {
                            fileName: "[project]/app/contact/page.tsx",
                            lineNumber: 81,
                            columnNumber: 577
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/contact/page.tsx",
                    lineNumber: 81,
                    columnNumber: 460
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/contact/page.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-green-100 p-3 rounded-lg mr-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-6 h-6 text-green-600",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        }, void 0, false, {
                            fileName: "[project]/app/contact/page.tsx",
                            lineNumber: 88,
                            columnNumber: 188
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/contact/page.tsx",
                        lineNumber: 88,
                        columnNumber: 94
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/contact/page.tsx",
                    lineNumber: 88,
                    columnNumber: 44
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-gray-800",
                            children: "Téléphone"
                        }, void 0, false, {
                            fileName: "[project]/app/contact/page.tsx",
                            lineNumber: 88,
                            columnNumber: 492
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: "+228 XX XX XX XX"
                        }, void 0, false, {
                            fileName: "[project]/app/contact/page.tsx",
                            lineNumber: 88,
                            columnNumber: 550
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/contact/page.tsx",
                    lineNumber: 88,
                    columnNumber: 487
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/contact/page.tsx",
            lineNumber: 88,
            columnNumber: 10
        }, this);
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-purple-100 p-3 rounded-lg mr-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-6 h-6 text-purple-600",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        }, void 0, false, {
                            fileName: "[project]/app/contact/page.tsx",
                            lineNumber: 95,
                            columnNumber: 190
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/contact/page.tsx",
                        lineNumber: 95,
                        columnNumber: 95
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/contact/page.tsx",
                    lineNumber: 95,
                    columnNumber: 44
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-gray-800",
                            children: "Email"
                        }, void 0, false, {
                            fileName: "[project]/app/contact/page.tsx",
                            lineNumber: 95,
                            columnNumber: 381
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: "contact@eglise-grande-grace.tg"
                        }, void 0, false, {
                            fileName: "[project]/app/contact/page.tsx",
                            lineNumber: 95,
                            columnNumber: 435
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/contact/page.tsx",
                    lineNumber: 95,
                    columnNumber: 376
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/contact/page.tsx",
            lineNumber: 95,
            columnNumber: 10
        }, this);
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        t5,
                        t6,
                        t7,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-orange-100 p-3 rounded-lg mr-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-6 h-6 text-orange-600",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        }, void 0, false, {
                                            fileName: "[project]/app/contact/page.tsx",
                                            lineNumber: 102,
                                            columnNumber: 238
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/contact/page.tsx",
                                        lineNumber: 102,
                                        columnNumber: 143
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/contact/page.tsx",
                                    lineNumber: 102,
                                    columnNumber: 92
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-gray-800",
                                            children: "Heures d'ouverture"
                                        }, void 0, false, {
                                            fileName: "[project]/app/contact/page.tsx",
                                            lineNumber: 102,
                                            columnNumber: 372
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600",
                                            children: "Dimanche: 9h - 12h (Culte principal)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/contact/page.tsx",
                                            lineNumber: 102,
                                            columnNumber: 439
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600",
                                            children: "Mercredi: 18h - 20h (Prière)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/contact/page.tsx",
                                            lineNumber: 102,
                                            columnNumber: 508
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/contact/page.tsx",
                                    lineNumber: 102,
                                    columnNumber: 367
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/contact/page.tsx",
                            lineNumber: 102,
                            columnNumber: 58
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/contact/page.tsx",
                    lineNumber: 102,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/contact/page.tsx",
            lineNumber: 102,
            columnNumber: 10
        }, this);
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl font-bold mb-6 text-gray-800",
            children: "Envoyez-nous un message"
        }, void 0, false, {
            fileName: "[project]/app/contact/page.tsx",
            lineNumber: 109,
            columnNumber: 10
        }, this);
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    let t10;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "name",
            className: "block text-sm font-medium text-gray-700 mb-2",
            children: "Nom complet *"
        }, void 0, false, {
            fileName: "[project]/app/contact/page.tsx",
            lineNumber: 116,
            columnNumber: 11
        }, this);
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    let t11;
    if ($[14] !== formData.name || $[15] !== handleChange) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    id: "name",
                    type: "text",
                    name: "name",
                    required: true,
                    value: formData.name,
                    onChange: handleChange,
                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                    placeholder: "Votre nom"
                }, void 0, false, {
                    fileName: "[project]/app/contact/page.tsx",
                    lineNumber: 123,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/contact/page.tsx",
            lineNumber: 123,
            columnNumber: 11
        }, this);
        $[14] = formData.name;
        $[15] = handleChange;
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    let t12;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block text-sm font-medium text-gray-700 mb-2",
            children: "Email *"
        }, void 0, false, {
            fileName: "[project]/app/contact/page.tsx",
            lineNumber: 132,
            columnNumber: 11
        }, this);
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] !== formData.email || $[19] !== handleChange) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    id: "email",
                    type: "email",
                    name: "email",
                    required: true,
                    value: formData.email,
                    onChange: handleChange,
                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                    placeholder: "votre@email.com"
                }, void 0, false, {
                    fileName: "[project]/app/contact/page.tsx",
                    lineNumber: 139,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/contact/page.tsx",
            lineNumber: 139,
            columnNumber: 11
        }, this);
        $[18] = formData.email;
        $[19] = handleChange;
        $[20] = t13;
    } else {
        t13 = $[20];
    }
    let t14;
    if ($[21] !== t11 || $[22] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
            children: [
                t11,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/app/contact/page.tsx",
            lineNumber: 148,
            columnNumber: 11
        }, this);
        $[21] = t11;
        $[22] = t13;
        $[23] = t14;
    } else {
        t14 = $[23];
    }
    let t15;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "phone",
            className: "block text-sm font-medium text-gray-700 mb-2",
            children: "Téléphone"
        }, void 0, false, {
            fileName: "[project]/app/contact/page.tsx",
            lineNumber: 157,
            columnNumber: 11
        }, this);
        $[24] = t15;
    } else {
        t15 = $[24];
    }
    let t16;
    if ($[25] !== formData.phone || $[26] !== handleChange) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    id: "phone",
                    type: "tel",
                    name: "phone",
                    value: formData.phone,
                    onChange: handleChange,
                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                    placeholder: "Votre num\xE9ro"
                }, void 0, false, {
                    fileName: "[project]/app/contact/page.tsx",
                    lineNumber: 164,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/contact/page.tsx",
            lineNumber: 164,
            columnNumber: 11
        }, this);
        $[25] = formData.phone;
        $[26] = handleChange;
        $[27] = t16;
    } else {
        t16 = $[27];
    }
    let t17;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "subject",
            className: "block text-sm font-medium text-gray-700 mb-2",
            children: "Sujet *"
        }, void 0, false, {
            fileName: "[project]/app/contact/page.tsx",
            lineNumber: 173,
            columnNumber: 11
        }, this);
        $[28] = t17;
    } else {
        t17 = $[28];
    }
    let t18;
    let t19;
    let t20;
    let t21;
    let t22;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "",
            children: "Sélectionnez un sujet"
        }, void 0, false, {
            fileName: "[project]/app/contact/page.tsx",
            lineNumber: 184,
            columnNumber: 11
        }, this);
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "information",
            children: "Demande d'information"
        }, void 0, false, {
            fileName: "[project]/app/contact/page.tsx",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "prayer",
            children: "Demande de prière"
        }, void 0, false, {
            fileName: "[project]/app/contact/page.tsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "membership",
            children: "Adhésion à l'église"
        }, void 0, false, {
            fileName: "[project]/app/contact/page.tsx",
            lineNumber: 187,
            columnNumber: 11
        }, this);
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "other",
            children: "Autre"
        }, void 0, false, {
            fileName: "[project]/app/contact/page.tsx",
            lineNumber: 188,
            columnNumber: 11
        }, this);
        $[29] = t18;
        $[30] = t19;
        $[31] = t20;
        $[32] = t21;
        $[33] = t22;
    } else {
        t18 = $[29];
        t19 = $[30];
        t20 = $[31];
        t21 = $[32];
        t22 = $[33];
    }
    let t23;
    if ($[34] !== formData.subject || $[35] !== handleChange) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    id: "subject",
                    name: "subject",
                    required: true,
                    value: formData.subject,
                    onChange: handleChange,
                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                    title: "S\xE9lectionnez un sujet pour votre message",
                    "aria-label": "Sujet du message",
                    children: [
                        t18,
                        t19,
                        t20,
                        t21,
                        t22
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/contact/page.tsx",
                    lineNumber: 203,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/contact/page.tsx",
            lineNumber: 203,
            columnNumber: 11
        }, this);
        $[34] = formData.subject;
        $[35] = handleChange;
        $[36] = t23;
    } else {
        t23 = $[36];
    }
    let t24;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "message",
            className: "block text-sm font-medium text-gray-700 mb-2",
            children: "Message *"
        }, void 0, false, {
            fileName: "[project]/app/contact/page.tsx",
            lineNumber: 212,
            columnNumber: 11
        }, this);
        $[37] = t24;
    } else {
        t24 = $[37];
    }
    let t25;
    if ($[38] !== formData.message || $[39] !== handleChange) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t24,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    id: "message",
                    name: "message",
                    required: true,
                    rows: 4,
                    value: formData.message,
                    onChange: handleChange,
                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                    placeholder: "Votre message..."
                }, void 0, false, {
                    fileName: "[project]/app/contact/page.tsx",
                    lineNumber: 219,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/contact/page.tsx",
            lineNumber: 219,
            columnNumber: 11
        }, this);
        $[38] = formData.message;
        $[39] = handleChange;
        $[40] = t25;
    } else {
        t25 = $[40];
    }
    let t26;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: "w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition",
            children: "Envoyer le message"
        }, void 0, false, {
            fileName: "[project]/app/contact/page.tsx",
            lineNumber: 228,
            columnNumber: 11
        }, this);
        $[41] = t26;
    } else {
        t26 = $[41];
    }
    let t27;
    if ($[42] !== handleSubmit || $[43] !== t14 || $[44] !== t16 || $[45] !== t23 || $[46] !== t25) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 py-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4",
                children: [
                    t3,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
                        children: [
                            t8,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white p-8 rounded-xl shadow-lg",
                                children: [
                                    t9,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleSubmit,
                                        className: "space-y-6",
                                        children: [
                                            t14,
                                            t16,
                                            t23,
                                            t25,
                                            t26
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/contact/page.tsx",
                                        lineNumber: 235,
                                        columnNumber: 217
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/contact/page.tsx",
                                lineNumber: 235,
                                columnNumber: 162
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/contact/page.tsx",
                        lineNumber: 235,
                        columnNumber: 102
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/contact/page.tsx",
                lineNumber: 235,
                columnNumber: 58
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/contact/page.tsx",
            lineNumber: 235,
            columnNumber: 11
        }, this);
        $[42] = handleSubmit;
        $[43] = t14;
        $[44] = t16;
        $[45] = t23;
        $[46] = t25;
        $[47] = t27;
    } else {
        t27 = $[47];
    }
    return t27;
}
_s(ContactPage, "AVhEfndA4vGEUeeFDmvQFHKomrk=");
_c = ContactPage;
var _c;
__turbopack_context__.k.register(_c, "ContactPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_contact_page_tsx_e7d2f1bd._.js.map