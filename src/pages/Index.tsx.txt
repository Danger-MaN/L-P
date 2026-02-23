import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Language } from "@/lib/survey-data";
import { useTheme } from "@/hooks/use-theme";
import { Moon, Sun } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const navigate = useNavigate();
  const [lang, setLang] = useState<Language>("ar");
  const { isDark, toggle: toggleTheme } = useTheme();

  const content = {
    en: {
      badge: "Data-Driven Screening Tool",
      title: "Linus Pauling",
      subtitle: "Identify potential nutrient deficiencies based on your symptoms. Answer simple Yes/No questions grouped by body systems, and receive a personalized analysis with dietary recommendations.",
      disclaimer: "⚕️ This tool is for educational screening only — not a medical diagnosis. Always consult a healthcare professional.",
      start: "Start Analysis",
      langSwitch: "العربية",
      features: [
        { icon: "🔬", title: "Scientific Approach", desc: "Symptom-to-deficiency mapping based on clinical research" },
        { icon: "🥗", title: "Personalized Nutrition", desc: "Tailored food recommendations for your deficiencies" },
        { icon: "🧪", title: "Lab Test Guidance", desc: "Know exactly which blood tests to request" },
        { icon: "🧠", title: "Understand Why", desc: "Scientific explanations for each deficiency" },
      ],
    },
    ar: {
      badge: "أداة فحص مبنية على البيانات",
      title: "لينوس باولينغ",
      subtitle: "حدد حالات نقص العناصر الغذائية المحتملة بناءً على أعراضك. أجب على أسئلة بسيطة (نعم/لا) مصنفة حسب أجهزة الجسم، واحصل على تحليل مخصص مع توصيات غذائية.",
      disclaimer: "⚕️ هذه الأداة للفحص التثقيفي فقط — وليست تشخيصاً طبياً. استشر دائماً أخصائي الرعاية الصحية.",
      start: "ابدأ التحليل",
      langSwitch: "English",
      features: [
        { icon: "🔬", title: "منهج علمي", desc: "ربط الأعراض بالنقص بناءً على الأبحاث السريرية" },
        { icon: "🥗", title: "تغذية مخصصة", desc: "توصيات غذائية مخصصة لحالات النقص لديك" },
        { icon: "🧪", title: "إرشاد التحاليل", desc: "اعرف بالضبط أي تحاليل دم تطلبها" },
        { icon: "🧠", title: "افهم لماذا", desc: "شروحات علمية لكل حالة نقص" },
      ],
    },
  };

  const t = content[lang];
  const isAr = lang === "ar";

  return (
    <div className="min-h-screen bg-background relative overflow-hidden" dir={isAr ? "rtl" : "ltr"}>
      {/* Hero background */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Top bar: Language + Theme toggles */}
      <div className="relative z-10 flex justify-end items-center gap-2 p-4 sm:p-6">
        <button
          onClick={toggleTheme}
          className="glass-card p-2.5 text-foreground hover:bg-accent transition-colors"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
        <button
          onClick={() => setLang(lang === "en" ? "ar" : "en")}
          className="glass-card px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors"
        >
          {t.langSwitch}
        </button>
      </div>

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 pb-20">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-up">
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20">
            {t.badge}
          </span>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-foreground leading-tight">
            <a href="https://en.wikipedia.org/wiki/Linus_Pauling" target="_blank" rel="noopener noreferrer" className="text-gradient-sage hover:opacity-80 transition-opacity">
              {isAr ? "لينوس باولينغ" : "Linus Pauling"}
            </a>
            <br />
            <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-muted-foreground leading-relaxed mt-4 block">
              {isAr
                ? "معظم الأمراض ليست سوى تعبير مادي عن اختلال الوظائف الحيوية نتيجة نقص واختلال في المواد الخام اللازمة للجسم"
                : "Most diseases are merely a physical manifestation of biological dysfunction, resulting from a deficiency or imbalance in the body's essential raw materials"}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>

          {/* Disclaimer */}
          <div className="glass-card px-6 py-3 max-w-xl mx-auto">
            <p className="text-sm text-muted-foreground">{t.disclaimer}</p>
          </div>

          {/* CTA */}
          <button
            onClick={() => navigate("/survey", { state: { lang } })}
            className="sage-gradient text-primary-foreground font-heading font-bold text-lg px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-pulse-sage"
          >
            {t.start}
          </button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 max-w-5xl mx-auto w-full">
          {t.features.map((f, i) => (
            <div
              key={i}
              className="glass-card p-6 text-center space-y-3 opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
            >
              <div className="text-3xl">{f.icon}</div>
              <h3 className="font-heading font-bold text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer signature */}
      <footer className="relative z-10 pb-6 text-center">
        <p className="text-sm text-muted-foreground/60 font-heading">
          {isAr ? "بواسطة إدريسيوس" : "By Idrisius"}
        </p>
      </footer>
    </div>
  );
};

export default Index;
