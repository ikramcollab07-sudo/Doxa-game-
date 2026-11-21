
/* =========================================
   DOXA ACADEMIC CHALLENGE
   PURPLE EDITION
   180 QUESTIONS - 9 SPECIALTIES
========================================= */


/* =========================================
   1. SPECIALTIES
========================================= */

const specialties = {
    physics: "الفيزياء",
    history: "التاريخ",
    geography: "الجغرافيا",
    biology: "العلوم الطبيعية",
    math: "الرياضيات",
    philosophy: "الفلسفة",
    arabic: "اللغة العربية",
    english: "اللغة الإنجليزية",
    french: "اللغة الفرنسية"
};


/* =========================================
   2. QUESTION BANK
   Each question:
   [question, [answers], correctAnswerIndex]
========================================= */

const questionBank = {

    /* PHYSICS - 20 QUESTIONS */

    physics: [
        ["ما وحدة قياس القوة في النظام الدولي؟", ["الجول", "النيوتن", "الواط", "الباسكال"], 1],
        ["ما رمز شدة التيار الكهربائي؟", ["U", "R", "I", "P"], 2],
        ["ما وحدة قياس المقاومة الكهربائية؟", ["الأوم", "الفولت", "الأمبير", "الكولوم"], 0],
        ["ما سرعة الضوء في الفراغ تقريباً؟", ["3000 كم/ث", "30000 كم/ث", "300000 كم/ث", "300 كم/ث"], 2],
        ["أي قانون يربط القوة بالكتلة والتسارع؟", ["قانون نيوتن الأول", "قانون نيوتن الثاني", "قانون نيوتن الثالث", "قانون أوم"], 1],
        ["ما وحدة قياس الطاقة؟", ["النيوتن", "الجول", "الأمبير", "الهرتز"], 1],
        ["ما الجهاز المستخدم لقياس شدة التيار؟", ["الفولتمتر", "الأمبيرمتر", "الأومتر", "الدينامومتر"], 1],
        ["ما العلاقة الصحيحة لقانون أوم؟", ["U = R × I", "U = R / I", "I = U × R", "R = U × I"], 0],
        ["ما نوع العدسة التي تجمع الأشعة المتوازية؟", ["المقعرة", "المحدبة", "المستوية", "الأسطوانية"], 1],
        ["ما وحدة قياس التردد؟", ["الجول", "الهرتز", "الواط", "الفولت"], 1],
        ["ماذا يحدث لطاقة الحركة إذا تضاعفت السرعة؟", ["تتضاعف", "تزداد أربع مرات", "تنخفض للنصف", "لا تتغير"], 1],
        ["ما الجسيم ذو الشحنة السالبة؟", ["البروتون", "النيوترون", "الإلكترون", "الفوتون"], 2],
        ["ما وحدة قياس الضغط؟", ["الباسكال", "الجول", "الكولوم", "التسلا"], 0],
        ["أي تحول يحدث في المصباح الكهربائي؟", ["كهربائية إلى ضوئية وحرارية", "حرارية إلى كيميائية", "ضوئية إلى نووية", "حركية إلى كيميائية"], 0],
        ["ما طبيعة الموجات الصوتية في الهواء؟", ["مستعرضة", "طولية", "كهرومغناطيسية", "ضوئية"], 1],
        ["ما شحنة النواة الذرية؟", ["سالبة", "موجبة", "منعدمة", "متغيرة دائماً"], 1],
        ["ما وحدة قياس القدرة الكهربائية؟", ["الواط", "الأوم", "الأمبير", "المتر"], 0],
        ["ماذا يحدث للمقاومة المكافئة عند ربط مقاومتين على التسلسل؟", ["تساوي حاصل ضربهما", "تساوي مجموعهما", "تساوي أصغرهما", "تنعدم"], 1],
        ["ما اسم الظاهرة التي تغير اتجاه الضوء عند انتقاله بين وسطين؟", ["الانعكاس", "الانكسار", "الحيود", "التداخل"], 1],
        ["أي مما يلي يمثل كمية قياسية؟", ["القوة", "الإزاحة", "السرعة المتجهة", "الكتلة"], 3]
    ],


    /* HISTORY - 20 QUESTIONS */

    history: [
        ["في أي سنة اندلعت الثورة التحريرية الجزائرية؟", ["1952", "1954", "1956", "1962"], 1],
        ["متى استقلت الجزائر؟", ["5 جويلية 1962", "1 نوفمبر 1954", "19 مارس 1962", "8 ماي 1945"], 0],
        ["من قاد الحملة الفرنسية على مصر سنة 1798؟", ["نابليون بونابرت", "لويس الرابع عشر", "شارل ديغول", "روبسبيير"], 0],
        ["متى وقعت الحرب العالمية الأولى؟", ["1905-1910", "1914-1918", "1939-1945", "1920-1925"], 1],
        ["متى انتهت الحرب العالمية الثانية؟", ["1942", "1944", "1945", "1948"], 2],
        ["ما المنظمة التي تأسست سنة 1945 للحفاظ على السلم الدولي؟", ["الاتحاد الأوروبي", "الأمم المتحدة", "حلف الناتو", "جامعة الدول العربية"], 1],
        ["في أي سنة انعقد مؤتمر الصومام؟", ["1954", "1955", "1956", "1958"], 2],
        ["أين انعقد مؤتمر الصومام؟", ["الأوراس", "وادي الصومام", "الجزائر العاصمة", "قسنطينة"], 1],
        ["ما الحدث الذي وقع في 8 ماي 1945 بالجزائر؟", ["اندلاع الثورة", "مجازر سطيف وقالمة وخراطة", "مؤتمر الصومام", "استقلال الجزائر"], 1],
        ["من هو أول رئيس للجمهورية الجزائرية بعد الاستقلال؟", ["أحمد بن بلة", "هواري بومدين", "الشاذلي بن جديد", "محمد بوضياف"], 0],
        ["متى تأسست جامعة الدول العربية؟", ["1939", "1945", "1955", "1963"], 1],
        ["ما اسم المعاهدة التي أنهت الحرب العالمية الأولى رسمياً مع ألمانيا؟", ["فرساي", "لوزان", "سيفر", "فيينا"], 0],
        ["في أي سنة سقط جدار برلين؟", ["1985", "1987", "1989", "1991"], 2],
        ["ما الحدث الذي يعتبر بداية الحرب العالمية الثانية في أوروبا؟", ["غزو بولندا", "غزو فرنسا", "معركة ستالينغراد", "إنزال النورماندي"], 0],
        ["من قاد الثورة البلشفية في روسيا؟", ["لينين", "ستالين", "تروتسكي", "غورباتشوف"], 0],
        ["متى وقعت معركة حطين؟", ["1099", "1187", "1258", "1492"], 1],
        ["من هو قائد المسلمين في معركة حطين؟", ["طارق بن زياد", "صلاح الدين الأيوبي", "خالد بن الوليد", "عمرو بن العاص"], 1],
        ["متى تأسست الدولة العثمانية تقريباً؟", ["1299", "1453", "1517", "1683"], 0],
        ["ما عاصمة الدولة العباسية في معظم تاريخها؟", ["دمشق", "القاهرة", "بغداد", "قرطبة"], 2],
        ["في أي سنة تم توقيع اتفاقيات إيفيان؟", ["1958", "1960", "1962", "1965"], 2]
    ],


    /* GEOGRAPHY - 20 QUESTIONS */

    geography: [
        ["ما أكبر قارة في العالم من حيث المساحة؟", ["إفريقيا", "آسيا", "أوروبا", "أمريكا الجنوبية"], 1],
        ["ما أكبر محيط في العالم؟", ["الأطلسي", "الهندي", "الهادئ", "المتجمد الشمالي"], 2],
        ["ما عاصمة أستراليا؟", ["سيدني", "ملبورن", "كانبيرا", "بيرث"], 2],
        ["ما أطول نهر في إفريقيا؟", ["الكونغو", "النيل", "النيجر", "الزمبيزي"], 1],
        ["ما أعلى قمة جبلية في العالم؟", ["كيليمنجارو", "إيفرست", "مون بلان", "K2"], 1],
        ["في أي قارة تقع صحراء أتاكاما؟", ["إفريقيا", "آسيا", "أمريكا الجنوبية", "أستراليا"], 2],
        ["ما المضيق الذي يفصل بين المغرب وإسبانيا؟", ["هرمز", "جبل طارق", "البوسفور", "باب المندب"], 1],
        ["ما أكبر دولة إفريقية من حيث المساحة؟", ["السودان", "الجزائر", "ليبيا", "تشاد"], 1],
        ["ما عاصمة اليابان؟", ["كيوتو", "أوساكا", "طوكيو", "هيروشيما"], 2],
        ["ما الخط الذي يقسم الأرض إلى نصفين شمالي وجنوبي؟", ["خط غرينتش", "خط الاستواء", "مدار السرطان", "مدار الجدي"], 1],
        ["ما البحر الذي يفصل شمال إفريقيا عن جنوب أوروبا؟", ["البحر الأحمر", "البحر المتوسط", "بحر العرب", "بحر قزوين"], 1],
        ["في أي دولة تقع مدينة إسطنبول؟", ["اليونان", "تركيا", "بلغاريا", "إيران"], 1],
        ["ما عاصمة كندا؟", ["تورونتو", "فانكوفر", "أوتاوا", "مونتريال"], 2],
        ["ما نوع المناخ السائد في المناطق الاستوائية؟", ["بارد وجاف", "حار ورطب غالباً", "متوسطي", "قطبي"], 1],
        ["ما اسم أكبر صحراء حارة في العالم؟", ["غوبي", "الصحراء الكبرى", "كالاهاري", "أتاكاما"], 1],
        ["أي قارة لا توجد فيها دول ذات سيادة؟", ["أوروبا", "أنتاركتيكا", "آسيا", "إفريقيا"], 1],
        ["ما عاصمة البرازيل؟", ["ريو دي جانيرو", "ساو باولو", "برازيليا", "سلفادور"], 2],
        ["ما البحر الذي يقع بين شبه الجزيرة العربية وإفريقيا؟", ["البحر الأسود", "البحر الأحمر", "بحر الشمال", "بحر البلطيق"], 1],
        ["ما اسم الخط الوهمي الذي يمر عبر القطبين؟", ["خط العرض", "خط الطول", "خط الاستواء", "مدار الجدي"], 1],
        ["في أي قارة تقع جبال الأنديز؟", ["آسيا", "أوروبا", "أمريكا الجنوبية", "إفريقيا"], 2]
    ],


    /* BIOLOGY - 20 QUESTIONS */

    biology: [
        ["ما الوحدة الأساسية لبناء الكائنات الحية؟", ["النسيج", "الخلية", "العضو", "الجهاز"], 1],
        ["ما العضية المسؤولة عن إنتاج معظم ATP في الخلية؟", ["النواة", "الميتوكوندريا", "الريبوسوم", "جهاز غولجي"], 1],
        ["ما المادة الوراثية الأساسية عند الكائنات الحية؟", ["RNA فقط", "DNA", "البروتين", "الدهون"], 1],
        ["ما الغاز الذي تمتصه النباتات أثناء التركيب الضوئي؟", ["الأكسجين", "الآزوت", "ثاني أكسيد الكربون", "الهيدروجين"], 2],
        ["أين تحدث عملية التركيب الضوئي؟", ["الميتوكوندريا", "الصانعات الخضراء", "النواة", "الريبوسومات"], 1],
        ["ما الوحدة الوظيفية للكلية؟", ["العصبون", "النيفرون", "الحويصلة", "الأسناخ"], 1],
        ["ما الهرمون الذي يخفض نسبة السكر في الدم؟", ["الأدرينالين", "الأنسولين", "الغلوكاغون", "الثيروكسين"], 1],
        ["ما فصيلة الدم المانحة العامة لكريات الدم الحمراء وفق نظام ABO وRh؟", ["AB+", "O-", "A+", "B-"], 1],
        ["ما الخلايا المسؤولة عن نقل الأكسجين في الدم؟", ["الكريات البيضاء", "الصفائح الدموية", "الكريات الحمراء", "الخلايا العصبية"], 2],
        ["أين يتم امتصاص معظم المغذيات؟", ["المعدة", "الأمعاء الدقيقة", "الأمعاء الغليظة", "المريء"], 1],
        ["ما اسم انقسام الخلية الذي ينتج خليتين متماثلتين وراثياً؟", ["الانقسام المنصف", "الانقسام المتساوي", "الإخصاب", "العبور الوراثي"], 1],
        ["كم عدد الصبغيات في الخلايا الجسدية عند الإنسان؟", ["23", "44", "46", "48"], 2],
        ["ما العضو المسؤول أساساً عن ضخ الدم؟", ["الرئة", "الكبد", "القلب", "الكلية"], 2],
        ["ما اسم العملية التي تنتج فيها الخلايا الطاقة من الغلوكوز؟", ["التنفس الخلوي", "التركيب الضوئي", "البلعمة", "الاستنساخ"], 0],
        ["ما نوع العلاقة التي يستفيد فيها كائنان حيان؟", ["التطفل", "التنافس", "تبادل المنفعة", "الافتراس"], 2],
        ["ما الخلايا المسؤولة عن إنتاج الأجسام المضادة؟", ["الخلايا البلازمية", "الكريات الحمراء", "الصفائح", "الخلايا العضلية"], 0],
        ["أين يتم تصنيع البروتينات في الخلية؟", ["الريبوسومات", "النواة فقط", "الفجوة", "الجدار الخلوي"], 0],
        ["ما اسم الوعاء الدموي الذي ينقل الدم من القلب؟", ["الوريد", "الشريان", "الشعيرة", "القناة اللمفاوية"], 1],
        ["ما الصبغة التي تمنح النباتات لونها الأخضر؟", ["الهيموغلوبين", "الميلانين", "اليخضور", "الكاروتين فقط"], 2],
        ["ما اسم انتقال الماء عبر غشاء شبه منفذ؟", ["الانتشار الميسر", "الأسموزية", "النقل النشط", "البلعمة"], 1]
    ],


    /* MATHEMATICS - 20 QUESTIONS */

    math: [
        ["ما ناتج 12 × 8؟", ["86", "96", "108", "88"], 1],
        ["ما مشتقة الدالة f(x) = x²؟", ["x", "2x", "x³", "2"], 1],
        ["ما قيمة الجذر التربيعي للعدد 144؟", ["10", "11", "12", "14"], 2],
        ["ما مجموع زوايا المثلث؟", ["90°", "180°", "270°", "360°"], 1],
        ["ما قيمة sin(90°)؟", ["0", "1", "-1", "0.5"], 1],
        ["ما ناتج 2⁵؟", ["10", "16", "25", "32"], 3],
        ["ما حل المعادلة 2x + 6 = 14؟", ["2", "3", "4", "5"], 2],
        ["ما قيمة العدد π تقريباً؟", ["2.14", "3.14", "4.13", "1.41"], 1],
        ["ما مساحة مربع طول ضلعه 5 سم؟", ["10 سم²", "20 سم²", "25 سم²", "30 سم²"], 2],
        ["ما احتمال ظهور عدد زوجي عند رمي نرد عادل؟", ["1/6", "1/3", "1/2", "2/3"], 2],
        ["ما الحد التالي في المتتالية 2، 4، 6، 8؟", ["9", "10", "11", "12"], 1],
        ["ما قيمة log₁₀(100)؟", ["1", "2", "10", "100"], 1],
        ["ما حل المعادلة x² = 49؟", ["7 فقط", "-7 فقط", "±7", "49"], 2],
        ["ما مشتقة الدالة الثابتة؟", ["1", "0", "x", "غير معرفة"], 1],
        ["كم عدد أضلاع الشكل السداسي؟", ["5", "6", "7", "8"], 1],
        ["ما قيمة cos(0°)؟", ["0", "1", "-1", "0.5"], 1],
        ["ما وسيط الأعداد 2، 4، 6، 8، 10؟", ["4", "5", "6", "8"], 2],
        ["ما ناتج 3!؟", ["3", "6", "9", "12"], 1],
        ["ما معادلة المستقيم المار بالمبدأ وميله 3؟", ["y = x + 3", "y = 3x", "y = 3", "x = 3y"], 1],
        ["إذا كان نصف قطر دائرة 3 سم، فما مساحتها؟", ["3π", "6π", "9π", "12π"], 2]
    ],


    /* PHILOSOPHY - 20 QUESTIONS */

    philosophy: [
        ["من صاحب مقولة «أنا أفكر إذن أنا موجود»؟", ["أفلاطون", "ديكارت", "أرسطو", "كانط"], 1],
        ["من مؤلف كتاب الجمهورية؟", ["أفلاطون", "سقراط", "نيتشه", "ابن رشد"], 0],
        ["من الفيلسوف المرتبط بمفهوم الأمر المطلق؟", ["كانط", "هيوم", "لوك", "سبينوزا"], 0],
        ["ما موضوع نظرية المعرفة؟", ["دراسة الجمال", "دراسة المعرفة ومصادرها وحدودها", "دراسة الاقتصاد", "دراسة اللغة فقط"], 1],
        ["من صاحب نظرية المثل؟", ["أفلاطون", "أرسطو", "ديكارت", "ماركس"], 0],
        ["ما المنهج الذي يقوم على الانتقال من الخاص إلى العام؟", ["الاستنباط", "الاستقراء", "القياس الصوري", "الشك المنهجي"], 1],
        ["من مؤسس التحليل النفسي؟", ["فرويد", "داروين", "ماركس", "كونت"], 0],
        ["من الفيلسوف الذي ارتبط اسمه بالمنهج التجريبي الحديث؟", ["فرانسيس بيكون", "سقراط", "هيغل", "روسو"], 0],
        ["ما المقصود بالشك المنهجي عند ديكارت؟", ["رفض الحقيقة نهائياً", "اتخاذ الشك وسيلة للوصول إلى اليقين", "إنكار العقل", "رفض العلم"], 1],
        ["من صاحب كتاب رأس المال؟", ["كارل ماركس", "جون لوك", "نيتشه", "أوغست كونت"], 0],
        ["ما المجال الذي تدرسه فلسفة الأخلاق؟", ["الخير والشر والسلوك الإنساني", "الظواهر الطبيعية فقط", "اللغة", "الرياضيات"], 0],
        ["من الفيلسوف الذي ارتبط بمفهوم العقد الاجتماعي؟", ["روسو", "أينشتاين", "أفلاطون وحده", "غاليلو"], 0],
        ["ما المقصود بالحتمية؟", ["وقوع الأحداث بلا أسباب", "ارتباط الأحداث بأسباب وشروط محددة", "غياب القوانين", "حرية مطلقة"], 1],
        ["من صاحب كتاب نقد العقل المحض؟", ["كانط", "ديكارت", "هيوم", "سارتر"], 0],
        ["ما الفلسفة التي تجعل المنفعة معياراً للحكم الأخلاقي؟", ["الوجودية", "النفعية", "الرواقية", "المثالية"], 1],
        ["من الفيلسوف الذي قال إن الإنسان محكوم عليه بالحرية؟", ["سارتر", "أرسطو", "أفلاطون", "ابن سينا"], 0],
        ["ما موضوع فلسفة الجمال؟", ["الحق", "الجمال والفن والتذوق", "السلطة", "العدد"], 1],
        ["ما المقصود بالاستنباط؟", ["الانتقال من العام إلى الخاص", "الانتقال من الخاص إلى العام", "التجربة فقط", "الملاحظة فقط"], 0],
        ["من الفيلسوف الذي ارتبط بمفهوم محرك لا يتحرك؟", ["أرسطو", "سقراط", "نيتشه", "هيوم"], 0],
        ["ما السؤال المركزي في فلسفة الوجود؟", ["ما الجمال؟", "ما الوجود وما معنى أن نكون؟", "ما العدد؟", "كيف نحسب السرعة؟"], 1]
    ],


    /* ARABIC - 20 QUESTIONS */

    arabic: [
        ["من صاحب المعلقة التي مطلعها «قفا نبك من ذكرى حبيب ومنزل»؟", ["عنترة بن شداد", "امرؤ القيس", "زهير بن أبي سلمى", "طرفة بن العبد"], 1],
        ["ما نوع الأسلوب في «لا تهمل واجبك»؟", ["استفهام", "نهي", "أمر", "تعجب"], 1],
        ["ما إعراب كلمة «العلم» في جملة «العلم نور»؟", ["خبر", "مبتدأ", "فاعل", "مفعول به"], 1],
        ["ما جمع كلمة «قاضٍ»؟", ["قضاة", "قاضيون", "قاضيات فقط", "قاضيان"], 0],
        ["من مؤلف كتاب الأيام؟", ["طه حسين", "العقاد", "نجيب محفوظ", "توفيق الحكيم"], 0],
        ["ما البحر الشعري الذي تفعيلته «فعولن مفاعيلن»؟", ["الطويل", "الكامل", "الرجز", "الرمل"], 0],
        ["ما نوع الصورة البيانية في «ابتسم الصباح»؟", ["تشبيه", "استعارة مكنية", "كناية", "مجاز مرسل"], 1],
        ["ما الحرف الناسخ في «إن العلم مفيد»؟", ["العلم", "إن", "مفيد", "لا يوجد"], 1],
        ["من رائد مدرسة الإحياء والبعث في الشعر العربي الحديث؟", ["أحمد شوقي", "إيليا أبو ماضي", "بدر شاكر السياب", "نزار قباني"], 0],
        ["ما ضد كلمة «الإقدام»؟", ["الشجاعة", "الجرأة", "الإحجام", "العزيمة"], 2],
        ["ما نوع الهمزة في كلمة «استخرج»؟", ["همزة قطع", "همزة وصل", "همزة متوسطة", "همزة متطرفة"], 1],
        ["من صاحب كتاب «البخلاء»؟", ["الجاحظ", "ابن المقفع", "المتنبي", "أبو تمام"], 0],
        ["ما علامة رفع جمع المذكر السالم؟", ["الفتحة", "الضمة", "الواو", "الياء"], 2],
        ["ما نوع الأسلوب في «ما أجمل السماء!»؟", ["نداء", "تعجب", "نفي", "شرط"], 1],
        ["ما الاسم الذي يدل على حدث مجرد من الزمن؟", ["الفعل", "المصدر", "الصفة", "الضمير"], 1],
        ["من صاحب قصيدة «إرادة الحياة»؟", ["أبو القاسم الشابي", "محمود درويش", "أحمد شوقي", "حافظ إبراهيم"], 0],
        ["ما إعراب كلمة «الطلاب» في «كرّم المدير الطلاب»؟", ["فاعل", "مبتدأ", "مفعول به", "خبر"], 2],
        ["ما نوع الجملة «في البيت رجل»؟", ["جملة فعلية", "جملة اسمية", "جملة شرطية", "جملة تعجبية"], 1],
        ["ما المحسن البديعي في «يحيي ويميت»؟", ["جناس", "طباق", "سجع", "مقابلة فقط"], 1],
        ["من مؤلف رواية «اللص والكلاب»؟", ["نجيب محفوظ", "يوسف إدريس", "الطيب صالح", "غسان كنفاني"], 0]
    ],


    /* ENGLISH - 20 QUESTIONS */

    english: [
        ["What is the past tense of 'go'?", ["Goed", "Gone", "Went", "Going"], 2],
        ["Choose the correct plural of 'child'.", ["Childs", "Children", "Childes", "Childrens"], 1],
        ["Which word is a synonym of 'happy'?", ["Sad", "Angry", "Joyful", "Tired"], 2],
        ["Choose the correct sentence.", ["She go to school.", "She goes to school.", "She going school.", "She gone school."], 1],
        ["What is the opposite of 'ancient'?", ["Old", "Modern", "Historic", "Traditional"], 1],
        ["Complete: I have lived here ___ 2020.", ["for", "since", "during", "from"], 1],
        ["Which one is an adjective?", ["Quickly", "Beautiful", "Run", "Happiness"], 1],
        ["What is the comparative form of 'good'?", ["Gooder", "More good", "Better", "Best"], 2],
        ["Choose the correct article: ___ apple.", ["A", "An", "The only", "No article"], 1],
        ["What is the past participle of 'write'?", ["Wrote", "Written", "Writing", "Writes"], 1],
        ["Which sentence is in the passive voice?", ["Ali wrote a letter.", "A letter was written by Ali.", "Ali is writing.", "Ali writes letters."], 1],
        ["What does 'environment' mean?", ["The natural world around us", "A type of food", "A school subject only", "A building"], 0],
        ["Choose the correct preposition: Interested ___ science.", ["on", "at", "in", "for"], 2],
        ["What is the plural of 'mouse'?", ["Mouses", "Mice", "Mices", "Mouse"], 1],
        ["Which word is an adverb?", ["Careful", "Carefully", "Care", "Caring"], 1],
        ["Complete: If I had more time, I ___ travel.", ["will", "would", "am", "have"], 1],
        ["What is the opposite of 'increase'?", ["Grow", "Expand", "Decrease", "Improve"], 2],
        ["Choose the correct question.", ["Where you live?", "Where do you live?", "Where does you live?", "Where living you?"], 1],
        ["What does the phrasal verb 'give up' mean?", ["Continue", "Abandon", "Discover", "Arrive"], 1],
        ["Which tense is used in: 'She is studying now'?", ["Present simple", "Past simple", "Present continuous", "Future perfect"], 2]
    ],


    /* FRENCH - 20 QUESTIONS */

    french: [
        ["Quel est le pluriel de « cheval » ?", ["Chevals", "Chevaux", "Chevales", "Chevalles"], 1],
        ["Quelle est la conjugaison correcte de « être » avec « nous » au présent ?", ["Nous suis", "Nous est", "Nous sommes", "Nous êtes"], 2],
        ["Quel est le contraire de « grand » ?", ["Long", "Petit", "Large", "Haut"], 1],
        ["Quel est le féminin de « acteur » ?", ["Acteure", "Actrice", "Acteuse", "Acteureuse"], 1],
        ["Complétez : Je ___ étudiant.", ["suis", "es", "est", "sommes"], 0],
        ["Quel est le participe passé du verbe « faire » ?", ["Fais", "Fait", "Faisant", "Faire"], 1],
        ["Quel article convient : ___ école ?", ["Le", "La", "L'", "Les"], 2],
        ["Quel est le synonyme de « heureux » ?", ["Triste", "Content", "Fâché", "Fatigué"], 1],
        ["Quel temps exprime une action passée et achevée ?", ["Présent", "Passé composé", "Futur simple", "Impératif"], 1],
        ["Quelle est la bonne forme : « Ils ___ au lycée » ?", ["va", "vas", "vont", "allons"], 2],
        ["Quel est le contraire de « rapide » ?", ["Vite", "Lent", "Fort", "Facile"], 1],
        ["Quel pronom remplace « Marie et moi » ?", ["Vous", "Ils", "Nous", "Elles"], 2],
        ["Quel est l'infinitif de « nous avons » ?", ["Être", "Avoir", "Aller", "Faire"], 1],
        ["Complétez : Il habite ___ Algérie.", ["au", "aux", "en", "à le"], 2],
        ["Quel est le féminin de « heureux » ?", ["Heureuse", "Heureuxse", "Heureuxe", "Heureux"], 0],
        ["Quel est le pluriel de « journal » ?", ["Journals", "Journaux", "Journalx", "Journales"], 1],
        ["Quelle phrase est correcte ?", ["Je suis allé à l'école.", "Je suis aller à l'école.", "Je aller à l'école.", "Je allé à l'école."], 0],
        ["Quel mot est un adverbe ?", ["Lent", "Lentement", "Lente", "Lenteur"], 1],
        ["Quel est le futur simple de « je vais » ?", ["Je irai", "Je vais aller", "J'irai", "Je allé"], 2],
        ["Quelle est la négation correcte ?", ["Je ne sais pas.", "Je sais ne pas.", "Je pas sais.", "Ne je sais."], 0]
    ]

};


/* =========================================
   3. GLOBAL VARIABLES
========================================= */

let currentPlayer = "";
let currentSpecialty = "";
let currentQuestionIndex = 0;

let timeLeft = 60;
let timerInterval = null;

let gameStartTime = 0;
let gameFinished = false;

const STORAGE_KEY = "doxa_academic_records_v1";


/* =========================================
   4. HTML ELEMENTS
========================================= */

const screens = document.querySelectorAll(".screen");

const registrationForm = document.getElementById("registration-form");

const playerNameInput = document.getElementById("player-name");
const specialtySelect = document.getElementById("specialty");

const currentPlayerElement = document.getElementById("current-player");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");

const timerElement = document.getElementById("timer");
const timerBox = document.getElementById("timer-box");

const questionCount = document.getElementById("question-count");
const progressBar = document.getElementById("progress-bar");

const resultIcon = document.getElementById("result-icon");
const resultTitle = document.getElementById("result-title");
const resultMessage = document.getElementById("result-message");
const finalScore = document.getElementById("final-score");
const resultDetails = document.getElementById("result-details");


/* =========================================
   5. SCREEN MANAGEMENT
========================================= */

function showScreen(screenId) {

    clearInterval(timerInterval);

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    const target = document.getElementById(screenId);

    if (target) {
        target.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================
   6. STORAGE
========================================= */

function getRecords() {

    try {

        const records = localStorage.getItem(STORAGE_KEY);

        return records ? JSON.parse(records) : [];

    } catch (error) {

        console.error("Storage error:", error);

        return [];

    }

}


function saveRecord(record) {

    const records = getRecords();

    records.push(record);

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(records)
    );

}


/* =========================================
   7. REGISTRATION
========================================= */

registrationForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = playerNameInput.value.trim();
    const specialty = specialtySelect.value;

    if (name.length < 2) {

        alert("يرجى إدخال اسم صحيح.");

        return;

    }

    if (!questionBank[specialty]) {

        alert("يرجى اختيار تخصص صحيح.");

        return;

    }

    if (questionBank[specialty].length !== 20) {

        alert("بنك الأسئلة لهذا التخصص غير مكتمل.");

        return;

    }

    currentPlayer = name;
    currentSpecialty = specialty;

    currentQuestionIndex = 0;

    gameFinished = false;

    gameStartTime = Date.now();

    currentPlayerElement.textContent = currentPlayer;

    showScreen("quiz-screen");

    showQuestion();

});


/* =========================================
   8. SHOW QUESTION
========================================= */

function showQuestion() {

    clearInterval(timerInterval);

    const questions = questionBank[currentSpecialty];

    const question = questions[currentQuestionIndex];

    if (!question) {

        finishGame("win");

        return;

    }

    questionText.textContent = question[0];

    questionCount.textContent =
        `السؤال ${currentQuestionIndex + 1} من 20`;

    const progress =
        (currentQuestionIndex / 20) * 100;

    progressBar.style.width = progress + "%";

    answersContainer.innerHTML = "";

    question[1].forEach((answer, index) => {

        const button = document.createElement("button");

        button.type = "button";

        button.className = "answer-btn";

        button.textContent =
            `${String.fromCharCode(65 + index)}. ${answer}`;

        button.addEventListener("click", function() {

            checkAnswer(index, button);

        });

        answersContainer.appendChild(button);

    });

    startTimer();

}


/* =========================================
   9. TIMER - 60 SECONDS PER QUESTION
========================================= */

function startTimer() {

    clearInterval(timerInterval);

    timeLeft = 60;

    updateTimer();

    timerInterval = setInterval(function() {

        if (gameFinished) {

            clearInterval(timerInterval);

            return;

        }

        timeLeft--;

        updateTimer();

        if (timeLeft <= 0) {

            clearInterval(timerInterval);

            finishGame("timeout");

        }

    }, 1000);

}


function updateTimer() {

    timerElement.textContent =
        `00:${String(timeLeft).padStart(2, "0")}`;

    timerBox.classList.toggle(
        "danger",
        timeLeft <= 10
    );

}


/* =========================================
   10. CHECK ANSWER
========================================= */

function checkAnswer(selectedIndex, selectedButton) {

    if (gameFinished) return;

    clearInterval(timerInterval);

    const question = questionBank[currentSpecialty][currentQuestionIndex];

    const correctIndex = question[2];

    const allButtons =
        answersContainer.querySelectorAll(".answer-btn");

    allButtons.forEach(button => {

        button.disabled = true;

    });


    if (selectedIndex === correctIndex) {

        selectedButton.classList.add("correct");

        currentQuestionIndex++;

        progressBar.style.width =
            (currentQuestionIndex / 20) * 100 + "%";

        if (currentQuestionIndex === 20) {

            setTimeout(function() {

                finishGame("win");

            }, 450);

        } else {

            setTimeout(function() {

                showQuestion();

            }, 450);

        }

    } else {

        selectedButton.classList.add("wrong");

        allButtons[correctIndex].classList.add("correct");

        setTimeout(function() {

            finishGame("wrong");

        }, 650);

    }

}


/* =========================================
   11. FORMAT TIME
========================================= */

function formatTime(milliseconds) {

    const totalSeconds = Math.floor(milliseconds / 1000);

    const minutes = Math.floor(totalSeconds / 60);

    const seconds = totalSeconds % 60;

    return `${minutes} دقيقة و ${seconds} ثانية`;

}


/* =========================================
   12. FINISH GAME
========================================= */

function finishGame(reason) {

    if (gameFinished) return;

    gameFinished = true;

    clearInterval(timerInterval);

    timerBox.classList.remove("danger");

    const endTime = Date.now();

    const elapsedTime = endTime - gameStartTime;

    const isWinner = reason === "win";

    const score = isWinner ? 20 : currentQuestionIndex;

    let status = "مقصى";

    if (isWinner) {

        status = "فائز";

    }

    let message = "";

    if (reason === "win") {

        resultIcon.textContent = "🏆";

        resultTitle.textContent = "مبروك! أنت الفائز";

        message =
            "لقد أثبت أنك تستحق مكانك في لوحة الشرف. إجابات صحيحة دون أي خطأ!";

    }

    else if (reason === "wrong") {

        resultIcon.textContent = "❌";

        resultTitle.textContent = "تم إقصاؤك!";

        message =
            "للأسف، كانت إجابتك خاطئة. لا تستسلم، يمكنك تطوير معلوماتك والمحاولة في تحديات قادمة.";

    }

    else if (reason === "timeout") {

        resultIcon.textContent = "⏰";

        resultTitle.textContent = "انتهى الوقت!";

        message =
            "لم تتمكن من الإجابة خلال 60 ثانية. انتهت محاولتك في هذا التحدي.";

    }


    resultMessage.textContent = message;

    finalScore.textContent = `${score}/20`;

    resultDetails.textContent =
        `التخصص: ${specialties[currentSpecialty]} | الزمن الإجمالي: ${formatTime(elapsedTime)}`;


    const record = {

        id: `${endTime}-${Math.random().toString(36).slice(2, 8)}`,

        name: currentPlayer,

        specialty: currentSpecialty,

        specialtyName: specialties[currentSpecialty],

        score: score,

        status: status,

        won: isWinner,

        reason: reason,

        duration: elapsedTime,

        date: new Date(endTime).toISOString(),

        timestamp: endTime

    };


    saveRecord(record);

    showScreen("result-screen");

}


/* =========================================
   13. SAFE HTML TEXT
========================================= */

function escapeHTML(value) {

    return String(value).replace(/[&<>"']/g, function(character) {

        const entities = {

            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"

        };

        return entities[character];

    });

}


/* =========================================
   14. LEADERBOARD
========================================= */

function showLeaderboard() {

    const container =
        document.getElementById("leaderboard-list");

    const winners = getRecords()

        .filter(record => record.won === true)

        .sort((a, b) => {

            if (a.duration !== b.duration) {

                return a.duration - b.duration;

            }

            return a.timestamp - b.timestamp;

        })

        .slice(0, 3);


    if (winners.length === 0) {

        container.innerHTML = `
            <div class="empty-message">
                لا يوجد فائزون حتى الآن.<br>
                كن أول من يحجز مكانه في لوحة الشرف!
            </div>
        `;

        showScreen("leaderboard-screen");

        return;

    }


    const medals = ["🥇", "🥈", "🥉"];

    container.innerHTML = winners.map((winner, index) => `

        <div class="leader-card">

            <div>
                <strong>${medals[index]} المركز ${index + 1}</strong>
                <p>${escapeHTML(winner.name)}</p>
                <small>${escapeHTML(winner.specialtyName)}</small>
            </div>

            <strong>${formatTime(winner.duration)}</strong>

        </div>

    `).join("");


    showScreen("leaderboard-screen");

}


/* =========================================
   15. PARTICIPANTS RECORDS
========================================= */

function showRecords() {

    const container =
        document.getElementById("records-list");

    const records = getRecords().sort((a, b) => {

        return b.timestamp - a.timestamp;

    });


    if (records.length === 0) {

        container.innerHTML = `
            <div class="empty-message">
                لا يوجد مشاركون حتى الآن.
            </div>
        `;

        showScreen("records-screen");

        return;

    }


    container.innerHTML = records.map(record => {

        const statusColor = record.won
            ? "#43d9a3"
            : "#ff5470";

        const date = new Date(record.timestamp)
            .toLocaleString("ar-DZ");


        return `

            <div class="record-card">

                <div>

                    <strong>
                        ${escapeHTML(record.name)}
                    </strong>

                    <p>
                        ${escapeHTML(record.specialtyName)}
                    </p>

                    <small>
                        ${escapeHTML(date)}
                    </small>

                </div>

                <div style="text-align:left">

                    <strong>
                        ${record.score}/20
                    </strong>

                    <p style="color:${statusColor}">
                        ${escapeHTML(record.status)}
                    </p>

                </div>

            </div>

        `;

    }).join("");


    showScreen("records-screen");

}


/* =========================================
   16. BUTTON EVENTS
========================================= */

document.getElementById("show-leaderboard")
    .addEventListener("click", showLeaderboard);


document.getElementById("show-records")
    .addEventListener("click", showRecords);


document.getElementById("back-home")
    .addEventListener("click", function() {

        playerNameInput.value = "";

        specialtySelect.value = "";

        showScreen("home-screen");

    });


document.querySelectorAll(".back-btn")
    .forEach(button => {

        button.addEventListener("click", function() {

            showScreen("home-screen");

        });

    });


/* =========================================
   17. INITIALIZATION
========================================= */

console.log("DOXA ACADEMIC CHALLENGE READY!");

console.log(
    "Total questions:",
    Object.values(questionBank).reduce(
        (total, questions) => total + questions.length,
        0
    )
);
