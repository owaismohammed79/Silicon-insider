import './../CSS files/Card.css'
import ImageResizer from './ImageResizer'

function Card({category}) {
    const data = [
        {
            Category:"Latest",
            Title: "The mystery of an alleged data broker’s data breach",
            Description: "Since April, a hacker with a history of selling stolen data has claimed a data breach of billions of records — impacting at least 300 million people — from a U.S. data broker, which would make it one of the largest alleged data breaches of the year. ",
            imgurl: "https://techcrunch.com/wp-content/uploads/2024/06/national-public-data-mystery-breach.png?resize=1200,675",
            website: "https://techcrunch.com/2024/06/11/the-mystery-of-an-alleged-data-brokers-data-breach",
        },
        {
            Category: "AI",
            Title: "Atlassian Introduces New AI-powered Virtual Teammate ‘Atlassian Intelligence’",
            Description: "Robots have fascinated us for years. However, our relationship with robots is very ambivalent: we fear and we admire them. We admire the precision with which they do work, but we are afraid of their purely logical decisions. These fears are, of course, very pronounced in medicine, an area in which we feel extremely vulnerable. Despite of those fears, surgery is an ideal area for the use of robots: a robot is not limited to two hands. It does not tremble and is fatigue-free. It can work through the smallest openings and reproducibly control any three-dimensional position. This enables surgical interventions in areas that would otherwise not be accessible.",
            imgurl: "https://euroeyes.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/08/robotic-eye-surgery.png.webp",
            website: "https://euroeyes.com/robotic-eye-surgery-an-overview/"
        },
        {
            Category: "AI",
            Title: "What Are the Robotic Arm 3D Printing Solutions on the Market?",
            Description: "3D printing robot uses AI to create shock-absorbing shapes: A team of engineers at MIT has developed a 3D-printing robot that uses AI to create objects with complex, shock-absorbing structures. This technology could be used to design new materials for a variety of applications, such as protective gear and energy absorption systems.",
            imgurl: "https://www.3dnatives.com/en/wp-content/uploads/sites/2/2022/10/Cover-ranking-2.jpg",
            website: "https://www.3dnatives.com/en/robotic-arms-3d-printing-141020226/#!"
    
        },
        {
            Category: "AI",
            Title: "Bio-inspired cameras and AI for faster pedestrian detection:",
            Description: "Researchers have created a new type of camera inspired by the human eye that, combined with AI, can help self-driving cars detect pedestrians and obstacles faster and more accurately. This technology could improve the safety of autonomous vehicles.",
            imgurl: "https://www.researchgate.net/publication/328490031/figure/fig3/AS:685303635406848@1540400527215/Optical-images-captured-by-the-bioinspired-ultrathin-digital-camera-a-Experimental-setup.png",
            website: "https://www.researchgate.net/figure/Optical-images-captured-by-the-bioinspired-ultrathin-digital-camera-a-Experimental-setup_fig3_328490031"
    
        },
        {
            Category: "AI",
            Title: "MediaTek designs Arm-based chip for Microsoft's AI laptops",
            Description: "Last month, Microsoft unveiled a new generation of laptops that feature chips designed with Arm Holdings tech, which provide enough horsepower to run the artificial intelligence applications that executives said were the future of consumer computing. The MediaTek chip is geared toward this effort.",
            imgurl: "https://img.etimg.com/thumb/msid-110931545,width-650,height-488,imgsize-151986,resizemode-75/microsoft-logo.jpg",
            website: "https://economictimes.indiatimes.com/tech/technology/mediatek-designs-arm-based-chip-for-microsofts-ai-laptops/articleshow/110931482.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst"
    
        },
        {
            Category: "AI",
            Title: "Meta hit with privacy complaints over AI plans",
            Description: "A Vienna-based privacy group filed complaints against Meta in 11 European countries over unlawful AI data use. Microsoft announced a $3.2 billion AI investment in Sweden over two years, AMD unveiled new AI chips to challenge Nvidia, and Cisco plans a $1 billion investment in AI startups for secure AI services.",
            imgurl: "https://img.etimg.com/thumb/msid-110826361,width-650,height-488,imgsize-38558,resizemode-75/how-shutterstock-is-helping-apple-google-amazon-to-train-ai.jpg",
            website: "https://economictimes.indiatimes.com/tech/technology/meta-hit-with-privacy-complaints-over-ai-plans/articleshow/110826228.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst"
    
        },
        
        {
            Category:"Security",
            Title: "Tern AI wants to reduce reliance on GPS with low-cost navigation alternative",
            Description: "The most critical systems of our modern world rely on GPS, from aviation and road networks to emergency and disaster response, from precision farming and power grids to weather forecasting and military defense. That dependence is becoming a problem.",
            imgurl: "https://techcrunch.com/wp-content/uploads/2024/06/InfotainmentsystemTernAI.png",
            website: "https://techcrunch.com/2024/06/12/tern-ai-wants-to-reduce-reliance-on-gps-with-low-cost-navigation-alternative/"
        },
        {
            Category:"Security",
            Title: "At last, Apple’s Messages app will support RCS and scheduling texts",
            Description: "The biggest updates coming to Apple’s iMessage and its Messages app in iOS 18 aren’t its AI emoji, Genmoji, or even the ability to send texts via satellite. It’s the ability to finally, finally schedule messages to send at a later date and time, as well as support for RCS, the next-gen messaging standard and replacement for SMS that will make texting with Android folks much less painful.",
            imgurl: "https://techcrunch.com/wp-content/uploads/2024/06/scheduled-send.png?resize=1200,826",
            website: "https://techcrunch.com/2024/06/11/at-last-apples-messages-app-will-support-rcs-and-scheduling-texts/",
        },
        {
            Category:"Security",
            Title: "The mystery of an alleged data broker’s data breach",
            Description: "Since April, a hacker with a history of selling stolen data has claimed a data breach of billions of records — impacting at least 300 million people — from a U.S. data broker, which would make it one of the largest alleged data breaches of the year. ",
            imgurl: "https://techcrunch.com/wp-content/uploads/2024/06/national-public-data-mystery-breach.png?resize=1200,675",
            website: "https://techcrunch.com/2024/06/11/the-mystery-of-an-alleged-data-brokers-data-breach",
        },
        {
            Category:"Security",
            Title: "AI Is Your Coworker Now. Can You Trust It?",
            Description: "Generative AI tools such as OpenAI’s ChatGPT and Microsoft’s Copilot are rapidly evolving, fueling concerns that the technology could open the door to multiple privacy and security issues, particularly in the workplace.",
            imgurl: "https://media.wired.com/photos/665e41499c3c01816e236561/master/w_1920,c_limit/Microsoft-Copilot-AI-in-the-Workplace-2WD47TD.jpg",
            website: "https://www.wired.com/story/ai-workplace-privacy-security/",
        },
        {
            Category:"Security",
            Title: "Hundreds of Snowflake customer passwords found online are linked to info-stealing malware",
            Description: "Cloud data analysis company Snowflake is at the center of a recent spate of alleged data thefts, as its corporate customers scramble to understand if their stores of cloud data have been compromised.",
            imgurl: "https://techcrunch.com/wp-content/uploads/2024/06/cybersecurity-data-sharing-2024-v2.jpg?resize=1200,675",
            website: "https://techcrunch.com/2024/06/05/snowflake-customer-passwords-found-online-infostealing-malware/",
        },
        {
            Category:"Latest",
            Title: "AI news reader Particle adds publishing partners and $10.9M in new funding",
            Description: "Traffic is down, newsrooms are undergoing layoffs and publishers fear that AI technologies will only make matters worse. Entering the fray, news-reader startup Particle is teaming up with publishers to seek out a new business model for the AI era, where AI summaries of news don’t have to mean lost revenues. The startup, built by former Twitter engineers, offers a news-reading app that helps readers understand all angles of the story by leveraging AI to summarize news from across a range of publishers.",
            imgurl: "https://techcrunch.com/wp-content/uploads/2024/06/3_2.png?resize=1200,900",
            website: "https://techcrunch.com/2024/06/11/ai-news-reader-particle-adds-publishing-partners-and-10-9m-in-new-funding/",
        },
        {
            Category:"Latest",
            Title: "Fabless AI chip makers Rebellions and Sapeon to merge as competition heats up in global AI hardware industry",
            Description: "South Korea’s fabless AI chip industry saw a slew of fundraising events over the last couple of years as demand for hardware to power AI applications skyrocketed, and it seems the space is already consolidating. Two of the country’s prominent fabless AI chip startups, Rebellions and Sapeon, have agreed to merge, the companies said on Wednesday.",
            imgurl: "https://techcrunch.com/wp-content/uploads/2024/05/GettyImages-2026266993.jpg?resize=1200,686",
            website: "https://techcrunch.com/2024/06/12/fabless-ai-chip-makers-rebellions-and-sapeon-to-merge-as-competition-heats-up-in-global-ai-hardware-industry/",
        },  
        {
            Category:"APPS",
            Title: "iOS 18 cracks down on apps asking for full address book access",
            Description: "iOS apps that build their own social networks on the back of users’ address books may soon become a thing of the past. In iOS 18, Apple is cracking down on the social apps that ask users’ permission to access their contacts — something social apps often do to connect users with their friends or make suggestions for who to follow. Now, Apple is adding a new two-step permissions pop-up screen that will first ask users to allow or deny access to their contacts, as before, and then, if the user allows access, will allow them to choose which contacts they want to share, if not all.",
            imgurl: "https://techcrunch.com/wp-content/uploads/2024/06/wwdc24-ios18-.jpg?resize=1200,675",
            website: "https://techcrunch.com/2024/06/12/ios-18-cracks-down-on-apps-asking-for-full-address-book-access/",
        },
        {
            Category:"APPS",
            Title: "Google’s June Pixel feature drop brings Gemini Nano AI model to Pixel 8 and 8a users",
            Description: "Google is finally making its Gemini Nano AI model available to Pixel 8 and 8a users after teasing it in March. The June Pixel drop will allow users to access the model as a developer option. Apart from that, the feature drop includes Display Port connectivity support for Pixel 8 and Pixel 8a, reverse phone number lookup for unknown numbers, fall and crash detection for Pixel Watch 2, and doorbell notifications on the Pixel tablet.",
            imgurl: "https://techcrunch.com/wp-content/uploads/2024/05/Screenshot-2024-05-06-at-5.41.56%E2%80%AFPM.webp?resize=1200,703",
            website: "https://techcrunch.com/2024/06/11/googles-june-pixel-drop-brings-gemini-nano-ai-model-to-pixel-8-and-8a-users/",
        },
        {
            Category:"APPS",
            Title: "BeReal is being acquired by mobile apps and games company Voodoo for €500M",
            Description: "Voodoo, a French mobile apps and games publisher, has acquired BeReal for €500 million. As part of the acquisition, BeReal co-founder and CEO Alexis Barreyat will leave the company after a transition period. Aymeric Roffé, the CEO of Wizz, one of Voodoo’s social media apps, will take over as BeReal’s CEO.",
            imgurl: "https://techcrunch.com/wp-content/uploads/2024/06/voodoo-x-bereal-illustration.png?resize=1200,675",
            website: "https://techcrunch.com/2024/06/11/bereal-is-being-acquired-by-mobile-apps-and-games-company-voodoo-for-e500m/",
        },
        {
            Category:"Latest",
            Title: "Calculator for iPad does the math for you",
            Description: "One way to know for sure that you’re at a developer conference: The crowd gets really excited when you announce a new Calculator app. The addition of the app got (by far) the biggest applause pop at WWDC 2024 so far. Granted, the company has an hour or so left to announce all of its intelligence features.",
            imgurl: "https://techcrunch.com/wp-content/uploads/2024/06/wwdc24-ios-18-calculator-math-notes-02.jpg?resize=1200,675",
            website: "https://techcrunch.com/2024/06/10/calculator-for-ipad-does-the-math-for-you/",
        },
        {
            Category:"Latest",
            Title: "AI and blockchains might need one another to evolve, according to new report",
            Description: "Some of the biggest technological innovations have transpired over the past few years across the artificial intelligence and blockchain industries, independently.And even though the two sectors are reaching different levels of mainstream adoption, they are also facing challenges that the other could potentially help alleviate, according to a new report TenSquared Capital (10SQ) shared exclusively with TechCrunch+.",
            imgurl: "https://techcrunch.com/wp-content/uploads/2024/01/GettyImages-1336275511.jpg?resize=1200,800",
            website: "https://techcrunch.com/2024/02/01/ai-and-blockchains-might-need-one-another-to-evolve/",
        },
        {
            Category:"WEB3",
            Title: "Web3 games don’t need to highlight blockchain elements to succeed",
            Description: "Blockchain-based games want to go mainstream, but the million-dollar question is: What’s the best way to do it? According to some web3 game developers, there might not be just one right answer.",
            imgurl: "https://techcrunch.com/wp-content/uploads/2022/10/GettyImages-1330577431.jpg?resize=1200,900",
            website: "https://techcrunch.com/2023/07/07/web3-games-dont-need-to-highlight-blockchain-elements-to-succeed/",
        },
        {
            Category:"WEB3",
            Title: "Alibaba Cloud, Avalanche partner to deploy metaverses on the blockchain",
            Description: "Alibaba Cloud, the digital technology and intelligence division of Alibaba Group, has partnered with layer-1 blockchain Avalanche, the companies exclusively told TechCrunch ahead of an announcement at the Avalanche Summit II conference.",
            imgurl: "https://techcrunch.com/wp-content/uploads/2023/05/IMAGE-2023-05-04-15_24_31.jpg",
            website: "https://techcrunch.com/2023/05/04/alibaba-cloud-avalanche-partner-to-deploy-metaverses-on-the-blockchain/",
        },
        {
            Category:"WEB3",
            Title: "Solana’s co-founder sees potential for its blockchain to be the ‘Apple of crypto’",
            Description: "As some crypto companies gain mainstream adoption through partnerships, alliances or deals with big brand names, others are operating by the beat of their own drum and not worrying about whether a big label is with them.",
            imgurl: "https://techcrunch.com/wp-content/uploads/2023/05/GettyImages-1240744602-e1683066483938.webp?resize=1200,800",
            website: "https://techcrunch.com/2023/05/29/solanas-crypto-raj-gokal-interview/",
        },
        {
            Category:"WEB3",
            Title: "0G Labs launches with whopping $35M pre-seed to build a modular AI blockchain",
            Description: "As the crypto space heats back up, so has funding for new startups. 0G Labs, a web3 infrastructure firm,” has raised $35 million in a pre-seed round, the team exclusively told TechCrunch.",
            imgurl: "https://techcrunch.com/wp-content/uploads/2022/11/GettyImages-1306800215.jpg?resize=1200,674",
            website: "https://techcrunch.com/2024/03/26/0g-labs-launches-with-whopping-35m-pre-seed-to-build-a-modular-ai-blockchain/",
        },
        {
            Category:"startup",
            Title: "Fabless AI chip makers Rebellions and Sapeon to merge as competition heats up in global AI hardware industry",
            Description: "South Korea’s fabless AI chip industry saw a slew of fundraising events over the last couple of years as demand for hardware to power AI applications skyrocketed, and it seems the space is already consolidating. Two of the country’s prominent fabless AI chip startups, Rebellions and Sapeon, have agreed to merge, the companies said on Wednesday.",
            imgurl: "https://techcrunch.com/wp-content/uploads/2024/05/GettyImages-2026266993.jpg?resize=1200,686",
            website: "https://techcrunch.com/2024/06/12/fabless-ai-chip-makers-rebellions-and-sapeon-to-merge-as-competition-heats-up-in-global-ai-hardware-industry/",
        },
        {
            Category:"startup",
            Title: "Let there be Light! Danish startup exits stealth with $13M seed funding to bring AI to general ledgers",
            Description: "It’s not the sexiest of subject matters, but someone needs to talk about it: The CFO tech stack — software used by the chief financial officers of the world — is ripe for disruption. That’s according to Jonathan Sanders, CEO and co-founder of fledgling Danish startup Light, which exits stealth Wednesday with $13 million in a seed round of funding led by European VC giant Atomico.",
            imgurl: "https://techcrunch.com/wp-content/uploads/2024/06/Light-co-founder-Filip-Kozjak-CTO-and-Jonathan-Sanders-CEO-2JPG-dime-e1718023590567.jpg?w=1024",
            website: "https://techcrunch.com/2024/06/12/let-there-be-light-danish-startup-exits-stealth-with-13m-seed-funding-to-bring-ai-to-general-ledgers/",
        },
        {
            Category:"startup",
            Title: "Court halts Byju’s second rights issue as $200M fundraise falters",
            Description: "Byju’s is having a hard time raising the full $200 million from its rights issues that its founder had previously claimed was oversubscribed, sources familiar with the matter told TechCrunch. And now, India’s National Company Law Tribunal has restrained the company from proceeding with its second rights issue amid allegations of oppression and mismanagement by its shareholders.",
            imgurl: "https://techcrunch.com/wp-content/uploads/2023/04/GettyImages-1249691017.jpg?resize=1200,800",
            website: "https://techcrunch.com/2024/06/13/court-halts-byjus-second-rights-issue-as-200m-fundraise-falters/",
        },
        {
            Category:"startup",
            Title: "Raspberry Pi is now a public company",
            Description: "Who would have thought that Raspberry Pi, the maker of the tiny, cheap, single-board computers, would become a public company? Yet, this is exactly what’s happening: Raspberry Pi priced its IPO on the London Stock Exchange on Tuesday morning at £2.80 per share, valuing it at £542 million, or $690 million at today’s exchange rate.",
            imgurl: "https://techcrunch.com/wp-content/uploads/2019/06/Raspberry-Pi-4-3b.jpg?resize=1200,900",
            website: "https://techcrunch.com/2024/06/11/raspberry-pi-is-now-a-public-company-as-its-shares-pops-after-ipo-pricing/",
        },
        {
            Category:"startup",
            Title: "With €50 million to invest, Italian Founders Fund looks for entrepreneurs with global ambitions",
            Description: "While funding for Italian startups has been growing, the country still ranks eighth in Europe by VC investment, according to Dealroom.Newly created Italian Founders Fund (IFF) hopes to help with the catching up, both in quantity and in quality. With €50 million to invest into 25 companies, it also positions itself as a sector agnostic, founder friendly fund that understands the pain points of entrepreneurs.",
            imgurl: "https://techcrunch.com/wp-content/uploads/2024/06/Italian-Founders-Fund-team_L-to-R_-Ascanio-Orombelli-Monica-Conti-Lorenzo-Franzi-and-Alessandra-Santi.jpg?resize=1200,800",
            website: "https://techcrunch.com/2024/06/09/with-e50-million-to-invest-italian-founders-fund-looks-for-entrepreneurs-with-global-ambitions/",
        },
    ]

    const filteredData = data.filter((ele => ele.Category === category));

    function renderCard({title, description, imgurl, website}){
        return(
            <div className='card-line'>
                <div className='card'>
                    <a href={website} className="title" style={{fontWeight: '900', fontSize: '25px'}} rel="noopener noreferrer">{title.slice(0, 60)}</a>
                    <div className="desc">{description.slice(0 , 250)}...</div>
                    <ImageResizer src={imgurl} alt={title} width={267} height={150} />
                </div>
                <div className="line"></div>
            </div>
        );
    }

  return (
    <div className='cards'>
        {filteredData.map((ele)=> {
            return(renderCard({title: ele.Title, description: ele.Description, imgurl: ele.imgurl, website: ele.website}))
        })}
        {console.log(filteredData)}
    </div>
  )
}

export default Card