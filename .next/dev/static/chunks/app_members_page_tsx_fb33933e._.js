(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/members/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MembersPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const roleLabels = {
    PASTOR: 'Pasteur',
    ELDER: 'Ancien',
    DEACON: 'Diacre',
    MEMBER: 'Membre',
    VISITOR: 'Visiteur'
};
const roleColors = {
    PASTOR: 'bg-purple-100 text-purple-800 border-purple-200',
    ELDER: 'bg-blue-100 text-blue-800 border-blue-200',
    DEACON: 'bg-green-100 text-green-800 border-green-200',
    MEMBER: 'bg-gray-100 text-gray-800 border-gray-200',
    VISITOR: 'bg-yellow-100 text-yellow-800 border-yellow-200'
};
function MembersPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(58);
    if ($[0] !== "529bbf8639030afef79f8a36641edc6801b0813aee9c3ac91089c69c392cf786") {
        for(let $i = 0; $i < 58; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "529bbf8639030afef79f8a36641edc6801b0813aee9c3ac91089c69c392cf786";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [members, setMembers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [roleFilter, setRoleFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("ALL");
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "MembersPage[useEffect()]": ()=>{
                fetch("http://localhost:8000/api/members/").then(_MembersPageUseEffectAnonymous).then({
                    "MembersPage[useEffect() > (anonymous)()]": (data)=>{
                        setMembers(data);
                        setLoading(false);
                    }
                }["MembersPage[useEffect() > (anonymous)()]"]).catch({
                    "MembersPage[useEffect() > (anonymous)()]": ()=>{
                        const demoMembers = [
                            {
                                id: 1,
                                first_name: "Jean",
                                last_name: "Martin",
                                role: "PASTOR",
                                email: "pasteur@eglise.tg",
                                phone: "+228 90 12 34 56"
                            },
                            {
                                id: 2,
                                first_name: "Marie",
                                last_name: "Dupont",
                                role: "ELDER",
                                email: "marie@eglise.tg",
                                phone: "+228 91 23 45 67"
                            },
                            {
                                id: 3,
                                first_name: "Paul",
                                last_name: "Dubois",
                                role: "DEACON",
                                email: "paul@eglise.tg",
                                phone: "+228 92 34 56 78"
                            },
                            {
                                id: 4,
                                first_name: "Sophie",
                                last_name: "Lambert",
                                role: "MEMBER",
                                email: "sophie@eglise.tg",
                                phone: "+228 93 45 67 89"
                            },
                            {
                                id: 5,
                                first_name: "Thomas",
                                last_name: "Moreau",
                                role: "MEMBER",
                                email: "thomas@eglise.tg",
                                phone: "+228 94 56 78 90"
                            },
                            {
                                id: 6,
                                first_name: "Julie",
                                last_name: "Bernard",
                                role: "VISITOR",
                                email: "julie@eglise.tg",
                                phone: "+228 95 67 89 01"
                            }
                        ];
                        setMembers(demoMembers);
                        setLoading(false);
                    }
                }["MembersPage[useEffect() > (anonymous)()]"]);
            }
        })["MembersPage[useEffect()]"];
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
    let t8;
    if ($[4] !== loading || $[5] !== members || $[6] !== roleFilter || $[7] !== search) {
        let t9;
        if ($[14] !== roleFilter || $[15] !== search) {
            t9 = ({
                "MembersPage[members.filter()]": (member)=>{
                    const matchesSearch = search === "" || member.first_name.toLowerCase().includes(search.toLowerCase()) || member.last_name.toLowerCase().includes(search.toLowerCase()) || member.email.toLowerCase().includes(search.toLowerCase());
                    const matchesRole = roleFilter === "ALL" || member.role === roleFilter;
                    return matchesSearch && matchesRole;
                }
            })["MembersPage[members.filter()]"];
            $[14] = roleFilter;
            $[15] = search;
            $[16] = t9;
        } else {
            t9 = $[16];
        }
        const filteredMembers = members.filter(t9);
        let t10;
        if ($[17] !== members) {
            t10 = members.reduce(_MembersPageMembersReduce, {});
            $[17] = members;
            $[18] = t10;
        } else {
            t10 = $[18];
        }
        const roleCounts = t10;
        t8 = "min-h-screen bg-gray-50 py-12";
        t6 = "max-w-7xl mx-auto px-4";
        let t11;
        if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-bold text-gray-900 mb-4",
                children: "Annuaire des Membres"
            }, void 0, false, {
                fileName: "[project]/app/members/page.tsx",
                lineNumber: 152,
                columnNumber: 13
            }, this);
            $[19] = t11;
        } else {
            t11 = $[19];
        }
        let t12;
        if ($[20] !== members.length) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-lg text-gray-600 mb-8",
                children: [
                    "Rencontrez notre communauté de ",
                    members.length,
                    " membres"
                ]
            }, void 0, true, {
                fileName: "[project]/app/members/page.tsx",
                lineNumber: 159,
                columnNumber: 13
            }, this);
            $[20] = members.length;
            $[21] = t12;
        } else {
            t12 = $[21];
        }
        let t13;
        if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
            t13 = [
                "PASTOR",
                "ELDER",
                "DEACON",
                "MEMBER",
                "VISITOR"
            ];
            $[22] = t13;
        } else {
            t13 = $[22];
        }
        let t14;
        if ($[23] !== roleCounts) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 md:grid-cols-5 gap-4 mb-8",
                children: t13.map({
                    "MembersPage[(anonymous)()]": (role)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white p-4 rounded-xl shadow text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `inline-block px-3 py-1 rounded-full text-sm font-semibold ${roleColors[role]} mb-2`,
                                    children: roleLabels[role]
                                }, void 0, false, {
                                    fileName: "[project]/app/members/page.tsx",
                                    lineNumber: 175,
                                    columnNumber: 120
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-2xl font-bold",
                                    children: roleCounts[role] || 0
                                }, void 0, false, {
                                    fileName: "[project]/app/members/page.tsx",
                                    lineNumber: 175,
                                    columnNumber: 246
                                }, this)
                            ]
                        }, role, true, {
                            fileName: "[project]/app/members/page.tsx",
                            lineNumber: 175,
                            columnNumber: 49
                        }, this)
                }["MembersPage[(anonymous)()]"])
            }, void 0, false, {
                fileName: "[project]/app/members/page.tsx",
                lineNumber: 174,
                columnNumber: 13
            }, this);
            $[23] = roleCounts;
            $[24] = t14;
        } else {
            t14 = $[24];
        }
        let t15;
        if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: "member-search",
                className: "block text-sm font-medium text-gray-700 mb-2",
                children: "Rechercher un membre"
            }, void 0, false, {
                fileName: "[project]/app/members/page.tsx",
                lineNumber: 184,
                columnNumber: 13
            }, this);
            $[25] = t15;
        } else {
            t15 = $[25];
        }
        let t16;
        if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
            t16 = ({
                "MembersPage[<input>.onChange]": (e)=>setSearch(e.target.value)
            })["MembersPage[<input>.onChange]"];
            $[26] = t16;
        } else {
            t16 = $[26];
        }
        let t17;
        if ($[27] !== search) {
            t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t15,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "member-search",
                        type: "text",
                        placeholder: "Nom, pr\xE9nom ou email...",
                        value: search,
                        onChange: t16,
                        className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                        "aria-label": "Rechercher un membre par nom, pr\xE9nom ou email"
                    }, void 0, false, {
                        fileName: "[project]/app/members/page.tsx",
                        lineNumber: 200,
                        columnNumber: 23
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/members/page.tsx",
                lineNumber: 200,
                columnNumber: 13
            }, this);
            $[27] = search;
            $[28] = t17;
        } else {
            t17 = $[28];
        }
        let t18;
        if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: "role-filter",
                className: "block text-sm font-medium text-gray-700 mb-2",
                children: "Filtrer par rôle"
            }, void 0, false, {
                fileName: "[project]/app/members/page.tsx",
                lineNumber: 208,
                columnNumber: 13
            }, this);
            $[29] = t18;
        } else {
            t18 = $[29];
        }
        let t19;
        if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
            t19 = ({
                "MembersPage[<select>.onChange]": (e_0)=>setRoleFilter(e_0.target.value)
            })["MembersPage[<select>.onChange]"];
            $[30] = t19;
        } else {
            t19 = $[30];
        }
        let t20;
        let t21;
        let t22;
        let t23;
        let t24;
        let t25;
        if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
            t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "ALL",
                children: "Tous les rôles"
            }, void 0, false, {
                fileName: "[project]/app/members/page.tsx",
                lineNumber: 229,
                columnNumber: 13
            }, this);
            t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "PASTOR",
                children: "Pasteurs"
            }, void 0, false, {
                fileName: "[project]/app/members/page.tsx",
                lineNumber: 230,
                columnNumber: 13
            }, this);
            t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "ELDER",
                children: "Anciens"
            }, void 0, false, {
                fileName: "[project]/app/members/page.tsx",
                lineNumber: 231,
                columnNumber: 13
            }, this);
            t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "DEACON",
                children: "Diacres"
            }, void 0, false, {
                fileName: "[project]/app/members/page.tsx",
                lineNumber: 232,
                columnNumber: 13
            }, this);
            t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "MEMBER",
                children: "Membres"
            }, void 0, false, {
                fileName: "[project]/app/members/page.tsx",
                lineNumber: 233,
                columnNumber: 13
            }, this);
            t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "VISITOR",
                children: "Visiteurs"
            }, void 0, false, {
                fileName: "[project]/app/members/page.tsx",
                lineNumber: 234,
                columnNumber: 13
            }, this);
            $[31] = t20;
            $[32] = t21;
            $[33] = t22;
            $[34] = t23;
            $[35] = t24;
            $[36] = t25;
        } else {
            t20 = $[31];
            t21 = $[32];
            t22 = $[33];
            t23 = $[34];
            t24 = $[35];
            t25 = $[36];
        }
        let t26;
        if ($[37] !== roleFilter) {
            t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t18,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "role-filter",
                        value: roleFilter,
                        onChange: t19,
                        className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                        "aria-label": "Filtrer les membres par r\xF4le",
                        title: "S\xE9lectionnez un r\xF4le pour filtrer les membres",
                        children: [
                            t20,
                            t21,
                            t22,
                            t23,
                            t24,
                            t25
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/members/page.tsx",
                        lineNumber: 251,
                        columnNumber: 23
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/members/page.tsx",
                lineNumber: 251,
                columnNumber: 13
            }, this);
            $[37] = roleFilter;
            $[38] = t26;
        } else {
            t26 = $[38];
        }
        let t27;
        if ($[39] !== t17 || $[40] !== t26) {
            t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-6 rounded-xl shadow-lg mb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                    children: [
                        t17,
                        t26
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/members/page.tsx",
                    lineNumber: 259,
                    columnNumber: 69
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/members/page.tsx",
                lineNumber: 259,
                columnNumber: 13
            }, this);
            $[39] = t17;
            $[40] = t26;
            $[41] = t27;
        } else {
            t27 = $[41];
        }
        if ($[42] !== t12 || $[43] !== t14 || $[44] !== t27) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "mb-12",
                children: [
                    t11,
                    t12,
                    t14,
                    t27
                ]
            }, void 0, true, {
                fileName: "[project]/app/members/page.tsx",
                lineNumber: 267,
                columnNumber: 12
            }, this);
            $[42] = t12;
            $[43] = t14;
            $[44] = t27;
            $[45] = t7;
        } else {
            t7 = $[45];
        }
        t3 = "bg-white rounded-xl shadow-lg overflow-hidden";
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-6 py-4 border-b border-gray-200",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold text-gray-800",
                children: [
                    "Liste des Membres (",
                    filteredMembers.length,
                    ")"
                ]
            }, void 0, true, {
                fileName: "[project]/app/members/page.tsx",
                lineNumber: 276,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/members/page.tsx",
            lineNumber: 276,
            columnNumber: 10
        }, this);
        t5 = loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-12 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto",
                    role: "status",
                    "aria-label": "Chargement des membres en cours",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "sr-only",
                        children: "Chargement..."
                    }, void 0, false, {
                        fileName: "[project]/app/members/page.tsx",
                        lineNumber: 277,
                        columnNumber: 201
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/members/page.tsx",
                    lineNumber: 277,
                    columnNumber: 54
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-4 text-gray-600",
                    children: "Chargement des membres..."
                }, void 0, false, {
                    fileName: "[project]/app/members/page.tsx",
                    lineNumber: 277,
                    columnNumber: 253
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/members/page.tsx",
            lineNumber: 277,
            columnNumber: 20
        }, this) : filteredMembers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-12 text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-600",
                children: "Aucun membre ne correspond à votre recherche."
            }, void 0, false, {
                fileName: "[project]/app/members/page.tsx",
                lineNumber: 277,
                columnNumber: 390
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/members/page.tsx",
            lineNumber: 277,
            columnNumber: 356
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "overflow-x-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "min-w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
                        className: "sr-only",
                        children: "Liste des membres de l'église"
                    }, void 0, false, {
                        fileName: "[project]/app/members/page.tsx",
                        lineNumber: 277,
                        columnNumber: 540
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        className: "bg-gray-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    scope: "col",
                                    className: "px-6 py-3 text-left text-sm font-semibold text-gray-700",
                                    children: "Membre"
                                }, void 0, false, {
                                    fileName: "[project]/app/members/page.tsx",
                                    lineNumber: 277,
                                    columnNumber: 642
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    scope: "col",
                                    className: "px-6 py-3 text-left text-sm font-semibold text-gray-700",
                                    children: "Rôle"
                                }, void 0, false, {
                                    fileName: "[project]/app/members/page.tsx",
                                    lineNumber: 277,
                                    columnNumber: 737
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    scope: "col",
                                    className: "px-6 py-3 text-left text-sm font-semibold text-gray-700",
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/app/members/page.tsx",
                                    lineNumber: 277,
                                    columnNumber: 830
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    scope: "col",
                                    className: "px-6 py-3 text-left text-sm font-semibold text-gray-700",
                                    children: "Actions"
                                }, void 0, false, {
                                    fileName: "[project]/app/members/page.tsx",
                                    lineNumber: 277,
                                    columnNumber: 926
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/members/page.tsx",
                            lineNumber: 277,
                            columnNumber: 638
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/members/page.tsx",
                        lineNumber: 277,
                        columnNumber: 608
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        className: "divide-y divide-gray-200",
                        children: filteredMembers.map(_MembersPageFilteredMembersMap)
                    }, void 0, false, {
                        fileName: "[project]/app/members/page.tsx",
                        lineNumber: 277,
                        columnNumber: 1035
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/members/page.tsx",
                lineNumber: 277,
                columnNumber: 510
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/members/page.tsx",
            lineNumber: 277,
            columnNumber: 477
        }, this);
        $[4] = loading;
        $[5] = members;
        $[6] = roleFilter;
        $[7] = search;
        $[8] = t3;
        $[9] = t4;
        $[10] = t5;
        $[11] = t6;
        $[12] = t7;
        $[13] = t8;
    } else {
        t3 = $[8];
        t4 = $[9];
        t5 = $[10];
        t6 = $[11];
        t7 = $[12];
        t8 = $[13];
    }
    let t9;
    if ($[46] !== t3 || $[47] !== t4 || $[48] !== t5) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/app/members/page.tsx",
            lineNumber: 298,
            columnNumber: 10
        }, this);
        $[46] = t3;
        $[47] = t4;
        $[48] = t5;
        $[49] = t9;
    } else {
        t9 = $[49];
    }
    let t10;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-8 p-6 bg-blue-50 rounded-xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-blue-800 mb-2",
                                children: "Administration"
                            }, void 0, false, {
                                fileName: "[project]/app/members/page.tsx",
                                lineNumber: 308,
                                columnNumber: 115
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-blue-700",
                                children: "Pour gérer les membres, utilisez le panneau d'administration Django."
                            }, void 0, false, {
                                fileName: "[project]/app/members/page.tsx",
                                lineNumber: 308,
                                columnNumber: 191
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/members/page.tsx",
                        lineNumber: 308,
                        columnNumber: 110
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "http://localhost:8000/admin",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition",
                        "aria-label": "Acc\xE9der au panneau d'administration Django",
                        children: "Accéder à l'admin"
                    }, void 0, false, {
                        fileName: "[project]/app/members/page.tsx",
                        lineNumber: 308,
                        columnNumber: 298
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/members/page.tsx",
                lineNumber: 308,
                columnNumber: 59
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/members/page.tsx",
            lineNumber: 308,
            columnNumber: 11
        }, this);
        $[50] = t10;
    } else {
        t10 = $[50];
    }
    let t11;
    if ($[51] !== t6 || $[52] !== t7 || $[53] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            children: [
                t7,
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/app/members/page.tsx",
            lineNumber: 315,
            columnNumber: 11
        }, this);
        $[51] = t6;
        $[52] = t7;
        $[53] = t9;
        $[54] = t11;
    } else {
        t11 = $[54];
    }
    let t12;
    if ($[55] !== t11 || $[56] !== t8) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t8,
            children: t11
        }, void 0, false, {
            fileName: "[project]/app/members/page.tsx",
            lineNumber: 325,
            columnNumber: 11
        }, this);
        $[55] = t11;
        $[56] = t8;
        $[57] = t12;
    } else {
        t12 = $[57];
    }
    return t12;
}
_s(MembersPage, "N76CWu/SQIwId6G3iFMd7w1C4hI=");
_c = MembersPage;
function _MembersPageFilteredMembersMap(member_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        className: "hover:bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-6 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0 h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold",
                            "aria-hidden": "true",
                            children: [
                                member_1.first_name[0],
                                member_1.last_name[0]
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/members/page.tsx",
                            lineNumber: 335,
                            columnNumber: 122
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ml-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-medium text-gray-900",
                                children: [
                                    member_1.first_name,
                                    " ",
                                    member_1.last_name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/members/page.tsx",
                                lineNumber: 335,
                                columnNumber: 339
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/members/page.tsx",
                            lineNumber: 335,
                            columnNumber: 317
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/members/page.tsx",
                    lineNumber: 335,
                    columnNumber: 87
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/members/page.tsx",
                lineNumber: 335,
                columnNumber: 61
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-6 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `px-3 py-1 rounded-full text-sm font-semibold border ${roleColors[member_1.role]}`,
                    "aria-label": `Rôle: ${roleLabels[member_1.role]}`,
                    children: roleLabels[member_1.role]
                }, void 0, false, {
                    fileName: "[project]/app/members/page.tsx",
                    lineNumber: 335,
                    columnNumber: 473
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/members/page.tsx",
                lineNumber: 335,
                columnNumber: 447
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-6 py-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-gray-900 font-medium",
                        children: member_1.email
                    }, void 0, false, {
                        fileName: "[project]/app/members/page.tsx",
                        lineNumber: 335,
                        columnNumber: 689
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-gray-600 text-sm",
                        children: member_1.phone || "Non renseign\xE9"
                    }, void 0, false, {
                        fileName: "[project]/app/members/page.tsx",
                        lineNumber: 335,
                        columnNumber: 754
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/members/page.tsx",
                lineNumber: 335,
                columnNumber: 663
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-6 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "text-blue-600 hover:text-blue-800 font-medium",
                    onClick: {
                        "MembersPage[filteredMembers.map() > <button>.onClick]": ()=>console.log("Voir profil:", member_1.id)
                    }["MembersPage[filteredMembers.map() > <button>.onClick]"],
                    "aria-label": `Voir le profil de ${member_1.first_name} ${member_1.last_name}`,
                    children: "Voir profil"
                }, void 0, false, {
                    fileName: "[project]/app/members/page.tsx",
                    lineNumber: 335,
                    columnNumber: 868
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/members/page.tsx",
                lineNumber: 335,
                columnNumber: 842
            }, this)
        ]
    }, member_1.id, true, {
        fileName: "[project]/app/members/page.tsx",
        lineNumber: 335,
        columnNumber: 10
    }, this);
}
function _MembersPageMembersReduce(acc, member_0) {
    acc[member_0.role] = (acc[member_0.role] || 0) + 1;
    return acc;
}
function _MembersPageUseEffectAnonymous(res) {
    if (!res.ok) {
        throw new Error("API non disponible");
    }
    return res.json();
}
var _c;
__turbopack_context__.k.register(_c, "MembersPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_members_page_tsx_fb33933e._.js.map