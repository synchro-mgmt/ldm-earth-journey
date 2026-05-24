const { useState, useEffect, useRef } = React;

/* ============================================================
   テンプレート差し替え変数
   ============================================================ */
const SEMINAR_TITLE_JA = "LDMアース";
const SEMINAR_TITLE_EN = "LDM Earth";

const EDITION = {
  axisLabel: "BODY 軸",
  axisJa: "地球を生きる旅",
  editionName: SEMINAR_TITLE_JA,
  editionEn:   SEMINAR_TITLE_EN,
  vol: "Vol.01",
  catch: { line1: "地球に来た理由を、", line2: "思い出す4時間" },
  date: { jp: "2026年6月6日（土）13:00 〜 17:00", short: "06.06.SAT" },
  venue: "オンライン（Zoom）",
};

const APPLY_URL = "https://line.me/ti/g2/FXS4eaVDHKVHVT07lwLRfsO_Vjts8qZ2Glzklg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default";

const LINKS = {
  commercial: "https://co.synchronicity-management.jp/p/commercial",
  privacy:    "https://co.synchronicity-management.jp/p/privacy",
  contact:    "https://synchronicity-management.jp/",
};

/* ============================================================
   装飾コンポーネント
   ============================================================ */
const SparkleSvg = ({ size = 16, color = "currentColor", style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" style={style} aria-hidden="true">
    <path d="M10 0 C 10.5 6.5, 13.5 9.5, 20 10 C 13.5 10.5, 10.5 13.5, 10 20 C 9.5 13.5, 6.5 10.5, 0 10 C 6.5 9.5, 9.5 6.5, 10 0 Z" fill={color} />
  </svg>
);

const LineIcon = ({ size = 14, color = "currentColor", style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" style={style} aria-hidden="true">
    <path d="M12 3C6.5 3 2 6.5 2 11c0 2.7 1.7 5.1 4.3 6.6-.2.8-.7 2.4-.8 2.8-.1.5.2.5.4.4.2-.1 2.6-1.8 3.7-2.5.8.1 1.6.2 2.4.2 5.5 0 10-3.5 10-8S17.5 3 12 3z" fill={color} />
    <circle cx="8" cy="11" r="1.2" fill="#fff" />
    <circle cx="12" cy="11" r="1.2" fill="#fff" />
    <circle cx="16" cy="11" r="1.2" fill="#fff" />
  </svg>
);

const Divider = ({ tone = "gold" }) => (
  <div className={`sec-divider tone-${tone}`} aria-hidden="true">
    <span className="sec-divider__line" />
    <SparkleSvg size={14} />
    <span className="sec-divider__line" />
  </div>
);

const CornerSparkles = () => (
  <div className="corner-sparkles" aria-hidden="true">
    {["tl", "tr", "bl", "br"].map((p) => (
      <span key={p} className={`cs cs-${p}`}>
        <SparkleSvg size={p === "tl" || p === "br" ? 14 : 10} />
      </span>
    ))}
  </div>
);

const WatercolorBackdrop = ({ variant = "warm" }) => (
  <div className={`wc-backdrop wc-${variant}`} aria-hidden="true" />
);

const InlineBreak = () => (
  <div className="inline-break reveal" aria-hidden="true">
    <span /><span /><span />
  </div>
);

const SceneMarker = () => (
  <div className="scene-marker" aria-hidden="true">
    <SparkleSvg size={12} />
    <span className="scene-marker__dot" />
    <SparkleSvg size={14} />
    <span className="scene-marker__dot" />
    <SparkleSvg size={12} />
  </div>
);

/* Reusable in-flow image with watercolor framing */
const LetterImage = ({ src, alt = "", className = "", overlay, overlayTone = "light", sizes = "100vw" }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <figure className={`letter-image reveal ${className} ${loaded ? "is-loaded" : ""}`}>
      <img
        src={src}
        alt={alt}
        loading="eager"
        fetchpriority="high"
        decoding="async"
        sizes={sizes}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
      />
      {overlay ? (
        <div className={`letter-image__overlay tone-${overlayTone}`}>
          <div className="letter-image__overlay-inner">
            {overlay}
          </div>
        </div>
      ) : null}
    </figure>
  );
};

/* Small flower-of-life break between sections */
const FlowerBreak = () => (
  <div className="flower-break" aria-hidden="true">
    <img src="assets/lp-img-6-flower-of-life.png" alt="" loading="lazy" decoding="async" />
  </div>
);

function StarField({ count = 40, color }) {
  const stars = Array.from({ length: count }, () => ({
    top: Math.random() * 100, left: Math.random() * 100,
    delay: Math.random() * 4, dur: 3 + Math.random() * 4,
    lg: Math.random() > 0.7,
  }));
  return (
    <div className="stars" aria-hidden="true">
      {stars.map((s, i) => (
        <span key={i} className={s.lg ? "lg" : ""}
          style={{ top: `${s.top}%`, left: `${s.left}%`,
            background: color || undefined,
            "--delay": `${s.delay}s`, "--dur": `${s.dur}s` }} />
      ))}
    </div>
  );
}

function MoteField({ count = 14 }) {
  const motes = Array.from({ length: count }, () => ({
    left: Math.random() * 100, delay: Math.random() * 18,
    dur: 14 + Math.random() * 12, x: -40 + Math.random() * 80,
  }));
  return (
    <div className="motes" aria-hidden="true">
      {motes.map((m, i) => (
        <span key={i} style={{
          left: `${m.left}%`, "--delay": `${m.delay}s`,
          "--dur": `${m.dur}s`, "--x": `${m.x}px` }} />
      ))}
    </div>
  );
}

/* ---------- Reading progress ---------- */
function useReadingProgress() {
  const ref = useRef(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      const h = document.documentElement;
      const winScroll = h.scrollTop || document.body.scrollTop;
      const height = h.scrollHeight - h.clientHeight;
      const pct = height > 0 ? (winScroll / height) * 100 : 0;
      if (ref.current) ref.current.style.width = pct + "%";
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return ref;
}

function ReadingProgress() {
  const ref = useReadingProgress();
  return (
    <div className="reading-progress" aria-hidden="true">
      <div className="reading-progress__bar" ref={ref} />
    </div>
  );
}

/* ---------- Floating CTA ---------- */
function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 768px)");
    let ticking = false;
    const threshold = () => (mql.matches ? 0.05 : 0.15);
    const update = () => {
      const h = document.documentElement;
      const winScroll = h.scrollTop || document.body.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      const pct = max > 0 ? winScroll / max : 0;
      setVisible(pct >= threshold());
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    if (mql.addEventListener) mql.addEventListener("change", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (mql.removeEventListener) mql.removeEventListener("change", onScroll);
    };
  }, []);

  return (
    <div
      className={`floating-cta ${visible ? "is-visible" : ""}`}
      role="complementary"
      aria-label="オープンチャットへのご案内"
    >
      <a
        href={APPLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-cta__btn"
      >
        <LineIcon size={18} color="#D7E2D0" />
        <span className="floating-cta__text">オープンチャットに入る</span>
        <span className="floating-cta__arrow">→</span>
      </a>
    </div>
  );
}

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -50px 0px" });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ============================================================
   HERO
   ============================================================ */
function Hero() {
  return (
    <section className="hero" data-screen-label="01 Hero">
      <div className="hero__bg" />
      <StarField count={50} />
      <MoteField count={18} />

      <div className="hero__inner">
        <div className="hero__eyebrow reveal">Earth Journey {EDITION.vol}</div>
        <div className="hero__edition reveal delay-1">
          <strong>{EDITION.editionEn}</strong>　<span className="sep">|</span>　VOL.01 · 4 Hours
        </div>

        <p className="hero__entry-note reveal delay-1">
          参加はLINEオープンチャットから。<span className="sep">／</span>Zoomリンクもそこに届きます。
        </p>

        <div className="hero__catch-plate reveal delay-1">
          <h1 className="hero__title">
            {EDITION.catch.line1}<br />
            <em>{EDITION.catch.line2}</em>
          </h1>
        </div>

        <p className="hero__sub reveal delay-2">
          <strong className="hero__sub-title">{EDITION.editionName}</strong>
          <span className="divider">—</span>
          アースジャーニー 公開セミナー
        </p>

        <div className="hero__statement reveal delay-2">
          4時間、堀内が本気でやる。
        </div>

        <a
          href={APPLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hero__quick-link reveal delay-2"
        >
          <span className="hero__quick-link-arrow">→</span>
          <span className="hero__quick-link-text">オープンチャットを開く</span>
        </a>

        <ul className="hero__metabar reveal delay-3">
          <li>2026/6/6（土）13:00-17:00</li>
          <li>オンライン（Zoom）</li>
          <li>参加無料</li>
          <li>アーカイブ配信あり</li>
        </ul>

        <div className="hero__instructor reveal delay-3">
          <strong>堀内 恭隆</strong>
          <span className="sep">|</span>
          LDM® 開発者 / 第6次元エンジニア
        </div>

        <a href={APPLY_URL} target="_blank" rel="noopener noreferrer"
          className="cta cta--lg reveal delay-4">
          <LineIcon size={20} color="#06C755" />
          LINEオープンチャットへどうぞ
          <span className="cta__arrow">→</span>
        </a>
        <div className="cta-note on-dark reveal delay-4">
          <LineIcon size={12} />
          LINE オープンチャットで参加
        </div>
      </div>

      <div className="scroll-hint">Scroll</div>
    </section>
  );
}

/* ============================================================
   AXIS RIBBON
   ============================================================ */
function AxisRibbon() {
  return (
    <div className="axis-ribbon" data-screen-label="02 Axis">
      <span className="axis-pill is-current">
        <span className="dot" />Body / 地球を生きる旅
      </span>
      <span className="axis-divider">—</span>
      <span className="axis-pill is-mind">
        <span className="dot" />Mind / 生命を巡る旅
      </span>
      <span className="axis-divider">—</span>
      <span className="axis-pill is-spirit">
        <span className="dot" />Spirit / 宇宙と繋がる旅
      </span>
    </div>
  );
}

/* ============================================================
   CH 1 — 書き出し + ポートレート
   ============================================================ */
function LetterGreeting() {
  return (
    <section className="letter letter--greeting" data-screen-label="03 Greeting">
      <WatercolorBackdrop variant="lavender" />
      <CornerSparkles />
      <div className="letter__inner">
        <div className="greeting-grid">
          <figure className="letter-portrait reveal">
            <div className="letter-portrait__halo" aria-hidden="true" />
            <div className="letter-portrait__photo" />
            <SparkleSvg size={14} style={{ position: "absolute", top: -6, right: 4, color: "var(--c-cta)" }} />
            <SparkleSvg size={10} style={{ position: "absolute", bottom: 14, left: -8, color: "var(--c-cta)" }} />
            <figcaption className="letter-portrait__caption">
              <span className="letter-portrait__caption-main">やすたか</span>
              <span className="letter-portrait__caption-sub">堀内 恭隆</span>
            </figcaption>
          </figure>

          <div className="greeting-text">
            <div className="reveal">
              <p className="letter__greeting">
                こんにちは、<span className="hl">堀内 恭隆</span> です。
              </p>
            </div>
            <div className="reveal delay-1">
              <p className="letter__para">
                今日はここまで来てくれて、ありがとうございます。<br />
                お手紙を読むつもりで、少しだけお付き合いください。
              </p>
              <p className="letter__para letter__para--bridge">
                「<em>地球に来た理由を、思い出す4時間</em>」と書きました。<br />
                なぜ、いまこのタイミングでこの時間を持ちたいのか。<br />
                <em>最近の僕の体験から、少しお話しさせてください。</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CH 2 — 動き始める前の「間」
   ============================================================ */
function LetterNow() {
  return (
    <section className="letter letter--now" data-screen-label="04 Now">
      <WatercolorBackdrop variant="warm" />
      <CornerSparkles />
      <div className="letter__inner letter__inner--narrow">
        <div className="reveal">
          <p className="letter__para letter__para--lead">
            最近、自分の中で、<br />
            <em>「動き始める前の間（ま）」</em> が、長くなってきています。
          </p>
        </div>

        <div className="reveal">
          <p className="letter__para">
            すぐに反応しない。すぐに動かない。<br />
            一拍、自分の中の動きを待つ。
          </p>
          <p className="letter__para letter__para--accent">
            そうすると、次の動きが、<br />
            <em>頭からじゃなく、もっと深いところから出てくる</em>。
          </p>
        </div>

        <InlineBreak />

        <div className="reveal">
          <p className="letter__para">
            長いあいだ、湧いてくるインスピレーションを形にする方法論を磨いてきました。<br />
            ペルーのシャーマン儀式、インドのリンポチェ様、スリランカでの修行、毎日の実践。
          </p>
          <p className="letter__para">
            でも最近、その方法論を <em>「生きる前提」自体</em> が変わり始めています。
          </p>
          <p className="letter__para letter__para--accent">
            「何かをコントロールして、結果を出す」ではなく、<br />
            「地球と宇宙と繋がった、ひとつの生命体として、流れに乗る」。
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CH 3 — 黙る時間（具体エピソード）
   ============================================================ */
function LetterScene() {
  return (
    <section className="letter letter--scene" data-screen-label="05 Scene">
      <WatercolorBackdrop variant="warm" />
      <div className="letter__inner letter__inner--narrow">
        <SceneMarker />

        <LetterImage
          src="assets/lp-img-1-light-orb.png"
          alt="心の中にふっと灯る光の球。「あ、これだ」と気づいた瞬間の水彩イメージ"
          className="letter-image--orb"
          overlayTone="dark"
          overlay={<>8 割は、<em>要らなかった</em>。</>}
        />

        <div className="reveal">
          <p className="letter__para letter__scene-line">
            あるとき、自分が話している途中で、<br />
            「リスクヘッジ」や「補足」や「でもね」を、<br />
            無意識に足してしまっていることに気づいたんです。
          </p>
          <p className="letter__para">
            ズバン、と言いたいことを言って、止まればいい。
          </p>
          <p className="letter__para">
            ところが、その後に「でも、〇〇な場合はね」「ただし△△は…」って、<br />
            気づくと相手の心が動く前に、言葉で全部覆ってしまっている。
          </p>

          <blockquote className="letter__inner-quote">
            それを、やめることにしました。<br />
            <em>ズバンと言って、止まる。</em>
          </blockquote>

          <p className="letter__para">
            そうしたら、言いたかったことの8割は、要らなかった。
          </p>
          <p className="letter__para">
            むしろ、その8割があったから、<em>いちばん大事な2割が相手に届いていなかった</em> ことに、気づきました。
          </p>
          <p className="letter__para">
            そのことに気づいた瞬間、<em>なんだか、肩のあたりがふっと軽くなった</em>んです。
          </p>
          <p className="letter__para letter__para--accent">
            <em>それが、最近の小さな、でも大きな変化です。</em>
          </p>
        </div>

        <SceneMarker />
      </div>
    </section>
  );
}

/* ============================================================
   CH 4 — 連結 → AIエージェント
   ============================================================ */
function LetterContext() {
  return (
    <section className="letter letter--context" data-screen-label="06 Context">
      <WatercolorBackdrop variant="soft" />
      <div className="letter__inner letter__inner--narrow">
        <div className="reveal">
          <p className="letter__para">
            気づいたら、<strong>AI エージェントで会社を作り直している</strong>中でも、同じことが起きていました。
          </p>
          <p className="letter__para letter__para--accent">
            「考えて、足して、整える」じゃなく、「<em>ズバンと言って、降りてきたものに乗る</em>」。
          </p>
          <p className="letter__para">
            動き方の解像度が、一気に上がっています。
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CH 5 — 同じ感覚を持つ人たち
   ============================================================ */
const VOICES = [
  "日常はそれなりに回ってる。でも、本当の自分はもっと違う気がする。",
  "直感が降りてきても、形にできずに流してしまう。",
  "自己啓発もスピも一通り通ったけど、まだ何か足りない気がする。",
];

function LetterVoices() {
  return (
    <section className="letter letter--voices" data-screen-label="07 Voices">
      <WatercolorBackdrop variant="lavender" />
      <CornerSparkles />
      <div className="letter__inner letter__inner--narrow">
        <LetterImage
          src="assets/lp-img-3-journey-map.png"
          alt="朝焼けの旅のマップ。旅人が光の道を歩く水彩の風景"
          className="letter-image--banner"
          overlayTone="light"
          overlay={<>4 時間の、<em>旅。</em></>}
        />
        <div className="reveal">
          <p className="letter__para">
            同じような感覚を持っている人たちと、ずっと話してきました。
          </p>
        </div>

        <div className="letter__voices reveal delay-1">
          {VOICES.map((v, i) => (
            <blockquote className="letter__voice" key={i}>
              <span className="letter__voice-mark" aria-hidden="true">「</span>
              <span className="letter__voice-text">{v}</span>
              <span className="letter__voice-mark right" aria-hidden="true">」</span>
            </blockquote>
          ))}
        </div>

        <div className="reveal">
          <p className="letter__para letter__para--accent">
            「足りない自分」のサインじゃなく、<br />
            <em>もっと深い自分に向かおうとしている、入口のサイン</em>。
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CH 6 — 6/6にやること + 伏線
   ============================================================ */
function LetterDay() {
  return (
    <section className="letter letter--day" data-screen-label="08 Day">
      <WatercolorBackdrop variant="warm" />
      <CornerSparkles />
      <div className="letter__inner">
        <div className="reveal">
          <p className="letter__bigdate">
            6月6日、<br />
            <em>4時間。</em>
          </p>
          <p className="letter__para">
            今回のセミナーには「<strong>LDMアース</strong>」という名前をつけました。
          </p>
          <p className="letter__para">
            中身そのものは、これまで <em>6回開催してきた、のべ 451 名が受けてくださったセミナー</em> です。
          </p>

          <div className="voices-from-past reveal">
            <LetterImage
              src="assets/lp-img-4-three-figures.png"
              alt="光の中に立つ三人の人影。それぞれの旅路を歩く参加者たちの象徴"
              className="letter-image--triptych"
              overlayTone="light"
              overlay={<>これまで、<em>ご一緒してきました</em>。</>}
            />
            <p className="voices-from-past__intro">
              これまで受けてくださった方から、こんな声を聞いてきました。
            </p>
            <blockquote className="voices-from-past__item">
              <p>自分の感覚を信じていいと思えました</p>
              <cite>M.I.</cite>
            </blockquote>
            <blockquote className="voices-from-past__item">
              <p>自分が地球・世界なんだと体感できた</p>
              <cite>M.K.</cite>
            </blockquote>
            <blockquote className="voices-from-past__item">
              <p>新しい友だちができて、クリエイションのワクワクを感じている</p>
              <cite>Y.N.</cite>
            </blockquote>
            <p className="voices-from-past__outro">
              こういう体験を、毎回ご一緒してきました。
            </p>
          </div>

          <p className="letter__para">
            それを今回、アースジャーニーで誰でも受けられる形に<br />
            <em>リニューアルして再公開</em> します。
          </p>
          <p className="letter__para">
            地球に来た理由を、もう一度、自分の言葉で言ってみる時間にしたい。<br />
            そんな思いから、新しい名前をつけました。
          </p>
        </div>

        <div className="reveal">
          <p className="letter__para">
            4時間、<em>しっかり設計された中身</em> があります。<br />
            <strong>LDMメソッド</strong><span className="gloss">（ライフ・デザイン・メソッド ─ 生き方を設計する手法です）</span>を、<em>ひとつずつ、丁寧に体験していく時間</em> です。
          </p>
          <p className="letter__para">
            そこに、<em>僕がいま立っている地点</em> も、一緒にお話ししていきます。
          </p>
        </div>

        <div className="credentials-bridge reveal">
          <p className="letter__para">
            20年、メソッドを通して <em>15,000名以上</em> の方と歩み、<br />
            本は海外 9 ヶ国にも届きました。
          </p>
          <p className="letter__para letter__para--accent">
            でも、いま僕が一番伝えたいのは──
          </p>
        </div>

        <dl className="credentials reveal" aria-label="堀内恭隆のこれまで">
          <div className="credentials__item">
            <dt className="credentials__num">15,000<span className="credentials__plus">+</span></dt>
            <dd className="credentials__label">累計受講者</dd>
          </div>
          <div className="credentials__item">
            <dt className="credentials__num">76,700<span className="credentials__plus">+</span></dt>
            <dd className="credentials__label">
              著書 発行部数
              <span className="credentials__note">国内 73,500 / 海外 3,200</span>
            </dd>
          </div>
          <div className="credentials__item">
            <dt className="credentials__num">9<span className="credentials__plus">ヶ国</span></dt>
            <dd className="credentials__label">海外展開</dd>
          </div>
        </dl>

        <div className="reveal delay-1">
          <p className="letter__para">
            まずは、今日この場所まで来てくれたあなたの、<br />
            <em>「いま、なぜここに来たか」を言葉にしてみる</em> ところから。
          </p>
          <p className="letter__para">
            そこから「<strong>インスピレーション力®</strong>」とは何かの話に入って、<br />
            4軸モデルでアンテナの構造を共有します。
          </p>
          <p className="letter__para">
            中盤は、「叶わない」が実は構造的に作られていることを見るワーク。<br />
            そして「<em>叶った自分から、いまから生きる</em>」状態への切り替え方。<br />
            定着のためのアファメーション5段階。
          </p>
          <p className="letter__para">
            最後に、<em>4ステージのどこにいるかを見るセルフチェック</em>。<br />
            これからの自分の表現について、ゆっくりと余韻でクロージング。
          </p>
          <p className="letter__para">
            <em>4時間が、一本の旅路のように、ひと続きに展開していきます。</em>
          </p>
        </div>

        <div className="reveal">
          <p className="letter__para letter__para--accent">
            特に最初の「<em>直感を形にする</em>」は、僕自身がいまも毎日試行錯誤しているテーマ。<br />
            完成した型を渡しながら、<em>僕がいまどう向き合っているか</em> も、一緒にお話しします。
          </p>
        </div>

        <InlineBreak />

        <div className="reveal">
          <p className="letter__para letter__para--foreshadow">
            結局、僕がやりたいのは、<br />
            「誰かを変える」ことじゃなく、<br />
            <em>「自分が変わり続ける場に、一緒にいてくれる人と過ごす」</em>こと、<br />
            なのかもしれません。
          </p>
          <p className="letter__para">
            6月6日も、そういう4時間にしたいと思っています。
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CH 8 — もうひとつだけ
   ============================================================ */
function LetterEarthJourney() {
  return (
    <section className="earthjourney letter--ej" data-screen-label="10 EarthJourney">
      <div className="ej-nightsky" aria-hidden="true" />
      <StarField count={60} color="rgba(255,240,200,0.9)" />
      <MoteField count={10} />

      <div className="letter__inner letter__inner--dark">
        <LetterImage
          src="assets/lp-img-2-circle-of-light.png"
          alt="七色の光の粒が円環に連なる、コミュニティの象徴"
          className="letter-image--hero letter-image--on-dark"
          overlayTone="light"
          overlay={
            <div className="ej-hero-overlay">
              <span className="ej-hero-overlay__seedling">🌱</span>
              <h2 className="letter__chapter on-dark">
                もうひとつだけ、<br />お話ししたいこと。
              </h2>
              <Divider tone="gold-on-dark" />
            </div>
          }
        />

        <div className="reveal">
          <p className="letter__para on-dark">
            セミナーの中で、<strong>アースジャーニーというコミュニティを<br />
            いま僕がどう動かしているか</strong>も、少しお話しします。
          </p>

          <p className="letter__para on-dark">
            これまでやってきたメソッドや知識は、
          </p>

          <p className="letter__para on-dark">
            これからどんどん<br />
            <em>無料の場</em>（メルマガ、LINE、SNS、オープンチャット）に出していきます。
          </p>

          <p className="letter__para on-dark letter__para--accent">
            アースジャーニーは、それとは <em>少し違う性質の場</em> として<br />
            これからも続けていく予定です。
          </p>
        </div>
      </div>
    </section>
  );
}

function MidCTA() {
  return (
    <section className="mid-cta-section" data-screen-label="10.5 MidCTA">
      <div className="mid-cta-section__card">
        <span className="mid-cta-section__mote mote-1" aria-hidden="true" />
        <span className="mid-cta-section__mote mote-2" aria-hidden="true" />
        <span className="mid-cta-section__mote mote-3" aria-hidden="true" />
        <span className="mid-cta-section__mote mote-4" aria-hidden="true" />
        <span className="mid-cta-section__mote mote-5" aria-hidden="true" />
        <p className="mid-cta-section__lead">
          まずは、<em>6月6日にお会いできるのを楽しみにしています</em>。
        </p>
        <a
          href={APPLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="cta--ghost"
        >
          <LineIcon size={16} color="#06C755" />
          中で、堀内が待っています
          <span className="cta__arrow">→</span>
        </a>
        <p className="mid-cta-section__micro">
          無料セミナーに参加する（オープンチャットへ）
        </p>
      </div>
    </section>
  );
}

/* ============================================================
   CH 9 — オプチャ
   ============================================================ */
function OpenchatBlurb() {
  return (
    <section className="oc-blurb" data-screen-label="11 OpenChat">
      <WatercolorBackdrop variant="soft" />
      <div className="letter__inner letter__inner--narrow">
        <div className="reveal">
          <div className="oc-blurb__line" aria-hidden="true" />
          <p className="letter__para">
            LINE オープンチャット「<strong>堀内恭隆のアースジャーニー</strong>」では、<br />
            セミナー情報だけでなく、僕が日々取り組んでいることや、<br />
            気づき、次に動いていることを共有しています。
          </p>
          <p className="letter__para">
            参加する／しないに関わらず、<br />
            <em>日常的に「ここで起きていること」に触れていただける場</em> です。
          </p>
          <div className="oc-blurb__line" aria-hidden="true" />
        </div>

        <ol className="oc-steps reveal">
          <li className="oc-step">
            <span className="oc-step__num">01</span>
            <div className="oc-step__body">
              <p className="oc-step__title">LINE オープンチャットに入室</p>
              <p className="oc-step__desc">「堀内恭隆のアースジャーニー」へどうぞ。</p>
            </div>
          </li>
          <li className="oc-step">
            <span className="oc-step__num">02</span>
            <div className="oc-step__body">
              <p className="oc-step__title">6/6 当日の朝、Zoom リンクが届きます</p>
              <p className="oc-step__desc">オプチャ内に共有します。当日の流れもそこで。</p>
            </div>
          </li>
          <li className="oc-step">
            <span className="oc-step__num">03</span>
            <div className="oc-step__body">
              <p className="oc-step__title">13:00、Zoom に入って 4 時間ご一緒</p>
              <p className="oc-step__desc">そこから旅が始まります。</p>
            </div>
          </li>
        </ol>

        <p className="oc-steps__note reveal">
          ※ LINE の友だち追加は不要です。匿名のニックネームで入れます。
        </p>
        <p className="oc-steps__note reveal">
          ※ 当日参加できない方も、アーカイブをオプチャに配信します。後からゆっくり視聴いただけます。
        </p>
      </div>
    </section>
  );
}

/* ============================================================
   FAQ + 用語について
   ============================================================ */
const FAQ_ITEMS = [
  { q: "スピリチュアルや自己啓発が初めてでも、大丈夫ですか？",
    a: "大丈夫です。テーマは「直感を形にする」。特別な前提知識は要りません。日常の延長で受けていただける内容です。" },
  { q: "なぜ無料なんですか？",
    a: "中身そのものを、まずは体感してほしいから。料金で参加のハードルを上げず、内容に集中してもらえる形を選びました。" },
  { q: "コミュニティに入らないとダメですか？",
    a: "一切強制ではありません。セミナーだけ受けて帰っていただいて、まったく問題ありません。コミュニティの話は興味を持ってくださった方にだけ、そのときにお伝えします。" },
  { q: "当日参加できなかった場合は？",
    a: "後日、3日間限定で録画アーカイブをお送りします。参加できるか分からない方も、ひとまず申し込みだけしておいてください。" },
  { q: "事前に準備するものはありますか？",
    a: "事前にワークシート（PDF）をお送りします。プリントアウトするか、画面で見られる状態で当日を迎えていただくと、ワークがスムーズです。" },
  { q: "次のセミナーはいつですか？",
    a: "アースジャーニーは「ボディ／マインド／スピリット」の3軸で、2〜3ヶ月に1回のペースで開いています。次回テーマは開催後にお知らせします。" },
];

function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="faq" data-screen-label="12 FAQ">
      <WatercolorBackdrop variant="soft" />
      <CornerSparkles />
      <div className="section-inner narrow">
        <div className="reveal">
          <div className="section-eyebrow soft">よくいただく質問</div>
          <h2 className="section-title">Q &amp; A</h2>
          <Divider />
        </div>

        <div className="faq-list reveal">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div className={`faq-item ${isOpen ? "open" : ""}`} key={i}>
                <button className="faq-q" onClick={() => setOpen(isOpen ? null : i)}>
                  <span className="faq-q__mark">
                    <span className="faq-q__mark-letter">Q</span>
                  </span>
                  <span className="faq-q__text">{item.q}</span>
                  <span className="faq-q__icon">
                    <span className="line h" />
                    <span className="line v" />
                  </span>
                </button>
                <div className="faq-a" style={{ maxHeight: isOpen ? "500px" : "0" }}>
                  <div className="faq-a__inner">
                    <span className="faq-a__mark">A.</span>
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <aside className="faq-terms reveal">
          <div className="faq-terms__label">用語について</div>
          <p>
            このお手紙の中で、「<strong>アースジャーニー</strong>」は3つの意味で出てきます。
          </p>
          <ul>
            <li><em>地球を旅するという大きなコンセプト</em>（このお手紙のテーマ）。</li>
            <li>「堀内恭隆のアースジャーニー」という <em>LINEオープンチャット</em>。</li>
            <li>月額 8,800円の <em>メンバーシップ・コミュニティ</em>。</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

/* ============================================================
   FINAL — 締めの手紙
   ============================================================ */
function FinalLetter() {
  return (
    <section className="final" id="apply" data-screen-label="13 Final">
      <div className="final__bg" />
      <StarField count={40} />
      <MoteField count={12} />

      <div className="final__inner">
        <div className="final__aura" aria-hidden="true" />

        <LetterImage
          src="assets/lp-img-5-light-bloom.png"
          alt="温色の光が広がる抽象画。誘いのオーラ"
          className="letter-image--bloom letter-image--on-dark"
          overlayTone="light"
          overlay={<>もう一段、<em>深いところへ</em>。</>}
        />

        <p className="final__thanks reveal">
          ここまで読んでくださって、ありがとうございます。
        </p>

        <p className="final__resonance reveal delay-1">
          もし、ここまで読んで、何か触れたものがあったら——
        </p>

        <p className="final__resonance reveal delay-1">
          それは、たぶん <em>あなた自身の中にあるものが、僕の言葉に共鳴したから</em> だと思います。
        </p>

        <div className="final__letter reveal delay-1">
          <p>
            最近、よく考えていることがあります。
          </p>
          <p>
            誰かを変えようと思って動くより、<br />
            <em>自分が変わり続けることで、誰かの何かに触れる</em> 方が、<br />
            深く届く気がする。
          </p>
        </div>

        <div className="final__sixsix reveal delay-1">
          <span className="final__sixsix-mark">06.06</span>
          <p>
            特別な日付という意味じゃなくて、<br />
            <em>「ちょうどいま、この感覚を分かち合いたい」</em> と感じている、その日です。
          </p>
        </div>

        <Divider tone="gold-on-dark" />

        <h2 className="final__title reveal delay-1">
          地球での旅、<br />
          一緒に <em>もう一段深いところ</em> を、<br />
          見に行きませんか。
        </h2>

        <div className="final__signature reveal delay-2">
          — 堀内 恭隆
        </div>

        <div className="final__datebar reveal delay-2">
          <span className="final__datebar-label">Date</span>
          {EDITION.date.jp}
          <span className="final__datebar-sep">／</span>
          <span className="final__datebar-label">Venue</span>
          {EDITION.venue}
        </div>

        <a href={APPLY_URL} target="_blank" rel="noopener noreferrer"
          className="cta cta--lg cta--shine reveal delay-2">
          <LineIcon size={22} color="#06C755" />
          続きは、LINEオープンチャットで
          <span className="cta__arrow">→</span>
        </a>
        <div className="cta-note on-dark reveal delay-3">
          <LineIcon size={12} />
          LINE オープンチャットで参加
        </div>
      </div>
    </section>
  );
}

function CommunityNote() {
  return (
    <section className="community-note" data-screen-label="14 CommunityNote">
      <div className="community-note__inner">
        <div className="community-note__head" aria-hidden="true">
          <span className="community-note__rule" />
          <span className="community-note__label">アースジャーニーコミュニティについて</span>
          <span className="community-note__rule" />
        </div>
        <div className="community-note__body">
          <p>
            月額 <strong>8,800円</strong> のメンバーシップです。
          </p>
          <a href="https://ej.ldm.international/" target="_blank" rel="noopener noreferrer" className="community-note__link">
            詳細はこちら <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */
function Footer() {
  return (
    <footer className="footer" data-screen-label="14 Footer">
      <div className="footer-watercolor" aria-hidden="true" />
      <div className="footer-inner">
        <SparkleSvg size={18} style={{ color: "var(--c-cta)", margin: "0 auto 14px", display: "block" }} />
        <div className="footer-brand">Earth Journey</div>
        <div className="footer-jp">アースジャーニー</div>
        <div className="footer-links">
          <a href={LINKS.commercial} target="_blank" rel="noopener noreferrer">特定商取引法に基づく表記</a>
          <span className="footer-sep">✦</span>
          <a href={LINKS.privacy} target="_blank" rel="noopener noreferrer">プライバシーポリシー</a>
          <span className="footer-sep">✦</span>
          <a href={LINKS.contact} target="_blank" rel="noopener noreferrer">お問い合わせ</a>
        </div>
        <div className="footer-jp" style={{ fontSize: 11, opacity: 0.6 }}>
          運営：株式会社シンクロニシティ・マネジメント
        </div>
        <div className="footer-copyright">© 2026 Synchronicity Management Inc.</div>
      </div>
    </footer>
  );
}

/* ============================================================
   APP
   ============================================================ */
function App() {
  useReveal();
  return (
    <>
      <ReadingProgress />
      <FloatingCTA />
      <Hero />
      <LetterGreeting />
      <LetterNow />
      <LetterScene />
      <LetterEarthJourney />
      <LetterContext />
      <LetterVoices />
      <LetterDay />
      <MidCTA />
      <OpenchatBlurb />
      <FAQ />
      <FinalLetter />
      <CommunityNote />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
