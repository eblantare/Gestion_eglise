(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/events/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// frontend/app/events/page.tsx
__turbopack_context__.s([
    "default",
    ()=>EventsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function EventsPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(32);
    if ($[0] !== "bb64c06ace743edeecf6f9ca31dcb7a4bd936435da348b9781a006c27cdf83ca") {
        for(let $i = 0; $i < 32; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bb64c06ace743edeecf6f9ca31dcb7a4bd936435da348b9781a006c27cdf83ca";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [events, setEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "EventsPage[useEffect()]": ()=>{
                fetch("http://localhost:8000/api/events/").then(_EventsPageUseEffectAnonymous).then({
                    "EventsPage[useEffect() > (anonymous)()]": (data)=>{
                        setEvents(data);
                        setLoading(false);
                    }
                }["EventsPage[useEffect() > (anonymous)()]"]).catch({
                    "EventsPage[useEffect() > (anonymous)()]": ()=>{
                        setEvents([
                            {
                                id: 1,
                                title: "Culte Dominical",
                                description: "Temps de louange, adoration et enseignement biblique pour toute la famille.",
                                event_type: "SERVICE",
                                date: "2024-12-15T09:00:00",
                                location: "Salle principale",
                                speaker: "Pasteur Jean Martin",
                                is_published: true
                            },
                            {
                                id: 2,
                                title: "No\xEBl en Famille",
                                description: "C\xE9l\xE9bration sp\xE9ciale de No\xEBl avec musique, t\xE9moignages et partage.",
                                event_type: "SPECIAL",
                                date: "2024-12-24T18:00:00",
                                location: "Salle polyvalente",
                                speaker: "\xC9quipe de louange",
                                is_published: true
                            }
                        ]);
                        setLoading(false);
                    }
                }["EventsPage[useEffect() > (anonymous)()]"]);
            }
        })["EventsPage[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    if ($[4] !== events || $[5] !== filter || $[6] !== loading) {
        let t8;
        if ($[12] !== filter) {
            t8 = ({
                "EventsPage[events.filter()]": (event)=>{
                    if (filter === "all") {
                        return true;
                    }
                    return event.event_type === filter;
                }
            })["EventsPage[events.filter()]"];
            $[12] = filter;
            $[13] = t8;
        } else {
            t8 = $[13];
        }
        const filteredEvents = events.filter(t8);
        let t9;
        if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
            t9 = [
                {
                    id: "all",
                    label: "Tous",
                    color: "bg-blue-100 text-blue-800"
                },
                {
                    id: "SERVICE",
                    label: "Cultes",
                    color: "bg-purple-100 text-purple-800"
                },
                {
                    id: "PRAYER",
                    label: "Pri\xE8res",
                    color: "bg-green-100 text-green-800"
                },
                {
                    id: "BIBLE_STUDY",
                    label: "\xC9tudes",
                    color: "bg-orange-100 text-orange-800"
                },
                {
                    id: "YOUTH",
                    label: "Jeunesse",
                    color: "bg-pink-100 text-pink-800"
                },
                {
                    id: "SPECIAL",
                    label: "Sp\xE9ciaux",
                    color: "bg-red-100 text-red-800"
                }
            ];
            $[14] = t9;
        } else {
            t9 = $[14];
        }
        const eventTypes = t9;
        t7 = "min-h-screen bg-gradient-to-b from-gray-50 to-white py-12";
        t3 = "max-w-7xl mx-auto px-4";
        let t10;
        let t11;
        if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
            t10 = {
                opacity: 0,
                y: 20
            };
            t11 = {
                opacity: 1,
                y: 0
            };
            $[15] = t10;
            $[16] = t11;
        } else {
            t10 = $[15];
            t11 = $[16];
        }
        if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: t10,
                animate: t11,
                className: "text-center mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-5xl font-bold text-gray-900 mb-6",
                        children: [
                            "Nos ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-blue-600",
                                children: "Événements"
                            }, void 0, false, {
                                fileName: "[project]/app/events/page.tsx",
                                lineNumber: 154,
                                columnNumber: 140
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/events/page.tsx",
                        lineNumber: 154,
                        columnNumber: 82
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl text-gray-600 max-w-3xl mx-auto",
                        children: "Découvrez les prochaines rencontres de notre communauté et planifiez votre participation."
                    }, void 0, false, {
                        fileName: "[project]/app/events/page.tsx",
                        lineNumber: 154,
                        columnNumber: 194
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/events/page.tsx",
                lineNumber: 154,
                columnNumber: 12
            }, this);
            $[17] = t4;
        } else {
            t4 = $[17];
        }
        if ($[18] !== filter) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-3 justify-center",
                    children: eventTypes.map({
                        "EventsPage[eventTypes.map()]": (type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "EventsPage[eventTypes.map() > <button>.onClick]": ()=>setFilter(type.id)
                                }["EventsPage[eventTypes.map() > <button>.onClick]"],
                                className: `px-6 py-3 rounded-full font-medium transition-all ${filter === type.id ? `${type.color} scale-105 shadow-lg` : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`,
                                children: type.label
                            }, type.id, false, {
                                fileName: "[project]/app/events/page.tsx",
                                lineNumber: 161,
                                columnNumber: 53
                            }, this)
                    }["EventsPage[eventTypes.map()]"])
                }, void 0, false, {
                    fileName: "[project]/app/events/page.tsx",
                    lineNumber: 160,
                    columnNumber: 35
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/events/page.tsx",
                lineNumber: 160,
                columnNumber: 12
            }, this);
            $[18] = filter;
            $[19] = t5;
        } else {
            t5 = $[19];
        }
        t6 = loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"
                }, void 0, false, {
                    fileName: "[project]/app/events/page.tsx",
                    lineNumber: 170,
                    columnNumber: 55
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600",
                    children: "Chargement des événements..."
                }, void 0, false, {
                    fileName: "[project]/app/events/page.tsx",
                    lineNumber: 170,
                    columnNumber: 150
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/events/page.tsx",
            lineNumber: 170,
            columnNumber: 20
        }, this) : filteredEvents.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            className: "text-center py-20 bg-white rounded-2xl shadow-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                    className: "w-16 h-16 text-gray-400 mx-auto mb-4"
                }, void 0, false, {
                    fileName: "[project]/app/events/page.tsx",
                    lineNumber: 174,
                    columnNumber: 69
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-2xl font-bold text-gray-700 mb-2",
                    children: "Aucun événement à venir"
                }, void 0, false, {
                    fileName: "[project]/app/events/page.tsx",
                    lineNumber: 174,
                    columnNumber: 130
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 mb-6",
                    children: "Revenez bientôt pour découvrir nos prochaines activités."
                }, void 0, false, {
                    fileName: "[project]/app/events/page.tsx",
                    lineNumber: 174,
                    columnNumber: 212
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",
                    children: "Voir le calendrier complet"
                }, void 0, false, {
                    fileName: "[project]/app/events/page.tsx",
                    lineNumber: 174,
                    columnNumber: 306
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/events/page.tsx",
            lineNumber: 170,
            columnNumber: 250
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
            children: filteredEvents.map(_EventsPageFilteredEventsMap)
        }, void 0, false, {
            fileName: "[project]/app/events/page.tsx",
            lineNumber: 174,
            columnNumber: 450
        }, this);
        $[4] = events;
        $[5] = filter;
        $[6] = loading;
        $[7] = t3;
        $[8] = t4;
        $[9] = t5;
        $[10] = t6;
        $[11] = t7;
    } else {
        t3 = $[7];
        t4 = $[8];
        t5 = $[9];
        t6 = $[10];
        t7 = $[11];
    }
    let t10;
    let t8;
    let t9;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            opacity: 0
        };
        t9 = {
            opacity: 1
        };
        t10 = {
            delay: 0.5
        };
        $[20] = t10;
        $[21] = t8;
        $[22] = t9;
    } else {
        t10 = $[20];
        t8 = $[21];
        t9 = $[22];
    }
    let t11;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t8,
            animate: t9,
            transition: t10,
            className: "mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-3xl font-bold mb-4",
                    children: "Organisez votre propre événement"
                }, void 0, false, {
                    fileName: "[project]/app/events/page.tsx",
                    lineNumber: 213,
                    columnNumber: 168
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-blue-100 mb-8 max-w-2xl mx-auto",
                    children: "Vous souhaitez organiser une réunion, une étude biblique ou un événement spécial ? Contactez-nous pour réserver un créneau."
                }, void 0, false, {
                    fileName: "[project]/app/events/page.tsx",
                    lineNumber: 213,
                    columnNumber: 245
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition transform hover:-translate-y-1",
                    children: "Proposer un événement"
                }, void 0, false, {
                    fileName: "[project]/app/events/page.tsx",
                    lineNumber: 213,
                    columnNumber: 424
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/events/page.tsx",
            lineNumber: 213,
            columnNumber: 11
        }, this);
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    let t12;
    if ($[24] !== t3 || $[25] !== t4 || $[26] !== t5 || $[27] !== t6) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t4,
                t5,
                t6,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/app/events/page.tsx",
            lineNumber: 220,
            columnNumber: 11
        }, this);
        $[24] = t3;
        $[25] = t4;
        $[26] = t5;
        $[27] = t6;
        $[28] = t12;
    } else {
        t12 = $[28];
    }
    let t13;
    if ($[29] !== t12 || $[30] !== t7) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            children: t12
        }, void 0, false, {
            fileName: "[project]/app/events/page.tsx",
            lineNumber: 231,
            columnNumber: 11
        }, this);
        $[29] = t12;
        $[30] = t7;
        $[31] = t13;
    } else {
        t13 = $[31];
    }
    return t13;
}
_s(EventsPage, "2aIUATfMr6gOlzsPCqmCoR0WaNA=");
_c = EventsPage;
function _EventsPageFilteredEventsMap(event_0, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 30
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            delay: index * 0.1
        },
        className: "group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start justify-between mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 ${event_0.event_type === "SERVICE" ? "bg-blue-100 text-blue-800" : event_0.event_type === "SPECIAL" ? "bg-red-100 text-red-800" : event_0.event_type === "YOUTH" ? "bg-pink-100 text-pink-800" : "bg-green-100 text-green-800"}`,
                                    children: event_0.event_type === "SERVICE" ? "Culte" : event_0.event_type === "SPECIAL" ? "\xC9v\xE9nement sp\xE9cial" : event_0.event_type === "YOUTH" ? "Jeunesse" : "\xC9tude biblique"
                                }, void 0, false, {
                                    fileName: "[project]/app/events/page.tsx",
                                    lineNumber: 249,
                                    columnNumber: 200
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors",
                                    children: event_0.title
                                }, void 0, false, {
                                    fileName: "[project]/app/events/page.tsx",
                                    lineNumber: 249,
                                    columnNumber: 692
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/events/page.tsx",
                            lineNumber: 249,
                            columnNumber: 195
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-right",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-3xl font-bold text-blue-600",
                                    children: new Date(event_0.date).getDate()
                                }, void 0, false, {
                                    fileName: "[project]/app/events/page.tsx",
                                    lineNumber: 249,
                                    columnNumber: 839
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-gray-500",
                                    children: new Date(event_0.date).toLocaleDateString("fr-FR", {
                                        month: "short"
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/events/page.tsx",
                                    lineNumber: 249,
                                    columnNumber: 929
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/events/page.tsx",
                            lineNumber: 249,
                            columnNumber: 811
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/events/page.tsx",
                    lineNumber: 249,
                    columnNumber: 140
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 mb-6",
                    children: event_0.description
                }, void 0, false, {
                    fileName: "[project]/app/events/page.tsx",
                    lineNumber: 251,
                    columnNumber: 34
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center text-gray-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                    className: "w-5 h-5 mr-3 text-blue-500 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/app/events/page.tsx",
                                    lineNumber: 251,
                                    columnNumber: 174
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-medium",
                                            children: "Date et heure"
                                        }, void 0, false, {
                                            fileName: "[project]/app/events/page.tsx",
                                            lineNumber: 251,
                                            columnNumber: 244
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm",
                                            children: [
                                                new Date(event_0.date).toLocaleDateString("fr-FR", {
                                                    weekday: "long",
                                                    day: "numeric",
                                                    month: "long",
                                                    year: "numeric"
                                                }),
                                                " \u2022 ",
                                                new Date(event_0.date).toLocaleTimeString("fr-FR", {
                                                    hour: "2-digit",
                                                    minute: "2-digit"
                                                })
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/events/page.tsx",
                                            lineNumber: 251,
                                            columnNumber: 292
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/events/page.tsx",
                                    lineNumber: 251,
                                    columnNumber: 239
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/events/page.tsx",
                            lineNumber: 251,
                            columnNumber: 125
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center text-gray-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                    className: "w-5 h-5 mr-3 text-green-500 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/app/events/page.tsx",
                                    lineNumber: 259,
                                    columnNumber: 85
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-medium",
                                            children: "Lieu"
                                        }, void 0, false, {
                                            fileName: "[project]/app/events/page.tsx",
                                            lineNumber: 259,
                                            columnNumber: 154
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm",
                                            children: event_0.location
                                        }, void 0, false, {
                                            fileName: "[project]/app/events/page.tsx",
                                            lineNumber: 259,
                                            columnNumber: 193
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/events/page.tsx",
                                    lineNumber: 259,
                                    columnNumber: 149
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/events/page.tsx",
                            lineNumber: 259,
                            columnNumber: 36
                        }, this),
                        event_0.speaker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center text-gray-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                    className: "w-5 h-5 mr-3 text-purple-500 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/app/events/page.tsx",
                                    lineNumber: 259,
                                    columnNumber: 323
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-medium",
                                            children: "Intervenant"
                                        }, void 0, false, {
                                            fileName: "[project]/app/events/page.tsx",
                                            lineNumber: 259,
                                            columnNumber: 392
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm",
                                            children: event_0.speaker
                                        }, void 0, false, {
                                            fileName: "[project]/app/events/page.tsx",
                                            lineNumber: 259,
                                            columnNumber: 438
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/events/page.tsx",
                                    lineNumber: 259,
                                    columnNumber: 387
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/events/page.tsx",
                            lineNumber: 259,
                            columnNumber: 274
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/events/page.tsx",
                    lineNumber: 251,
                    columnNumber: 93
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "flex-1 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition flex items-center justify-center gap-2 font-medium",
                            children: [
                                "S'inscrire",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/app/events/page.tsx",
                                    lineNumber: 259,
                                    columnNumber: 689
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/events/page.tsx",
                            lineNumber: 259,
                            columnNumber: 533
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition font-medium",
                            children: "Ajouter au calendrier"
                        }, void 0, false, {
                            fileName: "[project]/app/events/page.tsx",
                            lineNumber: 259,
                            columnNumber: 734
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/events/page.tsx",
                    lineNumber: 259,
                    columnNumber: 505
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/events/page.tsx",
            lineNumber: 249,
            columnNumber: 119
        }, this)
    }, event_0.id, false, {
        fileName: "[project]/app/events/page.tsx",
        lineNumber: 241,
        columnNumber: 10
    }, this);
}
function _EventsPageUseEffectAnonymous(res) {
    return res.json();
}
var _c;
__turbopack_context__.k.register(_c, "EventsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_events_page_tsx_306d925f._.js.map