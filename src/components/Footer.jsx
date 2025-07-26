import { Link } from 'react-router-dom';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    const quickLinks = [
        { to: '/', label: '홈' },
        { to: '/about', label: '소개' },
        { to: '/projects', label: '프로젝트' },
        { to: '/contact', label: '연락처' }
    ];

    const socialLinks = [
        { icon: '📧', label: 'Email', url: 'mailto:your.email@example.com' },
        { icon: '🐙', label: 'GitHub', url: 'https://github.com/yourusername' },
        { icon: '💼', label: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile' }
    ];

    return (
        <footer className="bg-black/20 backdrop-blur-md border-t border-white/10">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* 로고 및 소개 */}
                    <div className="md:col-span-2">
                        <Link to="/" className="text-2xl font-bold text-white mb-4 block">
                            💻 Portfolio
                        </Link>
                        <p className="text-gray-400 mb-4 leading-relaxed">
                            끊임없이 배우고 성장하는 예비 개발자, AI 엔지니어입니다. 
                            JavaScript와 React를 중심으로 웹 개발의 즐거움을 
                            발견하며 풀스택 개발자를 꿈꾸고 있습니다.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-xl hover:bg-white/20 transition-all duration-200 hover:scale-110"
                                    title={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* 빠른 링크 */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">빠른 링크</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.to}
                                        className="text-gray-400 hover:text-white transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 기술 스택 */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">기술 스택</h3>
                        <div className="flex flex-wrap gap-2">
                            {['React', 'JavaScript', 'Tailwind', 'Node.js', 'Git'].map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        
                        {/* 학습 현황 */}
                        <div className="mt-4">
                            <h4 className="text-white text-sm font-medium mb-2">현재 학습 중</h4>
                            <div className="space-y-1">
                                <div className="text-xs text-gray-400">React Router ⚛️</div>
                                <div className="text-xs text-gray-400">Node.js & Express 🔧</div>
                                <div className="text-xs text-gray-400">MongoDB 🍃</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 구분선 */}
                <div className="border-t border-white/10 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-gray-400 text-sm">
                            © {currentYear} My Portfolio. React와 ❤️로 만들었습니다.
                        </div>
                        
                        {/* 업데이트 정보 */}
                        <div className="text-gray-500 text-xs">
                            Last updated: {new Date().toLocaleDateString('ko-KR')} 
                            <span className="ml-2">🚀 v2.0</span>
                        </div>
                    </div>
                    
                    {/* 추가 정보 */}
                    <div className="mt-4 text-center">
                        <p className="text-gray-500 text-xs">
                            Built with React + Vite + Tailwind CSS | 
                            Hosted on Vercel | 
                            Open Source on GitHub
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}