import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
    LayoutDashboard,
    ShoppingCart,
    CheckSquare,
    ArrowLeft,
    Code,
    ExternalLink,
    Github,
    Mail,
    Linkedin,
    Download,
    Star,
    Users,
    TrendingUp,
    DollarSign,
    Package,
    ShoppingBag,
    CreditCard,
    Truck,
    Search,
    Filter,
    Plus,
    MoreHorizontal,
    CheckCircle,
    Circle,
    Clock,
    AlertCircle,
    GripVertical,
    X,
    Menu,
    ArrowRight
} from "lucide-react";
import { useState, useEffect } from "react";

// ============================================
// PORTFOLIO LANDING PAGE
// ============================================

const PortfolioLanding = () => {
    useEffect(() => {
        const cursor = document.getElementById('cursor');
        const cursorRing = document.getElementById('cursor-ring');
        const scrollProgress = document.getElementById('scrollProgress');
        
        const onMouseMove = (e: MouseEvent) => {
            if (cursor) cursor.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
            if (cursorRing) cursorRing.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
        };

        const onScroll = () => {
            if (scrollProgress) {
                const scrolled = window.scrollY;
                const total = document.documentElement.scrollHeight - window.innerHeight;
                scrollProgress.style.width = `${(scrolled / total) * 100}%`;
            }
            
            const reveals = document.querySelectorAll('.reveal');
            for (let i = 0; i < reveals.length; i++) {
                const windowHeight = window.innerHeight;
                const elementTop = reveals[i].getBoundingClientRect().top;
                if (elementTop < windowHeight - 100) {
                    reveals[i].classList.add('visible');
                }
            }
            
            const timelineItems = document.querySelectorAll('.timeline-item');
            for (let i = 0; i < timelineItems.length; i++) {
                const windowHeight = window.innerHeight;
                const elementTop = timelineItems[i].getBoundingClientRect().top;
                if (elementTop < windowHeight - 100) {
                    timelineItems[i].classList.add('visible');
                }
            }
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('scroll', onScroll);
        onScroll(); 
        
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    const projects = [
        {
            id: "dashboard",
            title: "Analytics Dashboard",
            description: "A comprehensive admin dashboard with real-time analytics, charts, data visualization, and user management.",
            tags: ["React", "TypeScript", "Charts", "Tailwind"],
            icon: LayoutDashboard,
            color: "from-blue-500 to-cyan-400",
            link: "/dashboard"
        },
        {
            id: "ecommerce",
            title: "E-Commerce Platform",
            description: "A full-featured online store with product catalog, shopping cart, wishlist, and checkout flow.",
            tags: ["React", "State Management", "Payment UI", "Responsive"],
            icon: ShoppingCart,
            color: "from-purple-500 to-pink-400",
            link: "/ecommerce"
        },
        {
            id: "tasks",
            title: "Task Management",
            description: "A productivity app with kanban boards, drag-and-drop task reordering, and team collaboration features.",
            tags: ["React", "DnD", "Local Storage", "Tailwind"],
            icon: CheckSquare,
            color: "from-emerald-500 to-teal-400",
            link: "/tasks"
        }
    ];

    return (
        <div className="portfolio-container" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
            
            <div className="scroll-progress" id="scrollProgress"></div>

            <nav id="navbar">
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Work</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#contact" className="nav-cta">Contact Me</a></li>
                </ul>
            </nav>

            <section className="hero" id="home">
                <div className="hero-bg-glow"></div>
                <div className="hero-bg-glow2"></div>

                <div className="hero-content">
                    <div className="hero-tag">
                        <span className="dot"></span>
                        Available for opportunities
                    </div>
                    <h1 className="hero-name">
                        Subhash<br />
                        <span className="line2">Pokharel</span>
                    </h1>
                    <p className="hero-desc">
                        Frontend Developer passionate about crafting pixel-perfect,
                        high-performance web experiences. Bridging design and technology
                        with clean code and creative problem-solving.
                    </p>
                    <div className="hero-actions">
                        <a href="#contact" className="btn-primary">
                            Let's Work Together
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </a>
                        <a href="#about" className="btn-secondary">View My Work</a>
                    </div>
                    <div className="hero-stats">
                        <div>
                            <div className="stat-num">1+</div>
                            <div className="stat-label">Years Experience</div>
                        </div>
                        <div>
                            <div className="stat-num">2+</div>
                            <div className="stat-label">Companies</div>
                        </div>
                        <div>
                            <div className="stat-num">7+</div>
                            <div className="stat-label">Core Skills</div>
                        </div>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="hero-img-wrapper">
                        <div className="hero-img-bg"></div>
                        <div className="hero-img-frame">
                            <img src="../image.jpeg" alt="Subhash Pokharel" />
                            <div className="img-overlay"></div>
                        </div>
                        <div className="floating-card card-left">
                            <div className="card-icon icon-purple">⚡</div>
                            <div className="card-text">
                                <strong>Frontend Dev</strong>
                                <span>Web Specialist</span>
                            </div>
                        </div>
                        <div className="floating-card card-right">
                            <div className="card-icon icon-cyan">🌐</div>
                            <div className="card-text">
                                <strong>Sky Broadband</strong>
                                <span>Tech Support 2024</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="about">
                <div className="section-label">Who I Am</div>
                <h2 className="section-title">Passionate about <span className="accent">great</span> interfaces</h2>
                <div className="about-grid">
                    <div className="about-text reveal">
                        <p>I am a dedicated and ambitious developer with a keen interest in web development and technology. Currently pursuing a Bachelor's in Computer Science & IT, I bring both academic knowledge and real-world experience to everything I build.</p>
                        <p>From handling customer communications at e-commerce companies to diagnosing complex network issues at Sky Broadband, I've developed a unique perspective that blends technical depth with strong communication skills.</p>
                        <p>I'm eager to take on meaningful projects, contribute to collaborative teams, and keep pushing the boundaries of what's possible on the web.</p>
                        <div className="about-tags">
                            <span className="tag">Problem Solver</span>
                            <span className="tag">Fast Learner</span>
                            <span className="tag">Team Player</span>
                            <span className="tag">Creative Thinker</span>
                            <span className="tag">Detail Oriented</span>
                        </div>
                    </div>
                    <div className="reveal">
                        <div className="detail-row"><span className="detail-label">Location</span><span className="detail-value">Nepal 🇳🇵</span></div>
                        <div className="detail-row"><span className="detail-label">Email</span><span className="detail-value">closeuu13@gmail.com</span></div>
                        <div className="detail-row"><span className="detail-label">Phone</span><span className="detail-value">+977 9818915941</span></div>
                        <div className="detail-row"><span className="detail-label">LinkedIn</span><span className="detail-value">Xuvash02</span></div>
                        <div className="detail-row"><span className="detail-label">Status</span><span className="detail-value" style={{ color: '#4caf50' }}>● Open to Work</span></div>
                        <div className="detail-row"><span className="detail-label">Degree</span><span className="detail-value">Bsc. CSIT (Present)</span></div>
                    </div>
                </div>
            </section>

            <section className="section" id="skills">
                <div className="section-label">What I Do</div>
                <h2 className="section-title">Skills &amp; <span className="accent">Expertise</span></h2>
                <div className="skills-grid">
                    <div className="skill-card reveal">
                        <div className="skill-icon">🎨</div>
                        <div className="skill-name">Frontend Development</div>
                        <div className="skill-desc">Building responsive, modern web interfaces with HTML, CSS, and JavaScript.</div>
                        <div className="skill-bar-wrap"><div className="skill-bar" style={{ '--w': 0.85 } as React.CSSProperties}></div></div>
                    </div>
                    <div className="skill-card reveal">
                        <div className="skill-icon">📊</div>
                        <div className="skill-name">Data Analysis</div>
                        <div className="skill-desc">Interpreting complex datasets to drive strategic decisions and insights.</div>
                        <div className="skill-bar-wrap"><div className="skill-bar" style={{ '--w': 0.78 } as React.CSSProperties}></div></div>
                    </div>
                    <div className="skill-card reveal">
                        <div className="skill-icon">🔍</div>
                        <div className="skill-name">Market Research</div>
                        <div className="skill-desc">Identifying trends, customer needs, and competitive opportunities.</div>
                        <div className="skill-bar-wrap"><div className="skill-bar" style={{ '--w': 0.80 } as React.CSSProperties}></div></div>
                    </div>
                    <div className="skill-card reveal">
                        <div className="skill-icon">🗂️</div>
                        <div className="skill-name">Project Management</div>
                        <div className="skill-desc">Coordinating teams, timelines, and deliverables efficiently and effectively.</div>
                        <div className="skill-bar-wrap"><div className="skill-bar" style={{ '--w': 0.82 } as React.CSSProperties}></div></div>
                    </div>
                    <div className="skill-card reveal">
                        <div className="skill-icon">🖥️</div>
                        <div className="skill-name">Nagios TV Monitoring</div>
                        <div className="skill-desc">Infrastructure monitoring, alerting, and performance dashboards.</div>
                        <div className="skill-bar-wrap"><div className="skill-bar" style={{ '--w': 0.70 } as React.CSSProperties}></div></div>
                    </div>
                    <div className="skill-card reveal">
                        <div className="skill-icon">🌐</div>
                        <div className="skill-name">Networking Basics</div>
                        <div className="skill-desc">Diagnosing connectivity issues, configuring routers, TCP/IP fundamentals.</div>
                        <div className="skill-bar-wrap"><div className="skill-bar" style={{ '--w': 0.75 } as React.CSSProperties}></div></div>
                    </div>
                    <div className="skill-card reveal">
                        <div className="skill-icon">🧠</div>
                        <div className="skill-name">Strategic Thinking</div>
                        <div className="skill-desc">Long-term planning, resource optimization, and goal-oriented execution.</div>
                        <div className="skill-bar-wrap"><div className="skill-bar" style={{ '--w': 0.88 } as React.CSSProperties}></div></div>
                    </div>
                </div>
            </section>

            <section className="section" id="experience">
                <div className="section-label">My Journey</div>
                <h2 className="section-title">Work <span className="accent">Experience</span></h2>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-period">2024 — Present</div>
                        <div className="timeline-company">Sky Broadband</div>
                        <div className="timeline-role">Technical Support Specialist</div>
                        <ul className="timeline-points">
                            <li>Provided clear and effective communication with clients to resolve technical concerns promptly</li>
                            <li>Diagnosed network and broadband connectivity issues across a wide range of customer setups</li>
                            <li>Resolved router configuration and performance problems, ensuring high customer satisfaction</li>
                        </ul>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-period">2019 — 2021</div>
                        <div className="timeline-company">Kinumna.com</div>
                        <div className="timeline-role">Marketing &amp; Customer Support</div>
                        <ul className="timeline-points">
                            <li>Managed customer inquiries across phone, email, and live chat channels professionally</li>
                            <li>Handled orders, returns, and exchanges ensuring smooth post-purchase experiences</li>
                            <li>Coordinated with warehouse and logistics teams to streamline operations and reduce delays</li>
                        </ul>
                    </div>
                </div>
            </section>
            
            <section className="section" id="projects">
                <div className="section-label">My Work</div>
                <h2 className="section-title">Featured <span className="accent">Projects</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 z-20 relative px-10">
                    {projects.map((project) => (
                        <Link
                            key={project.id} 
                            to={project.link}
                            className="block group bg-slate-800/40 border border-slate-700 rounded-2xl overflow-hidden hover:border-slate-500 transition-all duration-300 transform hover:-translate-y-2 z-20"
                            style={{ position: 'relative' }}
                        >
                            <div className="p-6">
                                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br flex items-center justify-center mb-6 text-white ${project.color}`}>
                                    <project.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.slice(0,3).map(tag => (
                                        <span key={tag} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-md">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="section" id="education">
                <div className="section-label">Academic Background</div>
                <h2 className="section-title">My <span className="accent">Education</span></h2>
                <div className="edu-grid">
                    <div className="edu-card reveal">
                        <div className="edu-year">2017 — Present</div>
                        <div className="edu-school">College of Applied Business</div>
                        <div className="edu-degree">Bachelor of Science in Computer Science &amp; Information Technology (Bsc. CSIT)</div>
                    </div>
                    <div className="edu-card reveal">
                        <div className="edu-year">2015 — 2017</div>
                        <div className="edu-school">Morgan International College</div>
                        <div className="edu-degree">Higher Secondary Education — Science &amp; Technology track with foundational CS coursework</div>
                    </div>
                </div>
            </section>

            <section className="section" id="contact">
                <div className="section-label">Get In Touch</div>
                <h2 className="section-title">Let's <span className="accent">Connect</span></h2>
                <div className="contact-wrapper">
                    <div>
                        <a href="mailto:subhash@example.com" className="contact-info-card reveal">
                            <div className="contact-icon">✉️</div>
                            <div>
                                <div className="contact-label">Email</div>
                                <div className="contact-value">closeuu13@gmail.com</div>
                            </div>
                        </a>
                        <div className="contact-info-card reveal" style={{ cursor: 'default' }}>
                            <div className="contact-icon">📞</div>
                            <div>
                                <div className="contact-label">Phone</div>
                                <div className="contact-value">+977 9818915941</div>
                            </div>
                        </div>
                        <div className="contact-info-card reveal" style={{ cursor: 'default' }}>
                            <div className="contact-icon">💼</div>
                            <div>
                                <div className="contact-label">LinkedIn</div>
                                <div className="contact-value">Xuvash02</div>
                            </div>
                        </div>
                        <div className="contact-info-card reveal" style={{ cursor: 'default' }}>
                            <div className="contact-icon">📍</div>
                            <div>
                                <div className="contact-label">Location</div>
                                <div className="contact-value">Nepal</div>
                            </div>
                        </div>
                    </div>
                    <form className="contact-form reveal" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group"><input type="text" placeholder="Your Name" /></div>
                        <div className="form-group"><input type="email" placeholder="Your Email" /></div>
                        <div className="form-group"><input type="text" placeholder="Subject" /></div>
                        <div className="form-group"><textarea placeholder="Your message..."></textarea></div>
                        <button type="submit" className="form-submit">
                            Send Message
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" /></svg>
                        </button>
                    </form>
                </div>
            </section>

            <footer>
                <div className="footer-name">Subhash Pokharel</div>
                <div className="footer-copy">© 2025 </div>
                
            </footer>
        </div>
    );
};


// ============================================
// DASHBOARD PROJECT
// ============================================

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [activeTab, setActiveTab] = useState("overview");

    const stats = [
        { label: "Total Revenue", value: "$128,430", change: "+12.5%", positive: true, icon: DollarSign },
        { label: "Active Users", value: "24,592", change: "+8.2%", positive: true, icon: Users },
        { label: "Conversion Rate", value: "3.24%", change: "-2.1%", positive: false, icon: TrendingUp },
        { label: "Total Orders", value: "1,284", change: "+18.7%", positive: true, icon: Package }
    ];

    const recentOrders = [
        { id: "#ORD-001", customer: "Sarah Johnson", product: "Premium Plan", amount: "$299", status: "Completed", date: "2024-01-15" },
        { id: "#ORD-002", customer: "Mike Chen", product: "Basic Plan", amount: "$99", status: "Pending", date: "2024-01-15" },
        { id: "#ORD-003", customer: "Emily Davis", product: "Enterprise", amount: "$999", status: "Completed", date: "2024-01-14" },
        { id: "#ORD-004", customer: "James Wilson", product: "Premium Plan", amount: "$299", status: "Processing", date: "2024-01-14" },
        { id: "#ORD-005", customer: "Lisa Brown", product: "Basic Plan", amount: "$99", status: "Completed", date: "2024-01-13" }
    ];

    const topProducts = [
        { name: "Premium Plan", sales: 1240, revenue: "$370,760" },
        { name: "Basic Plan", sales: 980, revenue: "$97,020" },
        { name: "Enterprise", sales: 320, revenue: "$319,680" },
        { name: "Add-ons", sales: 560, revenue: "$55,440" }
    ];

    const menuItems = [
        { id: "overview", label: "Overview", icon: LayoutDashboard },
        { id: "analytics", label: "Analytics", icon: TrendingUp },
        { id: "orders", label: "Orders", icon: ShoppingBag },
        { id: "products", label: "Products", icon: Package },
        { id: "customers", label: "Customers", icon: Users },
        { id: "settings", label: "Settings", icon: Code }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-200 z-40 flex items-center justify-between px-6">
                <div className="flex items-center gap-4">
                    <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-slate-100 rounded-lg transition">
                        <Menu className="w-5 h-5 text-slate-600" />
                    </button>
                    <Link to="/" className="flex items-center gap-2">
                        <ArrowLeft className="w-5 h-5 text-slate-600" />
                        <span className="font-semibold text-slate-800">Back to Portfolio</span>
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-lg text-sm w-64 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                    </div>
                    <button className="p-2 hover:bg-slate-100 rounded-lg transition relative">
                        <AlertCircle className="w-5 h-5 text-slate-600" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                        JD
                    </div>
                </div>
            </header>

            {/* Sidebar */}
            <aside className={`fixed left-0 top-16 bottom-0 bg-white border-r border-slate-200 transition-all duration-300 z-30 ${sidebarOpen ? 'w-64' : 'w-20'}`}>
                <nav className="p-4 space-y-2">
                    {menuItems.map(item => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${activeTab === item.id
                                ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                                : 'text-slate-600 hover:bg-slate-100'
                                }`}
                        >
                            <item.icon className="w-5 h-5" />
                            {sidebarOpen && <span className="font-medium">{item.label}</span>}
                        </button>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <main className={`pt-24 px-8 pb-8 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-800">Dashboard Overview</h1>
                    <p className="text-slate-500">Welcome back! Here's what's happening with your business.</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-6 border border-slate-200"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-xl flex items-center justify-center">
                                    <stat.icon className="w-6 h-6 text-cyan-600" />
                                </div>
                                <span className={`text-sm font-medium ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                                    {stat.change}
                                </span>
                            </div>
                            <div className="text-2xl font-bold text-slate-800 mb-1">{stat.value}</div>
                            <div className="text-sm text-slate-500">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Charts Area */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-200">
                        <h3 className="text-lg font-semibold text-slate-800 mb-4">Revenue Overview</h3>
                        <div className="h-64 flex items-end justify-between gap-2">
                            {[65, 45, 78, 52, 90, 68, 85, 72, 88, 76, 92, 80].map((height, i) => (
                                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: `${height}%` }}
                                        transition={{ delay: i * 0.05, duration: 0.5 }}
                                        className="w-full bg-gradient-to-t from-cyan-500 to-purple-500 rounded-t-lg"
                                    ></motion.div>
                                    <span className="text-xs text-slate-400">{['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i]}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-200">
                        <h3 className="text-lg font-semibold text-slate-800 mb-4">Traffic Sources</h3>
                        <div className="space-y-4">
                            {[
                                { source: "Direct", percent: 45, color: "bg-cyan-500" },
                                { source: "Organic", percent: 30, color: "bg-purple-500" },
                                { source: "Referral", percent: 15, color: "bg-emerald-500" },
                                { source: "Social", percent: 10, color: "bg-orange-500" }
                            ].map(item => (
                                <div key={item.source}>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-slate-600">{item.source}</span>
                                        <span className="text-slate-800 font-medium">{item.percent}%</span>
                                    </div>
                                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <div className={`h-full ${item.color} rounded-full transition-all`} style={{ width: `${item.percent}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Tables */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl p-6 border border-slate-200">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-slate-800">Recent Orders</h3>
                            <button className="text-cyan-600 text-sm font-medium hover:underline">View All</button>
                        </div>
                        <div className="space-y-3">
                            {recentOrders.map(order => (
                                <div key={order.id} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
                                    <div>
                                        <div className="font-medium text-slate-800">{order.id}</div>
                                        <div className="text-sm text-slate-500">{order.customer}</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-semibold text-slate-800">{order.amount}</div>
                                        <span className={`text-xs px-2 py-1 rounded-full ${order.status === 'Completed' ? 'bg-green-100 text-green-700' :
                                            order.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                                                'bg-blue-100 text-blue-700'
                                            }`}>{order.status}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-200">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-slate-800">Top Products</h3>
                            <button className="text-cyan-600 text-sm font-medium hover:underline">View All</button>
                        </div>
                        <div className="space-y-3">
                            {topProducts.map((product, index) => (
                                <div key={product.name} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
                                    <div className="flex items-center gap-3">
                                        <span className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-sm font-semibold text-slate-600">
                                            {index + 1}
                                        </span>
                                        <div>
                                            <div className="font-medium text-slate-800">{product.name}</div>
                                            <div className="text-sm text-slate-500">{product.sales} sales</div>
                                        </div>
                                    </div>
                                    <div className="font-semibold text-slate-800">{product.revenue}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

// ============================================
// E-COMMERCE PROJECT
// ============================================

const Ecommerce = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [cart, setCart] = useState<Array<{ id: number; name: string; price: number; quantity: number; image: string }>>([]);
    const [wishlist, setWishlist] = useState<number[]>([]);

    const categories = [
        { id: "all", label: "All Products", icon: ShoppingBag },
        { id: "electronics", label: "Electronics", icon: Package },
        { id: "clothing", label: "Clothing", icon: CheckCircle },
        { id: "accessories", label: "Accessories", icon: Star }
    ];

    const products = [
        { id: 1, name: "Premium Wireless Headphones", price: 299, category: "electronics", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop", rating: 4.8, reviews: 234 },
        { id: 2, name: "Smart Watch Pro", price: 449, category: "electronics", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop", rating: 4.9, reviews: 189 },
        { id: 3, name: "Minimalist Backpack", price: 129, category: "accessories", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop", rating: 4.7, reviews: 156 },
        { id: 4, name: "Designer Sunglasses", price: 189, category: "accessories", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop", rating: 4.6, reviews: 98 },
        { id: 5, name: "Premium Leather Wallet", price: 79, category: "accessories", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop", rating: 4.8, reviews: 267 },
        { id: 6, name: "Running Sneakers", price: 159, category: "clothing", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop", rating: 4.7, reviews: 312 },
        { id: 7, name: "Cotton Hoodie", price: 89, category: "clothing", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop", rating: 4.5, reviews: 145 },
        { id: 8, name: "Portable Speaker", price: 129, category: "electronics", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop", rating: 4.6, reviews: 198 }
    ];

    const filteredProducts = products.filter(product => {
        const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const addToCart = (product: typeof products[0]) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (id: number) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    const updateQuantity = (id: number, delta: number) => {
        setCart(prev => prev.map(item => {
            if (item.id === id) {
                const newQty = item.quantity + delta;
                return newQty > 0 ? { ...item, quantity: newQty } : item;
            }
            return item;
        }));
    };

    const toggleWishlist = (id: number) => {
        setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
    };

    const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-lg border-b border-slate-700/50">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="flex items-center gap-2">
                            <ArrowLeft className="w-5 h-5 text-slate-400" />
                            <span className="text-slate-400 font-medium">Back to Portfolio</span>
                        </Link>
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm w-64 focus:outline-none focus:border-cyan-500 transition"
                                />
                            </div>
                            <button className="relative p-2 hover:bg-slate-800 rounded-lg transition" onClick={() => setCartOpen(true)}>
                                <ShoppingCart className="w-6 h-6 text-white" />
                                {cart.length > 0 && (
                                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-cyan-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                                        {cart.reduce((sum, item) => sum + item.quantity, 0)}
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero */}
            <section className="py-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Products</span>
                        </h1>
                        <p className="text-slate-400 text-lg">Discover our curated collection of premium items</p>
                    </motion.div>

                    {/* Categories */}
                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {categories.map(category => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition ${selectedCategory === category.id
                                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                                    }`}
                            >
                                <category.icon className="w-4 h-4" />
                                {category.label}
                            </button>
                        ))}
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-slate-600 transition group"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                    />
                                    <button
                                        onClick={() => toggleWishlist(product.id)}
                                        className="absolute top-3 right-3 p-2 bg-slate-900/50 backdrop-blur-sm rounded-full hover:bg-slate-900 transition"
                                    >
                                        <Heart className={`w-5 h-5 ${wishlist.includes(product.id) ? 'text-red-500 fill-red-500' : 'text-white'}`} />
                                    </button>
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center gap-1 mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}`} />
                                        ))}
                                        <span className="text-slate-400 text-sm ml-2">({product.reviews})</span>
                                    </div>
                                    <h3 className="text-white font-semibold mb-2 line-clamp-2">{product.name}</h3>
                                    <div className="flex items-center justify-between">
                                        <span className="text-2xl font-bold text-cyan-400">${product.price}</span>
                                        <button
                                            onClick={() => addToCart(product)}
                                            className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition flex items-center gap-2"
                                        >
                                            <ShoppingBag className="w-4 h-4" /> Add
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cart Sidebar */}
            <AnimatePresence>
                {cartOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 z-50"
                            onClick={() => setCartOpen(false)}
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25 }}
                            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-slate-900 border-l border-slate-700 z-50 flex flex-col"
                        >
                            <div className="p-6 border-b border-slate-700 flex items-center justify-between">
                                <h2 className="text-xl font-bold text-white">Shopping Cart</h2>
                                <button onClick={() => setCartOpen(false)} className="p-2 hover:bg-slate-800 rounded-lg transition">
                                    <X className="w-5 h-5 text-slate-400" />
                                </button>
                            </div>
                            <div className="flex-1 overflow-y-auto p-6 space-y-4">
                                {cart.length === 0 ? (
                                    <div className="text-center py-12">
                                        <ShoppingCart className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                                        <p className="text-slate-400">Your cart is empty</p>
                                    </div>
                                ) : (
                                    cart.map(item => (
                                        <div key={item.id} className="flex gap-4 bg-slate-800/50 p-4 rounded-xl">
                                            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                                            <div className="flex-1">
                                                <h4 className="text-white font-medium mb-1">{item.name}</h4>
                                                <p className="text-cyan-400 font-bold">${item.price}</p>
                                                <div className="flex items-center gap-2 mt-2">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, -1)}
                                                        className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center text-white hover:bg-slate-600"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="text-white w-8 text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, 1)}
                                                        className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center text-white hover:bg-slate-600"
                                                    >
                                                        +
                                                    </button>
                                                    <button
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="ml-auto text-red-400 hover:text-red-300"
                                                    >
                                                        <X className="w-5 h-5" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                            {cart.length > 0 && (
                                <div className="p-6 border-t border-slate-700">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-slate-400">Subtotal</span>
                                        <span className="text-2xl font-bold text-white">${cartTotal}</span>
                                    </div>
                                    <button className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-xl hover:opacity-90 transition flex items-center justify-center gap-2">
                                        <CreditCard className="w-5 h-5" /> Checkout
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

// ============================================
// TASK MANAGER PROJECT
// ============================================

const Heart = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
);

const TaskManager = () => {
    const [columns, setColumns] = useState([
        {
            id: "todo", title: "To Do", color: "bg-slate-500", tasks: [
                { id: 1, title: "Design new landing page", priority: "high", dueDate: "Jan 20" },
                { id: 2, title: "Write documentation", priority: "medium", dueDate: "Jan 22" },
                { id: 3, title: "Set up CI/CD pipeline", priority: "high", dueDate: "Jan 18" }
            ]
        },
        {
            id: "in-progress", title: "In Progress", color: "bg-cyan-500", tasks: [
                { id: 4, title: "Implement user authentication", priority: "high", dueDate: "Jan 17" },
                { id: 5, title: "Build API endpoints", priority: "medium", dueDate: "Jan 19" }
            ]
        },
        {
            id: "review", title: "Review", color: "bg-purple-500", tasks: [
                { id: 6, title: "Code review for PR #42", priority: "low", dueDate: "Jan 16" }
            ]
        },
        {
            id: "done", title: "Done", color: "bg-emerald-500", tasks: [
                { id: 7, title: "Database setup", priority: "high", dueDate: "Jan 15" },
                { id: 8, title: "Project kickoff meeting", priority: "medium", dueDate: "Jan 14" }
            ]
        }
    ]);

    const [newTaskTitle, setNewTaskTitle] = useState<{ [key: string]: string }>({});
    const [showNewTaskInput, setShowNewTaskInput] = useState<string | null>(null);

    const addTask = (columnId: string) => {
        if (!newTaskTitle[columnId]?.trim()) return;
        setColumns(prev => prev.map(col => {
            if (col.id === columnId) {
                return {
                    ...col,
                    tasks: [...col.tasks, {
                        id: Date.now(),
                        title: newTaskTitle[columnId],
                        priority: "medium",
                        dueDate: "Jan 25"
                    }]
                };
            }
            return col;
        }));
        setNewTaskTitle(prev => ({ ...prev, [columnId]: "" }));
        setShowNewTaskInput(null);
    };

    const deleteTask = (columnId: string, taskId: number) => {
        setColumns(prev => prev.map(col => {
            if (col.id === columnId) {
                return { ...col, tasks: col.tasks.filter(t => t.id !== taskId) };
            }
            return col;
        }));
    };

    const dragTask = (fromColumn: string, toColumn: string, taskId: number) => {
        const task = columns.find(c => c.id === fromColumn)?.tasks.find(t => t.id === taskId);
        if (!task) return;

        setColumns(prev => prev.map(col => {
            if (col.id === fromColumn) {
                return { ...col, tasks: col.tasks.filter(t => t.id !== taskId) };
            }
            if (col.id === toColumn) {
                return { ...col, tasks: [...col.tasks, task] };
            }
            return col;
        }));
    };

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case "high": return "bg-red-100 text-red-700";
            case "medium": return "bg-yellow-100 text-yellow-700";
            case "low": return "bg-green-100 text-green-700";
            default: return "bg-slate-100 text-slate-700";
        }
    };

    const totalTasks = columns.reduce((sum, col) => sum + col.tasks.length, 0);
    const completedTasks = columns.find(c => c.id === "done")?.tasks.length || 0;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Header */}
            <header className="bg-slate-900/90 backdrop-blur-lg border-b border-slate-700/50 px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link to="/" className="flex items-center gap-2">
                            <ArrowLeft className="w-5 h-5 text-slate-400" />
                            <span className="text-slate-400 font-medium">Back to Portfolio</span>
                        </Link>
                        <div className="h-6 w-px bg-slate-700"></div>
                        <h1 className="text-xl font-bold text-white">Project Board</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-sm">
                            <span className="text-slate-400">Progress:</span>
                            <span className="text-white font-semibold">{completedTasks}/{totalTasks} tasks</span>
                        </div>
                        <div className="w-32 h-2 bg-slate-700 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-cyan-500 to-emerald-500 transition-all"
                                style={{ width: `${totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Board */}
            <div className="p-6 overflow-x-auto">
                <div className="flex gap-6 min-w-max">
                    {columns.map(column => (
                        <div key={column.id} className="w-80 flex-shrink-0">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <div className={`w-3 h-3 rounded-full ${column.color}`}></div>
                                    <h3 className="font-semibold text-white">{column.title}</h3>
                                    <span className="text-slate-500 text-sm">({column.tasks.length})</span>
                                </div>
                                <button
                                    onClick={() => setShowNewTaskInput(column.id)}
                                    className="p-1 hover:bg-slate-700 rounded transition"
                                >
                                    <Plus className="w-5 h-5 text-slate-400" />
                                </button>
                            </div>

                            <div className="bg-slate-800/50 rounded-xl p-3 space-y-3 min-h-[200px]">
                                {column.tasks.map(task => (
                                    <motion.div
                                        key={task.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="bg-slate-700/50 rounded-lg p-4 border border-slate-600/50 hover:border-slate-500 cursor-grab active:cursor-grabbing group"
                                    >
                                        <div className="flex items-start justify-between mb-2">
                                            <span className={`text-xs px-2 py-1 rounded-full font-medium ${getPriorityColor(task.priority)}`}>
                                                {task.priority}
                                            </span>
                                            <button
                                                onClick={() => deleteTask(column.id, task.id)}
                                                className="opacity-0 group-hover:opacity-100 p-1 hover:bg-slate-600 rounded transition"
                                            >
                                                <X className="w-4 h-4 text-slate-400" />
                                            </button>
                                        </div>
                                        <h4 className="text-white font-medium mb-2">{task.title}</h4>
                                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                                            <Clock className="w-4 h-4" />
                                            {task.dueDate}
                                        </div>
                                    </motion.div>
                                ))}

                                {showNewTaskInput === column.id && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        className="bg-slate-700/50 rounded-lg p-3 border border-slate-600/50"
                                    >
                                        <input
                                            type="text"
                                            value={newTaskTitle[column.id] || ""}
                                            onChange={(e) => setNewTaskTitle(prev => ({ ...prev, [column.id]: e.target.value }))}
                                            onKeyDown={(e) => e.key === "Enter" && addTask(column.id)}
                                            placeholder="Task title..."
                                            className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-cyan-500 mb-2"
                                            autoFocus
                                        />
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => addTask(column.id)}
                                                className="flex-1 py-2 bg-cyan-500 text-white text-sm font-medium rounded-lg hover:bg-cyan-600 transition"
                                            >
                                                Add Task
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setShowNewTaskInput(null);
                                                    setNewTaskTitle(prev => ({ ...prev, [column.id]: "" }));
                                                }}
                                                className="px-4 py-2 bg-slate-600 text-white text-sm rounded-lg hover:bg-slate-500 transition"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    ))}

                    {/* Add Column */}
                    <button className="w-80 flex-shrink-0 h-[100px] border-2 border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-500 hover:border-slate-600 hover:text-slate-400 transition">
                        <Plus className="w-5 h-5 mr-2" /> Add Section
                    </button>
                </div>
            </div>
        </div>
    );
};

// ============================================
// MAIN APP
// ============================================

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PortfolioLanding />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/ecommerce" element={<Ecommerce />} />
                <Route path="/tasks" element={<TaskManager />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
