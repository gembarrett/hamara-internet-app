const passwords = [
  {
    titleEN: "Passwords",
    titlePK: "پاس ورڈز",
  },
  {
    id: 1,
    route: "Problem",
    textEN: "Passwords may be the key to a wide range of resources and personal information, including email and financial details. But if our passwords can be guessed, discovered or otherwise bypassed then our security is severely damaged. <br /> <br />The impact can be even worse if we share passwords across different services or devices.",
    textPK: "پاس ورڈز ذاتی معلومات اور ذرائع بشمول ای میل اور مالی تفصیلات کی وسیع سلسلے کی چابی ہو سکتے ہیں۔ لیکن اگر کبھی ہمارے پاس ورڈز دریافت ہوجائیں، کسی کے ہاتھ لگ جائیں یا انہیں بائی پاس کر لیا جائے تو ہمارے دفاع کو شدید نقصان پہنچ سکتا ہے۔ <br /> <br />اگر ہم اپنے پاس ورڈز مختلف خدمات یا ڈیوائسز تک پہنچا دیں تو اس کے نقصانات اور بھی شدت اختیار کر سکتے ہیں۔"
  },
  {
    id: 2,
    route: "Solution",
    textEN: "Having strong passwords is the best, and easiest, way to protect your information from unauthorised access. <br /> <br />Make your passwords: unique - never share passwords across services long - ten or more characters is best varied - you can use numbers, capitals and punctuation difficult to guess - do not use obvious words like your name, 'password' or birthplace.",
    textPK: "اپنی معلومات کو نا جائز رسائی سے بچانے کا آسان ترین اور اور بہترین حل مضبوط پاس ورڈز رکھنا ہے۔ اپنے پاس ورڈز بنائیں:۔ منفرد اور اچھوتے۔ انہیں بیرونی خدمات تک بھی نہ پہنچنے دیں۔ طویل۔ بہترین حل یہ ہے کہ آپ کا پاس ورڈ دس یا اس سے زائد کرداروں پر مشتمل ہو۔ مختلف۔ آپ اعراب، انگریزی کے بڑے حروف تہجی اور نمبروں کا استعمال کر سکتے ہیں۔اندازہ لگانا مشکل ہو۔ اپنے نام، جائے پیدائش، فون نمبریا  سالگرہ کے دن جیسے واضح الفاظ کا استعمال نہ کریں"
  },
  {
    id: 3,
    route: "Tips",
    tips: [
      {
        textEN: "Remember that it is never wise to share your passwords with anyone, whether the person is your trusted friend, sibling or significant other.",
        textPK: " یاد رہے، اپنے پاس ورڈ کا کسی سے تبادلہ کرنا کوئی عقلمندی نہیں ہوتی، چاہے وہ شخص آپکا بھروسہ مند دوست، بہن، بھائی، والدین، منگیتر یا شوہر ہی کیوں نہ ہو"
      },
      {
        textEN: "Change your passwords on a regular basis and act quickly if you feel they may have been compromised. Use phrases instead of words to make the password longer and more secure.",
        textPK: "باقاعدگی سے اپنے پاس ورڈ تبدیل کرتے رہا کریں اور جب آپ کو لگے کہ اس حصار کو کمزور کیا جاسکتا ہے تو فوری ایکشن لیں"
      },
      {
        textEN: "To keep track of lots of passwords you can use a system like KeePassX, 1Password or Encryptr, which will also generate strong passwords for you",
        textPK: " پاس ورڈ طویل اور زیادہ محفوظ بنانے کیلئے الفاظ کی بجائے عبارت کا استعمال کریں. جیسے کسی نظام کا استعمال   اینکرپٹز   پاس ورڈ  یا  کی پاس ایکس  ۔ کافی تعداد میں پاس ورڈ جاننے اور مزید جاننے کیلئے آپ"
      },
      {
        textEN: "If you forget your password you may have to answer some security questions (e.g. the name of your first pet). When you are setting the answers to these, use incorrect information to make it harder for others to guess.",
        textPK: "کر سکتے ہیں جو آپ کیلئے مضبوط پاس ورڈ بھی بنا سکتے ہیں۔ اگر آپ اپنا پاس ورڈ بھول جائیں تو آپ سے چند حفاظتی سوالات بھی پوچھے جا سکتے ہیں (مثلاً: آپ کے پہلے پالتو جانور کا نام کیا ہے؟)۔ جب آپ جوابات ترتیب دے رہے ہوں تودوسروں کیلئے اسے مشکل بنانے کیلئے غلط معلومات فراہم کریں."
      }
    ]
  },
  {
    id: 4,
    route: "Resources",
    links: [
      {
        url: "https://strongpasswordgenerator.com/",
        textEN: "Strong password generator and guidance",
        textPK: "مضبوط پاس ورڈ مرتب کرنے والا اور اس کی رہنمائی",
        src: "strongpasswordgenerator.com"
      },
      {
        url: "https://securityinabox.org/en/guide/keepassx/windows",
        textEN: "Guide to using KeePassX",
        textPK: "استعمال کرنے میں رہنمائی کی پاس ایکس ",
        src: "securityinabox.org"
      },
    ]
  }
];

const twoFA = [
  {
    titleEN: "Two-factor authentication",
    titlePK: "دو طرفہ تصدیق",
  },
  {
    id: 1,
    route: "Problem",
    textEN: "It might not be obvious to us when someone has used our passwords to get unauthorised access to our accounts. <br /> <br />If others are spying by reading our emails or messages, then we might never be aware of it, and the service provider has no way of knowing either.",
    textPK: "جب کوئی بغیر اجازت ہمارے اکاؤنٹس تک رسائی حاصل کرنے کیلئے ہمارے پاس ورڈز استعمال کرے تو شاید یہ ہم پر کبھی یہ بات نہ کھلے۔ <br /> <br />اگر کوئی ہماری ای میلز یا پیغامات کو پڑھ کر ہم پہ جاسوسی کرے تو شاید ہمیں اس بات کا کبھی پتہ نہ چل سکے، اور نہ ہی خدمت مہیا کار کے پاس اس کی جانچ کا کوئی راستہ ہو۔"
  },
  {
    id: 2,
    route: "Solution",
    textEN: "Two-factor authentication is a good backup for strong passwords. <br /> <br />It works by linking your phone number with your online account, so that when you sign in with your password, an additional check is done by using a verification method on your phone to check it is definitely you.",
    textPK: " ایک اچھا بیک اپ ہے۔ آپ کے آن  ٹو فیکٹر اتھینٹی کیشن مضبوط پاس ورڈز کیلئے دو طرفہ تصدیق  یا لائن اکاؤنٹ کیساتھ آپ کے فون نمبر کو منسلک کرکے یہ کام کرتا ہے، تاکہ جب بھی آپ اپنے پاس ورڈ کیساتھ سائن ان ہوتے ہیں تو آپ کے فون پر ایک تصدیقی عمل کے استعمال سے ایک اضافی خانہ کھلتا ہےجس سے یہ پتہ چلتا ہے کہ یہ حقیقت میں آپ ہی ہیں یا کوئی اور۔"
  },
  {
    id: 3,
    route: "Tips",
    tips: [
      {
        textEN: "Remember that two-factor authentication means that your phone becomes more valuable and you should keep it as secure as you can to help protect your accounts. Some services allow you to download backup codes for when you need to sign in urgently - handy if your phone gets lost, broken or stolen - but you should never save these on your phone, keep a physical copy somewhere secret and safe.",
        textPK: "یاد رکھیں دو طرفہ تصدیق کا مطلب ہوتا ہے کہ آپ کا فون اب آپ کیلئے بہت ضروری ہوگیا ہے اور اب آپ کو اسے زیادہ محفوظ رکھنا چاہئے تاکہ آپ کو اپنے اکاؤنٹس کو محفوظ رکھنے میں مدد ملے. چند ایک خدمات آپ کو یہ اجازت دیتی ہیں کہ آپ بیک اپ کوڈز ڈاؤن لوڈ کریں تاکہ اگر کبھی آپ کو عجلت میں سائن ان ہونے کی ضرورت پڑے اور اس وقت اگر آپ کا فون گم ہو گیا ہے یا خراب ہو گیا ہے یا چوری ہو گیا ہے تو ان کوڈز کا استعمال کیا جاسکے۔ لیکن ان بیک اپ کوڈز اپنے فون میں کبھی محفوظ نہ کریں بلکہ ان کو کسی جگہ تحریر کر کے محفوظ اور خفیہ مقام پہ رکھیں تاکہ بوقتِ ضرورت کام آسکیں"
      },
      {
        textEN: "The default method for two-factor authentication is for the service to send you a text message or an automated phone call, however, authenticator apps that generate codes are also available and are more secure. It is preferable to use an authenticator app on your phone so that you aren’t locked out of your account when cellphone signals are blocked or you go abroad.",
        textPK: " دو طرفہ تصدیق کیلئے ڈیفالٹ عمل، آپ کو ایک ٹیکسٹ پیغام بھیجنے یا خودکار فون کال بھیجنے کیلئے ہوتا ہے، تاہم. کوڈز مرتب کرتی ہیں وہ بھی میسر ہیں  QRتصدیقی ایپس جو۔ آپکے فون پر ایک تصدیقی ایپ کو استعمال کرنے کو ترجیح دی جاتی ہے تاکہ جب کبھی آپ ملک سے باہر ہوں یا آپ کے موبائل کے سگنلز معینہ  یا غیر معینہ مدت کیلئے بند کر دیئے جائیں تو آپ کے اکاؤنٹس پر آپ کی دسترس ختم نہ ہو"
      },
      {
        textEN: "The Facebook app has a built-in code generator, but the app itself is very invasive and uses your camera, microphone, and a lot more information on your phone than you would think. Services like Google create their own authenticator apps, but it can be more efficient to use an option like DuoMobile which can manage multiple services (including Facebook and Google)",
        textPK: "۔ فیس بک ایپ ایک پہلے سے موجود کوڈ کو ترتیب دینے کا عمل رکھتی ہے لیکن وہ ایپ ناگوار اس لئے ہے کہ وہ آپ کی سوچ سے بھی زیادہ آپ کے فون پر آپ کی کافی سے زیادہ معلومات ، مائیکروفون، اور آپ کے موبائل کیمرے کو استعمال کرتے ہوئے انہیں اپنی دسترس میں لے لیتی ہے۔ جیسے کسی اختیار کو چلانا زیادہ  DuoMobile۔ گوگل جیسی خدمات اپنی خود کی تصدیقی ایپ تخلیق کرتی ہیں لیکنمؤثر ہوسکتا ہے کیونکہ ایسے اختیارات مختلف خدمات کے نظام کیساتھ کرتے ہیں (بشمول فیس بک اور گوگل)"
      }
    ]
  },
  {
    id: 4,
    route: "Resources",
    links: [
      {
        url: "https://twofactorauth.org/",
        textEN: "How to set up two-factor authentication on all your services",
        textPK: "اپنی تمام سروسز پر دو طرفہ تصدیق کو کیسے مرتب کریں",
        src: "twofactorauth.org"
      },
      {
        url: "https://www.google.com/safetycenter/everyone/start/",
        textEN: "Google security checklist",
        textPK: "گوگل حفاظتی چیک لسٹ",
        src: "google.com"
      },
      {
        url: "https://support.google.com/accounts/answer/1066447?co=GENIE.Platform%3DAndroid&hl=en",
        textEN: "Google Authenticator app",
        textPK: "Google Authenticator app",
        src: "google.com"
      },
      {
        url: "https://duo.com/solutions/features/two-factor-authentication-methods/duo-mobile",
        textEN: "Duo Mobile app",
        textPK: "Duo Mobile app",
        src: "duo.com"
      }
    ]
  }
];

export {passwords, twoFA};
