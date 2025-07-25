import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // 실제로는 백엔드 API로 전송
        setTimeout(() => {
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setIsSubmitting(false);
            
            // 3초 후 성공 메시지 제거
            setTimeout(() => setSubmitStatus(null), 3000);
        }, 1000);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactLinks = [
        {
            icon: '📧',
            title: '이메일',
            value: 'your.email@example.com',
            link: 'mailto:your.email@example.com',
            description: '프로젝트 문의, 협업 제안'
        },
        {
            icon: '🐙',
            title: 'GitHub',
            value: 'github.com/yourusername',
            link: 'https://github.com/yourusername',
            description: '코드 저장소, 오픈소스 프로젝트'
        },
        {
            icon: '💼',
            title: 'LinkedIn',
            value: 'linkedin.com/in/yourprofile',
            link: 'https://linkedin.com/in/yourprofile',
            description: '프로페셔널 네트워킹'
        },
        {
            icon: '📱',
            title: 'Notion',
            value: 'notion.so/yourpage',
            link: 'https://notion.so/yourpage',
            description: '학습 기록, 프로젝트 문서'
        }
    ];

    const faqs = [
        {
            question: '프로젝트 협업이 가능한가요?',
            answer: '네! 학습 목적의 프로젝트라면 언제든 환영입니다. 함께 성장할 수 있는 기회라고 생각합니다.'
        },
        {
            question: '어떤 기술 스택을 다룰 수 있나요?',
            answer: '현재 React, JavaScript, HTML/CSS를 주로 다루고 있으며, Node.js와 MongoDB를 학습 중입니다.'
        },
        {
            question: '멘토링이나 코드 리뷰를 받을 수 있나요?',
            answer: '경험이 풍부한 개발자분의 조언과 피드백은 항상 감사히 받습니다!'
        },
        {
            question: '취업 준비는 언제부터 시작하나요?',
            answer: '복학 후 1-2학기 동안 실력을 더 쌓은 뒤, 인턴십부터 차근차근 준비할 계획입니다.'
        }
    ];

    return (
        <div className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* 헤더 */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        📧 연락하기
                    </h1>
                    <p className="text-xl text-gray-300 mb-4">
                        궁금한 점이나 협업 제안이 있으시면 언제든 연락주세요!
                    </p>
                    <p className="text-lg text-gray-400">
                        함께 배우고 성장할 수 있는 기회를 기다리고 있습니다 🚀
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    {/* 연락처 정보 */}
                    <div className="space-y-8">
                        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                            <h2 className="text-2xl font-bold text-white mb-6">🔗 연락처</h2>
                            <div className="space-y-4">
                                {contactLinks.map((contact, index) => (
                                    <a
                                        key={index}
                                        href={contact.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200 group"
                                    >
                                        <span className="text-3xl group-hover:scale-110 transition-transform">
                                            {contact.icon}
                                        </span>
                                        <div className="flex-1">
                                            <div className="text-white font-semibold">{contact.title}</div>
                                            <div className="text-purple-300 text-sm">{contact.value}</div>
                                            <div className="text-gray-400 text-xs">{contact.description}</div>
                                        </div>
                                        <span className="text-gray-400 group-hover:text-white transition-colors">
                                            →
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* 응답 시간 안내 */}
                        <div className="bg-blue-500/20 backdrop-blur-md rounded-xl p-6 border border-blue-400/30">
                            <h3 className="text-lg font-semibold text-blue-200 mb-3">⏰ 응답 시간</h3>
                            <div className="space-y-2 text-blue-100">
                                <p>• <strong>이메일:</strong> 24시간 이내</p>
                                <p>• <strong>GitHub 이슈:</strong> 1-2일 이내</p>
                                <p>• <strong>긴급 문의:</strong> 이메일로 [긴급] 표시</p>
                            </div>
                        </div>
                    </div>

                    {/* 연락 폼 */}
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                        <h2 className="text-2xl font-bold text-white mb-6">💌 메시지 보내기</h2>
                        
                        {submitStatus === 'success' && (
                            <div className="mb-4 p-4 bg-green-500/20 border border-green-400/30 rounded-lg">
                                <p className="text-green-200">✅ 메시지가 성공적으로 전송되었습니다!</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-white mb-2 text-sm font-medium">
                                        이름 *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
                                        placeholder="홍길동"
                                    />
                                </div>
                                <div>
                                    <label className="block text-white mb-2 text-sm font-medium">
                                        이메일 *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
                                        placeholder="hong@example.com"
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label className="block text-white mb-2 text-sm font-medium">
                                    제목 *
                                </label>
                                <select
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
                                >
                                    <option value="" disabled>문의 유형을 선택해주세요</option>
                                    <option value="collaboration">프로젝트 협업 제안</option>
                                    <option value="question">기술 질문</option>
                                    <option value="feedback">피드백 및 조언</option>
                                    <option value="networking">네트워킹</option>
                                    <option value="other">기타 문의</option>
                                </select>
                            </div>
                            
                            <div>
                                <label className="block text-white mb-2 text-sm font-medium">
                                    메시지 *
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 resize-none transition-all"
                                    placeholder="안녕하세요! 함께 협업하고 싶습니다..."
                                />
                            </div>
                            
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                                    isSubmitting
                                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 hover:scale-105'
                                }`}
                            >
                                {isSubmitting ? '전송 중... ⏳' : '📤 메시지 전송'}
                            </button>
                        </form>

                        <div className="mt-4 text-xs text-gray-400">
                            * 필수 입력 항목입니다. 개인정보는 답변 목적으로만 사용됩니다.
                        </div>
                    </div>
                </div>

                {/* FAQ 섹션 */}
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">❓ 자주 묻는 질문</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white/5 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-white mb-3">
                                    Q. {faq.question}
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    A. {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}