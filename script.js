// Toggle menu untuk tampilan mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
    navLinks.classList.remove('active');
}));

// --- SISTEM MULTI-BAHASA (i18n) ---

// Kamus Bahasa
const translations = {
    "id": {
        "nav_home": "Beranda",
        "nav_about": "Tentang",
        "nav_portfolio": "Portofolio",
        "nav_contact": "Kontak",
        "hero_hello": "Halo, Saya <span class='highlight'>Maitriyana Mettalia</span>",
        "hero_role": "Web Developer | UI/UX Designer | Educator",
        "hero_desc": "Mengubah ide menjadi solusi digital yang interaktif.",
        "hero_btn": "Lihat Karya Saya",
        "about_title": "Tentang Saya",
        "about_p1": "Saya adalah seorang Web Developer dengan minat kuat pada desain UI/UX dan bersemangat menciptakan pengalaman digital yang bersih dan ramah pengguna. Saya senang mengubah ide menjadi solusi web yang fungsional dan menarik secara visual.",
        "about_p2": "Selain pekerjaan saya di bidang teknologi, saya juga seorang Guru Mandarin yang bersemangat membuat pembelajaran menjadi menarik dan efektif. Saya percaya bahwa teknologi dan pendidikan memainkan peran penting dalam membentuk pengalaman yang lebih baik bagi banyak orang. Saya terus belajar dan berkembang, dengan fokus pada peningkatan keterampilan saya di bidang pengembangan web dan desain pengalaman pengguna.",
        "port_title": "Karya Terbaru & Pengalaman",
        "proj1_desc": "Berpartisipasi dalam pengembangan Aplikasi Penentuan Jadwal berbasis Sistem Pendukung Keputusan sebagai bagian dari Program Studi Independen (MBKM Mandiri) bekerja sama dengan Universitas Universal dan Bimbel Let’s Shine.",
        "role_label": "Peran:",
        "proj1_role": "Manajemen data, desain sistem, dan implementasi pengambilan keputusan untuk mengoptimalkan penjadwalan.",
        "proj2_desc": "Berpartisipasi dalam Proyek Pengembangan Website sebagai bagian dari Program Studi Independen (MBKM Mandiri) bekerja sama dengan Universitas Universal dan Bimbel Let’s Shine.",
        "proj2_role": "Membantu desain sistem, implementasi fitur, dan memastikan kinerja keseluruhan website.",
        "proj3_desc": "Mengembangkan Sistem Pendukung Keputusan (SPK) berbasis web full-stack yang dirancang untuk membantu komunitas vegetarian di Batam Center menemukan tempat makan terbaik secara objektif menggunakan algoritma Simple Additive Weighting (SAW).",
        "btn_cert": "Lihat Sertifikat",
        "btn_repo": "Lihat Repository",
        "contact_title": "Hubungi Saya",
        "contact_desc": "Tertarik untuk bekerja sama atau berdiskusi? Jangan ragu untuk mengirimkan pesan kepada saya.",
        "footer_text": "Dibuat dengan dedikasi."
    },
    "en": {
        "nav_home": "Home",
        "nav_about": "About",
        "nav_portfolio": "Portfolio",
        "nav_contact": "Contact",
        "hero_hello": "Hello, I am <span class='highlight'>Maitriyana Mettalia</span>",
        "hero_role": "Web Developer | UI/UX Designer | Educator",
        "hero_desc": "Turning ideas into interactive digital solutions.",
        "hero_btn": "View My Work",
        "about_title": "About Me",
        "about_p1": "I am a Web Developer with a strong interest in UI/UX design and a passion for creating clean, user-friendly digital experiences. I enjoy turning ideas into functional and visually appealing web solutions.",
        "about_p2": "In addition to my work in technology, I am also a Mandarin Teacher who is passionate about making learning engaging and effective. I believe that both technology and education play important roles in shaping better experiences for people. I am continuously learning and growing, with a focus on improving my skills in both web development and user experience design.",
        "port_title": "Recent Work & Experience",
        "proj1_desc": "Participated in the development and completion of a Scheduling Determination Application based on a Decision Support System as part of the Independent Study Program (MBKM Mandiri) in collaboration with Universitas Universal and Bimbel Let’s Shine.",
        "role_label": "Role:",
        "proj1_role": "Data management, system design, and decision-making implementation to optimize scheduling.",
        "proj2_desc": "Participated in a Website Development Project as part of the Independent Study Program (MBKM Mandiri) in collaboration with Universitas Universal and Bimbel Let’s Shine.",
        "proj2_role": "Assisted in system design, feature implementation, and ensured overall website performance.",
        "proj3_desc": "Developed VeggieGuide, a full-stack web-based Decision Support System (DSS) designed to help the vegetarian community in Batam Center objectively discover the best dining spots using the Simple Additive Weighting (SAW) algorithm.",
        "btn_cert": "View Certificate",
        "btn_repo": "View Repository",
        "contact_title": "Contact Me",
        "contact_desc": "Interested in working together or having a discussion? Don't hesitate to send me a message.",
        "footer_text": "Built with dedication."
    },
    "zh": {
        "nav_home": "首页",
        "nav_about": "关于我",
        "nav_portfolio": "作品集",
        "nav_contact": "联系我",
        "hero_hello": "你好，我是 <span class='highlight'>Maitriyana Mettalia</span>",
        "hero_role": "Web开发者 | UI/UX设计师 | 教育工作者",
        "hero_desc": "将想法转化为互动的数字解决方案。",
        "hero_btn": "查看我的作品",
        "about_title": "关于我",
        "about_p1": "我是一名Web开发者，对UI/UX设计有着浓厚的兴趣，热衷于创造简洁、用户友好的数字体验。我喜欢将想法转化为功能齐全且视觉美观的Web解决方案。",
        "about_p2": "除了在科技领域的工作外，我也是一名对教学充满热情的中文老师，致力于让学习变得有趣且高效。我相信科技和教育在为人们塑造更好体验方面都发挥着重要作用。我正在不断学习和成长，专注于提升我在Web开发和用户体验设计方面的技能。",
        "port_title": "近期作品与经验",
        "proj1_desc": "参与开发基于决策支持系统的排班排课应用程序，这是与Universitas Universal和Bimbel Let’s Shine合作的独立学习计划 (MBKM Mandiri) 的一部分。",
        "role_label": "角色:",
        "proj1_role": "数据管理、系统设计以及实施决策功能以优化排班。",
        "proj2_desc": "参与网站开发项目，这是与Universitas Universal和Bimbel Let’s Shine合作的独立学习计划 (MBKM Mandiri) 的一部分。",
        "proj2_role": "协助系统设计、功能实现，并确保网站的整体性能。",
        "proj3_desc": "开发了 VeggieGuide，这是一款基于Web的全栈决策支持系统 (DSS)，旨在使用简单加权平均 (SAW) 算法，客观地帮助巴淡中心的素食社区发现最佳就餐地点。",
        "btn_cert": "查看证书",
        "btn_repo": "查看代码库",
        "contact_title": "联系我",
        "contact_desc": "有兴趣合作或交流吗？请随时给我发消息。",
        "footer_text": "用心制作。"
    }
};

// Fungsi untuk mengganti bahasa
function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Menggunakan innerHTML agar tag <span> (seperti pada nama di hero) tetap berfungsi
            element.innerHTML = translations[lang][key];
        }
    });

    // Simpan preferensi bahasa pengguna di browser (opsional tapi disarankan)
    localStorage.setItem('selectedLang', lang);
}

// Event listener untuk dropdown
const languageSwitcher = document.getElementById('language-switcher');
languageSwitcher.addEventListener('change', (event) => {
    changeLanguage(event.target.value);
});

// Cek bahasa saat pertama kali halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    // Cek apakah user pernah memilih bahasa sebelumnya, jika tidak default ke 'en' (Inggris)
    let savedLang = localStorage.getItem('selectedLang') || 'en';
    
    // Setel dropdown agar sesuai dengan bahasa yang aktif
    languageSwitcher.value = savedLang;
    
    // Terapkan bahasa
    changeLanguage(savedLang);
});
