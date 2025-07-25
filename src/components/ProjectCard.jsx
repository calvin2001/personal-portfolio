import { useState } from 'react';

export default function ProjectCard({ project }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const getStatusColor = (status) => {
        switch (status) {
            case '완료': return 'bg-green-500 text-white';
            case '진행 중': return 'bg-blue-500 text-white';
            case '예정': return 'bg-yellow-500 text-black';
            default: return 'bg-gray-500 text-white';
        }
    };

    return (
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group">
            {/* 프로젝트 헤더 */}
            <div className="text-center mb-4">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                </span>
            </div>

            {/* 프로젝트 설명 */}
            <p className="text-gray-300 mb-4 leading-relaxed">
                {isExpanded ? project.longDescription : project.description}
            </p>

            {/* 하이라이트 */}
            {project.highlights && (
                <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">✨ 주요 특징:</h4>
                    <div className="flex flex-wrap gap-1">
                        {project.highlights.map(highlight => (
                            <span
                                key={highlight}
                                className="px-2 py-1 bg-purple-500/30 text-purple-200 text-xs rounded-full border border-purple-400/30"
                            >
                                {highlight}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* 주요 기능 (확장 시에만 표시) */}
            {isExpanded && (
                <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">🔧 주요 기능:</h4>
                    <ul className="grid grid-cols-1 gap-1 text-sm text-gray-300">
                        {project.features.slice(0, 4).map(feature => (
                            <li key={feature} className="flex items-center gap-2">
                                <span className="text-green-400">•</span>
                                {feature}
                            </li>
                        ))}
                        {project.features.length > 4 && (
                            <li className="text-gray-400 text-xs">
                                외 {project.features.length - 4}개 기능...
                            </li>
                        )}
                    </ul>
                </div>
            )}

            {/* 기술 스택 */}
            <div className="mb-4">
                <h4 className="text-white font-semibold mb-2 text-sm">🛠️ 기술 스택:</h4>
                <div className="flex flex-wrap gap-2">
                    {project.tech.map(tech => (
                        <span
                            key={tech}
                            className="px-2 py-1 bg-blue-500/20 text-blue-200 text-xs rounded-full border border-blue-400/30"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* 상세보기 토글 */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full mb-4 py-2 text-sm text-purple-300 hover:text-purple-200 transition-colors border border-purple-400/30 rounded-lg hover:bg-purple-500/10"
            >
                {isExpanded ? '간단히 보기 ↑' : '자세히 보기 ↓'}
            </button>

            {/* 링크 버튼들 */}
            <div className="flex gap-3">
                <a
                    href={project.demo}
                    className={`flex-1 text-center py-2 rounded-lg font-medium transition-all duration-200 ${
                        project.status === '예정'
                            ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                            : 'bg-blue-500 text-white hover:bg-blue-600 hover:scale-105'
                    }`}
                    onClick={project.status === '예정' ? (e) => e.preventDefault() : undefined}
                >
                    {project.status === '예정' ? '🔒 준비 중' : '🔗 데모'}
                </a>
                <a
                    href={project.github}
                    className={`flex-1 text-center py-2 rounded-lg font-medium transition-all duration-200 ${
                        project.status === '예정'
                            ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                            : 'bg-gray-700 text-white hover:bg-gray-600 hover:scale-105'
                    }`}
                    onClick={project.status === '예정' ? (e) => e.preventDefault() : undefined}
                >
                    {project.status === '예정' ? '🔒 비공개' : '📂 GitHub'}
                </a>
            </div>

            {/* 프로젝트 완료율 (진행 중인 경우) */}
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

            {/* 예정 프로젝트 알림 */}
            {project.status === '예정' && (
                <div className="mt-4 pt-4 border-t border-white/20 text-center">
                    <p className="text-sm text-yellow-300">
                        🚧 곧 시작될 예정입니다!
                    </p>
                </div>
            )}
        </div>
    );
}