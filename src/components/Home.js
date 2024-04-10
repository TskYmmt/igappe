// src/components/Home.js
import React from 'react';

const Home = () => {
  return (
    <main className="main-content">
      <h1>
        <img className="logo-img" src="/img/logo_w.png" alt="挽肉と米" />
      </h1>
      <div className="bg-video is-pc">
        <video className="bg-video-content" src="/movie/pc.mp4" autoPlay loop playsInline muted></video>
        <div className="bg-video-overlay"></div>
      </div>
      <div className="scroll-indicator is-pc">
        <img className="scroll-text" src="/img/scroll.svg" alt="" />
        <div className="scroll-line"></div>
      </div>
      <div className="content-wrap">
        {/* Add content */}
        <div className="concept-section">
          <img className="concept-title observe-obj active" src="/img/3tate.png" alt="挽きたて、焼きたて、炊き立て" />
          <div className="concept-text observe-obj active">
            毎朝、店内で挽いた牛肉100％の挽肉を、<br />
            お客様の前で炭火焼きにし、<br />
            炊きたての羽釜ごはんと一緒に。<br />
            挽きたて、焼きたて、炊きたての<br />
            「３たて」にこだわり、<br />
            「最高においしい瞬間」をお届けします。<br />
            ぜひ、お楽しみください 。
          </div>
          <div className="video-link-wrap">
            <a className="video-link" href="https://youtu.be/LZ7862dS_nc" target="_blank">ブランドムービーを見る ＞</a>
          </div>
          <div className="store-list observe-obj active">
            <div className="store-list-title">店舗</div>
            <div className="store-list-content">
              <a className="store-link" href="/kichijoji/">挽肉と米 吉祥寺 ＞</a>
              <a className="store-link" href="/shibuya/">挽肉と米 渋谷 ＞</a>
              <a className="store-link" href="/kyoto/">挽肉と米 京都 ＞</a>
              <a className="store-link" href="/taipei_zhongshan/">挽肉と米 台北華山 ＞</a>
              <a className="store-link" href="/imaizumi/">挽肉と米 今泉 ＞</a>
            </div>
          </div>
        </div>
        {/* Add more content */}
      </div>
    </main>
  );
};

export default Home;