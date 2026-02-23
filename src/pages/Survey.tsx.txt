import { useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { questions, categoryLabels, type Language } from "@/lib/survey-data";

const Survey = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const lang: Language = (location.state as any)?.lang || "en";
  const isAr = lang === "ar";

  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [currentCategoryIdx, setCurrentCategoryIdx] = useState(0);

  const categories = useMemo(() => {
    const order: string[] = ["eyes", "skin", "digestion", "muscles", "neuro", "immune", "heart", "oral", "respiratory", "urinary", "hormonal", "infection"];
    return order.map((cat) => ({
      key: cat,
      label: categoryLabels[cat],
      questions: questions.filter((q) => q.category === cat),
    }));
  }, []);

  const currentCategory = categories[currentCategoryIdx];
  const totalQuestions = questions.length;
  const answeredCount = Object.keys(answers).length;
  const progress = (answeredCount / totalQuestions) * 100;

  const allCurrentAnswered = currentCategory.questions.every((q) => answers[q.id] !== undefined);

  const handleAnswer = (qId: string, value: boolean) => {
    setAnswers((prev) => ({ ...prev, [qId]: value }));
  };

  const handleNext = () => {
    if (currentCategoryIdx < categories.length - 1) {
      setCurrentCategoryIdx((i) => i + 1);
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
    } else {
      navigate("/results", { state: { answers, lang } });
    }
  };

  const handleBack = () => {
    if (currentCategoryIdx > 0) {
      setCurrentCategoryIdx((i) => i - 1);
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
    } else {
      navigate("/");
    }
  };

  const t = {
    en: { yes: "Yes", no: "No", next: "Next", back: "Back", finish: "See Results", of: "of", step: "Step" },
    ar: { yes: "نعم", no: "لا", next: "التالي", back: "رجوع", finish: "عرض النتائج", of: "من", step: "خطوة" },
  }[lang];

  return (
    <div className="min-h-screen bg-background" dir={isAr ? "rtl" : "ltr"}>
      {/* Header */}
      <div className="sticky top-0 z-20 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-2xl mx-auto px-4 py-4 space-y-3">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{t.step} {currentCategoryIdx + 1} {t.of} {categories.length}</span>
            <span>{answeredCount} / {totalQuestions}</span>
          </div>
          {/* Progress bar */}
          <div className="deficiency-bar">
            <div className="progress-fill h-full" style={{ width: `${progress}%` }} />
          </div>
          {/* Category tabs */}
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((cat, i) => {
              const isActive = i === currentCategoryIdx;
              const isDone = cat.questions.every((q) => answers[q.id] !== undefined);
              return (
                <button
                  key={cat.key}
                  onClick={() => { setCurrentCategoryIdx(i); setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50); }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? "sage-gradient text-primary-foreground shadow-md"
                      : isDone
                      ? "bg-primary/10 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  <span>{cat.label.icon}</span>
                  <span>{cat.label[lang]}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Questions */}
      <main className="max-w-2xl mx-auto px-4 py-8 space-y-4">
        {currentCategory.questions.map((q, i) => {
          const answered = answers[q.id];
          return (
            <div
              key={q.id}
              className="glass-card-strong p-6 space-y-4 opacity-0 animate-scale-in"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <p className="text-foreground font-medium leading-relaxed">{q[lang]}</p>
              <div className="flex gap-3">
                {[true, false].map((val) => (
                  <button
                    key={String(val)}
                    onClick={() => handleAnswer(q.id, val)}
                    className={`survey-option flex-1 text-center font-semibold rounded-xl transition-all duration-300 ${
                      answered === val ? "selected" : ""
                    }`}
                  >
                    {val ? t.yes : t.no}
                  </button>
                ))}
              </div>
            </div>
          );
        })}

        {/* Navigation */}
        <div className="flex justify-between pt-6">
          <button
            onClick={handleBack}
            className="px-6 py-3 rounded-xl text-muted-foreground font-medium hover:bg-muted transition-colors"
          >
            {t.back}
          </button>
          <button
            onClick={handleNext}
            disabled={!allCurrentAnswered}
            className={`px-8 py-3 rounded-xl font-heading font-bold transition-all duration-300 ${
              allCurrentAnswered
                ? "sage-gradient text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105"
                : "bg-muted text-muted-foreground cursor-not-allowed"
            }`}
          >
            {currentCategoryIdx === categories.length - 1 ? t.finish : t.next}
          </button>
        </div>
      </main>
    </div>
  );
};

export default Survey;
