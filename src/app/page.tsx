import Link from 'next/link';

export default function HomePage() {
    return (
        <div className="py-8">
            <h1 className="text-3xl font-bold mb-6">Next.js App Router 동적 라우팅 데모</h1>

            <p className="mb-6 text-lg">
                이 애플리케이션은 Next.js App Router에서 다양한 동적 라우팅 패턴을 보여줍니다. 아래 링크를 통해 각
                예제를 확인해보세요.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card
                    title="단일 세그먼트 동적 라우팅"
                    description="블로그 포스트처럼 ID 기반으로 데이터를 보여주는 페이지입니다."
                    href="/posts"
                />
                <Card
                    title="다중 세그먼트 동적 라우팅"
                    description="카테고리와 아이템 ID를 모두 사용하는 중첩된 동적 라우팅입니다."
                    href="/products"
                />
                <Card
                    title="Catch-all 세그먼트"
                    description="URL의 여러 세그먼트를 한 번에 캡처하여 처리합니다."
                    href="/docs/getting-started/introduction"
                />
                <Card
                    title="외부 API 데이터 활용"
                    description="동적 라우팅과 외부 API를 함께 사용하는 예제입니다."
                    href="/users"
                />
            </div>
        </div>
    );
}

// 카드 컴포넌트
function Card({ title, description, href }) {
    return (
        <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-600 mb-4">{description}</p>
            <Link
                href={href}
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
                예제 보기
            </Link>
        </div>
    );
}
