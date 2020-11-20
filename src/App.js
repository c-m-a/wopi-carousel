import { useState } from 'react';

import Articles from './components/Articles';
import Slider from './components/Slider';

import './App.css';

const init = [
  {
    id: 1,
    title: 'WIPO Director General Daren Tang Takes Office',
    image: 'https://www.wipo.int/export/sites/www/shared/pics/hero/dg_tang_oct1_2020_845.jpg',
    summary: `Daren Tang officially assumed his functions as Director General of the World Intellectual Property Organization on October 1, 2020, starting a six-year mandate at the helm of the Organization.`,
  },
  {
    id: 2,
    image: 'https://www.wipo.int/export/sites/www/shared/pics/hero/wipo_assemblies_hero_845.jpg',
    title: 'WIPO Assemblies',
    summary: `
      The 61<sup>st</sup> series of meetings of the Assemblies took place in Geneva from September 21 to 24, 2020.
      <ul class="dot__list">
        <li><a href="http://ocms.wipo.int/publications/en/details.jsp?id=4517">Report of the Director General to the 2020 WIPO Assemblies</a></li>
        <li><a href="http://ocms.wipo.int/pressroom/en/articles/2020/article_0020.html">Opening press release</a></li>
        <li><a href="http://ocms.wipo.int/pressroom/en/articles/2020/article_0023.html">Closing press release</a></li>
      </ul>
    `,
  },
  {
    id: 3,
    image: 'https://www.wipo.int/export/sites/www/shared/pics/hero/wipolex_2020_hero_845.jpg',
    title: 'WIPO Launches New Free Database of Judicial Decisions on IP from Around the World',
    summary: `WIPO Lex-Judgments is a new database that provides free-of-charge access to leading judicial decisions related to IP law from around the world. As technological innovation often outpaces the ability of legislatures and governments to create new rules and regulations, courts across the world are increasingly facing common issues of a highly sophisticated nature. WIPO-Lex Judgments contributes to a greater overall understanding of how courts are handling these issues.`,
  },
  {
    id: 4,
    image: 'https://www.wipo.int/export/sites/www/shared/pics/hero/ai_exhibit_hero_845.jpg',
    link: '#',
    title: 'Visit WIPO’s Virtual Exhibition on AI and IP',
    summary: `
      Visit the newly launched "<a href="http://ocms.wipo.int/exhibition-ai/">WIPO: AI and IP, A Virtual Experience</a>," an immersive online exhibition using the latest 360 degree scanning technology to foster a more-comprehensive understanding of the relationship between AI and IP policy and the questions facing policymakers. Interactive elements include AI-created music, neural networks with human-like abilities and robotic artists, like the humanoid Ai-Da.
      <ul class="dot__list">
        <li><a href="http://ocms.wipo.int/pressroom/en/articles/2020/article_0019.html">Press release</a></li>
        <li>Due to the rich media content included in the virtual exhibition, it is best viewed via a high-bandwidth connection.
        </li>
      </ul>
    `,
  },
  {
    id: 5,
    image: 'https://www.wipo.int/export/sites/www/shared/pics/hero/wipopearl_2020_hero_845.jpg',
    link: '#',
    title: 'WIPO Pearl Adds COVID-19 Terminology to Stimulate Anti-Pandemic Innovation',
    summary: `
      The WIPO Pearl terminology database has added some 1,500 new COVID-19-related terms in 10 languages, helping innovators targeting new coronavirus treatments and diagnostics with a baseline set of terms and their multilingual equivalents. This advancement will foster international collaboration and promote easier access to information in patent documents and other public resources produced around the world.
    `,
  },
];


function App() {
  const [articles, setArticles] = useState(init);

  return (
    <div className="app">
      <Slider articles={articles} />
      <Articles articles={articles} />
    </div>
  );
}

export default App;
