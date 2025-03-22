import './globals.css';
import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: '동적 라우팅 튜토리얼',
    description: 'Next.js App Router 동적 라우팅 학습하기',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko">
            <body className={inter.className}>
                <header className="bg-gray-100 p-4 mb-4">
                    <nav className="max-w-4xl mx-auto">
                        <ul className="flex space-x-6">
                            <li>
                                <Link href="/" className="font-medium hover:text-blue-600">
                                    홈
                                </Link>
                            </li>
                            <li>
                                <Link href="/posts" className="font-medium hover:text-blue-600">
                                    포스트
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="font-medium hover:text-blue-600">
                                    제품
                                </Link>
                            </li>
                            <li>
                                <Link href="/docs" className="font-medium hover:text-blue-600">
                                    문서
                                </Link>
                            </li>
                            <li>
                                <Link href="/users" className="font-medium hover:text-blue-600">
                                    사용자
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main className="max-w-4xl mx-auto px-4">{children}</main>
                <footer className="mt-8 py-4 bg-gray-100">
                    <div className="max-w-4xl mx-auto px-4 text-center text-gray-500">© 2025 동적 라우팅 튜토리얼</div>
                </footer>
            </body>
        </html>
    );
}
