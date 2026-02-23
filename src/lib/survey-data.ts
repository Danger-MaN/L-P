export type Language = "en" | "ar";

export interface SurveyQuestion {
  id: string;
  category: "eyes" | "skin" | "digestion" | "muscles" | "neuro" | "immune" | "heart" | "oral" | "respiratory" | "urinary" | "hormonal" | "infection";
  en: string;
  ar: string;
  deficiencies: { nutrient: string; score: number }[];
  toxicity?: { nutrient: string; score: number }[];
}

export interface NutrientInfo {
  id: string;
  en: string;
  ar: string;
  unit: string;
  bloodTests: { en: string; ar: string }[];
  foods: { en: string; ar: string }[];
  scienceExplanation: { en: string; ar: string };
  caffeineWarning?: { en: string; ar: string };
  toxicityInfo?: { en: string; ar: string };
}

export const categoryLabels: Record<string, { en: string; ar: string; icon: string }> = {
  eyes: { en: "Eyes & Vision", ar: "العيون والرؤية", icon: "👁️" },
  skin: { en: "Skin, Hair & Nails", ar: "البشرة والشعر والأظافر", icon: "✨" },
  digestion: { en: "Digestion & Energy", ar: "الهضم والطاقة", icon: "⚡" },
  muscles: { en: "Muscles & Bones", ar: "العضلات والعظام", icon: "💪" },
  neuro: { en: "Nervous System & Mood", ar: "الجهاز العصبي والمزاج", icon: "🧠" },
  immune: { en: "Immune System", ar: "الجهاز المناعي", icon: "🛡️" },
  heart: { en: "Heart & Circulation", ar: "القلب والدورة الدموية", icon: "❤️" },
  oral: { en: "Oral Health", ar: "صحة الفم", icon: "🦷" },
  respiratory: { en: "Respiratory System", ar: "الجهاز التنفسي", icon: "🫁" },
  urinary: { en: "Urinary & Kidney", ar: "الجهاز البولي والكلى", icon: "💧" },
  hormonal: { en: "Hormonal & Metabolic", ar: "الهرمونات والتمثيل الغذائي", icon: "⚖️" },
  infection: { en: "Infections & Immunity", ar: "العدوى والمقاومة", icon: "🦠" },
};

export const questions: SurveyQuestion[] = [
  // === Eyes ===
  { id: "e1", category: "eyes", en: "Do you experience night blindness or difficulty seeing in dim light?", ar: "هل تعاني من عمى ليلي أو صعوبة في الرؤية في الضوء الخافت؟", deficiencies: [{ nutrient: "vitA", score: 5 }, { nutrient: "zinc", score: 2 }] },
  { id: "e2", category: "eyes", en: "Do your eyes feel dry or irritated frequently?", ar: "هل تشعر بجفاف أو تهيج متكرر في العينين؟", deficiencies: [{ nutrient: "vitA", score: 4 }, { nutrient: "omega3", score: 3 }] },
  { id: "e3", category: "eyes", en: "Do you notice twitching in your eyelids?", ar: "هل تلاحظ ارتعاش في جفون العين؟", deficiencies: [{ nutrient: "magnesium", score: 4 }, { nutrient: "vitB12", score: 2 }] },
  { id: "e4", category: "eyes", en: "Do you experience blurred vision or difficulty focusing?", ar: "هل تعاني من ضبابية الرؤية أو صعوبة في التركيز البصري؟", deficiencies: [{ nutrient: "vitA", score: 3 }, { nutrient: "vitB2", score: 3 }, { nutrient: "omega3", score: 2 }] },
  { id: "e5", category: "eyes", en: "Are your eyes sensitive to light?", ar: "هل عيناك حساسة للضوء؟", deficiencies: [{ nutrient: "vitB2", score: 4 }, { nutrient: "vitA", score: 2 }] },
  { id: "e6", category: "eyes", en: "Do you see floaters or spots in your vision?", ar: "هل ترى أجساماً عائمة أو نقاطاً في مجال الرؤية؟", deficiencies: [{ nutrient: "vitC", score: 3 }, { nutrient: "omega3", score: 2 }, { nutrient: "zinc", score: 2 }] },
  { id: "e7", category: "eyes", en: "Do you have red or bloodshot eyes frequently?", ar: "هل تعاني من احمرار العينين بشكل متكرر؟", deficiencies: [{ nutrient: "vitB2", score: 3 }, { nutrient: "omega3", score: 3 }, { nutrient: "vitA", score: 2 }] },
  { id: "e8", category: "eyes", en: "Do you have yellow discoloration in the whites of your eyes?", ar: "هل تلاحظ اصفراراً في بياض العينين؟", deficiencies: [{ nutrient: "vitB12", score: 3 }, { nutrient: "iron", score: 2 }], toxicity: [{ nutrient: "vitA", score: 4 }] },

  // === Skin ===
  { id: "s1", category: "skin", en: "Is your skin unusually pale or sallow?", ar: "هل بشرتك شاحبة أو مصفرة بشكل غير طبيعي؟", deficiencies: [{ nutrient: "iron", score: 5 }, { nutrient: "vitB12", score: 3 }, { nutrient: "folate", score: 2 }] },
  { id: "s2", category: "skin", en: "Do you have dry, flaky skin or dermatitis?", ar: "هل تعاني من جفاف أو تقشر البشرة أو التهاب جلدي؟", deficiencies: [{ nutrient: "omega3", score: 4 }, { nutrient: "vitD", score: 3 }, { nutrient: "zinc", score: 2 }, { nutrient: "vitB3", score: 2 }] },
  { id: "s3", category: "skin", en: "Are you experiencing unusual hair loss or brittle nails?", ar: "هل تعاني من تساقط شعر غير طبيعي أو هشاشة الأظافر؟", deficiencies: [{ nutrient: "iron", score: 4 }, { nutrient: "zinc", score: 3 }, { nutrient: "vitD", score: 2 }, { nutrient: "biotin", score: 3 }], toxicity: [{ nutrient: "vitA", score: 3 }, { nutrient: "selenium", score: 3 }] },
  { id: "s4", category: "skin", en: "Do you bruise easily?", ar: "هل تظهر لديك كدمات بسهولة؟", deficiencies: [{ nutrient: "vitC", score: 5 }, { nutrient: "vitK", score: 3 }] },
  { id: "s5", category: "skin", en: "Do you have slow wound healing?", ar: "هل تعاني من بطء التئام الجروح؟", deficiencies: [{ nutrient: "vitC", score: 4 }, { nutrient: "zinc", score: 4 }, { nutrient: "vitA", score: 2 }] },
  { id: "s6", category: "skin", en: "Do you have acne or persistent skin breakouts?", ar: "هل تعاني من حب الشباب أو بثور مستمرة؟", deficiencies: [{ nutrient: "zinc", score: 4 }, { nutrient: "vitA", score: 3 }, { nutrient: "omega3", score: 2 }] },
  { id: "s7", category: "skin", en: "Do you notice white spots on your nails?", ar: "هل تلاحظ بقع بيضاء على أظافرك؟", deficiencies: [{ nutrient: "zinc", score: 4 }, { nutrient: "calcium", score: 2 }] },
  { id: "s8", category: "skin", en: "Do you have premature greying of hair?", ar: "هل ظهر الشيب المبكر في شعرك؟", deficiencies: [{ nutrient: "vitB12", score: 4 }, { nutrient: "copper", score: 3 }, { nutrient: "folate", score: 2 }] },
  { id: "s9", category: "skin", en: "Do you have eczema or psoriasis?", ar: "هل تعاني من الأكزيما أو الصدفية؟", deficiencies: [{ nutrient: "vitD", score: 4 }, { nutrient: "omega3", score: 4 }, { nutrient: "zinc", score: 2 }] },
  { id: "s10", category: "skin", en: "Do you have skin rashes or unexplained itching?", ar: "هل تعاني من طفح جلدي أو حكة بدون سبب واضح؟", deficiencies: [{ nutrient: "vitB3", score: 3 }, { nutrient: "omega3", score: 3 }, { nutrient: "zinc", score: 2 }, { nutrient: "vitA", score: 2 }] },
  { id: "s11", category: "skin", en: "Do you have hyperpigmentation or dark patches on your skin?",  ar: "هل تعاني من فرط تصبغ أو بقع داكنة على الجلد؟", deficiencies: [{ nutrient: "vitB12", score: 3 }, { nutrient: "folate", score: 2 }, { nutrient: "vitC", score: 2 }] },
  { id: "s12", category: "skin", en: "Do you have dry, cracked heels?", ar: "هل تعاني من تشقق وجفاف الكعبين؟", deficiencies: [{ nutrient: "omega3", score: 3 }, { nutrient: "zinc", score: 3 }, { nutrient: "vitE", score: 2 }] },
  { id: "s13", category: "skin", en: "Do you have rough, bumpy skin on the backs of your arms (keratosis pilaris)?", ar: "هل تعاني من جلد خشن ومتعرج على ظهر الذراعين (تقران جريبي)؟", deficiencies: [{ nutrient: "vitA", score: 4 }, { nutrient: "omega3", score: 2 }] },

  // === Digestion ===
  { id: "d1", category: "digestion", en: "Do you feel fatigued or low-energy most of the day?", ar: "هل تشعر بالتعب أو انخفاض الطاقة معظم اليوم؟", deficiencies: [{ nutrient: "iron", score: 5 }, { nutrient: "vitB12", score: 4 }, { nutrient: "vitD", score: 3 }, { nutrient: "folate", score: 2 }] },
  { id: "d2", category: "digestion", en: "Do you have frequent bloating or digestive discomfort?", ar: "هل تعاني من انتفاخ متكرر أو عدم راحة هضمية؟", deficiencies: [{ nutrient: "magnesium", score: 3 }, { nutrient: "zinc", score: 2 }, { nutrient: "vitB1", score: 2 }] },
  { id: "d3", category: "digestion", en: "Do you have a history of digestive issues or malabsorption?", ar: "هل لديك تاريخ من مشاكل الهضم أو سوء الامتصاص؟", deficiencies: [{ nutrient: "vitB12", score: 4 }, { nutrient: "iron", score: 3 }, { nutrient: "magnesium", score: 3 }, { nutrient: "vitD", score: 2 }, { nutrient: "zinc", score: 2 }] },
  { id: "d4", category: "digestion", en: "Do you feel dizzy or lightheaded when standing up?", ar: "هل تشعر بالدوخة عند الوقوف؟", deficiencies: [{ nutrient: "iron", score: 5 }, { nutrient: "vitB12", score: 3 }] },
  { id: "d5", category: "digestion", en: "Do you have frequent nausea or loss of appetite?", ar: "هل تعاني من غثيان متكرر أو فقدان الشهية؟", deficiencies: [{ nutrient: "zinc", score: 3 }, { nutrient: "vitB1", score: 3 }, { nutrient: "iron", score: 2 }], toxicity: [{ nutrient: "vitA", score: 3 }, { nutrient: "vitD", score: 3 }, { nutrient: "iron", score: 3 }] },
  { id: "d6", category: "digestion", en: "Do you crave non-food items (ice, dirt, chalk)?", ar: "هل تشتهي مواد غير غذائية (ثلج، تراب، طباشير)؟", deficiencies: [{ nutrient: "iron", score: 5 }, { nutrient: "zinc", score: 3 }] },
  { id: "d7", category: "digestion", en: "Do you experience frequent constipation?", ar: "هل تعاني من إمساك متكرر؟", deficiencies: [{ nutrient: "magnesium", score: 4 }, { nutrient: "vitB1", score: 2 }, { nutrient: "potassium", score: 2 }] },
  { id: "d8", category: "digestion", en: "Do you have chronic diarrhea?", ar: "هل تعاني من إسهال مزمن؟", deficiencies: [{ nutrient: "zinc", score: 3 }, { nutrient: "vitB3", score: 3 }, { nutrient: "magnesium", score: 2 }], toxicity: [{ nutrient: "vitC", score: 3 }, { nutrient: "magnesium", score: 3 }] },
  { id: "d9", category: "digestion", en: "Do you have acid reflux or heartburn frequently?", ar: "هل تعاني من حموضة أو ارتجاع المريء بشكل متكرر؟", deficiencies: [{ nutrient: "vitB12", score: 3 }, { nutrient: "magnesium", score: 2 }, { nutrient: "zinc", score: 2 }] },
  { id: "d10", category: "digestion", en: "Do you have unintended weight loss?", ar: "هل تعاني من فقدان وزن غير مقصود؟", deficiencies: [{ nutrient: "vitB12", score: 3 }, { nutrient: "zinc", score: 3 }, { nutrient: "iron", score: 2 }, { nutrient: "vitD", score: 2 }] },
  { id: "d11", category: "digestion", en: "Do you feel excessively thirsty despite drinking enough water?", ar: "هل تشعر بعطش مفرط رغم شرب كمية كافية من الماء؟", deficiencies: [{ nutrient: "potassium", score: 3 }, { nutrient: "magnesium", score: 2 }], toxicity: [{ nutrient: "vitD", score: 3 }, { nutrient: "calcium", score: 3 }] },

  // === Muscles ===
  { id: "m1", category: "muscles", en: "Do you experience muscle cramps or spasms?", ar: "هل تعاني من تشنجات عضلية؟", deficiencies: [{ nutrient: "magnesium", score: 5 }, { nutrient: "potassium", score: 3 }, { nutrient: "vitD", score: 2 }, { nutrient: "calcium", score: 2 }] },
  { id: "m2", category: "muscles", en: "Do you have bone or joint pain?", ar: "هل تعاني من آلام في العظام أو المفاصل؟", deficiencies: [{ nutrient: "vitD", score: 5 }, { nutrient: "calcium", score: 4 }, { nutrient: "vitK", score: 2 }], toxicity: [{ nutrient: "vitA", score: 3 }] },
  { id: "m3", category: "muscles", en: "Do you feel tingling or numbness in your hands or feet?", ar: "هل تشعر بوخز أو تنميل في اليدين أو القدمين؟", deficiencies: [{ nutrient: "vitB12", score: 5 }, { nutrient: "magnesium", score: 3 }, { nutrient: "vitB6", score: 3 }], toxicity: [{ nutrient: "vitB6", score: 4 }] },
  { id: "m4", category: "muscles", en: "Do you experience muscle weakness or difficulty with physical tasks?", ar: "هل تعاني من ضعف عضلي أو صعوبة في المهام البدنية؟", deficiencies: [{ nutrient: "vitD", score: 4 }, { nutrient: "potassium", score: 3 }, { nutrient: "magnesium", score: 2 }] },
  { id: "m5", category: "muscles", en: "Do you have restless legs or leg cramps at night?", ar: "هل تعاني من تشنجات الساق الليلية أو متلازمة الساق المتحركة؟", deficiencies: [{ nutrient: "iron", score: 4 }, { nutrient: "magnesium", score: 4 }, { nutrient: "potassium", score: 2 }] },
  { id: "m6", category: "muscles", en: "Do you have frequent back pain not related to injury?", ar: "هل تعاني من آلام ظهر متكررة غير مرتبطة بإصابة؟", deficiencies: [{ nutrient: "vitD", score: 4 }, { nutrient: "magnesium", score: 3 }, { nutrient: "calcium", score: 3 }] },
  { id: "m7", category: "muscles", en: "Have you had stress fractures or bones that break easily?", ar: "هل تعرضت لكسور إجهادية أو عظام تنكسر بسهولة؟", deficiencies: [{ nutrient: "vitD", score: 5 }, { nutrient: "calcium", score: 5 }, { nutrient: "vitK", score: 3 }] },
  { id: "m8", category: "muscles", en: "Do you experience general body aches without clear cause?", ar: "هل تعاني من آلام عامة في الجسم بدون سبب واضح؟", deficiencies: [{ nutrient: "vitD", score: 4 }, { nutrient: "magnesium", score: 3 }, { nutrient: "vitB12", score: 2 }] },

  // === Neuro ===
  { id: "n1", category: "neuro", en: "Do you feel depressed or have persistent low mood?", ar: "هل تشعر بالاكتئاب أو انخفاض المزاج المستمر؟", deficiencies: [{ nutrient: "vitD", score: 4 }, { nutrient: "vitB12", score: 3 }, { nutrient: "omega3", score: 3 }, { nutrient: "folate", score: 3 }, { nutrient: "magnesium", score: 2 }] },
  { id: "n2", category: "neuro", en: "Do you have difficulty concentrating or brain fog?", ar: "هل تعاني من صعوبة التركيز أو ضبابية الدماغ؟", deficiencies: [{ nutrient: "iron", score: 4 }, { nutrient: "vitB12", score: 4 }, { nutrient: "omega3", score: 3 }, { nutrient: "vitD", score: 2 }] },
  { id: "n3", category: "neuro", en: "Do you have trouble sleeping or insomnia?", ar: "هل تعاني من صعوبة النوم أو الأرق؟", deficiencies: [{ nutrient: "magnesium", score: 5 }, { nutrient: "vitD", score: 3 }, { nutrient: "vitB6", score: 2 }] },
  { id: "n4", category: "neuro", en: "Do you feel anxious or irritable frequently?", ar: "هل تشعر بالقلق أو العصبية بشكل متكرر؟", deficiencies: [{ nutrient: "magnesium", score: 4 }, { nutrient: "vitB6", score: 3 }, { nutrient: "omega3", score: 2 }, { nutrient: "zinc", score: 2 }] },
  { id: "n5", category: "neuro", en: "Do you experience memory problems or forgetfulness?", ar: "هل تعاني من مشاكل في الذاكرة أو النسيان؟", deficiencies: [{ nutrient: "vitB12", score: 5 }, { nutrient: "omega3", score: 3 }, { nutrient: "iron", score: 2 }, { nutrient: "folate", score: 2 }] },
  { id: "n6", category: "neuro", en: "Do you have frequent headaches or migraines?", ar: "هل تعاني من صداع أو شقيقة بشكل متكرر؟", deficiencies: [{ nutrient: "magnesium", score: 5 }, { nutrient: "vitB2", score: 3 }, { nutrient: "iron", score: 2 }, { nutrient: "vitD", score: 2 }], toxicity: [{ nutrient: "vitA", score: 3 }] },
  { id: "n7", category: "neuro", en: "Do you experience mood swings or emotional instability?", ar: "هل تعاني من تقلبات مزاجية أو عدم استقرار عاطفي؟", deficiencies: [{ nutrient: "vitB6", score: 4 }, { nutrient: "omega3", score: 3 }, { nutrient: "magnesium", score: 2 }, { nutrient: "vitD", score: 2 }] },
  { id: "n8", category: "neuro", en: "Do you feel tremors or shakiness in your hands?", ar: "هل تشعر برعشة أو ارتعاش في اليدين؟", deficiencies: [{ nutrient: "magnesium", score: 4 }, { nutrient: "vitB12", score: 3 }, { nutrient: "vitB1", score: 3 }] },
  { id: "n9", category: "neuro", en: "Do you have poor coordination or balance problems?", ar: "هل تعاني من ضعف التنسيق أو مشاكل في التوازن؟", deficiencies: [{ nutrient: "vitB12", score: 5 }, { nutrient: "vitE", score: 3 }, { nutrient: "vitB1", score: 2 }] },
  { id: "n10", category: "neuro", en: "Do you experience vertigo or spinning sensation?", ar: "هل تعاني من دوار أو إحساس بالدوران؟", deficiencies: [{ nutrient: "vitB12", score: 4 }, { nutrient: "iron", score: 3 }, { nutrient: "vitD", score: 2 }] },

  // === Immune ===
  { id: "i1", category: "immune", en: "Do you get sick frequently (colds, flu, infections)?", ar: "هل تمرض بشكل متكرر (نزلات برد، إنفلونزا، عدوى)؟", deficiencies: [{ nutrient: "vitC", score: 4 }, { nutrient: "vitD", score: 4 }, { nutrient: "zinc", score: 4 }] },
  { id: "i2", category: "immune", en: "Do infections take a long time to recover from?", ar: "هل يستغرق التعافي من العدوى وقتاً طويلاً؟", deficiencies: [{ nutrient: "zinc", score: 4 }, { nutrient: "vitC", score: 3 }, { nutrient: "vitD", score: 3 }, { nutrient: "vitA", score: 2 }] },
  { id: "i3", category: "immune", en: "Do you have frequent mouth ulcers or canker sores?", ar: "هل تعاني من تقرحات الفم بشكل متكرر؟", deficiencies: [{ nutrient: "vitB12", score: 4 }, { nutrient: "iron", score: 3 }, { nutrient: "folate", score: 3 }, { nutrient: "zinc", score: 2 }] },
  { id: "i4", category: "immune", en: "Do you suffer from frequent allergic reactions?", ar: "هل تعاني من ردود فعل تحسسية متكررة؟", deficiencies: [{ nutrient: "vitD", score: 3 }, { nutrient: "vitC", score: 3 }, { nutrient: "omega3", score: 3 }] },
  { id: "i5", category: "immune", en: "Do you have chronic inflammation or autoimmune symptoms?", ar: "هل تعاني من التهابات مزمنة أو أعراض مناعة ذاتية؟", deficiencies: [{ nutrient: "vitD", score: 4 }, { nutrient: "omega3", score: 4 }, { nutrient: "selenium", score: 3 }] },
  { id: "i6", category: "immune", en: "Do you have swollen lymph nodes frequently?", ar: "هل تعاني من تورم الغدد الليمفاوية بشكل متكرر؟", deficiencies: [{ nutrient: "vitC", score: 3 }, { nutrient: "zinc", score: 3 }, { nutrient: "vitD", score: 2 }] },

  // === Heart ===
  { id: "h1", category: "heart", en: "Do you experience heart palpitations or irregular heartbeat?", ar: "هل تعاني من خفقان القلب أو عدم انتظام ضربات القلب؟", deficiencies: [{ nutrient: "magnesium", score: 5 }, { nutrient: "potassium", score: 4 }, { nutrient: "iron", score: 3 }, { nutrient: "vitB12", score: 2 }] },
  { id: "h2", category: "heart", en: "Do you have cold hands and feet frequently?", ar: "هل تعاني من برودة اليدين والقدمين بشكل متكرر؟", deficiencies: [{ nutrient: "iron", score: 5 }, { nutrient: "vitB12", score: 3 }, { nutrient: "magnesium", score: 2 }] },
  { id: "h3", category: "heart", en: "Do you experience shortness of breath during mild activity?", ar: "هل تعاني من ضيق التنفس أثناء النشاط الخفيف؟", deficiencies: [{ nutrient: "iron", score: 5 }, { nutrient: "vitB12", score: 4 }, { nutrient: "folate", score: 2 }] },
  { id: "h4", category: "heart", en: "Do you experience swelling in your legs or ankles?", ar: "هل تعاني من تورم في الساقين أو الكاحلين؟", deficiencies: [{ nutrient: "vitB1", score: 4 }, { nutrient: "potassium", score: 3 }, { nutrient: "magnesium", score: 2 }] },
  { id: "h5", category: "heart", en: "Do you have high blood pressure?", ar: "هل تعاني من ارتفاع ضغط الدم؟", deficiencies: [{ nutrient: "potassium", score: 4 }, { nutrient: "magnesium", score: 4 }, { nutrient: "vitD", score: 2 }] },
  { id: "h6", category: "heart", en: "Do you notice your skin or nails have a bluish tint?", ar: "هل تلاحظ لوناً أزرق في بشرتك أو أظافرك؟", deficiencies: [{ nutrient: "iron", score: 4 }, { nutrient: "vitB12", score: 3 }, { nutrient: "copper", score: 2 }] },

  // === Oral ===
  { id: "o1", category: "oral", en: "Do you have bleeding gums?", ar: "هل تعاني من نزيف اللثة؟", deficiencies: [{ nutrient: "vitC", score: 5 }, { nutrient: "vitK", score: 3 }] },
  { id: "o2", category: "oral", en: "Do you have a swollen or sore tongue?", ar: "هل تعاني من تورم أو ألم في اللسان؟", deficiencies: [{ nutrient: "vitB12", score: 4 }, { nutrient: "iron", score: 4 }, { nutrient: "folate", score: 3 }, { nutrient: "vitB3", score: 2 }] },
  { id: "o3", category: "oral", en: "Do you have cracks at the corners of your mouth?", ar: "هل تعاني من تشققات في زوايا الفم؟", deficiencies: [{ nutrient: "vitB2", score: 5 }, { nutrient: "iron", score: 3 }, { nutrient: "vitB6", score: 2 }] },
  { id: "o4", category: "oral", en: "Do you have frequent tooth decay despite good hygiene?", ar: "هل تعاني من تسوس أسنان متكرر رغم النظافة الجيدة؟", deficiencies: [{ nutrient: "calcium", score: 4 }, { nutrient: "vitD", score: 4 }, { nutrient: "vitK", score: 2 }] },
  { id: "o5", category: "oral", en: "Do you have a burning sensation in your mouth or tongue?", ar: "هل تشعر بحرقة في الفم أو اللسان؟", deficiencies: [{ nutrient: "vitB12", score: 4 }, { nutrient: "iron", score: 3 }, { nutrient: "zinc", score: 2 }] },
  { id: "o6", category: "oral", en: "Do you have a metallic taste in your mouth?", ar: "هل تشعر بطعم معدني في الفم؟", deficiencies: [{ nutrient: "zinc", score: 3 }, { nutrient: "vitB12", score: 2 }], toxicity: [{ nutrient: "iron", score: 4 }, { nutrient: "copper", score: 3 }] },
  { id: "o7", category: "oral", en: "Do you have a smooth or glossy tongue?", ar: "هل تعاني من لسان ناعم أو لامع بشكل غير طبيعي؟", deficiencies: [{ nutrient: "vitB12", score: 5 }, { nutrient: "folate", score: 3 }, { nutrient: "iron", score: 3 }] },

  // === Respiratory ===
  { id: "r1", category: "respiratory", en: "Do you have frequent respiratory infections (bronchitis, pneumonia)?", ar: "هل تعاني من عدوى تنفسية متكررة (التهاب الشعب الهوائية، الالتهاب الرئوي)؟", deficiencies: [{ nutrient: "vitD", score: 4 }, { nutrient: "vitC", score: 4 }, { nutrient: "vitA", score: 3 }, { nutrient: "zinc", score: 3 }] },
  { id: "r2", category: "respiratory", en: "Do you have chronic cough without clear cause?", ar: "هل تعاني من سعال مزمن بدون سبب واضح؟", deficiencies: [{ nutrient: "vitA", score: 3 }, { nutrient: "vitD", score: 3 }, { nutrient: "vitC", score: 2 }] },
  { id: "r3", category: "respiratory", en: "Do you have asthma or wheezing?", ar: "هل تعاني من ربو أو أزيز عند التنفس؟", deficiencies: [{ nutrient: "vitD", score: 4 }, { nutrient: "magnesium", score: 3 }, { nutrient: "omega3", score: 3 }] },
  { id: "r4", category: "respiratory", en: "Do you experience frequent sinus infections?", ar: "هل تعاني من التهابات الجيوب الأنفية المتكررة؟", deficiencies: [{ nutrient: "vitD", score: 3 }, { nutrient: "vitC", score: 3 }, { nutrient: "zinc", score: 3 }] },
  { id: "r5", category: "respiratory", en: "Do you experience nosebleeds frequently?", ar: "هل تعاني من نزيف الأنف بشكل متكرر؟", deficiencies: [{ nutrient: "vitC", score: 4 }, { nutrient: "vitK", score: 4 }, { nutrient: "vitA", score: 2 }] },

  // === Urinary ===
  { id: "u1", category: "urinary", en: "Do you have frequent urinary tract infections?", ar: "هل تعاني من عدوى المسالك البولية المتكررة؟", deficiencies: [{ nutrient: "vitD", score: 3 }, { nutrient: "vitC", score: 3 }, { nutrient: "zinc", score: 2 }] },
  { id: "u2", category: "urinary", en: "Do you have kidney stones history?", ar: "هل لديك تاريخ من حصوات الكلى؟", deficiencies: [{ nutrient: "magnesium", score: 3 }], toxicity: [{ nutrient: "vitC", score: 4 }, { nutrient: "calcium", score: 4 }, { nutrient: "vitD", score: 3 }] },
  { id: "u3", category: "urinary", en: "Do you urinate very frequently?", ar: "هل تتبول بشكل متكرر جداً؟", deficiencies: [{ nutrient: "potassium", score: 2 }, { nutrient: "magnesium", score: 2 }], toxicity: [{ nutrient: "vitD", score: 3 }, { nutrient: "calcium", score: 3 }] },
  { id: "u4", category: "urinary", en: "Do you have dark-colored urine despite adequate hydration?", ar: "هل لون البول داكن رغم شرب ماء كافٍ؟", deficiencies: [{ nutrient: "vitB12", score: 2 }, { nutrient: "iron", score: 2 }], toxicity: [{ nutrient: "vitB2", score: 2 }] },

  // === Hormonal ===
  { id: "hm1", category: "hormonal", en: "Do you have thyroid issues (hypo/hyperthyroidism)?", ar: "هل تعاني من مشاكل في الغدة الدرقية؟", deficiencies: [{ nutrient: "selenium", score: 5 }, { nutrient: "zinc", score: 3 }, { nutrient: "vitD", score: 3 }, { nutrient: "iron", score: 2 }] },
  { id: "hm2", category: "hormonal", en: "Do you have irregular menstrual cycles or heavy periods?", ar: "هل تعاني من عدم انتظام الدورة الشهرية أو نزيف غزير؟", deficiencies: [{ nutrient: "iron", score: 5 }, { nutrient: "vitD", score: 3 }, { nutrient: "vitB6", score: 2 }, { nutrient: "zinc", score: 2 }] },
  { id: "hm3", category: "hormonal", en: "Do you have difficulty losing or gaining weight?", ar: "هل تجد صعوبة في فقدان أو اكتساب الوزن؟", deficiencies: [{ nutrient: "vitD", score: 3 }, { nutrient: "selenium", score: 3 }, { nutrient: "zinc", score: 2 }, { nutrient: "chromium", score: 3 }] },
  { id: "hm4", category: "hormonal", en: "Do you crave sugar or carbohydrates excessively?", ar: "هل تشتهي السكريات أو الكربوهيدرات بشكل مفرط؟", deficiencies: [{ nutrient: "chromium", score: 4 }, { nutrient: "magnesium", score: 3 }, { nutrient: "vitB1", score: 2 }] },
  { id: "hm5", category: "hormonal", en: "Do you have reduced libido or sexual function?", ar: "هل تعاني من انخفاض الرغبة الجنسية؟", deficiencies: [{ nutrient: "zinc", score: 4 }, { nutrient: "vitD", score: 3 }, { nutrient: "iron", score: 2 }] },
  { id: "hm6", category: "hormonal", en: "Do you experience excessive sweating, especially at night?", ar: "هل تعاني من تعرق مفرط خاصة في الليل؟", deficiencies: [{ nutrient: "vitD", score: 3 }, { nutrient: "magnesium", score: 3 }, { nutrient: "vitB12", score: 2 }] },
  { id: "hm7", category: "hormonal", en: "Do you have blood sugar instability (hypoglycemia/hyperglycemia)?", ar: "هل تعاني من عدم استقرار سكر الدم؟", deficiencies: [{ nutrient: "chromium", score: 5 }, { nutrient: "magnesium", score: 3 }, { nutrient: "vitD", score: 2 }] },

  // === Infection ===
  { id: "inf1", category: "infection", en: "Do you have recurring fungal infections (candida, athlete's foot)?", ar: "هل تعاني من عدوى فطرية متكررة (كانديدا، فطريات القدم)؟", deficiencies: [{ nutrient: "zinc", score: 4 }, { nutrient: "vitD", score: 3 }, { nutrient: "vitA", score: 2 }, { nutrient: "selenium", score: 2 }] },
  { id: "inf2", category: "infection", en: "Do you have recurring herpes or cold sores?", ar: "هل تعاني من الهربس أو قروح البرد المتكررة؟", deficiencies: [{ nutrient: "vitC", score: 3 }, { nutrient: "zinc", score: 4 }, { nutrient: "vitD", score: 3 }] },
  { id: "inf3", category: "infection", en: "Do you have persistent skin infections or abscesses?", ar: "هل تعاني من عدوى جلدية مستمرة أو خراجات؟", deficiencies: [{ nutrient: "zinc", score: 4 }, { nutrient: "vitC", score: 3 }, { nutrient: "vitA", score: 3 }, { nutrient: "vitD", score: 2 }] },
  { id: "inf4", category: "infection", en: "Have you had worm or parasitic infections?", ar: "هل أصبت بعدوى ديدان أو طفيليات؟", deficiencies: [{ nutrient: "iron", score: 4 }, { nutrient: "vitA", score: 3 }, { nutrient: "zinc", score: 3 }, { nutrient: "vitB12", score: 2 }] },
  { id: "inf5", category: "infection", en: "Do you have recurring ear infections?", ar: "هل تعاني من التهابات أذن متكررة؟", deficiencies: [{ nutrient: "vitD", score: 3 }, { nutrient: "vitC", score: 3 }, { nutrient: "zinc", score: 3 }] },
  { id: "inf6", category: "infection", en: "Do you have chronic fatigue after viral infection (post-viral syndrome)?", ar: "هل تعاني من إرهاق مزمن بعد عدوى فيروسية؟", deficiencies: [{ nutrient: "vitD", score: 4 }, { nutrient: "vitC", score: 3 }, { nutrient: "zinc", score: 3 }, { nutrient: "selenium", score: 3 }, { nutrient: "omega3", score: 2 }] },
  { id: "inf7", category: "infection", en: "Do you have recurring bacterial infections (staph, strep)?", ar: "هل تعاني من عدوى بكتيرية متكررة (عنقودية، عقدية)؟", deficiencies: [{ nutrient: "vitD", score: 4 }, { nutrient: "vitC", score: 3 }, { nutrient: "zinc", score: 4 }, { nutrient: "vitA", score: 3 }] },
  { id: "inf8", category: "infection", en: "Do you have chronic gastrointestinal infections (H. pylori, parasites)?", ar: "هل تعاني من عدوى معدية معوية مزمنة (جرثومة المعدة، طفيليات)؟", deficiencies: [{ nutrient: "vitB12", score: 4 }, { nutrient: "iron", score: 4 }, { nutrient: "zinc", score: 3 }, { nutrient: "vitC", score: 2 }] },
  { id: "inf9", category: "infection", en: "Do you have poor fever response (rarely get fever when sick)?", ar: "هل استجابتك للحمى ضعيفة (نادراً ما ترتفع حرارتك عند المرض)؟", deficiencies: [{ nutrient: "zinc", score: 4 }, { nutrient: "vitD", score: 3 }, { nutrient: "selenium", score: 3 }] },
  { id: "inf10", category: "infection", en: "Do you experience frequent eye infections (conjunctivitis)?", ar: "هل تعاني من التهابات عين متكررة (ملتحمة)؟", deficiencies: [{ nutrient: "vitA", score: 4 }, { nutrient: "vitC", score: 2 }, { nutrient: "zinc", score: 2 }] },

  // === Additional Toxicity-indicator questions ===
  { id: "tx1", category: "digestion", en: "Do you take high-dose vitamin supplements regularly?", ar: "هل تتناول مكملات فيتامينات بجرعات عالية بانتظام؟", deficiencies: [], toxicity: [{ nutrient: "vitA", score: 3 }, { nutrient: "vitD", score: 3 }, { nutrient: "iron", score: 3 }, { nutrient: "vitB6", score: 2 }, { nutrient: "selenium", score: 2 }] },
  { id: "tx2", category: "neuro", en: "Do you experience unusual irritability or confusion?", ar: "هل تعاني من عصبية أو ارتباك غير عادي؟", deficiencies: [{ nutrient: "vitB12", score: 2 }, { nutrient: "magnesium", score: 2 }], toxicity: [{ nutrient: "vitA", score: 3 }, { nutrient: "vitD", score: 3 }] },
  { id: "tx3", category: "skin", en: "Do you have peeling skin, especially on palms and soles?", ar: "هل تعاني من تقشر الجلد خاصة في الكفين والقدمين؟", deficiencies: [{ nutrient: "vitB3", score: 2 }], toxicity: [{ nutrient: "vitA", score: 5 }] },
];

export const nutrients: Record<string, NutrientInfo> = {
  vitA: {
    id: "vitA", en: "Vitamin A", ar: "فيتامين أ", unit: "mcg RAE",
    bloodTests: [{ en: "Serum Retinol", ar: "ريتينول المصل" }],
    foods: [
      { en: "Sweet Potatoes", ar: "البطاطا الحلوة" },
      { en: "Carrots", ar: "الجزر" },
      { en: "Spinach", ar: "السبانخ" },
      { en: "Liver", ar: "الكبدة" },
      { en: "Mangoes", ar: "المانجو" },
    ],
    scienceExplanation: {
      en: "Vitamin A is essential for rhodopsin production in the retina, enabling vision in low light. Deficiency reduces rhodopsin, causing night blindness and dry eyes.",
      ar: "فيتامين أ ضروري لإنتاج الرودوبسين في شبكية العين، مما يتيح الرؤية في الضوء المنخفض. نقصه يقلل الرودوبسين مسبباً عمى ليلي وجفاف العين."
    },
    toxicityInfo: {
      en: "Excess Vitamin A (hypervitaminosis A) causes headaches, nausea, liver damage, bone pain, hair loss, and peeling skin. Fat-soluble, it accumulates in the liver.",
      ar: "فرط فيتامين أ يسبب صداعاً وغثياناً وتلف الكبد وآلام العظام وتساقط الشعر وتقشر الجلد. كونه قابل للذوبان في الدهون يتراكم في الكبد."
    },
  },
  vitB1: {
    id: "vitB1", en: "Vitamin B1 (Thiamine)", ar: "فيتامين ب1 (ثيامين)", unit: "mg",
    bloodTests: [{ en: "Whole Blood Thiamine", ar: "الثيامين في الدم الكامل" }, { en: "Erythrocyte Transketolase Activity", ar: "نشاط ترانسكيتوليز كريات الدم الحمراء" }],
    foods: [
      { en: "Sunflower Seeds", ar: "بذور دوار الشمس" },
      { en: "Green Peas", ar: "البازلاء الخضراء" },
      { en: "Brown Rice", ar: "الأرز البني" },
      { en: "Lentils", ar: "العدس" },
    ],
    scienceExplanation: {
      en: "Thiamine is essential for converting carbohydrates into energy and for nerve function. Deficiency causes beriberi, characterized by muscle weakness, nerve damage, and heart problems.",
      ar: "الثيامين ضروري لتحويل الكربوهيدرات إلى طاقة ولوظائف الأعصاب. نقصه يسبب مرض البيري بيري المتسم بضعف العضلات وتلف الأعصاب ومشاكل القلب."
    },
  },
  vitB2: {
    id: "vitB2", en: "Vitamin B2 (Riboflavin)", ar: "فيتامين ب2 (ريبوفلافين)", unit: "mg",
    bloodTests: [{ en: "Erythrocyte Glutathione Reductase Activity", ar: "نشاط غلوتاثيون ريدكتاز كريات الدم الحمراء" }],
    foods: [
      { en: "Eggs", ar: "البيض" },
      { en: "Almonds", ar: "اللوز" },
      { en: "Milk & Yogurt", ar: "الحليب والزبادي" },
      { en: "Mushrooms", ar: "الفطر" },
    ],
    scienceExplanation: {
      en: "Riboflavin is vital for energy production and cellular function. Deficiency causes light sensitivity, cracked lips, sore throat, and skin inflammation.",
      ar: "الريبوفلافين حيوي لإنتاج الطاقة ووظائف الخلايا. نقصه يسبب حساسية الضوء وتشقق الشفاه والتهاب الحلق والجلد."
    },
  },
  vitB3: {
    id: "vitB3", en: "Vitamin B3 (Niacin)", ar: "فيتامين ب3 (نياسين)", unit: "mg",
    bloodTests: [{ en: "Urinary N-Methylnicotinamide", ar: "ن-ميثيل نيكوتيناميد البولي" }],
    foods: [
      { en: "Chicken Breast", ar: "صدر الدجاج" },
      { en: "Tuna", ar: "التونة" },
      { en: "Peanuts", ar: "الفول السوداني" },
      { en: "Mushrooms", ar: "الفطر" },
    ],
    scienceExplanation: {
      en: "Niacin is crucial for DNA repair, energy metabolism, and skin health. Severe deficiency causes pellagra with dermatitis, diarrhea, and dementia.",
      ar: "النياسين ضروري لإصلاح الحمض النووي واستقلاب الطاقة وصحة الجلد. نقصه الحاد يسبب البلاغرا مع التهاب الجلد والإسهال والخرف."
    },
  },
  vitB6: {
    id: "vitB6", en: "Vitamin B6", ar: "فيتامين ب6", unit: "mg",
    bloodTests: [{ en: "Plasma Pyridoxal 5'-Phosphate (PLP)", ar: "بيريدوكسال 5-فوسفات في البلازما" }],
    foods: [
      { en: "Chickpeas", ar: "الحمص" },
      { en: "Bananas", ar: "الموز" },
      { en: "Potatoes", ar: "البطاطس" },
      { en: "Turkey", ar: "الديك الرومي" },
    ],
    scienceExplanation: {
      en: "Vitamin B6 is involved in over 100 enzyme reactions, primarily in protein metabolism and neurotransmitter synthesis. Deficiency causes peripheral neuropathy, irritability, and sleep disturbances.",
      ar: "فيتامين ب6 يشارك في أكثر من 100 تفاعل إنزيمي، خاصة في استقلاب البروتين وتصنيع الناقلات العصبية. نقصه يسبب اعتلال الأعصاب الطرفية والعصبية واضطرابات النوم."
    },
    toxicityInfo: {
      en: "Excess B6 causes sensory neuropathy with numbness, tingling, and loss of coordination. The damage can be irreversible at very high doses.",
      ar: "فرط فيتامين ب6 يسبب اعتلال الأعصاب الحسي مع تنميل ووخز وفقدان التنسيق. الضرر قد يكون غير قابل للعكس بالجرعات العالية جداً."
    },
  },
  vitB12: {
    id: "vitB12", en: "Vitamin B12", ar: "فيتامين ب12", unit: "mcg",
    bloodTests: [{ en: "Serum B12", ar: "فيتامين ب12 في الدم" }, { en: "Methylmalonic Acid (MMA)", ar: "حمض الميثيل مالونيك" }],
    foods: [
      { en: "Eggs", ar: "البيض" },
      { en: "Salmon", ar: "السلمون" },
      { en: "Beef", ar: "اللحم البقري" },
      { en: "Nutritional Yeast", ar: "الخميرة الغذائية" },
    ],
    scienceExplanation: {
      en: "B12 is critical for myelin sheath formation around nerves. Deficiency causes demyelination, leading to tingling, numbness, and fatigue due to impaired red blood cell production.",
      ar: "فيتامين ب12 ضروري لتكوين غلاف الميالين حول الأعصاب. نقصه يسبب تلف الميالين مما يؤدي للتنميل والوخز والإرهاق بسبب ضعف إنتاج كريات الدم الحمراء."
    },
  },
  vitC: {
    id: "vitC", en: "Vitamin C", ar: "فيتامين ج", unit: "mg",
    bloodTests: [{ en: "Serum Ascorbic Acid", ar: "حمض الأسكوربيك في الدم" }],
    foods: [
      { en: "Bell Peppers", ar: "الفلفل الحلو" },
      { en: "Strawberries", ar: "الفراولة" },
      { en: "Broccoli", ar: "البروكلي" },
      { en: "Oranges", ar: "البرتقال" },
      { en: "Kiwi", ar: "الكيوي" },
    ],
    scienceExplanation: {
      en: "Vitamin C is essential for collagen synthesis, which strengthens blood vessel walls. Deficiency weakens capillaries, causing easy bruising and slow wound healing.",
      ar: "فيتامين ج ضروري لتصنيع الكولاجين الذي يقوي جدران الأوعية الدموية. نقصه يضعف الشعيرات الدموية مسبباً سهولة ظهور الكدمات وبطء التئام الجروح."
    },
    toxicityInfo: {
      en: "Excess Vitamin C can cause kidney stones, diarrhea, and gastrointestinal distress. Doses above 2000mg/day increase oxalate production.",
      ar: "فرط فيتامين ج يمكن أن يسبب حصوات الكلى والإسهال واضطرابات معدية معوية. الجرعات فوق 2000 ملغ/يوم تزيد إنتاج الأوكسالات."
    },
  },
  vitD: {
    id: "vitD", en: "Vitamin D", ar: "فيتامين د", unit: "IU",
    bloodTests: [{ en: "25-Hydroxyvitamin D", ar: "25-هيدروكسي فيتامين د" }],
    foods: [
      { en: "Sunlight Exposure (15-20 min)", ar: "التعرض لأشعة الشمس (15-20 دقيقة)" },
      { en: "Salmon", ar: "السلمون" },
      { en: "Egg Yolks", ar: "صفار البيض" },
      { en: "Mushrooms", ar: "الفطر" },
      { en: "Fortified Milk", ar: "الحليب المدعم" },
    ],
    scienceExplanation: {
      en: "Vitamin D regulates calcium absorption in the intestines. Without it, bones weaken (osteomalacia), muscles ache, and the immune system becomes compromised.",
      ar: "فيتامين د ينظم امتصاص الكالسيوم في الأمعاء. بدونه تضعف العظام وتؤلم العضلات ويتأثر جهاز المناعة."
    },
    toxicityInfo: {
      en: "Excess Vitamin D causes hypercalcemia — too much calcium in the blood. Symptoms include nausea, kidney damage, confusion, and cardiac arrhythmias.",
      ar: "فرط فيتامين د يسبب فرط الكالسيوم في الدم. الأعراض تشمل الغثيان وتلف الكلى والارتباك واضطرابات نظم القلب."
    },
  },
  vitE: {
    id: "vitE", en: "Vitamin E", ar: "فيتامين هـ", unit: "mg",
    bloodTests: [{ en: "Serum Alpha-Tocopherol", ar: "ألفا توكوفيرول في الدم" }],
    foods: [
      { en: "Almonds", ar: "اللوز" },
      { en: "Sunflower Seeds", ar: "بذور دوار الشمس" },
      { en: "Avocado", ar: "الأفوكادو" },
      { en: "Olive Oil", ar: "زيت الزيتون" },
    ],
    scienceExplanation: {
      en: "Vitamin E is a powerful antioxidant that protects cell membranes from oxidative damage. Deficiency causes nerve damage, muscle weakness, and poor coordination.",
      ar: "فيتامين هـ مضاد أكسدة قوي يحمي أغشية الخلايا من التلف التأكسدي. نقصه يسبب تلف الأعصاب وضعف العضلات وسوء التنسيق."
    },
  },
  vitK: {
    id: "vitK", en: "Vitamin K", ar: "فيتامين ك", unit: "mcg",
    bloodTests: [{ en: "Prothrombin Time (PT)", ar: "وقت البروثرومبين" }],
    foods: [
      { en: "Kale", ar: "الكالي" },
      { en: "Spinach", ar: "السبانخ" },
      { en: "Broccoli", ar: "البروكلي" },
      { en: "Brussels Sprouts", ar: "كرنب بروكسل" },
    ],
    scienceExplanation: {
      en: "Vitamin K activates clotting factors in the blood. Deficiency impairs coagulation, leading to excessive bruising and prolonged bleeding.",
      ar: "فيتامين ك ينشط عوامل التخثر في الدم. نقصه يضعف التجلط مسبباً كدمات مفرطة ونزيف مطول."
    },
  },
  iron: {
    id: "iron", en: "Iron", ar: "الحديد", unit: "mg",
    bloodTests: [{ en: "Serum Ferritin", ar: "الفيريتين" }, { en: "Complete Blood Count (CBC)", ar: "تعداد الدم الكامل" }, { en: "Serum Iron & TIBC", ar: "الحديد في الدم و TIBC" }],
    foods: [
      { en: "Red Meat", ar: "اللحم الأحمر" },
      { en: "Lentils", ar: "العدس" },
      { en: "Spinach", ar: "السبانخ" },
      { en: "Pumpkin Seeds", ar: "بذور اليقطين" },
      { en: "Dark Chocolate", ar: "الشوكولاتة الداكنة" },
    ],
    scienceExplanation: {
      en: "Iron is the core component of hemoglobin, which carries oxygen in red blood cells. Deficiency reduces hemoglobin, causing pale skin, fatigue, dizziness, and shortness of breath.",
      ar: "الحديد هو المكون الأساسي للهيموغلوبين الذي يحمل الأكسجين في كريات الدم الحمراء. نقصه يقلل الهيموغلوبين مسبباً شحوب البشرة والإرهاق والدوخة."
    },
    caffeineWarning: {
      en: "⚠️ Caffeine and tannins in tea/coffee inhibit iron absorption by up to 60%. Avoid consuming them with iron-rich meals.",
      ar: "⚠️ الكافيين والتانين في الشاي/القهوة يمنعان امتصاص الحديد بنسبة تصل لـ 60%. تجنب تناولهما مع وجبات غنية بالحديد."
    },
    toxicityInfo: {
      en: "Iron overload (hemochromatosis) damages the liver, heart, and pancreas. Symptoms include joint pain, fatigue, abdominal pain, and skin bronzing.",
      ar: "فرط الحديد (ترسب الأصبغة الدموية) يضر الكبد والقلب والبنكرياس. الأعراض تشمل آلام المفاصل والإرهاق وآلام البطن وتلون الجلد البرونزي."
    },
  },
  magnesium: {
    id: "magnesium", en: "Magnesium", ar: "المغنيسيوم", unit: "mg",
    bloodTests: [{ en: "Serum Magnesium", ar: "المغنيسيوم في الدم" }, { en: "RBC Magnesium", ar: "المغنيسيوم في كريات الدم الحمراء" }],
    foods: [
      { en: "Pumpkin Seeds", ar: "بذور اليقطين" },
      { en: "Dark Chocolate", ar: "الشوكولاتة الداكنة" },
      { en: "Almonds", ar: "اللوز" },
      { en: "Spinach", ar: "السبانخ" },
      { en: "Avocado", ar: "الأفوكادو" },
    ],
    scienceExplanation: {
      en: "Magnesium regulates muscle contraction and nerve signaling. Deficiency causes excessive nerve firing, leading to cramps, spasms, and eyelid twitching.",
      ar: "المغنيسيوم ينظم انقباض العضلات وإشارات الأعصاب. نقصه يسبب إفراط في إطلاق الأعصاب مما يؤدي لتشنجات عضلية وارتعاش الجفون."
    },
    caffeineWarning: {
      en: "⚠️ Caffeine increases magnesium excretion through urine. High caffeine intake can significantly deplete magnesium stores.",
      ar: "⚠️ الكافيين يزيد إفراز المغنيسيوم عبر البول. الإفراط في الكافيين يستنزف مخزون المغنيسيوم بشكل كبير."
    },
    toxicityInfo: {
      en: "Excess magnesium from supplements causes diarrhea, nausea, and in extreme cases, cardiac arrest. Kidney patients are at higher risk.",
      ar: "فرط المغنيسيوم من المكملات يسبب الإسهال والغثيان وفي الحالات القصوى توقف القلب. مرضى الكلى أكثر عرضة."
    },
  },
  potassium: {
    id: "potassium", en: "Potassium", ar: "البوتاسيوم", unit: "mg",
    bloodTests: [{ en: "Serum Potassium", ar: "البوتاسيوم في الدم" }],
    foods: [
      { en: "Bananas", ar: "الموز" },
      { en: "Avocados", ar: "الأفوكادو" },
      { en: "Sweet Potatoes", ar: "البطاطا الحلوة" },
      { en: "Coconut Water", ar: "ماء جوز الهند" },
      { en: "White Beans", ar: "الفاصوليا البيضاء" },
    ],
    scienceExplanation: {
      en: "Potassium maintains electrical gradients across cell membranes, essential for muscle contractions and heart rhythm. Low levels cause weakness, cramps, and cardiac irregularities.",
      ar: "البوتاسيوم يحافظ على التوازن الكهربائي عبر أغشية الخلايا، وهو ضروري لانقباض العضلات ونظم القلب. نقصه يسبب ضعف وتشنجات واضطرابات قلبية."
    },
  },
  zinc: {
    id: "zinc", en: "Zinc", ar: "الزنك", unit: "mg",
    bloodTests: [{ en: "Serum Zinc", ar: "الزنك في الدم" }],
    foods: [
      { en: "Pumpkin Seeds", ar: "بذور اليقطين" },
      { en: "Beef", ar: "اللحم البقري" },
      { en: "Chickpeas", ar: "الحمص" },
      { en: "Cashews", ar: "الكاجو" },
      { en: "Oysters", ar: "المحار" },
    ],
    scienceExplanation: {
      en: "Zinc supports over 300 enzymes in the body including those for cell division, immune function, and wound healing. Deficiency impairs skin repair, weakens immunity, and causes hair loss.",
      ar: "الزنك يدعم أكثر من 300 إنزيم في الجسم بما فيها إنزيمات انقسام الخلايا والمناعة. نقصه يضعف إصلاح البشرة والمناعة ويسبب تساقط الشعر."
    },
  },
  omega3: {
    id: "omega3", en: "Omega-3 Fatty Acids", ar: "أوميغا-3", unit: "mg",
    bloodTests: [{ en: "Omega-3 Index", ar: "مؤشر أوميغا-3" }],
    foods: [
      { en: "Salmon", ar: "السلمون" },
      { en: "Chia Seeds", ar: "بذور الشيا" },
      { en: "Walnuts", ar: "الجوز" },
      { en: "Flaxseeds", ar: "بذور الكتان" },
      { en: "Sardines", ar: "السردين" },
    ],
    scienceExplanation: {
      en: "Omega-3s are structural components of cell membranes and reduce inflammation. Deficiency causes dry skin, dry eyes, and can worsen inflammatory skin conditions.",
      ar: "أوميغا-3 مكون هيكلي لأغشية الخلايا ويقلل الالتهاب. نقصه يسبب جفاف البشرة والعيون ويزيد حالات الالتهاب الجلدية."
    },
  },
  calcium: {
    id: "calcium", en: "Calcium", ar: "الكالسيوم", unit: "mg",
    bloodTests: [{ en: "Serum Calcium", ar: "الكالسيوم في الدم" }, { en: "DEXA Bone Density Scan", ar: "فحص كثافة العظام DEXA" }],
    foods: [
      { en: "Sardines with Bones", ar: "السردين بالعظم" },
      { en: "Broccoli", ar: "البروكلي" },
      { en: "Almonds", ar: "اللوز" },
      { en: "Sesame Seeds", ar: "بذور السمسم" },
      { en: "Yogurt", ar: "الزبادي" },
    ],
    scienceExplanation: {
      en: "Calcium is the primary mineral in bones and teeth, and is essential for muscle contractions and nerve signaling. Chronic deficiency leads to osteoporosis and increases fracture risk.",
      ar: "الكالسيوم هو المعدن الأساسي في العظام والأسنان وضروري لانقباض العضلات. نقصه المزمن يسبب هشاشة العظام ويزيد خطر الكسور."
    },
    caffeineWarning: {
      en: "⚠️ Caffeine increases calcium excretion. Excessive caffeine can contribute to bone density loss over time.",
      ar: "⚠️ الكافيين يزيد إفراز الكالسيوم. الإفراط فيه يساهم في فقدان كثافة العظام مع مرور الوقت."
    },
    toxicityInfo: {
      en: "Excess calcium causes hypercalcemia, kidney stones, and cardiovascular issues. Upper limit is 2500mg/day for adults.",
      ar: "فرط الكالسيوم يسبب فرط كالسيوم الدم وحصوات الكلى ومشاكل القلب والأوعية الدموية. الحد الأقصى 2500 ملغ/يوم للبالغين."
    },
  },
  folate: {
    id: "folate", en: "Folate (Vitamin B9)", ar: "حمض الفوليك (فيتامين ب9)", unit: "mcg DFE",
    bloodTests: [{ en: "Serum Folate", ar: "حمض الفوليك في الدم" }, { en: "RBC Folate", ar: "حمض الفوليك في كريات الدم الحمراء" }],
    foods: [
      { en: "Lentils", ar: "العدس" },
      { en: "Spinach", ar: "السبانخ" },
      { en: "Asparagus", ar: "الهليون" },
      { en: "Avocado", ar: "الأفوكادو" },
      { en: "Chickpeas", ar: "الحمص" },
    ],
    scienceExplanation: {
      en: "Folate is essential for DNA synthesis and red blood cell formation. Deficiency causes megaloblastic anemia with large dysfunctional red blood cells, fatigue, and mood disturbances.",
      ar: "حمض الفوليك ضروري لتصنيع الحمض النووي وتكوين كريات الدم الحمراء. نقصه يسبب فقر الدم الأرومي الضخم مع كريات دم حمراء كبيرة معطلة والإرهاق واضطرابات المزاج."
    },
  },
  biotin: {
    id: "biotin", en: "Biotin (Vitamin B7)", ar: "البيوتين (فيتامين ب7)", unit: "mcg",
    bloodTests: [{ en: "Serum Biotinidase", ar: "بيوتينيداز المصل" }],
    foods: [
      { en: "Egg Yolks", ar: "صفار البيض" },
      { en: "Sweet Potatoes", ar: "البطاطا الحلوة" },
      { en: "Almonds", ar: "اللوز" },
      { en: "Salmon", ar: "السلمون" },
    ],
    scienceExplanation: {
      en: "Biotin is a coenzyme for carboxylase enzymes involved in fatty acid synthesis and gluconeogenesis. Deficiency leads to brittle nails, hair thinning, and skin rashes.",
      ar: "البيوتين أنزيم مساعد لإنزيمات الكربوكسيلاز المشاركة في تصنيع الأحماض الدهنية. نقصه يؤدي لهشاشة الأظافر وتساقط الشعر والطفح الجلدي."
    },
  },
  copper: {
    id: "copper", en: "Copper", ar: "النحاس", unit: "mg",
    bloodTests: [{ en: "Serum Copper", ar: "النحاس في الدم" }, { en: "Ceruloplasmin", ar: "السيرولوبلازمين" }],
    foods: [
      { en: "Dark Chocolate", ar: "الشوكولاتة الداكنة" },
      { en: "Cashews", ar: "الكاجو" },
      { en: "Sunflower Seeds", ar: "بذور دوار الشمس" },
      { en: "Liver", ar: "الكبدة" },
    ],
    scienceExplanation: {
      en: "Copper is essential for iron metabolism, melanin production, and connective tissue formation. Deficiency causes anemia, premature greying, and bone abnormalities.",
      ar: "النحاس ضروري لاستقلاب الحديد وإنتاج الميلانين وتكوين النسيج الضام. نقصه يسبب فقر الدم والشيب المبكر وتشوهات العظام."
    },
    toxicityInfo: {
      en: "Copper toxicity causes liver damage, nausea, vomiting, and neurological problems. Wilson's disease is a genetic condition of copper accumulation.",
      ar: "تسمم النحاس يسبب تلف الكبد والغثيان والقيء ومشاكل عصبية. داء ويلسون حالة وراثية لتراكم النحاس."
    },
  },
  selenium: {
    id: "selenium", en: "Selenium", ar: "السيلينيوم", unit: "mcg",
    bloodTests: [{ en: "Serum Selenium", ar: "السيلينيوم في الدم" }, { en: "Glutathione Peroxidase Activity", ar: "نشاط غلوتاثيون بيروكسيداز" }],
    foods: [
      { en: "Brazil Nuts (1-2 daily)", ar: "جوز البرازيل (1-2 يومياً)" },
      { en: "Tuna", ar: "التونة" },
      { en: "Eggs", ar: "البيض" },
      { en: "Sunflower Seeds", ar: "بذور دوار الشمس" },
    ],
    scienceExplanation: {
      en: "Selenium is critical for thyroid hormone metabolism and acts as a powerful antioxidant via glutathione peroxidase. Deficiency impairs thyroid function and weakens immune defense.",
      ar: "السيلينيوم ضروري لاستقلاب هرمونات الغدة الدرقية ويعمل كمضاد أكسدة قوي عبر غلوتاثيون بيروكسيداز. نقصه يضعف وظائف الغدة الدرقية والدفاع المناعي."
    },
    toxicityInfo: {
      en: "Selenium toxicity (selenosis) causes garlic breath, hair loss, nail brittleness, nausea, and nerve damage. Upper limit is 400mcg/day.",
      ar: "تسمم السيلينيوم يسبب رائحة ثوم في النفس وتساقط الشعر وهشاشة الأظافر والغثيان وتلف الأعصاب. الحد الأقصى 400 ميكروغرام/يوم."
    },
  },
  chromium: {
    id: "chromium", en: "Chromium", ar: "الكروم", unit: "mcg",
    bloodTests: [{ en: "Serum Chromium", ar: "الكروم في الدم" }, { en: "Fasting Insulin & Glucose", ar: "الأنسولين والجلوكوز الصائم" }],
    foods: [
      { en: "Broccoli", ar: "البروكلي" },
      { en: "Grape Juice", ar: "عصير العنب" },
      { en: "Turkey", ar: "الديك الرومي" },
      { en: "Green Beans", ar: "الفاصوليا الخضراء" },
    ],
    scienceExplanation: {
      en: "Chromium enhances insulin sensitivity and glucose metabolism. Deficiency impairs blood sugar regulation, leading to insulin resistance, sugar cravings, and metabolic syndrome.",
      ar: "الكروم يعزز حساسية الأنسولين واستقلاب الجلوكوز. نقصه يضعف تنظيم سكر الدم مما يؤدي لمقاومة الأنسولين واشتهاء السكريات ومتلازمة التمثيل الغذائي."
    },
  },
};
