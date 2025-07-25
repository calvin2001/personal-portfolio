import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { path: '/', label: '홈', icon: '🏠' },
        { path: '/about', label: '소개', icon: '👨‍💻' },
        { path: '/projects', label: '프로젝트', icon: '💼' },
        { path: '/contact', label: '연락처', icon: '📧' }
    ];

    return (
        <nav className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* 로고 */}
                    <Link 
                        to="/" 
                        className="text-2xl font-bold text-white hover:text-purple-300 transition-colors"
                    >
                        💻 Portfolio
                    </Link>

                    {/* 데스크톱 네비게이션 */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map(item => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                                    location.pathname === item.path
                                        ? 'bg-purple-500 text-white'
                                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                                }`}
                            >
                                <span>{item.icon}</span>
                                <span>{item.label}</span>
                            </Link>
                        ))}
                    </div>

                    {/* 모바일 햄버거 메뉴 */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white p-2"
                    >
                        <div className="w-6 h-6 flex flex-col justify-around">
                            <span className={`h-0.5 w-full bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                            <span className={`h-0.5 w-full bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`h-0.5 w-full bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                        </div>
                    </button>
                </div>

                {/* 모바일 메뉴 */}
                {isOpen && (
                    <div className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/20">
                        {navItems.map(item => (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center gap-3 px-4 py-3 transition-all ${
                                    location.pathname === item.path
                                        ? 'bg-purple-500 text-white'
                                        : 'text-gray-300 hover:bg-white/10'
                                }`}
                            >
                                <span>{item.icon}</span>
                                <span>{item.label}</span>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}