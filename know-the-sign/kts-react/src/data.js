export const QUESTIONS = [
  { id:'q1', weight:'red',   en:"Are you soaking through a pad or cloth every hour for 2 hours or more?", ar:"هل تبللين فوطة كل ساعة لمدة ساعتين أو أكثر؟", jub:"Dam ta ita bi-bil gumash kulu sa'a le sa'ten?" },
  { id:'q2', weight:'red',   en:"Have you fainted, or do you feel very weak or dizzy?",                    ar:"هل أغمي عليكِ أو تشعرين بضعف شديد؟",           jub:"Ita bi-wuga wala bi-ta'ban shadid?" },
  { id:'q3', weight:'red',   en:"Do you have a fever AND discharge that smells bad?",                      ar:"هل لديكِ حمى مع إفرازات كريهة؟",               jub:"Ita fi homa wa riha ma kwayis?" },
  { id:'q4', weight:'yellow', en:"Has your bleeding lasted more than 7 days?",                             ar:"هل استمر النزيف أكثر من 7 أيام؟",              jub:"Dam ta ita aktar min 7 yom?" },
  { id:'q5', weight:'yellow', en:"Have you had no period for 3 months or more?",                           ar:"هل انقطعت دورتك لمدة 3 أشهر أو أكثر؟",        jub:"Ma fi dam 3 shahar wala aktar?" },
  { id:'q6', weight:'yellow', en:"Is the pain so bad you cannot do your normal activities?",               ar:"هل الألم شديد لدرجة أنكِ لا تستطيعين العمل؟",  jub:"Waja shadid ma bi-khallik ta'mili shughul?" },
  { id:'q7', weight:'yellow', en:"Are you bleeding between your periods?",                                 ar:"هل تنزفين بين الدورتين؟",                       jub:"Dam bi-iji bein shahar wa shahar?" },
]

export function triage(answers) {
  let level = 'g'
  const dangerSigns = []
  QUESTIONS.forEach(q => {
    if (answers[q.id] === 'yes') {
      dangerSigns.push(q)
      if (q.weight === 'red') level = 'r'
      else if (level !== 'r') level = 'y'
    }
  })
  return { level, dangerSigns }
}

export const FACILITIES = {
  'Central Equatoria': [
    { name:'Juba Teaching Hospital',   contact:'+211 920 000 001' },
    { name:'Munuki PHC Centre',        contact:'+211 920 000 002' },
  ],
  'Jonglei': [
    { name:'Bor State Hospital',       contact:'+211 920 000 010' },
  ],
  'Upper Nile': [
    { name:'Malakal Teaching Hospital',contact:'+211 920 000 020' },
  ],
  'Warrap': [
    { name:'Kuajok State Hospital',    contact:'+211 920 000 030' },
  ],
  'Panyijar': [
    { name:'Nyal Primary Hospital',    contact:'+211 920 000 040' },
  ],
}

export const COUNTIES = Object.keys(FACILITIES)

export const TX = {
  en: {
    dir:'ltr', title:'Know the Sign',
    tag:'A quick check for your period health. Private, free, works without internet.',
    start:'Start the check', info:'Normal or danger signs?',
    hist:'My past checks', priv:'Privacy', hw:'Health worker area',
    listen:'🔊 Listen', yes:'Yes', no:'No',
    restart:'Check again', home:'Home', langBtn:'عربي / Juba',
    g:'No warning sign found', y:'Talk to a health worker soon', r:'Get help today',
    gm:'Your answers do not show a warning sign. If you are worried, talk to a health worker.',
    ym:'Some answers need attention. Visit a health worker in the next few days.',
    rm:'Some answers can be serious. Go to the nearest health facility today.',
    disc:'This tool gives information only. It is not a diagnosis.',
    signs:'Signs you chose', where:'Where to go',
    nofac:'Visit your nearest health facility.',
    dist:'Choose your county', qn:'Question', of:'of',
    nohist:'No checks yet.', del:'Delete my history',
    ok_t:'Usually normal', bad_t:'See a health worker',
    ok:['Bleeding for 3–7 days','Mild cramps that ease with rest','A period every 21–45 days'],
    bad:['Soaking a pad every hour for 2+ hours','Fainting or feeling very weak','Pain you cannot bear, or fever with bad-smelling discharge','Bleeding more than 7 days','No period for 3 months or more'],
    pv:['We never ask for your name or phone number.','Your answers stay on this phone.','Results kept for 12 months, delete any time.','Only anonymous counts shared with health workers.'],
    tut:['Answer each question with Yes or No.','Tap Listen to hear the question read aloud.','Green, yellow or red tells you what to do next.'],
    go:'Got it', next:'Next', seeResult:'See result', bk:'← Back',
    chw:'CHW Dashboard', nodata:'No community data yet.', saveerr:'Could not save. Try again.', call:'Call',
    mh_t:'About Menstruation',
    mh:[
      'Menstruation is a normal, healthy part of growing up.',
      'A period usually lasts 3 to 7 days.',
      'The cycle repeats every 21 to 45 days.',
      'Some cramping and tiredness is normal.',
      'Every girl\'s body is different — that is okay.',
    ],
    trusted:'If you are worried about your health, talk to a trusted adult — a mother, aunt, teacher or health worker.',
  },
  ar: {
    dir:'rtl', title:'اعرفي العلامة',
    tag:'فحص سريع لصحة دورتك.',
    start:'ابدئي الفحص', info:'طبيعي أم علامة خطر؟',
    hist:'فحوصاتي السابقة', priv:'الخصوصية', hw:'منطقة العاملين الصحيين',
    listen:'🔊 استمعي', yes:'نعم', no:'لا',
    restart:'افحصي مرة أخرى', home:'الرئيسية', langBtn:'English / Juba',
    g:'لا توجد علامة خطر', y:'تحدثي مع عامل صحي', r:'اطلبي المساعدة اليوم',
    gm:'إجاباتك لا تظهر علامة خطر.', ym:'بعض إجاباتك تحتاج اهتماماً.', rm:'بعض إجاباتك قد تكون خطيرة.',
    disc:'هذه الأداة للمعلومات فقط.',
    signs:'العلامات التي اخترتِها', where:'أين تذهبين',
    nofac:'زوري أقرب مرفق صحي.',
    dist:'اختاري المقاطعة', qn:'السؤال', of:'من',
    nohist:'لا توجد فحوصات بعد.', del:'احذفي سجلي',
    ok_t:'عادة طبيعي', bad_t:'زوري عاملاً صحياً',
    ok:['نزيف من 3 إلى 7 أيام','تقلصات خفيفة','دورة كل 21 إلى 45 يوماً'],
    bad:['تبليل فوطة كل ساعة','إغماء أو ضعف شديد','ألم لا تتحملينه أو حمى','نزيف أكثر من 7 أيام','انقطاع الدورة 3 شهور'],
    pv:['لا نسأل عن اسمك.','إجاباتك تبقى في هذا الهاتف.','النتائج تُحفظ 12 شهراً.','تُشارك فقط أرقام مجهولة.'],
    tut:['أجيبي عن كل سؤال بنعم أو لا.','اضغطي استمعي لسماع السؤال.','الأخضر أو الأصفر أو الأحمر يخبرك بما تفعلين.'],
    go:'فهمت', next:'التالي', seeResult:'اعرضي النتيجة', bk:'رجوع →',
    chw:'لوحة العاملين', nodata:'لا توجد بيانات.', saveerr:'تعذر الحفظ.', call:'اتصال',
    mh_t:'عن الدورة الشهرية',
    mh:[
      'الدورة الشهرية جزء طبيعي وصحي من النمو.',
      'تستمر الدورة عادةً من 3 إلى 7 أيام.',
      'تتكرر الدورة كل 21 إلى 45 يوماً.',
      'بعض التقلصات والتعب أمر طبيعي.',
      'جسم كل فتاة مختلف — وهذا طبيعي.',
    ],
    trusted:'إذا كنتِ قلقة على صحتك، تحدثي مع شخص بالغ تثقين به — أم أو عمة أو معلمة أو عاملة صحية.',
  },
  jub: {
    dir:'ltr', title:'Arif Alama',
    tag:'Fahis gawi ta sihha ta dam ta shahar.',
    start:'Bida fahis', info:'Adi wala alama ta khatar?',
    hist:'Fahis ta ana ta gabil', priv:'Sirri', hw:'Mahal ta amil sihha',
    listen:'🔊 Asma', yes:'Eh', no:'La',
    restart:'Fahis tani', home:'Bet', langBtn:'English / عربي',
    g:'Ma fi alama ta khatar', y:'Kalim amil sihha', r:'Aju musaada leyom',
    gm:'Jawab ta ita ma bi-wari alama ta khatar.', ym:'Shunu jawab fi hajat intibah.', rm:'Shunu jawab yimkin khatir.',
    disc:'Da malumat bas. Da ma tashkhis.',
    signs:'Alama ita khatar', where:'Ruh wen',
    nofac:'Ruh sipitali gariban.',
    dist:'Khtar county', qn:'Sual', of:'min',
    nohist:'Ma fi fahis lisa.', del:'Mash tarikh',
    ok_t:'Adi bi-gum', bad_t:'Ruh amil sihha',
    ok:['Dam 3 le 7 yom','Waja khafif','Dam kulu 21 le 45 yom'],
    bad:['Dam bi-bil gumash kulu sa\'a','Ita bi-wuga','Waja ma bi-gum wala homa','Dam aktar min 7 yom','Ma fi dam 3 shahar'],
    pv:['Ma bi-sual esim ta ita.','Jawab bi-gum fi telefon.','Natija bi-itfaz 12 shahar.','Bas arqam majhula bi-itsharak.'],
    tut:['Jawib kul sual bi-Eh wala La.','Dug Asma ta tasma sual.','Akhdar wala asfar wala ahmar bi-gul shu ta\'mili.'],
    go:'Fahimt', next:'Tali', seeResult:'Wari natija', bk:'← Rujua',
    chw:'Dashboard ta amil sihha', nodata:'Ma fi data.', saveerr:'Ma gidirt ahfaz.', call:'Itasil',
    mh_t:'An Dam ta Shahar',
    mh:[
      'Dam ta shahar adi wa sihha kwayis fi numu.',
      'Dam bi-gum 3 le 7 yom adi.',
      'Bi-rija kulu 21 le 45 yom.',
      'Shuwaya waja wa ta\'ab adi.',
      'Jism ta kul bint mukhtalif — da kwayis.',
    ],
    trusted:'Lau ita khayfa ala sihha ta ita, kalim nas kibar ta ita — um, khaltu, mudarisa wala amil sihha.',
  }
}
