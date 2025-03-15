import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 참고: 이것은 Next.js 미들웨어로 서버 측에서 실행됩니다.
// localStorage는 클라이언트 측에서만 작동하므로 여기서는 쿠키를 사용해야 합니다.
// 이 예제는 간단한 구현을 보여주며, 실제 프로덕션 환경에서는 더 견고한 인증 시스템이 필요합니다.
export function middleware(request: NextRequest) {
    // 로그인 페이지와 공개 경로는 항상 접근 가능하도록 합니다
    const publicPaths = ['/', '/register', '/api/login'];
    const isPublicPath = publicPaths.some(
        (path) => request.nextUrl.pathname === path || request.nextUrl.pathname.startsWith('/api/')
    );

    // 인증 토큰 확인 (실제로는 JWT나 세션 쿠키를 사용하는 것이 좋습니다)
    const authToken = request.cookies.get('authToken')?.value;

    // 로그인한 사용자가 로그인/등록 페이지에 접근하려고 할 때
    if (authToken && (request.nextUrl.pathname === '/' || request.nextUrl.pathname === '/register')) {
        return NextResponse.redirect(new URL('/main', request.url));
    }

    // 로그인하지 않은 사용자가 보호된 페이지에 접근하려고 할 때
    if (!authToken && !isPublicPath) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}

// 미들웨어가 적용될 경로를 지정!!!
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public folder
         */
        '/((?!_next/static|_next/image|favicon.ico|public).*)',
    ],
};
