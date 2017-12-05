const backups = [
  {
    titleEN: "Backups",
    titlePK: "محفوظ وسائل",
  },
  {
    id: 1,
    route: "Problem",
    textEN: "When our devices break, or get lost or stolen, or even hacked, we can lose all the information held on them! Photos, messages, documents and contact information - all held on computers and phones and vulnerable to being used maliciously or destroyed by anyone with access to them.",
    textPK: "جب کبھی ہماری ڈیوائسز ٹوٹ جائیں یا گم ہوجائیں یا چرا لی جائیں یا ہیک کرلئے جائیں  تو ہم اس تمام معلومات سے ہاتھ دھو بیٹھتے ہیں جن میں شامل ہوتی ہیں ہماری تصاویر، پیغامات، مسودات اور ہمارے رابطوں کی معلومات۔ تمام معلومات جو ہمارے کمپیوٹروں اور موبائل فونز میں پڑی ہوتی ہیں اگر وہ چوری ہوجائیں یا ہیک کرلئے جائیں تو انہیں  غیر محفوظ کر کے ان کا غلط استعمال کیا جاتا ہے یا انہیں تباہ کر دیا جاتا ہے ۔"
  },
  {
    id: 2,
    route: "Solution",
    textEN: "Backing up your data is easy, and can even be done automatically. Some people prefer a physical device, like a USB or external hard drive. Others prefer online “cloud storage”. Both have their advantages, but are still vulnerable to attack so be sure to protect whichever one you choose!",
    textPK: "USBاپنے ڈیٹا کو بیک اپ دینا نہ صرف بہت آسان ہے بلکہ یہ خودکار طریقے سے بھی ہو سکتا ہے۔ کچھ لوگ   کو ترجیح دیتے ہیں “cloud storage”یا باہر سے لگنے والی ہارڈ ڈرائیو کو ترجیح دیتے ہیں۔جب کہ بعض صارف آن لائن دونوں کے اپنی اپنی جگہ پر فوائد ہیں، لیکن ابھی تک یہ بھی حملوں سے محفوظ نہیں ہیں لہٰذا اس بات کو یقینی کرے کہ آپ جس کا بھی انتخاب کریں اسے محفوظ بنائیں۔"
  },
  {
    id: 3,
    route: "Tips",
    textEN: "If you choose a USB or external hard drive, make sure you password-protect it like you would any device, and always store it in one area of your house so you will worry less about losing it. Adding a password to your files is a good way to protect them, however they are stored. Cloud storage is convenient because it does not require any physical equipment, but even if it is on a Google server it can still be hacked into or stolen so be sure to protect your accounts.",
    textPK: " یا ہارڈ ڈرائیو میں سے کسی کا بھی انتخاب کیا ہے تو اس بات کی تسلی کر لیں کہ جس طرح آپ USB ۔ اگر آپ  اپنی ڈیوائس کو پاس ورڈ لگا کر حفاظت دیتے ہیں اسی طرح ان پر بھی پاس ورڈ لگا کر اسے محفوظ بنائیں اور ہمیشہ  اسے اپنے گھر کے کسی ایک محفوظ مقام پہ رکھیں تاکہ اس کے گم ہونے کا خدشہ نہ ہو۔>۔ اپنی فائلوں کو پاس ورڈ لگانا بھی ایک اچھا اقدام ہے چاہے وہ آپکی ڈیوائس میں کسی محفوظ جگہ پر ہی کیوں نہ موجود ہوں   میں ذخیرہ کرنا کافی کارآمد ہے، کیونکہ اسے کسی مادی آلہ کی ضرورت نہیں ہوتی حالانکہ یہ گوگل سرور Cloud۔  پر ہوتا ہے پھر بھی اسے ہیک کیا یا چرایا جا سکتا ہےلہٰذا اس بات کی تسلی کر لیں کہ آپ کے اکاؤنٹس محفوظ ہیں"
  },
  {
    id: 4,
    route: "Resources",
    links: [
      {
        url: "https://securityinabox.org//en/guide/secure-file-storage",
        textEN: "Guide to secure file storage",
        textPK: "محفوظ فائل سٹوریج کیلئے رہنمائی"
      },
      {
        url: "https://www.howtogeek.com/124824/how-to-password-protect-pdf-files-in-word-2013/",
        textEN: "How to password-protect a Microsoft Office document",
        textPK: "کسی مائیکرو سافٹ آفس ڈاکیومنٹ کو کیسے پاس ورڈ سے محفوظ کریں"
      },
      {
        url: "https://www.pcworld.com/article/2308725/encryption/a-beginners-guide-to-bitlocker-windows-built-in-encryption-tool.html",
        textEN: "How to use Windows built-in encryption for removable drives",
        textPK: "ریمووایبل ڈرائیوز کیلئے ونڈوز بِلٹ ان اینکرپشن کیسے استعمال کریں"
      }
    ]
  }
];

const virus = [
  {
    titleEN: "Viruses and malware",
    titlePK: "وائرس اور مالویئر",
  },
  {
    id: 1,
    route: "Problem",
    textEN: "It is easy for our computers and phones to get infected by malicious programs called viruses. Just one virus hidden in an emailed picture can end in our data’s destruction or modification. Malware is one type of virus that can watch what you type in order to steal your information.",
    textPK: "ہمارے کمپیوٹر اور فون آسانی سے وائرس کہلائے جانے والے نقصان دہ پروگراموں کی زد میں آجاتے ہیں۔ محض ایک ای میل میں چھپا ہوا کوئی بھی ایک وائرس ہمارے ڈیٹا کو تبدیل یا تباہ کر سکتا ہے۔ مالویئر ایک ایسی قسم کا وائرس ہوتا ہے جو آپ کی معلومات چرانے کیلئے آپ کی جانب سے ٹائپ کی گئی ہر بات پہ نظر رکھتا ہے۔"
  },
  {
    id: 2,
    route: "Solution",
    textEN: "Protecting your computer from viruses, malware, spyware and other malicious programs can be as simple at installing anti-virus and anti-malware software and running regular checks to ensure you’re safe. If your devices get infected you may have to reset them, so always have a backup of your data!",
    textPK: "اینٹی وائرس اور اینٹی مالویئر انسٹال کرکے اپنے کمپیوٹر کو مالویئر، سپائے وایئر اور دیگر نقصان دہ پروگراموں سےآسانی سے محفوظ کیا جا سکتا ہےاور روزمرہ کی بنیاد پر چیک لگا کر ان سافٹ ویئرز کو چلانے سے یہ ہو گا کہ آپ کو تسلی ہوگی کہ آپ محفوظ ہیں۔ اگر آپ کی ڈیوائسز متاثر ہوگئی ہیں تو اپنے آلات کو ری سیٹ کر لیں تاکہ آپ کے ڈیٹا کا ہمیشہ بیک اپ رہے۔"
  },
  {
    id: 3,
    route: "Tips",
    textEN: "Only install known anti-virus software such as Norton, Avira and Avast. Also install anti-malware software and anti-spyware - the more protection you have, the better. We recommend Malwarebytes or Spybot especially because they also feature malware removalBe careful installing apps on your computer or phone when you can’t be sure of their legitimacy, it isn’t worth giving away your banking details just to get the latest game on your phone!Never open on links you aren’t sure of or download suspicious file attachments, viruses can be transmitted in photos, videos, audio and greeting cards, so always think twice before opening (or forwarding!) that funny mass emailAlways keep your phone and computer software up-to-date, vulnerabilities known as “exploits” are found and fixed regularly, so check that you are always protected",
    textPK: " جیسے مشہور اینٹی وائرس سافٹ ویئر ہی انسٹال کریں Avast اور Norton, Avira ۔ صرف ۔ اینٹی مالویئر سافٹ ویئر اور اینٹی سپائے ویئر کی تنصیب بھی کریں یعنی جتنے زیادہ حفاظتی اقدام آپ کریں گے اتنے     تجویز کرتے ہیں کیونکہ  Spybot یا Malwarebytes ہی آپ محفوظ رہیں گے۔ اس زمرے میں ہم خصوصاً ان میں مالویئر کو ختم کرنے کی خصوصیت بھی ہوتی ہے۔جب تک آپ  کوایپس کی قانونی حیثیت کے متعلق تسلی نہ ہو اپنے کمپیوٹر یا فون پر  انہیں  انسٹال کرتے وقت ہوشیار رہیں۔ اپنے فون پر محض کوئی نیا گیم خریدتے وقت اپنے بنک کی تفصیلات دینا کوئی اچھا تاثر نہیں ہے۔ ایسے لنکس کبھی نہ کھولیں جن کے ساتھ مشتبہ فائل اٹیچ منٹس ڈاؤن لوڈ کرنی ہوں کیونکہ اکثر تصاویر، ویڈیوز، آڈیو اور گریٹنگ کارڈز کیساتھ وائرس منسلک ہوتے ہیں لہٰذا ایسی مزاح والی ای میلز کو کھولتے وقت یا آگے بھیجنے سے پہلے ہمیشہ دو بار ضرور سوچیں کہلائی جانے والی غیر محفوظ “exploits”۔ ہمیشہ اپنے فون اور کمپیوٹر کے سافٹ ویئر کو اپ ٹو ڈیٹ رکھیں کیونکہ  چیزیں جو دیکھنے میں آئیں انہیں روز مرہ کے تحت حل کرتے رہیں تاکہ آپ کو ہمیشہ پتہ چلتا رہے کہ آپ محفوظ ہیں"
  },
  {
    id: 4,
    route: "Resources",
    links: [
      {
        url: "https://securityinabox.org/en/guide/malware",
        textEN: "Learn about different types of virus and how to recognise them",
        textPK: "مختلف اقسام کے وائرس کا علم رکھنے اور ان کی پہچان کیسے ہو یہ جاننے کیلئے"
      },
      {
        url: "https://www.androidcentral.com/three-basic-steps-protecting-your-android-device-viruses",
        textEN: "Basic steps for protecting your Android phone from viruses",
        textPK: "اپنے اینڈرائیڈ فون کو وائرس سے بچانے کیلئے بنیادی اقدامات"
      }
    ]
  }
];

const usbs = [
  {
    titleEN: "USB Devices",
    titlePK: "ڈرائیوزUSB",
  },
  {
    id: 1,
    route: "Problem",
    textEN: "We can use USB drives to backup our documents, photos and other precious data, or transfer them from one computer to another. They can be very useful portable storage devices. But even these can become compromised and we can end up losing our data or even accidentally infecting other computers.",
    textPK: "ہم اپنے مسودات، فوٹوز اوردیگر قیمتی ڈیٹا کو بیک اپ دینے یا انہیں ایک کمپیوٹر سے دوسرے تک منتقل کرنے کیلئے  ڈرائیوز کا استعمال کر سکتے ہیں۔ یہ بہت مفید سفری سٹوریج ڈیوائسز ثابت ہو سکتی ہیں۔ لیکن انہیں بھی کمزور کیاUSBجا سکتا ہےجس کے نتیجے میں ہم اپنا ڈیٹا کھو بھی سکتے ہیں اور حادثاتی طور پر دوسروں کے کمپیوٹروں کو بھی متاثر کر سکتے ہیں۔"
  },
  {
    id: 2,
    route: "Solution",
    textEN: "Just like you would with your computer or phone, it is important to check what you are copying to, or from, the USB drive. To protect the data on it, always remember to store the drive in a safe place and be sure to delete everything off it before disposal.",
    textPK: " میں یا اس سے کیا کاپی کر رہے ہیں لہٰذا جس طرح آپ اپنے کمپیوٹر USBیہ جاننا بہت ضروری ہے کہ آپ اپنی یا فون کو محفوظ بناتے ہیں اس ڈرائیو کو بھی ایسے ہی محفوظ بنائیں۔ ان پہ اپنا ڈیٹا محفوظ کرنے کیلئے ہمیشہ یاد رکھیں کہ اپنی ڈرائیو کو ایک محفوظ مقام پہ رکھیں اور انہیں ضائع کرنے سے پہلے اس بات کی یقین دہانی کر لیں کہ آپ نے تمام ڈیٹا اس میں سے حذف کر دیا ہے۔"
  },
  {
    id: 3,
    route: "Tips",
    textEN: "We do not recommend borrowing a USB drive or allowing someone to use yours, they can have spyware or malware on them which will infect your computer - cases of blackmail have arisen where women’s data was stolen after their computers were infected this way. While we caution against sharing USB drives, we realise it’s common practice to do so and sometimes there are no other alternatives, so we advise you run the USB through anti-virus and anti-malware software every single time you use it. If you must store sensitive data on your USB drive, look into buying a secure one with password protection.",
    textPK: " ڈرائیو کسی کو دیں یا کسی سے اس کی ڈرائیوادھارUSB۔ ہم آپ کو اس بات کی تجویز ہر گز نہیں دیں گے کہ آپ اپنیلیں، کیونکہ ان میں سپائے ویئر یا مالویئر ہو سکتے ہیں جو آپ کے کمپیوٹر کو متاثر کر سکتے ہیں۔ بلیک میلنگ کے بہت سے کیسز سامنے آئے ہیں جہاں خواتین کے کمپیوٹروں کو اسی طرح نقصان پہنچانے کے بعد ان کا ڈیٹا چرا لیا گیا تھا لینے اور دینے کی احتیاط کے بارے میں بتاتے ہوئے ہم اس حقیقت سے بھی آگاہ ہوئے کہ ایسا کرنا USB۔ ایک عام عادت بن گئی ہے اور کبھی کبھار ایسا کرنا نا گزیر ہو جاتا ہے تو اس صورت میں ہم آپ کو یہ تجویز دیں گے کہ اگر کسی کی ڈرائیو استعمال کرنی پڑ جائے تو ہر بار اپنے کمپیوٹر پر اسے چلاتے ہوئے اینٹی وائرس اور اینٹی مالویئر سافٹ ویئر کیساتھ چلائیں۔ ڈرائیو پہ کوئی حساس ڈیٹا رکھنا ہو توخریدتے ہوئے یہ ضرور دیکھ لیں کہ وہ کافی محفوظ ہےUSB۔ اگر اپنی  اور اس کیساتھ پاس ورڈ حفاظت بھی میسر ہے۔"
  },
  {
    id: 4,
    route: "Resources"
  }
];

export {backups, virus, usbs};
