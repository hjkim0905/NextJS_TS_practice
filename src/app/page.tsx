'use client';

import styled from 'styled-components';

const Title = styled.h1`
    font-size: 2rem;
    color: #3498db;
    text-align: center;
    margin-top: 2rem;
`;

const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

interface ContentProps {
    text: string;
}

const Content = styled.p<ContentProps>`
    font-size: 1rem;
    line-height: 1.5;
    color: ${(props) => (props.text.length > 50 ? '#333' : '#777')};
`;

export default function Home() {
    return (
        <Container>
            <Title>Next.js와 스타일드 컴포넌트 SSR 테스트</Title>
            <Content text="이 텍스트는 스타일드 컴포넌트로 스타일링된 컨테이너 안에 있습니다.">
                이 텍스트는 스타일드 컴포넌트로 스타일링된 컨테이너 안에 있습니다.
            </Content>
        </Container>
    );
}
