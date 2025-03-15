// 실제 애플리케이션에서는 더 강력한 인증 로직이 필요합니다.
// 이것은 간단한 예시입니다.

export interface User {
    id: string;
    email: string;
    name: string;
}

// 테스트용 더미 사용자
const DUMMY_USER: User = {
    id: '1',
    email: 'test@example.com',
    name: '테스트 사용자',
};

export async function loginUser(email: string, password: string): Promise<User | null> {
    // 실제로는 API 호출을 통해 인증을 처리해야 합니다.
    // 이 예시에서는 간단한 더미 로그인 로직을 사용합니다.

    return new Promise((resolve) => {
        // 인증 딜레이 시뮬레이션 (실제 API 호출처럼 보이기 위해)
        setTimeout(() => {
            if (email === 'test@example.com' && password === 'password') {
                resolve(DUMMY_USER);
            } else {
                resolve(null);
            }
        }, 500);
    });
}

export function isAuthenticated(): boolean {
    // 클라이언트 사이드에서만 실행되도록 확인
    if (typeof window === 'undefined') {
        return false;
    }

    return localStorage.getItem('isLoggedIn') === 'true';
}

export function setAuthToken(token: string): void {
    localStorage.setItem('authToken', token);
    localStorage.setItem('isLoggedIn', 'true');
}

export function clearAuth(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('isLoggedIn');
}
