import { useState } from 'react';

export default function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: '할 일 관리 앱',
            description: 'React Hook을 활용한 CRUD 기능의 할 일 관리 애플리케이션',
            detailDescription: '바닐라 JavaScript로 먼저 구현한 후 React로 리팩토링하여 두 방식의 차이점을 체험했습니다. useState, useEffect 등 React Hook을 완전히 활용하여 상태 관리와 생명주기를 학습했습니다. 우선순위 설정, 필터링, 검색 등 실무에서 필요한 기능들을 구현했습니다.',
            tech: ['React', 'JavaScript', 'Tailwind CSS', 'Local Storage'],
            image: '📋',
            category: 'react',
            status: '완료',
            date: '2024.03',
            demo: '#',
            github: '#',
            features: [
                'CRUD 기능 (추가, 수정, 삭제)',
                '우선순위 설정 (높음/보통/낮음)',
                '상태별 필터링 (전체/진행중/완료)',
                '실시간 검색 기능',
                '로컬스토리지 자동 저장',
                '반응형 디자인',
                '키보드 단축키 지원',
                '통계 및 완료율 표시'
            ],
            challenges: [
                'React Hook 생명주기 이해',
                '상태 관리 최적화',
                '사용자 경험 개선'
            ],
            learned: [
                'useState와 useEffect 완전 이해',
                '컴포넌트 분리 설계 원칙',
                'Props drilling 문제와 해결법'
            ]
        },
        {
            id: 2,
            title: '명언 생성기',
            description: '카테고리별 명언 생성 및 즐겨찾기 기능을 가진 웹 애플리케이션',
            detailDescription: 'JavaScript 기본기를 다지기 위해 만든 첫 번째 프로젝트입니다. DOM 조작, 이벤트 처리, 로컬스토리지 활용 등 웹 개발의 기초를 익혔습니다. 사용자 인터페이스와 경험에 중점을 두고 개발했습니다.',
            tech: ['JavaScript', 'HTML5', 'CSS3', 'Local Storage'],
            image: '💫',
            category: 'vanilla',
            status: '완료',
            date: '2024.02',
            demo: '#',
            github: '#',
            features: [
                '카테고리별 명언 분류',
                '즐겨찾기 기능',
                '클립보드 복사',
                '소셜 공유 기능',
                '사용 통계 및 기록',
                '키보드 단축키',
                '반응형 디자인'
            ],
            challenges: [
                'Vanilla JS DOM 조작',
                '브라우저 호환성 처리',
                'UX 최적화'
            ],
            learned: [
                'JavaScript 기본기 완전 습득',
                'DOM API 활용법',
                '이벤트 처리 패턴'
            ]
        },
        {
            id: 3,
            title: '포트폴리오 웹사이트',
            description: 'React Router를 활용한 SPA 포트폴리오 웹사이트',
            detailDescription: 'React Router DOM을 처음 사용해본 프로젝트입니다. SPA의 장점을 살리면서도 다중 페이지의 사용자 경험을 제공하는 방법을 학습했습니다. 모던한 디자인과 부드러운 애니메이션에 중점을 두었습니다.',
            tech: ['React', 'React Router', 'Tailwind CSS', 'Vite'],
            image: '🌐',
            category: 'react',
            status: '진행 중',
            date: '2024.04',
            demo: '#',
            github: '#',
            features: [
                'React Router 기반 SPA',
                '반응형 네비게이션',
                '타이핑 애니메이션 효과',
                '부드러운 페이지 전환',
                '프로젝트 갤러리',
                '연락 폼 구현',
                '모바일 최적화'
            ],
            challenges: [
                'React Router 라우팅 설계',
                '복잡한 애니메이션 구현',
                '성능 최적화'
            ],
            learned: [
                'SPA 라우팅 개념',
                '고급 CSS 애니메이션',
                '사용자 경험 설계'
            ]
        },
        {
            id: 4,
            title: '날씨 앱',
            description: '외부 API 연동 실시간 날씨 정보 애플리케이션',
            detailDescription: 'REST API 연동을 학습하기 위한 다음 프로젝트입니다. 비동기 처리, 에러 핸들링, 로딩 상태 관리 등을 중점적으로 다룰 예정입니다. 실시간 데이터 처리와 사용자 위치 기반 서비스를 구현할 계획입니다.',
            tech: ['React', 'Axios', 'Weather API', 'Geolocation API'],
            image: '🌤️',
            category: 'api',
            status: '예정',
            date: '2024.05',
            demo: '#',
            github: '#',
            features: [
                '실시간 날씨 정보',
                '7일 예보',
                '위치 기반 서비스',
                '날씨 알림',
                '즐겨찾기 도시',
                '날씨 아이콘',
                '상세 정보 (습도, 바람 등)'
            ],
            challenges: [
                'API 연동 및 에러 처리',
                '비동기 데이터 관리',
                '위치 기반 서비스'
            ],
            learned: [
                'REST API 활용',
                '비동기 프로그래밍',
                '외부 서비스 연동'
            ]
        }
    ];

    const categories = [
        { value: 'all', label: '전체 프로젝트', icon: '📁', count: projects.length },
        { value: 'react', label: 'React', icon: '⚛️', count: projects.filter(p => p.category === 'react').length },
        { value: 'vanilla', label: 'Vanilla JS', icon: '🟨', count: projects.filter(p => p.category === 'vanilla').length },
        { value: 'api', label: 'API 연동', icon: '🔗', count: projects.filter(p => p.category === 'api').length }
    ];

    const filteredProjects = selectedCategory === 'all' 
        ? projects 
        : projects.filter(project => project.category === selectedCategory);

    const getStatusColor = (status) => {
        switch (status) {
            case '완료': return 'bg-green-500';
            case '진행 중': return 'bg-blue-500';
            case '예정': return 'bg-yellow-500';
            default: return 'bg-gray-500';
        }
    };

    const getStatusTextColor = (status) => {
        switch (status) {
            case '완료': return 'text-green-100';
            case '진행 중': return 'text-blue-100';
            case '예정': return 'text-yellow-900';
            default: return 'text-gray-100';
        }
    };

    return (
        <div className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* 헤더 */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        💼 프로젝트
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        학습하며 만든 프로젝트들과 성장 과정을 소개합니다
                    </p>
                    
                    {/* 통계 요약 */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
                        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                            <div className="text-2xl font-bold text-purple-400">
                                {projects.filter(p => p.status === '완료').length}
                            </div>
                            <div className="text-gray-300 text-sm">완료</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                            <div className="text-2xl font-bold text-blue-400">
                                {projects.filter(p => p.status === '진행 중').length}
                            </div>
                            <div className="text-gray-300 text-sm">진행 중</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                            <div className="text-2xl font-bold text-green-400">
                                {[...new Set(projects.flatMap(p => p.tech))].length}
                            </div>
                            <div className="text-gray-300 text-sm">기술</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                            <div className="text-2xl font-bold text-orange-400">
                                {projects.reduce((sum, p) => sum + p.features.length, 0)}
                            </div>
                            <div className="text-gray-300 text-sm">기능</div>
                        </div>
                    </div>
                </div>

                {/* 카테고리 필터 */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map(category => (
                        <button
                            key={category.value}
                            onClick={() => setSelectedCategory(category.value)}
                            className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                                selectedCategory === category.value
                                    ? 'bg-purple-500 text-white shadow-lg scale-105'
                                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:scale-105'
                            } backdrop-blur-md border border-white/20`}
                        >
                            <span className="text-xl">{category.icon}</span>
                            <span>{category.label}</span>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                                selectedCategory === category.value
                                    ? 'bg-white/20'
                                    : 'bg-white/10'
                            }`}>
                                {category.count}
                            </span>
                        </button>
                    ))}
                </div>

                {/* 프로젝트 그리드 */}
                <div className="grid md:grid-cols-2 gap-8">
                    {filteredProjects.map(project => (
                        <div
                            key={project.id}
                            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 group cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                        >
                            {/* 프로젝트 헤더 */}
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                                        {project.image}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                        <div className="flex items-center gap-2">
                                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)} ${getStatusTextColor(project.status)}`}>
                                                {project.status}
                                            </span>
                                            <span className="text-gray-400 text-sm">{project.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 프로젝트 설명 */}
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                {project.description}
                            </p>

                            {/* 기술 스택 */}
                            <div className="mb-6">
                                <h4 className="text-white font-semibold mb-3 text-sm">🛠️ 기술 스택</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map(tech => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-blue-500/20 text-blue-200 text-sm rounded-full border border-blue-400/30"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* 주요 기능 (처음 3개만) */}
                            <div className="mb-6">
                                <h4 className="text-white font-semibold mb-3 text-sm">✨ 주요 기능</h4>
                                <ul className="space-y-1">
                                    {project.features.slice(0, 3).map(feature => (
                                        <li key={feature} className="text-gray-300 text-sm flex items-center gap-2">
                                            <span className="text-green-400">•</span>
                                            {feature}
                                        </li>
                                    ))}
                                    {project.features.length > 3 && (
                                        <li className="text-gray-400 text-xs">
                                            외 {project.features.length - 3}개 기능...
                                        </li>
                                    )}
                                </ul>
                            </div>

                            {/* 버튼들 */}
                            <div className="flex gap-3">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedProject(project);
                                    }}
                                    className="flex-1 py-2 bg-purple-500/20 text-purple-200 rounded-lg hover:bg-purple-500/30 transition-all duration-200 border border-purple-400/30"
                                >
                                    📖 자세히 보기
                                </button>
                                {project.status !== '예정' && (
                                    <>
                                        <a
                                            href={project.demo}
                                            onClick={(e) => e.stopPropagation()}
                                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200"
                                        >
                                            🔗
                                        </a>
                                        <a
                                            href={project.github}
                                            onClick={(e) => e.stopPropagation()}
                                            className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-200"
                                        >
                                            📂
                                        </a>
                                    </>
                                )}
                            </div>

                            {/* 진행률 (진행 중인 프로젝트만) */}
                            {project.status === '진행 중' && (
                                <div className="mt-4 pt-4 border-t border-white/20">
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-gray-300">진행률</span>
                                        <span className="text-gray-300">75%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000" style={{width: '75%'}}></div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* 빈 상태 */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                            해당 카테고리에 프로젝트가 없습니다
                        </h3>
                        <p className="text-gray-400">다른 카테고리를 선택해보세요</p>
                    </div>
                )}
            </div>

            {/* 프로젝트 상세 모달 */}
            {selectedProject && (
                <ProjectDetailModal 
                    project={selectedProject} 
                    onClose={() => setSelectedProject(null)} 
                />
            )}
        </div>
    );
}

// 프로젝트 상세 모달 컴포넌트
function ProjectDetailModal({ project, onClose }) {
    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-slate-900/95 backdrop-blur-md rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20">
                {/* 모달 헤더 */}
                <div className="sticky top-0 bg-slate-900/95 backdrop-blur-md border-b border-white/20 p-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="text-4xl">{project.image}</div>
                            <div>
                                <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)} ${getStatusTextColor(project.status)}`}>
                                        {project.status}
                                    </span>
                                    <span className="text-gray-400">{project.date}</span>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-white text-2xl p-2 hover:bg-white/10 rounded-lg transition-all"
                        >
                            ✕
                        </button>
                    </div>
                </div>

                {/* 모달 내용 */}
                <div className="p-6 space-y-8">
                    {/* 프로젝트 설명 */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">📝 프로젝트 소개</h3>
                        <p className="text-gray-300 leading-relaxed">
                            {project.detailDescription}
                        </p>
                    </div>

                    {/* 기술 스택 */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">🛠️ 사용 기술</h3>
                        <div className="flex flex-wrap gap-3">
                            {project.tech.map(tech => (
                                <span
                                    key={tech}
                                    className="px-4 py-2 bg-blue-500/20 text-blue-200 rounded-lg border border-blue-400/30"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* 주요 기능 */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">✨ 구현 기능</h3>
                        <div className="grid md:grid-cols-2 gap-3">
                            {project.features.map(feature => (
                                <div key={feature} className="flex items-center gap-2 text-gray-300">
                                    <span className="text-green-400">✓</span>
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 도전과제와 학습내용 */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-4">🎯 도전과제</h3>
                            <ul className="space-y-2">
                                {project.challenges.map(challenge => (
                                    <li key={challenge} className="text-gray-300 flex items-center gap-2">
                                        <span className="text-orange-400">•</span>
                                        {challenge}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-4">📚 학습 내용</h3>
                            <ul className="space-y-2">
                                {project.learned.map(learn => (
                                    <li key={learn} className="text-gray-300 flex items-center gap-2">
                                        <span className="text-purple-400">•</span>
                                        {learn}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* 링크 버튼들 */}
                    <div className="flex gap-4 pt-4">
                        {project.status !== '예정' ? (
                            <>
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 text-center font-medium"
                                >
                                    🔗 라이브 데모
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-200 text-center font-medium"
                                >
                                    📂 GitHub 코드
                                </a>
                            </>
                        ) : (
                            <div className="flex-1 py-3 bg-yellow-500/20 text-yellow-300 rounded-lg text-center font-medium border border-yellow-400/30">
                                🚧 곧 시작될 예정입니다!
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

    function getStatusColor(status) {
        switch (status) {
            case '완료': return 'bg-green-500';
            case '진행 중': return 'bg-blue-500';
            case '예정': return 'bg-yellow-500';
            default: return 'bg-gray-500';
        }
    }

    function getStatusTextColor(status) {
        switch (status) {
            case '완료': return 'text-green-100';
            case '진행 중': return 'text-blue-100';
            case '예정': return 'text-yellow-900';
            default: return 'text-gray-100';
        }
    }
}