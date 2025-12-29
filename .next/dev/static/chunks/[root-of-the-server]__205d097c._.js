(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[next]/internal/font/google/inter_5972bc34.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "inter_5972bc34-module__OU16Qa__className",
});
}),
"[next]/internal/font/google/inter_5972bc34.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_5972bc34$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_5972bc34.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_5972bc34$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Inter', 'Inter Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_5972bc34$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_5972bc34$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/contexts/AuthContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// contexts/AuthContext.tsx
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
    if ($[0] !== "d525561d6a2ae0cdc7d6373d3bec81ba8d0ba9a665a7d11ec01d673307e1d92f") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d525561d6a2ae0cdc7d6373d3bec81ba8d0ba9a665a7d11ec01d673307e1d92f";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
_s(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
// Fonction utilitaire pour gérer le localStorage en toute sécurité
const safeLocalStorage = {
    getItem (key) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            return localStorage.getItem(key);
        } catch (error) {
            console.error(`LocalStorage error (get ${key}):`, error);
            return null;
        }
    },
    setItem (key, value) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            localStorage.setItem(key, value);
        } catch (error) {
            console.error(`LocalStorage error (set ${key}):`, error);
        }
    },
    removeItem (key) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error(`LocalStorage error (remove ${key}):`, error);
        }
    },
    getJSON (key) {
        const item = this.getItem(key);
        if (!item || item === 'undefined') return null;
        try {
            return JSON.parse(item);
        } catch (error) {
            console.error(`LocalStorage error (parse ${key}):`, error);
            this.removeItem(key);
            return null;
        }
    },
    setJSON (key, value) {
        this.setItem(key, JSON.stringify(value));
    }
};
const AuthProvider = ({ children })=>{
    _s1();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            // Vérifier l'authentification au chargement de manière sécurisée
            const storedToken = safeLocalStorage.getItem('access_token');
            const storedUser = safeLocalStorage.getJSON('user');
            const storedProfile = safeLocalStorage.getJSON('profile');
            if (storedToken && storedUser) {
                setToken(storedToken);
                setUser(storedUser);
                if (storedProfile) {
                    setProfile(storedProfile);
                }
            }
            setIsLoading(false);
        }
    }["AuthProvider.useEffect"], []);
    const isAuthenticated = !!user && !!token;
    const isAdmin = profile?.role === 'ADMIN' || profile?.role === 'WEBMASTER';
    const isWebmaster = profile?.role === 'WEBMASTER';
    const canManageContent = [
        'ADMIN',
        'WEBMASTER',
        'PASTOR'
    ].includes(profile?.role || '');
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
                const errorData = await response.json().catch(()=>({}));
                throw new Error(errorData.error || 'Identifiants invalides');
            }
            const data = await response.json();
            // Stocker les données en toute sécurité
            safeLocalStorage.setItem('access_token', data.access);
            safeLocalStorage.setItem('refresh_token', data.refresh);
            safeLocalStorage.setJSON('user', data.user);
            // Note: votre API backend renvoie 'member' et non 'profile'
            if (data.member) {
                safeLocalStorage.setJSON('member', data.member);
                setProfile(data.member);
            }
            setToken(data.access);
            setUser(data.user);
            router.push('/');
        } catch (error) {
            console.error('Login error:', error);
            throw error;
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
                const errorData_0 = await response_0.json().catch(()=>({}));
                throw new Error(errorData_0.error || 'Erreur lors de l\'inscription');
            }
            const result = await response_0.json();
            // Stocker les données en toute sécurité
            safeLocalStorage.setItem('access_token', result.access);
            safeLocalStorage.setItem('refresh_token', result.refresh);
            safeLocalStorage.setJSON('user', result.user);
            // Note: votre API backend renvoie 'member' et non 'profile'
            if (result.member) {
                safeLocalStorage.setJSON('member', result.member);
                setProfile(result.member);
            }
            setToken(result.access);
            setUser(result.user);
            router.push('/');
        } catch (error_0) {
            console.error('Register error:', error_0);
            throw error_0;
        } finally{
            setIsLoading(false);
        }
    };
    const logout = ()=>{
        // Nettoyer le localStorage de manière sécurisée
        safeLocalStorage.removeItem('access_token');
        safeLocalStorage.removeItem('refresh_token');
        safeLocalStorage.removeItem('user');
        safeLocalStorage.removeItem('member');
        safeLocalStorage.removeItem('profile'); // Pour compatibilité
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
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            if (response_1.ok) {
                const data_1 = await response_1.json();
                safeLocalStorage.setJSON('user', data_1.user);
                if (data_1.member) {
                    safeLocalStorage.setJSON('member', data_1.member);
                    setProfile(data_1.member);
                }
                setUser(data_1.user);
            } else if (response_1.status === 401) {
                // Token invalide, déconnecter
                logout();
            }
        } catch (error_1) {
            console.error('Refresh user error:', error_1);
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
            login,
            register,
            logout,
            refreshUser
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/contexts/AuthContext.tsx",
        lineNumber: 240,
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
"[project]/app/components/UserMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UserMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/AuthContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function UserMenu() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(40);
    if ($[0] !== "862438a0398985866b0a00bccb028a28dd98ee13d33f8430649141604d02f4e0") {
        for(let $i = 0; $i < 40; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "862438a0398985866b0a00bccb028a28dd98ee13d33f8430649141604d02f4e0";
    }
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { isAuthenticated, user, profile, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    if (!isAuthenticated) {
        let t0;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/auth/login",
                        className: "bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition",
                        children: "Connexion"
                    }, void 0, false, {
                        fileName: "[project]/app/components/UserMenu.tsx",
                        lineNumber: 25,
                        columnNumber: 57
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/auth/register",
                        className: "bg-white text-blue-700 hover:bg-blue-100 px-4 py-2 rounded-lg font-semibold transition",
                        children: "Inscription"
                    }, void 0, false, {
                        fileName: "[project]/app/components/UserMenu.tsx",
                        lineNumber: 25,
                        columnNumber: 172
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/UserMenu.tsx",
                lineNumber: 25,
                columnNumber: 12
            }, this);
            $[1] = t0;
        } else {
            t0 = $[1];
        }
        return t0;
    }
    let t0;
    if ($[2] !== user) {
        t0 = ({
            "UserMenu[getInitials]": ()=>{
                if (!user) {
                    return "?";
                }
                return `${user.first_name[0]}${user.last_name[0]}`.toUpperCase();
            }
        })["UserMenu[getInitials]"];
        $[2] = user;
        $[3] = t0;
    } else {
        t0 = $[3];
    }
    const getInitials = t0;
    let t1;
    if ($[4] !== profile) {
        t1 = ({
            "UserMenu[getRoleLabel]": ()=>{
                if (!profile) {
                    return "Visiteur";
                }
                const roles = {
                    "VISITOR": "Visiteur",
                    "MEMBER": "Membre",
                    "DEACON": "Diacre",
                    "ELDER": "Ancien",
                    "PASTOR": "Pasteur",
                    "ADMIN": "Admin",
                    "WEBMASTER": "Webmaster"
                };
                return roles[profile.role] || "Visiteur";
            }
        })["UserMenu[getRoleLabel]"];
        $[4] = profile;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    const getRoleLabel = t1;
    let t2;
    if ($[6] !== isOpen) {
        t2 = ({
            "UserMenu[<button>.onClick]": ()=>setIsOpen(!isOpen)
        })["UserMenu[<button>.onClick]"];
        $[6] = isOpen;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    const t3 = isOpen ? "true" : "false";
    let t4;
    if ($[8] !== getInitials) {
        t4 = getInitials();
        $[8] = getInitials;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-10 h-10 bg-white text-blue-700 rounded-full flex items-center justify-center font-bold",
            children: t4
        }, void 0, false, {
            fileName: "[project]/app/components/UserMenu.tsx",
            lineNumber: 94,
            columnNumber: 10
        }, this);
        $[10] = t4;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    const t6 = user?.first_name;
    const t7 = user?.last_name;
    let t8;
    if ($[12] !== t6 || $[13] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "font-semibold",
            children: [
                t6,
                " ",
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/UserMenu.tsx",
            lineNumber: 104,
            columnNumber: 10
        }, this);
        $[12] = t6;
        $[13] = t7;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== getRoleLabel) {
        t9 = getRoleLabel();
        $[15] = getRoleLabel;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm text-blue-200",
            children: t9
        }, void 0, false, {
            fileName: "[project]/app/components/UserMenu.tsx",
            lineNumber: 121,
            columnNumber: 11
        }, this);
        $[17] = t9;
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] !== t10 || $[20] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-left hidden md:block",
            children: [
                t8,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/UserMenu.tsx",
            lineNumber: 129,
            columnNumber: 11
        }, this);
        $[19] = t10;
        $[20] = t8;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    const t12 = `w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`;
    let t13;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M19 9l-7 7-7-7"
        }, void 0, false, {
            fileName: "[project]/app/components/UserMenu.tsx",
            lineNumber: 139,
            columnNumber: 11
        }, this);
        $[22] = t13;
    } else {
        t13 = $[22];
    }
    let t14;
    if ($[23] !== t12) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: t12,
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: t13
        }, void 0, false, {
            fileName: "[project]/app/components/UserMenu.tsx",
            lineNumber: 146,
            columnNumber: 11
        }, this);
        $[23] = t12;
        $[24] = t14;
    } else {
        t14 = $[24];
    }
    let t15;
    if ($[25] !== t11 || $[26] !== t14 || $[27] !== t2 || $[28] !== t3 || $[29] !== t5) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t2,
            className: "flex items-center space-x-3 hover:bg-white/10 px-4 py-2 rounded-lg transition",
            "aria-label": "Menu utilisateur",
            "aria-expanded": t3,
            children: [
                t5,
                t11,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/UserMenu.tsx",
            lineNumber: 154,
            columnNumber: 11
        }, this);
        $[25] = t11;
        $[26] = t14;
        $[27] = t2;
        $[28] = t3;
        $[29] = t5;
        $[30] = t15;
    } else {
        t15 = $[30];
    }
    let t16;
    if ($[31] !== getRoleLabel || $[32] !== isOpen || $[33] !== logout || $[34] !== user?.first_name || $[35] !== user?.last_name) {
        t16 = isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute right-0 mt-2 w-64 bg-white text-gray-800 rounded-xl shadow-2xl overflow-hidden z-50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-bold",
                            children: [
                                user?.first_name,
                                " ",
                                user?.last_name
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/UserMenu.tsx",
                            lineNumber: 166,
                            columnNumber: 208
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm opacity-90",
                            children: getRoleLabel()
                        }, void 0, false, {
                            fileName: "[project]/app/components/UserMenu.tsx",
                            lineNumber: 166,
                            columnNumber: 277
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/UserMenu.tsx",
                    lineNumber: 166,
                    columnNumber: 131
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/profile",
                            className: "flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition",
                            onClick: {
                                "UserMenu[<Link>.onClick]": ()=>setIsOpen(false)
                            }["UserMenu[<Link>.onClick]"],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/UserMenu.tsx",
                                        lineNumber: 168,
                                        columnNumber: 119
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/UserMenu.tsx",
                                    lineNumber: 168,
                                    columnNumber: 40
                                }, this),
                                "Mon Profil"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/UserMenu.tsx",
                            lineNumber: 166,
                            columnNumber: 363
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/profile/edit",
                            className: "flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition",
                            onClick: {
                                "UserMenu[<Link>.onClick]": ()=>setIsOpen(false)
                            }["UserMenu[<Link>.onClick]"],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/UserMenu.tsx",
                                        lineNumber: 170,
                                        columnNumber: 119
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/UserMenu.tsx",
                                    lineNumber: 170,
                                    columnNumber: 40
                                }, this),
                                "Modifier Profil"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/UserMenu.tsx",
                            lineNumber: 168,
                            columnNumber: 283
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/profile/settings",
                            className: "flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition",
                            onClick: {
                                "UserMenu[<Link>.onClick]": ()=>setIsOpen(false)
                            }["UserMenu[<Link>.onClick]"],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/UserMenu.tsx",
                                            lineNumber: 172,
                                            columnNumber: 119
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/UserMenu.tsx",
                                            lineNumber: 172,
                                            columnNumber: 676
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/UserMenu.tsx",
                                    lineNumber: 172,
                                    columnNumber: 40
                                }, this),
                                "Paramètres"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/UserMenu.tsx",
                            lineNumber: 170,
                            columnNumber: 339
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t border-gray-200 my-2"
                        }, void 0, false, {
                            fileName: "[project]/app/components/UserMenu.tsx",
                            lineNumber: 172,
                            columnNumber: 805
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: {
                                "UserMenu[<button>.onClick]": ()=>{
                                    logout();
                                    setIsOpen(false);
                                }
                            }["UserMenu[<button>.onClick]"],
                            className: "w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 transition text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/UserMenu.tsx",
                                        lineNumber: 177,
                                        columnNumber: 224
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/UserMenu.tsx",
                                    lineNumber: 177,
                                    columnNumber: 145
                                }, this),
                                "Déconnexion"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/UserMenu.tsx",
                            lineNumber: 172,
                            columnNumber: 854
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/UserMenu.tsx",
                    lineNumber: 166,
                    columnNumber: 341
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/UserMenu.tsx",
            lineNumber: 166,
            columnNumber: 21
        }, this);
        $[31] = getRoleLabel;
        $[32] = isOpen;
        $[33] = logout;
        $[34] = user?.first_name;
        $[35] = user?.last_name;
        $[36] = t16;
    } else {
        t16 = $[36];
    }
    let t17;
    if ($[37] !== t15 || $[38] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/UserMenu.tsx",
            lineNumber: 189,
            columnNumber: 11
        }, this);
        $[37] = t15;
        $[38] = t16;
        $[39] = t17;
    } else {
        t17 = $[39];
    }
    return t17;
}
_s(UserMenu, "hcBuUWRYL9N0M2xqP5dT9P79Jqs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = UserMenu;
var _c;
__turbopack_context__.k.register(_c, "UserMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$UserMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/UserMenu.tsx [app-client] (ecmascript)");
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(60);
    if ($[0] !== "69ead2a0c249e51312053c9596d60804a60c9aebeea29efd0af4ed7cee7d90bb") {
        for(let $i = 0; $i < 60; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "69ead2a0c249e51312053c9596d60804a60c9aebeea29efd0af4ed7cee7d90bb";
    }
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCDEJOpen, setIsCDEJOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAdminMenuOpen, setIsAdminMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { isAuthenticated, isAdmin } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    let t0;
    if ($[1] !== pathname) {
        t0 = ({
            "Navbar[isActive]": (path)=>pathname === path
        })["Navbar[isActive]"];
        $[1] = pathname;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const isActive = t0;
    let t1;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            {
                name: "Programmes Jeunesse",
                href: "/cdej/programmes"
            },
            {
                name: "Formations",
                href: "/cdej/formations"
            },
            {
                name: "Activit\xE9s Sociales",
                href: "/cdej/activites"
            },
            {
                name: "\xC9v\xE9nements Sp\xE9ciaux",
                href: "/cdej/evenements"
            },
            {
                name: "Gallerie Photos",
                href: "/cdej/gallerie"
            },
            {
                name: "Contact CDEJ",
                href: "/cdej/contact"
            }
        ];
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const cdejActivities = t1;
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [
            {
                name: "Dashboard Admin",
                href: "/admin/dashboard",
                icon: "\uD83D\uDCCA"
            },
            {
                name: "G\xE9rer les Membres",
                href: "/admin/members",
                icon: "\uD83D\uDC65"
            },
            {
                name: "Cr\xE9er \xC9v\xE9nement",
                href: "/admin/events/create",
                icon: "\uD83D\uDCC5"
            },
            {
                name: "G\xE9rer Sermons",
                href: "/admin/sermons",
                icon: "\uD83D\uDCD6"
            },
            {
                name: "Publications",
                href: "/admin/posts",
                icon: "\uD83D\uDCDD"
            },
            {
                name: "M\xE9dias",
                href: "/admin/media",
                icon: "\uD83D\uDDBC\uFE0F"
            },
            {
                name: "Param\xE8tres",
                href: "/admin/settings",
                icon: "\u2699\uFE0F"
            }
        ];
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const adminMenuItems = t2;
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden md:block w-12 h-12 bg-white rounded-full flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-blue-900 font-bold text-xl",
                children: "EGG"
            }, void 0, false, {
                fileName: "[project]/app/components/Navbar.tsx",
                lineNumber: 100,
                columnNumber: 108
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/Navbar.tsx",
            lineNumber: 100,
            columnNumber: 10
        }, this);
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center space-x-4",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-2xl font-bold hover:text-blue-200 transition tracking-tight",
                            children: "Église de la Grande Grâce"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Navbar.tsx",
                            lineNumber: 107,
                            columnNumber: 100
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-blue-200",
                            children: "Défalé - CDEJ-RAFISSA"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Navbar.tsx",
                            lineNumber: 107,
                            columnNumber: 215
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Navbar.tsx",
                    lineNumber: 107,
                    columnNumber: 59
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Navbar.tsx",
            lineNumber: 107,
            columnNumber: 10
        }, this);
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    const t5 = `px-4 py-3 rounded-lg transition-all ${isActive("/") ? "bg-white/20 font-bold" : "hover:bg-white/10"}`;
    let t6;
    if ($[7] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            className: t5,
            children: "Accueil"
        }, void 0, false, {
            fileName: "[project]/app/components/Navbar.tsx",
            lineNumber: 115,
            columnNumber: 10
        }, this);
        $[7] = t5;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== isActive || $[10] !== isAuthenticated) {
        t7 = isAuthenticated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/members",
            className: `px-4 py-3 rounded-lg transition-all ${isActive("/members") ? "bg-white/20 font-bold" : "hover:bg-white/10"}`,
            children: "Membres"
        }, void 0, false, {
            fileName: "[project]/app/components/Navbar.tsx",
            lineNumber: 123,
            columnNumber: 29
        }, this);
        $[9] = isActive;
        $[10] = isAuthenticated;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    const t8 = `px-4 py-3 rounded-lg transition-all ${isActive("/events") ? "bg-white/20 font-bold" : "hover:bg-white/10"}`;
    let t9;
    if ($[12] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/events",
            className: t8,
            children: "Événements"
        }, void 0, false, {
            fileName: "[project]/app/components/Navbar.tsx",
            lineNumber: 133,
            columnNumber: 10
        }, this);
        $[12] = t8;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    const t10 = `px-4 py-3 rounded-lg transition-all flex items-center gap-2 ${isCDEJOpen || pathname.includes("/cdej") ? "bg-white/20 font-bold" : "hover:bg-white/10"}`;
    let t11;
    if ($[14] !== isCDEJOpen) {
        t11 = ({
            "Navbar[<button>.onClick]": ()=>setIsCDEJOpen(!isCDEJOpen)
        })["Navbar[<button>.onClick]"];
        $[14] = isCDEJOpen;
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    const t12 = isCDEJOpen ? "true" : "false";
    const t13 = `w-4 h-4 transition-transform ${isCDEJOpen ? "rotate-180" : ""}`;
    let t14;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M19 9l-7 7-7-7"
        }, void 0, false, {
            fileName: "[project]/app/components/Navbar.tsx",
            lineNumber: 154,
            columnNumber: 11
        }, this);
        $[16] = t14;
    } else {
        t14 = $[16];
    }
    let t15;
    if ($[17] !== t13) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: t13,
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: t14
        }, void 0, false, {
            fileName: "[project]/app/components/Navbar.tsx",
            lineNumber: 161,
            columnNumber: 11
        }, this);
        $[17] = t13;
        $[18] = t15;
    } else {
        t15 = $[18];
    }
    let t16;
    if ($[19] !== t10 || $[20] !== t11 || $[21] !== t12 || $[22] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: t10,
            onClick: t11,
            "aria-label": "Menu CDEJ-RAFISSA",
            "aria-expanded": t12,
            children: [
                "CDEJ-RAFISSA",
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Navbar.tsx",
            lineNumber: 169,
            columnNumber: 11
        }, this);
        $[19] = t10;
        $[20] = t11;
        $[21] = t12;
        $[22] = t15;
        $[23] = t16;
    } else {
        t16 = $[23];
    }
    let t17;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute left-0 mt-2 w-64 bg-white text-gray-800 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold",
                                children: "Centre des Jeunes RAFISSA"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 180,
                                columnNumber: 359
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm opacity-90",
                                children: "Activités et Programmes"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 180,
                                columnNumber: 415
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 180,
                        columnNumber: 263
                    }, this),
                    cdejActivities.map({
                        "Navbar[cdejActivities.map()]": (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: "block px-4 py-3 hover:bg-blue-50 transition border-b border-gray-100 last:border-b-0",
                                onClick: {
                                    "Navbar[cdejActivities.map() > <Link>.onClick]": ()=>setIsCDEJOpen(false)
                                }["Navbar[cdejActivities.map() > <Link>.onClick]"],
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 bg-blue-500 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Navbar.tsx",
                                            lineNumber: 183,
                                            columnNumber: 104
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Navbar.tsx",
                                            lineNumber: 183,
                                            columnNumber: 156
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Navbar.tsx",
                                    lineNumber: 183,
                                    columnNumber: 63
                                }, this)
                            }, item.name, false, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 181,
                                columnNumber: 51
                            }, this)
                    }["Navbar[cdejActivities.map()]"])
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Navbar.tsx",
                lineNumber: 180,
                columnNumber: 241
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/Navbar.tsx",
            lineNumber: 180,
            columnNumber: 11
        }, this);
        $[24] = t17;
    } else {
        t17 = $[24];
    }
    let t18;
    if ($[25] !== t16) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative group",
            children: [
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Navbar.tsx",
            lineNumber: 191,
            columnNumber: 11
        }, this);
        $[25] = t16;
        $[26] = t18;
    } else {
        t18 = $[26];
    }
    const t19 = `px-4 py-3 rounded-lg transition-all ${isActive("/sermons") ? "bg-white/20 font-bold" : "hover:bg-white/10"}`;
    let t20;
    if ($[27] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/sermons",
            className: t19,
            children: "Sermons"
        }, void 0, false, {
            fileName: "[project]/app/components/Navbar.tsx",
            lineNumber: 200,
            columnNumber: 11
        }, this);
        $[27] = t19;
        $[28] = t20;
    } else {
        t20 = $[28];
    }
    let t21;
    if ($[29] !== isAdmin || $[30] !== isAdminMenuOpen) {
        t21 = isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative group",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: `px-4 py-3 rounded-lg transition-all flex items-center gap-2 ${isAdminMenuOpen ? "bg-white/20 font-bold" : "hover:bg-white/10"}`,
                    onClick: {
                        "Navbar[<button>.onClick]": ()=>setIsAdminMenuOpen(!isAdminMenuOpen)
                    }["Navbar[<button>.onClick]"],
                    "aria-label": "Menu Administration",
                    "aria-expanded": isAdminMenuOpen ? "true" : "false",
                    children: [
                        "Administration",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: `w-4 h-4 transition-transform ${isAdminMenuOpen ? "rotate-180" : ""}`,
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M19 9l-7 7-7-7"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 210,
                                columnNumber: 277
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Navbar.tsx",
                            lineNumber: 210,
                            columnNumber: 136
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Navbar.tsx",
                    lineNumber: 208,
                    columnNumber: 54
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute left-0 mt-2 w-64 bg-white text-gray-800 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-t-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold",
                                        children: "Administration"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 210,
                                        columnNumber: 730
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm opacity-90",
                                        children: "Gestion du site"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 210,
                                        columnNumber: 775
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 210,
                                columnNumber: 632
                            }, this),
                            adminMenuItems.map({
                                "Navbar[adminMenuItems.map()]": (item_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: item_0.href,
                                        className: "block px-4 py-3 hover:bg-yellow-50 transition border-b border-gray-100 last:border-b-0",
                                        onClick: {
                                            "Navbar[adminMenuItems.map() > <Link>.onClick]": ()=>setIsAdminMenuOpen(false)
                                        }["Navbar[adminMenuItems.map() > <Link>.onClick]"],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-lg",
                                                    children: item_0.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 106
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: item_0.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 152
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Navbar.tsx",
                                            lineNumber: 213,
                                            columnNumber: 65
                                        }, this)
                                    }, item_0.name, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 211,
                                        columnNumber: 55
                                    }, this)
                            }["Navbar[adminMenuItems.map()]"])
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 210,
                        columnNumber: 610
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/Navbar.tsx",
                    lineNumber: 210,
                    columnNumber: 380
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Navbar.tsx",
            lineNumber: 208,
            columnNumber: 22
        }, this);
        $[29] = isAdmin;
        $[30] = isAdminMenuOpen;
        $[31] = t21;
    } else {
        t21 = $[31];
    }
    let t22;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$UserMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/app/components/Navbar.tsx",
            lineNumber: 223,
            columnNumber: 11
        }, this);
        $[32] = t22;
    } else {
        t22 = $[32];
    }
    let t23;
    if ($[33] !== t18 || $[34] !== t20 || $[35] !== t21 || $[36] !== t6 || $[37] !== t7 || $[38] !== t9) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden lg:flex items-center space-x-1",
            children: [
                t6,
                t7,
                t9,
                t18,
                t20,
                t21,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Navbar.tsx",
            lineNumber: 230,
            columnNumber: 11
        }, this);
        $[33] = t18;
        $[34] = t20;
        $[35] = t21;
        $[36] = t6;
        $[37] = t7;
        $[38] = t9;
        $[39] = t23;
    } else {
        t23 = $[39];
    }
    let t24;
    if ($[40] !== isMenuOpen) {
        t24 = ({
            "Navbar[<button>.onClick]": ()=>setIsMenuOpen(!isMenuOpen)
        })["Navbar[<button>.onClick]"];
        $[40] = isMenuOpen;
        $[41] = t24;
    } else {
        t24 = $[41];
    }
    let t25;
    if ($[42] !== isMenuOpen) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-8 h-8",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M6 18L18 6M6 6l12 12"
            }, void 0, false, {
                fileName: "[project]/app/components/Navbar.tsx",
                lineNumber: 253,
                columnNumber: 104
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M4 6h16M4 12h16M4 18h16"
            }, void 0, false, {
                fileName: "[project]/app/components/Navbar.tsx",
                lineNumber: 253,
                columnNumber: 201
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/Navbar.tsx",
            lineNumber: 253,
            columnNumber: 11
        }, this);
        $[42] = isMenuOpen;
        $[43] = t25;
    } else {
        t25 = $[43];
    }
    let t26;
    if ($[44] !== t24 || $[45] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            "aria-label": "Menu mobile",
            className: "lg:hidden text-white p-2",
            onClick: t24,
            children: t25
        }, void 0, false, {
            fileName: "[project]/app/components/Navbar.tsx",
            lineNumber: 261,
            columnNumber: 11
        }, this);
        $[44] = t24;
        $[45] = t25;
        $[46] = t26;
    } else {
        t26 = $[46];
    }
    let t27;
    if ($[47] !== t23 || $[48] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center h-20",
            children: [
                t4,
                t23,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Navbar.tsx",
            lineNumber: 270,
            columnNumber: 11
        }, this);
        $[47] = t23;
        $[48] = t26;
        $[49] = t27;
    } else {
        t27 = $[49];
    }
    let t28;
    if ($[50] !== isActive || $[51] !== isAdmin || $[52] !== isAdminMenuOpen || $[53] !== isAuthenticated || $[54] !== isCDEJOpen || $[55] !== isMenuOpen) {
        t28 = isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:hidden pb-6 bg-gradient-to-b from-blue-900/90 to-purple-800/90 backdrop-blur-lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col space-y-1 pt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: `px-4 py-4 rounded-lg transition ${isActive("/") ? "bg-white/20 font-bold" : "hover:bg-white/10"}`,
                        onClick: {
                            "Navbar[<Link>.onClick]": ()=>setIsMenuOpen(false)
                        }["Navbar[<Link>.onClick]"],
                        children: "Accueil"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 279,
                        columnNumber: 171
                    }, this),
                    isAuthenticated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/members",
                        className: `px-4 py-4 rounded-lg transition ${isActive("/members") ? "bg-white/20 font-bold" : "hover:bg-white/10"}`,
                        onClick: {
                            "Navbar[<Link>.onClick]": ()=>setIsMenuOpen(false)
                        }["Navbar[<Link>.onClick]"],
                        children: "Membres"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 281,
                        columnNumber: 72
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/events",
                        className: `px-4 py-4 rounded-lg transition ${isActive("/events") ? "bg-white/20 font-bold" : "hover:bg-white/10"}`,
                        onClick: {
                            "Navbar[<Link>.onClick]": ()=>setIsMenuOpen(false)
                        }["Navbar[<Link>.onClick]"],
                        children: "Événements"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 283,
                        columnNumber: 53
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: `w-full text-left rounded-lg transition flex items-center justify-between ${isCDEJOpen ? "bg-white/20 font-bold" : "hover:bg-white/10"}`,
                                onClick: {
                                    "Navbar[<button>.onClick]": ()=>setIsCDEJOpen(!isCDEJOpen)
                                }["Navbar[<button>.onClick]"],
                                "aria-label": "Menu CDEJ-RAFISSA",
                                "aria-expanded": isCDEJOpen ? "true" : "false",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2 py-2",
                                        children: "CDEJ-RAFISSA"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 287,
                                        columnNumber: 119
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: `w-5 h-5 transition-transform ${isCDEJOpen ? "rotate-180" : ""}`,
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M19 9l-7 7-7-7"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Navbar.tsx",
                                            lineNumber: 287,
                                            columnNumber: 302
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 287,
                                        columnNumber: 166
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 285,
                                columnNumber: 82
                            }, this),
                            isCDEJOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 ml-4 bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden",
                                children: cdejActivities.map({
                                    "Navbar[cdejActivities.map()]": (item_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: item_1.href,
                                            className: "block px-4 py-3 hover:bg-white/20 transition border-b border-white/10 last:border-b-0",
                                            onClick: {
                                                "Navbar[cdejActivities.map() > <Link>.onClick]": ()=>{
                                                    setIsCDEJOpen(false);
                                                    setIsMenuOpen(false);
                                                }
                                            }["Navbar[cdejActivities.map() > <Link>.onClick]"],
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-2 h-2 bg-blue-300 rounded-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Navbar.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 108
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: item_1.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Navbar.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 160
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/Navbar.tsx",
                                                lineNumber: 293,
                                                columnNumber: 67
                                            }, this)
                                        }, item_1.name, false, {
                                            fileName: "[project]/app/components/Navbar.tsx",
                                            lineNumber: 288,
                                            columnNumber: 57
                                        }, this)
                                }["Navbar[cdejActivities.map()]"])
                            }, void 0, false, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 287,
                                columnNumber: 420
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 285,
                        columnNumber: 55
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/sermons",
                        className: `px-4 py-4 rounded-lg transition ${isActive("/sermons") ? "bg-white/20 font-bold" : "hover:bg-white/10"}`,
                        onClick: {
                            "Navbar[<Link>.onClick]": ()=>setIsMenuOpen(false)
                        }["Navbar[<Link>.onClick]"],
                        children: "Sermons"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 294,
                        columnNumber: 61
                    }, this),
                    isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: `w-full text-left rounded-lg transition flex items-center justify-between ${isAdminMenuOpen ? "bg-white/20 font-bold" : "hover:bg-white/10"}`,
                                onClick: {
                                    "Navbar[<button>.onClick]": ()=>setIsAdminMenuOpen(!isAdminMenuOpen)
                                }["Navbar[<button>.onClick]"],
                                "aria-label": "Menu Administration",
                                "aria-expanded": isAdminMenuOpen ? "true" : "false",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2 py-2",
                                        children: "Administration"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 298,
                                        columnNumber: 126
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: `w-5 h-5 transition-transform ${isAdminMenuOpen ? "rotate-180" : ""}`,
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M19 9l-7 7-7-7"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Navbar.tsx",
                                            lineNumber: 298,
                                            columnNumber: 316
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 298,
                                        columnNumber: 175
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 296,
                                columnNumber: 91
                            }, this),
                            isAdminMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 ml-4 bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden",
                                children: adminMenuItems.slice(0, 3).map({
                                    "Navbar[(anonymous)()]": (item_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: item_2.href,
                                            className: "block px-4 py-3 hover:bg-white/20 transition border-b border-white/10 last:border-b-0",
                                            onClick: {
                                                "Navbar[(anonymous)() > <Link>.onClick]": ()=>{
                                                    setIsAdminMenuOpen(false);
                                                    setIsMenuOpen(false);
                                                }
                                            }["Navbar[(anonymous)() > <Link>.onClick]"],
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-lg",
                                                        children: item_2.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Navbar.tsx",
                                                        lineNumber: 304,
                                                        columnNumber: 101
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: item_2.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Navbar.tsx",
                                                        lineNumber: 304,
                                                        columnNumber: 147
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/Navbar.tsx",
                                                lineNumber: 304,
                                                columnNumber: 60
                                            }, this)
                                        }, item_2.name, false, {
                                            fileName: "[project]/app/components/Navbar.tsx",
                                            lineNumber: 299,
                                            columnNumber: 50
                                        }, this)
                                }["Navbar[(anonymous)()]"])
                            }, void 0, false, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 298,
                                columnNumber: 439
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 296,
                        columnNumber: 64
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Navbar.tsx",
                lineNumber: 279,
                columnNumber: 125
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/Navbar.tsx",
            lineNumber: 279,
            columnNumber: 25
        }, this);
        $[50] = isActive;
        $[51] = isAdmin;
        $[52] = isAdminMenuOpen;
        $[53] = isAuthenticated;
        $[54] = isCDEJOpen;
        $[55] = isMenuOpen;
        $[56] = t28;
    } else {
        t28 = $[56];
    }
    let t29;
    if ($[57] !== t27 || $[58] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "bg-gradient-to-r from-blue-900 to-purple-800 text-white shadow-2xl sticky top-0 z-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-8xl mx-auto px-4",
                children: [
                    t27,
                    t28
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Navbar.tsx",
                lineNumber: 318,
                columnNumber: 113
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/Navbar.tsx",
            lineNumber: 318,
            columnNumber: 11
        }, this);
        $[57] = t27;
        $[58] = t28;
        $[59] = t29;
    } else {
        t29 = $[59];
    }
    return t29;
}
_s(Navbar, "jGZcJmYFoax18z15lwDN0FsCKIw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/layout.tsx - VERSION ULTRA SIMPLE
__turbopack_context__.s([
    "default",
    ()=>RootLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_5972bc34$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_5972bc34.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/AuthContext.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
function RootLayout(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "f351cf0ac87ab2618c8986567b33bc5c640d7780e3ef9d06d2238b20c1899b3e") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f351cf0ac87ab2618c8986567b33bc5c640d7780e3ef9d06d2238b20c1899b3e";
    }
    const { children } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("head", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                    children: "Église de la Grande Grâce de Défalé - CDEJ-RAFISSA"
                }, void 0, false, {
                    fileName: "[project]/app/layout.tsx",
                    lineNumber: 25,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                    name: "description",
                    content: "Site officiel de l'\xC9glise de la Grande Gr\xE2ce de D\xE9fal\xE9 et du Centre des Jeunes RAFISSA"
                }, void 0, false, {
                    fileName: "[project]/app/layout.tsx",
                    lineNumber: 25,
                    columnNumber: 81
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                    charSet: "UTF-8"
                }, void 0, false, {
                    fileName: "[project]/app/layout.tsx",
                    lineNumber: 25,
                    columnNumber: 219
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1"
                }, void 0, false, {
                    fileName: "[project]/app/layout.tsx",
                    lineNumber: 25,
                    columnNumber: 243
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/layout.tsx",
            lineNumber: 25,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/app/layout.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== children) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen",
            children: children
        }, void 0, false, {
            fileName: "[project]/app/layout.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[3] = children;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-2xl font-bold mb-4",
                    children: "EGG Défalé"
                }, void 0, false, {
                    fileName: "[project]/app/layout.tsx",
                    lineNumber: 48,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400",
                    children: "Une communauté de foi qui transforme des vies depuis 2012."
                }, void 0, false, {
                    fileName: "[project]/app/layout.tsx",
                    lineNumber: 48,
                    columnNumber: 70
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/layout.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-lg font-semibold mb-4",
            children: "Liens rapides"
        }, void 0, false, {
            fileName: "[project]/app/layout.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[5] = t4;
        $[6] = t5;
    } else {
        t4 = $[5];
        t5 = $[6];
    }
    let t6;
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/",
                                className: "text-gray-400 hover:text-white transition",
                                children: "Accueil"
                            }, void 0, false, {
                                fileName: "[project]/app/layout.tsx",
                                lineNumber: 59,
                                columnNumber: 49
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/layout.tsx",
                            lineNumber: 59,
                            columnNumber: 45
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/members",
                                className: "text-gray-400 hover:text-white transition",
                                children: "Membres"
                            }, void 0, false, {
                                fileName: "[project]/app/layout.tsx",
                                lineNumber: 59,
                                columnNumber: 135
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/layout.tsx",
                            lineNumber: 59,
                            columnNumber: 131
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/events",
                                className: "text-gray-400 hover:text-white transition",
                                children: "Événements"
                            }, void 0, false, {
                                fileName: "[project]/app/layout.tsx",
                                lineNumber: 59,
                                columnNumber: 228
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/layout.tsx",
                            lineNumber: 59,
                            columnNumber: 224
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/layout.tsx",
                    lineNumber: 59,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/layout.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-lg font-semibold mb-4",
            children: "CDEJ-RAFISSA"
        }, void 0, false, {
            fileName: "[project]/app/layout.tsx",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[7] = t6;
        $[8] = t7;
    } else {
        t6 = $[7];
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-4 gap-8",
            children: [
                t4,
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t7,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/cdej/programmes",
                                        className: "text-gray-400 hover:text-white transition",
                                        children: "Programmes"
                                    }, void 0, false, {
                                        fileName: "[project]/app/layout.tsx",
                                        lineNumber: 69,
                                        columnNumber: 112
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/layout.tsx",
                                    lineNumber: 69,
                                    columnNumber: 108
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/cdej/formations",
                                        className: "text-gray-400 hover:text-white transition",
                                        children: "Formations"
                                    }, void 0, false, {
                                        fileName: "[project]/app/layout.tsx",
                                        lineNumber: 69,
                                        columnNumber: 216
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/layout.tsx",
                                    lineNumber: 69,
                                    columnNumber: 212
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/cdej/activites",
                                        className: "text-gray-400 hover:text-white transition",
                                        children: "Activités"
                                    }, void 0, false, {
                                        fileName: "[project]/app/layout.tsx",
                                        lineNumber: 69,
                                        columnNumber: 320
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/layout.tsx",
                                    lineNumber: 69,
                                    columnNumber: 316
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/layout.tsx",
                            lineNumber: 69,
                            columnNumber: 82
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/layout.tsx",
                    lineNumber: 69,
                    columnNumber: 73
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-lg font-semibold mb-4",
                            children: "Contact"
                        }, void 0, false, {
                            fileName: "[project]/app/layout.tsx",
                            lineNumber: 69,
                            columnNumber: 434
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400",
                            children: "Rue de l'Église, Défalé"
                        }, void 0, false, {
                            fileName: "[project]/app/layout.tsx",
                            lineNumber: 69,
                            columnNumber: 489
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400",
                            children: "contact@eglise-grande-grace.tg"
                        }, void 0, false, {
                            fileName: "[project]/app/layout.tsx",
                            lineNumber: 69,
                            columnNumber: 545
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/layout.tsx",
                    lineNumber: 69,
                    columnNumber: 429
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/layout.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "bg-gradient-to-r from-gray-900 to-black text-white py-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4",
                children: [
                    t8,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-gray-800 mt-8 pt-8 text-center text-gray-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "© ",
                                    new Date().getFullYear(),
                                    " Église de la Grande Grâce de Défalé - CDEJ-RAFISSA. Tous droits réservés."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/layout.tsx",
                                lineNumber: 76,
                                columnNumber: 209
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-sm",
                                children: "Développé avec ❤️ par notre équipe technique"
                            }, void 0, false, {
                                fileName: "[project]/app/layout.tsx",
                                lineNumber: 76,
                                columnNumber: 318
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/layout.tsx",
                        lineNumber: 76,
                        columnNumber: 131
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/layout.tsx",
                lineNumber: 76,
                columnNumber: 87
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/layout.tsx",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] !== t3) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
            lang: "fr",
            className: "scroll-smooth",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                    className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_5972bc34$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className} bg-gray-50`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthProvider"], {
                        children: [
                            t2,
                            t3,
                            t9
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/layout.tsx",
                        lineNumber: 83,
                        columnNumber: 107
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/layout.tsx",
                    lineNumber: 83,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/layout.tsx",
            lineNumber: 83,
            columnNumber: 11
        }, this);
        $[11] = t3;
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    return t10;
}
_c = RootLayout;
var _c;
__turbopack_context__.k.register(_c, "RootLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__205d097c._.js.map