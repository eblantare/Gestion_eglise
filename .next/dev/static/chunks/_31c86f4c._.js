(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/contexts/AuthContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// contexts/AuthContext.tsx - VERSION PROPRE ET FONCTIONNELLE
__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const useAuth = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "944135145c43798bbe88c2696933eb40858371b55e943f9c1ce041c28304d227") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "944135145c43798bbe88c2696933eb40858371b55e943f9c1ce041c28304d227";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
_s(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const AuthProvider = ({ children })=>{
    _s1();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const initAuth = {
                "AuthProvider.useEffect.initAuth": async ()=>{
                    try {
                        const storedToken = localStorage.getItem('access_token');
                        const storedUser = localStorage.getItem('user');
                        const storedProfile = localStorage.getItem('profile');
                        if (storedToken && storedUser) {
                            setToken(storedToken);
                            setUser(JSON.parse(storedUser));
                            if (storedProfile) {
                                setProfile(JSON.parse(storedProfile));
                            }
                        }
                    } catch (error) {
                        console.error('Erreur initialisation auth:', error);
                        // Nettoyer en cas d'erreur
                        localStorage.removeItem('access_token');
                        localStorage.removeItem('user');
                        localStorage.removeItem('profile');
                    } finally{
                        setIsLoading(false);
                    }
                }
            }["AuthProvider.useEffect.initAuth"];
            initAuth();
        }
    }["AuthProvider.useEffect"], []);
    // Helper functions
    const isAuthenticated = !!user && !!token;
    const isAdmin = profile?.role === 'ADMIN' || profile?.role === 'WEBMASTER';
    const isWebmaster = profile?.role === 'WEBMASTER';
    const canManageUsers = isWebmaster;
    const canManageContent = isAdmin || profile?.role === 'PASTOR';
    const canManageEverything = isWebmaster;
    const login = async (username, password)=>{
        try {
            setIsLoading(true);
            const response = await fetch('http://localhost:8000/api/members/auth/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password
                })
            });
            if (!response.ok) {
                throw new Error('Identifiants invalides');
            }
            const data = await response.json();
            // Stocker les données
            localStorage.setItem('access_token', data.access);
            localStorage.setItem('refresh_token', data.refresh);
            localStorage.setItem('user', JSON.stringify(data.user));
            if (data.member) {
                localStorage.setItem('profile', JSON.stringify(data.member));
                setProfile(data.member);
            }
            setToken(data.access);
            setUser(data.user);
            router.push('/');
        } catch (error_0) {
            console.error('Login error:', error_0);
            throw error_0;
        } finally{
            setIsLoading(false);
        }
    };
    const register = async (data_0)=>{
        try {
            setIsLoading(true);
            const response_0 = await fetch('http://localhost:8000/api/members/auth/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data_0)
            });
            if (!response_0.ok) {
                throw new Error('Erreur lors de l\'inscription');
            }
            const result = await response_0.json();
            // Stocker les données
            localStorage.setItem('access_token', result.access);
            localStorage.setItem('refresh_token', result.refresh);
            localStorage.setItem('user', JSON.stringify(result.user));
            if (result.member) {
                localStorage.setItem('profile', JSON.stringify(result.member));
                setProfile(result.member);
            }
            setToken(result.access);
            setUser(result.user);
            router.push('/');
        } catch (error_1) {
            console.error('Register error:', error_1);
            throw error_1;
        } finally{
            setIsLoading(false);
        }
    };
    const logout = ()=>{
        // Nettoyer le localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('user');
        localStorage.removeItem('profile');
        setToken(null);
        setUser(null);
        setProfile(null);
        router.push('/');
    };
    const refreshUser = async ()=>{
        if (!token) return;
        try {
            const response_1 = await fetch('http://localhost:8000/api/members/auth/me/', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response_1.ok) {
                const data_1 = await response_1.json();
                localStorage.setItem('user', JSON.stringify(data_1.user));
                if (data_1.member) {
                    localStorage.setItem('profile', JSON.stringify(data_1.member));
                    setProfile(data_1.member);
                }
                setUser(data_1.user);
            }
        } catch (error_2) {
            console.error('Refresh user error:', error_2);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            profile,
            token,
            isAuthenticated,
            isLoading,
            isAdmin,
            isWebmaster,
            canManageContent,
            canManageUsers,
            canManageEverything,
            login,
            register,
            logout,
            refreshUser
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/contexts/AuthContext.tsx",
        lineNumber: 202,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(AuthProvider, "AsR6C+4PDy2/yMiSGjMg0UcOW3k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AuthProvider;
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/components/Navbar.tsx - VERSION PROFESSIONNELLE
__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function Navbar() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(51);
    if ($[0] !== "fb51a642de1ede843dc6aa3a0b82a0a6d45b7a9077c008bc3eeed42cd5d78398") {
        for(let $i = 0; $i < 51; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fb51a642de1ede843dc6aa3a0b82a0a6d45b7a9077c008bc3eeed42cd5d78398";
    }
    const { user, isAuthenticated, isAdmin, isWebmaster, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Navbar[useEffect()]": ()=>{
                const handleScroll = {
                    "Navbar[useEffect() > handleScroll]": ()=>{
                        setScrolled(window.scrollY > 20);
                    }
                }["Navbar[useEffect() > handleScroll]"];
                window.addEventListener("scroll", handleScroll);
                return ()=>window.removeEventListener("scroll", handleScroll);
            }
        })["Navbar[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let T0;
    let t2;
    let t3;
    let t4;
    let t5;
    if ($[3] !== isAdmin || $[4] !== isAuthenticated || $[5] !== isMenuOpen || $[6] !== isWebmaster || $[7] !== logout || $[8] !== scrolled || $[9] !== user?.first_name || $[10] !== user?.last_name) {
        const menuItems = [
            {
                label: "Accueil",
                href: "/"
            },
            {
                label: "\xC0 propos",
                href: "/about"
            },
            {
                label: "Croyances",
                href: "/beliefs"
            },
            {
                label: "Minist\xE8res",
                href: "/ministries",
                submenu: [
                    {
                        label: "CDEJ-RAFISSA",
                        href: "/cdej"
                    },
                    {
                        label: "Louange",
                        href: "/worship"
                    },
                    {
                        label: "Enfants",
                        href: "/kids"
                    },
                    {
                        label: "Femmes",
                        href: "/women"
                    }
                ]
            },
            {
                label: "\xC9v\xE9nements",
                href: "/events"
            },
            {
                label: "Messages",
                href: "/sermons"
            },
            {
                label: "Contact",
                href: "/contact"
            }
        ];
        t5 = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-xl shadow-2xl py-3" : "bg-gradient-to-b from-white/95 to-white/80 backdrop-blur-sm py-4"}`;
        t3 = "max-w-7xl mx-auto px-4";
        let t6;
        let t7;
        if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
            t6 = {
                scale: 1.05
            };
            t7 = {
                scale: 0.95
            };
            $[16] = t6;
            $[17] = t7;
        } else {
            t6 = $[16];
            t7 = $[17];
        }
        let t8;
        if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "relative",
                whileHover: t6,
                whileTap: t7,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center relative overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent",
                                animate: {
                                    x: [
                                        "-100%",
                                        "100%"
                                    ]
                                },
                                transition: {
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: "loop"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 109,
                                columnNumber: 230
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white font-bold text-xl relative z-10",
                                children: "EGG"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 115,
                                columnNumber: 16
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 109,
                        columnNumber: 75
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                        className: "absolute -top-2 -right-2 w-4 h-4 text-yellow-400"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 115,
                        columnNumber: 93
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Navbar.tsx",
                lineNumber: 109,
                columnNumber: 12
            }, this);
            $[18] = t8;
        } else {
            t8 = $[18];
        }
        let t9;
        if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: "flex items-center space-x-3 group",
                children: [
                    t8,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden sm:block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-bold text-gray-900 text-lg",
                                children: "Église Grande Grâce"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 122,
                                columnNumber: 110
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-gray-500",
                                children: "Défalé - CDEJ-RAFISSA"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 122,
                                columnNumber: 184
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 122,
                        columnNumber: 77
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Navbar.tsx",
                lineNumber: 122,
                columnNumber: 12
            }, this);
            $[19] = t9;
        } else {
            t9 = $[19];
        }
        let t10;
        if ($[20] !== isAdmin || $[21] !== isWebmaster) {
            t10 = (isAdmin || isWebmaster) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/admin",
                className: "px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium ml-2 shadow-lg",
                children: "Administration"
            }, void 0, false, {
                fileName: "[project]/app/components/Navbar.tsx",
                lineNumber: 129,
                columnNumber: 41
            }, this);
            $[20] = isAdmin;
            $[21] = isWebmaster;
            $[22] = t10;
        } else {
            t10 = $[22];
        }
        const t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden lg:flex items-center space-x-1",
            children: [
                menuItems.map(_NavbarMenuItemsMap),
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Navbar.tsx",
            lineNumber: 136,
            columnNumber: 17
        }, this);
        let t12;
        if ($[23] !== isAdmin || $[24] !== isAuthenticated || $[25] !== isWebmaster || $[26] !== logout || $[27] !== user?.first_name || $[28] !== user?.last_name) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden lg:flex items-center space-x-4",
                children: isAuthenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "flex items-center space-x-3 focus:outline-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-right",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-medium text-gray-900 text-sm",
                                            children: [
                                                user?.first_name,
                                                " ",
                                                user?.last_name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Navbar.tsx",
                                            lineNumber: 139,
                                            columnNumber: 214
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-gray-500 flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                    className: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 370
                                                }, this),
                                                isWebmaster ? "Webmaster" : isAdmin ? "Admin" : "Membre"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Navbar.tsx",
                                            lineNumber: 139,
                                            columnNumber: 307
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Navbar.tsx",
                                    lineNumber: 139,
                                    columnNumber: 186
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center border-2 border-white shadow-lg relative overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent",
                                            animate: {
                                                x: [
                                                    "-100%",
                                                    "100%"
                                                ]
                                            },
                                            transition: {
                                                duration: 3,
                                                repeat: Infinity,
                                                repeatType: "loop"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Navbar.tsx",
                                            lineNumber: 139,
                                            columnNumber: 648
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-blue-600 font-semibold text-sm relative z-10",
                                            children: [
                                                user?.first_name?.charAt(0),
                                                user?.last_name?.charAt(0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Navbar.tsx",
                                            lineNumber: 145,
                                            columnNumber: 20
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Navbar.tsx",
                                    lineNumber: 139,
                                    columnNumber: 472
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Navbar.tsx",
                            lineNumber: 139,
                            columnNumber: 119
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl shadow-2xl border border-gray-100 py-2 min-w-[200px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/profile",
                                        className: "flex items-center gap-3 px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm",
                                                    children: "👤"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 618
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Navbar.tsx",
                                                lineNumber: 145,
                                                columnNumber: 537
                                            }, this),
                                            "Mon profil"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 145,
                                        columnNumber: 397
                                    }, this),
                                    (isAdmin || isWebmaster) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/admin",
                                        className: "flex items-center gap-3 px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm",
                                                    children: "⚙️"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 924
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Navbar.tsx",
                                                lineNumber: 145,
                                                columnNumber: 843
                                            }, this),
                                            "Administration"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 145,
                                        columnNumber: 705
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t border-gray-200 my-1"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 145,
                                        columnNumber: 987
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: logout,
                                        className: "flex items-center gap-3 w-full text-left px-6 py-3 text-red-600 hover:bg-red-50/50 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm",
                                                    children: "🚪"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 1254
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Navbar.tsx",
                                                lineNumber: 145,
                                                columnNumber: 1174
                                            }, this),
                                            "Se déconnecter"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 145,
                                        columnNumber: 1036
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 145,
                                columnNumber: 307
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Navbar.tsx",
                            lineNumber: 145,
                            columnNumber: 167
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Navbar.tsx",
                    lineNumber: 139,
                    columnNumber: 87
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/login",
                            className: "text-gray-700 hover:text-blue-600 transition-colors font-medium",
                            children: "Connexion"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Navbar.tsx",
                            lineNumber: 145,
                            columnNumber: 1384
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/register",
                            className: "px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg font-medium",
                            children: "Rejoindre"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Navbar.tsx",
                            lineNumber: 145,
                            columnNumber: 1496
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Navbar.tsx",
                    lineNumber: 145,
                    columnNumber: 1339
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Navbar.tsx",
                lineNumber: 139,
                columnNumber: 13
            }, this);
            $[23] = isAdmin;
            $[24] = isAuthenticated;
            $[25] = isWebmaster;
            $[26] = logout;
            $[27] = user?.first_name;
            $[28] = user?.last_name;
            $[29] = t12;
        } else {
            t12 = $[29];
        }
        let t13;
        if ($[30] !== isMenuOpen) {
            t13 = ({
                "Navbar[<button>.onClick]": ()=>setIsMenuOpen(!isMenuOpen)
            })["Navbar[<button>.onClick]"];
            $[30] = isMenuOpen;
            $[31] = t13;
        } else {
            t13 = $[31];
        }
        let t14;
        if ($[32] !== isMenuOpen) {
            t14 = isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                size: 24
            }, void 0, false, {
                fileName: "[project]/app/components/Navbar.tsx",
                lineNumber: 168,
                columnNumber: 26
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                size: 24
            }, void 0, false, {
                fileName: "[project]/app/components/Navbar.tsx",
                lineNumber: 168,
                columnNumber: 44
            }, this);
            $[32] = isMenuOpen;
            $[33] = t14;
        } else {
            t14 = $[33];
        }
        let t15;
        if ($[34] !== t13 || $[35] !== t14) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: t13,
                className: "lg:hidden p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg",
                children: t14
            }, void 0, false, {
                fileName: "[project]/app/components/Navbar.tsx",
                lineNumber: 176,
                columnNumber: 13
            }, this);
            $[34] = t13;
            $[35] = t14;
            $[36] = t15;
        } else {
            t15 = $[36];
        }
        if ($[37] !== t11 || $[38] !== t12 || $[39] !== t15) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center",
                children: [
                    t9,
                    t11,
                    t12,
                    t15
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Navbar.tsx",
                lineNumber: 184,
                columnNumber: 12
            }, this);
            $[37] = t11;
            $[38] = t12;
            $[39] = t15;
            $[40] = t4;
        } else {
            t4 = $[40];
        }
        T0 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"];
        t2 = isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                height: 0
            },
            animate: {
                opacity: 1,
                height: "auto"
            },
            exit: {
                opacity: 0,
                height: 0
            },
            className: "lg:hidden mt-4 overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl shadow-2xl border border-gray-100 p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 mb-6",
                        children: menuItems.map({
                            "Navbar[menuItems.map()]": (item_0, index_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: item_0.href,
                                            className: "block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-colors font-medium",
                                            onClick: {
                                                "Navbar[menuItems.map() > <Link>.onClick]": ()=>setIsMenuOpen(false)
                                            }["Navbar[menuItems.map() > <Link>.onClick]"],
                                            children: item_0.label
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Navbar.tsx",
                                            lineNumber: 203,
                                            columnNumber: 80
                                        }, this),
                                        item_0.submenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ml-4 mt-1 space-y-1",
                                            children: item_0.submenu.map({
                                                "Navbar[menuItems.map() > item_0.submenu.map()]": (subitem_0, subIndex_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: subitem_0.href,
                                                        className: "block px-4 py-2 text-sm text-gray-500 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-colors",
                                                        onClick: {
                                                            "Navbar[menuItems.map() > item_0.submenu.map() > <Link>.onClick]": ()=>setIsMenuOpen(false)
                                                        }["Navbar[menuItems.map() > item_0.submenu.map() > <Link>.onClick]"],
                                                        children: subitem_0.label
                                                    }, subIndex_0, false, {
                                                        fileName: "[project]/app/components/Navbar.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 96
                                                    }, this)
                                            }["Navbar[menuItems.map() > item_0.submenu.map()]"])
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Navbar.tsx",
                                            lineNumber: 205,
                                            columnNumber: 102
                                        }, this)
                                    ]
                                }, index_0, true, {
                                    fileName: "[project]/app/components/Navbar.tsx",
                                    lineNumber: 203,
                                    columnNumber: 61
                                }, this)
                        }["Navbar[menuItems.map()]"])
                    }, void 0, false, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 202,
                        columnNumber: 127
                    }, this),
                    isAuthenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-6 border-t border-gray-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-blue-600 font-semibold",
                                            children: [
                                                user?.first_name?.charAt(0),
                                                user?.last_name?.charAt(0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Navbar.tsx",
                                            lineNumber: 210,
                                            columnNumber: 278
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 210,
                                        columnNumber: 159
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-medium text-gray-900",
                                                children: [
                                                    user?.first_name,
                                                    " ",
                                                    user?.last_name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/Navbar.tsx",
                                                lineNumber: 210,
                                                columnNumber: 399
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-500",
                                                children: isWebmaster ? "Webmaster" : isAdmin ? "Admin" : "Membre"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Navbar.tsx",
                                                lineNumber: 210,
                                                columnNumber: 484
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 210,
                                        columnNumber: 394
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 210,
                                columnNumber: 113
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/profile",
                                        className: "block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-colors",
                                        onClick: {
                                            "Navbar[<Link>.onClick]": ()=>setIsMenuOpen(false)
                                        }["Navbar[<Link>.onClick]"],
                                        children: "Mon profil"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 210,
                                        columnNumber: 626
                                    }, this),
                                    (isAdmin || isWebmaster) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/admin",
                                        className: "block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-colors",
                                        onClick: {
                                            "Navbar[<Link>.onClick]": ()=>setIsMenuOpen(false)
                                        }["Navbar[<Link>.onClick]"],
                                        children: "Administration"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 212,
                                        columnNumber: 88
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "Navbar[<button>.onClick]": ()=>{
                                                logout();
                                                setIsMenuOpen(false);
                                            }
                                        }["Navbar[<button>.onClick]"],
                                        className: "block w-full text-left px-4 py-3 text-red-600 hover:bg-red-50/50 rounded-lg transition-colors",
                                        children: "Se déconnecter"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 214,
                                        columnNumber: 64
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 210,
                                columnNumber: 599
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 210,
                        columnNumber: 66
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-6 border-t border-gray-200 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/login",
                                className: "block w-full px-4 py-3 text-center text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-colors font-medium",
                                onClick: {
                                    "Navbar[<Link>.onClick]": ()=>setIsMenuOpen(false)
                                }["Navbar[<Link>.onClick]"],
                                children: "Connexion"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 219,
                                columnNumber: 245
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/register",
                                className: "block w-full px-4 py-3 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium",
                                onClick: {
                                    "Navbar[<Link>.onClick]": ()=>setIsMenuOpen(false)
                                }["Navbar[<Link>.onClick]"],
                                children: "S'inscrire"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 221,
                                columnNumber: 56
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 219,
                        columnNumber: 188
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Navbar.tsx",
                lineNumber: 202,
                columnNumber: 51
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/Navbar.tsx",
            lineNumber: 193,
            columnNumber: 24
        }, this);
        $[3] = isAdmin;
        $[4] = isAuthenticated;
        $[5] = isMenuOpen;
        $[6] = isWebmaster;
        $[7] = logout;
        $[8] = scrolled;
        $[9] = user?.first_name;
        $[10] = user?.last_name;
        $[11] = T0;
        $[12] = t2;
        $[13] = t3;
        $[14] = t4;
        $[15] = t5;
    } else {
        T0 = $[11];
        t2 = $[12];
        t3 = $[13];
        t4 = $[14];
        t5 = $[15];
    }
    let t6;
    if ($[41] !== T0 || $[42] !== t2) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            children: t2
        }, void 0, false, {
            fileName: "[project]/app/components/Navbar.tsx",
            lineNumber: 246,
            columnNumber: 10
        }, this);
        $[41] = T0;
        $[42] = t2;
        $[43] = t6;
    } else {
        t6 = $[43];
    }
    let t7;
    if ($[44] !== t3 || $[45] !== t4 || $[46] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t4,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Navbar.tsx",
            lineNumber: 255,
            columnNumber: 10
        }, this);
        $[44] = t3;
        $[45] = t4;
        $[46] = t6;
        $[47] = t7;
    } else {
        t7 = $[47];
    }
    let t8;
    if ($[48] !== t5 || $[49] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: t5,
            children: t7
        }, void 0, false, {
            fileName: "[project]/app/components/Navbar.tsx",
            lineNumber: 265,
            columnNumber: 10
        }, this);
        $[48] = t5;
        $[49] = t7;
        $[50] = t8;
    } else {
        t8 = $[50];
    }
    return t8;
}
_s(Navbar, "vWi/dgy7pQ7rwEt7K0c+eUS8Mvs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = Navbar;
function _NavbarMenuItemsMap(item, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: item.href,
                className: "flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium rounded-lg hover:bg-blue-50/50",
                children: [
                    item.label,
                    item.submenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 275,
                        columnNumber: 247
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Navbar.tsx",
                lineNumber: 275,
                columnNumber: 54
            }, this),
            item.submenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-xl shadow-2xl border border-gray-100 py-2 min-w-[200px]",
                    children: item.submenu.map(_NavbarMenuItemsMapItemSubmenuMap)
                }, void 0, false, {
                    fileName: "[project]/app/components/Navbar.tsx",
                    lineNumber: 275,
                    columnNumber: 446
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Navbar.tsx",
                lineNumber: 275,
                columnNumber: 307
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/app/components/Navbar.tsx",
        lineNumber: 275,
        columnNumber: 10
    }, this);
}
function _NavbarMenuItemsMapItemSubmenuMap(subitem, subIndex) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: subitem.href,
        className: "block px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-colors",
        children: subitem.label
    }, subIndex, false, {
        fileName: "[project]/app/components/Navbar.tsx",
        lineNumber: 278,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/components/Footer.tsx
__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/youtube.js [app-client] (ecmascript) <export default as Youtube>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Footer() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(43);
    if ($[0] !== "69326cb4bd58880ee26d71d87adb5ccefe47875d6d29c7664cd1e69e0b9db294") {
        for(let $i = 0; $i < 43; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "69326cb4bd58880ee26d71d87adb5ccefe47875d6d29c7664cd1e69e0b9db294";
    }
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Footer[handleNewsletterSubmit]": async (e)=>{
                e.preventDefault();
                setIsSubmitting(true);
                setTimeout({
                    "Footer[handleNewsletterSubmit > setTimeout()]": ()=>{
                        alert("Merci pour votre message ! Nous vous r\xE9pondrons bient\xF4t.");
                        setEmail("");
                        setMessage("");
                        setIsSubmitting(false);
                    }
                }["Footer[handleNewsletterSubmit > setTimeout()]"], 1000);
            }
        })["Footer[handleNewsletterSubmit]"];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const handleNewsletterSubmit = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-3xl font-bold mb-4",
                    children: "Restez Connecté"
                }, void 0, false, {
                    fileName: "[project]/app/components/Footer.tsx",
                    lineNumber: 41,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-blue-100 text-lg",
                    children: "Inscrivez-vous à notre newsletter pour recevoir les dernières actualités, événements et messages spirituels."
                }, void 0, false, {
                    fileName: "[project]/app/components/Footer.tsx",
                    lineNumber: 41,
                    columnNumber: 75
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Footer.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "Footer[<input>.onChange]": (e_0)=>setEmail(e_0.target.value)
        })["Footer[<input>.onChange]"];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== email) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "email",
            placeholder: "Votre adresse email",
            className: "flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent",
            value: email,
            onChange: t2,
            required: true
        }, void 0, false, {
            fileName: "[project]/app/components/Footer.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[4] = email;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== isSubmitting) {
        t4 = isSubmitting ? "Envoi en cours..." : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/app/components/Footer.tsx",
                    lineNumber: 65,
                    columnNumber: 49
                }, this),
                "S'abonner"
            ]
        }, void 0, true);
        $[6] = isSubmitting;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== isSubmitting || $[9] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            disabled: isSubmitting,
            className: "px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-100 transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
            children: t4
        }, void 0, false, {
            fileName: "[project]/app/components/Footer.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[8] = isSubmitting;
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== t3 || $[12] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row gap-4",
            children: [
                t3,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Footer.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[11] = t3;
        $[12] = t5;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "Footer[<textarea>.onChange]": (e_1)=>setMessage(e_1.target.value)
        })["Footer[<textarea>.onChange]"];
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== message) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
            placeholder: "Votre message ou demande de pri\xE8re...",
            rows: 3,
            className: "w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent resize-none",
            value: message,
            onChange: t7
        }, void 0, false, {
            fileName: "[project]/app/components/Footer.tsx",
            lineNumber: 100,
            columnNumber: 10
        }, this);
        $[15] = message;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] !== t6 || $[18] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gradient-to-r from-blue-600/90 to-purple-600/90 py-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center",
                    children: [
                        t1,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleNewsletterSubmit,
                            className: "space-y-4",
                            children: [
                                t6,
                                t8
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Footer.tsx",
                            lineNumber: 108,
                            columnNumber: 196
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Footer.tsx",
                    lineNumber: 108,
                    columnNumber: 124
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Footer.tsx",
                lineNumber: 108,
                columnNumber: 84
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/Footer.tsx",
            lineNumber: 108,
            columnNumber: 10
        }, this);
        $[17] = t6;
        $[18] = t8;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    let t11;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 mb-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white font-bold text-2xl",
                        children: "EGG"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Footer.tsx",
                        lineNumber: 118,
                        columnNumber: 174
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/Footer.tsx",
                    lineNumber: 118,
                    columnNumber: 57
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold",
                            children: "Église Grande Grâce"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Footer.tsx",
                            lineNumber: 118,
                            columnNumber: 243
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-400",
                            children: "Défalé - CDEJ-RAFISSA"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Footer.tsx",
                            lineNumber: 118,
                            columnNumber: 301
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Footer.tsx",
                    lineNumber: 118,
                    columnNumber: 238
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Footer.tsx",
            lineNumber: 118,
            columnNumber: 11
        }, this);
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-400 mb-6",
            children: "Une communauté de foi qui transforme des vies depuis 2012. Nous croyons en la puissance de la grâce et en la transformation par l'Esprit."
        }, void 0, false, {
            fileName: "[project]/app/components/Footer.tsx",
            lineNumber: 119,
            columnNumber: 11
        }, this);
        $[20] = t10;
        $[21] = t11;
    } else {
        t10 = $[20];
        t11 = $[21];
    }
    let t12;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#",
            className: "w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"], {
                size: 20
            }, void 0, false, {
                fileName: "[project]/app/components/Footer.tsx",
                lineNumber: 128,
                columnNumber: 130
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/Footer.tsx",
            lineNumber: 128,
            columnNumber: 11
        }, this);
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    let t13;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#",
            className: "w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"], {
                size: 20
            }, void 0, false, {
                fileName: "[project]/app/components/Footer.tsx",
                lineNumber: 135,
                columnNumber: 130
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/Footer.tsx",
            lineNumber: 135,
            columnNumber: 11
        }, this);
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    let t14;
    let t15;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t10,
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-4",
                    children: [
                        t12,
                        t13,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            className: "w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__["Youtube"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.tsx",
                                lineNumber: 143,
                                columnNumber: 182
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Footer.tsx",
                            lineNumber: 143,
                            columnNumber: 64
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Footer.tsx",
                    lineNumber: 143,
                    columnNumber: 26
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Footer.tsx",
            lineNumber: 143,
            columnNumber: 11
        }, this);
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-xl font-bold mb-6 pb-3 border-b border-gray-800",
            children: "Liens Rapides"
        }, void 0, false, {
            fileName: "[project]/app/components/Footer.tsx",
            lineNumber: 144,
            columnNumber: 11
        }, this);
        $[24] = t14;
        $[25] = t15;
    } else {
        t14 = $[24];
        t15 = $[25];
    }
    let t16;
    let t17;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/",
                                className: "text-gray-400 hover:text-white transition hover:pl-2 block",
                                children: "Accueil"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.tsx",
                                lineNumber: 154,
                                columnNumber: 51
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Footer.tsx",
                            lineNumber: 154,
                            columnNumber: 47
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/about",
                                className: "text-gray-400 hover:text-white transition hover:pl-2 block",
                                children: "À propos de nous"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.tsx",
                                lineNumber: 154,
                                columnNumber: 154
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Footer.tsx",
                            lineNumber: 154,
                            columnNumber: 150
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/beliefs",
                                className: "text-gray-400 hover:text-white transition hover:pl-2 block",
                                children: "Nos croyances"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.tsx",
                                lineNumber: 154,
                                columnNumber: 271
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Footer.tsx",
                            lineNumber: 154,
                            columnNumber: 267
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/ministries",
                                className: "text-gray-400 hover:text-white transition hover:pl-2 block",
                                children: "Ministères"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.tsx",
                                lineNumber: 154,
                                columnNumber: 387
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Footer.tsx",
                            lineNumber: 154,
                            columnNumber: 383
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/events",
                                className: "text-gray-400 hover:text-white transition hover:pl-2 block",
                                children: "Événements"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.tsx",
                                lineNumber: 154,
                                columnNumber: 503
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Footer.tsx",
                            lineNumber: 154,
                            columnNumber: 499
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/sermons",
                                className: "text-gray-400 hover:text-white transition hover:pl-2 block",
                                children: "Messages"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.tsx",
                                lineNumber: 154,
                                columnNumber: 615
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Footer.tsx",
                            lineNumber: 154,
                            columnNumber: 611
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Footer.tsx",
                    lineNumber: 154,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Footer.tsx",
            lineNumber: 154,
            columnNumber: 11
        }, this);
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-xl font-bold mb-6 pb-3 border-b border-gray-800",
            children: "CDEJ-RAFISSA"
        }, void 0, false, {
            fileName: "[project]/app/components/Footer.tsx",
            lineNumber: 155,
            columnNumber: 11
        }, this);
        $[26] = t16;
        $[27] = t17;
    } else {
        t16 = $[26];
        t17 = $[27];
    }
    let t18;
    let t19;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/cdej/about",
                                className: "text-gray-400 hover:text-white transition hover:pl-2 block",
                                children: "À propos du CDEJ"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.tsx",
                                lineNumber: 165,
                                columnNumber: 51
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Footer.tsx",
                            lineNumber: 165,
                            columnNumber: 47
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/cdej/programs",
                                className: "text-gray-400 hover:text-white transition hover:pl-2 block",
                                children: "Programmes jeunesse"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.tsx",
                                lineNumber: 165,
                                columnNumber: 173
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Footer.tsx",
                            lineNumber: 165,
                            columnNumber: 169
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/cdej/trainings",
                                className: "text-gray-400 hover:text-white transition hover:pl-2 block",
                                children: "Formations"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.tsx",
                                lineNumber: 165,
                                columnNumber: 301
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Footer.tsx",
                            lineNumber: 165,
                            columnNumber: 297
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/cdej/activities",
                                className: "text-gray-400 hover:text-white transition hover:pl-2 block",
                                children: "Activités"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.tsx",
                                lineNumber: 165,
                                columnNumber: 421
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Footer.tsx",
                            lineNumber: 165,
                            columnNumber: 417
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/cdej/leadership",
                                className: "text-gray-400 hover:text-white transition hover:pl-2 block",
                                children: "Leadership"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.tsx",
                                lineNumber: 165,
                                columnNumber: 541
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Footer.tsx",
                            lineNumber: 165,
                            columnNumber: 537
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/cdej/contact",
                                className: "text-gray-400 hover:text-white transition hover:pl-2 block",
                                children: "Contact CDEJ"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.tsx",
                                lineNumber: 165,
                                columnNumber: 662
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Footer.tsx",
                            lineNumber: 165,
                            columnNumber: 658
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Footer.tsx",
                    lineNumber: 165,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Footer.tsx",
            lineNumber: 165,
            columnNumber: 11
        }, this);
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-xl font-bold mb-6 pb-3 border-b border-gray-800",
            children: "Coordonnées"
        }, void 0, false, {
            fileName: "[project]/app/components/Footer.tsx",
            lineNumber: 166,
            columnNumber: 11
        }, this);
        $[28] = t18;
        $[29] = t19;
    } else {
        t18 = $[28];
        t19 = $[29];
    }
    let t20;
    let t21;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
            className: "text-blue-400 mt-1 flex-shrink-0",
            size: 20
        }, void 0, false, {
            fileName: "[project]/app/components/Footer.tsx",
            lineNumber: 176,
            columnNumber: 11
        }, this);
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-medium",
            children: "Adresse"
        }, void 0, false, {
            fileName: "[project]/app/components/Footer.tsx",
            lineNumber: 177,
            columnNumber: 11
        }, this);
        $[30] = t20;
        $[31] = t21;
    } else {
        t20 = $[30];
        t21 = $[31];
    }
    let t22;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-3",
            children: [
                t20,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t21,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 text-sm",
                            children: [
                                "Rue de l'Église, Quartier Défalé",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/app/components/Footer.tsx",
                                    lineNumber: 186,
                                    columnNumber: 135
                                }, this),
                                "Lomé, Togo"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Footer.tsx",
                            lineNumber: 186,
                            columnNumber: 66
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Footer.tsx",
                    lineNumber: 186,
                    columnNumber: 56
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Footer.tsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[32] = t22;
    } else {
        t22 = $[32];
    }
    let t23;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                    className: "text-blue-400",
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/app/components/Footer.tsx",
                    lineNumber: 193,
                    columnNumber: 52
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-medium",
                            children: "Téléphone"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Footer.tsx",
                            lineNumber: 193,
                            columnNumber: 102
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400",
                            children: "+228 90 12 34 56"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Footer.tsx",
                            lineNumber: 193,
                            columnNumber: 142
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Footer.tsx",
                    lineNumber: 193,
                    columnNumber: 97
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Footer.tsx",
            lineNumber: 193,
            columnNumber: 11
        }, this);
        $[33] = t23;
    } else {
        t23 = $[33];
    }
    let t24;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                    className: "text-blue-400",
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/app/components/Footer.tsx",
                    lineNumber: 200,
                    columnNumber: 52
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-medium",
                            children: "Email"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Footer.tsx",
                            lineNumber: 200,
                            columnNumber: 101
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400",
                            children: "contact@eglise-grande-grace.tg"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Footer.tsx",
                            lineNumber: 200,
                            columnNumber: 137
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Footer.tsx",
                    lineNumber: 200,
                    columnNumber: 96
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Footer.tsx",
            lineNumber: 200,
            columnNumber: 11
        }, this);
        $[34] = t24;
    } else {
        t24 = $[34];
    }
    let t25;
    let t26;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
            className: "text-blue-400 mt-1",
            size: 20
        }, void 0, false, {
            fileName: "[project]/app/components/Footer.tsx",
            lineNumber: 208,
            columnNumber: 11
        }, this);
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-medium",
            children: "Heures de culte"
        }, void 0, false, {
            fileName: "[project]/app/components/Footer.tsx",
            lineNumber: 209,
            columnNumber: 11
        }, this);
        $[35] = t25;
        $[36] = t26;
    } else {
        t25 = $[35];
        t26 = $[36];
    }
    let t27;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/app/components/Footer.tsx",
            lineNumber: 218,
            columnNumber: 11
        }, this);
        $[37] = t27;
    } else {
        t27 = $[37];
    }
    let t28;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "py-16",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12",
                    children: [
                        t14,
                        t16,
                        t18,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                t19,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        t22,
                                        t23,
                                        t24,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-3",
                                            children: [
                                                t25,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        t26,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-400 text-sm",
                                                            children: [
                                                                "Dimanche: 9h - 12h",
                                                                t27,
                                                                "Mercredi: 18h - 20h",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/app/components/Footer.tsx",
                                                                    lineNumber: 225,
                                                                    columnNumber: 346
                                                                }, this),
                                                                "Vendredi: 19h - 21h"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/Footer.tsx",
                                                            lineNumber: 225,
                                                            columnNumber: 267
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/Footer.tsx",
                                                    lineNumber: 225,
                                                    columnNumber: 257
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Footer.tsx",
                                            lineNumber: 225,
                                            columnNumber: 212
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Footer.tsx",
                                    lineNumber: 225,
                                    columnNumber: 170
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Footer.tsx",
                            lineNumber: 225,
                            columnNumber: 160
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Footer.tsx",
                    lineNumber: 225,
                    columnNumber: 74
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Footer.tsx",
                lineNumber: 225,
                columnNumber: 34
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/Footer.tsx",
            lineNumber: 225,
            columnNumber: 11
        }, this);
        $[38] = t28;
    } else {
        t28 = $[38];
    }
    let t29;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-500 text-sm",
            children: [
                "© ",
                new Date().getFullYear(),
                " Église de la Grande Grâce de Défalé - CDEJ-RAFISSA. Tous droits réservés."
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Footer.tsx",
            lineNumber: 232,
            columnNumber: 11
        }, this);
        $[39] = t29;
    } else {
        t29 = $[39];
    }
    let t30;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-t border-gray-800 py-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row justify-between items-center gap-4",
                    children: [
                        t29,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-6 text-sm text-gray-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/privacy",
                                    className: "hover:text-white transition",
                                    children: "Confidentialité"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Footer.tsx",
                                    lineNumber: 239,
                                    columnNumber: 231
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/terms",
                                    className: "hover:text-white transition",
                                    children: "Conditions"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Footer.tsx",
                                    lineNumber: 239,
                                    columnNumber: 309
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/sitemap",
                                    className: "hover:text-white transition",
                                    children: "Plan du site"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Footer.tsx",
                                    lineNumber: 239,
                                    columnNumber: 380
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Footer.tsx",
                            lineNumber: 239,
                            columnNumber: 181
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Footer.tsx",
                    lineNumber: 239,
                    columnNumber: 98
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Footer.tsx",
                lineNumber: 239,
                columnNumber: 58
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/Footer.tsx",
            lineNumber: 239,
            columnNumber: 11
        }, this);
        $[40] = t30;
    } else {
        t30 = $[40];
    }
    let t31;
    if ($[41] !== t9) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "bg-gradient-to-b from-gray-900 to-black text-white",
            children: [
                t9,
                t28,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Footer.tsx",
            lineNumber: 246,
            columnNumber: 11
        }, this);
        $[41] = t9;
        $[42] = t31;
    } else {
        t31 = $[42];
    }
    return t31;
}
_s(Footer, "RoY5u3jsPnFugyyt9d5fj6e/Mn8=");
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_31c86f4c._.js.map