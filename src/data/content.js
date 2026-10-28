export const clinic = {
  name: 'Dr Rashmi Saxena',
  clinicName: "Dr Rashmi Saxena's Women's Clinic",
  gmbName: 'BEST GYNAECOLOGIST DR RASHMI SAXENA',
  phoneDisplay: '096502 91732',
  phoneHref: 'tel:+919650291732',
  whatsapp: 'https://wa.me/919650291732',
  address:
    "Shop No 15, FF, High Street Market, near Domino's & Amatra & Rivaah Banquets, 14th Ave, near the petrol pump, Rani Laxmibai Nagar, Yusufpur, Gaur City 2, Greater Noida, Uttar Pradesh 201009",
  addressShort: 'Gaur City 2, Greater Noida',
  addressLines: [
    'Shop No 15, First Floor, High Street Market',
    "Above Domino's, Amatra & Rivaah Banquets",
    '14th Avenue, near the petrol pump',
    'Rani Laxmibai Nagar, Yusufpur, Gaur City 2',
    'Greater Noida, Uttar Pradesh 201009',
  ],
  hoursLabel: 'Mon – Sat 6:30–8:30 pm · Sat & Sun 11:30 am–1:30 pm',
  hours: [
    {
      days: 'Monday – Saturday',
      time: '6:30 PM – 8:30 PM',
    },
    {
      days: 'Saturday & Sunday',
      time: '11:30 AM – 1:30 PM',
    },
  ],
  hoursNote:
    'Timings can occasionally vary with emergency hospital commitments. A quick call before leaving is always recommended.',
  rating: '4.9',
  reviewCount: '166',
  maps: 'https://www.google.com/maps/search/?api=1&query=BEST+GYNAECOLOGIST+DR+RASHMI+SAXENA+Gaur+City+2',
  googleProfile:
    'https://www.google.com/search?kgmid=/g/11kfjq8j47&hl=en-IN&q=BEST+GYNAECOLOGIST+DR+RASHMI+SAXENA',
  mapEmbed:
    'https://maps.google.com/maps?q=BEST%20GYNAECOLOGIST%20DR%20RASHMI%20SAXENA%2C%20Gaur%20City%202%2C%20Greater%20Noida&t=&z=16&ie=UTF8&iwloc=&output=embed',
}

export const services = [
  {
    slug: 'pregnancy-care',
    title: 'Pregnancy Care',
    fullTitle: 'Pregnancy & Antenatal Care',
    tags: ['Antenatal', 'Scans', 'Nutrition'],
    text: 'Trimester-by-trimester monitoring, scans and calm, well-supported care throughout.',
    intro:
      'Complete antenatal care from conception to delivery — regular check-ups, ultrasound monitoring, nutritional guidance and postnatal support, all under one roof.',
    includes: [
      'Trimester-by-trimester antenatal check-ups',
      'Ultrasound and scan monitoring',
      'Nutrition, iron and supplement guidance',
      'Postnatal review and breastfeeding support',
    ],
    price: '500',
    unit: 'visit',
    image: '/assets/clinic/happy-family.jpg',
    alt: 'A family with their newborn baby after delivery',
  },
  {
    slug: 'high-risk-pregnancy',
    title: 'High-Risk Pregnancy',
    fullTitle: 'High-Risk Pregnancy & Painless Delivery',
    tags: ['Diabetes', 'Hypertension', 'Twins'],
    text: 'Close supervision for pregnancies that need extra attention, with delivery planned in advance.',
    intro:
      'Expert management of complicated pregnancies, with closer monitoring and a delivery plan agreed well in advance. Painless normal delivery with epidural analgesia is available, with caesarean section when it is needed.',
    includes: [
      'Close monitoring for diabetes, hypertension and twins',
      'Delivery planned in advance with hospital partners',
      'Epidural painless normal delivery',
      'Caesarean section when medically indicated',
    ],
    price: '500',
    unit: 'visit',
    image: '/assets/clinic/doctor-at-desk.jpg',
    alt: 'Dr Rashmi Saxena at her desk in the clinic',
  },
  {
    slug: 'fertility-care',
    title: 'Fertility Care',
    fullTitle: 'Fertility & Infertility Assessment',
    tags: ['Assessment', 'Ovulation', 'ART'],
    text: 'Structured fertility evaluation and treatment for couples trying to conceive.',
    intro:
      'A structured fertility evaluation for both partners, followed by a personalised treatment plan — ovulation induction, IUI, and referral for IVF or ICSI when it is the right next step.',
    includes: [
      'Fertility evaluation for both partners',
      'Ovulation induction and cycle tracking',
      'IUI and ART / IVF guidance',
      'Personalised treatment protocols',
    ],
    price: '500',
    unit: 'visit',
    image: '/assets/clinic/consultation.jpg',
    alt: 'A couple discussing a care plan with the doctor at the clinic desk',
  },
  {
    slug: 'pcos-hormones',
    title: 'PCOS & Hormones',
    fullTitle: 'PCOS, Periods & Thyroid Care',
    tags: ['PCOS', 'Irregular Cycles', 'Thyroid'],
    text: 'Practical, long-term management for hormonal health, cycles and metabolic concerns.',
    intro:
      'Diagnosis and long-term management of PCOS, menstrual disorders, thyroid dysfunction and hormonal imbalance — combining medical therapy with practical diet and lifestyle support.',
    includes: [
      'PCOS diagnosis and management',
      'Treatment for irregular or painful periods',
      'Thyroid and hormonal balance',
      'Diet and lifestyle planning',
    ],
    price: '500',
    unit: 'visit',
    image: '/assets/clinic/consulting-room.jpg',
    alt: 'The clinic consultation room with examination couch and desk',
  },
  {
    slug: 'screening-pap',
    title: 'Screening & PAP',
    fullTitle: 'PAP Smear, Colposcopy & Cancer Vaccine',
    tags: ['PAP Smear', 'Colposcopy', 'HPV'],
    text: 'Preventive screening and cervical cancer vaccination in a private, unhurried setting.',
    intro:
      'Cervical cancer screening with PAP smear, colposcopy and endometrial biopsy, plus HPV vaccination for protection against cancer of the cervix — completed comfortably in the clinic.',
    includes: [
      'PAP smear and cervical cancer screening',
      'Colposcopy and endometrial biopsy',
      'HPV and cervical cancer vaccination',
      'In-clinic lab investigations',
    ],
    price: '500',
    unit: 'visit',
    image: '/assets/clinic/reception.jpg',
    alt: 'The clinic reception desk where patients are received',
  },
  {
    slug: 'gynae-surgery',
    title: 'Gynae Surgery',
    fullTitle: 'Gynaecological Surgery',
    tags: ['Laparoscopy', 'Hysteroscopy', 'Fibroids'],
    text: 'Advanced gynaecological surgery with senior hospital partners across Noida.',
    intro:
      'Minimally invasive and open gynaecological surgery — hysterectomy, myomectomy, ovarian cystectomy and laparoscopic procedures — performed with senior hospital partners across Noida.',
    includes: [
      'Hysterectomy and myomectomy',
      'Ovarian cystectomy',
      'Laparoscopic and open procedures',
      'Post-operative review and follow-up',
    ],
    price: '500',
    unit: 'visit',
    image: '/assets/clinic/doctor-at-desk.jpg',
    alt: 'Dr Rashmi Saxena reviewing a patient plan at her desk',
  },
]

export const reasons = [
  {
    icon: '/assets/template/icon-why-medical.webp',
    title: '20+ Years of Care',
    text: 'Two decades in obstetrics, gynaecology and fertility, with thousands of safe deliveries behind her.',
  },
  {
    icon: '/assets/template/icon-why-licensed.webp',
    title: 'MD, Obs & Gynaecology',
    text: 'MBBS from the University of Delhi and MD from Lady Hardinge Medical College, New Delhi.',
  },
  {
    icon: '/assets/template/icon-why-traceable.webp',
    title: 'In-Clinic Lab & Testing',
    text: 'Blood work, PAP smears and scans under one roof, so tests happen without the runaround.',
  },
  {
    icon: '/assets/template/icon-why-consultation.webp',
    title: 'Partner Hospitals',
    text: 'Deliveries and surgeries supported at Cloud 9, Yatharth and Motherland hospitals, Noida.',
  },
]

export const credentials = [
  'MBBS, University of Delhi',
  'MD (Obstetrics & Gynaecology), Lady Hardinge Medical College',
  'Trained in Assisted Reproductive Techniques (ART)',
  'Member — AOGD & FOGSI',
  'Visiting Consultant — Cloud 9, Yatharth, Motherland Hospitals',
  'Formerly at Lady Hardinge & LNJP Hospital, Delhi',
]

export const visitSteps = [
  {
    title: 'Consultation',
    text: 'We sit down and talk through your concerns, history and what matters to you. Nothing is rushed and nothing is assumed.',
    image: '/assets/clinic/consultation.jpg',
    alt: 'A consultation in progress at the clinic desk',
  },
  {
    title: 'A Plan, and a Cost',
    text: 'You leave with a clear plan and an exact cost — tests, scans and treatment explained before anything is booked.',
    highlight: 'exact cost',
    image: '/assets/clinic/doctor-at-desk.jpg',
    alt: 'Dr Rashmi Saxena writing notes at her desk',
  },
  {
    title: 'Tests, Under One Roof',
    text: 'Blood work, PAP smears, colposcopy and scans are done in the clinic, so you are not sent between labs.',
    image: '/assets/clinic/consulting-room.jpg',
    alt: 'The clinic examination room prepared for a patient',
  },
  {
    title: 'Follow-Up, Included',
    text: 'We review your reports together and adjust the plan if needed. Your questions are always welcome.',
    image: '/assets/clinic/reception.jpg',
    alt: 'The clinic reception desk',
  },
]

export const reviews = [
  {
    name: '- Vikas Salar',
    quote:
      '“Dr Rashmi Saxena is an absolute beacon of empathy, professionalism and unwavering support. Her expertise and compassionate guidance gave us unmatched peace of mind through the entire journey.”',
    photo: '/assets/clinic/happy-family.jpg',
    alt: 'A family with their newborn at the hospital',
    service: 'Pregnancy & Delivery',
  },
  {
    name: '- Vijay Pal',
    quote:
      '“What a relief to find such a compassionate gynaecologist. Throughout my pregnancy I received top-notch care, especially during the high-risk stages. Her reassuring nature helped me navigate it smoothly.”',
    photo: '/assets/clinic/doctor-at-desk.jpg',
    alt: 'Dr Rashmi Saxena at her desk in the clinic',
    service: 'High-Risk Pregnancy',
  },
  {
    name: '- Ashish Kumar',
    quote:
      '“We are extremely thankful to Dr Rashmi for the successful delivery of our baby. Her calm nature, expertise and support gave us confidence at every step of the pregnancy.”',
    photo: '/assets/clinic/consultation.jpg',
    alt: 'A couple during a consultation at the clinic',
    service: 'Painless Normal Delivery',
  },
]

export const carePrograms = [
  {
    name: 'The Essentials',
    description: 'Best for first visits & general check-ups',
    price: '₹500',
    unit: 'consultation',
    features: ['Unhurried consultation', 'In-clinic lab testing', 'Prescription & follow-up notes'],
  },
  {
    name: 'The Fertility',
    description: 'Best for conception support',
    price: 'On request',
    unit: '',
    features: [
      'Fertility assessment',
      'Ovulation tracking',
      'ART & IUI guidance',
      'Partner counselling',
    ],
  },
  {
    name: 'The Antenatal',
    description: 'Best for pregnancy care',
    price: 'On request',
    unit: '',
    featured: true,
    features: [
      'Monthly antenatal visits',
      'Painless delivery planning',
      'Scans & lab work in clinic',
      'Hospital coordination',
      'Phone guidance through pregnancy',
    ],
  },
]

export const gallerySlides = [
  {
    title: 'The Clinic at Gaur City 2',
    after: '/assets/clinic/signboard.jpg',
    before: '/assets/clinic/reception.jpg',
    afterAlt: 'The clinic signboard at 14th Avenue High Street Market, Gaur City 2',
    beforeAlt: 'The clinic reception desk inside',
    afterPosition: '50% 8%',
    beforePosition: '50% 50%',
    details: ['Shop 15, 1st Floor', '14th Avenue High Street', 'Walk-ins welcome'],
  },
  {
    title: 'The Consultation Room',
    after: '/assets/clinic/consulting-room.jpg',
    before: '/assets/clinic/consultation.jpg',
    afterAlt: 'The private consultation room',
    beforeAlt: 'A consultation with a couple at the clinic',
    afterPosition: '50% 38%',
    beforePosition: '50% 45%',
    details: ['Private & unhurried', 'In-clinic lab', 'Evening OPD'],
  },
]

export const gmbReviews = [
  {
    name: 'alka burman',
    quote: '“I highly recommend this place for smooth pregnancy journey.”',
    service: 'Google review',
  },
  {
    name: 'aashi rai',
    quote:
      '“She gave a good guidance. Her skills and experience are highly appreciable.”',
    service: 'Google review',
  },
]

export const gmbProducts = [
  {
    name: 'Lab facility & investigations',
    text: 'Routine blood work and investigations under one roof.',
  },
  {
    name: 'Colposcopy',
    text: 'Magnified examination of the cervix when screening needs a closer look.',
  },
  {
    name: 'Diet plan',
    text: 'Practical diet planning for PCOS, pregnancy and metabolic health.',
  },
  {
    name: 'Cervical cancer vaccine',
    text: 'HPV vaccination for protection against cancer of the cervix.',
  },
  {
    name: 'Thyroid management',
    text: 'Diagnosis and follow-up for thyroid disorders affecting women.',
  },
  {
    name: 'PCOS & menstrual health',
    text: 'Long-term care for PCOS, irregular cycles and hormonal concerns.',
  },
  {
    name: 'Infertility treatment',
    text: 'Fertility evaluation, ovulation induction and ART guidance.',
  },
  {
    name: 'Endometrial biopsy',
    text: 'Sampling of the uterine lining for an accurate diagnosis.',
  },
  {
    name: 'PAP smear',
    text: 'Cervical screening for early detection and prevention.',
  },
]

export const gmbCare = [
  'Antenatal & postnatal care',
  'Fertility consultation',
  'High-risk pregnancy management',
  'Cervical cancer screening (PAP smear) & vaccination',
  'Abortion care',
  'Normal delivery',
  'Painless normal delivery',
  'Caesarean section',
  'Hysterectomy, myomectomy & other gynae surgeries',
]

export const faqs = [
  {
    question: "Where exactly is Dr Rashmi Saxena's clinic located in Gaur City 2?",
    answer:
      "Shop No 15, First Floor, High Street Market, 14th Avenue, Rani Laxmibai Nagar, Yusufpur, Gaur City 2, Greater Noida 201009. It is just above Domino's, Amatra and Rivaah Banquets, near the petrol pump. Plus code: JC99+97.",
  },
  {
    question: 'What are the clinic OPD timings?',
    answer:
      'Monday to Saturday 6:30 pm to 8:30 pm, and Saturday and Sunday 11:30 am to 1:30 pm. Timings can occasionally vary with emergency hospital commitments, so a quick call to 096502 91732 before leaving is recommended.',
  },
  {
    question: 'Do I need an appointment or can I walk in?',
    answer:
      "You can walk in during OPD hours. Calling first is advised for a first visit, for fertility consultations or if you are travelling from outside Gaur City, so that you won't experience long waiting times.",
  },
  {
    question: 'Where does Dr Rashmi Saxena deliver babies and perform surgeries?',
    answer:
      'Deliveries — including normal and painless normal delivery — and surgeries are performed at premier multispeciality hospitals in Noida where she is a senior visiting consultant: Cloud 9 Hospital, Yatharth Hospital and Motherland Hospital.',
  },
  {
    question: 'What is the consultation fee and which payment methods are accepted?',
    answer:
      'The consultation fee is approximately ₹500. Fees may change, so please confirm current charges when booking. Payments at the clinic are accepted via UPI and cash.',
  },
  {
    question: 'Does the clinic have in-house lab and testing facilities?',
    answer:
      'Yes. The clinic offers in-clinic lab facilities for routine blood investigations, PAP smear, colposcopy, endometrial biopsy and cervical cancer screening, allowing patients to complete tests comfortably under one roof.',
  },
]
