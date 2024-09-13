const express = require('express');
const path = require('path');
const app = express();
const cors=require('cors')

// Serve static files from the 'mindzen' folder
app.use(express.static(path.join(__dirname, '..')));
app.use(cors());

app.get('/api/data', (req, res) => {
    res.json([
        {
            title: "How Rising Air Pollution Affect Mental Health? 5 Ways To Manage It",
            image: "https://static.india.com/wp-content/uploads/2023/11/girl-wearing-face-mask-extreme-pollution_23-2150880193.jpg?impolicy=Medium_Widthonly&w=700",
            description: "Rising air pollution does not only entail side effects on physical health, it may as well affect your cognitive functioning and mental health as well.",
            url: "https://www.india.com/health/how-rising-air-pollution-affect-mental-health-5-ways-to-manage-it-6516956/"
        },
        {
            title: "Your Manager Can Affect Your Mental Health As Much As Your Partner",
            image: "https://static.tnn.in/thumb/msid-105351704,thumbsize-39984,width-1280,height-720,resizemode-75/105351704.jpg",
            description: "Owing to the growing competition, a person is left with no choice but to invest more time professionally to survive in this fast-pacing.",
            url: "https://www.timesnownews.com/lifestyle/relationships/work/your-manager-can-affect-your-mental-health-as-much-as-your-partner-study-article-105351379"
        },
        {
            id: 3,
            title: "Maternal Stress During Pregnancy Impacts Child Mental Health",
            description: "Research reveals that children of mothers experiencing high stress, anxiety, or depression during pregnancy may have a greater risk of mental health and behavior issues throughout childhood and adolescence.",
            image: "https://neurosciencenews.com/files/2023/11/maternal-stress-child-mental-health-neurosicnece.jpg.webp",
            link: "https://www.sciencedaily.com/releases/2023/11/231116141030.htm"
        },
        {
            id: 4,
            title: "Mental health of workers trapped in Uttarkashi tunnel may be affected",
            description: "The labourers trapped in a tunnel in Uttarakhand’s Uttarkashi from the day of Diwali have not been rescued yet. It has been more than eight days since 41 labourers were trapped in the tunnel, hence essential items like food and medicines are being supplied to the labourers through pipes inside the tunnel.",
            image: "https://thenewsmill.com/wp-content/uploads/2023/11/mental-health-of-workers-trapped-in-uttarkashi-tunnel-may-be-affected-psychiatrist.jpg",
            link: "https://www.sciencedaily.com/releases/2023/11/231116141030.htm"
        },
        {
            id: 5,
            title: "How dogs boost our mental health and recovery, according to science",
            description: "We've long said that dogs are man's best friend — but studies finally back it up. Why it matters: At a time when loneliness has become a serious health concern, recent research suggests there's something special about the way canine buddies boost our mood and longevity.",
            image: "https://images.axios.com/rPz7kT9M5uclirqVKFz1m9GYlvo=/314x77:4032x2168/1920x1080/2023/11/17/1700254057178.jpg?w=1920",
            link: "https://www.axios.com/2023/11/21/dog-research-mental-health-stress"
        },
        {
            id: 6,
            title: "New York Times investigation finds major breakdowns in New York's mental health services",
            description: "A year-long investigation by The New York Times found major breakdowns in New York City's and the state's systems designed to treat people with serious mental illness.",
            image: "https://images.unsplash.com/photo-1543716091-a840c05249ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9yayUyMGNpdHl8ZW58MHx8MHx8fDA%3D",
            link: "https://www.cbsnews.com/newyork/news/new-york-times-investigation-major-breakdowns-new-york-mental-health-services/"
        },
        {
            id: 7,
            title: "Mental Health Matters: '48, An Experiential Memoir on Homelessness'",
            description: "\"I was really struggling, taking in a lot of everything, reflecting not just for me but for others who are in shelters, live on streets, weeks on end,\" he recalled.",
            image: "https://news3lv.com/resources/media2/16x9/full/1024/center/80/ababe9a6-3680-48bd-8ce6-c6d5c13e9bac-large16x9_thumb_110869.png",
            link: "https://news3lv.com/news/local/mental-health-matters-48-an-experiential-memoir-on-homelessness"
        },
        {
            id: 8,
            title: "New Report Shows Poor Mental Health on the Rise for Health Care Workers",
            description: "According to a new survey by the Centers for Disease Control and Prevention, reported poor mental health days went up from 3.3 days in 2018 to 4.5 days in 2022 during the previous 30 days. The number of workers who reported feeling burnout very often also went up from 11.6% to 19%",
            image: "https://www.afge.org/link/4d8c0aacd0c6450f9cde4b9e3a4a258b.aspx",
            link: "https://www.afge.org/article/new-report-shows-poor-mental-health-on-the-rise-for-health-care-workers/"
        },
        {
            id: 9,
            title: "States sue Meta claiming its social platforms are addictive and harm children’s mental health",
            description: "Dozens of U.S. states, including California and New York, are suing Meta Platforms Inc. for harming young people and contributing to the youth mental health crisis by knowingly and deliberately designing features on Instagram and Facebook that addict children to its platforms.",
            image: "https://mspoweruser.com/wp-content/uploads/2022/04/meta-logo-2048x1972.png",
            link: "https://apnews.com/article/metachildrenteensharmslawsuit-17858802d76143d358e38ee15150dc94"
        },
        {
            id: 10,
            title: "How to find support for mental health through addiction",
            description: "Dealing with addiction is a battle that can last a lifetime. Taking the first step toward help can often be the hardest part. “I was my own worst enemy,” said Jeff Fyvie, director of peer services at BestSelf Behavioral Health.",
            image: "https://s7d2.scene7.com/is/image/TWCNews/Screenshot%202023-11-08%20at%203.55?wid=1250&hei=703&$wide-bg$",
            link: "https://spectrumlocalnews.com/nys/central-ny/news/2023/11/20/how-to-find-support-for-mental-health-through-addiction"
        },
        {
            id: 11,
            title: "First Military Mental Health Symposium Set for Dec. 1",
            description: "Natchaug Hospital is hosting Hartford HealthCare’s first-ever Military Mental Health Symposium on Dec. 1 to help support veterans and connect them with care. The symposium will be in person at the HHC East Region System Support Office, 11 Stott Ave., Norwich and also on Zoom.",
            image: "https://healthnewshub.org/wp-content/uploads/2023/11/Military-Mental-Health-Symposium.png",
            link: "https://hartfordhospital.org/about-hh/news-center/news-detail?articleId=52651&publicid=395"
        },
        {
            id: 12,
            title: "K-pop star Rosé joins first lady Jill Biden to talk mental health",
            description: "SAN FRANCISCO (AP) — K-pop superstar Rosé said Friday at a mental health awareness event hosted by first lady Jill Biden that it’s important for the world to understand that famous people grapple with emotional struggles, too.",
            image: "https://dims.apnews.com/dims4/default/be3655f/2147483647/strip/true/crop/3000x1944+0+0/resize/1200x779!/quality/90/?url=https%3A%2F%2Fapnews.com%2Fimage%2F530cd4068a3d493f803b761de59cb8b8",
            link: "https://apnews.com/article/k-pop-ros%C3%A9-mental-health-first-lady-jill-biden-ef4623d05b0186f5f67c7f7527d11d7c"
        }
        // Add the rest of the data here
    ]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});









