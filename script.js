/* ==========================================================================
   PAPA'S BIRTHDAY LEGACY GAME - MASTER ENGINE (V6.0 ULTRA ELEGANCE)
   Celebrating October 6th - Papa's Special Birthday Edition 🎂
   
   Features:
   - PowerPoint-Style Multi-Stage Front Cover & Intro Slide System
   - Dedicated Circular Portrait Image Container for Papa
   - Interactive "About This Website" Creative Intro Drawer
   - Dedicated Quiz Front Cover Page prior to Trivia Launch
   - October 6th Birthday Power-Ups, Streak Multipliers & Negative Points
   - Timed Birthday Mini-Games with LocalStorage High Score Persistence
   - Dynamic Background Blur & Glassmorphism Control
   - All 23 Original Trivia Questions Kept 100% Unchanged
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. QUESTION DATABASE (ALL 23 ORIGINAL QUESTIONS PRESERVED EXACTLY)
// --------------------------------------------------------------------------
const gameQuestions = [
  // ==================== CATEGORY 1: FOOD & DRINKS ====================
  {
    id: 1,
    category: "Food & Drinks",
    type: "WYR",
    theme: "theme-chai",
    title: "The Heatwave Chai Dilemma",
    prompt: "Would Papa rather drink a piping hot cup of his favourite Masala Chai in the middle of a 40°C summer heatwave for a week OR be forbidden from drinking Chai for a whole month?",
    optionA: {
      text: "Drink piping hot Masala Chai in 40°C heat for a week",
      points: 150,
      verdict: "A true chai loyalist! Sweating through hot tea in July builds character, but stopping chai for 30 days is a medical hazard.",
      popup: { title: "☕ CHAI LOYALIST REACTION!", icon: "🔥", badge: "LEGENDARY DEDICATION", msg: "Sweat is temporary, Chai is eternal! Papa respects this thermal sacrifice." }
    },
    optionB: {
      text: "Be forbidden from drinking Chai for a whole month",
      points: -100,
      verdict: "Blasphemy! Abandoning chai for 30 days violates the fundamental laws of the household.",
      popup: { title: "🚨 HOUSEHOLD CODE VIOLATION!", icon: "⚠️", badge: "TEA DEPRIVATION", msg: "30 days without tea?! The kitchen has declared an official state of mourning." }
    }
  },
  {
    id: 2,
    category: "Food & Drinks",
    type: "WYR",
    theme: "theme-chai",
    title: "The Evening Biscuit Mishap",
    prompt: "Would Papa rather accidentally drop his evening biscuit into his Masala Chai and have it dissolve at the bottom OR have someone serve him Chai made with zero ginger or elaichi?",
    optionA: {
      text: "Accidentally drop his biscuit and let it dissolve at the bottom",
      points: 120,
      verdict: "Tactical salvage! You can scoop out soggy biscuit remains with a spoon; plain boiled milk water without ginger is an unpardonable insult.",
      popup: { title: "🥄 BISCUIT RESCUE TEAM!", icon: "☕", badge: "TACTICAL SALVAGE", msg: "Spoon activated! Soggy biscuit pudding is still better than tasteless warm milk." }
    },
    optionB: {
      text: "Have someone serve him Chai made with zero ginger or elaichi",
      points: -80,
      verdict: "Unacceptable! Drinking chai without ginger and elaichi ruins the entire emotional foundation of the afternoon.",
      popup: { title: "🚫 FLAVOR POLICE ALERT!", icon: "❌", badge: "SPICE MISSING", msg: "Zero ginger?! That isn't chai, that's just sad hot water." }
    }
  },
  {
    id: 3,
    category: "Food & Drinks",
    type: "WYR",
    theme: "theme-chai",
    title: "The Holy Bottle Ghiya Trade-Off",
    prompt: "Would Papa rather eat a giant bowl of Ghiya (Bottle God) for breakfast, lunch, and dinner for a week OR never be allowed to eat Urad Dully Daal again?",
    optionA: {
      text: "Eat a giant bowl of Ghiya 3 times a day for a week",
      points: 140,
      verdict: "Long live the Bottle Gourd! Consuming divine Ghiya for 21 consecutive meals is a sacrifice Papa will gladly make to save his Urad Daal.",
      popup: { title: "🥗 DIVINE GHIYA DEVOTEES!", icon: "🥒", badge: "HEALTH GOD", msg: "21 meals of Bottle Gourd consumed! Urad Daal has been saved for eternity." }
    },
    optionB: {
      text: "Never be allowed to eat Urad Dhuli Daal again` for life",
      points: -120,
      verdict: "Tragic error! Permanently banning Urad Daal removes a cornerstone of culinary happiness.",
      popup: { title: "💔 DAAL BAN DISASTER!", icon: "🍲", badge: "CULINARY TRAGEDY", msg: "Banning Urad Daal forever?! The dinner table will never recover." }
    }
  },
  {
    id: 4,
    category: "Food & Drinks",
    type: "WYR",
    theme: "theme-chai",
    title: "The Temperature vs Crispness Paradox",
    prompt: "Would Papa rather have unlimited Chai that is always slightly too cold OR unlimited biscuits that are always slightly stale?",
    optionA: {
      text: "Unlimited Chai, but always slightly too hot",
      points: 110,
      verdict: "A patient master's choice! Hot chai can always be blown on or poured into a saucer. Stale biscuits are beyond redemption.",
      popup: { title: "💨 SAUCER BLOWING TECHNIQUE!", icon: "♨️", badge: "PATIENT MASTER", msg: "Patience unlocked! Pouring hot chai into the saucer reduces temperature by 12°C instantly." }
    },
    optionB: {
      text: "Unlimited biscuits, but always slightly stale",
      points: -50,
      verdict: "A sad crunch! Life is too short to dip soggy, lifeless biscuits into good tea.",
      popup: { title: "📉 SOGGY CRUNCH WARNING!", icon: "🥖", badge: "STALE BISCUIT", msg: "Soggy biscuit detected. The tea cup groans in sadness." }
    }
  },

  // ==================== CATEGORY 2: SPORTS (FOOTBALL & CRICKET) ====================
  {
    id: 5,
    category: "Football",
    type: "WYR",
    theme: "theme-football",
    title: "The Manager Hot Seat",
    prompt: "Would Papa rather give Michael Carrick a lifetime contract to manage Manchester United (even with rocky form) OR have rivals Manchester City win another Champions League trophy?",
    optionA: {
      text: "Give Michael Carrick a lifetime contract at Old Trafford",
      points: 160,
      verdict: "In Carrick we trust! Anything—literally anything—is better than enduring another Manchester City Champions League parade.",
      popup: { title: "⚽ RED DEVILS LOYALTY!", icon: "🔴", badge: "OLD TRAFFORD UNITED", msg: "In Carrick We Trust! Blue ribbons are officially banned from the household." }
    },
    optionB: {
      text: "Have rivals Manchester City win another Champions League",
      points: -200,
      verdict: "Traitorous thoughts! Supporting a rival trophy victory results in an immediate penalty deduction.",
      popup: { title: "🟥 RED CARD ISSUED!", icon: "🟨", badge: "RIVAL PENALTY", msg: "REFEREE BLOWS WHISTLE! Supporting noisy neighbors costs 200 points!" }
    }
  },
  {
    id: 6,
    category: "Football",
    type: "WYR",
    theme: "theme-football",
    title: "The Ultimate Red Sacrifice",
    prompt: "Would Papa rather see United completely dominate the Premier League season BUT he can never watch a live match again (text updates only) OR watch every game live at 3:00 AM but United finishes 12th?",
    optionA: {
      text: "United dominates the Premier League (Text updates only)",
      points: 130,
      verdict: "The selfless patriarch! Sacrifice personal viewing pleasure for the absolute glory of the red shirt.",
      popup: { title: "📱 TEXT NOTIFICATION HERO!", icon: "🏆", badge: "SELFLESS PATRIARCH", msg: "PING! 'Manchester United are Premier League Champions!' Sacrifice appreciated." }
    },
    optionB: {
      text: "Watch every match live at 3:00 AM, but United finishes 12th",
      points: -90,
      verdict: "Pure masochism! Waking up at 3:00 AM just to watch a 12th-place finish is a recipe for heartbreak.",
      popup: { title: "⏰ 3:00 AM ALARM DISASTER!", icon: "🥱", badge: "MID-TABLE AGONY", msg: "Alarm ringing... 3:00 AM... Down 0-2 to Brentford... Pure pain." }
    }
  },
  {
    id: 7,
    category: "Football",
    type: "WYR",
    theme: "theme-football",
    title: "The Half-Time Refreshment Crisis",
    prompt: "Would Papa rather have the match stream crash during injury time of a tight Manchester derby OR have someone accidentally spill a whole cup of Masala Chai right on him during a penalty shootout?",
    optionA: {
      text: "Stream crashes during injury time of a tight Manchester Derby",
      points: -100,
      verdict: "Agony! Missing the final whistle of a derby causes unimaginable blood pressure spikes.",
      popup: { title: "📺 BUFFERING WHEEL OF DOOM!", icon: "📡", badge: "SIGNAL LOST", msg: "NOOO! The screen froze right as Rashford stepped up to take the shot!" }
    },
    optionB: {
      text: "Spill a whole cup of Masala Chai on himself during a penalty shootout",
      points: 140,
      verdict: "Chai can be washed! Missing the winning penalty cannot be forgiven.",
      popup: { title: "👕 TEA STAIN HEROISM!", icon: "💥", badge: "MATCH FIRST", msg: "Hot tea on the shirt? Who cares! GOAALLLLL IN THE 94TH MINUTE!" }
    }
  },
  {
    id: 8,
    category: "Cricket & EPL",
    type: "WYR",
    theme: "theme-football",
    title: "The Ultimate Border-Gavaskar Stakes",
    prompt: "Would Papa rather watch India beat Australia in a thrilling test match finish at the MCG BUT miss the entire next season of Manchester United EPL games OR see United win the league but India loses a home series to Pakistan?",
    optionA: {
      text: "India beats Australia at the MCG (Miss entire next United season)",
      points: 150,
      verdict: "Patriotic triumph at the MCG! A historic Test match win on Australian soil outweighs a single football season.",
      popup: { title: "🏏 MCG VICTORY CELEBRATION!", icon: "🇮🇳", badge: "TEST CRICKET SUPREMACY", msg: "IN-DI-A! IN-DI-A! Historic win at Melbourne recorded in sports history!" }
    },
    optionB: {
      text: "United wins the Premier League (India loses home series to Pakistan)",
      points: -180,
      verdict: "Unacceptable outcome! Losing a home series to Pakistan is a national tragedy no league title can fix.",
      popup: { title: "😱 NATIONAL CRICKET EMERGENCY!", icon: "💔", badge: "SERIES LOSS", msg: "Unthinkable defeat! Whole neighbourhood goes quiet for three straight days." }
    }
  },

  // ==================== CATEGORY 3: GENERAL TRIVIA ====================
  {
    id: 9,
    category: "General Wisdom",
    type: "WYR",
    theme: "theme-chai",
    title: "The Temporal Window Choice",
    prompt: "Would Papa rather have a time machine that can travel backward to let him re-live favorite moments as a silent observer OR a window that lets him peek 50 years into the future of his family for 10 minutes?",
    optionA: {
      text: "Travel back to re-live favorite family moments as a silent observer",
      points: 110,
      verdict: "Nostalgic gold! Nostalgic memories with loved ones are priceless.",
      popup: { title: "⏳ NOSTALGIA REPLAY!", icon: "🎞️", badge: "TIME TRAVELER", msg: "Rewinding time... Re-living early birthday memories in ultra high definition." }
    },
    optionB: {
      text: "Peek 50 years into the future of the family for 10 minutes",
      points: 140,
      verdict: "Visionary patriarch! Checking in on the family legacy half a century ahead shows true fatherly love.",
      popup: { title: "🔮 FUTURE LEGACY PEEK!", icon: "🚀", badge: "VISIONARY PATRIARCH", msg: "Scanning 2076... Grandkids are still making high-tech automated chai!" }
    }
  },
  {
    id: 10,
    category: "General Wisdom",
    type: "WYR",
    theme: "theme-chai",
    title: "The Communication Constraint",
    prompt: "Would Papa rather always speak the absolute, brutal truth out loud without a filter OR never be able to speak again, communicating only through dramatic facial expressions and wild hand gestures?",
    optionA: {
      text: "Always speak the absolute, brutal truth without a filter",
      points: 90,
      verdict: "Brutal honesty! Family gatherings would get chaotic fast, but nobody would ever doubt Papa's word.",
      popup: { title: "🗣️ ZERO FILTER TRUTH!", icon: "⚡", badge: "BRUTAL HONESTY", msg: "Truth activated! 'Yes, this curry actually needs way more salt.'" }
    },
    optionB: {
      text: "Communicate only through dramatic facial expressions and hand gestures",
      points: 130,
      verdict: "Master of Charades! Papa's eyebrow raises already speak louder than a thousand words anyway.",
      popup: { title: "🤨 THE POWERFUL EYEBROW RAISE!", icon: "🎭", badge: "CHARADES MASTER", msg: "One single eyebrow lift communicates: 'Turn off that light immediately.'" }
    }
  },
  {
    id: 11,
    category: "General Wisdom",
    type: "WYR",
    theme: "theme-chai",
    title: "The Schedule Conundrum",
    prompt: "Would Papa rather have a perfectly clear calendar with zero responsibilities but be constantly bored OR have a packed schedule full of things to do but feel perfectly energised and never tired?",
    optionA: {
      text: "Clear calendar, zero responsibilities, but constantly bored",
      points: -60,
      verdict: "Boredom is the enemy! Sitting idle without projects drives an active mind crazy.",
      popup: { title: "🥱 IDLE THUMBS WARNING!", icon: "⌛", badge: "BOREDOM ALERT", msg: "Too quiet! Papa has already reorganized the pantry 4 times out of boredom." }
    },
    optionB: {
      text: "Packed schedule full of activities, but with unlimited energy",
      points: 150,
      verdict: "Unstoppable force! Unlimited energy to handle a packed calendar is the ultimate dream.",
      popup: { title: "⚡ UNSTOPPABLE ENERGY!", icon: "🔋", badge: "FULL BATTERY", msg: "100% Charged! Fixes the Wi-Fi, brews chai, and solves world peace before noon." }
    }
  },
  {
    id: 12,
    category: "General Wisdom",
    type: "WYR",
    theme: "theme-chai",
    title: "The Tech vs Traffic Blessing",
    prompt: "Would Papa rather every piece of technology he touches works instantly without bugs OR never have to wait in a traffic jam or queue for the rest of his life?",
    optionA: {
      text: "Every piece of technology works instantly without updates or bugs",
      points: 100,
      verdict: "An IT miracle! No more troubleshooting Wi-Fi or frozen TV streams.",
      popup: { title: "💻 IT WIZARD ACTIVATED!", icon: "🛠️", badge: "ZERO BUGS", msg: "Wi-Fi connected instantly! TV remote responds at lightspeed." }
    },
    optionB: {
      text: "Never wait in a traffic jam or queue for the rest of his life",
      points: 160,
      verdict: "The Holy Grail of commuting! Green lights forever is true luxury.",
      popup: { title: "🟢 GREEN LIGHT PERPETUAL!", icon: "🚘", badge: "TRAFFIC BUSTER", msg: "Traffic jams evaporated! Express lane unlocked for life." }
    }
  },
  {
    id: 13,
    category: "General Wisdom",
    type: "WYR",
    theme: "theme-birthday",
    title: "The Birthday Trade-Off",
    prompt: "Would Papa rather have a birthday party with legendary food (pizza + masala chai) but United gets rained out OR United wins a historic Champions League final on his birthday, but the only food available is burnt, unseasoned cake?",
    optionA: {
      text: "Legendary pizza & chai feast (United match gets rained out)",
      points: 110,
      verdict: "A cozy victory! You can't go wrong with fresh pizza and perfect chai.",
      popup: { title: "🍕 PIZZA & CHAI PARTY!", icon: "🎉", badge: "FEAST MODE", msg: "Extra cheese and piping hot chai! Cozy family vibes unlocked." }
    },
    optionB: {
      text: "United wins Champions League final (Only burnt cake to eat)",
      points: 150,
      verdict: "True Red loyalty! Trophy glory far outweighs a bad slice of cake.",
      popup: { title: "🏆 EUROPEAN CHAMPIONS!", icon: "⭐", badge: "GLORY GLORY", msg: "Who needs delicious cake when you're lifting the European Cup?!" }
    }
  },

  // ==================== CATEGORY 4: BIRTHDAY MCQS ====================
  {
    id: 14,
    category: "Birthday Quiz",
    type: "MCQ",
    theme: "theme-birthday",
    title: "1. The 'Happy Birthday' Song Survival Protocol",
    prompt: "What is the scientifically correct thing to do while everyone awkwardly sings 'Happy Birthday' to you for 45 agonising seconds?",
    options: [
      {
        text: "A) Stare intensely into the candle flame like a medieval wizard, avoiding all eye contact.",
        points: 60,
        verdict: "Mystical choice, but makes the family slightly uneasy about your spellcasting intentions.",
        popup: { title: "🧙‍♂️ CANDLE WIZARD SPELL!", icon: "🕯️", badge: "MYSTICAL STARE", msg: "Focusing spell... Flames flicker as guests wonder if you're summoning dragons." }
      },
      {
        text: "B) Smile frozenly, nod like a bobblehead, and silently question every life decision.",
        points: 150,
        verdict: "CORRECT! The undisputed, time-tested human survival technique for forced birthday eye contact.",
        popup: { title: "😄 FROZEN BOBBLEHEAD!", icon: "🎯", badge: "SURVIVAL MASTER", msg: "Nodding along while counting down the seconds until the cake is cut!" }
      },
      {
        text: "C) Aggressively conduct the singing with imaginary drumsticks to force a faster tempo.",
        points: 80,
        verdict: "Bold power move! SPEEDS UP THE TEMPO, though hard on the wrists.",
        popup: { title: "🥁 ACCELERATED TEMPO!", icon: "🎶", badge: "MAESTRO MODE", msg: "FAST FORWARD! Chorus completed in record 12 seconds." }
      },
      {
        text: "D) Sing 'Happy Birthday to ME' louder than everyone else to assert complete dominance.",
        points: -30,
        verdict: "Maximum chaos! Completely overpowers the living room.",
        popup: { title: "🎤 POWER VOCALS OVERLOAD!", icon: "🔊", badge: "MAXIMUM CHAOS", msg: "Glass windows vibrating! You sang louder than the entire choir." }
      }
    ]
  },
  {
    id: 15,
    category: "Birthday Quiz",
    type: "MCQ",
    theme: "theme-birthday",
    title: "2. The Official Birthday Math Equation",
    prompt: "When a stranger asks how old you are today, what is the mandatory response?",
    options: [
      {
        text: "A) 'I am 21 with decades of bonus experience.'",
        points: 150,
        verdict: "EXCELLENT! Smooth, dignified, and mathematically indisputable.",
        popup: { title: "✨ 21 WITH EXPERIENCE!", icon: "💎", badge: "SMOOTH DIGNITY", msg: "Mathematically indisputable calculation! Experience multiplier active." }
      },
      {
        text: "B) Mumble a fake number, throw a handful of confetti in their face, and run out.",
        points: 50,
        verdict: "Dramatic exit! Confetti blind bombs are effective but wasteful.",
        popup: { title: "🎊 CONFETTI ESCAPE BOMB!", icon: "💨", badge: "DRAMATIC EXIT", msg: "Puff! Confetti blinds the crowd while you slip into the other room." }
      },
      {
        text: "C) 'My body is [X] years old, but my back pain is approximately 84.'",
        points: 120,
        verdict: "Relatable truth! Back pain age always scales faster than chronological age.",
        popup: { title: "🦴 SPINE AGE CALCULATOR!", icon: "⚡", badge: "RELATABLE TRUTH", msg: "Lower back confirms: Weather changes detected 48 hours in advance." }
      },
      {
        text: "D) 'Age is just a number, and mine is currently under non-disclosure agreement.'",
        points: 90,
        verdict: "Legal genius! Keeping the age behind corporate privacy clauses.",
        popup: { title: "📑 NDA PRIVACY CLAUSE!", icon: "🔒", badge: "LEGAL GENIUS", msg: "Access Denied! Age classified under strict family confidentiality agreements." }
      }
    ]
  },
  {
    id: 16,
    category: "Birthday Quiz",
    type: "MCQ",
    theme: "theme-birthday",
    title: "3. The Unwritten Law of Gift Opening",
    prompt: "What is the proper reaction when you open a present and discover it is a plain 3-pack of socks?",
    options: [
      {
        text: "A) Oscar-winning delivery: 'WOW! How did you know?! My feet were literally just talking about these!'",
        points: 90,
        verdict: "Top-tier acting! Deserves a Hollywood award for enthusiastic sock gratitude.",
        popup: { title: "🎭 OSCAR AWARD PERFORMANCE!", icon: "🎬", badge: "ACTING LEGEND", msg: "Give this man an Academy Award for Sock Gratitude!" }
      },
      {
        text: "B) Put them on over your hands like mittens immediately to show enthusiasm.",
        points: 70,
        verdict: "Creative fashion statement! Keeps the hands warm.",
        popup: { title: "🧦 SOCK MITTENS ACTIVATED!", icon: "🧤", badge: "CREATIVE FASHION", msg: "Hand warmth +100%! Ready for winter inside the air-conditioned room." }
      },
      {
        text: "C) Realise with horror that you crossed the age threshold where socks make you genuinely excited.",
        points: 150,
        verdict: "SPOT ON! Fresh, high-quality socks are quietly one of life's greatest adult pleasures.",
        popup: { title: "🧦 HIGH QUALITY COTTON BLISS!", icon: "💯", badge: "ADULT MILESTONE", msg: "Fresh cushioned arch support! You have officially embraced maturity." }
      },
      {
        text: "D) Discreetly feel the inside of the gift bag to check if a gift card was hidden at the bottom.",
        points: 40,
        verdict: "Tactical inspection! Always double-check the bag folds.",
        popup: { title: "🔍 TACTICAL BAG INSPECTION!", icon: "🛍️", badge: "SEARCH MODE", msg: "Rustle rustle... Checking tissue paper folds for sneaky gift cards!" }
      }
    ]
  },
  {
    id: 17,
    category: "Birthday Quiz",
    type: "MCQ",
    theme: "theme-birthday",
    title: "4. Cake Distribution Physics",
    prompt: "How is the birthday cake legally supposed to be divided?",
    options: [
      {
        text: "A) The birthday person gets 70% of the cake, and the guests fight over remaining crumbs.",
        points: 80,
        verdict: "Dictator privileges! Monopolising the frosting.",
        popup: { title: "👑 CAKE MONARCHY!", icon: "🍰", badge: "DICTATOR PRIVILEGE", msg: "70% allocated to the chief birthday recipient! Rule upheld." }
      },
      {
        text: "B) Sliced with surgical precision into microscopic pieces so all 25 guests get half a bite.",
        points: 60,
        verdict: "Mathematical fairness, though nobody gets enough sugar.",
        popup: { title: "📐 SURGICAL GEOMETRY!", icon: "🔪", badge: "MICROSCOPIC SLICES", msg: "Each guest receives 2.4 grams of cake. High precision, low satisfaction." }
      },
      {
        text: "C) Whoever sang in the key of 'Happy Birthday' correctly gets the corner slice.",
        points: 70,
        verdict: "Vocal meritocracy! Rewards the choir leaders.",
        popup: { title: "🎶 CHOIR MERITOCRACY!", icon: "🎤", badge: "PITCH PERFECT", msg: "Sopranos get corner icing! Tenors get center filling." }
      },
      {
        text: "D) Everyone gets a slice, but the birthday person hoards the rest behind the vegetables in the fridge.",
        points: 150,
        verdict: "THE PATRIARCHAL VAULT! Hiding cake behind spinach guarantees long-term survival.",
        popup: { title: "🥬 VEGETABLE SHIELD VAULT!", icon: "🛡️", badge: "PATRIARCHAL VAULT", msg: "Cake hidden behind Broccoli! Guaranteed safe from late-night raid parties." }
      }
    ]
  },
  {
    id: 18,
    category: "Birthday Quiz",
    type: "MCQ",
    theme: "theme-birthday",
    title: "5. Post-Party Physical Condition",
    prompt: "How does the guest of honor feel at exactly 9:00 PM on their birthday night?",
    options: [
      {
        text: "A) Ready to hit the town and party until 4:00 AM!",
        points: -40,
        verdict: "Unrealistic! Nobody wants to be out past 9:00 PM on a full belly.",
        popup: { title: "🚫 UNREALISTIC ENERGY!", icon: "❌", badge: "FAKED STAMINA", msg: "Error 404: 4 AM energy not found. Bedtime calls loudly." }
      },
      {
        text: "B) Locked in a sugar-induced coma on the couch, in sweatpants, refusing to move a muscle.",
        points: 150,
        verdict: "ABSOLUTE ACCURACY! Couch lock in comfortable sweatpants is the pinnacle of birthday comfort.",
        popup: { title: "🛋️ SWEATPANTS COUCH LOCK!", icon: "😴", badge: "ULTIMATE COMFORT", msg: "Gravity increased by 300%! Sweatpants mode engaged permanently." }
      },
      {
        text: "C) Already drafting a detailed 12-page budget and itinerary for next year's party.",
        points: 60,
        verdict: "High corporate energy! Takes event planning way too seriously.",
        popup: { title: "📊 EXCEL SPREADSHEET PARTY!", icon: "📈", badge: "CORPORATE ENERGY", msg: "Pivot tables generated for Birthday 2027 logistics!" }
      },
      {
        text: "D) Wondering if it is socially acceptable to kick everyone out so they can go to sleep.",
        points: 130,
        verdict: "Inner thought perfection! The silent countdown to bedtime.",
        popup: { title: "⏱️ SILENT BEDTIME COUNTDOWN!", icon: "🚪", badge: "INNER MONOLOGUE", msg: "Yawning visibly while holding the front door handle politely!" }
      }
    ]
  },

  // ==================== CATEGORY 5: ETHEREAL WISDOM ====================
  {
    id: 19,
    category: "Ethereal Wisdom",
    type: "JOKE",
    theme: "theme-chai",
    title: "The Official SI Unit of Tea",
    prompt: "Scientists have recently discovered a brand new international unit of measurement...",
    punchline: "1 Papa = The exact amount of Chai Papa thinks is an appropriate portion in a single day!",
    points: 150,
    verdict: "Verified by global physics laboratories!",
    popup: { title: "🧪 INTERNATIONAL METRIC SYSTEM!", icon: "📐", badge: "PHYSICS VERIFIED", msg: "Standard metric unit: 1 Papa = 4.5 Large Mugs per day." }
  },
  {
    id: 20,
    category: "Ethereal Wisdom",
    type: "JOKE",
    theme: "theme-football",
    title: "The Manchester Mystery",
    prompt: "Why does Papa remain such a dedicated Manchester United supporter through thick and thin?",
    punchline: "Because apparently life wasn't stressful enough already!",
    points: 150,
    verdict: "Character building through weekly stress testing!",
    popup: { title: "💓 STRESS TEST APPROVED!", icon: "🩺", badge: "CHARACTER BUILDING", msg: "Cardiologists endorse weekly football matches for emotional resilience!" }
  },
  {
    id: 21,
    category: "Ethereal Wisdom",
    type: "JOKE",
    theme: "theme-football",
    title: "The Living Room Cardio Workout",
    prompt: "Why is watching Manchester United matches with Papa considered a full health workout?",
    punchline: "Because you get free cardio every time he jumps up and starts shouting tactical advice at the TV screen!",
    points: 150,
    verdict: "Burns 300 calories per match guaranteed!",
    popup: { title: "🏃 LIVING ROOM FITNESS!", icon: "🔥", badge: "TACTICAL CARDIO", msg: "300 Calories burned! Jumped out of armchair 14 times during VAR review." }
  },
  {
    id: 22,
    category: "Ethereal Wisdom",
    type: "JOKE",
    theme: "theme-chai",
    title: "The Preferred Fitness Routine",
    prompt: "What is Papa's absolute, top-favorite physical exercise?",
    punchline: "Running out of patience when someone takes too long making the tea!",
    points: 150,
    verdict: "High-intensity patience cardio!",
    popup: { title: "⏱️ PATIENCE RUNOUT SPEED!", icon: "💨", badge: "TEA SPRINT", msg: "Sprint record broken! 'Why is the water taking 10 minutes to boil?!'" }
  },
  {
    id: 23,
    category: "Ethereal Wisdom",
    type: "JOKE",
    theme: "theme-chai",
    title: "The Dual Speed Velocity",
    prompt: "Scientists confirm Papa operates on exactly two physical speeds in life...",
    punchline: "Speed 1: 'Why is everyone rushing?' \nSpeed 2: 'WHY IS EVERYONE TAKING SO LONG?!'",
    points: 150,
    verdict: "The fundamental laws of Papa Dynamics!",
    popup: { title: "⚡ PAPA DYNAMICS LAW!", icon: "⚖️", badge: "DUAL VELOCITY", msg: "Relativity proven: Time moves either too fast or far too slow!" }
  }
];

// --------------------------------------------------------------------------
// 2. GLOBAL STATE & ENGINE CONTROLLERS
// --------------------------------------------------------------------------
let currentQuestionIndex = 0;
let totalScore = 2000;
let streakCombo = 0;
let answersHistory = []; 

const modes = ["dark", "light", "ethereal"];
let currentModeIndex = 0;

let bgEnabled = true;
let isManualUnblurred = false;
let audioEnabled = true;
let audioCtx = null;

let crownClickCounter = 0;
let secretScore = 0;

// High Score Persistence
let arcadeHighScore = parseInt(localStorage.getItem("papa_arcade_highscore") || "0");

// Dynamic Background Keywords
const bgSearchKeywords = [
  "stadium", "tea", "celebration", "football", "coffee-shop", 
  "cozy", "sunset", "fireworks", "luxury", "nature-landscape", 
  "mountains", "abstract-lights", "party-confetti", "old-trafford"
];

// Clicker & Mini-Game State Tracker
let cakeClickerCount = 0;
let clickerMultiplier = 1;
let cakeClickerTimer = null;
let autoBakerActive = false;

// --------------------------------------------------------------------------
// 3. INITIALISATION & STYLING INJECTION ENGINE
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  injectGlobalCustomStyles();
  initAudio();
  injectGoBackButtonAndGameHubNav();
  bindUnblurBgButton();
  
  // Render PowerPoint-style Cover Slides before main game interaction
  renderMainFrontCoverSlide();
  
  initFloatingBalloonInteractions();
  initCrownEasterEgg();
  initKonamiCode();
  fetchRandomBackground();
});

// --------------------------------------------------------------------------
// 4. POWERPOINT-STYLE COVER SLIDE SYSTEM (MAIN INTRO & QUIZ COVER)
// --------------------------------------------------------------------------
function renderMainFrontCoverSlide() {
  // Hide main HUD initial view until Papa starts the experience
  const mainHud = document.querySelector(".game-hud");
  if (mainHud) mainHud.classList.add("hidden");

  let coverOverlay = document.getElementById("ppt-front-cover-slide");
  if (!coverOverlay) {
    coverOverlay = document.createElement("div");
    coverOverlay.id = "ppt-front-cover-slide";
    coverOverlay.className = "ppt-slide-overlay";
    document.body.appendChild(coverOverlay);
  }

  coverOverlay.innerHTML = `
    <div class="ppt-slide-card animate-slide-entry">
      <div class="october-date-badge">🎉 6th October Special Edition 🎉</div>
      
      <!-- Papa's Portrait Circular Holder -->
      <div class="papa-portrait-frame">
        <div class="portrait-glow-ring"></div>
        <!-- Replaceable image placeholder for Papa's Portrait -->
        <img id="papa-portrait-img" src="father4.png" alt="Papa's Portrait" />
      </div>

      <h1 class="slide-main-title">Happy Birthday, Papa! 🎂</h1>
      <p class="slide-main-subtitle">Welcome to your personalised 6th October Legacy Celebration!</p>

      <!-- Interactive "About This Website" Creative Drawer -->
      <button class="ppt-action-btn secondary" onclick="toggleAboutWebsiteDrawer()">
        <span id="about-btn-icon">💡</span> <span id="about-btn-text">About This Website (Click to Reveal)</span>
      </button>

      <div id="about-website-drawer" class="about-drawer hidden">
        <ul class="about-pointers-list">
          <li><strong>👑 Handcrafted Legacy Trivia:</strong> 23 custom questions built around Papa's favorite things—from Masala Chai to Old Trafford!</li>
          <li><strong>🗓️ The October 6th Honor:</strong> Special birthday multipliers and negative point penalties to test true household knowledge!</li>
          <li><strong>🎮 Live Arcade Mini-Games:</strong> Balloon Blitz, Cake Rush, and Chai Smash with real-time high scores & power-ups!</li>
          <li><strong>🎵 Ethereal Audio & Visuals:</strong> Interactive sound effects, dynamic blurred backdrops, and confetti celebrations.</li>
        </ul>
      </div>

      <div class="slide-footer-action">
        <button class="ppt-action-btn primary" onclick="transitionToQuizCoverSlide()">
          🚀 Proceed to Papa's Quiz Cover Slide ➔
        </button>
      </div>
    </div>
  `;
}

function toggleAboutWebsiteDrawer() {
  playSound('click');
  const drawer = document.getElementById("about-website-drawer");
  const icon = document.getElementById("about-btn-icon");
  const text = document.getElementById("about-btn-text");

  if (drawer.classList.contains("hidden")) {
    drawer.classList.remove("hidden");
    icon.textContent = "📖";
    text.textContent = "Hide Website Highlights";
  } else {
    drawer.classList.add("hidden");
    icon.textContent = "💡";
    text.textContent = "About This Website (Click to Reveal)";
  }
}

function transitionToQuizCoverSlide() {
  playSound('positive');
  triggerConfettiExplosion();

  const coverOverlay = document.getElementById("ppt-front-cover-slide");
  if (!coverOverlay) return;

  coverOverlay.innerHTML = `
    <div class="ppt-slide-card animate-slide-entry">
      <div class="october-date-badge">⚽ Quiz Front Cover - 6th October Arena 🏏</div>
      
      <div class="quiz-cover-icon-box">
        <span class="quiz-giant-emoji">🏆</span>
      </div>

      <h1 class="slide-main-title">The Ultimate Papa Trivia Challenge</h1>
      <p class="slide-main-subtitle">23 Master Questions | Negative Points | Multiplier Power-Ups</p>

      <div class="quiz-rules-box">
        <div class="rule-chip">🔥 <strong>Streak Combos:</strong> Consecutive right answers trigger 2x/3x bonus multipliers!</div>
        <div class="rule-chip">⚠️ <strong>Negative Points:</strong> Blasphemous tea or rival football choices deduct points!</div>
        <div class="rule-chip">📅 <strong>October 6th Bonus:</strong> Special score bonuses applied throughout the journey!</div>
        <div class="rule-chip">↺ <strong>Rollback Support:</strong> Made a mistake? Use the 'Go Back' button anytime!</div>
      </div>

      <div class="slide-footer-action" style="margin-top: 20px;">
        <button class="ppt-action-btn primary pulse-glow" onclick="startTriviaGameExperience()">
          ⚡ Enter Trivia Arena Now ➔
        </button>
      </div>
    </div>
  `;
}

function startTriviaGameExperience() {
  playSound('fanfare');
  triggerConfettiExplosion(true);

  const coverOverlay = document.getElementById("ppt-front-cover-slide");
  if (coverOverlay) coverOverlay.remove();

  const mainHud = document.querySelector(".game-hud");
  if (mainHud) mainHud.classList.remove("hidden");

  // Load the first question
  currentQuestionIndex = 0;
  loadQuestion(currentQuestionIndex);
  updateScoreUI();
}

// Inject Custom CSS directly into page head for PowerPoint Slide overlays, circular frame & Arcade styling
function injectGlobalCustomStyles() {
  const styleEl = document.createElement("style");
  styleEl.id = "papa-dynamic-game-styles";
  styleEl.textContent = `
    /* PowerPoint-Style Slide Overlays */
    .ppt-slide-overlay {
      position: fixed;
      inset: 0;
      z-index: 9999;
      background: radial-gradient(circle at center, rgba(15, 23, 42, 0.95), rgba(10, 10, 26, 0.98));
      backdrop-filter: blur(15px);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
    }

    .ppt-slide-card {
      background: rgba(30, 41, 59, 0.75);
      border: 2px solid rgba(255, 215, 0, 0.4);
      border-radius: 28px;
      padding: 2.5rem;
      max-width: 650px;
      width: 100%;
      text-align: center;
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(255, 215, 0, 0.2);
      backdrop-filter: blur(20px);
      color: #f8fafc;
      position: relative;
    }

    .animate-slide-entry {
      animation: slideInUp 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    @keyframes slideInUp {
      0% { opacity: 0; transform: translateY(40px) scale(0.95); }
      100% { opacity: 1; transform: translateY(0) scale(1); }
    }

    .october-date-badge {
      display: inline-block;
      background: linear-gradient(135deg, #f59e0b, #ef4444);
      color: #ffffff;
      font-size: 0.85rem;
      font-weight: 800;
      padding: 6px 16px;
      border-radius: 20px;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 15px;
      box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4);
    }

    /* Papa's Circular Frame Placeholder */
    .papa-portrait-frame {
      position: relative;
      width: 140px;
      height: 140px;
      margin: 0 auto 18px auto;
      border-radius: 50%;
      padding: 6px;
      background: linear-gradient(135deg, #ffd700, #ec4899, #38bdf8);
      box-shadow: 0 0 25px rgba(255, 215, 0, 0.5);
    }

    .papa-portrait-frame img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      border: 3px solid #0f172a;
      background: #1e293b;
    }

    .slide-main-title {
      font-family: 'Fredoka', cursive, sans-serif;
      font-size: 2.2rem;
      margin-bottom: 8px;
      background: linear-gradient(135deg, #ffffff, #ffd700);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .slide-main-subtitle {
      font-size: 1rem;
      color: #94a3b8;
      margin-bottom: 20px;
    }

    .ppt-action-btn {
      border: none;
      border-radius: 14px;
      padding: 14px 28px;
      font-size: 1.05rem;
      font-weight: 800;
      cursor: pointer;
      transition: all 0.25s ease;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      width: 100%;
    }

    .ppt-action-btn.primary {
      background: linear-gradient(135deg, #ec4899 0%, #a855f7 50%, #6366f1 100%);
      color: #ffffff;
      box-shadow: 0 8px 25px rgba(236, 72, 153, 0.4);
    }

    .ppt-action-btn.primary:hover {
      transform: translateY(-2px) scale(1.02);
      box-shadow: 0 12px 30px rgba(236, 72, 153, 0.6);
    }

    .ppt-action-btn.secondary {
      background: rgba(51, 65, 85, 0.8);
      color: #38bdf8;
      border: 1px solid rgba(56, 189, 248, 0.4);
      margin-bottom: 15px;
    }

    .ppt-action-btn.secondary:hover {
      background: rgba(51, 65, 85, 1);
      color: #ffffff;
    }

    .pulse-glow {
      animation: btnGlow 1.8s infinite alternate;
    }

    @keyframes btnGlow {
      0% { box-shadow: 0 0 15px rgba(236, 72, 153, 0.4); }
      100% { box-shadow: 0 0 35px rgba(236, 72, 153, 0.9); }
    }

    .about-drawer {
      background: rgba(15, 23, 42, 0.85);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 16px;
      padding: 15px 20px;
      margin-bottom: 20px;
      text-align: left;
    }

    .about-pointers-list {
      list-style: none;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 10px;
      font-size: 0.92rem;
      color: #cbd5e1;
    }

    .quiz-rules-box {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 20px;
      text-align: left;
    }

    .rule-chip {
      background: rgba(15, 23, 42, 0.7);
      border: 1px solid rgba(255, 215, 0, 0.2);
      border-radius: 12px;
      padding: 10px 15px;
      font-size: 0.9rem;
      color: #e2e8f0;
    }

    .quiz-giant-emoji {
      font-size: 4rem;
      display: inline-block;
      margin-bottom: 10px;
      animation: bounceSlow 2s infinite ease-in-out;
    }

    @keyframes bounceSlow {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }

    /* Blur vs Unblur Background States */
    .app-blur-active #question-card,
    .app-blur-active .hero-header,
    .app-blur-active .progress-container,
    .app-blur-active .floating-balloons-wrapper {
      filter: blur(10px) brightness(0.6);
      transition: filter 0.35s cubic-bezier(0.4, 0, 0.2, 1);
      pointer-events: none;
      user-select: none;
    }

    #question-card, .hero-header, .progress-container {
      transition: filter 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* Force Unblur State Override */
    body.force-unblur .app-blur-active #question-card,
    body.force-unblur .app-blur-active .hero-header,
    body.force-unblur .app-blur-active .progress-container,
    body.force-unblur .app-blur-active .floating-balloons-wrapper,
    body.force-unblur #bg-overlay,
    body.force-unblur .bg-overlay {
      filter: none !important;
      backdrop-filter: blur(0px) !important;
      -webkit-backdrop-filter: blur(0px) !important;
      pointer-events: auto !important;
    }

    /* Modal Backdrop Layer */
    .modal-overlay-blur {
      backdrop-filter: blur(12px);
      background: rgba(10, 15, 30, 0.75);
    }

    /* Streak Combo Pop Display */
    .combo-badge-pill {
      background: linear-gradient(135deg, #f59e0b, #ef4444);
      color: #ffffff;
      font-weight: 900;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.85rem;
      letter-spacing: 1px;
      box-shadow: 0 0 15px rgba(245, 158, 11, 0.6);
      display: inline-flex;
      align-items: center;
      gap: 5px;
      animation: comboPulse 0.6s infinite alternate;
    }

    @keyframes comboPulse {
      0% { transform: scale(1); box-shadow: 0 0 10px rgba(245, 158, 11, 0.5); }
      100% { transform: scale(1.08); box-shadow: 0 0 20px rgba(239, 68, 68, 0.8); }
    }

    /* Premium Styled Arcade Buttons */
    .arcade-custom-btn {
      background: linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%);
      color: #ffffff !important;
      border: 1px solid rgba(255, 255, 255, 0.3) !important;
      border-radius: 12px !important;
      padding: 12px 20px !important;
      font-size: 1rem !important;
      font-weight: 700 !important;
      cursor: pointer !important;
      box-shadow: 0 4px 15px rgba(168, 85, 247, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.4) !important;
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 8px !important;
      text-shadow: 0 1px 2px rgba(0,0,0,0.3) !important;
      outline: none !important;
      width: 100%;
      margin-bottom: 8px;
    }

    .arcade-custom-btn:hover {
      transform: translateY(-2px) scale(1.02) !important;
      box-shadow: 0 8px 25px rgba(236, 72, 153, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.6) !important;
      filter: brightness(1.1);
    }

    .nav-btn-styled {
      background: rgba(30, 41, 59, 0.85) !important;
      color: #f8fafc !important;
      border: 1px solid rgba(255, 255, 255, 0.15) !important;
      backdrop-filter: blur(8px) !important;
      border-radius: 10px !important;
      padding: 8px 16px !important;
      font-weight: 600 !important;
      font-size: 0.9rem !important;
      cursor: pointer !important;
      transition: all 0.2s ease !important;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2) !important;
    }

    .nav-btn-styled:hover {
      background: rgba(51, 65, 85, 0.95) !important;
      border-color: #38bdf8 !important;
      color: #38bdf8 !important;
      transform: translateY(-1px) !important;
    }

    .nav-btn-styled.highlight {
      background: linear-gradient(135deg, #10b981, #059669) !important;
      border-color: #34d399 !important;
      color: #ffffff !important;
      box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3) !important;
    }

    .choice-popup-container {
      background: rgba(15, 23, 42, 0.92);
      border: 2px solid #a855f7;
      border-radius: 16px;
      padding: 15px;
      margin-bottom: 15px;
      animation: popupSlideIn 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 10px 30px rgba(168, 85, 247, 0.3);
      text-align: center;
    }

    .choice-popup-badge {
      display: inline-block;
      background: linear-gradient(135deg, #ec4899, #8b5cf6);
      color: white;
      font-size: 0.75rem;
      font-weight: 800;
      padding: 4px 10px;
      border-radius: 20px;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 8px;
    }

    @keyframes popupSlideIn {
      0% { opacity: 0; transform: scale(0.8) translateY(-15px); }
      100% { opacity: 1; transform: scale(1) translateY(0); }
    }

    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20%, 60% { transform: translateX(-10px); }
      40%, 80% { transform: translateX(10px); }
    }

    .floating-score-pop {
      position: fixed;
      font-weight: 900;
      font-family: system-ui, -apple-system, sans-serif;
      text-shadow: 0 2px 10px rgba(0,0,0,0.8);
      pointer-events: none;
      z-index: 10000;
      animation: scoreFloatUp 0.9s cubic-bezier(0.25, 1, 0.5, 1) forwards;
    }

    @keyframes scoreFloatUp {
      0% { opacity: 1; transform: translateY(0) scale(0.8); }
      50% { transform: translateY(-30px) scale(1.2); }
      100% { opacity: 0; transform: translateY(-60px) scale(1); }
    }
  `;
  document.head.appendChild(styleEl);
}

function initAudio() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (AudioContext) {
    audioCtx = new AudioContext();
  }
}

function injectGoBackButtonAndGameHubNav() {
  const navContainer = document.querySelector(".nav-controls") || document.querySelector("header") || document.querySelector(".control-toolbar") || document.body;

  if (navContainer && !document.getElementById("go-back-btn")) {
    const backBtn = document.createElement("button");
    backBtn.id = "go-back-btn";
    backBtn.className = "nav-btn-styled";
    backBtn.style.marginRight = "10px";
    backBtn.style.display = "none"; 
    backBtn.innerHTML = `⬅️ Go Back`;
    backBtn.onclick = goBackQuestion;
    
    navContainer.insertBefore(backBtn, navContainer.firstChild);
  }

  if (navContainer && !document.getElementById("unblur-bg-btn") && !document.getElementById("toggleBlurBtn")) {
    const unblurBtn = document.createElement("button");
    unblurBtn.id = "unblur-bg-btn";
    unblurBtn.className = "nav-btn-styled";
    unblurBtn.style.marginLeft = "8px";
    unblurBtn.innerHTML = `👁️ Unblur BG`;
    unblurBtn.onclick = toggleUnblurBG;
    navContainer.appendChild(unblurBtn);
  }

  if (navContainer && !document.getElementById("arcade-hub-btn")) {
    const gameBtn = document.createElement("button");
    gameBtn.id = "arcade-hub-btn";
    gameBtn.className = "nav-btn-styled highlight";
    gameBtn.style.marginLeft = "8px";
    gameBtn.innerHTML = `🎮 Papa's Arcade`;
    gameBtn.onclick = openMiniGameHub;
    navContainer.appendChild(gameBtn);
  }
}

function bindUnblurBgButton() {
  const targetBtn = document.getElementById("toggleBlurBtn") || document.getElementById("unblur-bg-btn");
  if (targetBtn) {
    targetBtn.onclick = toggleUnblurBG;
  }
}

function toggleUnblurBG() {
  playSound('click');
  isManualUnblurred = !isManualUnblurred;
  
  if (isManualUnblurred) {
    document.body.classList.add("force-unblur");
  } else {
    document.body.classList.remove("force-unblur");
  }

  const btn = document.getElementById("unblur-bg-btn") || document.getElementById("toggleBlurBtn");
  if (btn) {
    btn.innerHTML = isManualUnblurred ? "💧 Blur BG" : "👁️ Unblur BG";
  }
}

function setBlurState(isBlurred) {
  if (isBlurred && !isManualUnblurred) {
    document.body.classList.add("app-blur-active");
  } else {
    document.body.classList.remove("app-blur-active");
  }
}

// --------------------------------------------------------------------------
// 5. UNLIMITED WEB BACKGROUND ENGINE
// --------------------------------------------------------------------------
function fetchRandomBackground() {
  if (!bgEnabled) return;
  playSound('click');

  const bgEl = document.getElementById("dynamic-bg");
  if (!bgEl) return;

  const randomKeyword = bgSearchKeywords[Math.floor(Math.random() * bgSearchKeywords.length)];
  const randomSeed = Math.floor(Math.random() * 9999999);

  const targetUrl = `https://picsum.photos/1920/1080?random=${randomSeed}&sig=${Date.now()}&topic=${randomKeyword}`;

  const imgLoader = new Image();
  imgLoader.src = targetUrl;

  bgEl.style.transition = "opacity 0.5s ease-in-out";
  bgEl.style.opacity = "0.2";

  imgLoader.onload = () => {
    bgEl.style.backgroundImage = `url('${targetUrl}')`;
    bgEl.style.opacity = "1";
  };
}

function toggleBackground() {
  playSound('click');
  bgEnabled = !bgEnabled;

  const bgEl = document.getElementById("dynamic-bg");
  const bgOverlay = document.getElementById("bg-overlay");
  const toggleBtnLabel = document.getElementById("bg-toggle-label");
  const toggleBtnIcon = document.getElementById("bg-toggle-icon");

  if (!bgEl) return;

  if (bgEnabled) {
    bgEl.style.display = "block";
    if (bgOverlay) bgOverlay.style.display = "block";
    fetchRandomBackground();
    if (toggleBtnLabel) toggleBtnLabel.textContent = "Turn Off BG";
    if (toggleBtnIcon) toggleBtnIcon.textContent = "🖼️";
  } else {
    bgEl.style.display = "none";
    if (bgOverlay) bgOverlay.style.display = "none";
    if (toggleBtnLabel) toggleBtnLabel.textContent = "Turn On BG";
    if (toggleBtnIcon) toggleBtnIcon.textContent = "🚫";
  }
}

// --------------------------------------------------------------------------
// 6. DISPLAY MODE SWITCHER
// --------------------------------------------------------------------------
function cycleDisplayMode() {
  playSound('click');
  currentModeIndex = (currentModeIndex + 1) % modes.length;
  const newMode = modes[currentModeIndex];

  document.documentElement.setAttribute("data-mode", newMode);
  document.body.setAttribute("data-mode", newMode);

  const iconEl = document.getElementById("mode-icon");
  const labelEl = document.getElementById("mode-label");

  if (newMode === "dark") {
    if (iconEl) iconEl.textContent = "🌙";
    if (labelEl) labelEl.textContent = "Dark Mode";
  } else if (newMode === "light") {
    if (iconEl) iconEl.textContent = "☀️";
    if (labelEl) labelEl.textContent = "Light Mode";
  } else if (newMode === "ethereal") {
    if (iconEl) iconEl.textContent = "✨";
    if (labelEl) labelEl.textContent = "Ethereal Mode";
    triggerSparkleCanvas();
  }
}

// --------------------------------------------------------------------------
// 7. QUESTION RENDERER & "GO BACK" UNDO ENGINE
// --------------------------------------------------------------------------
function loadQuestion(index) {
  if (index >= gameQuestions.length) {
    renderSummaryScreen();
    return;
  }

  const backBtn = document.getElementById("go-back-btn");
  if (backBtn) {
    backBtn.style.display = index > 0 ? "inline-block" : "none";
  }

  const q = gameQuestions[index];

  document.documentElement.setAttribute("data-theme", q.theme);
  document.body.setAttribute("data-theme", q.theme);

  const categoryBadge = document.getElementById("category-badge");
  if (categoryBadge) categoryBadge.textContent = q.category;

  const counterEl = document.getElementById("question-counter");
  if (counterEl) counterEl.textContent = `Challenge ${index + 1} of ${gameQuestions.length}`;

  const progressFill = document.getElementById("progress-fill");
  if (progressFill) {
    const pct = ((index + 1) / gameQuestions.length) * 100;
    progressFill.style.width = `${pct}%`;
  }

  document.getElementById("question-title").textContent = q.title;
  document.getElementById("question-prompt").textContent = q.prompt;

  document.getElementById("wyr-actions").classList.add("hidden");
  document.getElementById("mcq-actions").classList.add("hidden");
  document.getElementById("joke-actions").classList.add("hidden");

  if (q.type === "WYR") {
    renderWyrQuestion(q);
  } else if (q.type === "MCQ") {
    renderMcqQuestion(q);
  } else if (q.type === "JOKE") {
    renderJokeQuestion(q);
  }
}

function goBackQuestion() {
  if (currentQuestionIndex <= 0) return;
  playSound('click');

  if (answersHistory.length > 0 && answersHistory.length === currentQuestionIndex) {
    const lastAnswer = answersHistory.pop();
    totalScore -= lastAnswer.points; 
    if (streakCombo > 0) streakCombo--;
    updateScoreUI();
    showFloatingScoreText(window.innerWidth / 2, 100, "↺ Rolled back previous question!", "#38bdf8");
  }

  currentQuestionIndex--;
  loadQuestion(currentQuestionIndex);
}

function renderWyrQuestion(q) {
  const container = document.getElementById("wyr-actions");
  container.classList.remove("hidden");

  document.getElementById("text-option-a").textContent = q.optionA.text;
  document.getElementById("text-option-b").textContent = q.optionB.text;
}

function renderMcqQuestion(q) {
  const container = document.getElementById("mcq-actions");
  container.innerHTML = "";
  container.classList.remove("hidden");

  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "mcq-option-card";
    btn.onclick = () => handleMcqSelection(idx);

    btn.innerHTML = `
      <span>${opt.text}</span>
      <span class="pill-icon">➔</span>
    `;
    container.appendChild(btn);
  });
}

function renderJokeQuestion(q) {
  const container = document.getElementById("joke-actions");
  container.classList.remove("hidden");

  document.getElementById("reveal-joke-btn").classList.remove("hidden");
  document.getElementById("ethereal-answer-box").classList.add("hidden");
  document.getElementById("next-joke-btn").classList.add("hidden");
}

// --------------------------------------------------------------------------
// 8. CHOICE HANDLERS & DYNAMIC OPTION POP-UP SYSTEM
// --------------------------------------------------------------------------
function handleWyrSelection(choice) {
  const q = gameQuestions[currentQuestionIndex];
  const selectedOpt = choice === 'A' ? q.optionA : q.optionB;

  processScoreAndVerdict(q.title, selectedOpt.text, selectedOpt.points, selectedOpt.verdict, "☕", selectedOpt.popup);
}

function handleMcqSelection(optionIndex) {
  const q = gameQuestions[currentQuestionIndex];
  const selectedOpt = q.options[optionIndex];

  processScoreAndVerdict(q.title, selectedOpt.text, selectedOpt.points, selectedOpt.verdict, "🎯", selectedOpt.popup);
}

function revealEtherealAnswer() {
  playSound('positive');
  const q = gameQuestions[currentQuestionIndex];

  document.getElementById("reveal-joke-btn").classList.add("hidden");

  const box = document.getElementById("ethereal-answer-box");
  const text = document.getElementById("joke-answer-text");
  text.textContent = q.punchline;
  box.classList.remove("hidden");

  document.getElementById("next-joke-btn").classList.remove("hidden");

  answersHistory.push({
    title: q.title,
    choice: q.punchline,
    points: q.points,
    verdict: q.verdict
  });

  totalScore += q.points;
  streakCombo++;
  updateScoreUI();

  if (q.popup) {
    showVerdictModal(q.verdict, q.points, "✨", q.popup);
  }
}

function processScoreAndVerdict(title, choiceText, pointsDelta, verdictText, emoji, popupData) {
  if (pointsDelta >= 0) {
    streakCombo++;
    if (streakCombo >= 3) {
      playSound('combo');
    } else {
      playSound('positive');
    }
    triggerConfettiExplosion();
  } else {
    streakCombo = 0;
    playSound('negative');
    triggerScreenShake();
  }

  let finalDelta = pointsDelta;
  if (streakCombo > 1 && pointsDelta > 0) {
    finalDelta += (streakCombo * 25);
  }

  totalScore += finalDelta;
  updateScoreUI();

  answersHistory.push({
    title: title,
    choice: choiceText,
    points: finalDelta,
    verdict: verdictText
  });

  showVerdictModal(verdictText, finalDelta, emoji, popupData);
}

function showVerdictModal(verdictText, pointsDelta, emoji, popupData = null) {
  setBlurState(true);
  const modal = document.getElementById("verdict-modal");
  if (modal) modal.classList.add("modal-overlay-blur");
  document.getElementById("verdict-icon").textContent = emoji;

  const actionBtn = document.querySelector("#verdict-modal button:not(.arcade-custom-btn)") || document.getElementById("verdict-next-btn");
  if (actionBtn) {
    actionBtn.textContent = "Next Question ➔";
    actionBtn.onclick = dismissVerdictAndAdvance;
  }

  let popupHtml = "";
  if (popupData) {
    popupHtml = `
      <div class="choice-popup-container">
        <span class="choice-popup-badge">${popupData.badge || "OPTION REACTION"}</span>
        <div style="font-size:1.1rem; font-weight:bold; color:#f8fafc; margin-bottom:4px;">${popupData.icon} ${popupData.title}</div>
        <div style="font-size:0.9rem; color:#cbd5e1;">${popupData.msg}</div>
      </div>
    `;
  }

  const comboHtml = streakCombo > 1 ? `<div style="margin-top:8px;"><span class="combo-badge-pill">🔥 ${streakCombo}x STREAK COMBO! (+${streakCombo * 25} BONUS)</span></div>` : "";

  document.getElementById("verdict-body-text").innerHTML = popupHtml + comboHtml + `<div style="margin-top:10px; font-size:1.05rem; line-height:1.5;">${verdictText}</div>`;

  const deltaBadge = document.getElementById("score-delta-badge");
  if (deltaBadge) {
    if (pointsDelta >= 0) {
      deltaBadge.className = "delta-badge positive";
      deltaBadge.textContent = `+${pointsDelta} Papa Points${streakCombo > 1 ? ` (${streakCombo}x Streak!)` : ''}`;
    } else {
      deltaBadge.className = "delta-badge negative";
      deltaBadge.textContent = `${pointsDelta} Papa Points`;
    }
  }

  modal.classList.remove("hidden");
}

function dismissVerdictAndAdvance() {
  playSound('click');
  setBlurState(false);
  document.getElementById("verdict-modal").classList.add("hidden");
  currentQuestionIndex++;
  loadQuestion(currentQuestionIndex);
}

function updateScoreUI() {
  const scoreEl = document.getElementById("current-score-val");
  if (scoreEl) {
    scoreEl.textContent = totalScore.toLocaleString();
  }
}

// --------------------------------------------------------------------------
// 9. GRAND FINALE SUMMARY ENGINE
// --------------------------------------------------------------------------
function renderSummaryScreen() {
  setBlurState(false);
  document.getElementById("question-card").classList.add("hidden");
  document.getElementById("summary-screen").classList.remove("hidden");

  document.getElementById("final-score-val").textContent = `${totalScore.toLocaleString()} Pts`;

  const rankEl = document.getElementById("persona-rank");
  const verdictEl = document.getElementById("persona-verdict");

  if (totalScore >= 4500) {
    rankEl.textContent = "👑 Supreme Patriarch & Grandmaster Chai Sage";
    verdictEl.textContent = "Official Verdict: Absolute Master of the Household. Undisputed October 6th Birthday Legend.";
    playSound('fanfare');
  } else if (totalScore >= 2800) {
    rankEl.textContent = "⚽ Senior Tactical Pundit & Master Tea Brewer";
    verdictEl.textContent = "Official Verdict: Highly respected advisor with elite chai dipping skills and VAR analysis expertise.";
    playSound('positive');
  } else {
    rankEl.textContent = "☕ Certified Biscuit Dipper";
    verdictEl.textContent = "Official Verdict: Honorable effort! Requires a refresher course in tea timing and biscuit structural mechanics.";
    playSound('positive');
  }

  const listContainer = document.getElementById("summary-list");
  listContainer.innerHTML = "";

  answersHistory.forEach((item) => {
    const card = document.createElement("div");
    card.className = "summary-item";

    const pointsClass = item.points >= 0 ? "positive" : "negative";
    const sign = item.points >= 0 ? "+" : "";

    card.innerHTML = `
      <div class="summary-item-header">
        <span>${item.title}</span>
        <span class="${pointsClass}">${sign}${item.points} Pts</span>
      </div>
      <div class="summary-item-choice">"${item.choice}"</div>
      <div class="summary-item-reason">💡 ${item.verdict}</div>
    `;
    listContainer.appendChild(card);
  });

  triggerConfettiExplosion(true);
}

function resetGame() {
  playSound('click');
  setBlurState(false);
  currentQuestionIndex = 0;
  totalScore = 2000;
  streakCombo = 0;
  answersHistory = [];

  document.getElementById("summary-screen").classList.add("hidden");
  document.getElementById("question-card").classList.remove("hidden");

  updateScoreUI();
  loadQuestion(currentQuestionIndex);
}

// --------------------------------------------------------------------------
// 10. ENHANCED SOUND SYNTHESISER (WEB AUDIO API)
// --------------------------------------------------------------------------
function toggleAudio() {
  audioEnabled = !audioEnabled;
  const icon = document.getElementById("audio-icon");
  if (icon) icon.textContent = audioEnabled ? "🔊" : "🔇";
  if (audioEnabled) playSound('click');
}

function playSound(type) {
  if (!audioEnabled || !audioCtx) return;
  if (audioCtx.state === 'suspended') audioCtx.resume();

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);

  const now = audioCtx.currentTime;

  if (type === 'click') {
    osc.frequency.setValueAtTime(450, now);
    osc.frequency.exponentialRampToValueAtTime(850, now + 0.08);
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.linearRampToValueAtTime(0.01, now + 0.08);
    osc.start(now);
    osc.stop(now + 0.08);
  } else if (type === 'pop') {
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(200, now + 0.12);
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.linearRampToValueAtTime(0.01, now + 0.12);
    osc.start(now);
    osc.stop(now + 0.12);
  } else if (type === 'jump') {
    osc.type = 'square';
    osc.frequency.setValueAtTime(160, now);
    osc.frequency.exponentialRampToValueAtTime(650, now + 0.15);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.linearRampToValueAtTime(0.01, now + 0.15);
    osc.start(now);
    osc.stop(now + 0.15);
  } else if (type === 'positive') {
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(523.25, now);
    osc.frequency.setValueAtTime(659.25, now + 0.08);
    osc.frequency.setValueAtTime(783.99, now + 0.16);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.linearRampToValueAtTime(0.01, now + 0.3);
    osc.start(now);
    osc.stop(now + 0.3);
  } else if (type === 'negative') {
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(280, now);
    osc.frequency.linearRampToValueAtTime(110, now + 0.25);
    gain.gain.setValueAtTime(0.25, now);
    gain.gain.linearRampToValueAtTime(0.01, now + 0.25);
    osc.start(now);
    osc.stop(now + 0.25);
  } else if (type === 'combo') {
    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.setValueAtTime(554.37, now + 0.06);
    osc.frequency.setValueAtTime(659.25, now + 0.12);
    osc.frequency.setValueAtTime(880, now + 0.18);
    gain.gain.setValueAtTime(0.25, now);
    gain.gain.linearRampToValueAtTime(0.01, now + 0.35);
    osc.start(now);
    osc.stop(now + 0.35);
  } else if (type === 'fanfare') {
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      const subOsc = audioCtx.createOscillator();
      const subGain = audioCtx.createGain();
      subOsc.connect(subGain);
      subGain.connect(audioCtx.destination);
      subOsc.type = 'triangle';
      subOsc.frequency.setValueAtTime(freq, now + idx * 0.1);
      subGain.gain.setValueAtTime(0.3, now + idx * 0.1);
      subGain.gain.linearRampToValueAtTime(0.01, now + idx * 0.1 + 0.25);
      subOsc.start(now + idx * 0.1);
      subOsc.stop(now + idx * 0.1 + 0.25);
    });
  } else if (type === 'secret') {
    osc.type = 'sine';
    osc.frequency.setValueAtTime(400, now);
    osc.frequency.exponentialRampToValueAtTime(1200, now + 0.4);
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.linearRampToValueAtTime(0.01, now + 0.4);
    osc.start(now);
    osc.stop(now + 0.4);
  }
}

// --------------------------------------------------------------------------
// 11. ADVANCED MINI-GAME ARCADE HUB (OCTOBER 6TH SPECIALS)
// --------------------------------------------------------------------------
function closeArcadeModal() {
  playSound('click');
  setBlurState(false);
  const modal = document.getElementById("verdict-modal");
  if (modal) modal.classList.add("hidden");

  const actionBtn = document.querySelector("#verdict-modal button:not(.arcade-custom-btn)") || document.getElementById("verdict-next-btn");
  if (actionBtn) {
    actionBtn.textContent = "Next Question ➔";
    actionBtn.onclick = dismissVerdictAndAdvance;
  }
}

function openMiniGameHub() {
  playSound('click');
  setBlurState(true);
  const modal = document.getElementById("verdict-modal");
  if (modal) modal.classList.add("modal-overlay-blur");
  document.getElementById("verdict-icon").textContent = "🎮";

  const deltaBadge = document.getElementById("score-delta-badge");
  if (deltaBadge) {
    deltaBadge.className = "delta-badge positive";
    deltaBadge.textContent = "PAPA'S 6TH OCTOBER ARCADE";
  }

  const actionBtn = document.querySelector("#verdict-modal button:not(.arcade-custom-btn)") || document.getElementById("verdict-next-btn");
  if (actionBtn) {
    actionBtn.textContent = "✖ Close Arcade";
    actionBtn.onclick = closeArcadeModal;
  }

  const textEl = document.getElementById("verdict-body-text");
  textEl.innerHTML = `
    <div style="margin-bottom:12px; font-weight:600; color:#cbd5e1;">Select a timed challenge to earn bonus Papa Points!</div>
    <div style="font-size:0.85rem; color:#f59e0b; margin-bottom:12px; font-weight:bold;">🏆 Arcade Best Score: ${arcadeHighScore} Pts</div>
    <div style="display:flex; flex-direction:column; gap:10px; padding:5px;">
      <button class="arcade-custom-btn" onclick="startBalloonPopGame()">🎈 October 6th Balloon Blitz (15s Speed Run)</button>
      <button class="arcade-custom-btn" onclick="startCakeClickerGame()">🎂 Birthday Cake Rush (20s Fever Mode)</button>
      <button class="arcade-custom-btn" onclick="startRunBirthdayGame()">🏃 Run Birthday (30s Obstacle Dash)</button>
      <button class="arcade-custom-btn" onclick="startSecretArcadeGame()">☕ Chai Smash Frenzy (15s Targets)</button>
    </div>
  `;

  modal.classList.remove("hidden");
}

// GAME 1: POP THE BALLOON BLITZ (15s TIMER WITH SPECIAL BALLOONS & TRAPS)
function startBalloonPopGame() {
  playSound('secret');
  let poppedCount = 0;
  let bonusScore = 0;
  let timeLeft = 15;

  const textEl = document.getElementById("verdict-body-text");
  textEl.innerHTML = `
    <strong>🎈 OCTOBER 6TH BALLOON BLITZ! 🎈</strong><br/>
    <small style="color:#94a3b8;">Golden (🌟) = +150 | Rainbow (🌈) = +250 | Time (⏳) = +3s | Bomb (💣) = -100</small>
    <div id="balloon-pop-stage" style="width:100%; height:200px; background:rgba(15, 23, 42, 0.85); border:2px solid #a855f7; border-radius:16px; margin-top:10px; position:relative; overflow:hidden;"></div>
    <div id="balloon-timer" style="font-weight:bold; font-size:1.1rem; margin-top:10px; color:#ffd700;">⏱️ Time: 15s | Points: 0</div>
  `;

  const stage = document.getElementById("balloon-pop-stage");
  const timerEl = document.getElementById("balloon-timer");

  const spawnBalloon = () => {
    if (!stage) return;
    const types = ["🎈", "🎈", "🎉", "🎁", "🌟", "🌈", "⏳", "💣"];
    const chosenType = types[Math.floor(Math.random() * types.length)];

    const b = document.createElement("div");
    b.textContent = chosenType;
    b.style.fontSize = (chosenType === "🌟" || chosenType === "🌈") ? "2.6rem" : "2.2rem";
    b.style.position = "absolute";
    b.style.left = `${Math.random() * 80 + 10}%`;
    b.style.bottom = "-40px";
    b.style.cursor = "pointer";
    b.style.transition = "bottom 2.4s linear";

    b.onclick = (e) => {
      const rect = b.getBoundingClientRect();
      if (chosenType === "💣") {
        playSound('negative');
        bonusScore = Math.max(0, bonusScore - 100);
        showFloatingScoreText(rect.left, rect.top, "-100! 💣", "#ef4444");
      } else if (chosenType === "🌟") {
        poppedCount++;
        bonusScore += 150;
        playSound('positive');
        showFloatingScoreText(rect.left, rect.top, "+150! 🌟", "#ffd700");
      } else if (chosenType === "🌈") {
        poppedCount++;
        bonusScore += 250;
        playSound('combo');
        showFloatingScoreText(rect.left, rect.top, "+250! 🌈", "#a855f7");
      } else if (chosenType === "⏳") {
        timeLeft += 3;
        playSound('secret');
        showFloatingScoreText(rect.left, rect.top, "+3 Seconds! ⏳", "#38bdf8");
      } else {
        poppedCount++;
        bonusScore += 50;
        playSound('pop');
        showFloatingScoreText(rect.left, rect.top, "+50!", "#4ade80");
      }
      b.remove();
      if (timerEl) timerEl.textContent = `⏱️ Time: ${timeLeft}s | Points: ${bonusScore}`;
    };

    stage.appendChild(b);

    setTimeout(() => { b.style.bottom = "230px"; }, 50);
    setTimeout(() => { if (b.parentNode) b.remove(); }, 2400);
  };

  const spawner = setInterval(spawnBalloon, 320);

  const countdown = setInterval(() => {
    timeLeft--;
    if (timerEl) timerEl.textContent = `⏱️ Time: ${timeLeft}s | Points: ${bonusScore}`;

    if (timeLeft <= 0) {
      clearInterval(spawner);
      clearInterval(countdown);
      totalScore += bonusScore;
      checkAndSaveHighScore(bonusScore);
      updateScoreUI();
      textEl.innerHTML = `<strong>🎉 BLITZ COMPLETE! 🎉</strong><br/>You popped ${poppedCount} balloons and scored <strong>+${bonusScore} Papa Points!</strong>`;
      triggerConfettiExplosion();
    }
  }, 1000);
}

// GAME 2: BIRTHDAY CAKE RUSH (20s TIMER WITH UPGRADES)
function startCakeClickerGame() {
  playSound('secret');
  cakeClickerCount = 0;
  clickerMultiplier = 1;
  autoBakerActive = false;
  let timeLeft = 20;

  const textEl = document.getElementById("verdict-body-text");
  textEl.innerHTML = `
    <strong>🎂 BIRTHDAY CAKE RUSH (20s)! 🎂</strong><br/>
    <small style="color:#94a3b8;">Bake slices & unlock power-up multipliers!</small>
    <div style="margin:12px 0;">
      <div id="big-cake-btn" style="font-size:5rem; cursor:pointer; user-select:none; transition:transform 0.08s;" onclick="clickCake()">🎂</div>
      <div id="cake-count-display" style="font-size:1.3rem; font-weight:bold; color:#ffd700; margin-top:5px;">0 Slices Baked</div>
      <div id="cake-timer-display" style="font-size:1.1rem; font-weight:bold; color:#ef4444; margin-top:3px;">⏱️ Time Remaining: 20s</div>
    </div>
    <div style="display:flex; flex-direction:column; gap:6px; align-items:center;">
      <button class="nav-btn-styled highlight" style="width:auto;" onclick="buyCakeUpgrade()">⚡ Multiplier x2 (Cost: 15 Slices)</button>
      <button class="nav-btn-styled" style="width:auto; font-size:0.8rem;" onclick="buyAutoBaker()">🤖 Hire Frosting Bot (+2/sec) (Cost: 25 Slices)</button>
    </div>
  `;

  if (cakeClickerTimer) clearInterval(cakeClickerTimer);

  cakeClickerTimer = setInterval(() => {
    timeLeft--;
    if (autoBakerActive) {
      cakeClickerCount += 2;
      const display = document.getElementById("cake-count-display");
      if (display) display.textContent = `${cakeClickerCount} Slices Baked (${clickerMultiplier}x Boost)`;
    }

    const timerDisplay = document.getElementById("cake-timer-display");
    if (timerDisplay) timerDisplay.textContent = `⏱️ Time Remaining: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(cakeClickerTimer);
      const bonus = cakeClickerCount * 25;
      totalScore += bonus;
      checkAndSaveHighScore(bonus);
      updateScoreUI();

      textEl.innerHTML = `<strong>🎉 TIME'S UP! 🎉</strong><br/>You baked ${cakeClickerCount} cake slices and earned <strong>+${bonus} Papa Points!</strong>`;
      triggerConfettiExplosion();
    }
  }, 1000);
}

function clickCake() {
  playSound('pop');
  cakeClickerCount += (1 * clickerMultiplier);

  const cakeBtn = document.getElementById("big-cake-btn");
  if (cakeBtn) {
    cakeBtn.style.transform = "scale(1.25) rotate(5deg)";
    setTimeout(() => cakeBtn.style.transform = "scale(1) rotate(0deg)", 80);
  }

  const display = document.getElementById("cake-count-display");
  if (display) display.textContent = `${cakeClickerCount} Slices Baked (${clickerMultiplier}x Boost)`;
}

function buyCakeUpgrade() {
  if (cakeClickerCount >= 15) {
    playSound('positive');
    cakeClickerCount -= 15;
    clickerMultiplier *= 2;
    const display = document.getElementById("cake-count-display");
    if (display) display.textContent = `${cakeClickerCount} Slices Baked (${clickerMultiplier}x Boost Active!)`;
  } else {
    playSound('negative');
    showFloatingScoreText(window.innerWidth / 2, window.innerHeight / 2, "Need 15 Slices!", "#ef4444");
  }
}

function buyAutoBaker() {
  if (cakeClickerCount >= 25 && !autoBakerActive) {
    playSound('secret');
    cakeClickerCount -= 25;
    autoBakerActive = true;
    showFloatingScoreText(window.innerWidth / 2, window.innerHeight / 2, "🤖 Frosting Bot Hired!", "#38bdf8");
  } else if (autoBakerActive) {
    showFloatingScoreText(window.innerWidth / 2, window.innerHeight / 2, "Bot Already Active!", "#f59e0b");
  } else {
    playSound('negative');
    showFloatingScoreText(window.innerWidth / 2, window.innerHeight / 2, "Need 25 Slices!", "#ef4444");
  }
}

// GAME 3: RUN BIRTHDAY DASH (30s TIMER WITH MULTI-OBSTACLES)
function startRunBirthdayGame() {
  playSound('secret');
  const textEl = document.getElementById("verdict-body-text");
  textEl.innerHTML = `
    <strong>🏃 RUN BIRTHDAY DASH (30s SURVIVAL)! 🏃</strong><br/>
    <small style="color:#94a3b8;">Click / Space to Jump! Avoid Cold Tea (☕) & Soggy Biscuits (🥖)!</small>
    <canvas id="runner-canvas" width="340" height="160" style="background:#0f172a; border:2px solid #ec4899; border-radius:12px; margin-top:10px; cursor:pointer;"></canvas>
    <div id="runner-stats" style="font-weight:bold; margin-top:6px; color:#ffd700;">⏱️ Time: 30s | Score: 0</div>
  `;

  const canvas = document.getElementById("runner-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let runnerY = 110;
  let runnerVY = 0;
  let isJumping = false;
  let obstacleX = 340;
  let obstacleType = "☕";
  let giftX = 220;
  let giftY = 75;
  let runnerScore = 0;
  let timeLeft = 30;
  let gameRunning = true;

  const jump = () => {
    if (!isJumping && gameRunning) {
      playSound('jump');
      runnerVY = -9.5;
      isJumping = true;
    }
  };

  canvas.onclick = jump;
  const keyListener = (e) => {
    if (e.code === "Space" || e.code === "ArrowUp") jump();
  };
  window.addEventListener("keydown", keyListener);

  const timerInterval = setInterval(() => {
    if (!gameRunning) {
      clearInterval(timerInterval);
      return;
    }
    timeLeft--;
    const statsEl = document.getElementById("runner-stats");
    if (statsEl) statsEl.textContent = `⏱️ Time: ${timeLeft}s | Score: ${runnerScore}`;

    if (timeLeft <= 0) {
      gameRunning = false;
      clearInterval(timerInterval);
      window.removeEventListener("keydown", keyListener);
      const bonus = runnerScore * 15;
      totalScore += bonus;
      checkAndSaveHighScore(bonus);
      updateScoreUI();
      textEl.innerHTML = `<strong>🏆 SURVIVAL TRIUMPH! 🏆</strong><br/>You survived 30 seconds, collected ${runnerScore} points, and earned <strong>+${bonus} Papa Points!</strong>`;
      triggerConfettiExplosion();
    }
  }, 1000);

  function gameLoop() {
    if (!gameRunning) return;

    runnerY += runnerVY;
    runnerVY += 0.55; 
    if (runnerY >= 110) {
      runnerY = 110;
      isJumping = false;
    }

    obstacleX -= 4.8;
    if (obstacleX < -25) {
      obstacleX = 340 + Math.random() * 120;
      obstacleType = Math.random() > 0.5 ? "☕" : "🥖";
    }

    giftX -= 3.8;
    if (giftX < -25) giftX = 340 + Math.random() * 160;

    if (obstacleX > 20 && obstacleX < 50 && runnerY > 88) {
      gameRunning = false;
      clearInterval(timerInterval);
      window.removeEventListener("keydown", keyListener);
      playSound('negative');
      const bonus = runnerScore * 10;
      totalScore += bonus;
      updateScoreUI();
      textEl.innerHTML = `<strong>💥 TRIPPED ON ${obstacleType === "☕" ? "COLD TEA" : "SOGGY BISCUIT"}! 💥</strong><br/>You scored ${runnerScore} and earned <strong>+${bonus} Papa Points!</strong>`;
      return;
    }

    if (giftX > 20 && giftX < 50 && Math.abs(runnerY - giftY) < 30) {
      playSound('pop');
      runnerScore += 20;
      giftX = 340 + Math.random() * 140;
      const statsEl = document.getElementById("runner-stats");
      if (statsEl) statsEl.textContent = `⏱️ Time: ${timeLeft}s | Score: ${runnerScore}`;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "#475569";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, 135);
    ctx.lineTo(340, 135);
    ctx.stroke();

    ctx.font = "24px sans-serif";
    ctx.fillText("🧔", 20, runnerY);
    ctx.fillText(obstacleType, obstacleX, 130);
    ctx.fillText("🎁", giftX, giftY);

    requestAnimationFrame(gameLoop);
  }

  requestAnimationFrame(gameLoop);
}

// GAME 4: CHAI SMASH FRENZY (15s TIMER)
function startSecretArcadeGame() {
  playSound('secret');
  secretScore = 0;
  let timeLeft = 15;

  setBlurState(true);
  const modal = document.getElementById("verdict-modal");
  if (modal) modal.classList.add("modal-overlay-blur");
  document.getElementById("verdict-icon").textContent = "☕";

  const deltaBadge = document.getElementById("score-delta-badge");
  if (deltaBadge) {
    deltaBadge.className = "delta-badge positive";
    deltaBadge.textContent = "CHAI SMASH FRENZY";
  }

  const textEl = document.getElementById("verdict-body-text");
  textEl.innerHTML = `
    <strong>☕ PAPA'S CHAI SMASH FRENZY (15s)! ☕</strong><br/>
    <small style="color:#94a3b8;">Smash Golden Cups (☕✨) for maximum speed points!</small>
    <div id="secret-arcade-stage" style="width:100%; height:180px; background:rgba(15, 23, 42, 0.85); border:2px solid #38bdf8; border-radius:16px; margin-top:10px; position:relative; overflow:hidden; cursor:crosshair;">
      <div id="arcade-target" style="font-size:2.5rem; position:absolute; top:40px; left:40px; user-select:none; transition:all 0.15s ease-out;">☕</div>
    </div>
    <div id="arcade-timer" style="font-weight:bold; font-size:1.1rem; margin-top:8px; color:#ffd700;">⏱️ Time Remaining: 15s | Smashed: 0</div>
  `;

  modal.classList.remove("hidden");

  const target = document.getElementById("arcade-target");
  const timerEl = document.getElementById("arcade-timer");

  const moveTarget = () => {
    const stage = document.getElementById("secret-arcade-stage");
    if (!stage || !target) return;
    const maxX = stage.clientWidth - 60;
    const maxY = stage.clientHeight - 60;
    
    const isGolden = Math.random() > 0.7;
    target.textContent = isGolden ? "☕✨" : "☕";
    target.setAttribute("data-golden", isGolden ? "true" : "false");

    target.style.left = `${Math.floor(Math.random() * maxX)}px`;
    target.style.top = `${Math.floor(Math.random() * maxY)}px`;
  };

  target.onclick = (e) => {
    const isGolden = target.getAttribute("data-golden") === "true";
    const pts = isGolden ? 3 : 1;
    secretScore += pts;

    playSound(isGolden ? 'positive' : 'pop');
    showFloatingScoreText(e.clientX, e.clientY, isGolden ? "+300! ✨" : "+100!", isGolden ? "#ffd700" : "#38bdf8");
    moveTarget();
    if (timerEl) timerEl.textContent = `⏱️ Time Remaining: ${timeLeft}s | Smashed: ${secretScore}`;
  };

  const interval = setInterval(() => {
    timeLeft--;
    if (timerEl) timerEl.textContent = `⏱️ Time Remaining: ${timeLeft}s | Smashed: ${secretScore}`;
    
    if (timeLeft <= 0) {
      clearInterval(interval);
      const bonus = secretScore * 100;
      totalScore += bonus;
      checkAndSaveHighScore(bonus);
      updateScoreUI();
      
      textEl.innerHTML = `<strong>🎉 FRENZY COMPLETE! 🎉</strong><br/>You smashed ${secretScore} Chai cups and earned <strong>+${bonus} Papa Points!</strong>`;
      triggerConfettiExplosion();
    }
  }, 1000);
}

function checkAndSaveHighScore(score) {
  if (score > arcadeHighScore) {
    arcadeHighScore = score;
    localStorage.setItem("papa_arcade_highscore", arcadeHighScore.toString());
  }
}

// Interactive Floating Ambient Balloons
function initFloatingBalloonInteractions() {
  const balloons = document.querySelectorAll(".balloon");
  balloons.forEach((b) => {
    b.style.cursor = "pointer";
    b.addEventListener("click", (e) => {
      playSound('pop');
      const bonusPts = 50;
      totalScore += bonusPts;
      updateScoreUI();

      showFloatingScoreText(e.clientX, e.clientY, `+${bonusPts} Papa Pts! 🎈`, "#ff4081");

      b.style.transform = "scale(1.8)";
      b.style.opacity = "0";
      setTimeout(() => {
        b.style.transform = "none";
        b.style.opacity = "0.85";
      }, 2000);
    });
  });
}

function showFloatingScoreText(x, y, text, color = "#ffd700") {
  const floatEl = document.createElement("div");
  floatEl.className = "floating-score-pop";
  floatEl.textContent = text;
  floatEl.style.left = `${x}px`;
  floatEl.style.top = `${y}px`;
  floatEl.style.color = color;
  document.body.appendChild(floatEl);

  setTimeout(() => {
    floatEl.remove();
  }, 900);
}

function initCrownEasterEgg() {
  const crownIcon = document.querySelector(".party-icon");
  if (!crownIcon) return;

  crownIcon.style.cursor = "pointer";
  crownIcon.addEventListener("click", () => {
    crownClickCounter++;
    playSound('click');

    if (crownClickCounter === 5) {
      crownClickCounter = 0;
      startSecretArcadeGame();
    }
  });
}

function initKonamiCode() {
  const pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'b', 'a'];
  let current = 0;

  document.addEventListener('keydown', (e) => {
    if (e.key === pattern[current]) {
      current++;
      if (pattern.length === current) {
        current = 0;
        startSecretArcadeGame();
      }
    } else {
      current = 0;
    }
  });
}

// --------------------------------------------------------------------------
// 12. CANVASES & VISUAL SHAKE ENGINES
// --------------------------------------------------------------------------
function triggerConfettiExplosion(isGrandFinale = false) {
  const canvas = document.getElementById("confetti-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let pieces = [];
  const colors = ["#ffd700", "#ff4081", "#7c4dff", "#00e5ff", "#00e676", "#f59e0b", "#ec4899"];
  const particleCount = isGrandFinale ? 180 : 85;

  for (let i = 0; i < particleCount; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 16 + 4;
    pieces.push({
      x: canvas.width / 2,
      y: isGrandFinale ? canvas.height / 3 : canvas.height / 2,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 3,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10,
      alpha: 1
    });
  }

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let active = false;

    pieces.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.22; 
      p.rotation += p.rotationSpeed;
      p.alpha -= isGrandFinale ? 0.008 : 0.015;

      if (p.alpha > 0) {
        active = true;
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      }
    });

    if (active) {
      requestAnimationFrame(render);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
  render();
}

function triggerSparkleCanvas() {
  const canvas = document.getElementById("confetti-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];
  for (let i = 0; i < 50; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 1,
      color: `hsla(${Math.random() * 60 + 260}, 100%, 75%, ${Math.random()})`,
      vy: Math.random() * -1 - 0.5
    });
  }

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.y += p.vy;
      if (p.y < 0) p.y = canvas.height;
    });

    if (document.body.getAttribute("data-mode") === "ethereal") {
      requestAnimationFrame(render);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
  render();
}

function triggerScreenShake() {
  const card = document.getElementById("question-card");
  if (!card) return;
  card.style.animation = "none";
  card.offsetHeight;
  card.style.animation = "shake 0.4s ease-in-out";
}