// 语言配置
const translations = {
    en: {
        'nav.home': 'Home',
        'nav.services': 'Services',
        'nav.booking': 'Booking',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'hero.title': 'Relax & Rejuvenate',
        'hero.subtitle': 'Professional massage therapy for your body and mind',
        'hero.button': 'Book Now',
        'services.title': 'Our Services',
        'services.subtitle': 'Professional massage services for you',
        'feature.cert': 'Professional Certification',
        'feature.cert.desc': 'All therapists are professionally certified',
        'feature.flexible': 'Flexible Booking',
        'feature.flexible.desc': 'Easy online booking system',
        'feature.quality': 'Quality Service',
        'feature.quality.desc': 'Customer-oriented premium service',
        'booking.title': 'Book Now',
        'booking.subtitle': 'Choose your preferred service and time',
        'booking.name': 'Your Name',
        'booking.phone': 'Phone Number',
        'booking.email': 'Email Address',
        'booking.service': 'Select Service',
        'booking.note': 'Additional Notes (Optional)',
        'booking.submit': 'Submit Booking',
        'booking.hours': 'Mon-Sun 10:00 AM - 8:00 PM',
        'services.deep.desc': 'Deep tissue massage for muscle pain relief',
        'services.lymph.desc': 'Lymphatic drainage massage, promotes blood circulation',
        'services.swedish.name': 'Swedish Massage',
        'services.deep.name': 'Deep Tissue',
        'services.lymph.name': 'Lymphatic Drainage',
        'services.duration': '60 mins',
        'services.tax': '+tax',
        'hero.title2': 'Professional Care',
        'hero.subtitle2': 'Professional team, heartfelt service',
        'hero.title3': 'Premium Experience',
        'hero.subtitle3': 'Quality environment, comfortable experience',
        'hero.title4': 'Your Wellness Journey',
        'hero.subtitle4': 'Start your wellness journey',
        'gallery.title': 'Our Environment',
        'gallery.subtitle': 'Elegant and comfortable massage environment',
        'gallery.massage-room': 'Massage Room',
        'gallery.rest-area': 'Rest Area',
        'gallery.reception': 'Reception',
        'gallery.massage-bed': 'Massage Bed',
        'gallery.waiting-area': 'Waiting Area',
        'gallery.corridor': 'Corridor',
        'contact.wechat': 'WeChat ID: magichands2024',
        'contact.email': 'magichands5918@gmail.com',
        'footer.title': 'Magic Hands Wellness Center',
        'footer.subtitle': 'Professional Massage Therapy Center',
        'footer.wechat': 'Scan to add WeChat',
        'services.swedish': 'Swedish Massage',
        'services.deep': 'Deep Tissue Massage',
        'services.lymph': 'Lymphatic Drainage',
        'services.price': '$100',
        'booking.date': 'Select Date',
        'booking.time': 'Select Time',
        'services.massage.moxa': 'Massage + Moxibustion',
        'services.massage.moxa.desc': 'Traditional moxibustion with massage therapy',
        'services.massage.mud': 'Massage + Mud Therapy',
        'services.massage.mud.desc': 'Mud therapy with massage for detox and beauty',
        'services.acupuncture': 'Acupuncture',
        'services.acupuncture.long': 'Acupuncture Treatment',
        'services.acupuncture.desc': 'Traditional acupuncture for health maintenance',
        'services.duration.30': '30 mins',
        'services.duration.90': '90 mins',
        'services.facial': 'Facial Treatment',
        'services.facial.desc': 'Professional facial care to revitalize your skin'
    },
    zh: {
        'nav.home': '首页',
        'nav.services': '服务项目',
        'nav.booking': '预约',
        'nav.about': '关于我们',
        'nav.contact': '联系方式',
        'hero.title': '专业放松，身心愉悦',
        'hero.subtitle': '专业的按摩护理，让您的身心得到完全放松',
        'hero.button': '立即预约',
        'services.title': '服务项目',
        'services.subtitle': '为您提供专业的按摩服务',
        'feature.cert': '专业认证',
        'feature.cert.desc': '所有治疗师均持有专业资格认证',
        'feature.flexible': '灵活预约',
        'feature.flexible.desc': '提供在线预约，方便快捷',
        'feature.quality': '优质服务',
        'feature.quality.desc': '以客为尊，提供贴心服务',
        'booking.title': '立即预约',
        'booking.subtitle': '选择您喜欢的服务和时间',
        'booking.name': '您的姓名',
        'booking.phone': '联系电话',
        'booking.email': '电子邮箱',
        'booking.service': '选择服务项目',
        'booking.note': '备注信息（可选）',
        'booking.submit': '提交预约',
        'booking.hours': '周一至周日 10:00 - 20:00',
        'services.deep.desc': '深层组织按摩，缓解肌肉疼痛',
        'services.lymph.desc': '淋巴排毒按摩，促进血液循环',
        'services.swedish.name': '瑞典式按摩',
        'services.deep.name': '深层组织按摩',
        'services.lymph.name': '淋巴排毒',
        'services.duration': '60分钟',
        'services.tax': '+税',
        'hero.title2': '专业护理',
        'hero.subtitle2': '专业的团队，贴心的服务',
        'hero.title3': '优质体验',
        'hero.subtitle3': '优质的环境，舒适的体验',
        'hero.title4': '健康之旅',
        'hero.subtitle4': '开启您的健康之旅',
        'gallery.title': '环境展示',
        'gallery.subtitle': '优雅舒适的按摩环境',
        'gallery.massage-room': '按摩室',
        'gallery.rest-area': '休息区',
        'gallery.reception': '前台',
        'gallery.massage-bed': '按摩床',
        'gallery.waiting-area': '等候区',
        'gallery.corridor': '走廊',
        'contact.wechat': '微信号：magichands2024',
        'contact.email': 'magichands5918@gmail.com',
        'footer.title': 'Magic Hands 养生中心',
        'footer.subtitle': '专业的按摩护理中心',
        'footer.wechat': '扫码添加微信',
        'services.swedish': '瑞典式按摩',
        'services.deep': '深层组织按摩',
        'services.lymph': '淋巴排毒',
        'services.price': '100加元',
        'booking.date': '选择日期',
        'booking.time': '选择时间',
        'services.massage.moxa': '按摩+艾灸',
        'services.massage.moxa.desc': '传统艾灸配合按摩，温经通络',
        'services.massage.mud': '按摩+泥灸',
        'services.massage.mud.desc': '泥灸疗法配合按摩，排毒养颜',
        'services.acupuncture': '针灸',
        'services.acupuncture.long': '针灸理疗',
        'services.acupuncture.desc': '传统针灸，调理身体机能',
        'services.duration.30': '30分钟',
        'services.duration.90': '90分钟',
        'services.facial': '面部护理',
        'services.facial.desc': '专业面部护理，焕发肌肤活力'
    }
};

// 设置默认语言
let currentLang = localStorage.getItem('preferred-language') || 'zh';

// 更新页面文本
function updateContent(lang) {
    // 更新普通文本内容
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // 更新placeholder文本
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // 保存语言选择
    localStorage.setItem('preferred-language', lang);
    currentLang = lang;
}

// 添加语言切换事件监听
document.addEventListener('DOMContentLoaded', () => {
    // 初始化语言
    updateContent(currentLang);
    
    // 语言切换按钮事件
    document.querySelectorAll('[data-lang]').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const newLang = button.getAttribute('data-lang');
            updateContent(newLang);
        });
    });
}); 