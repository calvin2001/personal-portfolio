import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
    const [text, setText] = useState('');
    const fullText = '풀스택 개발자가 되는 중입니다!';

    // 타이핑 애니메이션 효과
    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            setText(fullText.slice(0, index));
            index++;
            if (index > fullText.length) {
                clearInterval(timer);
            }
        }, 100);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center px-4 relative">
            <div className="text-center">
                {/* 프로필 영역 */}
                <div className="mb-8">
                    <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-6xl shadow-2xl">
                        👨‍💻
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
                        안녕하세요!
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-purple-300 mb-6 h-8">
                        {text}<span className="animate-pulse">|</span>
                    </h2>
                </div>

                {/* 소개 텍스트 */}
                <div className="space-y-4 mb-8">
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        JavaScript와 React를 학습하며 웹 개발의 즐거움을 발견하고 있습니다.
                    </p>
                    <p className="text-lg text-gray-400 max-w-xl mx-auto">
                        바닐라 JS부터 React까지, 단계별로 성장하는 개발자입니다.
                    </p>
                </div>

                {/* CTA 버튼들 */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                    <Link
                        to="/projects"
                        className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
                    >
                        🚀 프로젝트 보기
                    </Link>
                    <Link
                        to="/about"
                        className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
                    >
                        📖 더 알아보기
                    </Link>
                </div>

                {/* 통계 카드들 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                        <div className="text-3xl font-bold text-purple-400 mb-2">3+</div>
                        <div className="text-gray-300">완료된 프로젝트</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                        <div className="text-3xl font-bold text-blue-400 mb-2">8주</div>
                        <div className="text-gray-300">학습 기간</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                        <div className="text-3xl font-bold text-green-400 mb-2">5+</div>
                        <div className="text-gray-300">사용 기술</div>
                    </div>
                </div>
            </div>

            {/* 스크롤 다운 애니메이션 */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>

            {/* 배경 장식 */}
            <div className="absolute top-1/4 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-1/3 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
    );
}