import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { analyzeDeficiencies, analyzeToxicity, getLabel, type DeficiencyResult, type ToxicityResult } from "@/lib/analysis-engine";
import { nutrients, type Language } from "@/lib/survey-data";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { answers = {}, lang = "ar" as Language } = (location.state as any) || {};
  const isAr = lang === "ar";

  const results = useMemo(() => analyzeDeficiencies(answers), [answers]);
  const toxicityResults = useMemo(() => analyzeToxicity(answers), [answers]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"deficiency" | "toxicity">("deficiency");

  const t = {
    en: {
      title: "Linus Pauling — Your Analysis",
      subtitle: "Based on your responses, here are the potential nutrient issues detected:",
      noResults: "No significant deficiencies detected based on your answers. Great job maintaining your health!",
      noToxicity: "No signs of vitamin toxicity detected based on your answers.",
      bloodTests: "Recommended Blood Tests",
      foods: "Recommended Foods",
      science: "Scientific Explanation",
      toxicityExplanation: "Toxicity Explanation",
      high: "High Risk",
      moderate: "Moderate Risk",
      low: "Low Risk",
      restart: "Retake Survey",
      download: "Download Results as Image",
      disclaimer: "⚕️ These results are indicative only. Please consult a healthcare professional for proper diagnosis and treatment.",
      back: "Back to Home",
      deficiencyTab: "Deficiencies",
      toxicityTab: "Toxicity Risks",
    },
    ar: {
      title: "لينوس باولينغ — تحليلك",
      subtitle: "بناءً على إجاباتك، هذه المشاكل الغذائية المحتملة المكتشفة:",
      noResults: "لم يتم الكشف عن نقص كبير بناءً على إجاباتك. ممتاز في الحفاظ على صحتك!",
      noToxicity: "لم يتم اكتشاف أي علامات على تسمم الفيتامينات بناءً على إجاباتك.",
      bloodTests: "التحاليل المخبرية الموصى بها",
      foods: "الأطعمة الموصى بها",
      science: "الشرح العلمي",
      toxicityExplanation: "شرح التسمم",
      high: "خطر مرتفع",
      moderate: "خطر متوسط",
      low: "خطر منخفض",
      restart: "إعادة الاستبيان",
      download: "تحميل النتائج كصورة",
      disclaimer: "⚕️ هذه النتائج إرشادية فقط. يرجى استشارة أخصائي رعاية صحية للتشخيص والعلاج المناسب.",
      back: "العودة للرئيسية",
      deficiencyTab: "حالات النقص",
      toxicityTab: "مخاطر التسمم",
    },
  }[lang];

  const levelColors: Record<string, string> = {
    high: "bg-destructive/10 text-destructive border-destructive/30",
    moderate: "bg-amber-500/10 text-amber-700 border-amber-500/30",
    low: "bg-primary/10 text-primary border-primary/30",
  };

  const barColors: Record<string, string> = {
    high: "from-destructive to-destructive/70",
    moderate: "from-amber-500 to-amber-400",
    low: "from-primary to-sage-glow",
  };

  const toxBarColors: Record<string, string> = {
    high: "from-orange-600 to-red-500",
    moderate: "from-orange-400 to-amber-400",
    low: "from-yellow-400 to-amber-300",
  };

  const handleDownloadImage = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;
    const dpr = 2;
    const width = 800;
    const lineHeight = 28;
    const padding = 50;

    const allItems = [...results, ...toxicityResults.map(r => ({ ...r, isToxicity: true }))];
    let totalLines = 6;
    allItems.forEach((r) => {
      const n = nutrients[r.nutrientId];
      if (!n) return;
      totalLines += 3;
      totalLines += n.bloodTests.length;
      totalLines += 2;
      totalLines += n.foods.length;
      totalLines += 2;
    });
    totalLines += 3;

    const height = Math.max(400, padding * 2 + totalLines * lineHeight);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    ctx.fillStyle = "#f8faf8";
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = "#4a7c59";
    ctx.fillRect(0, 0, width, 80);
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 24px 'Montserrat', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(isAr ? "لينوس باولينغ — تقرير التحليل" : "Linus Pauling — Analysis Report", width / 2, 48);

    let y = 110;
    ctx.textAlign = isAr ? "right" : "left";
    const x = isAr ? width - padding : padding;

    results.forEach((r) => {
      const n = nutrients[r.nutrientId];
      if (!n) return;
      const levelLabel = r.level === "high" ? t.high : r.level === "moderate" ? t.moderate : t.low;
      const levelColor = r.level === "high" ? "#c0392b" : r.level === "moderate" ? "#e67e22" : "#4a7c59";

      ctx.fillStyle = "#1a2a1a";
      ctx.font = "bold 18px 'Montserrat', sans-serif";
      ctx.fillText(`${getLabel(n, lang)} — ${r.percentage}%`, x, y);
      y += lineHeight;

      ctx.fillStyle = levelColor;
      ctx.font = "bold 14px 'Inter', sans-serif";
      ctx.fillText(`● ${levelLabel}`, x, y);
      y += lineHeight;

      const barX = padding;
      const barW = width - padding * 2;
      ctx.fillStyle = "#e0e8e0";
      ctx.beginPath();
      ctx.roundRect(barX, y - 8, barW, 12, 6);
      ctx.fill();
      ctx.fillStyle = levelColor;
      ctx.beginPath();
      ctx.roundRect(barX, y - 8, barW * (r.percentage / 100), 12, 6);
      ctx.fill();
      y += lineHeight;

      ctx.fillStyle = "#4a7c59";
      ctx.font = "bold 14px 'Inter', sans-serif";
      ctx.fillText(`🧪 ${t.bloodTests}:`, x, y);
      y += lineHeight * 0.8;
      ctx.fillStyle = "#333";
      ctx.font = "14px 'Inter', sans-serif";
      n.bloodTests.forEach((bt) => {
        ctx.fillText(`  • ${getLabel(bt, lang)}`, x, y);
        y += lineHeight * 0.8;
      });
      y += lineHeight * 0.5;

      ctx.fillStyle = "#4a7c59";
      ctx.font = "bold 14px 'Inter', sans-serif";
      ctx.fillText(`🥗 ${t.foods}:`, x, y);
      y += lineHeight * 0.8;
      ctx.fillStyle = "#333";
      ctx.font = "14px 'Inter', sans-serif";
      n.foods.forEach((f) => {
        ctx.fillText(`  ✓ ${getLabel(f, lang)}`, x, y);
        y += lineHeight * 0.8;
      });

      y += lineHeight * 0.5;
      ctx.strokeStyle = "#d0d8d0";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(width - padding, y);
      ctx.stroke();
      y += lineHeight;
    });

    // Toxicity section
    if (toxicityResults.length > 0) {
      y += lineHeight;
      ctx.fillStyle = "#e67e22";
      ctx.font = "bold 20px 'Montserrat', sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(isAr ? "⚠️ مخاطر التسمم المحتملة" : "⚠️ Potential Toxicity Risks", width / 2, y);
      y += lineHeight * 1.5;
      ctx.textAlign = isAr ? "right" : "left";

      toxicityResults.forEach((r) => {
        const n = nutrients[r.nutrientId];
        if (!n) return;
        ctx.fillStyle = "#e67e22";
        ctx.font = "bold 16px 'Montserrat', sans-serif";
        ctx.fillText(`${getLabel(n, lang)} — ${r.percentage}%`, x, y);
        y += lineHeight * 1.2;
      });
    }

    y += lineHeight * 0.5;
    ctx.fillStyle = "#888";
    ctx.font = "12px 'Inter', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(t.disclaimer, width / 2, y);

    const link = document.createElement("a");
    link.download = "linus-pauling-report.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  if (!location.state) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">No survey data found.</p>
          <button onClick={() => navigate("/")} className="sage-gradient text-primary-foreground px-6 py-3 rounded-xl font-bold">
            Go Home
          </button>
        </div>
      </div>
    );
  }

  const renderNutrientCard = (r: DeficiencyResult | ToxicityResult, i: number, isToxicity = false) => {
    const n = nutrients[r.nutrientId];
    if (!n) return null;
    const isExpanded = expandedId === `${isToxicity ? "tox-" : ""}${r.nutrientId}`;
    const levelLabel = r.level === "high" ? t.high : r.level === "moderate" ? t.moderate : t.low;
    const colors = isToxicity ? toxBarColors : barColors;

    return (
      <div
        key={`${isToxicity ? "tox-" : ""}${r.nutrientId}`}
        className="glass-card-strong overflow-hidden opacity-0 animate-fade-up"
        style={{ animationDelay: `${i * 0.1}s` }}
      >
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h3 className="text-lg font-heading font-bold text-foreground">
              {isToxicity ? "⚠️ " : ""}{getLabel(n, lang)}
            </h3>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${levelColors[r.level]}`}>
              {levelLabel}
            </span>
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">
                {isToxicity ? (isAr ? "احتمالية التسمم" : "Toxicity Probability") : (isAr ? "احتمالية النقص" : "Deficiency Probability")}
              </span>
              <span className="font-bold text-foreground">{r.percentage}%</span>
            </div>
            <div className="deficiency-bar">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${colors[r.level]} transition-all duration-1000 ease-out`}
                style={{ width: `${r.percentage}%` }}
              />
            </div>
          </div>

          <button
            onClick={() => setExpandedId(isExpanded ? null : `${isToxicity ? "tox-" : ""}${r.nutrientId}`)}
            className="text-sm font-medium text-primary hover:underline transition-colors"
          >
            {isExpanded
              ? (isAr ? "إخفاء التفاصيل ▲" : "Hide Details ▲")
              : (isAr ? "شرح علمي ▼" : "Scientific Explanation ▼")}
          </button>
        </div>

        {isExpanded && (
          <div className="border-t border-border p-6 space-y-5 bg-muted/30 animate-fade-in">
            <div>
              <h4 className="font-heading font-bold text-foreground mb-2">
                {isToxicity ? t.toxicityExplanation : t.science}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {isToxicity && n.toxicityInfo
                  ? getLabel(n.toxicityInfo, lang)
                  : getLabel(n.scienceExplanation, lang)}
              </p>
            </div>

            <div>
              <h4 className="font-heading font-bold text-foreground mb-2">🧪 {t.bloodTests}</h4>
              <div className="flex flex-wrap gap-2">
                {n.bloodTests.map((bt, j) => (
                  <span key={j} className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-medium">
                    {getLabel(bt, lang)}
                  </span>
                ))}
              </div>
            </div>

            {!isToxicity && (
              <div>
                <h4 className="font-heading font-bold text-foreground mb-2">🥗 {t.foods}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {n.foods.map((f, j) => (
                    <div key={j} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/50 text-sm text-foreground">
                      <span className="text-primary">✓</span>
                      {getLabel(f, lang)}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {n.caffeineWarning && !isToxicity && (
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-3 text-sm text-destructive">
                {getLabel(n.caffeineWarning, lang)}
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background" dir={isAr ? "rtl" : "ltr"}>
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-8">
        <div className="text-center space-y-4 animate-fade-up">
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-foreground">{t.title}</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Tabs */}
        {toxicityResults.length > 0 && (
          <div className="flex gap-2 justify-center">
            <button
              onClick={() => setActiveTab("deficiency")}
              className={`px-5 py-2.5 rounded-xl font-heading font-bold text-sm transition-all ${
                activeTab === "deficiency" ? "sage-gradient text-primary-foreground shadow-md" : "bg-muted text-muted-foreground"
              }`}
            >
              {t.deficiencyTab} ({results.length})
            </button>
            <button
              onClick={() => setActiveTab("toxicity")}
              className={`px-5 py-2.5 rounded-xl font-heading font-bold text-sm transition-all ${
                activeTab === "toxicity" ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md" : "bg-muted text-muted-foreground"
              }`}
            >
              ⚠️ {t.toxicityTab} ({toxicityResults.length})
            </button>
          </div>
        )}

        {activeTab === "deficiency" ? (
          results.length === 0 ? (
            <div className="glass-card-strong p-8 text-center animate-scale-in">
              <div className="text-5xl mb-4">🎉</div>
              <p className="text-lg text-foreground">{t.noResults}</p>
            </div>
          ) : (
            <div className="space-y-4">
              {results.map((r, i) => renderNutrientCard(r, i, false))}
            </div>
          )
        ) : (
          toxicityResults.length === 0 ? (
            <div className="glass-card-strong p-8 text-center animate-scale-in">
              <div className="text-5xl mb-4">✅</div>
              <p className="text-lg text-foreground">{t.noToxicity}</p>
            </div>
          ) : (
            <div className="space-y-4">
              {toxicityResults.map((r, i) => renderNutrientCard(r, i, true))}
            </div>
          )
        )}

        <div className="glass-card p-4 text-center">
          <p className="text-sm text-muted-foreground">{t.disclaimer}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 rounded-xl text-muted-foreground font-medium hover:bg-muted transition-colors"
          >
            {t.back}
          </button>
          {(results.length > 0 || toxicityResults.length > 0) && (
            <button
              onClick={handleDownloadImage}
              className="glass-card px-6 py-3 font-medium text-foreground hover:bg-accent transition-colors"
            >
              🖼️ {t.download}
            </button>
          )}
          <button
            onClick={() => navigate("/survey", { state: { lang } })}
            className="sage-gradient text-primary-foreground px-6 py-3 rounded-xl font-heading font-bold hover:scale-105 transition-transform"
          >
            {t.restart}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;
