/**
 * SpeakChinese - Lesson Data
 * 
 * Learning Philosophy: Scenario-first, Sentence-first, Imitation-based
 * Completely different from HSK/Confucius Institute approach:
 * - No grammar drills, no character writing practice
 * - Real-life situations you'll actually encounter
 * - Listen → Imitate → Use → Practice
 * - Pinyin-primary, Standard Mandarin (普通话)
 * - Cultural context embedded in every lesson
 */

const SCENARIOS = [
    {
        id: 'airport',
        icon: '🛬',
        name: 'Airport & Arrival',
        nameCn: '机场到达',
        category: 'survival',
        difficulty: 1,
        description: 'From landing to leaving the airport',
        culturalTip: {
            title: 'First Impressions Matter',
            text: 'In China, a polite greeting goes a long way. Chinese immigration officers appreciate it when foreigners attempt even a simple "你好" (nǐ hǎo). Have your visa and arrival card ready — Chinese airports are efficient but strict about documentation.'
        },
        sentences: [
            { cn: '你好，我是外国人。', pinyin: 'Nǐ hǎo, wǒ shì wàiguó rén.', en: 'Hello, I am a foreigner.', note: 'A simple self-introduction. Chinese people are generally very welcoming to foreigners who try to speak Chinese.' },
            { cn: '请问，入境处在哪里？', pinyin: 'Qǐng wèn, rùjìng chù zài nǎlǐ?', en: 'Excuse me, where is immigration?', note: '"请问" (qǐng wèn) literally means "please let me ask" — it is the most useful polite phrase in Chinese. Use it before ANY question.' },
            { cn: '这是我的护照和签证。', pinyin: 'Zhè shì wǒ de hùzhào hé qiānzhèng.', en: 'Here is my passport and visa.' },
            { cn: '我来旅游的。', pinyin: 'Wǒ lái lǚyóu de.', en: 'I am here for tourism.', note: 'If asked about your purpose of visit, "旅游" (lǚyóu) means tourism. For business, say "出差" (chūchāi).' },
            { cn: '我要待两个星期。', pinyin: 'Wǒ yào dāi liǎng ge xīngqī.', en: 'I will stay for two weeks.' },
            { cn: '请问，行李提取处怎么走？', pinyin: 'Qǐng wèn, xínglǐ tíqǔ chù zěnme zǒu?', en: 'Excuse me, how do I get to baggage claim?' },
            { cn: '我的行李丢了。', pinyin: 'Wǒ de xínglǐ diū le.', en: 'My luggage is lost.', note: 'If your luggage is lost, show this sentence to airport staff. They will direct you to the lost baggage counter.' },
            { cn: '请问，哪里可以打车？', pinyin: 'Qǐng wèn, nǎlǐ kěyǐ dǎ chē?', en: 'Excuse me, where can I get a taxi?' },
            { cn: '我要去这个地址。', pinyin: 'Wǒ yào qù zhège dìzhǐ.', en: 'I want to go to this address.', note: 'Show this sentence along with your hotel address written down or on your phone. Very useful since many taxi drivers do not speak English.' },
            { cn: '请打表。', pinyin: 'Qǐng dǎ biǎo.', en: 'Please use the meter.', note: 'IMPORTANT: Always ask taxi drivers to use the meter ("打表"). Unmetered taxis may overcharge you. This is a key survival phrase.' }
        ]
    },
    {
        id: 'hotel',
        icon: '🏨',
        name: 'Hotel Check-in',
        nameCn: '酒店入住',
        category: 'survival',
        difficulty: 1,
        description: 'Check in, ask for services, handle issues',
        culturalTip: {
            title: 'Hotel Tips for China',
            text: 'Most Chinese hotels require your physical passport for check-in — they will scan it. International hotels usually have English-speaking staff, but budget hotels may not. Having key phrases ready saves time. Wi-Fi is standard but some Western apps (Google, WhatsApp, Instagram) are blocked — get a VPN before arriving.'
        },
        sentences: [
            { cn: '我有预订。', pinyin: 'Wǒ yǒu yùdìng.', en: 'I have a reservation.' },
            { cn: '我预订了一间房，名字是___。', pinyin: 'Wǒ yùdìng le yī jiān fáng, míngzi shì ___.', en: 'I booked a room, the name is ___.', note: 'Fill in your name. Chinese hotel staff will look up your reservation by name.' },
            { cn: '请问有Wi-Fi吗？密码是什么？', pinyin: 'Qǐng wèn yǒu Wi-Fi ma? Mìmǎ shì shénme?', en: 'Is there Wi-Fi? What is the password?' },
            { cn: '房间里有转换插头吗？', pinyin: 'Fángjiān lǐ yǒu zhuǎnhuàn chātóu ma?', en: 'Is there a power adapter in the room?', note: 'China uses Type A and Type I outlets. If your devices use European or UK plugs, you will need an adapter.' },
            { cn: '几点退房？', pinyin: 'Jǐ diǎn tuì fáng?', en: 'What time is check-out?' },
            { cn: '可以延迟退房吗？', pinyin: 'Kěyǐ yánchí tuì fáng ma?', en: 'Can I have a late check-out?' },
            { cn: '空调坏了。', pinyin: 'Kōngtiáo huài le.', en: 'The air conditioner is broken.' },
            { cn: '请帮我叫一辆出租车。', pinyin: 'Qǐng bāng wǒ jiào yī liàng chūzūchē.', en: 'Please call a taxi for me.' },
            { cn: '早餐几点开始？', pinyin: 'Zǎocān jǐ diǎn kāishǐ?', en: 'What time does breakfast start?' },
            { cn: '请帮我存一下行李。', pinyin: 'Qǐng bāng wǒ cún yíxià xínglǐ.', en: 'Please store my luggage for a while.' }
        ]
    },
    {
        id: 'transport',
        icon: '🚕',
        name: 'Getting Around',
        nameCn: '交通出行',
        category: 'survival',
        difficulty: 2,
        description: 'Taxi, subway, and directions',
        culturalTip: {
            title: 'Navigation in China',
            text: 'Google Maps does not work well in China. Download Baidu Maps (百度地图) or Amap (高德地图) — both have English interfaces. The subway is the easiest way to get around major cities. Most subway signs have English, and station announcements are bilingual. For taxis, Didi (滴滴) is China\'s Uber — it has an English app.'
        },
        sentences: [
            { cn: '去机场，多少钱？', pinyin: 'Qù jīchǎng, duōshǎo qián?', en: 'To the airport, how much?' },
            { cn: '请走高速公路。', pinyin: 'Qǐng zǒu gāosù gōnglù.', en: 'Please take the highway.' },
            { cn: '请在前面路口右转。', pinyin: 'Qǐng zài qiánmiàn lùkǒu yòu zhuǎn.', en: 'Please turn right at the intersection ahead.' },
            { cn: '请停在这里。', pinyin: 'Qǐng tíng zài zhèlǐ.', en: 'Please stop here.' },
            { cn: '地铁站怎么走？', pinyin: 'Dìtiě zhàn zěnme zǒu?', en: 'How do I get to the subway station?' },
            { cn: '我要买一张票去___。', pinyin: 'Wǒ yào mǎi yī zhāng piào qù ___.', en: 'I want to buy a ticket to ___.', note: 'Subway tickets can be bought at machines (usually with English option) or at the service counter.' },
            { cn: '到___还有几站？', pinyin: 'Dào ___ hái yǒu jǐ zhàn?', en: 'How many stops until ___?' },
            { cn: '请问，这是去___的方向吗？', pinyin: 'Qǐng wèn, zhè shì qù ___ de fāngxiàng ma?', en: 'Excuse me, is this the direction to ___?' },
            { cn: '我可以在手机上扫码乘车吗？', pinyin: 'Wǒ kěyǐ zài shǒujī shàng sǎomǎ chéngchē ma?', en: 'Can I scan a QR code to ride?', note: 'In most Chinese cities, you can use WeChat or Alipay to scan QR codes at subway turnstiles — no ticket needed.' },
            { cn: '请慢一点开。', pinyin: 'Qǐng màn yīdiǎn kāi.', en: 'Please drive a bit slower.', note: 'If you feel the taxi is going too fast, do not hesitate to say this. Chinese taxi drivers can drive aggressively.' }
        ]
    },
    {
        id: 'restaurant',
        icon: '🍜',
        name: 'Ordering Food',
        nameCn: '餐厅点餐',
        category: 'daily',
        difficulty: 2,
        description: 'Order, customize, and enjoy Chinese cuisine',
        culturalTip: {
            title: 'Dining Etiquette',
            text: 'In Chinese restaurants, dishes are shared family-style — everyone eats from common dishes in the center of the table. Use serving chopsticks (公筷) if provided. Never stick your chopsticks upright in rice — it resembles incense at funerals and is considered very bad luck. Tipping is NOT expected in China and may even be refused. "买单" (mǎi dān) means "check please."'
        },
        sentences: [
            { cn: '请问有位子吗？', pinyin: 'Qǐng wèn yǒu wèizi ma?', en: 'Excuse me, do you have a table?' },
            { cn: '请给我看看菜单。', pinyin: 'Qǐng gěi wǒ kànkan càidān.', en: 'Please show me the menu.' },
            { cn: '有什么推荐的？', pinyin: 'Yǒu shénme tuījiàn de?', en: 'What do you recommend?' },
            { cn: '我要这个，这个，还有这个。', pinyin: 'Wǒ yào zhège, zhège, hái yǒu zhège.', en: 'I want this, this, and this.', note: 'Point at the menu while saying this. Very practical when you cannot read Chinese characters.' },
            { cn: '不要辣。', pinyin: 'Bù yào là.', en: 'No spicy, please.', note: 'CRUCIAL: Chinese food can be extremely spicy. "不要辣" (no spicy) or "微辣" (mild spicy) are essential phrases. If you love spicy, say "要辣" or "特辣" (extra spicy).' },
            { cn: '我对花生过敏。', pinyin: 'Wǒ duì huāshēng guòmǐn.', en: 'I am allergic to peanuts.', note: 'Peanut allergies are serious in China — peanuts are used everywhere in Chinese cooking, often in oil. Learn this phrase by heart. Replace "花生" with other allergens as needed.' },
            { cn: '我不吃猪肉。', pinyin: 'Wǒ bù chī zhūròu.', en: 'I do not eat pork.', note: 'Useful for religious or dietary restrictions. Pork is the most common meat in Chinese cuisine.' },
            { cn: '请来一瓶啤酒。', pinyin: 'Qǐng lái yī píng píjiǔ.', en: 'Please bring a bottle of beer.' },
            { cn: '请给我一双筷子。', pinyin: 'Qǐng gěi wǒ yī shuāng kuàizi.', en: 'Please give me a pair of chopsticks.' },
            { cn: '这个菜太好吃了！', pinyin: 'Zhège cài tài hǎochī le!', en: 'This dish is delicious!', note: 'Complimenting the food is always appreciated. Chinese hosts and restaurant staff will be delighted.' },
            { cn: '买单。', pinyin: 'Mǎi dān.', en: 'Check, please.', note: 'The most important restaurant phrase. In China, you call the waiter over and say "买单" — they will bring a QR code for you to scan and pay.' },
            { cn: '可以打包吗？', pinyin: 'Kěyǐ dǎbāo ma?', en: 'Can I get this to go?', note: 'Leftover food? "打包" (dǎbāo) means to pack up leftovers. Very common in China — no shame in it.' }
        ]
    },
    {
        id: 'shopping',
        icon: '🛍️',
        name: 'Shopping & Bargaining',
        nameCn: '购物砍价',
        category: 'daily',
        difficulty: 2,
        description: 'Shop at markets, malls, and bargain like a local',
        culturalTip: {
            title: 'The Art of Bargaining',
            text: 'Bargaining is expected at markets, street stalls, and small shops — but NOT in malls, supermarkets, or chain stores. Start by offering 30-50% of the asking price, then negotiate up. Always bargain with a smile — it should be friendly, not aggressive. Walk away if the price is too high; sellers will often call you back with a lower price. In fixed-price stores, prices are clearly marked.'
        },
        sentences: [
            { cn: '这个多少钱？', pinyin: 'Zhège duōshǎo qián?', en: 'How much is this?' },
            { cn: '太贵了！', pinyin: 'Tài guì le!', en: 'Too expensive!', note: 'The universal bargaining opener. Say this with a slightly shocked expression for best effect.' },
            { cn: '便宜一点可以吗？', pinyin: 'Piányi yīdiǎn kěyǐ ma?', en: 'Can you make it cheaper?' },
            { cn: '我出五十块。', pinyin: 'Wǒ chū wǔshí kuài.', en: 'I will give you 50 yuan.', note: '"块" (kuài) is the spoken word for yuan, like "bucks" in English. Always use "块" in spoken Chinese, not "元" (yuán).' },
            { cn: '能再便宜点吗？', pinyin: 'Néng zài piányi diǎn ma?', en: 'Can you go even lower?' },
            { cn: '那就这样吧。', pinyin: 'Nà jiù zhèyàng ba.', en: 'Alright, deal.', note: 'When you agree on a price, say this to close the deal. Follow up with "扫码还是现金？" (scan code or cash?) to ask about payment method.' },
            { cn: '我只是看看，谢谢。', pinyin: 'Wǒ zhǐshì kànkan, xièxie.', en: 'I am just looking, thanks.', note: 'Useful when shop staff are being too pushy. Polite but firm.' },
            { cn: '有其他颜色吗？', pinyin: 'Yǒu qítā yánsè ma?', en: 'Do you have other colors?' },
            { cn: '可以试穿吗？', pinyin: 'Kěyǐ shìchuān ma?', en: 'Can I try it on?' },
            { cn: '有小号的吗？', pinyin: 'Yǒu xiǎohào de ma?', en: 'Do you have a small size?', note: 'Sizes: 大号 (large), 中号 (medium), 小号 (small). Chinese clothing sizes tend to run smaller than Western sizes.' },
            { cn: '我要这个。', pinyin: 'Wǒ yào zhège.', en: 'I will take this.' },
            { cn: '可以扫码付款吗？', pinyin: 'Kěyǐ sǎomǎ fùkuǎn ma?', en: 'Can I pay by scanning a QR code?', note: 'Almost ALL shops in China accept WeChat Pay or Alipay via QR code. Cash is rarely used now.' }
        ]
    },
    {
        id: 'payment',
        icon: '💰',
        name: 'Mobile Payment',
        nameCn: '手机支付',
        category: 'survival',
        difficulty: 1,
        description: 'WeChat Pay and Alipay essentials',
        culturalTip: {
            title: 'Cashless China',
            text: 'China is essentially a cashless society now. WeChat Pay (微信支付) and Alipay (支付宝) are used for everything — from buying a car to paying for street food. Both apps now allow foreigners to link international credit cards. Set this up BEFORE you arrive in China. You will rarely need cash, but carry some as backup. Most places no longer accept foreign credit cards directly.'
        },
        sentences: [
            { cn: '可以微信支付吗？', pinyin: 'Kěyǐ Wēxìn zhīfù ma?', en: 'Can I use WeChat Pay?' },
            { cn: '可以支付宝吗？', pinyin: 'Kěyǐ Zhīfùbǎo ma?', en: 'Can I use Alipay?' },
            { cn: '我扫你还是你扫我？', pinyin: 'Wǒ sǎo nǐ háishì nǐ sǎo wǒ?', en: 'Do I scan you or do you scan me?', note: 'In China, there are two payment modes: you scan the merchant\'s QR code, or the merchant scans your QR code. This phrase clarifies which mode to use.' },
            { cn: '付过去了。', pinyin: 'Fù guòqù le.', en: 'I have paid.', note: 'Say this after completing a payment to confirm the transaction is done.' },
            { cn: '收到了吗？', pinyin: 'Shōudào le ma?', en: 'Did you receive it?' },
            { cn: '可以收现金吗？', pinyin: 'Kěyǐ shōu xiànjīn ma?', en: 'Can you accept cash?', note: 'Some small vendors may still accept cash, but many prefer mobile payment. Always ask first.' },
            { cn: '请问哪里可以换钱？', pinyin: 'Qǐng wèn nǎlǐ kěyǐ huàn qián?', en: 'Where can I exchange money?' },
            { cn: '可以刷信用卡吗？', pinyin: 'Kěyǐ shuā xìnyòngkǎ ma?', en: 'Can I use a credit card?', note: 'International credit cards are rarely accepted outside high-end hotels and international stores. Mobile payment is the way to go.' }
        ]
    },
    {
        id: 'directions',
        icon: '🗺️',
        name: 'Asking Directions',
        nameCn: '问路',
        category: 'survival',
        difficulty: 1,
        description: 'Find your way around Chinese cities',
        culturalTip: {
            title: 'Getting Lost in China',
            text: 'Chinese street addresses can be confusing — they often use a complex numbering system based on districts, blocks, and building numbers. Don\'t rely on addresses alone; use landmarks. Most young people in major cities speak some English and are happy to help. Show them your destination on your phone map. Remember: Chinese maps use north-up orientation like Western maps.'
        },
        sentences: [
            { cn: '请问，厕所在哪里？', pinyin: 'Qǐng wèn, cèsuǒ zài nǎlǐ?', en: 'Excuse me, where is the toilet?', note: 'THE most important survival phrase. Public toilets are everywhere in China but not always obvious. In Chinese, "厕所" (cèsuǒ) works for both men and women.' },
            { cn: '我要去这个地方。', pinyin: 'Wǒ yào qù zhège dìfang.', en: 'I want to go to this place.', note: 'Show your phone with the location. This works better than trying to pronounce a Chinese address.' },
            { cn: '远吗？', pinyin: 'Yuǎn ma?', en: 'Is it far?' },
            { cn: '走路要多久？', pinyin: 'Zǒulù yào duōjiǔ?', en: 'How long does it take to walk?' },
            { cn: '往哪边走？', pinyin: 'Wǎng nǎ biān zǒu?', en: 'Which direction should I go?' },
            { cn: '直走，然后左转。', pinyin: 'Zhí zǒu, ránhòu zuǒ zhuǎn.', en: 'Go straight, then turn left.', note: 'Understanding directions: 直走 (straight), 左转 (turn left), 右转 (turn right), 掉头 (U-turn).' },
            { cn: '就在前面。', pinyin: 'Jiù zài qiánmiàn.', en: 'It is right ahead.' },
            { cn: '在马路对面。', pinyin: 'Zài mǎlù duìmiàn.', en: 'It is across the street.' },
            { cn: '请问附近有地铁站吗？', pinyin: 'Qǐng wèn fùjìn yǒu dìtiě zhàn ma?', en: 'Is there a subway station nearby?' },
            { cn: '我迷路了。', pinyin: 'Wǒ mílù le.', en: 'I am lost.', note: 'If you are truly lost, say this and show your hotel address or destination on your phone. Most people will try to help.' }
        ]
    },
    {
        id: 'business-intro',
        icon: '🤝',
        name: 'Business Introductions',
        nameCn: '商务介绍',
        category: 'business',
        difficulty: 3,
        description: 'Introduce yourself and exchange business cards',
        culturalTip: {
            title: 'Business Card Etiquette',
            text: 'In Chinese business culture, exchanging business cards (名片, míngpiàn) is a formal ritual. Receive and present cards with BOTH hands, with the text facing the recipient. Take a moment to read the card carefully before putting it away — never stuff it in your pocket immediately. Address people by their title and surname, not just their first name. Hierarchy and respect are very important in Chinese business relationships.'
        },
        sentences: [
            { cn: '你好，很高兴认识你。', pinyin: 'Nǐ hǎo, hěn gāoxìng rènshi nǐ.', en: 'Hello, nice to meet you.' },
            { cn: '我叫___，我是___公司的。', pinyin: 'Wǒ jiào ___, wǒ shì ___ gōngsī de.', en: 'My name is ___, I am from ___ company.' },
            { cn: '这是我的名片。', pinyin: 'Zhè shì wǒ de míngpiàn.', en: 'This is my business card.', note: 'Present your card with both hands, text facing the recipient. This shows respect.' },
            { cn: '请问您怎么称呼？', pinyin: 'Qǐng wèn nín zěnme chēnghu?', en: 'How should I address you?', note: 'A polite way to ask someone\'s name or title. "您" (nín) is the polite form of "你" (nǐ) — always use it in business contexts.' },
            { cn: '王总，您好！', pinyin: 'Wáng zǒng, nín hǎo!', en: 'Hello, Director Wang!', note: 'Address people by surname + title. "总" (zǒng) means director/boss and is commonly used. For example: 王总 (Director Wang), 李经理 (Manager Li).' },
            { cn: '我是来做生意的。', pinyin: 'Wǒ shì lái zuò shēngyì de.', en: 'I am here to do business.' },
            { cn: '我们公司主要做___。', pinyin: 'Wǒmen gōngsī zhǔyào zuò ___.', en: 'Our company mainly does ___.' },
            { cn: '希望能和您合作。', pinyin: 'Xīwàng néng hé nín hézuò.', en: 'I hope to cooperate with you.' },
            { cn: '久仰大名。', pinyin: 'Jiǔyǎng dàmíng.', en: 'I have heard a lot about you.', note: 'A formal Chinese expression showing respect. It literally means "I have long looked up to your great name." Use it when meeting someone you have heard about — it shows you have done your homework.' },
            { cn: '请问可以加您的微信吗？', pinyin: 'Qǐng wèn kěyǐ jiā nín de Wēixìn ma?', en: 'May I add your WeChat?', note: 'WeChat is THE business communication tool in China. Exchanging WeChat contacts is more common than exchanging phone numbers. Almost all business relationships start with "加个微信" (add each other\'s WeChat).' }
        ]
    },
    {
        id: 'business-meeting',
        icon: '💼',
        name: 'Business Meeting',
        nameCn: '商务会议',
        category: 'business',
        difficulty: 3,
        description: 'Navigate meetings, negotiations, and deals',
        culturalTip: {
            title: 'Meeting Culture in China',
            text: 'Chinese business meetings often start with small talk before getting to business — do not rush. Relationship building (关系, guānxi) is considered essential before doing business. Decisions may not be made in the meeting itself — they often happen behind the scenes. "Face" (面子, miànzi) is crucial: never publicly contradict or embarrass your Chinese counterpart. If you disagree, do so privately and diplomatically.'
        },
        sentences: [
            { cn: '我们开始吧。', pinyin: 'Wǒmen kāishǐ ba.', en: 'Let us begin.' },
            { cn: '请允许我介绍一下我们的产品。', pinyin: 'Qǐng yǔnxǔ wǒ jièshào yíxià wǒmen de chǎnpǐn.', en: 'Please allow me to introduce our products.' },
            { cn: '我们的产品质量很好，价格也合理。', pinyin: 'Wǒmen de chǎnpǐn zhìliàng hěn hǎo, jiàgé yě hélǐ.', en: 'Our product quality is excellent and the price is reasonable.' },
            { cn: '您能介绍一下贵公司的情况吗？', pinyin: 'Nín néng jièshào yíxià guì gōngsī de qíngkuàng ma?', en: 'Could you introduce your company?', note: '"贵公司" (guì gōngsī) means "your esteemed company" — a formal, respectful way to refer to the other party\'s company.' },
            { cn: '我们希望长期合作。', pinyin: 'Wǒmen xīwàng chángqī hézuò.', en: 'We hope for long-term cooperation.' },
            { cn: '这个价格我们能接受。', pinyin: 'Zhège jiàgé wǒmen néng jiēshòu.', en: 'We can accept this price.' },
            { cn: '能不能再优惠一点？', pinyin: 'Néng bù néng zài yōuhuì yīdiǎn?', en: 'Can you offer a better price?' },
            { cn: '我们需要考虑一下。', pinyin: 'Wǒmen xūyào kǎolǜ yíxià.', en: 'We need to think about it.', note: 'This is a polite way to delay a decision. In Chinese business culture, "考虑一下" often means "no" or "not right now" without directly saying so — saving face for both parties.' },
            { cn: '我们回去研究一下，再回复您。', pinyin: 'Wǒmen huíqù yánjiū yíxià, zài huífù nín.', en: 'We will go back and study it, then reply to you.' },
            { cn: '没问题，我们同意。', pinyin: 'Méi wèntí, wǒmen tóngyì.', en: 'No problem, we agree.' },
            { cn: '我们什么时候签合同？', pinyin: 'Wǒmen shénme shíhòu qiān hétong?', en: 'When do we sign the contract?' },
            { cn: '合作愉快！', pinyin: 'Hézuò yúkuài!', en: 'Pleasure doing business with you!', note: 'A standard closing phrase when a deal is reached. Often accompanied by a handshake.' }
        ]
    },
    {
        id: 'business-dinner',
        icon: '🍻',
        name: 'Business Dinner',
        nameCn: '商务宴请',
        category: 'business',
        difficulty: 3,
        description: 'Dining, toasting, and socializing for business',
        culturalTip: {
            title: 'The Business Banquet',
            text: 'Business dinners (宴请, yànqǐng) are where real relationships are built in China. The host orders all the dishes — guests should not order. Toasting is essential: stand up, hold your glass with both hands, and say "干杯" (gān bēi, cheers/empty glass). When toasting someone senior, hold your glass slightly lower than theirs as a sign of respect. Baijiu (白酒, Chinese rice liquor) is the standard drink at business dinners — it is strong (40-60% alcohol). Pace yourself! If you cannot drink, say so upfront. It is acceptable to refuse on health or religious grounds.'
        },
        sentences: [
            { cn: '今晚我请客。', pinyin: 'Jīnwǎn wǒ qǐngkè.', en: 'Tonight is my treat.', note: 'In Chinese business culture, the host pays. Fighting over the bill is common and shows generosity. Let your host pay if they insist — you can return the favor next time.' },
            { cn: '随便点，不要客气。', pinyin: 'Suíbiàn diǎn, búyào kèqi.', en: 'Order whatever you like, do not be polite.', note: '"不要客气" (búyào kèqi) means "do not be too polite/formal" — a common Chinese hospitality phrase. It means "make yourself at home."' },
            { cn: '来，干杯！', pinyin: 'Lái, gān bēi!', en: 'Come on, cheers!', note: '"干杯" (gān bēi) literally means "dry glass" — it implies you should finish your drink. If you cannot drink that much, say "随意" (suíyì, as you please) instead.' },
            { cn: '我敬您一杯。', pinyin: 'Wǒ jìng nín yī bēi.', en: 'Let me toast you.', note: 'A formal toast. "敬" (jìng) means to respect/toast. Hold your glass with both hands and lower it slightly when clinking with someone senior.' },
            { cn: '随意随意。', pinyin: 'Suíyì suíyì.', en: 'Drink as you please.', note: 'A gentler alternative to "干杯". It means "drink at your own pace" — no pressure to finish the glass.' },
            { cn: '我不能喝酒，以茶代酒。', pinyin: 'Wǒ bù néng hējiǔ, yǐ chá dài jiǔ.', en: 'I cannot drink alcohol, I will use tea instead.', note: '"以茶代酒" (use tea to substitute for wine) is a widely accepted phrase for non-drinkers. It is respectful and nobody will push you to drink after this.' },
            { cn: '这道菜是这里的特色菜。', pinyin: 'Zhè dào cài shì zhèlǐ de tèsè cài.', en: 'This dish is a specialty here.' },
            { cn: '多吃点，多吃点。', pinyin: 'Duō chī diǎn, duō chī diǎn.', en: 'Eat more, eat more.', note: 'Chinese hosts will repeatedly encourage you to eat more. It is a sign of hospitality. You do not have to eat everything, but try a bit of each dish to show appreciation.' },
            { cn: '谢谢您的款待。', pinyin: 'Xièxie nín de kuǎndài.', en: 'Thank you for your hospitality.' },
            { cn: '下次我来请客。', pinyin: 'Xià cì wǒ lái qǐngkè.', en: 'Next time it is my treat.', note: 'Important for relationship building. Chinese business culture values reciprocity — always offer to return the favor.' }
        ]
    },
    {
        id: 'social',
        icon: '👫',
        name: 'Making Friends',
        nameCn: '交友聊天',
        category: 'daily',
        difficulty: 2,
        description: 'Casual conversations and socializing',
        culturalTip: {
            title: 'Social Culture',
            text: 'Chinese people are generally warm and curious about foreigners. They may ask personal questions (age, salary, marital status) that seem intrusive to Westerners — this is normal and shows they care. "吃了吗？" (Have you eaten?) is a common greeting, not an invitation to a meal. WeChat is the center of social life — if you make a friend, exchange WeChat immediately. Stickers and emojis are heavily used in WeChat chats.'
        },
        sentences: [
            { cn: '你是哪国人？', pinyin: 'Nǐ shì nǎ guó rén?', en: 'Where are you from?' },
            { cn: '我是美国人。', pinyin: 'Wǒ shì Měiguó rén.', en: 'I am American.', note: 'Replace with your country: 英国人 (British), 加拿大人 (Canadian), 澳大利亚人 (Australian), 法国人 (French), 德国人 (German), etc.' },
            { cn: '你中文说得很好！', pinyin: 'Nǐ zhōngwén shuō de hěn hǎo!', en: 'Your Chinese is very good!', note: 'You will hear this ALL the time, even if you only said "你好". It is a common compliment to foreigners. The polite response is "哪里哪里" (nǎlǐ nǎlǐ, not at all) or "还不太好" (still not very good).' },
            { cn: '哪里哪里，我还在学。', pinyin: 'Nǎlǐ nǎlǐ, wǒ hái zài xué.', en: 'Not at all, I am still learning.', note: 'The standard modest response to compliments. Chinese culture values humility — accepting a compliment too directly can seem arrogant.' },
            { cn: '你在中国待了多久了？', pinyin: 'Nǐ zài Zhōngguó dāi le duōjiǔ le?', en: 'How long have you been in China?' },
            { cn: '你喜欢中国菜吗？', pinyin: 'Nǐ xǐhuan Zhōngguó cài ma?', en: 'Do you like Chinese food?' },
            { cn: '加个微信吧。', pinyin: 'Jiā ge Wēixìn ba.', en: 'Let us add each other on WeChat.' },
            { cn: '周末有空吗？', pinyin: 'Zhōumò yǒu kòng ma?', en: 'Are you free this weekend?' },
            { cn: '一起去吃饭吧。', pinyin: 'Yīqǐ qù chīfàn ba.', en: 'Let us go eat together.' },
            { cn: '你有什么爱好？', pinyin: 'Nǐ yǒu shénme àihào?', en: 'What are your hobbies?' },
            { cn: '下次一起玩。', pinyin: 'Xià cì yīqǐ wán.', en: 'Let us hang out next time.' },
            { cn: '谢谢你，今天很开心。', pinyin: 'Xièxie nǐ, jīntiān hěn kāixīn.', en: 'Thank you, I had a great time today.' }
        ]
    },
    {
        id: 'emergency',
        icon: '🆘',
        name: 'Emergency & Health',
        nameCn: '紧急情况',
        category: 'emergency',
        difficulty: 1,
        description: 'Handle emergencies, health issues, and seek help',
        culturalTip: {
            title: 'Emergency Numbers in China',
            text: 'Police: 110 | Ambulance: 120 | Fire: 119. Save these numbers. In major cities, some operators speak English. For minor health issues, pharmacies (药店, yàodiàn) are everywhere and pharmacists can recommend over-the-counter medicine. For non-emergency medical needs, international hospitals in big cities have English-speaking doctors. Travel insurance that covers medical evacuation is strongly recommended.'
        },
        sentences: [
            { cn: '救命！', pinyin: 'Jiùmìng!', en: 'Help!' },
            { cn: '请帮我报警。', pinyin: 'Qǐng bāng wǒ bàojǐng.', en: 'Please call the police for me.' },
            { cn: '我不舒服。', pinyin: 'Wǒ bù shūfu.', en: 'I do not feel well.' },
            { cn: '我需要看医生。', pinyin: 'Wǒ xūyào kàn yīshēng.', en: 'I need to see a doctor.' },
            { cn: '我肚子疼。', pinyin: 'Wǒ dùzi téng.', en: 'My stomach hurts.', note: 'Other body parts: 头 (head), 肚子 (stomach), 喉咙 (throat), 发烧 (fever), 咳嗽 (cough). Stomach issues are common for travelers adjusting to Chinese food.' },
            { cn: '我对青霉素过敏。', pinyin: 'Wǒ duì qīngméisù guòmǐn.', en: 'I am allergic to penicillin.', note: 'If you have any medication allergies, learn how to say them in Chinese. This could save your life in a medical emergency.' },
            { cn: '请叫救护车。', pinyin: 'Qǐng jiào jiùhùchē.', en: 'Please call an ambulance.' },
            { cn: '我的护照丢了。', pinyin: 'Wǒ de hùzhào diū le.', en: 'My passport is lost.', note: 'If your passport is lost, go to the nearest police station (派出所, pàichūsuǒ) to report it and get a loss report. You will need this to get a replacement from your embassy.' },
            { cn: '我被偷了。', pinyin: 'Wǒ bèi tōu le.', en: 'I have been robbed.' },
            { cn: '请问最近的医院在哪里？', pinyin: 'Qǐng wèn zuìjìn de yīyuàn zài nǎlǐ?', en: 'Where is the nearest hospital?' },
            { cn: '请帮我打这个电话。', pinyin: 'Qǐng bāng wǒ dǎ zhège diànhuà.', en: 'Please help me make this call.' },
            { cn: '我需要帮助。', pinyin: 'Wǒ xūyào bāngzhù.', en: 'I need help.' }
        ]
    }
];

// Daily sentences - rotates based on date
const DAILY_SENTENCES = [
    { cn: '入乡随俗。', pinyin: 'Rù xiāng suí sú.', en: 'When in Rome, do as the Romans do.', note: 'A perfect motto for learning Chinese — embrace the culture!' },
    { cn: '慢慢来，不着急。', pinyin: 'Mànman lái, bù zháojí.', en: 'Take your time, no rush.', note: 'A common phrase you will hear in China. Reflects the patient, unhurried side of Chinese culture.' },
    { cn: '有缘千里来相会。', pinyin: 'Yǒu yuán qiānlǐ lái xiānghuì.', en: 'Destiny brings people together from a thousand miles away.', note: 'A poetic saying about fate and connection — perfect for making new friends in China.' },
    { cn: '吃了吗？', pinyin: 'Chī le ma?', en: 'Have you eaten?', note: 'The most common informal greeting in Chinese — like "How are you?" It is NOT an invitation to eat together.' },
    { cn: '没有关系。', pinyin: 'Méiyǒu guānxi.', en: 'It does not matter. / No problem.', note: 'One of the most useful phrases. Use it to say "no worries" or "it is okay."' },
    { cn: '慢慢来。', pinyin: 'Mànman lái.', en: 'Take it easy. / Take your time.', note: 'A reassuring phrase used constantly in daily life.' },
    { cn: '辛苦了。', pinyin: 'Xīnkǔ le.', en: 'You have worked hard. / Thanks for your effort.', note: 'A uniquely Chinese expression of appreciation. Say it to anyone who has helped you or done a good job.' },
    { cn: '不好意思。', pinyin: 'Bù hǎoyìsi.', en: 'Excuse me. / Sorry. / I am embarrassed.', note: 'An incredibly versatile phrase. Use it to apologize, get attention, or express modesty. More common than "对不起" (duìbuqǐ) in daily life.' }
];

// Tones explanation
const TONES_INFO = {
    title: 'The Four Tones of Mandarin',
    description: 'Mandarin Chinese has four tones. The same syllable means completely different things depending on the tone. This is what makes Chinese sound "sing-songy" to foreign ears.',
    tones: [
        { tone: '1st Tone', mark: 'ā', pitch: 'High and flat', example: 'mā (妈) - mother', tip: 'Keep your voice high and steady, like holding a musical note.' },
        { tone: '2nd Tone', mark: 'á', pitch: 'Rising', example: 'má (麻) - hemp', tip: 'Like asking a question — your voice goes up, like saying "huh?"' },
        { tone: '3rd Tone', mark: 'ǎ', pitch: 'Dip then rise', example: 'mǎ (马) - horse', tip: 'Your voice drops down and then comes back up. Like a gentle valley.' },
        { tone: '4th Tone', mark: 'à', pitch: 'Falling sharply', example: 'mà (骂) - to scold', tip: 'Sharp and decisive, like giving a command. Your voice drops quickly.' },
        { tone: 'Neutral', mark: 'a', pitch: 'Light and short', example: 'ma (吗) - question particle', tip: 'Short and soft, no emphasis. Often used at the end of questions.' }
    ]
};

/**
 * ===== 今日中国 · China Today =====
 * 
 * Community feed where Chinese people nationwide upload photos of their hometowns.
 * AI auto-generates trendy Chinese captions (with English translations),
 * so foreigners see the REAL, LATEST China — its fashion, culture, and development.
 * 
 * All captions use authentic Chinese internet slang (网络流行语) that young
 * Chinese people actually use in 2025-2026.
 */

const CHINA_FEED = [
    {
        id: 'f1',
        city: '上海',
        cityEn: 'Shanghai',
        emoji: '🌃',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        cn: '魔都的夜景也太上头了！',
        pinyin: 'Módū de yèjǐng yě tài shàngtóu le!',
        en: "Shanghai's night view is so addictive!",
        slang: '上头 (shàngtóu) = addictive, can\'t get enough of it',
        tag: 'city',
        author: '小美',
        authorFlag: '🇨🇳',
        kind: 'home',
        lang: 'zh',
        time: '2 hours ago',
        likes: 1284
    },
    {
        id: 'f2',
        city: '成都',
        cityEn: 'Chengdu',
        emoji: '🐼',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        cn: '熊猫基地yyds！花花真的太可爱了！',
        pinyin: 'Xióngmāo jīdì yyds! Huāhuā zhēn de tài kě\'ài le!',
        en: 'The panda base is the GOAT! Hua Hua is SO adorable!',
        slang: 'yyds = 永远的神 (yǒngyuǎn de shén) = GOAT / forever the best',
        tag: 'culture',
        author: '阿伟',
        time: '4 hours ago',
        likes: 3562
    },
    {
        id: 'f3',
        city: '重庆',
        cityEn: 'Chongqing',
        emoji: '🏔️',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        cn: '8D魔幻城市不是吹的，导航都迷路了！',
        pinyin: '8D móhuàn chéngshì bùshì chuī de, dǎoháng dōu mílù le!',
        en: "The 8D magic city is no joke — even GPS gets lost here!",
        slang: '魔幻 (móhuàn) = magical/fantastic; 不是吹的 (bùshì chuī de) = not exaggerating',
        tag: 'city',
        author: '山城小哥',
        time: '6 hours ago',
        likes: 2891
    },
    {
        id: 'f4',
        city: '哈尔滨',
        cityEn: 'Harbin',
        emoji: '❄️',
        gradient: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
        cn: '尔滨的冰雪大世界也太出片了吧！',
        pinyin: 'Ěrbīn de bīngxuě dà shìjiè yě tài chū piàn le ba!',
        en: "Harbin's Ice and Snow World is SO photogenic!",
        slang: '出片 (chū piàn) = photogenic, produces great photos; 尔滨 = trendy nickname for Harbin',
        tag: 'travel',
        author: '冰城姑娘',
        time: '8 hours ago',
        likes: 4127
    },
    {
        id: 'f5',
        city: '西安',
        cityEn: 'Xi\'an',
        emoji: '🏮',
        gradient: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
        cn: '大唐不夜城绝绝子！穿汉服穿越回唐朝！',
        pinyin: 'Dàtáng bù yèchéng jué jué zǐ! Chuān hànfú chuānyuè huí Tángcháo!',
        en: "Tang Dynasty Never-Sleep City is amazing! Wear hanfu and travel back to the Tang Dynasty!",
        slang: '绝绝子 (jué jué zǐ) = absolutely amazing; 汉服 (hànfú) = traditional Han Chinese clothing',
        tag: 'culture',
        author: '长安少年',
        time: '12 hours ago',
        likes: 5634
    },
    {
        id: 'f6',
        city: '深圳',
        cityEn: 'Shenzhen',
        emoji: '🚀',
        gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        cn: '深圳速度名不虚传！无人机外卖太酷了！',
        pinyin: 'Shēnzhèn sùdù míng bù xūchuán! Wúrénjī wàimài tài kù le!',
        en: 'Shenzhen speed lives up to its name! Drone food delivery is so cool!',
        slang: '名不虚传 (míng bù xūchuán) = lives up to its reputation; 无人机 (wúrénjī) = drone',
        tag: 'tech',
        author: '科技宅',
        time: '1 day ago',
        likes: 7823
    },
    {
        id: 'f7',
        city: '长沙',
        cityEn: 'Changsha',
        emoji: '🌶️',
        gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        cn: '长沙的夜市烟火气拉满，茶颜悦色种草了！',
        pinyin: 'Chángshā de yèshì yānhuǒqì lā mǎn, cháyán yuèsè zhòng cǎo le!',
        en: "Changsha's night markets are bursting with life, and I'm obsessed with Cha Yan Yue Se tea!",
        slang: '烟火气 (yānhuǒqì) = lively, down-to-earth atmosphere; 种草 (zhòng cǎo) = to be sold on something / must-try',
        tag: 'food',
        author: '湘妹子',
        time: '1 day ago',
        likes: 3456
    },
    {
        id: 'f8',
        city: '杭州',
        cityEn: 'Hangzhou',
        emoji: '🌿',
        gradient: 'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)',
        cn: '西湖的日落氛围感直接拉满！太治愈了！',
        pinyin: 'Xīhú de rìluò fēnwéi gǎn zhíjiē lā mǎn! Tài zhìyù le!',
        en: "West Lake sunset vibes are at MAX! So healing!",
        slang: '氛围感 (fēnwéi gǎn) = atmosphere/vibes; 治愈 (zhìyù) = healing, soothing',
        tag: 'travel',
        author: '江南水乡',
        time: '2 days ago',
        likes: 2867
    },
    {
        id: 'f9',
        city: '北京',
        cityEn: 'Beijing',
        emoji: '🏛️',
        gradient: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)',
        cn: '故宫的雪一落地，北京就成了北平！',
        pinyin: 'Gùgōng de xuě yī luòdì, Běijīng jiù chéngle Běipíng!',
        en: 'When snow falls on the Forbidden City, Beijing becomes old Peking!',
        slang: '北平 (Běipíng) = Beijing\'s old name, evoking nostalgia; this is a viral phrase every winter',
        tag: 'culture',
        author: '胡同大爷',
        time: '2 days ago',
        likes: 6892
    },
    {
        id: 'f10',
        city: '淄博',
        cityEn: 'Zibo',
        emoji: '🍢',
        gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
        cn: '淄博烧烤还在火！好客山东真的破防了！',
        pinyin: 'Zībó shāokǎo hái zài huǒ! Hàokè Shāndōng zhēn de pò fáng le!',
        en: "Zibo BBQ is still trending! Shandong hospitality is so touching!",
        slang: '破防了 (pò fáng le) = emotionally moved/touched (lit. defense broken); 好客 (hàokè) = hospitable',
        tag: 'food',
        author: '山东大汉',
        time: '3 days ago',
        likes: 4521
    },
    {
        id: 'f11',
        city: '广州',
        cityEn: 'Guangzhou',
        emoji: '🥟',
        gradient: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
        cn: '广州早茶yyds！一盅两件叹世界！',
        pinyin: 'Guǎngzhōu zǎochá yyds! Yī zhōng liǎng jiàn tàn shìjiè!',
        en: "Guangzhou morning tea is the GOAT! One pot, two dim sum — enjoy life!",
        slang: '叹世界 (tàn shìjiè) = Cantonese for enjoying life; 一盅两件 = classic morning tea combo',
        tag: 'food',
        author: '老广',
        time: '3 days ago',
        likes: 3876
    },
    {
        id: 'f12',
        city: '三亚',
        cityEn: 'Sanya',
        emoji: '🏝️',
        gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        cn: '不用出国！三亚的海也能这么蓝！天花板级别！',
        pinyin: 'Bùyòng chūguó! Sānyà de hǎi yě néng zhème lán! Tiānhuābǎn jíbié!',
        en: "No need to go abroad! Sanya's ocean is THIS blue! Ceiling-tier!",
        slang: '天花板 (tiānhuābǎn) = ceiling, meaning the absolute best',
        tag: 'travel',
        author: '海岛控',
        time: '4 days ago',
        likes: 5234
    },
    // ===== 海外用户互动（话题讨论 / 来华求助）=====
    {
        id: 'f13',
        city: '成都',
        cityEn: 'Chengdu',
        emoji: '🍲',
        gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        cn: '我超爱川菜，想问问成都朋友：最地道的苍蝇馆子都在哪条街？下次来蓉出差一定要去打卡！',
        pinyin: 'Wǒ chāo ài chuāncài, xiǎng wènwen Chéngdū péngyou: zuì dìdào de cāngyíng guǎnzi dōu zài nǎ tiáo jiē? Xià cì lái Róng chūchāi yīdìng yào qù dǎkǎ!',
        en: 'I LOVE Sichuan food! Chengdu friends, which street has the most authentic local restaurants (苍蝇馆子)? I must visit them on my next business trip!',
        slang: '苍蝇馆子 (cāngyíng guǎnzi) = humble but delicious local eatery',
        tag: 'food',
        author: 'Marco Rossi',
        authorFlag: '🇮🇹',
        kind: 'talk',
        lang: 'zh',
        time: '1 hour ago',
        likes: 156
    },
    {
        id: 'f14',
        city: '上海',
        cityEn: 'Shanghai',
        emoji: '💼',
        gradient: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
        cn: '我下个月去上海参加进博会，第一次来中国。求问：外籍人士手机支付怎么开通？有没有推荐的商务翻译 app？',
        pinyin: 'Wǒ xià gè yuè qù Shànghǎi cānjiā Jìnbóhuì, dì yī cì lái Zhōngguó. Qiú wèn: wàijí rénshì shǒujī zhīfù zěnme kāitōng? Yǒu méi yǒu tuījiàn de shāngwù fānyì app?',
        en: 'I am coming to Shanghai next month for the CIIE — my first time in China! Any advice on how foreigners can set up mobile payments? And which business translation app do you recommend?',
        slang: '进博会 (Jìnbóhuì) = China International Import Expo (CIIE)',
        tag: 'tech',
        author: 'Sarah Chen',
        authorFlag: '🇨🇦',
        kind: 'ask',
        lang: 'zh',
        time: '3 hours ago',
        likes: 98
    },
    {
        id: 'f15',
        city: '西安',
        cityEn: "Xi'an",
        emoji: '🏯',
        gradient: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
        cn: '听说大唐不夜城晚上超美。外国游客去需要提前预约吗？穿汉服体验哪家店比较靠谱？',
        pinyin: 'Tīngshuō Dàtáng Bùyèchéng wǎnshang chāo měi. Wàiguó yóukè qù xūyào tíqián yùyuē ma? Chuān hànfú tǐyàn nǎ jiā diàn bǐjiào kàopǔ?',
        en: 'I heard Datang Everbright City is gorgeous at night. Do foreign visitors need to book in advance? Which hanfu rental shop is reliable?',
        slang: '汉服 (hànfú) = traditional Chinese hanfu clothing',
        tag: 'culture',
        author: 'Kenji Sato',
        authorFlag: '🇯🇵',
        kind: 'ask',
        lang: 'en',
        time: '6 hours ago',
        likes: 203
    },
    {
        id: 'f16',
        city: '广州',
        cityEn: 'Guangzhou',
        emoji: '🐲',
        gradient: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
        cn: '我在做中国非遗的毕业设计，超想深入了解粤剧。广州有哪些地方可以看现场表演？想跟本地戏迷交流～',
        pinyin: 'Wǒ zài zuò Zhōngguó fēiyí de bìyè shèjì, chāo xiǎng shēnrù liǎojiě Yuèjù. Guǎngzhōu yǒu nǎxiē dìfāng kěyǐ kàn xiànchǎng biǎoyǎn? Xiǎng gēn běndì xìmí jiāoliú~',
        en: 'I am doing my graduation project on Chinese intangible heritage and really want to learn about Cantonese Opera. Where in Guangzhou can I watch live performances and meet local opera fans?',
        slang: '非遗 (fēiyí) = intangible cultural heritage',
        tag: 'culture',
        author: 'Amélie Laurent',
        authorFlag: '🇫🇷',
        kind: 'talk',
        lang: 'en',
        time: '8 hours ago',
        likes: 167
    }
];

// AI caption templates for the upload feature
// Simulates AI generating trendy captions from a photo
const AI_CAPTION_TEMPLATES = [
    { city: '通用', cn: '这里也太出片了吧！随手一拍就是大片！', pinyin: 'Zhèlǐ yě tài chū piàn le ba! Suíshǒu yī pāi jiùshì dàpiàn!', en: 'This place is SO photogenic! Every casual shot looks like a masterpiece!', slang: '出片 (chū piàn) = photogenic' },
    { city: '通用', cn: '宝藏城市！真的被种草了！', pinyin: 'Bǎozàng chéngshì! Zhēn de bèi zhòng cǎo le!', en: 'Hidden gem city! I am totally sold on this place!', slang: '种草 (zhòng cǎo) = to be convinced to visit/buy' },
    { city: '通用', cn: '这里的氛围感直接拉满！太治愈了！', pinyin: 'Zhèlǐ de fēnwéi gǎn zhíjiē lā mǎn! Tài zhìyù le!', en: 'The vibes here are at MAX level! So healing!', slang: '氛围感 (fēnwéi gǎn) = atmosphere; 治愈 (zhìyù) = healing' },
    { city: '通用', cn: 'City不City啊？这也太好逛了吧！', pinyin: 'City bù City a? Zhè yě tài hǎo guàng le ba!', en: 'Is it City or not? This place is so fun to explore!', slang: 'City不City = viral 2024 phrase meaning "is it stylish/urban"' },
    { city: '通用', cn: '随手一拍都是壁纸！这个视角绝了！', pinyin: 'Suíshǒu yī pāi dōu shì bìzhǐ! Zhège shìjiǎo jué le!', en: 'Every shot is wallpaper material! This view is incredible!', slang: '绝了 (jué le) = amazing, incredible' },
    { city: '通用', cn: '来了一次还想来！这也太上头了！', pinyin: 'Lái le yī cì hái xiǎng lái! Zhè yě tài shàngtóu le!', en: 'Came once and want to come back! This place is so addictive!', slang: '上头 (shàngtóu) = addictive' },
    { city: '通用', cn: '这就是中国速度！变化也太快了吧！', pinyin: 'Zhè jiùshì Zhōngguó sùdù! Biànhuà yě tài kuài le ba!', en: 'This is China speed! The changes are so fast!', slang: '中国速度 = China speed, referring to rapid development' },
    { city: '通用', cn: '人间烟火气，最抚凡人心！', pinyin: 'Rénjiān yānhuǒ qì, zuì fǔ fánrén xīn!', en: 'The everyday bustle of life soothes the ordinary soul.', slang: '烟火气 (yānhuǒqì) = lively everyday atmosphere; a beloved viral quote' }
];

// Cities for the upload selector
const CHINA_CITIES = [
    '北京', '上海', '广州', '深圳', '成都', '重庆', '杭州', '西安',
    '武汉', '长沙', '南京', '苏州', '天津', '哈尔滨', '沈阳', '青岛',
    '厦门', '昆明', '大连', '三亚', '拉萨', '乌鲁木齐', '呼和浩特',
    '义乌', '郑州', '景德镇', '其他'
];

// ===== City Explorer 城市探索 =====
// Featured cities for foreign users: explore culture, industry, history & local phrases.
const CITY_FEATURES = [
    {
        id: 'beijing',
        cn: '北京', pinyin: 'Běijīng', en: 'Beijing', emoji: '🏮',
        region: 'North', tagline: 'The ancient capital where imperial history meets modern China.',
        gradient: ['#7A2E2E', '#4A1A1A'],
        facts: ['Capital city', '3,000+ years of history', 'Home of Peking Opera'],
        story: 'Beijing has been China\'s capital for most of the past 700 years. Walk through the Forbidden City where 24 emperors ruled, then stand atop the Great Wall at Mutianyu. In the hutong alleyways, you\'ll find locals playing chess, sipping tea, and flying kites — the old Beijing way of life, unchanged for centuries.',
        industry: ['Government & diplomacy', 'Culture & media', 'Tech (Zhongguancun)', 'Education'],
        highlights: [
            { name: 'The Forbidden City 故宫', desc: 'World\'s largest palace complex, 9,999 rooms' },
            { name: 'The Great Wall 长城', desc: 'Take the cable car up at Mutianyu, toboggan down' },
            { name: 'Hutongs 胡同', desc: 'Ancient alleyways — take a rickshaw tour' },
            { name: 'Peking Duck 北京烤鸭', desc: 'Crispy skin, thin pancakes — a must-try' }
        ],
        slang: { term: '老北京 (lǎo Běijīng)', meaning: '"Old Beijing" — a local born and raised in the hutongs, known for warm hospitality and straight talk.' },
        phrases: [
            { cn: '请问故宫怎么走？', pinyin: 'Qǐngwèn Gùgōng zěnme zǒu?', en: 'Excuse me, how do I get to the Forbidden City?' },
            { cn: '来一只烤鸭，谢谢！', pinyin: 'Lái yī zhī kǎoyā, xièxie!', en: 'One Peking duck, please!' },
            { cn: '我想去长城一日游。', pinyin: 'Wǒ xiǎng qù Chángchéng yīrì yóu.', en: 'I\'d like to do a one-day Great Wall tour.' },
            { cn: '这里的胡同真有意思！', pinyin: 'Zhèlǐ de hútòng zhēn yǒu yìsi!', en: 'These hutong alleys are really interesting!' }
        ]
    },
    {
        id: 'shanghai',
        cn: '上海', pinyin: 'Shànghǎi', en: 'Shanghai', emoji: '🌃',
        region: 'East', tagline: 'The futuristic port city where East meets West.',
        gradient: ['#2B3A67', '#161F3D'],
        facts: ['Biggest city in China', 'World\'s busiest port', 'Skyscraper capital'],
        story: 'Shanghai grew from a fishing village into a global metropolis in just 170 years. The Bund\'s colonial buildings face the futuristic towers of Pudong across the Huangpu River — one skyline shows 1920s glamour, the other shows 2030. Ride the 468km/h Maglev train from the airport and you\'ll understand why people say "Shanghai speed" means the future arriving early.',
        industry: ['Finance', 'Trade & shipping', 'Fashion & design', 'AI & biotech'],
        highlights: [
            { name: 'The Bund 外滩', desc: 'Colonial-era waterfront, stunning night views' },
            { name: 'Yu Garden 豫园', desc: 'Ming dynasty garden with rockeries and pavilions' },
            { name: 'Shanghai Tower 上海中心', desc: '632m — world\'s 3rd tallest building' },
            { name: 'Xiaolongbao 小笼包', desc: 'Soup dumplings born in Shanghai — bite, sip, then eat' }
        ],
        slang: { term: '洋气 (yángqì)', meaning: 'Literally "Western-style air" — Shanghainese slang for stylish, chic, fashionable.' },
        phrases: [
            { cn: '外滩晚上几点开灯？', pinyin: 'Wàitān wǎnshang jǐ diǎn kāidēng?', en: 'What time do the Bund lights turn on at night?' },
            { cn: '我要一笼小笼包。', pinyin: 'Wǒ yào yī lóng xiǎolóngbāo.', en: 'One basket of soup dumplings, please.' },
            { cn: '磁悬浮列车在哪里坐？', pinyin: 'Cíxuánfú lièchē zài nǎlǐ zuò?', en: 'Where do I take the Maglev train?' },
            { cn: '这座城市太现代了！', pinyin: 'Zhè zuò chéngshì tài xiàndài le!', en: 'This city is so modern!' }
        ]
    },
    {
        id: 'xian',
        cn: '西安', pinyin: 'Xī\'ān', en: 'Xi\'an', emoji: '🗿',
        region: 'Northwest', tagline: 'Where the Silk Road began and Terracotta Warriors stand guard.',
        gradient: ['#8A6D3B', '#54401F'],
        facts: ['13 dynasties\' capital', 'Start of the Silk Road', '8,000 Terracotta Warriors'],
        story: 'Xi\'an was the capital of China for over 1,000 years — longer than any other city. Emperor Qin Shi Huang buried an entire army of terracotta warriors here in 210 BC, each with a unique face. At night, the Tang Dynasty theme streets glow with lanterns and locals dress in hanfu robes, reviving the golden age when camel caravans departed for Rome.',
        industry: ['Aerospace', 'Tourism & culture', 'Semiconductors', 'Higher education'],
        highlights: [
            { name: 'Terracotta Army 兵马俑', desc: 'The 8th wonder of the world, 2,200 years old' },
            { name: 'Ancient City Wall 城墙', desc: 'Rent a bike and ride 14km on top of the wall' },
            { name: 'Muslim Quarter 回民街', desc: 'Food paradise: lamb skewers, biangbiang noodles' },
            { name: 'Big Wild Goose Pagoda 大雁塔', desc: 'Tang dynasty Buddhist pagoda & night fountain show' }
        ],
        slang: { term: '嫽扎咧 (liáo zhā liē)', meaning: 'Shaanxi dialect for "awesome!" — the most satisfying local word you can say after eating noodles.' },
        phrases: [
            { cn: '兵马俑的门票多少钱？', pinyin: 'Bīngmǎyǒng de ménpiào duōshao qián?', en: 'How much is a ticket to the Terracotta Warriors?' },
            { cn: '来一碗biangbiang面！', pinyin: 'Lái yī wǎn biángbiáng miàn!', en: 'One bowl of biangbiang noodles, please!' },
            { cn: '城墙可以骑自行车吗？', pinyin: 'Chéngqiáng kěyǐ qí zìxíngchē ma?', en: 'Can I ride a bike on the city wall?' },
            { cn: '这里的历史太悠久了。', pinyin: 'Zhèlǐ de lìshǐ tài yōujiǔ le.', en: 'The history here goes back so far.' }
        ]
    },
    {
        id: 'chengdu',
        cn: '成都', pinyin: 'Chéngdū', en: 'Chengdu', emoji: '🐼',
        region: 'Southwest', tagline: 'Panda capital and China\'s most relaxed city.',
        gradient: ['#3E7C59', '#27523B'],
        facts: ['Home of giant pandas', 'UNESCO City of Gastronomy', '2,300 years old'],
        story: 'Chengdu\'s motto is "a city you come to and never want to leave" (来了就不想走). Locals spend hours in teahouses playing mahjong, and the pace of life is famously slow. But the food is seriously spicy — this is the birthplace of mapo tofu and hotpot. Visit the Panda Base at 8am to see baby pandas at breakfast, their most active hour.',
        industry: ['Gaming & animation', 'Electronics manufacturing', 'Panda conservation', 'New energy vehicles'],
        highlights: [
            { name: 'Chengdu Panda Base 大熊猫基地', desc: 'See 80+ pandas; go before 9am' },
            { name: 'Kuanzhai Alleys 宽窄巷子', desc: 'Qing dynasty streets, teahouses & ear-cleaning masters' },
            { name: 'Sichuan Hotpot 四川火锅', desc: 'Numb-and-spicy broth; order "yuanyang" for half-mild' },
            { name: 'Jinli Street 锦里', desc: 'Lantern-lit night street full of snacks' }
        ],
        slang: { term: '巴适 (bāshì)', meaning: 'Sichuan dialect for "comfortable, great, just right" — the spirit of Chengdu life.' },
        phrases: [
            { cn: '我想看大熊猫。', pinyin: 'Wǒ xiǎng kàn dàxióngmāo.', en: 'I want to see the giant pandas.' },
            { cn: '微辣可以吗？我怕辣。', pinyin: 'Wēi là kěyǐ ma? Wǒ pà là.', en: 'Is mild spice okay? I\'m afraid of spicy food.' },
            { cn: '这家茶馆可以坐一下午吗？', pinyin: 'Zhè jiā cháguǎn kěyǐ zuò yī xiàwǔ ma?', en: 'Can I sit in this teahouse all afternoon?' },
            { cn: '成都生活真巴适！', pinyin: 'Chéngdū shēnghuó zhēn bāshì!', en: 'Life in Chengdu is so comfortable!' }
        ]
    },
    {
        id: 'chongqing',
        cn: '重庆', pinyin: 'Chóngqìng', en: 'Chongqing', emoji: '🚠',
        region: 'Southwest', tagline: 'The 8D cyberpunk mountain city built on cliffs.',
        gradient: ['#4A4E69', '#2B2E45'],
        facts: ['Largest municipality', 'Cyberpunk night views', 'Hotpot birthplace rival'],
        story: 'Chongqing is built vertically on mountains where two rivers meet — roads loop over buildings, trains pass THROUGH apartment towers, and the "1st floor" of one building is the "22nd floor" of another. Locals call it the "8D city." At night, hundreds of skyscrapers light up along the river in a scene that looks like a sci-fi movie.',
        industry: ['Automobiles & motorcycles', 'Big data centers', 'Hotpot restaurant chains', 'Logistics'],
        highlights: [
            { name: 'Hongya Cave 洪崖洞', desc: 'Stilt-house complex lit up like the movie Spirited Away' },
            { name: 'Yangtze Cableway 长江索道', desc: 'Cable car ride across the river, best city views' },
            { name: 'Liziba Station 李子坝', desc: 'Watch the monotonail train pass through a building' },
            { name: 'Chongqing Hotpot 重庆火锅', desc: 'The original — fiery red broth, born from dock workers' }
        ],
        slang: { term: '雄起 (xióngqǐ)', meaning: 'Chongqing cheer meaning "rise up, go for it!" — shouted at football matches and hotpot tables alike.' },
        phrases: [
            { cn: '洪崖洞晚上几点亮灯？', pinyin: 'Hóngyádòng wǎnshang jǐ diǎn liàngdēng?', en: 'What time does Hongya Cave light up at night?' },
            { cn: '坐索道要排队吗？', pinyin: 'Zuò suǒdào yào páiduì ma?', en: 'Is there a queue for the cableway?' },
            { cn: '这城市像科幻电影！', pinyin: 'Zhè chéngshì xiàng kēhuàn diànyǐng!', en: 'This city looks like a sci-fi movie!' },
            { cn: '重庆夜景太震撼了。', pinyin: 'Chóngqìng yèjǐng tài zhènhàn le.', en: 'Chongqing\'s night view is stunning.' }
        ]
    },
    {
        id: 'hangzhou',
        cn: '杭州', pinyin: 'Hángzhōu', en: 'Hangzhou', emoji: '🐉',
        region: 'East', tagline: 'Paradise on earth — West Lake, tea fields, and e-commerce empire.',
        gradient: ['#4A7C7C', '#2C5252'],
        facts: ['"Heaven on earth"', 'Longjing tea home', 'Alibaba HQ'],
        story: 'An old Chinese saying goes: "Above is heaven, below are Suzhou and Hangzhou." Marco Polo called it "the most beautiful city in the world." Poets wrote verses about West Lake for a thousand years, yet today Hangzhou is also home to Alibaba and hosts China\'s tech elite. Sip Longjing tea by the lake in the morning, visit a unicorn startup in the afternoon.',
        industry: ['E-commerce & fintech', 'Cloud computing', 'Tea & silk', 'Digital economy'],
        highlights: [
            { name: 'West Lake 西湖', desc: 'Bike or boat around — see the "10 classic scenes"' },
            { name: 'Longjing Tea Fields 龙井茶园', desc: 'Pick tea leaves in spring, learn from tea farmers' },
            { name: 'Lingyin Temple 灵隐寺', desc: '1,700-year-old Buddhist temple in the forest' },
            { name: 'Hefang Street 河坊街', desc: 'Song dynasty style street, try "Dongpo pork"' }
        ],
        slang: { term: '腔调 (qiāngdiào)', meaning: 'Shanghai-Hangzhou area slang for "style, class, attitude" — used to praise someone who does things with flair.' },
        phrases: [
            { cn: '西湖可以坐船吗？', pinyin: 'Xīhú kěyǐ zuò chuán ma?', en: 'Can I take a boat on West Lake?' },
            { cn: '我想买点龙井茶。', pinyin: 'Wǒ xiǎng mǎi diǎn Lóngjǐng chá.', en: 'I\'d like to buy some Longjing tea.' },
            { cn: '杭州真像天堂！', pinyin: 'Hángzhōu zhēn xiàng tiāntáng!', en: 'Hangzhou really is like paradise!' },
            { cn: '附近有茶园吗？', pinyin: 'Fùjìn yǒu cháyún ma?', en: 'Are there tea fields nearby?' }
        ]
    },
    {
        id: 'suzhou',
        cn: '苏州', pinyin: 'Sūzhōu', en: 'Suzhou', emoji: '🏯',
        region: 'East', tagline: 'Classical gardens, silk, and Venice-like canals.',
        gradient: ['#6B8E9F', '#44626F'],
        facts: ['2,500 years old', 'UNESCO gardens', 'Silk capital'],
        story: 'Suzhou was where ancient Chinese scholars retired to build their dream gardens — miniature landscapes of rocks, water and pavilions designed like 3D poems. The city is also crisscrossed by canals older than Venice\'s. Today it makes a third of the world\'s laptops and iPads while preserving its old town, where you can still hear pingtan storytelling sung in soft Suzhou dialect.',
        industry: ['Advanced manufacturing', 'Silk & embroidery', 'Biopharmaceuticals', 'Nanotech'],
        highlights: [
            { name: 'Humble Administrator\'s Garden 拙政园', desc: 'China\'s most famous classical garden' },
            { name: 'Tiger Hill 虎丘', desc: 'A 1,000-year-old leaning pagoda' },
            { name: 'Pingtan River Town 平江路', desc: 'Canal-side old street, sip tea & listen to pingtan' },
            { name: 'Suzhou Silk Museum 苏州丝绸博物馆', desc: 'See how silk was spun for emperors' }
        ],
        slang: { term: '糯 (nuò)', meaning: 'Used by locals to describe the soft, sticky-sweet Suzhou dialect — "说话真糯" means "she talks so gently."' },
        phrases: [
            { cn: '拙政园的票在哪里买？', pinyin: 'Zhuōzhèngyuán de piào zài nǎlǐ mǎi?', en: 'Where can I buy tickets for the garden?' },
            { cn: '我想听评弹。', pinyin: 'Wǒ xiǎng tīng píngtán.', en: 'I\'d like to listen to pingtan storytelling.' },
            { cn: '苏州话真好听。', pinyin: 'Sūzhōu huà zhēn hǎotīng.', en: 'The Suzhou dialect sounds so beautiful.' },
            { cn: '这条运河有多少年历史？', pinyin: 'Zhè tiáo yùnhé yǒu duōshao nián lìshǐ?', en: 'How old is this canal?' }
        ]
    },
    {
        id: 'guangzhou',
        cn: '广州', pinyin: 'Guǎngzhōu', en: 'Guangzhou', emoji: '🥟',
        region: 'South', tagline: 'Eat in Guangzhou — 1,000 years of trade and dim sum.',
        gradient: ['#C98A3D', '#8F5F26'],
        facts: ['Canton Fair since 1957', 'Oldest trade port', 'Dim sum capital'],
        story: '"Born in Suzhou, eat in Guangzhou, die in Liuzhou" says the old proverb. Guangzhou has been China\'s trading gateway for over a thousand years — Arab and Persian merchants docked here in the Tang dynasty. Today the Canton Fair draws 200,000+ foreign buyers twice a year. Locals "yum cha" (drink tea) for hours, ordering dim sum from trolleys.',
        industry: ['Foreign trade (Canton Fair)', 'Automobiles', 'E-commerce cross-border', 'Cantonese cuisine'],
        highlights: [
            { name: 'Canton Tower 广州塔', desc: '600m "Slim Waist" tower with sky drop ride' },
            { name: 'Shamian Island 沙面岛', desc: 'European colonial architecture by the river' },
            { name: 'Dim Sum 早茶', desc: 'Shrimp dumplings, rice rolls, egg tarts — all day long' },
            { name: 'Chen Clan Academy 陈家祠', desc: 'The most ornate Lingnan-style building' }
        ],
        slang: { term: '饮茶 (yám chà)', meaning: 'Cantonese for "drink tea" — a whole lifestyle: morning dim sum with family, slow and loud and happy.' },
        phrases: [
            { cn: '广交会怎么注册？', pinyin: 'Guǎngjiāohuì zěnme zhùcè?', en: 'How do I register for the Canton Fair?' },
            { cn: '早茶有什么推荐？', pinyin: 'Zǎochá yǒu shénme tuījiàn?', en: 'What dim sum do you recommend?' },
            { cn: '请给我一壶普洱茶。', pinyin: 'Qǐng gěi wǒ yī hú pǔ\'ěr chá.', en: 'A pot of Pu\'er tea, please.' },
            { cn: '广州美食名不虚传！', pinyin: 'Guǎngzhōu měishí míngbùxūchuán!', en: 'Guangzhou food lives up to its fame!' }
        ]
    },
    {
        id: 'shenzhen',
        cn: '深圳', pinyin: 'Shēnzhèn', en: 'Shenzhen', emoji: '🚀',
        region: 'South', tagline: 'The overnight city — from fishing village to tech superpower.',
        gradient: ['#3D6B99', '#22436A'],
        facts: ['"Silicon Valley of China"', 'Average age 32', 'Drones & EVs HQ'],
        story: 'In 1980 Shenzhen was a fishing town of 30,000 people. Today it\'s a megacity of 17 million and the hardware capital of the world — your phone, your drone (DJI), and millions of electric cars (BYD) were born here. Locals say "Shenzhen speed" (深圳速度) — the city truly believes anything is possible if you build it fast enough.',
        industry: ['Hardware & electronics', 'Drones (DJI)', 'Electric vehicles (BYD)', 'Telecom (Huawei, Tencent)'],
        highlights: [
            { name: 'Huaqiangbei 华强北', desc: 'The world\'s biggest electronics market — everything, cheap' },
            { name: 'Dameisha Beach 大梅沙', desc: 'Beach day in a tech city? Yes.' },
            { name: 'OCT-LOFT 华侨城', desc: 'Art district in renovated factories' },
            { name: 'Ping An Tower 平安金融中心', desc: '600m tower with the fastest elevators' }
        ],
        slang: { term: '来了就是深圳人 (láile jiùshì Shēnzhènrén)', meaning: '"Once you arrive, you\'re a Shenzhener" — the city\'s famous welcome to every newcomer.' },
        phrases: [
            { cn: '华强北怎么走？', pinyin: 'Huáqiángběi zěnme zǒu?', en: 'How do I get to Huaqiangbei electronics market?' },
            { cn: '这里可以买到无人机配件吗？', pinyin: 'Zhèlǐ kěyǐ mǎidào wúrénjī pèijiàn ma?', en: 'Can I buy drone parts here?' },
            { cn: '深圳速度真名不虚传！', pinyin: 'Shēnzhèn sùdù zhēn míngbùxūchuán!', en: '"Shenzhen speed" really lives up to its name!' },
            { cn: '我想参观科技公司。', pinyin: 'Wǒ xiǎng cānguān kējì gōngsī.', en: 'I\'d like to visit a tech company.' }
        ]
    },
    {
        id: 'harbin',
        cn: '哈尔滨', pinyin: 'Hā\'ěrbīn', en: 'Harbin', emoji: '❄️',
        region: 'Northeast', tagline: 'Ice city with a Russian soul.',
        gradient: ['#6E93B5', '#41618A'],
        facts: ['-30°C winters', 'Russian architecture', 'Ice & Snow Festival'],
        story: 'Harbin was built by Russian railway engineers in 1900, and it still feels half-European: Orthodox churches with onion domes, Russian bakeries, and locals drinking kvass. Every winter the city builds entire castles out of ice blocks from the Songhua River, lit from within by LEDs. The 2025 Asian Winter Games put this ice city back on the world map.',
        industry: ['Ice & snow tourism', 'Aerospace', 'Pharmaceuticals', 'Heavy equipment'],
        highlights: [
            { name: 'Ice & Snow World 冰雪大世界', desc: 'Ice castles, slides, ferris wheel — dress like an astronaut' },
            { name: 'Saint Sophia Cathedral 圣索菲亚教堂', desc: 'Byzantine beauty, now a photography museum' },
            { name: 'Central Street 中央大街', desc: 'Cobblestone street, eat Modern ice cream in -20°C' },
            { name: 'Siberian Tiger Park 东北虎林园', desc: 'See the world\'s largest cats from a safari bus' }
        ],
        slang: { term: '老铁 (lǎotiě)', meaning: 'Northeast slang for "close buddy, bro" — born on live-stream platforms, now used nationwide.' },
        phrases: [
            { cn: '冰雪大世界几点开门？', pinyin: 'Bīngxuě dàshìjiè jǐ diǎn kāimén?', en: 'What time does Ice and Snow World open?' },
            { cn: '今天零下多少度？', pinyin: 'Jīntiān língxià duōshao dù?', en: 'How many degrees below zero is it today?' },
            { cn: '太冷了，我的头发结冰了！', pinyin: 'Tài lěng le, wǒ de tóufa jiébīng le!', en: 'It\'s so cold my hair froze!' },
            { cn: '东北人真热情！', pinyin: 'Dōngběirén zhēn rèqíng!', en: 'Northeasterners are so warm and friendly!' }
        ]
    },
    {
        id: 'lasa',
        cn: '拉萨', pinyin: 'Lāsà', en: 'Lhasa', emoji: '🏔️',
        region: 'Tibet', tagline: 'The rooftop of the world — 3,650m above the sea.',
        gradient: ['#C9922E', '#8A6218'],
        facts: ['Potala Palace', '3,650m altitude', 'Sunshine city'],
        story: 'Lhasa, the heart of Tibet, means "place of the gods." Pilgrims prostrate themselves for months to reach the Jokhang Temple, circling it clockwise with prayer wheels spinning. The red-and-white Potala Palace, former home of the Dalai Lamas, rises 13 stories above the city. Go slow, drink butter tea, and let the altitude teach you patience.',
        industry: ['Tourism', 'Tibetan handicrafts', 'Clean energy (solar)', 'Highland agriculture'],
        highlights: [
            { name: 'Potala Palace 布达拉宫', desc: 'Book tickets in advance; 1-hour visit limit protects it' },
            { name: 'Jokhang Temple 大昭寺', desc: 'Holiest temple — join the pilgrims on Barkhor circuit' },
            { name: 'Barkhor Street 八廓街', desc: 'Prayer-wheel circuit lined with shops and incense' },
            { name: 'Butter Tea 酥油茶', desc: 'Salty, warming — the local energy drink at altitude' }
        ],
        slang: { term: '扎西德勒 (zhāxī délē)', meaning: 'Tibetan for "good luck and blessings" — the greeting you\'ll hear and use everywhere in Lhasa.' },
        phrases: [
            { cn: '扎西德勒！', pinyin: 'Zhāxī délē!', en: 'Tashi Delek! (Blessings and good luck!)' },
            { cn: '布达拉宫的票怎么预约？', pinyin: 'Bùdálāgōng de piào zěnme yùyuē?', en: 'How do I book Potala Palace tickets?' },
            { cn: '我有点高原反应。', pinyin: 'Wǒ yǒudiǎn gāoyuán fǎnyìng.', en: 'I have a bit of altitude sickness.' },
            { cn: '这里的天真蓝！', pinyin: 'Zhèlǐ de tiān zhēn lán!', en: 'The sky here is so blue!' }
        ]
    },
    {
        id: 'changsha',
        cn: '长沙', pinyin: 'Chángshā', en: 'Changsha', emoji: '🍢',
        region: 'Central', tagline: 'The night-owl city that never sleeps — or stops eating.',
        gradient: ['#B5541C', '#7E3A11'],
        facts: ['Night economy champion', 'Stinky tofu HQ', 'TV entertainment capital'],
        story: 'Changsha stays awake until 4am — streets are packed at midnight with people queueing for stinky tofu and crayfish. The city produces China\'s biggest TV shows and its young people are famous for "夜间经济" (night economy). It\'s also home to Yuelu Academy, one of the world\'s oldest universities, founded in 976 AD.',
        industry: ['Media & entertainment', 'Night economy & F&B', 'Construction machinery', 'Culture tourism'],
        highlights: [
            { name: 'Wenheyou 文和友', desc: 'A multi-story 1980s-style restaurant town, queue for hours' },
            { name: 'Orange Isle 橘子洲头', desc: 'River island with a giant young Mao statue & fireworks' },
            { name: 'Stinky Tofu 臭豆腐', desc: 'Black, crispy, smells fierce, tastes amazing' },
            { name: 'Yuelu Academy 岳麓书院', desc: '1,050-year-old academy still part of the university' }
        ],
        slang: { term: '恰饭 (qià fàn)', meaning: 'Hunan dialect for "eat a meal" — in Changsha, asking someone to 恰饭 is the highest form of friendship.' },
        phrases: [
            { cn: '臭豆腐真的不臭吗？', pinyin: 'Chòu dòufu zhēnde bù chòu ma?', en: 'Is stinky tofu really not that stinky?' },
            { cn: '长沙的夜生活几点开始？', pinyin: 'Chángshā de yèshēnghuó jǐ diǎn kāishǐ?', en: 'What time does nightlife start in Changsha?' },
            { cn: '这家店要排多久队？', pinyin: 'Zhè jiā diàn yào pái duōjiǔ duì?', en: 'How long is the queue at this restaurant?' },
            { cn: '一起去恰饭吧！', pinyin: 'Yīqǐ qù qià fàn ba!', en: 'Let\'s go eat together!' }
        ]
    },
    {
        id: 'xiamen',
        cn: '厦门', pinyin: 'Xiàmén', en: 'Xiamen', emoji: '🌊',
        region: 'Southeast', tagline: 'Island city of sea breeze, pianos and oyster omelets.',
        gradient: ['#4FA3A5', '#2F7375'],
        facts: ['"Egret Island"', 'Piano museum', 'Cleanest air of big cities'],
        story: 'Xiamen is China\'s most livable seaside city — a former treaty port turned laid-back island town. On Gulangyu, the car-free islet next door, pianos outnumber cars: nearly every family once owned one. Ride the ring-road bike path with the ocean on one side, eat oyster omelets (蚵仔煎), and drink kung fu tea as fishing boats bob in the harbor.',
        industry: ['Tourism', 'Cross-strait trade', 'Optoelectronics', 'Tea trade'],
        highlights: [
            { name: 'Gulangyu Island 鼓浪屿', desc: 'UNESCO car-free islet — pianos, villas, no cars at all' },
            { name: 'Zengcuoan 曾厝垵', desc: 'Fishing village turned foodie street' },
            { name: 'Nanputuo Temple 南普陀寺', desc: 'Working Buddhist temple with famous vegetarian food' },
            { name: 'Oyster Omelet 海蛎煎', desc: 'Fresh from the boat, crispy edges, sweet potato starch' }
        ],
        slang: { term: '哇塞 (wā sài)', meaning: 'An exclamation of amazement popularized from southern Fujian — use it when you see the Gulangyu sunset.' },
        phrases: [
            { cn: '去鼓浪屿的船票在哪买？', pinyin: 'Qù Gǔlàngyǔ de chuánpiào zài nǎ mǎi?', en: 'Where do I buy ferry tickets to Gulangyu?' },
            { cn: '环岛路可以租自行车吗？', pinyin: 'Huándǎolù kěyǐ zū zìxíngchē ma?', en: 'Can I rent bikes on the ring road?' },
            { cn: '海风真舒服！', pinyin: 'Hǎifēng zhēn shūfu!', en: 'The sea breeze feels so good!' },
            { cn: '这个日落哇塞！', pinyin: 'Zhège rìluò wā sài!', en: 'Wow, this sunset is amazing!' }
        ]
    },
    {
        id: 'kunming',
        cn: '昆明', pinyin: 'Kūnmíng', en: 'Kunming', emoji: '🌸',
        region: 'Southwest', tagline: 'City of eternal spring and 25 ethnic cultures.',
        gradient: ['#E08E45', '#A5632A'],
        facts: ['Spring all year', 'Gateway to Southeast Asia', 'Flower auction capital'],
        story: 'Kunming\'s weather is so mild that flowers bloom every month of the year — it hosts Asia\'s largest flower auction, selling 10 million stems a day. It\'s the gateway to Yunnan: snow mountains, rice terraces, and the tropical rainforest of Xishuangbanna. 25 ethnic minorities live in Yunnan, and their festivals fill the calendar year-round.',
        industry: ['Flowers & agriculture', 'Tourism gateway', 'Pharmaceuticals (traditional herbs)', 'Rare metals'],
        highlights: [
            { name: 'Dianchi Lake 滇池', desc: 'Feed seagulls in winter — they fly from Siberia' },
            { name: 'Stone Forest 石林', desc: 'Karst pinnatures like a stone maze, 270 million years old' },
            { name: 'Flower Market 斗南花市', desc: 'Roses cheaper than vegetables, literally' },
            { name: 'Cross-Bridge Rice Noodles 过桥米线', desc: 'Boiling broth, raw ingredients, DIY at your table' }
        ],
        slang: { term: '板扎 (bǎnzhā)', meaning: 'Yunnan slang for "excellent!" — say it after a bowl of crossing-the-bridge noodles.' },
        phrases: [
            { cn: '鲜花市场几点开门？', pinyin: 'Xiānhuā shìchǎng jǐ diǎn kāimén?', en: 'What time does the flower market open?' },
            { cn: '石林离市区远吗？', pinyin: 'Shílín lí shìqū yuǎn ma?', en: 'Is the Stone Forest far from downtown?' },
            { cn: '过桥米线怎么吃？', pinyin: 'Guòqiáo mǐxiàn zěnme chī?', en: 'How do I eat cross-bridge rice noodles?' },
            { cn: '昆明四季如春！', pinyin: 'Kūnmíng sìjì rú chūn!', en: 'Kunming is like spring all year round!' }
        ]
    },
    {
        id: 'nanjing',
        cn: '南京', pinyin: 'Nánjīng', en: 'Nanjing', emoji: '🏛️',
        region: 'East', tagline: 'Six-dynasty capital of plane trees and resilience.',
        gradient: ['#7A5C8A', '#513B63'],
        facts: ['6 dynasties\' capital', '2,500 years old', 'Ming dynasty first capital'],
        story: 'Nanjing ("Southern Capital") has been burned down and rebuilt many times, and its beauty carries that weight. The Ming dynasty\'s first emperor built a 35km city wall here — the longest ever. In autumn, the plane-tree avenues turn gold. The Nanjing Massacre Memorial stands as a solemn reminder of 1937, and the city\'s recovery is a story of resilience.',
        industry: ['Electronics & ICT', 'Higher education (most universities in China)', 'Smart manufacturing', 'Cultural tourism'],
        highlights: [
            { name: 'Ming Xiaoling 明孝陵', desc: 'Ming emperor\'s tomb on Sacred Way with stone animals' },
            { name: 'Confucius Temple 夫子庙', desc: 'Qinhuai river night cruise, lantern reflections' },
            { name: 'Purple Mountain 紫金山', desc: 'Hike between three historic sites in one park' },
            { name: 'Salted Duck 盐水鸭', desc: 'Nanjing\'s signature — try it with duck blood soup' }
        ],
        slang: { term: '多大事啊 (duō dàshì a)', meaning: 'Nanjing slang for "no big deal!" — the city\'s famously easygoing attitude toward life.' },
        phrases: [
            { cn: '明城墙可以走上去吗？', pinyin: 'Míng chéngqiáng kěyǐ zǒu shàngqù ma?', en: 'Can I walk on the Ming city wall?' },
            { cn: '夫子庙晚上好看吗？', pinyin: 'Fūzǐmiào wǎnshang hǎokàn ma?', en: 'Is the Confucius Temple area nice at night?' },
            { cn: '秋天的梧桐大道真美。', pinyin: 'Qiūtiān de wútóng dàdào zhēn měi.', en: 'The plane-tree avenues are so beautiful in autumn.' },
            { cn: '多大事啊，慢慢来！', pinyin: 'Duō dàshì a, mànman lái!', en: 'No big deal, take it slow!' }
        ]
    },
    {
        id: 'jingdezhen',
        cn: '景德镇', pinyin: 'Jǐngdézhèn', en: 'Jingdezhen', emoji: '🏺',
        region: 'East', tagline: 'The porcelain capital that named itself China.',
        gradient: ['#5C7A99', '#3A5273'],
        facts: ['1,000 years of porcelain', '"China" = its old name', 'Young artists\' mecca'],
        story: 'The English word "china" (porcelain) comes from this small city. For a thousand years, Jingdezhen fired the imperial porcelain for every dynasty — the blue-and-white ware that took over the world. Today thousands of young ceramic artists have moved here, opening studios in old factory buildings, making it China\'s coolest small city for creatives.',
        industry: ['Ceramics & porcelain', 'Art & design education', 'Cultural tourism', 'Creative studios'],
        highlights: [
            { name: 'Imperial Kiln Museum 御窑博物馆', desc: 'Stunning brick-vault museum over Ming imperial kilns' },
            { name: 'Taoxichuan 陶溪川', desc: 'Old ceramics factory turned art district & night market' },
            { name: 'Pottery Workshops 陶瓷体验', desc: 'Throw your own cup on the wheel, take it home' },
            { name: 'Antique Market 鬼市', desc: 'Dawn porcelain market — bring a flashlight' }
        ],
        slang: { term: '匠人精神 (jiàngrén jīngshén)', meaning: '"Craftsman spirit" — the obsession with perfection that Jingdezhen potters have practiced for 40 generations.' },
        phrases: [
            { cn: '我可以自己做一个杯子吗？', pinyin: 'Wǒ kěyǐ zìjǐ zuò yī gè bēizi ma?', en: 'Can I make a cup myself?' },
            { cn: '这个瓷器是手绘的吗？', pinyin: 'Zhège cíqì shì shǒuhuì de ma?', en: 'Is this porcelain hand-painted?' },
            { cn: '青花瓷为什么这么有名？', pinyin: 'Qīnghuācí wèishénme zhème yǒumíng?', en: 'Why is blue-and-white porcelain so famous?' },
            { cn: '这里到处都是艺术家！', pinyin: 'Zhèlǐ dàochù dōu shì yìshùjiā!', en: 'There are artists everywhere here!' }
        ]
    },
    {
        id: 'yiwu',
        cn: '义乌', pinyin: 'Yìwū', en: 'Yiwu', emoji: '🛍️',
        region: 'East', tagline: 'The world\'s supermarket — where global small-biz dreams begin.',
        gradient: ['#B0713A', '#7E4A1F'],
        facts: ['2.1 million+ varieties of goods', 'Buyers from 200+ countries', 'Christmas capital of the world'],
        story: 'Yiwu is where the world comes to shop wholesale. Its market has 75,000 stalls selling over 2.1 million kinds of goods — if you can\'t find it in Yiwu, it probably doesn\'t exist. One in every two Christmas decorations on Earth is made here. Tens of thousands of foreign buyers live in Yiwu year-round, and the city even has its own foreign-volunteer police squad. For business-minded learners, this is the ultimate classroom.',
        industry: ['Wholesale trade & small commodities', 'E-commerce & logistics', 'Christmas & festival supplies', 'Import-export services'],
        highlights: [
            { name: 'Yiwu International Trade City 义乌国际商贸城', desc: 'The world\'s largest small-commodities market — 5 districts, plan 2 days' },
            { name: 'Night Market 宾王夜市', desc: 'Where foreign buyers and locals bargain side by side' },
            { name: 'Yiwu Port 义乌港', desc: 'Watch containers leave for 200+ countries daily' },
            { name: 'Halal & foreign food street 外国人一条街', desc: 'Arab, African, Korean food — Yiwu\'s global village' }
        ],
        slang: { term: '鸡毛换糖 (jīmáo huàn táng)', meaning: '"Chicken feathers for candy" — Yiwu\'s founding spirit: traders walked villages bartering tiny goods, and built the world\'s biggest market from nothing.' },
        phrases: [
            { cn: '这个批发价是多少？', pinyin: 'Zhège pīfājià shì duōshao?', en: 'What\'s the wholesale price for this?' },
            { cn: '一千个起订可以便宜多少？', pinyin: 'Yī qiān gè qǐdìng kěyǐ piányi duōshao?', en: 'How much cheaper for an order of 1,000 or more?' },
            { cn: '可以发到我的国家吗？', pinyin: 'Kěyǐ fā dào wǒ de guójiā ma?', en: 'Can you ship to my country?' },
            { cn: '我是来做生意的外国买家。', pinyin: 'Wǒ shì lái zuò shēngyi de wàiguó mǎijiā.', en: 'I\'m a foreign buyer here for business.' }
        ]
    },
    {
        id: 'wuhan',
        cn: '武汉', pinyin: 'Wǔhàn', en: 'Wuhan', emoji: '🌉',
        region: 'Central', tagline: 'Nine provinces\' thoroughfare — rivers, bridges, and breakfast culture.',
        gradient: ['#4E6E8E', '#2E4A68'],
        facts: ['11 bridges over the Yangtze', '1,000+ breakfast streets foods', 'Optics Valley tech hub'],
        story: 'Wuhan sits where the Yangtze and Han rivers meet — the very heart of China, "thoroughfare to nine provinces." Its people are famous for "guozao" (过早): eating breakfast on the go, hot dry noodles in hand, at street stalls that open before dawn. The city is home to over a million university students — the most in the world — and Optics Valley produces a quarter of the world\'s optical fiber.',
        industry: ['Optoelectronics & fiber optics (Optics Valley)', 'Automobiles (Dongfeng)', 'Higher education & research', 'Steel (WISCO)'],
        highlights: [
            { name: 'Yellow Crane Tower 黄鹤楼', desc: 'The pagoda of a thousand poems — skyline icon' },
            { name: 'East Lake 东湖', desc: 'City lake 6x bigger than West Lake in Hangzhou — bike the greenway' },
            { name: 'Hubu Alley 户部巷', desc: 'Breakfast street: hot dry noodles, doupi, egg wine' },
            { name: 'Wuhan Yangtze Bridge 武汉长江大桥', desc: 'First bridge ever across the Yangtze, 1957' }
        ],
        slang: { term: '过早 (guòzǎo)', meaning: 'Wuhan dialect for "having breakfast" — a city-wide ritual so beloved people eat noodles while walking.' },
        phrases: [
            { cn: '来一碗热干面！', pinyin: 'Lái yī wǎn règānmiàn!', en: 'One bowl of hot dry noodles, please!' },
            { cn: '户部巷怎么走？', pinyin: 'Hùbù xiàng zěnme zǒu?', en: 'How do I get to Hubu Alley food street?' },
            { cn: '长江大桥晚上有灯光秀吗？', pinyin: 'Chángjiāng dàqiáo wǎnshang yǒu dēngguāngxiù ma?', en: 'Is there a light show on the Yangtze Bridge at night?' },
            { cn: '武汉的大学生真多！', pinyin: 'Wǔhàn de dàxuéshēng zhēn duō!', en: 'Wuhan has so many university students!' }
        ]
    },
    {
        id: 'tianjin',
        cn: '天津', pinyin: 'Tiānjīn', en: 'Tianjin', emoji: '🎡',
        region: 'North', tagline: 'The stand-up comedy capital with a European waterfront.',
        gradient: ['#7A5C8E', '#4F3A63'],
        facts: ['Birthplace of crosstalk comedy', 'European concession architecture', 'World\'s only "eye" ferris wheel on a bridge'],
        story: 'Half an hour from Beijing by high-speed rail, Tianjin is China\'s funniest city — the birthplace of "crosstalk" (相声), the rapid-fire two-man comedy that Chinese people have laughed at for 150 years. Its old concessions left behind thousands of European-style villas along the Hai River. Tianjin people are famous for their humor: even bargaining here comes with a punchline.',
        industry: ['Aerospace & aviation (Airbus A320 final assembly)', 'Port & logistics (Beijing\'s gateway)', 'Petrochemicals', 'Comedy & folk arts'],
        highlights: [
            { name: 'Tianjin Eye 天津之眼', desc: 'Ferris wheel built on a bridge — night ride is a must' },
            { name: 'Five Great Avenues 五大道', desc: '2,000+ European villas; rent a horse carriage' },
            { name: 'Ancient Culture Street 古文化街', desc: 'Clay figurines, kites, Yangliuqing New Year prints' },
            { name: 'Jianbing Guozi stand 煎饼果子', desc: 'The original breakfast crepe — only at street stalls, before 10am' }
        ],
        slang: { term: '嘛钱不钱的 (má qián bù qián de)', meaning: '"Money, schmoney" — classic Tianjin humor: cheerful, easygoing, never taking anything too seriously.' },
        phrases: [
            { cn: '加个鸡蛋，多放香菜！', pinyin: 'Jiā gè jīdàn, duō fàng xiāngcài!', en: 'Add an egg and extra cilantro! (for jianbing)' },
            { cn: '哪里能听相声？', pinyin: 'Nǎlǐ néng tīng xiàngsheng?', en: 'Where can I watch crosstalk comedy?' },
            { cn: '五大道可以坐马车吗？', pinyin: 'Wǔ dàdào kěyǐ zuò mǎchē ma?', en: 'Can I take a horse carriage on the Five Avenues?' },
            { cn: '天津人说话真幽默！', pinyin: 'Tiānjīn rén shuōhuà zhēn yōumò!', en: 'Tianjin people are so funny!' }
        ]
    },
    {
        id: 'qingdao',
        cn: '青岛', pinyin: 'Qīngdǎo', en: 'Qingdao', emoji: '🍺',
        region: 'East', tagline: 'Beer in a plastic bag, beaches, and red-roofed old town.',
        gradient: ['#D8A94E', '#A87830'],
        facts: ['Tsingtao Beer born here', 'German old town', 'Sailing city of Asia'],
        story: 'Qingdao is where Germany\'s 1898 concession left red-roofed Bavarian-style buildings facing the Yellow Sea — and where Tsingtao Beer, now world-famous, was brewed in 1903. The city\'s most beloved ritual: buying fresh, unfiltered beer in a plastic bag from street kiosks and sipping it on the seawall. Home of Chinese sailing and some of Asia\'s best beaches, it hosted the 2008 Olympic sailing events.',
        industry: ['Beer & beverages (Tsingtao)', 'Home appliances (Haier, Hisense)', 'Port trade & shipping', 'Marine science & sailing'],
        highlights: [
            { name: 'Zhanqiao Pier 栈桥', desc: 'The city\'s symbol — walk out over the sea at sunrise' },
            { name: 'Badaguan 八大关', desc: 'Eight avenues of European villas, one wedding-photo capital' },
            { name: 'Tsingtao Beer Museum 啤酒博物馆', desc: 'Drink fresh from the production line, toast with strangers' },
            { name: 'Beer street & plastic-bag beer 啤酒屋', desc: 'Buy a bag of draft beer like a true local' }
        ],
        slang: { term: '哈啤酒吃蛤蜊 (hā píjiǔ chī gélí)', meaning: '"Slurp beer and munch clams" — Qingdao dialect\'s formula for the good life. "哈" (hā) is local for "drink".' },
        phrases: [
            { cn: '来一袋原浆啤酒！', pinyin: 'Lái yī dài yuánjiāng píjiǔ!', en: 'A bag of fresh unfiltered beer, please!' },
            { cn: '海边可以游泳吗？', pinyin: 'Hǎibiān kěyǐ yóuyǒng ma?', en: 'Can I swim at the beach here?' },
            { cn: '八大关的枫叶什么时候红？', pinyin: 'Bādàguān de fēngyè shénme shíhòu hóng?', en: 'When do the maple leaves turn red in Badaguan?' },
            { cn: '青岛的海鲜真新鲜！', pinyin: 'Qīngdǎo de hǎixiān zhēn xīnxiān!', en: 'Qingdao\'s seafood is so fresh!' }
        ]
    },
    {
        id: 'zhengzhou',
        cn: '郑州', pinyin: 'Zhèngzhōu', en: 'Zhengzhou', emoji: '🚄',
        region: 'Central', tagline: 'Where Chinese civilization began — and where its trains cross.',
        gradient: ['#8E6E4E', '#5E4630'],
        facts: ['High-speed rail hub of China', 'Shaolin Temple nearby', '3,600-year-old city wall'],
        story: 'Zhengzhou stands on the Yellow River, beside Anyang where oracle bones first carved Chinese characters 3,300 years ago. It is China\'s railway heart — more high-speed lines cross here than anywhere else. An hour away is the Shaolin Temple, birthplace of Zen Buddhism and kung fu. The Shang dynasty city wall in downtown Zhengzhou has stood for 3,600 years, older than Rome\'s ruins.',
        industry: ['Transportation & logistics hub', 'Food processing (Sinian, quick-frozen food capital)', 'Electronics assembly (Foxconn\'s iPhone city)', 'Steel & aluminum'],
        highlights: [
            { name: 'Shaolin Temple 少林寺', desc: 'Kung fu monks, pagoda forest, 90-min away by train or bus' },
            { name: 'Henan Museum 河南博物院', desc: 'Oracle bones, bronze masks — 5,000 years in one building' },
            { name: 'Shang City Wall 商代城墙', desc: 'Walk on a 3,600-year-old earthen wall, free' },
            { name: 'Erqi Square 二七广场', desc: 'City center landmark, night snack streets nearby' }
        ],
        slang: { term: '中！ (zhōng!)', meaning: 'Henan dialect for "Yes! / Great! / Deal!" — the most versatile word in the province. A proper Henan reply: "中中中！"' },
        phrases: [
            { cn: '去少林寺的高铁几点？', pinyin: 'Qù Shàolínsì de gāotiě jǐ diǎn?', en: 'What time is the high-speed train to Shaolin Temple area?' },
            { cn: '这里的胡辣汤正宗吗？', pinyin: 'Zhèlǐ de húlàtāng zhèngzōng ma?', en: 'Is the spicy pepper soup here authentic?' },
            { cn: '河南博物院怎么走？', pinyin: 'Hénán bówùyuàn zěnme zǒu?', en: 'How do I get to the Henan Museum?' },
            { cn: '郑州是中国的铁路心脏。', pinyin: 'Zhèngzhōu shì Zhōngguó de tiělù xīnzàng.', en: 'Zhengzhou is the railway heart of China.' }
        ]
    },
    {
        id: 'urumqi',
        cn: '乌鲁木齐', pinyin: 'Wūlǔmùqí', en: 'Urumqi', emoji: '🏔️',
        region: 'Northwest', tagline: 'The heart of the Silk Road — where cultures meet.',
        gradient: ['#4A7A6A', '#2C5346'],
        facts: ['Farthest city from any ocean', 'Silk Road crossroads', 'Fruit & naan paradise'],
        story: 'Urumqi is recognized by Guinness as the most inland major city on Earth — the closest ocean is 2,500km away. For 2,000 years it sat on the Silk Road where Chinese, Uyghur, Kazakh, Hui and Mongol cultures traded and mingled. The result: a food scene like nowhere else — big plate chicken, lamb skewers over red-hot coals, hand-pulled noodles, and sweet fruit dried by the desert sun. Xinjiang\'s melons and grapes are the sweetest in China.',
        industry: ['Cotton & textiles', 'Fruit & nut processing', 'Oil, gas & coal', 'Cross-border trade (Central Asia)'],
        highlights: [
            { name: 'Grand Bazaar 大巴扎', desc: 'Silk Road market — carpets, dried fruit, music everywhere' },
            { name: 'Tianshan Tianchi 天山天池', desc: 'Alpine lake beneath snow peaks, 90 min away' },
            { name: 'Hongshan Park 红山公园', desc: 'City-center hill with panoramic views' },
            { name: 'Naan & kebab streets 馕坑肉烤肉', desc: 'Watch naan slapped into tandoor ovens, eat lamb kebabs' }
        ],
        slang: { term: '亚克西 (yàkèxī)', meaning: 'From Uyghur "yaxshi" — "good/great!" Widely understood and used across Xinjiang as a friendly thumbs-up.' },
        phrases: [
            { cn: '这个葡萄干甜不甜？', pinyin: 'Zhège pútáogān tián bu tián?', en: 'Are these raisins sweet?' },
            { cn: '大巴扎几点关门？', pinyin: 'Dàbāzhā jǐ diǎn guānmén?', en: 'What time does the Grand Bazaar close?' },
            { cn: '我要一份大盘鸡，加面。', pinyin: 'Wǒ yào yī fèn dàpánjī, jiā miàn.', en: 'One big plate chicken with extra noodles, please.' },
            { cn: '新疆的风景太美了！', pinyin: 'Xīnjiāng de fēngjǐng tài měi le!', en: 'Xinjiang\'s scenery is absolutely beautiful!' }
        ]
    },
    {
        id: 'hohhot',
        cn: '呼和浩特', pinyin: 'Hūhéhàotè', en: 'Hohhot', emoji: '🐎',
        region: 'North', tagline: 'The green city on the grasslands — dairy capital of China.',
        gradient: ['#5B8C5A', '#3B6239'],
        facts: ['"City of milk"', 'Grasslands at the doorstep', 'Mongolian culture heartland'],
        story: 'Hohhot — "green city" in Mongolian — is where China\'s grasslands begin. An hour\'s drive north takes you to Xilamuren grassland, where you can ride horses, sleep in a yurt, and watch horse-head fiddle players at sunset. The city is China\'s dairy capital: both Yili and Mengniu, the nation\'s two biggest milk brands, were born here. Mongolian, Chinese and Hui cultures blend in its temples, bazaars and milk-tea houses.',
        industry: ['Dairy (Yili, Mengniu HQ)', 'Grassland tourism', 'Wool & cashmere', 'Rare-earth processing'],
        highlights: [
            { name: 'Dazhao Temple 大召寺', desc: '400-year-old Tibetan Buddhist temple with a silver Buddha' },
            { name: 'Xilamuren Grassland 希拉穆仁草原', desc: 'Horse riding, yurt stays, bonfire nights' },
            { name: 'Inner Mongolia Museum 内蒙古博物院', desc: 'Dinosaur fossils, Mongolian culture, aerospace exhibits' },
            { name: 'Milk tea & shaomai houses 奶茶馆', desc: 'Savory milk tea with fried millet — breakfast of champions' }
        ],
        slang: { term: '赛拜努 (sàibàinǔ)', meaning: 'From Mongolian "sain baina uu" — "How are you?" A warm greeting you\'ll hear on the grasslands.' },
        phrases: [
            { cn: '可以去草原骑马吗？', pinyin: 'Kěyǐ qù cǎoyuán qí mǎ ma?', en: 'Can I go horse riding on the grassland?' },
            { cn: '我要一碗咸奶茶。', pinyin: 'Wǒ yào yī wǎn xián nǎichá.', en: 'One bowl of savory milk tea, please.' },
            { cn: '蒙古包可以住一晚吗？', pinyin: 'Měnggǔbāo kěyǐ zhù yī wǎn ma?', en: 'Can I stay overnight in a yurt?' },
            { cn: '草原的日落真壮观！', pinyin: 'Cǎoyuán de rìluò zhēn zhuàngguān!', en: 'The sunset on the grassland is spectacular!' }
        ]
    },
    {
        id: 'london',
        cn: '伦敦', pinyin: 'Lúndūn', en: 'London', emoji: '🇬🇧',
        region: 'International', country: 'United Kingdom',
        tagline: 'Your home base — where your China journey begins.',
        gradient: ['#2C3E50', '#17202A'],
        facts: ['Your starting city', 'Europe\'s largest Chinatown', '11h direct flight to Beijing'],
        story: 'London is home base for many of our learners. It has Europe\'s biggest Chinatown, dozens of Mandarin schools and Confucius Institutes, and a direct 11-hour flight to Beijing. Start here: learn the phrases, meet Chinese friends in our community, and get ready for your trip to any of the 24 Chinese cities waiting for you on this app. Chinatown\'s Lunar New Year parade is one of the largest outside Asia — a great place to use your first Chinese sentences.',
        industry: ['Finance & trade with China', 'Mandarin education', 'Culture & tourism', 'Tech & startups'],
        highlights: [
            { name: 'Big Ben 大本钟', desc: 'Iconic clock tower — the symbol of London' },
            { name: 'Tower Bridge 塔桥', desc: 'Victorian bascule bridge over the Thames' },
            { name: 'Chinatown 唐人街', desc: 'Europe\'s largest — Lunar New Year parade every spring' },
            { name: 'British Museum 大英博物馆', desc: 'World-class museum with treasures from every era' }
        ],
        slang: { term: '伦敦腔 (Lúndūn qiāng)', meaning: '"London accent" — the classic British English sound. In China, people say it sounds elegant and very different from American English.' },
        phrases: [
            { cn: '你好，我是来学中文的。', pinyin: 'Nǐ hǎo, wǒ shì lái xué Zhōngwén de.', en: 'Hello, I\'m here to learn Chinese.' },
            { cn: '伦敦有唐人街吗？', pinyin: 'Lúndūn yǒu Tángrénjiē ma?', en: 'Does London have a Chinatown?' },
            { cn: '我想去中国旅行。', pinyin: 'Wǒ xiǎng qù Zhōngguó lǚxíng.', en: 'I want to travel to China.' },
            { cn: '去中国要说中文！', pinyin: 'Qù Zhōngguó yào shuō Zhōngwén!', en: 'You need to speak Chinese when you visit China!' }
        ]
    }
];

