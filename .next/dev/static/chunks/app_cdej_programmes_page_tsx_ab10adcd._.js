(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/cdej/programmes/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProgrammesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const programs = [
    {
        id: 1,
        title: 'École du Dimanche pour lee enfants',
        description: 'Enseignement biblique adapté aux enfants, chaque dimanche à 07h.',
        image: '/images/youth-bible.jpg',
        schedule: 'Dimanche 07h-09h',
        ageGroup: '2-12 ans',
        icon: '📚'
    },
    {
        id: 2,
        title: 'Groupe de Louange des enfants et des jeunes RAFISSA',
        description: 'Formation musicale et spirituelle pour adorer Dieu en musique.',
        image: '/images/worship-team.jpg',
        schedule: 'Vendredi et Samedi 15h-17h',
        ageGroup: '10-30 ans',
        icon: '🎵'
    },
    {
        id: 3,
        title: 'Club Biblique ',
        description: 'Étude biblique et fellowship pour étudiants de la bible.',
        image: '/images/bible-study.jpg',
        schedule: 'Mercredi-Vendredi-samedi 18h-20h',
        ageGroup: '14-30 ans',
        icon: '🎓'
    },
    {
        id: 4,
        title: 'Sport & Spiritualité',
        description: 'Activités sportives suivies de moments de partage biblique.',
        image: '/images/sports.jpg',
        schedule: 'Mercredi 16h-18h',
        ageGroup: 'Tous âges',
        icon: '⚽'
    },
    {
        id: 5,
        title: 'Ateliers de Développement',
        description: 'Formations en leadership, communication et développement personnel.',
        image: '/images/workshop.jpg',
        schedule: 'Samedi 9h-12h',
        ageGroup: '18-35 ans',
        icon: '💼'
    },
    {
        id: 6,
        title: 'Mission Jeunesse',
        description: 'Actions sociales et évangélisation dans la communauté.',
        image: '/images/mission.jpg',
        schedule: 'Variable',
        ageGroup: '16-30 ans',
        icon: '🌍'
    }
];
function ProgrammesPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "a68e2f2437390517d1a5b73e5ba04e0338c22d7d2b841e9c574bcecd082cf94c") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a68e2f2437390517d1a5b73e5ba04e0338c22d7d2b841e9c574bcecd082cf94c";
    }
    const [selectedProgram, setSelectedProgram] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-black opacity-30"
        }, void 0, false, {
            fileName: "[project]/app/cdej/programmes/page.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full"
        }, void 0, false, {
            fileName: "[project]/app/cdej/programmes/page.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full"
        }, void 0, false, {
            fileName: "[project]/app/cdej/programmes/page.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[1] = t0;
        $[2] = t1;
        $[3] = t2;
    } else {
        t0 = $[1];
        t1 = $[2];
        t2 = $[3];
    }
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-5xl md:text-6xl font-bold mb-6",
            children: [
                "Programmes CDEJ- ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-yellow-300",
                    children: "RAFISSA"
                }, void 0, false, {
                    fileName: "[project]/app/cdej/programmes/page.tsx",
                    lineNumber: 82,
                    columnNumber: 79
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/cdej/programmes/page.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xl opacity-90 mb-8",
            children: "Des programmes dynamiques et transformateurs pour équiper la jeunesse à vivre pleinement sa foi et son potentiel."
        }, void 0, false, {
            fileName: "[project]/app/cdej/programmes/page.tsx",
            lineNumber: 83,
            columnNumber: 10
        }, this);
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-semibold",
                children: "👥 150+ Jeunes"
            }, void 0, false, {
                fileName: "[project]/app/cdej/programmes/page.tsx",
                lineNumber: 92,
                columnNumber: 79
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/cdej/programmes/page.tsx",
            lineNumber: 92,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-semibold",
                children: "📅 6 Programmes"
            }, void 0, false, {
                fileName: "[project]/app/cdej/programmes/page.tsx",
                lineNumber: 99,
                columnNumber: 79
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/cdej/programmes/page.tsx",
            lineNumber: 99,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:w-2/3",
            children: [
                t3,
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-4",
                    children: [
                        t5,
                        t6,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold",
                                children: "🎯 Impact Communautaire"
                            }, void 0, false, {
                                fileName: "[project]/app/cdej/programmes/page.tsx",
                                lineNumber: 106,
                                columnNumber: 159
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/cdej/programmes/page.tsx",
                            lineNumber: 106,
                            columnNumber: 90
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cdej/programmes/page.tsx",
                    lineNumber: 106,
                    columnNumber: 44
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/cdej/programmes/page.tsx",
            lineNumber: 106,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20 overflow-hidden",
            children: [
                t0,
                t1,
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative max-w-7xl mx-auto px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col lg:flex-row items-center justify-between gap-12",
                        children: [
                            t7,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:w-1/3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold mb-4",
                                            children: "Inscription Rapide"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cdej/programmes/page.tsx",
                                            lineNumber: 113,
                                            columnNumber: 382
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mb-6",
                                            children: "Rejoignez nos programmes jeunesse dès maintenant !"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cdej/programmes/page.tsx",
                                            lineNumber: 113,
                                            columnNumber: 445
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "w-full bg-white text-blue-700 py-3 rounded-xl font-bold hover:bg-blue-100 transition",
                                            children: "S'inscrire Maintenant"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cdej/programmes/page.tsx",
                                            lineNumber: 113,
                                            columnNumber: 519
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cdej/programmes/page.tsx",
                                    lineNumber: 113,
                                    columnNumber: 297
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/cdej/programmes/page.tsx",
                                lineNumber: 113,
                                columnNumber: 271
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cdej/programmes/page.tsx",
                        lineNumber: 113,
                        columnNumber: 188
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/cdej/programmes/page.tsx",
                    lineNumber: 113,
                    columnNumber: 139
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/cdej/programmes/page.tsx",
            lineNumber: 113,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t10;
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-4xl font-bold text-center mb-4 text-gray-900",
            children: "Nos Programmes"
        }, void 0, false, {
            fileName: "[project]/app/cdej/programmes/page.tsx",
            lineNumber: 121,
            columnNumber: 10
        }, this);
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-600 text-center mb-12 max-w-3xl mx-auto",
            children: "Découvrez nos programmes variés conçus pour le développement intégral des jeunes"
        }, void 0, false, {
            fileName: "[project]/app/cdej/programmes/page.tsx",
            lineNumber: 122,
            columnNumber: 11
        }, this);
        $[10] = t10;
        $[11] = t9;
    } else {
        t10 = $[10];
        t9 = $[11];
    }
    let t11;
    if ($[12] !== selectedProgram) {
        t11 = programs.map({
            "ProgrammesPage[programs.map()]": (program)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer ${selectedProgram === program.id ? "ring-4 ring-blue-500" : ""}`,
                    onClick: {
                        "ProgrammesPage[programs.map() > <div>.onClick]": ()=>setSelectedProgram(program.id)
                    }["ProgrammesPage[programs.map() > <div>.onClick]"],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative h-48 bg-gradient-to-br from-blue-500 to-purple-600",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-6xl",
                                    children: program.icon
                                }, void 0, false, {
                                    fileName: "[project]/app/cdej/programmes/page.tsx",
                                    lineNumber: 134,
                                    columnNumber: 204
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/cdej/programmes/page.tsx",
                                lineNumber: 134,
                                columnNumber: 137
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/cdej/programmes/page.tsx",
                            lineNumber: 134,
                            columnNumber: 60
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-gray-900",
                                            children: program.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/cdej/programmes/page.tsx",
                                            lineNumber: 134,
                                            columnNumber: 341
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full",
                                            children: program.ageGroup
                                        }, void 0, false, {
                                            fileName: "[project]/app/cdej/programmes/page.tsx",
                                            lineNumber: 134,
                                            columnNumber: 409
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cdej/programmes/page.tsx",
                                    lineNumber: 134,
                                    columnNumber: 285
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 mb-6",
                                    children: program.description
                                }, void 0, false, {
                                    fileName: "[project]/app/cdej/programmes/page.tsx",
                                    lineNumber: 134,
                                    columnNumber: 529
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center text-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-5 h-5 mr-3 text-blue-500",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cdej/programmes/page.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 762
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cdej/programmes/page.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 664
                                                }, this),
                                                program.schedule
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cdej/programmes/page.tsx",
                                            lineNumber: 134,
                                            columnNumber: 615
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center text-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-5 h-5 mr-3 text-green-500",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cdej/programmes/page.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 1057
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cdej/programmes/page.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 958
                                                }, this),
                                                "Ouvert à tous"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cdej/programmes/page.tsx",
                                            lineNumber: 134,
                                            columnNumber: 909
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cdej/programmes/page.tsx",
                                    lineNumber: 134,
                                    columnNumber: 588
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition",
                                    children: "En savoir plus"
                                }, void 0, false, {
                                    fileName: "[project]/app/cdej/programmes/page.tsx",
                                    lineNumber: 134,
                                    columnNumber: 1229
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cdej/programmes/page.tsx",
                            lineNumber: 134,
                            columnNumber: 264
                        }, this)
                    ]
                }, program.id, true, {
                    fileName: "[project]/app/cdej/programmes/page.tsx",
                    lineNumber: 132,
                    columnNumber: 52
                }, this)
        }["ProgrammesPage[programs.map()]"]);
        $[12] = selectedProgram;
        $[13] = t11;
    } else {
        t11 = $[13];
    }
    let t12;
    if ($[14] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 py-20",
            children: [
                t9,
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: t11
                }, void 0, false, {
                    fileName: "[project]/app/cdej/programmes/page.tsx",
                    lineNumber: 143,
                    columnNumber: 66
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/cdej/programmes/page.tsx",
            lineNumber: 143,
            columnNumber: 11
        }, this);
        $[14] = t11;
        $[15] = t12;
    } else {
        t12 = $[15];
    }
    let t13;
    let t14;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-4xl font-bold mb-8",
            children: "Prêt à faire la différence ?"
        }, void 0, false, {
            fileName: "[project]/app/cdej/programmes/page.tsx",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xl mb-12 opacity-95",
            children: "Rejoignez-nous et découvrez comment votre foi peut transformer votre génération."
        }, void 0, false, {
            fileName: "[project]/app/cdej/programmes/page.tsx",
            lineNumber: 153,
            columnNumber: 11
        }, this);
        $[16] = t13;
        $[17] = t14;
    } else {
        t13 = $[16];
        t14 = $[17];
    }
    let t15;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white py-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto px-4 text-center",
                children: [
                    t13,
                    t14,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row gap-6 justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "bg-white text-orange-600 px-10 py-4 rounded-xl font-bold hover:bg-gray-100 transition transform hover:-translate-y-1 text-lg",
                                children: "Devenir Membre"
                            }, void 0, false, {
                                fileName: "[project]/app/cdej/programmes/page.tsx",
                                lineNumber: 162,
                                columnNumber: 230
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "bg-transparent border-2 border-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-orange-600 transition text-lg",
                                children: "Voir le Calendrier"
                            }, void 0, false, {
                                fileName: "[project]/app/cdej/programmes/page.tsx",
                                lineNumber: 162,
                                columnNumber: 398
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cdej/programmes/page.tsx",
                        lineNumber: 162,
                        columnNumber: 166
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cdej/programmes/page.tsx",
                lineNumber: 162,
                columnNumber: 104
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/cdej/programmes/page.tsx",
            lineNumber: 162,
            columnNumber: 11
        }, this);
        $[18] = t15;
    } else {
        t15 = $[18];
    }
    let t16;
    if ($[19] !== t12) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-b from-blue-50 to-white",
            children: [
                t8,
                t12,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/app/cdej/programmes/page.tsx",
            lineNumber: 169,
            columnNumber: 11
        }, this);
        $[19] = t12;
        $[20] = t16;
    } else {
        t16 = $[20];
    }
    return t16;
}
_s(ProgrammesPage, "MBDZYRTKX1rX+MJw6lhMLTwqu9Y=");
_c = ProgrammesPage;
var _c;
__turbopack_context__.k.register(_c, "ProgrammesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_cdej_programmes_page_tsx_ab10adcd._.js.map