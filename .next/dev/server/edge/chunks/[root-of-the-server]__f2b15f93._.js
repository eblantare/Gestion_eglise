(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__f2b15f93._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// frontend/middleware.ts - VERSION CORRIGÉE
__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
;
function middleware(request) {
    const token = request.cookies.get('access_token')?.value;
    const path = request.nextUrl.pathname;
    // Routes publiques qui ne nécessitent pas d'authentification
    const publicPaths = [
        '/',
        '/auth/login',
        '/auth/register',
        '/auth/forgot-password',
        '/events',
        '/sermons',
        '/contact',
        '/about',
        '/beliefs',
        '/ministries',
        '/cdej',
        '/cdej/programmes'
    ];
    // Routes protégées nécessitant une authentification
    const protectedPaths = [
        '/profile',
        '/dashboard',
        '/members'
    ];
    // Routes admin seulement
    const adminPaths = [
        '/admin',
        '/admin/dashboard',
        '/admin/members',
        '/admin/events',
        '/admin/sermons',
        '/admin/posts',
        '/admin/media',
        '/admin/settings',
        '/admin/users'
    ];
    // Vérifier si c'est une route admin
    const isAdminPath = adminPaths.some((adminPath)=>path.startsWith(adminPath));
    // Vérifier si c'est une route protégée
    const isProtectedPath = protectedPaths.some((protectedPath)=>path.startsWith(protectedPath));
    // Si c'est une route publique, laisser passer
    const isPublicPath = publicPaths.some((publicPath)=>path === publicPath || path.startsWith(`${publicPath}/`));
    // Récupérer les informations utilisateur
    const userData = request.cookies.get('user')?.value;
    let userRole = 'VISITOR';
    let isAdmin = false;
    let isWebmaster = false;
    if (userData) {
        try {
            const user = JSON.parse(userData);
            userRole = user.member?.role || 'VISITOR';
            isAdmin = userRole === 'ADMIN';
            isWebmaster = userRole === 'WEBMASTER';
        } catch (e) {
            console.error('Error parsing user data:', e);
        }
    }
    // Redirection si non authentifié sur route protégée
    if ((isProtectedPath || isAdminPath) && !token) {
        const loginUrl = new URL('/auth/login', request.url);
        loginUrl.searchParams.set('redirect', path);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(loginUrl);
    }
    // Redirection si non admin sur route admin
    if (isAdminPath && !(isAdmin || isWebmaster)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/', request.url));
    }
    // Redirection si webmaster seulement sur certaines routes
    if (path.startsWith('/admin/users') && !isWebmaster) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/admin/dashboard', request.url));
    }
    // Redirection si déjà connecté sur login/register
    if ((path === '/auth/login' || path === '/auth/register') && token) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/', request.url));
    }
    // Ajouter des headers de sécurité
    const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    // Headers de sécurité
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    return response;
}
const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon\\.ico|public).*)/'
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__f2b15f93._.js.map