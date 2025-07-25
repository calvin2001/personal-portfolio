import { useState, useEffect } from 'react';

export default function AboutPage() {
    const [visibleSkills, setVisibleSkills] = useState(false);

    const skills = [
        { name: 'HTML/CSS', level: 85, color: 'bg-orange-500' },
        { name: 'JavaScript', level: 80, color: 'bg-yellow-500' },
        { name: 'React', level: 75, color: 'bg-blue-500' },
        { name: 'Node.js', level: 60, color: 'bg-green-500' },
        { name: 'Git/GitHub', level: 70, color: 'bg-purple-500' },
        { name: 'Tailwind CSS', level: 80, color: 'bg-cyan-500' }
    ];

    const timeline = [
        {
            date: '2024.01',
            title: '군 전역 & 복학 준비',
            description: '컴퓨터공학과 복학을 앞두고 프로그래밍 실력 회복 시작'
        },
        {
            date: '2024.02',
            title: 'JavaScript 기본기 복습',
            description: 'ES6 문법, DOM 조작, 비동기 처리 등 JavaScript 기초 다지기'
        },
        {
            date: '2024.03',
            title: 'React 학습 시작',
            description: 'Hook, 컴포넌트, 상태관리 등 React 핵심 개념 학습'
        },
        {
            date: '2024.04',
            title: '포트폴리오 프로젝트',
            description: 'React Router를 활용한 포트폴리오 웹사이트 제작'
        }
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisibleSkills(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                {/* 헤더 */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        👋 저를 소개합니다
                    </h1>
                    <p className="text-xl text-gray-300">
                        끊임없이 배우고 성장하는 예비 개발자입니다
                    </p>
                </div>

                {/* 자기소개 & 기술 스택 */}
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    {/* 자기소개 */}
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                        <h2 className="text-2xl font-bold text-white mb-6">🎯 나의 여정</h2>
                        <div className="space-y-4 text-gray-300">
                            <p>
                                군 복무를 마치고 복학을 앞둔 컴퓨터공학과 학생입니다.
                                프로그래밍 실력을 회복하고 실전 경험을 쌓기 위해 
                                웹 개발 공부를 시작했습니다.
                            </p>
                            <p>
                                바닐라 JavaScript부터 시작해서 React까지,
                                "직접 만들면서 배우는" 방식으로 학습하고 있습니다.
                            </p>
                            <p>
                                최종 목표는 혼자서 기획부터 배포까지 모든 것을 
                                할 수 있는 풀스택 개발자가 되는 것입니다!
                            </p>
                        </div>

                        {/* 성격 & 가치관 */}
                        <div className="mt-6 pt-6 border-t border-white/20">
                            <h3 className="text-lg font-semibold text-white mb-3">💡 개발 철학</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li>• <strong>실습 중심 학습:</strong> 이론보다 직접 만들며 배우기</li>
                                <li>• <strong>꾸준한 성장:</strong> 매일 조금씩이라도 발전하기</li>
                                <li>• <strong>문제 해결:</strong> 막히면 포기하지 않고 끝까지 해결하기</li>
                            </ul>
                        </div>
                    </div>

                    {/* 기술 스택 */}
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                        <h2 className="text-2xl font-bold text-white mb-6">🛠️ 기술 스택</h2>
                        <div className="space-y-4">
                            {skills.map((skill, index) => (
                                <div key={skill.name}>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-gray-300">{skill.name}</span>
                                        <span className="text-gray-400">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <div
                                            className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out ${
                                                visibleSkills ? `w-[${skill.level}%]` : 'w-0'
                                            }`}
                                            style={{ 
                                                width: visibleSkills ? `${skill.level}%` : '0%',
                                                transitionDelay: `${index * 200}ms`
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* 관심 기술 */}
                        <div className="mt-6 pt-6 border-t border-white/20">
                            <h3 className="text-lg font-semibold text-white mb-3">🔮 관심 기술</h3>
                            <div className="flex flex-wrap gap-2">
                                {['TypeScript', 'Next.js', 'Express', 'MongoDB', 'Docker', 'AWS'].map(tech => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full border border-gray-600"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 학습 타임라인 */}
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 mb-16">
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">📅 학습 타임라인</h2>
                    <div className="space-y-8">
                        {timeline.map((item, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-20 text-sm text-purple-400 font-semibold">
                                    {item.date}
                                </div>
                                <div className="flex-shrink-0 w-4 h-4 bg-purple-500 rounded-full mt-1"></div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                                    <p className="text-gray-300">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 학습 계획 */}
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                    <h2 className="text-2xl font-bold text-white mb-6 text-center">🎯 학습 계획</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center p-6 bg-white/5 rounded-lg">
                            <div className="text-4xl mb-4">📚</div>
                            <h3 className="text-lg font-semibold text-white mb-2">현재 (2-3주)</h3>
                            <p className="text-gray-300 mb-3">React 심화, Router, 상태관리</p>
                            <div className="text-sm text-purple-400">
                                • useContext<br/>
                                • Custom Hook<br/>
                                • React Router
                            </div>
                        </div>
                        <div className="text-center p-6 bg-white/5 rounded-lg">
                            <div className="text-4xl mb-4">🔧</div>
                            <h3 className="text-lg font-semibold text-white mb-2">단기 (1-2개월)</h3>
                            <p className="text-gray-300 mb-3">백엔드 기초, 데이터베이스</p>
                            <div className="text-sm text-blue-400">
                                • Node.js + Express<br/>
                                • MongoDB<br/>
                                • REST API
                            </div>
                        </div>
                        <div className="text-center p-6 bg-white/5 rounded-lg">
                            <div className="text-4xl mb-4">🚀</div>
                            <h3 className="text-lg font-semibold text-white mb-2">장기 (3-6개월)</h3>
                            <p className="text-gray-300 mb-3">풀스택 프로젝트, 배포</p>
                            <div className="text-sm text-green-400">
                                • 실전 프로젝트<br/>
                                • 클라우드 배포<br/>
                                • 포트폴리오 완성
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}