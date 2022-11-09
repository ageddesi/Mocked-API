import slugify from 'slugify';
import { INews } from './news.interface';

const slug = (title: string) => {
    return slugify(title, {
        lower: true,
        trim: true,
    });
};

const newsData: INews[] = [
    {
        title: `The Rise and Fall of Bitcoin Maximalism`,
        slug: slug(`The Rise and Fall of Bitcoin Maximalism`),
        summary:
            'Bitcoin maximalism has become so desperately unhinged I consider it a cultural Chernobyl. The situation was not always so. Bitcoin culture was not maximalist for most of its history. The zealots infecting modern Bitcoin culture are usurpers. I arrived into the world of Bitcoin in 2012. I had heard about the dark net marketplace Silk Road and its then-elusive leader, the Dread Pirate Roberts (DPR). As a fan of subcultures, I was enthralled and I still think nothing has come close to that era for sheer intrigue. ',
        published_date: '2022-10-12 01:07:18',
        category: 'Crypto',
        language: 'en',
        author: 'Dr. Paul J. Dylan-Ennis',
    },
    {
        title: "Crypto's Grayscale blasts SEC over ‘special harshness' toward bitcoin trading",
        slug: slug("Crypto's Grayscale blasts SEC over ‘special harshness' toward bitcoin trading"),
        author: 'Alison Frankel',
        published_date: '2022-10-12 01:07:18',
        summary:
            "Representations of cryptocurrency Bitcoin are seen in this illustration. REUTERS/Dado Ruvic/IllustrationGrayscale Investments LLC(Reuters) - Crypto asset manager Grayscale Investments LLC, which manages the world's largest bitcoin investment fund, told a federal appeals court on Tuesday that the U.S. Securities and Exchange Commission is so suspicious of bitcoin spot trading that it blocked a proposal to make it easier and safer for investors to gain exposure to the cryptocurrency.That is the only reasonable conclusion, Grayscale argued in a new brief filed with the District of Columbia U.",
        language: 'en',
        category: 'Crypto',
    },
    {
        title: 'South African Non-Profit Bitcoin Ekasi Opens Education Center',
        author: 'Frederick  Munawa',
        slug: slug('South African Non-Profit Bitcoin Ekasi Opens Education Center'),
        category: 'Crypto',
        published_date: '2022-10-11 20:07:47',
        summary:
            "Bitcoin Ekasi, a nonprofit organization seeking to establish a bitcoin economy in Mossel Bay, South Africa, has opened the Bitcoin Ekasi Center. The center will provide financial literacy education to local residents, with a focus on the area's younger generation and business community.The center was co-founded by Hermann Vivier, who also co-founded The Surfer Kids, a non-profit that teaches surfing and life skills to disadvantaged kids from the same locale. Bitcoin Ekasi has already enrolled 20 kids into its program and set up 10 stores to accept bitcoin for payment.",
        language: 'en',
    },
    {
        title: 'Grayscale says U.S. SEC set bar too high for Bitcoin funds',
        author: 'Jody Godoy',
        slug: slug('Grayscale says U.S. SEC set bar too high for Bitcoin funds'),
        category: 'Crypto',
        published_date: '2022-10-12 01:03:00',
        summary:
            "FILE PHOTO: The seal of the U.S. Securities and Exchange Commission hangs on the wall at SEC headquarters in Washington, June 24, 2011. REUTERS/Jonathan Ernst/File Photo (Reuters) - Grayscale Investments said in a court filing Tuesday that the U.S. Securities and Exchange Commission set the bar too high for spot bitcoin exchange-traded funds, which have so far not been approved for listing on U.S. exchanges.Grayscale sued the regulator in June, after the SEC denied its bid to convert its Grayscale Bitcoin Trust, the world's largest bitcoin fund, into an ETF for listing on Intercontinental Exchange Inc's NYSE Arca exchange.",
        language: 'en',
    },
    {
        title: 'Bitcoin vs Altcoin: Similarities and Differences Explained',
        author: 'Pooja T.',
        slug: slug('Bitcoin vs Altcoin: Similarities and Differences Explained'),
        category: 'Crypto',
        published_date: '2022-10-11 09:04:20',
        summary:
            'Bitcoin and Altcoins share a few similarities but differences rank the chart. Bitcoin is the original Cryptocurrency meaning it was the first ever coin in the market. Altcoins were then built after the success of Bitcoins, making them stand behind the Bitcoins. Both the kinds are decentralized, eliminating the need for a third party to process the transactions. Bitcoin has comparatively higher volatility than Altcoins since it is dependent on feelings and projections. Both coins can be accepted as a source of payment, though not every merchant accepts Cryptocurrencies as a mode of payment.',
        language: 'en',
    },
    {
        title: 'How Much Will Bitcoin be Worth in the Year 2140?',
        author: 'Amitej Rana',
        slug: slug('How Much Will Bitcoin be Worth in the Year 2140?'),
        category: 'Crypto',
        published_date: '2022-10-10 18:12:50',
        summary:
            "How much profit will you earn in your life if you keep buying Bitcoin (DCA) or buy a lump sum of it? How much will be the Bitcoin market value in the foreseeable future?What's the future of Bitcoin once it stops mining new Bitcoin? How will 21 million Bitcoins play out in the future? What will be its use cases in the future? Is it gonna be future money or a hedge against inflation?Everything in the observable universe is infinite or say we have infinite things in our finite universe.Some people call Gold a finite commodity.",
        language: 'en',
    },
    {
        title: 'Is the Bitcoin Price About to Enter its 5th Super Cycle Bull Market?',
        author: 'Ali B',
        published_date: '2022-10-11 05:59:11',
        slug: slug('Is the Bitcoin Price About to Enter its 5th Super Cycle Bull Market?'),
        category: 'Crypto',
        summary:
            "During the Asian session, Bitcoin's price fell 2.03% to $19,069.30, indicating that it is still in a bearish trend. Despite a bearish bias, the BTC/USD pair appears to be entering its 5th Bitcoin super cycle bull market. A super cycle occurs when a positive increase in the price of a market asset leads to an increase in the price of that asset. The term 'super cycle' refers to a long-term commodity bull market. However, several financial experts have begun to use it to represent Bitcoin.\n\nSince the COVID-19 epidemic in 2020, Bitcoin has become even more popular than it was in the previous decade and it's about to test a significant trend that has been stable for the past five years.",
        language: 'en',
    },
    {
        title: 'Grayscale says U.S. SEC set bar too high for Bitcoin funds',
        author: 'Jody Godoy',
        published_date: '2022-10-12 00:51:04',
        summary:
            'The seal of the U.S. Securities and Exchange Commission hangs on the wall at SEC headquarters in Washington, June 24, 2011. REUTERS/Jonathan Ernst/File PhotoOct 11 (Reuters) - Grayscale Investments said in a court filing Tuesday that the U.S. Securities and Exchange Commission set the bar too high for spot bitcoin exchange-traded funds, which have so far not been approved for listing on U.S. exchanges.Grayscale sued the regulator in June, after the SEC denied its bid to convert its Grayscale Bitcoin Trust (GBTC.',
        language: 'en',
        slug: slug('Grayscale says U.S. SEC set bar too high for Bitcoin funds'),
        category: 'Crypto',
    },
    {
        title: 'Sustainable Bitcoin Protocol Wants to Make Bitcoin a Climate-Positive Asset',
        author: 'Sage D. Young',
        published_date: '2022-10-13 15:32:54',
        summary:
            "Addressing Bitcoin's energy-intensive proof-of-work model would encourage greater institutional adoption, according to one chief executive who has focused on sustainability for more than eight years.Bradford Van Voorhees, CEO and co-founder of Sustainable Bitcoin Protocol, told CoinDesk that negative media, misperceptions of Bitcoin's environmental impact and its sizable energy consumption all currently hinder institutional adoption.Bradford Van Voorhees is presenting at Investing in Digital Enterprises and Assets Summit (I.",
        language: 'en',
        slug: slug('Sustainable Bitcoin Protocol Wants to Make Bitcoin a Climate-Positive Asset'),
        category: 'Crypto',
    },
    {
        title: 'Bitcoin: Breaking Up Money and State',
        author: 'Will',
        published_date: '2022-10-11 16:59:39',
        summary:
            'For the first time in human history, a technology has been created that once and for all divorces money from the state. This separation of money and state is poised to transform the way we think about value and our expectations of government involvement in our financial lives, and may be the largest cultural-political shift since the separation of church and state.\n\nBitcoin cannot be created at the whim of some centralized power, taking away the ability of governments to spend wantonly. It may sound utopian, but once humanity evolves to a Bitcoin standard the government-created boom-bust cycle, constant inflation and ability to fund wars will be things of the past.',
        language: 'en',
        slug: slug('Bitcoin: Breaking Up Money and State'),
        category: 'Crypto',
    },
    {
        title: 'Semiconductor Silicon Carbide Electronic Power Device Market Size 2022: Covid-19 Impact Analysis By Industry Share, Key Findings, Company Profiles, Growth Strategy, and Forecast by Regions till 2028',
        author: 'Qy Research',
        published_date: '2022-10-13 09:46:14',
        slug: slug('Semiconductor Silicon Carbide Electronic Power Device Market Size 2022'),
        category: 'Silicone',
        summary:
            'Semiconductor Silicon Carbide Electronic Power Device Market Size 2022: Covid-19 Impact Analysis By Industry Share, Key Findings, Company Profiles, Growth Strategy, and Forecast by Regions till 2028 | Cree, Fairchild Semiconductor, General Electric, Infin\n\nhttps://www.qyresearch.com/sample-form/form/5059809/Global-Semiconductor-Silicon-Carbide-Electronic-Power-Device-Market-Insights-Forecast-to-2028\n\nhttps://www.qyresearch.com/customize-request/form/5059809/Global-Semiconductor-Silicon-Carbide-Electronic-Power-Device-Market-Insights-Forecast-to-2028\n\nLos Angeles, United State: QY Research recently published a research report titled, "Global Semiconductor Silicon Carbide Electronic Power Device Market Insight, Forecast 2028".',
        language: 'en',
    },
    {
        title: 'Dental Silicone Materials market: Market Indicators Showing Positive Outlook',
        author: 'Qyresearch',
        published_date: '2022-10-13 12:50:17',
        slug: slug('Dental Silicone Materials market: Market Indicators Showing Positive Outlook'),
        category: 'Silicone',
        summary:
            'Dental Silicone Materials market: Market Indicators Showing Positive Outlook | Coltène Whaledent GmbH, DENTAL MANUFACTURING S.p.A., ELSODENT\n\nhttps://www.qyresearch.com/sample-form/form/5012295/Global-Dental-Silicone-Materials-Industry-Research-Report-Growth-Trends-and-Competitive-Analysis-2022-2028\n\nhttps://www.qyresearch.com/customize-request/form/5012295/Global-Dental-Silicone-Materials-Industry-Research-Report-Growth-Trends-and-Competitive-Analysis-2022-2028\n\nThe global Dental Silicone Materials Market is carefully researched in the report while largely concentrating on top players and their business tactics, geographical expansion, market segments, competitive landscape, manufacturing, and pricing and cost structures.',
        language: 'en',
    },
    {
        title: 'Silicone Rubber Tape Market Growth and Share by 2028',
        author: '',
        published_date: '2022-10-11 05:08:02',
        slug: slug('Silicone Rubber Tape Market Growth and Share by 2028'),
        category: 'Silicone',
        summary:
            "The MarketWatch News Department was not involved in the creation of this content. Oct 11, 2022 (The Expresswire) --\nThe 'Silicone Rubber Tape Market' Report 2022 presents exhaustive coverage of global and regional market segments with industry size, share and growth analysis. Silicone Rubber Tape market report covers future trends, growth opportunities, challenges of top key players for demand-supply side. The report delivers concise summary of business statistics, development plans, pricing strategies, competition analysis, economics policies adopted by top key players.",
        language: 'en',
    },
    {
        title: 'Reclaim Silicon Wafer Market 2022 To 2028, Top Companies Booming Strategies, Progression Status, and Business Trends.',
        author: '',
        published_date: '2022-10-11 11:00:40',
        slug: slug('Reclaim Silicon Wafer Market 2022 To 2028'),
        category: 'Silicone',
        summary:
            'The MarketWatch News Department was not involved in the creation of this content. Oct 11, 2022 (Reportmines via Comtex) --\nPre and Post Covid is covered and Report Customization is available. The "Reclaim Silicon Wafer market" gives detailed data about the major factors influencing the growth of the Reclaim Silicon Wafer market at the national and local level forecast 2022 - 2028 of the market size, in terms of value, market share by region, segment, regional market positions, segment, and country opportunities for growth, Key company profiles, SWOT, product portfolio and growth strategies.',

        language: 'en',
    },
    {
        title: 'Global Silicone Market Size to grow USD 30.9 Billion by 2030',
        author: 'Spherical Insights Llp',
        published_date: '2022-10-12 00:00:00',
        slug: slug('Global Silicone Market Size to grow USD 30.9 Billion by 2030'),
        category: 'Silicone',
        summary:
            'New York, United States, Oct. 12, 2022 (GLOBE NEWSWIRE) -- The Global Silicone Market Size is expected to grow from USD 16.3 billion in 2021 to USD 30.9 billion by 2030, at a CAGR of 7.4% during the forecast period 2021-2030. as per the latest research report by Spherical Insights & Consulting. The Asia Pacific is expected to grow the fastest during the forecast period. Get a Sample PDF Brochure: https://www.sphericalinsights.com/request-sample/1189 The Silicone market has been growing owing to the rise in demand for silicone by different end-user industries such as medical, construction, industrial, and consumer goods.',
        language: 'en',
    },
    {
        title: 'Silicone Putties for Any Purpose',
        author: 'The Artnews Recommends Editors',
        published_date: '2022-10-09 21:00:00',
        slug: slug('Silicone Putties for Any Purpose'),
        category: 'Silicone',
        summary:
            "What can't a quality silicone putty do? It's a go-to choice for making detailed molds for materials like resin, clay, or plaster, and many versions can do much, much more, from creating tool grips to stoppering leaks. Molding putties top our list, but you'll find that our five picks can be put to use beyond crafting and sculpture. Here are the best silicone putties on the market.\n\nBrought to you by the oldest and most widely circulated art magazine in the world, ARTnews Recommends helps you make the choice that suits you best from products in hundreds of art and craft supply categories.",
        language: 'en',
    },
    {
        title: 'Silicone Structural Glazing Market Expected to Reach $81.6 Billion by 2031',
        author: 'David Correa',
        published_date: '2022-10-11 10:30:24',
        slug: slug('Silicone Structural Glazing Market Expected to Reach $81.6 Billion by 2031'),
        category: 'Silicone',
        summary:
            'The silicone structural glazing market size was valued at $38.1 billion in 2021 growing at a CAGR of 7.8% from 2022 to 2031. PORTLAND, OR, UNITES STATES, October 11, 2022 /EINPresswire.com/ -- Silicone structural glazing is the use of a silicone sealant for the structural transfer of loads from the glass to its perimeter support system and retention of the glass in the opening. Glass is not typically used as a structural member. According to a new report published by Allied Market Research, titled, \'Silicone Structural Glazing Market," The silicone structural glazing market size was valued at $38.',
        language: 'en',
    },
    {
        title: 'Four-sided Structural Silicone Glazing market: Complete Company Profiling of Dominant Players',
        author: 'Qyresearch Inc.',
        published_date: '2022-10-10 16:26:18',
        slug: slug('Four-sided Structural Silicone Glazing market: Complete Company Profiling of Dominant Players'),
        category: 'Silicone',
        summary:
            'Four-sided Structural Silicone Glazing market: Complete Company Profiling of Dominant Players | Nippon Sheet Glass Co. Ltd. (Japan), The Dow Chemical Company (US), Asahi Glass Co., Ltd (Japan)\n\nhttps://www.qyresearch.com/sample-form/form/5055729/Global-Four-sided-Structural-Silicone-Glazing-Market-Report-History-and-Forecast-2017-2028-Breakdown-Data-by-Manufacturers-Key-Regions-Types-and-Application\n\nhttps://www.qyresearch.com/customize-request/form/5055729/Global-Four-sided-Structural-Silicone-Glazing-Market-Report-History-and-Forecast-2017-2028-Breakdown-Data-by-Manufacturers-Key-Regions-Types-and-Application\n\nwww.',
        language: 'en',
    },
    {
        title: 'Silicon Frontline Receives EOS/ESD Symposium Outstanding Paper Award',
        author: 'Dermott Lynch',
        published_date: '2022-10-11 17:45:00',
        slug: slug('Silicon Frontline Receives EOS/ESD Symposium Outstanding Paper Award'),
        category: 'Silicone',
        summary:
            "SAN JOSE, CALIFORNIA, USA, October 11, 2022 /EINPresswire.com/ -- Silicon Frontline Technology is proud to announce that they are a recipient of 43rd Annual EOS/ESD Symposium Outstanding Paper Award for a paper titled 'Enablement, Evaluation and Extension of a CDM ESD Verification Tool for IC Level'. The paper was co-authored with Infineon Technologies and Technical University of Munich. 'It is a great honor to be awarded this recognition for our collaborated work with Infineon and Technical University of Munich and highlighting the capabilities and results of our CDM ESD solution,' said Dermott Lynch, COO of Silicon Frontline Technology.",
        language: 'en',
    },
    {
        title: 'Effects, Opportunities, and Fears of Artificial Intelligence',
        author: 'Adrian Munguia',
        published_date: '2022-10-08 23:46:33',
        summary:
            'Even though Artificial Intelligence till this day is growing in its success, people are becoming quite concerned about the technology even with the groundbreaking results that AI has brought into our history of technological advancements. For this paper I will further investigate how artificial intelligence can impact our pace of life and the changing nature of our personal freedoms.With the many positive opportunities that AI brings to our lives there are also negative opportunities which affect us negatively.',
        language: 'en',
        slug: slug('Effects, Opportunities, and Fears of Artificial Intelligence'),
        category: 'AI',
    },
    {
        title: 'Where has AI reached at the moment',
        author: 'Prashansa Sachan',
        published_date: '2022-10-08 13:05:12',
        summary:
            "So, it means we are asking- how much human-like are machine these days ? Marketing chatbots and Autocorrect is the least you can see and connect with that of AI presence in our real world. In 1956, John McCarthy organised the Dartmouth Conference, at which the term ‘Artificial Intelligence' was first adopted. From then on, the world discovered the ideas of the ability of machines to look at social problems using knowledge data and competition.When NITI Ayog and Meity held the event RAISE (Responsible AI for Social Empowerment 2020) and India became part of larger abd bigger GPAI(Global Partnership on Artificial Intelligence), we knew for sure that this technology is going to rule the world.",
        language: 'en',
        slug: slug('Where has AI reached at the moment'),
        category: 'AI',
    },
    {
        title: 'Steve Nouri Affirms That AI & Web3 Will Enhance Decentralization',
        author: 'Wow AI Editorial Team',
        published_date: '2022-10-09 04:57:10',
        summary:
            'Photo by Wow AIThe second session of Worldwide AI Webinar 2022 was a keynote on AI and Web 3.0 delivered by Steve Nouri, founder of AI4Diversity.The recording of the whole session will be available shortly! Please follow Wow AI on LinkedIn, Facebook, Twitter, and YouTube to stay up-to-date!Key TakeawaysWeb3 gives data ownership back to the usersExplaining that in the current web model, users do not own their data or identity but instead are given accounts by companies and end up getting their data held captive in app siloes, Steve Nouri believed that Web3 would be transformative.',

        language: 'en',
        slug: slug('Steve Nouri Affirms That AI & Web3 Will Enhance Decentralization'),
        category: 'AI',
    },
    {
        title: 'The increasing importance of learning AI skills and the future of work',
        author: 'Sugandha Jha',
        published_date: '2022-10-09 10:23:17',
        summary:
            'By Mudit Srivastava It is common knowledge that AI will create unprecedented innovations, and most people realize it as we see its examples in our day-to-day lives. But understanding industry needs and expectations from the talent of tomorrow is nebulous at best. It is becoming increasingly evident that AI will be used to augment rather than replace human intelligence. A key component of succeeding in an AI-powered world is knowing how and where to harness its power. That is where AI education comes in.',

        language: 'en',
        slug: slug('The increasing importance of learning AI skills and the future of work'),
        category: 'AI',
    },
    {
        title: 'Transparency of AI systems for Migrants',
        author: 'Andranik VAN',
        published_date: '2022-10-09 17:02:26',
        summary:
            "Reflections on AI Transparency issues.Only my photos. © Uniquement mes photos. © IG @bnw_av44Millions of migrants spontaneously generate a multitude of personal information when they move. This information is collected by specific programs and devices and processed by AI systems. This is done not only to guarantee the security and conservation of national interests but also to make decisions and predictions 'in the public's best interest.'Although government resources boast migration predictions and AI system-supported decisions utility, the transparency of the use of AI systems for decision-making yet stirs controversial discussions.",

        language: 'en',
        slug: slug('Transparency of AI systems for Migrants'),
        category: 'AI',
    },
    {
        title: 'Birmingham company acquires Boston-based, Delaware-based companies',
        author: 'Laurel Thrailkill',
        published_date: '2022-10-09 23:05:00',
        summary:
            'Birmingham-based Copysmith, a provider of AI-powered marketing content and copywriting software, acquired two companies.\n\nThe company acquired Boston-based Frase and Delaware-based Rytr, launching Copyrytr, a collective of AI-powered content and SEO marketing solutions.\n\n"The world of AI content creation is going through exciting times," said Shegun Otulana, CEO of Copysmith. "Over the last 24 months, millions of people have adopted our products and millions more across the entire space actively use various AI solutions to generate content.',

        language: 'en',
        slug: slug('Birmingham company acquires Boston-based, Delaware-based companies'),
        category: 'AI',
    },
    {
        title: 'The Uncertainty Bias in AI and How to Tackle it',
        author: 'Dr. Eric Wang',
        published_date: '2022-10-08 09:00:23',
        summary:
            'Bias in AI is a formidable topic for any data scientist. If you are reading this, you probably know that artificial intelligence systems have a bias problem. While true, that thought is misleading. AI systems themselves inherently have no bias. However, if it is using biased data, or the people running the system do not correct it, AI systems can return faulty, biased information.\n\nBut you may not know that the same AI systems, even those we would consider to be free of bias in AI, can present a different and no less concerning outcome.',

        language: 'en',
        slug: slug('The Uncertainty Bias in AI and How to Tackle it'),
        category: 'AI',
    },
    {
        title: 'In the future, the medicines we take may be "made by AI"',
        author: 'Anonym',
        published_date: '2022-10-09 22:03:19',
        summary:
            'In the future, the medicines we take may be "made by AI" [Artificial intelligence is participating in the whole process from target discovery to clinical trials] The birth of a new drug usually requires an investment of 1 billion or even billions of dollars, and the research and development cycle generally exceeds 10 years. Due to the addition of AI technology, the cost of drug research and dev\n\nIn the future, the medicines we take may be "made by AI" [Artificial intelligence is participating in the whole process from target discovery to clinical trials]\n\nThe birth of a new drug usually requires an investment of 1 billion or even billions of dollars, and the research and development cycle generally exceeds 10 years.',

        slug: slug('In the future, the medicines we take may be "made by AI"'),
        category: 'AI',
        language: 'en',
    },
    {
        title: 'AGI AI Pte Ltd Launches AI+Financial Concept Services',
        author: '',
        published_date: '2022-10-09 01:00:00',
        summary:
            'In 2022, AGI AI Private Limited (AGI AI) built AI quantitative trading, wholly owned by AGI AI to provide the core technology and principles of underlying logic. We develop strategic plan as well as goals for long-term AI+ finance.\n\nAGI AI has Structured Its Strategic Development Plan into Five Steps\n\nStep 1. Creating The Perfect Combination of AI + Finance: Automated factor discovery, knowledge graph, graph computing, and enhanced analytics based on privacy protection will deliver greater value.',

        language: 'en',
        slug: slug('AGI AI Pte Ltd Launches AI+Financial Concept Services'),
        category: 'AI',
    },
    {
        title: 'AI Washing: Everything You Need to Know',
        author: 'Linda Rosencrance',
        published_date: '2022-10-14 00:05:45',
        summary:
            'You\'ve heard of "greenwashing," but how about "AI washing"? Let\'s dive deeper into this marketing tactic to unpack why companies engage in it and how to steer clear of it:What is AI Washing?AI washing is a marketing effort wherein vendors claim their offerings involve artificial intelligence (AI) technology when they really don\'t or the connection to AI is minimal. Marketing teams engage in AI washing when they embellish their products\' AI capabilities to enhance sales. AI washing is much like "greenwashing," where a company\'s management team makes unsupported, false or misleading claims about the sustainability of its products, services or business operations.',
        language: 'en',
        slug: slug('AI Washing: Everything You Need to Know'),
        category: 'AI',
    },
    {
        title: 'Is your AI up, running and relevant?',
        author: 'Mary E. Shacklett Is President',
        published_date: '2022-10-12 22:16:10',
        summary:
            "Image: Shuo/Adobe Stock\nIn 2021, Spiceworks reported survey results that revealed, 'Almost one-third (31%) of the professionals surveyed said their organizations are now using artificial intelligence (AI), and 43% are exploring the technology. About 34% reported their companies had not deployed any AI projects.'\nThis and other surveys show that most companies are in early stages of AI adoption — and they most likely have not yet thought about change management for their AI systems, and what it's going to take to keep their AI systems up, running and relevant.",

        language: 'en',
        slug: slug('Is your AI up, running and relevant?'),
        category: 'AI',
    },
    {
        title: 'Fossil Gen 6 smartwatches are getting Wear OS 3 and will allow iOS connections',
        author: 'Pike',
        published_date: '2022-10-13 18:10:08',
        summary:
            "Jimmy Westenberg / Android AuthorityTL;DR\n\nFossil Gen 6 smartwatches will be one of the first smartwatches to upgrade from Wear OS 2 to Wear OS 3.\nThe update will only be coming to Gen 6 devices and not the rest of Fossil's portfolio.\nThe update will provide iOS connection support.\n\n\nWhen we talk about Wear OS 3, much of the conversation is limited to a select few devices. However, it looks like that will soon change once the Fossil Gen 6 Wellness Edition hits store shelves later this month.Earlier today, Fossil announced a new addition to its Gen 6 lineup of smartwatches — the Fossil Gen 6 Wellness Edition.",

        language: 'en',
        slug: slug('Fossil Gen 6 smartwatches are getting Wear OS 3'),
        category: 'OS',
    },
    {
        title: 'Google Pixel Watch gets three years of updates, Samsung Galaxy Watch5 gets four',
        author: 'Vlad',
        published_date: '2022-10-11 22:01:13',
        summary:
            "Google's Pixel Watch and Samsung's Galaxy Watch5 may be based on the same Wear OS 3.x platform, but they won't get the same level of software support. According to a very revealing Wired interview with Björn Kilburn, Google's director of product management for Wear OS, the Pixel Watch is set to receive three years of software updates. On the other hand, Samsung's Galaxy Watch5 will get four years. The explanation for the discrepancy is that, starting with Wear OS 3.x, Google is no longer in charge of updates for the wearables it doesn't make.",

        language: 'en',
        slug: slug('Google Pixel Watch gets three years of updates'),
        category: 'OS',
    },
    {
        title: "Samsung's Tizen OS Poised for Use on Third-Party TVs",
        author: 'Google',
        published_date: '2022-10-10 20:50:59',
        summary:
            "Samsung has its first Tizen OS licensees as the company looks to expand Tizen's footprint in the smart TV market.\nTizen OS is a Linux-based OS developed by Samsung, in conjunction with the Linux Foundation. Tizen has continued to grow since its introduction in 2012, but has primarily been used by Samsung.\nThe company has now partnered with third-party manufacturers, paving the way for them to adopt Tizen OS on their own TVs.\nSamsung Electronics today announced a partnership with leading international ODM (Original Development Manufacturing) companies such as Atmaca, HKC and Tempo — a collaboration that will enable non-Samsung smart TV models to use Tizen OS for the first time.",

        language: 'en',
        slug: slug("Samsung's Tizen OS Poised for Use on Third-Party TVs"),
        category: 'OS',
    },
    {
        title: 'Wear OS System UI App Brings Latest Experiences To Pixel Watch',
        author: 'Sumit Adhikari',
        published_date: '2022-10-14 09:28:21',
        summary:
            "Google has released a new 'Wear OS System UI' app for the Pixel Watch on the Play Store. The app will provide the latest Wear OS smartwatch experiences to users. 'Stay connected, be healthier, and leverage the helpfulness of Google, all on your wrist,' its Play Store description reads.The Wear OS System UI app will likely seed system improvements to the Pixel Watch via the Play Store. Google recently said that it plans to release a new Wear OS version every year as it does for Android. Its first-gen smartwatch will get updates for at least three years.",

        language: 'en',
        slug: slug('Wear OS System UI App Brings Latest Experiences To Pixel Watch'),
        category: 'OS',
    },
    {
        title: 'Pixel Watch: Google confirms annual Wear OS updates and three-year software support for its first smartwatch',
        author: 'EconoTimes',
        published_date: '2022-10-12 08:14:01',
        summary:
            "Google confirmed that the Wear OS would receive the same annual update treatment the Android operating system gets following the unveiling of the Pixel Watch last week. It means Google's first in-house smartwatch will receive at least three versions of the Wear OS in the years to come.\n\nThe Wear OS went through somewhat of a rebirth last year. Apart from changing its name from Android Wear, Google also announced its partnership with Samsung to co-develop Wear OS as a 'unified platform.' Now that Google has brought the Pixel Watch to the market, the company confirmed Wear OS would receive regular updates every year.",

        language: 'en',
        slug: slug('Pixel Watch: Google confirms annual Wear OS updates'),
        category: 'OS',
    },
    {
        title: 'Long Noncoding RNA LINC00909 Induces Epithelial-Mesenchymal Transition and Contributes to Osteosarcoma Tumorigenesis and Metastasis',
        author: 'Wanshun Liu',
        published_date: '2022-10-10 13:05:03',
        summary:
            'Journal of Oncology/2022/Article/Research Article | Open AccessVolume 2022 | Article ID 8660965 | https://doi.org/10.1155/2022/8660965Wanshun Liu,1,2Qi Zhang,3Kai Shen,1Keran Li,4Jie Chang,1He Li,1Ao Duan,1Sheng Zhang,1,5and Yumin Huang1Academic Editor: Zhihua KangBackground. Osteosarcoma (OS) is a malignant tumor that is highly metastatic with a high mortality rate. Although mounting evidence suggests that LINC00909 is strongly associated with the malignant progression of various tumors, the exact role of LINC00909 in OS remains unknown.',

        language: 'en',
        slug: slug('Long Noncoding RNA LINC00909 Induces Epithelial-Mesenchymal Transition'),
        category: 'OS',
    },
    {
        title: 'Samsung Is Bringing Tizen OS Platform To More TV Brands: What We Know',
        author: 'Tech Desk',
        published_date: '2022-10-11 08:11:23',
        summary:
            'Samsung is finally opening up the gates for more TV brands to use its licensed Tizen OS platform. The company is ready to license the platform so that other smart TVs can be powered by the operating system. While the initial signs suggest Samsung will have to make allies with less-known brands, it is good to see the company looking to partner with other brands for its software products. The company has disclosed its plans to source Tizen OS to other brands at the Samsung Developers Conference last year, and now we are finally hearing the names of the brands that have signed up with the South Korean for its TV platform.',
        language: 'en',
        slug: slug('Samsung Is Bringing Tizen OS Platform To More TV Brands: What We Know'),
        category: 'OS',
    },
    {
        title: 'New Wear OS version coming every year, promised update for old watches still set for 2022',
        author: 'Abner Li',
        published_date: '2022-10-11 19:09:34',
        summary:
            "The first-party Pixel Watch is the next biggest moment for Wear OS after last year's Samsung partnership. The team responsible provided an update today on the state of the platform. Wired talked to Björn Kilburn, director of product management for Wear OS, in an interview that reveals how Google's goal is to 'release a new version of Wear generally every year in a similar fashion to mobile.' It's unclear if that annual update goal is referring to, for example, 3.0 -> 4.0 or whether 3.0 -> 3.5 would count, which happened this year on Samsung's Galaxy Watch 5 and the Pixel Watch.",

        language: 'en',
        slug: slug('New Wear OS version coming every year, promised update for old watches still set for 2022'),
        category: 'OS',
    },
    {
        title: 'Google Wear OS Updates Are Now Rolling Out Yearly Like How Android Works',
        author: 'Teejay Boris',
        published_date: '2022-10-12 01:20:00',

        summary:
            'Teejay Boris, Tech Times 11 October 2022, 09:10 pm Google vows Wear OS updates on a yearly basis like how mobile phones receive annual Android releases. The search engine giant explained why it suddenly plans to dish out more Wear OS updates. On top of that, Google also confirmed that it is gearing up to push new updates to older smartwatches before the year ends. As per the latest report by 9to5 Google, the new Wear OS was made possible in partnership with the giant South Korean phone maker Samsung.',

        language: 'en',
        slug: slug('Google Wear OS Updates Are Now Rolling Out Yearly Like How Android Works'),
        category: 'OS',
    },
];

export default newsData;
