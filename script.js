/**
 * HCL GUVI Landing Page - Interactive Script
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Language Data & Translation System ---
    const translations = {
        en: {
            name: 'English',
            native: 'English',
            isImplemented: true,
            data: {
                announcement: "🚀 Secure your future with Intel AIML — Master GenAI, Agentic AI, Deep Learning, LLM & MLOps.",
                announcement_cta: "Apply Now →",
                nav_live_classes: "LIVE Classes",
                nav_courses: "Courses",
                nav_practice: "Practice",
                nav_resources: "Resources",
                nav_login: "Login",
                nav_signup: "Sign Up",
                hero_badge: "🎓 Incubated by IIT Madras & IIM Ahmedabad",
                hero_title_1: "Learn to Code in",
                hero_title_2: "Your Native Language",
                hero_subtitle: "India's leading EdTech platform making quality tech education accessible to all. Join 3M+ learners breaking barriers and upskilling.",
                hero_cta_explore: "Explore Courses",
                hero_cta_free: "Start Free Course",
                stat_learners: "Learners",
                stat_courses: "Courses",
                stat_problems: "Coding Problems",
                stat_rating: "Google Rating",
                live_tag: "FLAGSHIP PROGRAMS",
                live_title: "Live Classes + Placement Guidance",
                live_subtitle: "HCL GUVI's expert-led tech programs for beginners and professionals. Master in-demand skills with IITM Pravartak certifications.",
                practice_tag: "PRACTICE & LEARN",
                practice_title: "Learn. Practice. Earn. Have Fun!",
                practice_subtitle: "Enhance your coding skills with HCL GUVI's interactive practice platforms designed to help you master programming effortlessly.",
                lang_choose: "CHOOSE LANGUAGE",
                lang_switch: "Switch Language",
                toast_lang_changed: "Language changed to English"
            }
        },
        ta: {
            name: 'Tamil',
            native: 'தமிழ்',
            isImplemented: true,
            data: {
                announcement: "🚀 Intel AIML உடன் உங்கள் எதிர்காலத்தைப் பாதுகாக்கவும் — மாஸ்டர் GenAI, Agentic AI, Deep Learning, LLM & MLOps.",
                announcement_cta: "இப்பொழுதே விண்ணப்பிக்கவும் →",
                nav_live_classes: "நேரடி வகுப்புகள்",
                nav_courses: "படிப்புகள்",
                nav_practice: "பயிற்சி",
                nav_resources: "வளங்கள்",
                nav_login: "உள்நுழைய",
                nav_signup: "பதிவு செய்க",
                hero_badge: "🎓 ஐஐடி மெட்ராஸ் & ஐஐஎம் அகமதாபாத் இன்குபேட்டட்",
                hero_title_1: "குறியீடு எழுத கற்றுக்கொள்ளுங்கள்",
                hero_title_2: "உங்கள் தாய் மொழியில்",
                hero_subtitle: "இந்தியாவின் முன்னணி எட்டெக் தளம், தரமான தொழில்நுட்பக் கல்வியை அனைவருக்கும் அணுகக்கூடியதாக மாற்றுகிறது. 3M+ கற்பவர்களுடன் இணையுங்கள்.",
                hero_cta_explore: "படிப்புகளை ஆராயுங்கள்",
                hero_cta_free: "இலவச படிப்பை தொடங்குங்கள்",
                stat_learners: "கற்பவர்கள்",
                stat_courses: "படிப்புகள்",
                stat_problems: "குறியீட்டு சிக்கல்கள்",
                stat_rating: "கூகிள் மதிப்பீடு",
                live_tag: "முக்கிய நிகழ்ச்சிகள்",
                live_title: "நேரடி வகுப்புகள் + வேலை வாய்ப்பு",
                live_subtitle: "ஆரம்பநிலையாளர்கள் மற்றும் நிபுணர்களுக்கான HCL GUVI இன் நிபுணர் தலைமையிலான தொழில்நுட்ப திட்டங்கள்.",
                practice_tag: "பயிற்சி மற்றும் கற்றல்",
                practice_title: "கற்றுக்கொள்ளுங்கள். பயிற்சி செய்யுங்கள். சம்பாதிக்கவும்!",
                practice_subtitle: "உங்கள் குறியீட்டு திறன்களை சிரமமின்றி மேம்படுத்த HCL GUVI இன் ஊடாடும் பயிற்சி தளங்களை பயன்படுத்துங்கள்.",
                lang_choose: "மொழியைத் தேர்ந்தெடுக்கவும்",
                lang_switch: "மொழி மாற்ற",
                toast_lang_changed: "மொழி தமிழுக்கு மாற்றப்பட்டது"
            }
        },
        hi: {
            name: 'Hindi',
            native: 'हिन्दी',
            isImplemented: true,
            data: {
                announcement: "🚀 Intel AIML के साथ अपना भविष्य सुरक्षित करें — मास्टर GenAI, Agentic AI, Deep Learning, LLM & MLOps।",
                announcement_cta: "अभी आवेदन करें →",
                nav_live_classes: "लाइव कक्षाएं",
                nav_courses: "पाठ्यक्रम",
                nav_practice: "अभ्यास",
                nav_resources: "संसाधन",
                nav_login: "लॉग इन",
                nav_signup: "साइन अप",
                hero_badge: "🎓 IIT मद्रास और IIM अहमदाबाद द्वारा इनक्यूबेटेड",
                hero_title_1: "कोड करना सीखें",
                hero_title_2: "अपनी मातृभाषा में",
                hero_subtitle: "भारत का अग्रणी एडटेक प्लेटफॉर्म जो गुणवत्तापूर्ण तकनीकी शिक्षा को सभी तक पहुंचाता है। 30 लाख+ शिक्षार्थियों से जुड़ें।",
                hero_cta_explore: "पाठ्यक्रम देखें",
                hero_cta_free: "मुफ्त कोर्स शुरू करें",
                stat_learners: "शिक्षार्थी",
                stat_courses: "पाठ्यक्रम",
                stat_problems: "कोडिंग समस्याएं",
                stat_rating: "गूगल रेटिंग",
                live_tag: "फ्लैगशिप प्रोग्राम",
                live_title: "लाइव क्लासेस + प्लेसमेंट मार्गदर्शन",
                live_subtitle: "शुरुआती और पेशेवरों के लिए HCL GUVI के विशेषज्ञ-नीत तकनीकी कार्यक्रम।",
                practice_tag: "अभ्यास और सीखें",
                practice_title: "सीखें। अभ्यास करें। कमाएं!",
                practice_subtitle: "अपने कोडिंग कौशल को आसानी से बेहतर बनाने के लिए HCL GUVI के इंटरैक्टिव अभ्यास प्लेटफॉर्म का उपयोग करें।",
                lang_choose: "भाषा चुनें",
                lang_switch: "भाषा बदलें",
                toast_lang_changed: "भाषा हिन्दी में बदल दी गई है"
            }
        },
        te: {
            name: 'Telugu',
            native: 'తెలుగు',
            isImplemented: true,
            data: {
                announcement: "🚀 Intel AIML తో మీ భవిష్యత్తును సురక్షితం చేసుకోండి — మాస్టర్ GenAI, Agentic AI, Deep Learning, LLM & MLOps.",
                announcement_cta: "ఇప్పుడే దరఖాస్తు చేసుకోండి →",
                nav_live_classes: "లైవ్ క్లాసులు",
                nav_courses: "కోర్సులు",
                nav_practice: "ప్రాక్టీస్",
                nav_resources: "వనరులు",
                nav_login: "లాగిన్",
                nav_signup: "సైన్ అప్",
                hero_badge: "🎓 IIT మద్రాస్ & IIM అహ్మదాబాద్ ఇంక్యుబేటెడ్",
                hero_title_1: "కోడింగ్ నేర్చుకోండి",
                hero_title_2: "మీ మాతృభాషలో",
                hero_subtitle: "అందరికీ నాణ్యమైన టెక్ విద్యను అందుబాటులో ఉంచుతున్న భారతదేశపు ప్రముఖ ఎడ్‌టెక్ వేదిక. 3M+ అభ్యాసకులతో చేరండి.",
                hero_cta_explore: "కోర్సులను అన్వేషించండి",
                hero_cta_free: "ఉచిత కోర్సు ప్రారంభించండి",
                stat_learners: "అభ్యాసకులు",
                stat_courses: "కోర్సులు",
                stat_problems: "కోడింగ్ సమస్యలు",
                stat_rating: "గూగుల్ రేటింగ్",
                live_tag: "ఫ్లాగ్‌షిప్ ప్రోగ్రామ్‌లు",
                live_title: "లైవ్ క్లాసులు + ప్లేస్‌మెంట్ గైడెన్స్",
                live_subtitle: "ప్రారంభకులు మరియు నిపుణుల కోసం HCL GUVI నిపుణుల నేతృత్వంలోని టెక్ ప్రోగ్రామ్‌లు.",
                practice_tag: "ప్రాక్టీస్ & నేర్చుకోండి",
                practice_title: "నేర్చుకోండి. ప్రాక్టీస్ చేయండి. సంపాదించండి!",
                practice_subtitle: "HCL GUVI యొక్క ఇంటరాక్టివ్ ప్రాక్టీస్ ప్లాట్‌ఫారమ్‌లతో మీ కోడింగ్ నైపుణ్యాలను సులభంగా మెరుగుపరచండి.",
                lang_choose: "భాషను ఎంచుకోండి",
                lang_switch: "భాష మార్చండి",
                toast_lang_changed: "భాష తెలుగుకు మార్చబడింది"
            }
        },
        kn: {
            name: 'Kannada',
            native: 'ಕನ್ನಡ',
            isImplemented: true,
            data: {
                announcement: "🚀 Intel AIML ನೊಂದಿಗೆ ನಿಮ್ಮ ಭವಿಷ್ಯವನ್ನು ಸುರಕ್ಷಿತಗೊಳಿಸಿ — ಮಾಸ್ಟರ್ GenAI, Agentic AI, Deep Learning, LLM & MLOps.",
                announcement_cta: "ಈಗ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ →",
                nav_live_classes: "ಲೈವ್ ತರಗತಿಗಳು",
                nav_courses: "ಕೋರ್ಸ್‌ಗಳು",
                nav_practice: "ಅಭ್ಯಾಸ",
                nav_resources: "ಸಂಪನ್ಮೂಲಗಳು",
                nav_login: "ಲಾಗಿನ್",
                nav_signup: "ಸೈನ್ ಅಪ್",
                hero_badge: "🎓 IIT ಮದ್ರಾಸ್ & IIM ಅಹಮದಾಬಾದ್ ಇನ್ಕ್ಯುಬೇಟೆಡ್",
                hero_title_1: "ಕೋಡಿಂಗ್ ಕಲಿಯಿರಿ",
                hero_title_2: "ನಿಮ್ಮ ಮಾತೃಭಾಷೆಯಲ್ಲಿ",
                hero_subtitle: "ಗುಣಮಟ್ಟದ ತಂತ್ರಜ್ಞಾನ ಶಿಕ್ಷಣವನ್ನು ಎಲ್ಲರಿಗೂ ತಲುಪಿಸುತ್ತಿರುವ ಭಾರತದ ಪ್ರಮುಖ ಎಡ್-ಟೆಕ್ ವೇದಿಕೆ. 3M+ ಕಲಿಯುವವರೊಂದಿಗೆ ಸೇರಿ.",
                hero_cta_explore: "ಕೋರ್ಸ್‌ಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
                hero_cta_free: "ಉಚಿತ ಕೋರ್ಸ್ ಪ್ರಾರಂಭಿಸಿ",
                stat_learners: "ಕಲಿಯುವವರು",
                stat_courses: "ಕೋರ್ಸ್‌ಗಳು",
                stat_problems: "ಕೋಡಿಂಗ್ ಸಮಸ್ಯೆಗಳು",
                stat_rating: "ಗೂಗಲ್ ರೇಟಿಂಗ್",
                live_tag: "ಫ್ಲ್ಯಾಗ್‌ಶಿಪ್ ಕಾರ್ಯಕ್ರಮಗಳು",
                live_title: "ಲೈವ್ ತರಗತಿಗಳು + ಪ್ಲೇಸ್‌ಮೆಂಟ್ ಮಾರ್ಗದರ್ಶನ",
                live_subtitle: "ಆರಂಭಿಕರಿಗಾಗಿ ಮತ್ತು ವೃತ್ತಿಪರರಿಗಾಗಿ HCL GUVI ನ ತಜ್ಞರು ನಡೆಸುವ ಟೆಕ್ ಕಾರ್ಯಕ್ರಮಗಳು.",
                practice_tag: "ಅಭ್ಯಾಸ ಮತ್ತು ಕಲಿಯಿರಿ",
                practice_title: "ಕಲಿಯಿರಿ. ಅಭ್ಯಾಸ ಮಾಡಿ. ಸಂಪಾದಿಸಿ!",
                practice_subtitle: "HCL GUVI ನ ಸಂವಾದಾತ್ಮಕ ಅಭ್ಯಾಸ ವೇದಿಕೆಗಳೊಂದಿಗೆ ನಿಮ್ಮ ಕೋಡಿಂಗ್ ಕೌಶಲ್ಯಗಳನ್ನು ಸುಲಭವಾಗಿ ಹೆಚ್ಚಿಸಿಕೊಳ್ಳಿ.",
                lang_choose: "ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
                lang_switch: "ಭಾಷೆ ಬದಲಾಯಿಸಿ",
                toast_lang_changed: "ಭಾಷೆಯನ್ನು ಕನ್ನಡಕ್ಕೆ ಬದಲಾಯಿಸಲಾಗಿದೆ"
            }
        },
        ml: {
            name: 'Malayalam',
            native: 'മലയാളം',
            isImplemented: true,
            data: {
                announcement: "🚀 Intel AIML വഴി നിങ്ങളുടെ ഭാവി സുരക്ഷിതമാക്കൂ — മാസ്റ്റർ GenAI, Agentic AI, Deep Learning, LLM & MLOps.",
                announcement_cta: "ഇപ്പോൾ അപേക്ഷിക്കുക →",
                nav_live_classes: "ലൈവ് ക്ലാസുകൾ",
                nav_courses: "കോഴ്സുകൾ",
                nav_practice: "പരിശീലനം",
                nav_resources: "വിഭവങ്ങൾ",
                nav_login: "ലോഗിൻ",
                nav_signup: "സൈൻ അപ്പ്",
                hero_badge: "🎓 ഐഐടി മദ്രാസ് & ഐഐഎം അഹമ്മദാബാദ് ഇൻകുബേറ്റഡ്",
                hero_title_1: "കോഡിംഗ് പഠിക്കാം",
                hero_title_2: "നിങ്ങളുടെ മാതൃഭാഷയിൽ",
                hero_subtitle: "ഗുണനിലവാരമുള്ള സാങ്കേതിക വിദ്യാഭ്യാസം എല്ലാവർക്കും ലഭ്യമാക്കുന്ന ഇന്ത്യയിലെ പ്രമുഖ എഡ്‌ടെക് പ്ലാറ്റ്‌ഫോം. 3M+ പഠിതാക്കൾക്കൊപ്പം ചേരുക.",
                hero_cta_explore: "കോഴ്സുകൾ പര്യവേക്ഷണം ചെയ്യുക",
                hero_cta_free: "സൗജന്യ കോഴ്സ് ആരംഭിക്കുക",
                stat_learners: "പഠിതാക്കൾ",
                stat_courses: "കോഴ്സുകൾ",
                stat_problems: "കോഡിംഗ് പ്രശ്നങ്ങൾ",
                stat_rating: "ഗൂഗിൾ റേറ്റിംഗ്",
                live_tag: "ഫ്ലാഗ്‌ഷിപ്പ് പ്രോഗ്രാമുകൾ",
                live_title: "ലൈവ് ക്ലാസുകൾ + പ്ലേസ്‌മെൻ്റ് ഗൈഡൻസ്",
                live_subtitle: "തുടക്കക്കാർക്കും പ്രൊഫഷണലുകൾക്കുമായി HCL GUVI-യുടെ വിദഗ്ദ്ധർ നയിക്കുന്ന ടെക് പ്രോഗ്രാമുകൾ.",
                practice_tag: "പരിശീലനവും പഠനവും",
                practice_title: "പഠിക്കുക. പരിശീലിക്കുക. സമ്പാദിക്കുക!",
                practice_subtitle: "HCL GUVI-യുടെ സംവേദനാത്മക പരിശീലന പ്ലാറ്റ്‌ഫോമുകൾ ഉപയോഗിച്ച് നിങ്ങളുടെ കോഡിംഗ് കഴിവുകൾ മെച്ചപ്പെടുത്തുക.",
                lang_choose: "ഭാഷ തിരഞ്ഞെടുക്കുക",
                lang_switch: "ഭാഷ മാറ്റുക",
                toast_lang_changed: "ഭാഷ മലയാളത്തിലേക്ക് മാറ്റിയിരിക്കുന്നു"
            }
        },
        mr: {
            name: 'Marathi',
            native: 'मराठी',
            isImplemented: true,
            data: {
                announcement: "🚀 Intel AIML सह आपले भविष्य सुरक्षित करा — मास्टर GenAI, Agentic AI, Deep Learning, LLM & MLOps.",
                announcement_cta: "आता अर्ज करा →",
                nav_live_classes: "थेट वर्ग",
                nav_courses: "अभ्यासक्रम",
                nav_practice: "सराव",
                nav_resources: "संसाधने",
                nav_login: "लॉगिन",
                nav_signup: "साइन अप",
                hero_badge: "🎓 IIT मद्रास आणि IIM अहमदाबाद इनक्युबेटेड",
                hero_title_1: "कोडिंग शिका",
                hero_title_2: "तुमच्या मातृभाषेत",
                hero_subtitle: "दर्जेदार तंत्रज्ञान शिक्षण सर्वांना उपलब्ध करून देणारे भारतातील अग्रगण्य एडटेक प्लॅटफॉर्म. 30 लाख+ विद्यार्थ्यांमध्ये सामील व्हा.",
                hero_cta_explore: "अभ्यासक्रम एक्सप्लोर करा",
                hero_cta_free: "मोफत अभ्यासक्रम सुरू करा",
                stat_learners: "विद्यार्थी",
                stat_courses: "अभ्यासक्रम",
                stat_problems: "कोडिंग समस्या",
                stat_rating: "गुगल रेटिंग",
                live_tag: "फ्लॅगशिप प्रोग्राम्स",
                live_title: "लाइव्ह क्लासेस + प्लेसमेंट मार्गदर्शन",
                live_subtitle: "नवशिक्यांसाठी आणि व्यावसायिकांसाठी HCL GUVI चे तज्ञ-नेतृत्वाचे तंत्रज्ञान कार्यक्रम.",
                practice_tag: "सराव आणि शिक्षण",
                practice_title: "शिका. सराव करा. कमवा!",
                practice_subtitle: "HCL GUVI च्या संवादात्मक सराव प्लॅटफॉर्मसह आपली कोडिंग कौशल्ये सहजपणे सुधारा.",
                lang_choose: "भाषा निवडा",
                lang_switch: "भाषा बदला",
                toast_lang_changed: "भाषा मराठीत बदलली आहे"
            }
        },
        bn: {
            name: 'Bengali',
            native: 'বাংলা',
            isImplemented: true,
            data: {
                announcement: "🚀 Intel AIML এর সাথে আপনার ভবিষ্যত সুরক্ষিত করুন — মাস্টার GenAI, Agentic AI, Deep Learning, LLM & MLOps।",
                announcement_cta: "এখনই আবেদন করুন →",
                nav_live_classes: "লাইভ ক্লাস",
                nav_courses: "কোর্সগুলি",
                nav_practice: "অনুশীলন",
                nav_resources: "সম্পদ",
                nav_login: "লগইন",
                nav_signup: "সাইন আপ",
                hero_badge: "🎓 আইআইটি মাদ্রাজ এবং আইআইএম আহমেদাবাদ ইনকিউবেটেড",
                hero_title_1: "কোডিং শিখুন",
                hero_title_2: "আপনার মাতৃভাষায়",
                hero_subtitle: "ভারতের শীর্ষস্থানীয় এডটেক প্ল্যাটফর্ম যা মানসম্মত প্রযুক্তি শিক্ষাকে সবার কাছে অ্যাক্সেসযোগ্য করে তোলে। 30 লাখ+ শিক্ষার্থীদের সাথে যোগ দিন।",
                hero_cta_explore: "কোর্সগুলো অন্বেষণ করুন",
                hero_cta_free: "ফ্রি কোর্স শুরু করুন",
                stat_learners: "শিক্ষার্থী",
                stat_courses: "কোর্সগুলি",
                stat_problems: "কোডিং সমস্যা",
                stat_rating: "গুগল রেটিং",
                live_tag: "ফ্ল্যাগশিপ প্রোগ্রাম",
                live_title: "লাইভ ক্লাস + প্লেসমেন্ট গাইডেন্স",
                live_subtitle: "নতুন এবং পেশাদারদের জন্য HCL GUVI এর বিশেষজ্ঞ-নেতৃত্বাধীন প্রযুক্তি প্রোগ্রাম।",
                practice_tag: "অনুশীলন ও শিখুন",
                practice_title: "শিখুন। অনুশীলন করুন। উপার্জন করুন!",
                practice_subtitle: "HCL GUVI এর ইন্টারেক্টিভ প্ল্যাটফর্মের সাথে আপনার কোডিং দক্ষতা বাড়ান।",
                lang_choose: "ভাষা নির্বাচন করুন",
                lang_switch: "ভাষা পরিবর্তন করুন",
                toast_lang_changed: "ভাষা বাংলায় পরিবর্তন করা হয়েছে"
            }
        },
        gu: {
            name: 'Gujarati',
            native: 'ગુજરાતી',
            isImplemented: true,
            data: {
                announcement: "🚀 Intel AIML સાથે તમારું ભવિષ્ય સુરક્ષિત કરો — માસ્ટર GenAI, Agentic AI, Deep Learning, LLM & MLOps.",
                announcement_cta: "હવે અરજી કરો →",
                nav_live_classes: "લાઇવ ક્લાસ",
                nav_courses: "કોર્સ",
                nav_practice: "પ્રેક્ટિસ",
                nav_resources: "સંસાધનો",
                nav_login: "લૉગિન",
                nav_signup: "સાઇન અપ",
                hero_badge: "🎓 IIT મદ્રાસ અને IIM અમદાવાદ ઇન્ક્યુબેટેડ",
                hero_title_1: "કોડિંગ શીખો",
                hero_title_2: "તમારી માતૃભાષામાં",
                hero_subtitle: "ભારતનું અગ્રણી એડટેક પ્લેટફોર્મ જે ગુણવત્તાયુક્ત તકનીકી શિક્ષણને બધા માટે સુલભ બનાવે છે. 30 લાખ+ શીખનારાઓ સાથે જોડાઓ.",
                hero_cta_explore: "કોર્સ માટે અન્વેષણ કરો",
                hero_cta_free: "મફત કોર્સ શરૂ કરો",
                stat_learners: "શીખનારાઓ",
                stat_courses: "કોર્સ",
                stat_problems: "કોડિંગ સમસ્યાઓ",
                stat_rating: "ગુગલ રેટિંગ",
                live_tag: "ફ્લેગશિપ પ્રોગ્રામ્સ",
                live_title: "લાઇવ ક્લાસ + પ્લેસમેન્ટ માર્ગદર્શન",
                live_subtitle: "નવા નિશાળીયા અને વ્યાવસાયિકો માટે HCL GUVI ના નિષ્ણાતની આગેવાની હેઠળના ટેક પ્રોગ્રામ્સ.",
                practice_tag: "પ્રેક્ટિસ અને શીખો",
                practice_title: "શીખો. પ્રેક્ટિસ કરો. કમાઓ!",
                practice_subtitle: "HCL GUVI ના ઇન્ટરેક્ટિવ પ્રેક્ટિસ પ્લેટફોર્મ સાથે તમારી કોડિંગ કુશળતા સરળતાથી વધારો.",
                lang_choose: "ભાષા પસંદ કરો",
                lang_switch: "ભાષા બદલો",
                toast_lang_changed: "ભાષા ગુજરાતીમાં બદલાઈ ગઈ છે"
            }
        },
    };

    let currentLanguage = 'en';

    // UI Elements
    const langBtn = document.getElementById('lang-switch-btn');
    const langBtnText = document.getElementById('lang-btn-text');
    const langDropdown = document.getElementById('lang-dropdown');
    const langDropdownList = document.getElementById('lang-dropdown-list');
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');

    // Populate Dropdown Options
    function renderLanguageOptions() {
        langDropdownList.innerHTML = '';

        Object.keys(translations).forEach(key => {
            const lang = translations[key];
            const div = document.createElement('div');

            let classNames = 'lang-option';
            if (key === currentLanguage) classNames += ' active';
            if (!lang.isImplemented) classNames += ' coming-soon';

            div.className = classNames;
            div.innerHTML = `
                <span class="lang-name">${lang.name}</span>
                <span class="lang-native">${lang.native}</span>
            `;

            if (lang.isImplemented) {
                div.addEventListener('click', () => {
                    setLanguage(key);
                    toggleLangDropdown(false);
                });
            }

            langDropdownList.appendChild(div);
        });
    }

    // Setting Language
    function setLanguage(langKey) {
        if (!translations[langKey] || !translations[langKey].isImplemented) return;

        // Update state logic
        currentLanguage = langKey;
        const langData = translations[langKey].data;

        // Re-render dropdown to update active class
        renderLanguageOptions();

        // Remove pulse from button once user interacts
        langBtn.classList.remove('pulse');

        // Traverse DOM for data-i18n attributes
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (langData[key]) {
                // If it's a gradient text within an h1, we need to be careful with innerHTML
                if (el.classList.contains('gradient-text')) {
                    el.innerText = langData[key];
                } else if (el.innerHTML.includes('<') && !el.classList.contains('announcement-text')) {
                    // Try to preserve nested structured tags if necessary, but innerText works for mostly 95% cases
                    el.innerText = langData[key];
                } else {
                    el.innerText = langData[key];
                }
            }
        });

        // Update btn text
        if (langData['lang_switch']) {
            langBtnText.innerText = langData['lang_switch'];
        }

        // Show toast
        showToast(langData['toast_lang_changed'] || `Language changed to ${translations[langKey].name}`);
    }

    // Toggle Dropdown Display
    let dropdownTimeout;
    function toggleLangDropdown(show) {
        if (show) {
            langDropdown.classList.add('show');
        } else {
            langDropdown.classList.remove('show');
        }
    }

    // Language button listeners
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isShowing = langDropdown.classList.contains('show');
        toggleLangDropdown(!isShowing);
    });

    // Close dropdown on outside click
    document.addEventListener('click', (e) => {
        if (!e.target.closest('#lang-switch-container')) {
            toggleLangDropdown(false);
        }
    });

    // Toast logic
    let toastTimeout;
    function showToast(msg) {
        toastMessage.innerText = msg;
        toast.classList.add('show');

        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    // Initialize 
    renderLanguageOptions();

    // --- 2. Mobile Responsive Nav / Hamburger ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Simple animation logic for hamburger lines could go here
    });

    // Mobile nav disappears when clicking link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // --- 3. Stat Counter Animations ---
    const statsElements = document.querySelectorAll('.stats-number');
    let hasAnimatedStats = false;

    // Formatting large numbers
    function formatNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M+';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(0) + 'K+';
        }
        return num + '+';
    }

    function animateStats() {
        statsElements.forEach(statEl => {
            const target = +statEl.getAttribute('data-target');
            const duration = 2000; // ms
            const stepTime = Math.abs(Math.floor(duration / 60)); // 60fps
            let current = 0;
            // Easing logic could be added, but a linear interval with large steps works for big numbers
            const increment = target / (duration / stepTime);

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    statEl.innerText = formatNumber(target);
                    clearInterval(timer);
                } else {
                    statEl.innerText = Math.floor(current).toLocaleString();
                }
            }, stepTime);
        });
    }

    // Intersection Observer to trigger stats animation when visible
    const statsSection = document.getElementById('stats');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !hasAnimatedStats) {
                animateStats();
                hasAnimatedStats = true;
                observer.unobserve(statsSection);
            }
        }, { threshold: 0.5 });

        observer.observe(statsSection);
    }

    // --- 4. Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
            navbar.style.background = 'rgba(13, 17, 23, 0.95)';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.background = 'rgba(13, 17, 23, 0.85)';
        }
    });

    // --- 5. Geolocation & Default Language ---
    function detectLocation() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;

                    // Rough bounding box for Tamil Nadu
                    const isTamilNadu = (lat >= 8.0 && lat <= 13.6 && lon >= 76.0 && lon <= 80.5);

                    // Rough bounding box for Maharashtra
                    const isMaharashtra = (lat >= 15.6 && lat <= 22.0 && lon >= 72.6 && lon <= 80.9);

                    if (isMaharashtra) {
                        console.log("Location detected: Maharashtra. Switching to Marathi.");
                        setLanguage('mr');
                    } else if (isTamilNadu) {
                        console.log("Location detected: Tamil Nadu. Switching to Tamil.");
                        setLanguage('ta');
                    } else {
                        console.log("Location outside set regions. Defaulting to Chennai (Tamil).");
                        setLanguage('ta');
                    }
                },
                (error) => {
                    // Error, permission denied, or timeout
                    console.error("Location access denied or failed:", error.message, "- Defaulting to Chennai (Tamil).");
                    setLanguage('ta');
                },
                { timeout: 5000 }
            );
        } else {
            console.log("Geolocation not supported by this browser. Defaulting to Chennai (Tamil).");
            setLanguage('ta');
        }
    }

    // Delay the location request slightly so it doesn't block initial page render
    setTimeout(detectLocation, 1000);

});
