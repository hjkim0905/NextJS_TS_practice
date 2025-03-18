'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function MainPage() {
    const router = useRouter();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [username, setUsername] = useState('사용자');

    useEffect(() => {
        // 로그인 상태 확인
        const isLoggedIn = localStorage.getItem('isLoggedIn');

        if (!isLoggedIn) {
            // 로그인되지 않은 상태면 로그인 페이지로 리다이렉트
            router.push('/');
        }

        // 실제 애플리케이션에서는 여기서 사용자 정보를 가져오는 API 호출 등을 수행할 수 있습니다
    }, [router]);

    const handleLogout = () => {
        // 로그아웃 처리
        localStorage.removeItem('isLoggedIn');
        router.push('/');
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* 헤더 */}
            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 flex items-center">
                                <span className="text-xl font-bold text-indigo-600">Practice Dashboard</span>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <span className="mr-4 text-gray-700">안녕하세요, {username}님!</span>
                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
                            >
                                로그아웃
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* 메인 콘텐츠 */}
            <div className="py-10">
                <header>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold text-gray-900">대시보드</h1>
                    </div>
                </header>
                <main>
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="px-4 py-8 sm:px-0">
                            <div className="border-4 border-dashed border-gray-200 rounded-lg p-8">
                                <h2 className="text-2xl font-semibold mb-4">환영합니다!</h2>
                                <p className="text-gray-600">
                                    로그인에 성공하셨습니다. 이 페이지는 로그인 후 접근할 수 있는 메인 페이지입니다.
                                </p>

                                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div className="bg-white overflow-hidden shadow rounded-lg">
                                        <div className="px-4 py-5 sm:p-6">
                                            <h3 className="text-lg font-medium text-gray-900">주요 기능 1</h3>
                                            <p className="mt-2 text-sm text-gray-500">
                                                이곳에 애플리케이션의 주요 기능에 대한 설명이 들어갑니다.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-white overflow-hidden shadow rounded-lg">
                                        <div className="px-4 py-5 sm:p-6">
                                            <h3 className="text-lg font-medium text-gray-900">주요 기능 2</h3>
                                            <p className="mt-2 text-sm text-gray-500">
                                                이곳에 애플리케이션의 또 다른 주요 기능에 대한 설명이 들어갑니다.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
