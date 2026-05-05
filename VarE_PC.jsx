/* Variation E PC — B案ベース × A案水彩アース融合 (PC 1200px+) */
const VarE_PC = (() => {
  const D = window.LDM_DATA;
  const c = {
    bg: '#0f0a2e', bg2: '#1c1547',
    cream: '#fbf7ee', accent: '#ffd56b', sun: '#f5a847',
    pink: '#f48ec7', cyan: '#7fdcff', leaf: '#a8e063',
    btnGreen: '#3fb89a', btnGreenDeep: '#2d8a73',
    teal: '#5dbfb0', tealDeep: '#1f5b5a', indigo: '#3b3577',
    earthLeaf: '#88b56a', text: '#f5f0ff', ink: '#2a2238'
  };

  const Star = ({top,left,size=2,op=0.8}) => (
    <div className="anim-twinkle" style={{position:'absolute',top,left,width:size,height:size,borderRadius:'50%',background:'white',opacity:op,boxShadow:`0 0 ${size*2}px white`,pointerEvents:'none', animationDelay: `${(parseFloat(top)+parseFloat(left))%5}s`}}/>
  );
  const Stars = ({n=20}) => {
    const seeds = [[8,12,3,0.9],[15,80,2,0.7],[25,40,2,0.8],[40,20,3,0.9],[55,75,2,0.6],[70,30,2,0.8],[85,60,3,0.9],[20,55,1,0.5],[60,15,2,0.7],[78,85,2,0.6],[5,45,2,0.7],[12,65,3,0.85],[30,90,2,0.6],[48,8,2,0.7],[62,50,3,0.9],[72,10,2,0.6],[88,30,2,0.7],[33,70,1,0.5],[92,75,2,0.6],[18,28,2,0.65]];
    return <>{seeds.slice(0,n).map(([t,l,s,o],i)=>(<Star key={i} top={`${t}%`} left={`${l}%`} size={s} op={o}/>))}</>;
  };

  // LightStars — ライトテーマセクション用(クリーム背景に微かな星と道)
  const LightStars = ({withPath=false}) => (
    <>
      {[[12,8,3,0.16],[28,88,2.5,0.13],[20,45,2,0.11],[58,15,3,0.14],[72,72,2,0.12],[42,90,2,0.10],[88,30,2.5,0.14],[50,55,2,0.10],[78,8,2.5,0.12],[35,28,2,0.10],[15,60,2,0.11],[68,48,2.5,0.13]].map(([t,l,s,o],i)=>(
        <div key={i} style={{position:'absolute', top:`${t}%`, left:`${l}%`, width:s, height:s, borderRadius:'50%', background:'#2a2238', opacity:o, pointerEvents:'none'}}/>
      ))}
      <div style={{position:'absolute', top:'18%', right:'10%', fontFamily:'var(--hand-en)', fontSize:20, color:'#2a2238', opacity:0.16, pointerEvents:'none'}}>✦</div>
      <div style={{position:'absolute', bottom:'14%', left:'8%', fontFamily:'var(--hand-en)', fontSize:16, color:'#2a2238', opacity:0.13, pointerEvents:'none'}}>✦</div>
      {withPath && (
        <svg style={{position:'absolute', bottom:0, left:0, width:'100%', height:120, opacity:0.07, pointerEvents:'none'}} viewBox="0 0 800 120" preserveAspectRatio="none">
          <path d="M-20 70 Q 160 40, 320 60 T 640 50 Q 760 48, 820 65" stroke="#2a2238" strokeWidth="1.8" fill="none" strokeDasharray="4 8" strokeLinecap="round"/>
        </svg>
      )}
    </>
  );

  // STICKY NAV
  const Nav = () => (
    <nav style={{position:'sticky', top:0, zIndex:50, padding:'14px 40px', background:'rgba(15,10,46,0.85)', backdropFilter:'blur(12px)', color:c.text, display:'flex', alignItems:'center', justifyContent:'space-between', borderBottom:'1px solid rgba(255,255,255,0.08)'}}>
      <a href="#top" style={{fontFamily:'var(--hand-en)', fontSize:22, color:c.accent, textDecoration:'none'}}>Earth Journey ✦</a>
      <div style={{display:'flex', gap:28, fontSize:13, fontFamily:'var(--hand-jp)'}}>
        <a href="#about" style={{color:c.text, textDecoration:'none'}}>このコミュニティについて</a>
        <a href="#profile" style={{color:c.text, textDecoration:'none'}}>堀内恭隆</a>
        <a href="#seminars" style={{color:c.text, textDecoration:'none'}}>セミナー一覧</a>
        <a href="#guests" style={{color:c.text, textDecoration:'none'}}>ゲスト対談</a>
        <a href="#faq" style={{color:c.text, textDecoration:'none'}}>よくある質問</a>
      </div>
      <a href="https://ss.ldm.international/p/ej" style={{display:'inline-block', textDecoration:'none', padding:'10px 22px', borderRadius:999, background:`linear-gradient(180deg, ${c.btnGreen}, ${c.btnGreenDeep})`, color:'white', fontWeight:700, fontSize:13, fontFamily:'var(--hand-jp)', textShadow:'0 1px 2px rgba(0,0,0,0.3)', border:'2px solid rgba(255,255,255,0.4)', boxShadow:`0 0 20px ${c.btnGreen}60`}}>
        ✦ 参加する
      </a>
    </nav>
  );

  // HERO — 横長フルブリード
  const Hero = () => (
    <div style={{position:'relative', width:'100%', minHeight:780, overflow:'hidden', background:c.bg}}>
      <img src="assets/hero-watercolor.jpg" style={{position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', filter:'brightness(0.58) saturate(1.05)'}}/>
      <div style={{position:'absolute', inset:0, background:'rgba(15,10,46,0.32)'}}/>
      <div style={{position:'absolute', inset:0, background:'linear-gradient(180deg, rgba(15,10,46,0.5) 0%, rgba(15,10,46,0.05) 30%, rgba(15,10,46,0.3) 70%, rgba(15,10,46,0.95) 100%)'}}/>
      <Stars n={20}/>

      <div style={{position:'absolute', top:80, right:60, fontFamily:'var(--hand-en)', color:c.accent, fontSize:34, transform:'rotate(8deg)', textShadow:'0 0 24px rgba(255,213,107,0.6)', zIndex:2}}>let's go ✦</div>
      <div style={{position:'absolute', top:140, left:60, fontFamily:'var(--hand-en)', color:c.pink, fontSize:26, transform:'rotate(-6deg)', textShadow:'0 0 14px rgba(0,0,0,0.4)', zIndex:2}}>✦ play ✦</div>

      <div style={{position:'relative', minHeight:780, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center', color:'white', padding:'120px 40px 60px', gap:24, zIndex:1}}>
        <div>
          <div style={{fontFamily:'var(--hand-en)', fontSize:32, color:c.accent, marginBottom:10, textShadow:'0 2px 18px rgba(0,0,0,0.5)'}}>A new journey begins.</div>
          <h1 style={{fontFamily:'var(--hand-jp)', fontWeight:600, fontSize:'clamp(48px, 5.2vw, 80px)', lineHeight:1.2, textShadow:'0 2px 24px rgba(0,0,0,0.7)', maxWidth:900, margin:'0 auto'}}>
            新しい地球を、<br/>
            <span style={{position:'relative', display:'inline-block'}}>
              仲間と遊ぶ。
              <svg style={{position:'absolute', bottom:-10, left:0, width:'100%', height:18}} viewBox="0 0 200 10" preserveAspectRatio="none">
                <path d="M2 6 Q 50 1, 100 5 T 198 4" stroke={c.accent} strokeWidth="3" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
          <p style={{marginTop:26, fontSize:13, lineHeight:1.7, opacity:0.95, fontFamily:'var(--hand-jp)', letterSpacing:'0.06em'}}>
            <span style={{display:'inline-block', padding:'5px 14px', borderRadius:999, background:'rgba(255,255,255,0.18)', backdropFilter:'blur(6px)', fontSize:12.5}}>LDM月額メンバーシップ</span>
          </p>
          <p style={{marginTop:14, fontSize:16, lineHeight:1.9, opacity:0.95, fontFamily:'var(--sans-jp)'}}>
            ライフ・デザイン・メソッド開発者・堀内恭隆と、地球という遊び場を旅するコミュニティ。
          </p>
        </div>

        <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:14, marginTop:6}}>
          <div style={{display:'flex', gap:10, flexWrap:'wrap', justifyContent:'center'}}>
            {['#堀内との距離','#ゲスト対談','#エネルギーワーク','#リアルの場'].map(t=>(
              <span key={t} style={{fontSize:12, padding:'7px 14px', background:'rgba(255,255,255,0.18)', backdropFilter:'blur(6px)', borderRadius:999, fontFamily:'var(--hand-jp)'}}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // HERO STATS — FV直下のシンプル数字帯(PC)
  const HeroStats = () => (
    <section style={{padding:'28px 80px 32px', background:c.bg, borderBottom:`1px solid ${c.text}15`}}>
      <div style={{maxWidth:880, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:24, textAlign:'center'}}>
        {D.heroStats.map((s,i)=>(
          <div key={i}>
            <div style={{fontFamily:'var(--hand-en)', fontSize:42, fontWeight:700, color:i===0?c.accent:i===1?c.pink:c.cyan, lineHeight:1, letterSpacing:'-0.01em'}}>{s.num}</div>
            <div style={{fontFamily:'var(--hand-jp)', fontSize:13, color:c.text, opacity:0.78, marginTop:10, letterSpacing:'0.05em'}}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );

  // GUEST STRIP — ヒーロー直下の出演実績バナー(PC)
  const GuestStrip = () => (
    <section style={{padding:'40px 80px 20px', background:c.bg, position:'relative', overflow:'hidden'}}>
      <div style={{maxWidth:1180, margin:'0 auto'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:18, gap:20}}>
          <div>
            <div style={{fontFamily:'var(--hand-en)', fontSize:18, color:c.cyan, letterSpacing:2}}>past guests ✦</div>
            <div style={{fontFamily:'var(--hand-jp)', fontSize:14, color:c.text, opacity:0.85, marginTop:4}}>これまでに出演してくれた、各界のフロントランナーたち</div>
          </div>
          <a href="#guests" style={{fontFamily:'var(--hand-jp)', fontSize:12, color:c.cyan, opacity:0.8}}>詳しく見る →</a>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(9, 1fr)', gap:16}}>
          {D.guests.map((g,i)=>{
            const colors=[c.pink,c.cyan,c.leaf,c.accent,c.pink,c.cyan,c.leaf,c.accent,c.pink];
            const col = colors[i];
            return (
              <div key={i} style={{textAlign:'center'}}>
                <div style={{position:'relative', width:'100%', aspectRatio:'1/1', borderRadius:'50%', overflow:'hidden', border:`2px solid ${col}`, background:c.bg2}}>
                  <img src={g.img} loading="lazy" decoding="async" style={{width:'100%', height:'100%', objectFit:'cover', objectPosition:'center 20%'}}/>
                </div>
                <div style={{fontFamily:'var(--hand-jp)', fontSize:11, marginTop:8, color:c.text, lineHeight:1.3, fontWeight:600}}>{g.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );

  // SCENE BANNER — 実際のオンラインセミナー風景(PC)
  const SceneBanner = () => (
    <section style={{padding:'80px 80px 60px', background:c.bg, position:'relative'}}>
      <div style={{maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1.2fr', gap:60, alignItems:'center'}}>
        <div>
          <div style={{fontFamily:'var(--hand-en)', fontSize:30, color:c.cyan, lineHeight:1}}>live scene ✦</div>
          <h2 style={{fontFamily:'var(--hand-jp)', fontSize:36, fontWeight:600, lineHeight:1.45, marginTop:14, color:'#ffffff'}}>
            画面の向こうに、<br/>たしかに「場」がある。
          </h2>
          <p style={{fontFamily:'var(--hand-jp)', fontSize:14.5, lineHeight:2, color:c.text, marginTop:20, opacity:0.9}}>
            全国・海外から参加できる、オンライン中心のジャーニー。<br/>
            ライブ参加でも、アーカイブ視聴でも、<br/>
            あなたのペースで深く学べます。
          </p>
          <div style={{display:'flex', gap:10, marginTop:24, flexWrap:'wrap'}}>
            {['オンライン中心','録画アーカイブあり','少人数制セッション'].map((tag,i)=>(
              <div key={i} style={{padding:'6px 14px', background:'rgba(255,255,255,0.06)', border:`1px solid ${[c.cyan,c.pink,c.leaf][i]}60`, borderRadius:999, fontSize:11.5, fontFamily:'var(--hand-jp)', color:[c.cyan,c.pink,c.leaf][i]}}>{tag}</div>
            ))}
          </div>
        </div>
        {/* ポラロイド風フレーム */}
        <div style={{position:'relative', transform:'rotate(-1.5deg)', maxWidth:520, marginLeft:'auto'}}>
          {/* マスキングテープ */}
          <div style={{position:'absolute', top:-14, left:'50%', transform:'translateX(-50%) rotate(2deg)', width:120, height:24, background:`${c.sun}cc`, opacity:0.85, zIndex:3, boxShadow:'0 2px 8px rgba(0,0,0,0.2)'}} />
          <div style={{background:'white', padding:'14px 14px 50px', boxShadow:'0 30px 70px -15px rgba(0,0,0,0.5), 0 8px 20px rgba(0,0,0,0.25)', borderRadius:3}}>
            <div style={{position:'relative', width:'100%', aspectRatio:'1489/931', overflow:'hidden', background:'#0a0e1a'}}>
              <img src="assets/seminar-scene.jpg" style={{position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover'}} />
              {/* Zoomラベルをマスク(左上) */}
              <div style={{position:'absolute', top:'5%', left:'5.5%', width:'30%', height:'15%', background:`linear-gradient(135deg, ${c.pink}, ${c.accent})`, borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 4px 12px rgba(0,0,0,0.3)'}}>
                <div style={{fontFamily:'var(--hand-en)', fontSize:16, color:'white', textAlign:'center', lineHeight:1.2}}>LDM<br/>SESSION</div>
              </div>
              {/* 下部マスク */}
              <div style={{position:'absolute', bottom:0, left:0, right:0, height:'8%', background:'linear-gradient(to top, rgba(10,14,26,0.9), transparent)'}} />
            </div>
            <div style={{textAlign:'center', marginTop:18, fontFamily:'var(--hand-jp)', fontSize:13, color:c.ink, opacity:0.7}}>
              ── オンラインセミナー風景より
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // ABOUT — 2カラム + 左カラムに小ポートレート・手書きラベル・水彩テクスチャ
  const About = () => (
    <section id="about" style={{padding:'100px 80px', background:c.cream, color:c.ink, position:'relative', overflow:'hidden'}}>
      <div style={{position:'absolute', top:-80, right:-80, width:300, height:300, borderRadius:'50%', background:`radial-gradient(circle, ${c.sun}25 0%, transparent 70%)`}}/>
      {/* 背景に薄い水彩テクスチャ — FVのキーアートを連続させる */}
      <img src="assets/hero-watercolor.jpg" style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', objectFit:'cover', opacity:0.06, mixBlendMode:'multiply', pointerEvents:'none'}} alt=""/>
      <div style={{maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1.4fr', gap:60, alignItems:'center', position:'relative'}}>
        <div>
          <div style={{fontFamily:'var(--hand-en)', fontSize:32, color:c.pink}}>about us</div>
          <h2 style={{fontFamily:'var(--hand-jp)', fontSize:48, fontWeight:600, lineHeight:1.35, marginTop:12}}>
            コミュニティと、<br/>はじまりの<span style={{position:'relative', display:'inline-block'}}>物語<svg style={{position:'absolute', bottom:-4, left:0, width:'100%', height:8}} viewBox="0 0 100 8" preserveAspectRatio="none"><path d="M2 5 Q 30 2, 60 4 T 98 4" stroke={c.sun} strokeWidth="2.5" fill="none" strokeLinecap="round"/></svg></span>。
          </h2>
          {/* 小ポートレート + 手書きラベル */}
          <div style={{marginTop:36, display:'flex', alignItems:'center', gap:18}}>
            <div style={{position:'relative', width:78, height:78, borderRadius:'50%', overflow:'hidden', border:`2px solid ${c.sun}`, boxShadow:`0 4px 18px ${c.sun}40`, flexShrink:0}}>
              <img src="assets/horiuchi-portrait.jpg" style={{width:'100%', height:'100%', objectFit:'cover', objectPosition:'top'}} alt="堀内恭隆"/>
            </div>
            <div>
              <div style={{fontFamily:'var(--hand-en)', fontSize:22, color:c.pink, lineHeight:1, transform:'rotate(-2deg)'}}>since 2000 ✦</div>
              <div style={{fontFamily:'var(--hand-jp)', fontSize:13, color:c.ink, opacity:0.75, marginTop:6, letterSpacing:'0.05em'}}>25年の歩みと、これから</div>
            </div>
          </div>
        </div>
        <div style={{fontSize:17, lineHeight:2.1, position:'relative'}}>
          {(D.community.bodyParts || []).map((part, i) => {
            if (part.type === 'p') return (
              <p key={i} style={{whiteSpace:'pre-line', margin:'0 0 22px'}}>{part.text}</p>
            );
            if (part.type === 'quote') return (
              <div key={i} style={{margin:'36px auto', position:'relative', padding:'0 32px', maxWidth:560}}>
                <div style={{fontFamily:'var(--hand-en)', fontSize:96, color:c.pink, lineHeight:1, opacity:0.85, transform:'translateY(14px)'}}>"</div>
                <p style={{fontFamily:'var(--hand-jp)', fontSize:26, lineHeight:1.75, whiteSpace:'pre-line', color:c.ink, margin:'0 0 0 24px', letterSpacing:'0.02em'}}>{part.text}</p>
                <div style={{fontFamily:'var(--hand-en)', fontSize:96, color:c.pink, lineHeight:1, opacity:0.85, textAlign:'right', transform:'translateY(-22px)'}}>"</div>
              </div>
            );
            if (part.type === 'sep') return (
              <div key={i} style={{display:'flex', alignItems:'center', justifyContent:'center', gap:16, margin:'40px auto', opacity:0.6, maxWidth:480}}>
                <span style={{fontFamily:'var(--hand-en)', fontSize:18, color:c.pink}}>✦</span>
                <span style={{flex:1, height:1, background:`linear-gradient(90deg, transparent, ${c.pink}40, transparent)`}}></span>
                <span style={{fontFamily:'var(--hand-en)', fontSize:18, color:c.pink}}>✦</span>
              </div>
            );
            return null;
          })}
        </div>
      </div>
    </section>
  );

  // PROFILE — 2カラム
  const Profile = () => (
    <section id="profile" style={{padding:'100px 80px', background:`linear-gradient(180deg, ${c.bg2}, ${c.bg})`, color:c.text, position:'relative', overflow:'hidden'}}>
      <Stars n={18}/>
      <div style={{maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns:'auto 1fr', gap:70, alignItems:'center', position:'relative'}}>
        <div style={{position:'relative'}}>
          <div style={{width:280, height:280, borderRadius:'50%', overflow:'hidden', background:c.cream, border:`4px solid ${c.accent}`, boxShadow:`0 0 60px ${c.accent}50`}}>
            <img src="assets/horiuchi-portrait.jpg" style={{width:'100%', height:'100%', objectFit:'cover', objectPosition:'top'}}/>
          </div>
          <div style={{position:'absolute', top:-10, right:-20, fontFamily:'var(--hand-en)', color:c.pink, fontSize:24, transform:'rotate(15deg)'}}>✦ guide</div>
          <div style={{position:'absolute', bottom:0, left:-30, fontFamily:'var(--hand-en)', color:c.cyan, fontSize:18, transform:'rotate(-8deg)'}}>since 2000</div>
        </div>
        <div>
          <div style={{fontFamily:'var(--hand-en)', fontSize:30, color:c.accent}}>your guide</div>
          <h3 style={{fontFamily:'var(--hand-jp)', fontSize:42, fontWeight:600, marginTop:8}}>{D.profile.name}</h3>
          <div style={{fontSize:13, opacity:0.7, marginTop:6, letterSpacing:'0.15em'}}>{D.profile.role}</div>
          <p style={{fontSize:15, lineHeight:2.1, whiteSpace:'pre-line', marginTop:24}}>{D.profile.bio}</p>
          <ul style={{listStyle:'none', padding:'20px 24px', margin:'24px 0 0', background:'rgba(255,255,255,0.05)', borderRadius:14, display:'flex', flexDirection:'column', gap:10}}>
            {D.achievements.map((a,i)=>(
              <li key={i} style={{fontSize:13.5, lineHeight:1.7, display:'flex', gap:12, alignItems:'flex-start', fontFamily:'var(--hand-jp)'}}>
                <span style={{color:c.accent, fontFamily:'var(--hand-en)', fontSize:16, lineHeight:1, marginTop:3}}>✦</span>
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );

  // CONTENTS — 2x2 グリッド
  const Contents = () => (
    <section style={{padding:'120px 80px', background:c.cream, color:c.ink}}>
      <div style={{maxWidth:1100, margin:'0 auto'}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 2fr', gap:60, alignItems:'baseline', marginBottom:60}}>
          <div>
            <div style={{fontFamily:'var(--hand-en)', fontSize:28, color:c.pink}}>what we offer</div>
            <h2 style={{fontFamily:'var(--hand-jp)', fontSize:48, fontWeight:600, marginTop:10, lineHeight:1.3}}>この場に<br/>入ると？</h2>
          </div>
          <div style={{paddingTop:14, fontFamily:'var(--hand-jp)', fontSize:14, lineHeight:2, color:c.ink, opacity:0.8}}>
            あなたが使える、この場の4つのリソース。<br/>
            それぞれが補い合いながら、あなたを次の地球の波へと連れていく。
          </div>
        </div>
        <div style={{borderTop:`1px solid ${c.ink}30`}}>
          {D.contents.map((co,i)=>{
            const colors=[c.pink,c.cyan,c.earthLeaf,c.sun];
            const col = colors[i];
            return (
              <div key={i} style={{padding:'36px 0', borderBottom:`1px solid ${c.ink}30`, display:'grid', gridTemplateColumns:'80px 200px 1fr auto', gap:32, alignItems:'baseline'}}>
                <div style={{fontFamily:'var(--hand-en)', fontSize:64, fontWeight:300, color:col, lineHeight:1, letterSpacing:'-0.03em'}}>0{i+1}</div>
                <div style={{fontFamily:'var(--hand-en)', fontSize:12, color:col, letterSpacing:'0.22em', fontWeight:600, paddingTop:10}}>{co.tag}</div>
                <div>
                  <div style={{display:'flex', alignItems:'baseline', gap:14, flexWrap:'wrap'}}>
                    <h4 style={{fontFamily:'var(--hand-jp)', fontSize:26, fontWeight:600, lineHeight:1.4, margin:0}}>{co.title}</h4>
                    <span style={{fontFamily:'var(--hand-jp)', fontSize:12, color:col, border:`1px solid ${col}80`, borderRadius:999, padding:'3px 12px', whiteSpace:'nowrap', letterSpacing:'0.04em'}}>{co.freq}</span>
                  </div>
                  <p style={{fontSize:14, lineHeight:2, marginTop:10, opacity:0.78, maxWidth:560}}>{co.desc}</p>
                </div>
                <div style={{fontFamily:'var(--hand-en)', fontSize:11, color:col, opacity:0.6, paddingTop:14, letterSpacing:'0.1em'}}>—— 詳細</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );

  // EVENTS — PC版ポラロイド風
  const Events = () => (
    <section style={{padding:'100px 80px', background:c.cream, color:c.ink}}>
      <div style={{maxWidth:1100, margin:'0 auto'}}>
        <div style={{textAlign:'center', marginBottom:60}}>
          <div style={{fontFamily:'var(--hand-en)', fontSize:32, color:c.pink}}>real gathering</div>
          <h2 style={{fontFamily:'var(--hand-jp)', fontSize:48, fontWeight:600, marginTop:8}}>{D.events.title}</h2>
          <p style={{fontSize:15, opacity:0.75, marginTop:12, lineHeight:1.9}}>{D.events.sub}</p>
        </div>
        <div style={{display:'flex', justifyContent:'center', gap:30, flexWrap:'wrap', padding:'30px 0'}}>
          {D.events.photos.map((p,i)=>{
            const colors=[c.pink,c.cyan,c.earthLeaf];
            const rots=[-4, 3.5, -2.5];
            return (
              <div key={i} className="anim-polaroid" style={{position:'relative', width:300, padding:'14px 14px 44px', background:'white', borderRadius:4, boxShadow:'0 18px 40px rgba(0,0,0,0.18), 0 4px 8px rgba(0,0,0,0.1)', transform:`rotate(${rots[i]}deg)`}}>
                <div style={{width:'100%', aspectRatio:'4/3', overflow:'hidden', background:'#eee'}}>
                  <img src={p.src} style={{width:'100%', height:'100%', objectFit:'cover'}}/>
                </div>
                <div style={{position:'absolute', bottom:10, left:0, right:0, textAlign:'center', fontFamily:'var(--hand-jp)', fontSize:16, color:c.ink}}>{p.caption}</div>
                <div style={{position:'absolute', top:-16, right:-16, fontFamily:'var(--hand-en)', color:colors[i], fontSize:24, transform:`rotate(${-rots[i]+6}deg)`}}>{p.hand}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );

  // REAL PHOTOS — PC マソンリーグリッド(4列)
  const RealPhotos = () => (
    <section style={{padding:'100px 80px', background:c.bg2, color:c.text, position:'relative', overflow:'hidden'}}>
      <Stars n={12}/>
      <div style={{maxWidth:1280, margin:'0 auto', position:'relative'}}>
        <div style={{textAlign:'center', marginBottom:50}}>
          <div style={{fontFamily:'var(--hand-en)', fontSize:30, color:c.accent}}>real scene ✦</div>
          <h2 style={{fontFamily:'var(--hand-jp)', fontSize:38, fontWeight:600, marginTop:6}}>{D.realPhotos.title}</h2>
          <p style={{fontSize:14.5, opacity:0.78, marginTop:12, lineHeight:1.9}}>{D.realPhotos.sub}</p>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gridAutoRows:'180px', gap:14}}>
          {D.realPhotos.photos.map((p,i)=>{
            // 大判を1, 5番目に配置
            const big = (i===0 || i===5);
            const tall = (i===2 || i===6);
            const span = big ? {gridColumn:'span 2', gridRow:'span 2'} : tall ? {gridRow:'span 2'} : {};
            return (
              <div key={i} className="anim-card-hover" style={{...span, overflow:'hidden', borderRadius:12, position:'relative', background:'#222', transition:'transform 0.5s ease, box-shadow 0.5s ease', cursor:'pointer'}}>
                <img src={p.src} style={{width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.6s ease'}} onMouseEnter={e=>e.currentTarget.style.transform='scale(1.08)'} onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}/>
                <div style={{position:'absolute', bottom:0, left:0, right:0, padding:'30px 16px 12px', background:'linear-gradient(180deg, transparent, rgba(0,0,0,0.85))', fontFamily:'var(--hand-jp)', color:'white', fontSize:13, lineHeight:1.5, fontWeight:500}}>{p.caption}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );

  // SEMINARS — PC版 3×3 グリッド
  const Seminars = () => {
    const [openIdx, setOpenIdx] = React.useState(null);
    return (
    <section id="seminars" style={{padding:'100px 80px', background:c.bg, color:c.text, position:'relative', overflow:'hidden'}}>
      <Stars n={20}/>
      <div style={{maxWidth:1200, margin:'0 auto', position:'relative'}}>
        <div style={{textAlign:'center', marginBottom:54}}>
          <div style={{fontFamily:'var(--hand-en)', fontSize:32, color:c.accent}}>past seminars</div>
          <h2 style={{fontFamily:'var(--hand-jp)', fontSize:44, fontWeight:600, marginTop:8, lineHeight:1.4}}>{D.seminars.title}</h2>
          <p style={{fontSize:15, opacity:0.8, marginTop:12, lineHeight:1.9}}>{D.seminars.sub}</p>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:18}}>
          {D.seminars.list.map((s,i)=>{
            const tones = [
              {bg: c.indigo, accent: c.teal},
              {bg: c.tealDeep, accent: c.cyan},
              {bg: c.bg2, accent: c.teal},
            ];
            const t = tones[i%3];
            const isOpen = openIdx === i;
            const hasDetail = (s.core && s.core.length) || (s.quotes && s.quotes.length);
            return (
              <div key={i} style={{background:'rgba(255,255,255,0.04)', border:`1px solid ${t.accent}40`, borderRadius:16, overflow:'hidden', display:'flex', flexDirection:'column', transition:'transform 0.3s, border-color 0.3s', transform: isOpen ? 'translateY(-4px)' : 'none'}}>
                <div style={{position:'relative', width:'100%', aspectRatio:'16/9', overflow:'hidden', background:`linear-gradient(135deg, ${t.bg}, ${c.bg})`}}>
                  {s.img ? (
                    <>
                      <img src={s.img} loading="lazy" decoding="async" style={{position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover'}}/>
                      <div style={{position:'absolute', inset:0, background:`linear-gradient(180deg, transparent 65%, ${c.bg}60)`}}/>
                    </>
                  ) : (
                    <>
                      <div style={{position:'absolute', inset:0, background:`radial-gradient(circle at 30% 30%, ${t.accent}30, transparent 70%)`}}/>
                      <div style={{position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', fontSize:80, color:t.accent, opacity:0.85, textShadow:`0 0 30px ${t.accent}80`}}>{s.sym}</div>
                    </>
                  )}
                  <div style={{position:'absolute', top:12, left:14, fontFamily:'var(--hand-en)', fontSize:24, color:'white', textShadow:'0 1px 8px rgba(0,0,0,0.6)'}}>#{s.num}</div>
                  <div style={{position:'absolute', top:14, right:14, fontSize:11, color:'white', fontFamily:'var(--hand-jp)', background:'rgba(0,0,0,0.45)', padding:'3px 10px', borderRadius:999, backdropFilter:'blur(4px)'}}>{s.tag}</div>
                </div>
                <div style={{padding:'18px 22px 22px', flex:1}}>
                  <div style={{fontSize:14, lineHeight:1.7, fontFamily:'var(--hand-jp)', fontWeight:500, color:c.text}}>{s.title}</div>
                </div>
                {hasDetail && (
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    style={{width:'100%', padding:'12px 22px', background:isOpen ? `${t.accent}18` : 'rgba(255,255,255,0.03)', border:'none', borderTop:`1px solid ${t.accent}30`, color:c.text, fontFamily:'var(--hand-jp)', fontSize:13, cursor:'pointer', display:'flex', justifyContent:'space-between', alignItems:'center', transition:'background 0.3s'}}
                  >
                    <span style={{opacity:0.85}}>内容を{isOpen ? '閉じる' : '見る'}</span>
                    <span style={{fontSize:14, color:t.accent, transform:isOpen ? 'rotate(180deg)' : 'none', transition:'transform 0.3s'}}>▼</span>
                  </button>
                )}
                {hasDetail && isOpen && (
                  <div style={{padding:'18px 22px 22px', borderTop:`1px dashed ${t.accent}40`, background:'rgba(0,0,0,0.18)'}}>
                    {s.core && s.core.length > 0 && (
                      <>
                        <div style={{fontFamily:'var(--hand-jp)', fontSize:11, color:t.accent, fontWeight:700, letterSpacing:0.5, marginBottom:8}}>核心</div>
                        <ul style={{margin:'0 0 16px', padding:0, listStyle:'none', display:'flex', flexDirection:'column', gap:8}}>
                          {s.core.map((x, j) => (
                            <li key={j} style={{display:'flex', gap:8, fontFamily:'var(--hand-jp)', fontSize:12.5, lineHeight:1.75, color:c.text, opacity:0.92}}>
                              <span style={{flexShrink:0, color:t.accent, fontWeight:700}}>✦</span>
                              <span>{x}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                    {s.quotes && s.quotes.length > 0 && (
                      <>
                        <div style={{fontFamily:'var(--hand-jp)', fontSize:11, color:t.accent, fontWeight:700, letterSpacing:0.5, marginBottom:8}}>印象的なフレーズ</div>
                        <div style={{display:'flex', flexDirection:'column', gap:9}}>
                          {s.quotes.map((q, j) => (
                            <div key={j} style={{padding:'10px 13px', background:`${t.accent}10`, borderLeft:`2px solid ${t.accent}90`, borderRadius:'0 6px 6px 0', fontFamily:'var(--hand-jp)', fontSize:13, lineHeight:1.7, color:c.text, fontStyle:'italic'}}>“{q}”</div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div style={{textAlign:'center', marginTop:40, fontFamily:'var(--hand-jp)', fontSize:18, color:c.accent}}>
          これらすべてが、この場の中で展開されています。
        </div>
      </div>
    </section>
    );
  };

  // EARTH BAND
  const EarthBand = () => (
    <section style={{position:'relative', height:380, overflow:'hidden'}}>
      <img src="assets/hero-watercolor.jpg" style={{position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', objectPosition:'center 40%'}}/>
      <div style={{position:'absolute', inset:0, background:'linear-gradient(180deg, rgba(15,10,46,0.55) 0%, rgba(15,10,46,0.15) 50%, rgba(15,10,46,0.85) 100%)'}}/>
      <div style={{position:'absolute', inset:0, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', color:'white', textAlign:'center', padding:'0 40px'}}>
        <div style={{fontFamily:'var(--hand-en)', fontSize:30, color:c.accent, transform:'rotate(-2deg)'}}>welcome to</div>
        <h2 style={{fontFamily:'var(--hand-jp)', fontSize:54, fontWeight:600, marginTop:14, lineHeight:1.35, textShadow:'0 2px 24px rgba(0,0,0,0.6)'}}>
          この地球で、新しいものを生み出す。
        </h2>
        <div style={{fontFamily:'var(--hand-en)', fontSize:22, color:c.pink, marginTop:18, transform:'rotate(2deg)'}}>let's play together ✦</div>
      </div>
    </section>
  );

  // GUESTS — 写真ギャラリー
  const Guests = () => {
    const [openIdx, setOpenIdx] = React.useState(null);
    const palette = [c.pink, c.accent, c.cyan, c.leaf, c.pink, c.accent, c.cyan, c.leaf, c.pink];
    return (
      <section id="guests" style={{padding:'100px 80px', background:c.bg, color:c.text, position:'relative', overflow:'hidden'}}>
        <Stars n={20}/>
        <div style={{maxWidth:1180, margin:'0 auto', position:'relative'}}>
          <div style={{textAlign:'center', marginBottom:32}}>
            <div style={{fontFamily:'var(--hand-en)', fontSize:32, color:c.accent}}>guest talks</div>
            <h2 style={{fontFamily:'var(--hand-jp)', fontSize:48, fontWeight:600, marginTop:8}}>濃密ゲスト対談</h2>
          </div>

          {/* リード文 */}
          <div style={{maxWidth:760, margin:'0 auto 56px', fontFamily:'var(--hand-jp)', fontSize:16, lineHeight:2, color:c.text, opacity:0.92, whiteSpace:'pre-line', textAlign:'center'}}>
            {D.guestTalks.lead}
          </div>

          {/* 3列グリッド */}
          <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:24}}>
            {D.guestTalks.cards.map((g, i) => {
              const col = palette[i];
              const isOpen = openIdx === i;
              return (
                <div key={i} style={{borderRadius:18, background:'rgba(255,255,255,0.04)', border:`1px solid ${col}55`, overflow:'hidden', display:'flex', flexDirection:'column', transition:'border-color 0.3s, transform 0.3s', transform: isOpen ? 'translateY(-4px)' : 'none'}}>
                  {/* 写真ヘッダー */}
                  <div style={{position:'relative', width:'100%', aspectRatio:'4/3', overflow:'hidden', background:`linear-gradient(135deg, ${col}30, ${c.bg2})`}}>
                    <img src={g.img} alt={g.name} loading="lazy" decoding="async" style={{position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', objectPosition:'center 25%'}}/>
                    <div style={{position:'absolute', top:12, left:12, fontFamily:'var(--hand-en)', fontSize:11, color:'white', background:`${col}d0`, padding:'4px 12px', borderRadius:999, letterSpacing:0.5}}>{g.month}</div>
                  </div>

                  {/* 基本情報 */}
                  <div style={{padding:'18px 20px 14px', flexGrow:1, display:'flex', flexDirection:'column'}}>
                    <div style={{fontFamily:'var(--hand-jp)', fontSize:19, fontWeight:700, lineHeight:1.35}}>{g.name}</div>
                    <div style={{fontFamily:'var(--hand-jp)', fontSize:11, color:c.text, opacity:0.7, marginTop:6, lineHeight:1.55}}>{g.caption}</div>
                    <div style={{marginTop:14, padding:'10px 13px', background:`${col}15`, border:`1px solid ${col}40`, borderRadius:8, fontFamily:'var(--hand-jp)', fontSize:13, lineHeight:1.55, color:col, fontWeight:600, flexGrow:1}}>
                      “{g.tagline}”
                    </div>
                  </div>

                  {/* 開閉ボタン */}
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    style={{width:'100%', padding:'12px 20px', background:isOpen ? `${col}18` : 'rgba(255,255,255,0.03)', border:'none', borderTop:`1px solid ${col}30`, color:c.text, fontFamily:'var(--hand-jp)', fontSize:12.5, cursor:'pointer', display:'flex', justifyContent:'space-between', alignItems:'center', transition:'background 0.3s'}}
                  >
                    <span style={{opacity:0.85}}>対談の内容を{isOpen ? '閉じる' : '見る'}</span>
                    <span style={{fontSize:14, color:col, transform:isOpen ? 'rotate(180deg)' : 'none', transition:'transform 0.3s'}}>▼</span>
                  </button>

                  {/* 展開部分 */}
                  {isOpen && (
                    <div style={{padding:'18px 20px 22px', borderTop:`1px dashed ${col}40`, background:'rgba(0,0,0,0.18)'}}>
                      {g.profile && (
                        <>
                          <div style={{fontFamily:'var(--hand-jp)', fontSize:11, color:col, fontWeight:700, letterSpacing:0.5, marginBottom:6}}>プロフィール</div>
                          <div style={{fontFamily:'var(--hand-jp)', fontSize:12.5, lineHeight:1.75, color:c.text, opacity:0.95, marginBottom:16}}>{g.profile}</div>
                        </>
                      )}
                      <div style={{fontFamily:'var(--hand-jp)', fontSize:11, color:col, fontWeight:700, letterSpacing:0.5, marginBottom:6}}>対談テーマ</div>
                      <div style={{fontFamily:'var(--hand-jp)', fontSize:12.5, lineHeight:1.75, color:c.text, opacity:0.95, marginBottom:16}}>{g.theme}</div>
                      <div style={{fontFamily:'var(--hand-jp)', fontSize:11, color:col, fontWeight:700, letterSpacing:0.5, marginBottom:6}}>ハイライト</div>
                      <ul style={{margin:0, padding:0, listStyle:'none', display:'flex', flexDirection:'column', gap:8}}>
                        {g.highlights.map((h, j) => (
                          <li key={j} style={{display:'flex', gap:8, fontFamily:'var(--hand-jp)', fontSize:12, lineHeight:1.7, color:c.text, opacity:0.92}}>
                            <span style={{flexShrink:0, color:col, fontWeight:700}}>✦</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* +α 過去ゲスト一覧の余白 */}
          <div style={{marginTop:48, padding:'18px 20px', borderTop:`1px dashed ${c.text}30`, fontFamily:'var(--hand-jp)', fontSize:13, lineHeight:1.7, color:c.text, opacity:0.7, textAlign:'center'}}>
            {D.guestTalks.plus}
          </div>
        </div>
      </section>
    );
  };

  // PROGRAMS — 本格講座セクション(PC)
  // PROGRAMS — 5つの本格連続講座(PC)
  const Programs = () => {
    const [openIdx, setOpenIdx] = React.useState(0);
    const totalSessions = D.programs.list.reduce((s,p)=>s + p.sessions, 0);
    const totalHours = D.programs.list.reduce((s,p)=>s + p.totalHours, 0);
    return (
      <section style={{padding:'120px 80px', background:`linear-gradient(180deg, ${c.bg2} 0%, ${c.bg} 100%)`, color:c.text, position:'relative', overflow:'hidden'}}>
        <Stars n={20}/>
        <div style={{maxWidth:1180, margin:'0 auto', position:'relative'}}>
          {/* Header */}
          <div style={{textAlign:'center', marginBottom:48}}>
            <div style={{fontFamily:'var(--hand-en)', fontSize:30, color:c.sun}}>{D.programs.en}</div>
            <h2 style={{fontFamily:'var(--hand-jp)', fontSize:42, fontWeight:600, marginTop:10, lineHeight:1.4}}>
              {D.programs.title}
            </h2>
          </div>

          {/* Big numbers headline */}
          <div style={{padding:'40px 48px', background:`linear-gradient(135deg, ${c.sun}18, ${c.accent}10)`, border:`1px solid ${c.sun}40`, borderRadius:20, marginBottom:60, display:'grid', gridTemplateColumns:'auto 1fr', gap:48, alignItems:'center'}}>
            <div style={{display:'flex', alignItems:'baseline', gap:20}}>
              <div style={{textAlign:'center'}}>
                <div style={{fontFamily:'var(--hand-en)', fontSize:64, color:c.sun, fontWeight:700, lineHeight:1}}>{totalSessions}</div>
                <div style={{fontFamily:'var(--hand-jp)', fontSize:13, color:c.text, opacity:0.85, marginTop:6}}>全講義回数</div>
              </div>
              <div style={{fontFamily:'var(--hand-en)', fontSize:24, color:c.text, opacity:0.5}}>×</div>
              <div style={{textAlign:'center'}}>
                <div style={{fontFamily:'var(--hand-en)', fontSize:64, color:c.sun, fontWeight:700, lineHeight:1}}>{totalHours}h</div>
                <div style={{fontFamily:'var(--hand-jp)', fontSize:13, color:c.text, opacity:0.85, marginTop:6}}>合計時間</div>
              </div>
            </div>
            <div>
              <div style={{fontFamily:'var(--hand-jp)', fontSize:20, lineHeight:1.6, color:c.text, fontWeight:700, whiteSpace:'pre-line'}}>{D.programs.leadHeadline}</div>
              <div style={{fontFamily:'var(--hand-jp)', fontSize:13.5, lineHeight:1.95, color:c.text, opacity:0.85, marginTop:14, whiteSpace:'pre-line'}}>{D.programs.leadBody}</div>
            </div>
          </div>

          {/* Program list - vertical stack of horizontal cards */}
          <div style={{display:'grid', gap:28}}>
            {D.programs.list.map((p,i)=>{
              const col = c[p.color];
              const isOpen = openIdx === i;
              return (
                <div key={i} style={{background:'rgba(255,255,255,0.04)', border:`1px solid ${col}55`, borderRadius:20, overflow:'hidden'}}>
                  <div style={{display:'grid', gridTemplateColumns:'380px 1fr', gap:0}}>
                    {/* Left: hero image */}
                    <div style={{position:'relative', minHeight:280, background:`linear-gradient(135deg, ${col}30, ${c.bg})`, overflow:'hidden'}}>
                      {p.img && <img src={p.img} loading="lazy" decoding="async" style={{position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover'}}/>}
                      <div style={{position:'absolute', inset:0, background:`linear-gradient(135deg, transparent 50%, ${c.bg}A0)`}}/>
                      {/* Number badge */}
                      <div style={{position:'absolute', top:16, left:16, width:42, height:42, borderRadius:'50%', background:'rgba(0,0,0,0.6)', backdropFilter:'blur(8px)', border:`1px solid ${col}90`, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--hand-en)', fontSize:18, color:col, fontWeight:700}}>{i+1}</div>
                      {/* LIVE badge */}
                      <div style={{position:'absolute', top:16, right:16, padding:'5px 12px', background:'rgba(255,72,72,0.85)', backdropFilter:'blur(6px)', borderRadius:5, display:'flex', alignItems:'center', gap:6}}>
                        <span style={{width:7, height:7, borderRadius:'50%', background:'white', boxShadow:'0 0 8px rgba(255,255,255,0.9)'}}/>
                        <span style={{fontFamily:'var(--hand-en)', fontSize:11, color:'white', fontWeight:700, letterSpacing:'0.1em'}}>LIVE</span>
                      </div>
                    </div>

                    {/* Right: details */}
                    <div style={{padding:'30px 36px', display:'flex', flexDirection:'column'}}>
                      <div style={{fontFamily:'var(--hand-jp)', fontSize:12, color:col, fontWeight:600, letterSpacing:'0.06em', opacity:0.9}}>{p.tagline}</div>
                      <h3 style={{fontFamily:'var(--hand-jp)', fontSize:24, fontWeight:700, lineHeight:1.35, color:c.text, marginTop:6}}>{p.name}</h3>

                      {/* Volume badge */}
                      <div style={{display:'inline-flex', alignSelf:'flex-start', alignItems:'center', gap:9, marginTop:14, padding:'7px 14px', background:`${col}22`, border:`1px solid ${col}55`, borderRadius:999}}>
                        <span style={{fontFamily:'var(--hand-en)', fontSize:11, color:col, fontWeight:700, letterSpacing:'0.08em'}}>LIVE</span>
                        <span style={{width:1, height:14, background:`${col}70`}}/>
                        <span style={{fontFamily:'var(--hand-jp)', fontSize:13, color:c.text, fontWeight:600}}>全{p.sessions}回 × 各3時間</span>
                        <span style={{fontFamily:'var(--hand-en)', fontSize:12, color:c.text, opacity:0.7}}>= {p.totalHours}h</span>
                      </div>

                      {/* Intro */}
                      <p style={{fontFamily:'var(--hand-jp)', fontSize:13.5, lineHeight:1.95, color:c.text, opacity:0.85, whiteSpace:'pre-line', margin:'18px 0 0'}}>{p.intro}</p>

                      {/* Toggle */}
                      <button onClick={()=>setOpenIdx(isOpen ? -1 : i)} style={{marginTop:18, alignSelf:'flex-start', padding:'10px 18px', background:isOpen ? `${col}25` : 'rgba(255,255,255,0.05)', border:`1px solid ${col}50`, borderRadius:999, color:c.text, fontFamily:'var(--hand-jp)', fontSize:13, fontWeight:600, cursor:'pointer', display:'flex', alignItems:'center', gap:10}}>
                        <span style={{fontFamily:'var(--hand-en)', fontSize:11, color:col, letterSpacing:'0.08em'}}>curriculum</span>
                        <span>各回のテーマを{isOpen ? '閉じる' : '見る'}</span>
                        <span style={{fontFamily:'var(--hand-en)', color:col, fontSize:14, transition:'transform 0.3s', transform:isOpen ? 'rotate(180deg)' : 'rotate(0deg)', display:'inline-block'}}>▾</span>
                      </button>
                    </div>
                  </div>

                  {/* Curriculum accordion (full-width below) */}
                  {isOpen && (
                    <div style={{padding:'28px 36px 36px', background:`${col}10`, borderTop:`1px solid ${col}30`}}>
                      <div style={{display:'grid', gridTemplateColumns: p.curriculum.length >= 4 ? 'repeat(auto-fit, minmax(220px, 1fr))' : `repeat(${p.curriculum.length}, 1fr)`, gap:18}}>
                        {p.curriculum.map((day,di)=>(
                          <div key={di} style={{padding:'18px 18px 20px', background:'rgba(255,255,255,0.04)', border:`1px solid ${col}40`, borderRadius:14}}>
                            <div style={{display:'flex', alignItems:'baseline', gap:8, marginBottom:10}}>
                              <span style={{fontFamily:'var(--hand-en)', fontSize:11, color:col, fontWeight:600, letterSpacing:'0.1em', opacity:0.8}}>DAY</span>
                              <span style={{fontFamily:'var(--hand-en)', fontSize:32, color:col, fontWeight:700, lineHeight:1}}>{day.day}</span>
                            </div>
                            <div style={{fontFamily:'var(--hand-jp)', fontSize:14, fontWeight:700, color:c.text, lineHeight:1.45}}>{day.title}</div>
                            <div style={{fontFamily:'var(--hand-jp)', fontSize:11.5, color:c.text, opacity:0.78, lineHeight:1.85, marginTop:8}}>{day.body}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Closing - membership inclusion */}
          <div style={{marginTop:48, padding:'36px 48px', background:`linear-gradient(135deg, ${c.sun}18, ${c.accent}15)`, border:`1px solid ${c.sun}50`, borderRadius:24, textAlign:'center', maxWidth:760, marginLeft:'auto', marginRight:'auto'}}>
            <div style={{fontFamily:'var(--hand-jp)', fontSize:17, color:c.text, lineHeight:1.8}}>
              これらすべてが、<span style={{color:c.accent, fontWeight:700}}>月額メンバーシップに含まれています</span>。
            </div>
          </div>

          {/* Closing note - free LINE */}
          <div style={{marginTop:18, padding:'18px 24px', background:'rgba(255,255,255,0.025)', border:'1px dashed rgba(255,255,255,0.18)', borderRadius:12, maxWidth:760, marginLeft:'auto', marginRight:'auto'}}>
            <p style={{fontFamily:'var(--hand-jp)', fontSize:12, color:c.text, opacity:0.7, lineHeight:1.95, whiteSpace:'pre-line', margin:0, textAlign:'center'}}>{D.programs.closingNote}</p>
          </div>
        </div>
      </section>
    );
  };

  // VOICE STORIES — ストーリー型の声(参加前→参加後・PC)
  const VoiceStories = () => (
    <section style={{padding:'120px 80px 60px', background:c.cream, color:c.ink, position:'relative', overflow:'hidden'}}>
      <LightStars withPath={true} />
      <div style={{maxWidth:1100, margin:'0 auto', position:'relative'}}>
        <div style={{textAlign:'center', marginBottom:48}}>
          <div style={{fontFamily:'var(--hand-en)', fontSize:30, color:c.pink}}>their stories ✦</div>
          <h2 style={{fontFamily:'var(--hand-jp)', fontSize:40, fontWeight:600, marginTop:8, lineHeight:1.45}}>
            ここで起きた、<span style={{color:c.pink}}>参加前と、参加後。</span>
          </h2>
          <p style={{fontFamily:'var(--hand-jp)', fontSize:14, opacity:0.7, marginTop:14, lineHeight:1.85}}>
            どう変わったか、を当人の言葉で。<br/>
            ※プライバシー保護のため、属性表記のみ掲載しています。
          </p>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:32}}>
          {D.voiceStories.map((s,i)=>{
            const col = i===0 ? c.cyan : c.accent;
            return (
              <article key={i} style={{background:'white', borderRadius:18, padding:'40px 36px', borderTop:`5px solid ${col}`, boxShadow:'0 12px 36px -12px rgba(0,0,0,0.14)'}}>
                <div style={{fontFamily:'var(--hand-jp)', fontSize:13, color:col, letterSpacing:'0.06em', fontWeight:600}}>{s.tag}</div>
                <h3 style={{fontFamily:'var(--hand-jp)', fontSize:26, fontWeight:600, lineHeight:1.55, marginTop:14, color:c.ink, whiteSpace:'pre-wrap'}}>{s.headline}</h3>
                <div style={{display:'grid', gap:24, marginTop:30}}>
                  <div>
                    <div style={{fontFamily:'var(--hand-en)', fontSize:13, color:c.ink, opacity:0.45, letterSpacing:'0.14em'}}>BEFORE</div>
                    <p style={{fontFamily:'var(--sans-jp)', fontSize:14.5, lineHeight:1.95, marginTop:8, color:c.ink, opacity:0.85, whiteSpace:'pre-wrap'}}>{s.before}</p>
                  </div>
                  <div style={{height:1, background:`${col}40`, position:'relative'}}>
                    <div style={{position:'absolute', left:'50%', top:'50%', transform:'translate(-50%, -50%)', background:'white', padding:'0 14px', fontFamily:'var(--hand-en)', fontSize:13, color:col, letterSpacing:'0.14em', fontWeight:600}}>↓</div>
                  </div>
                  <div>
                    <div style={{fontFamily:'var(--hand-en)', fontSize:13, color:col, opacity:0.85, letterSpacing:'0.14em', fontWeight:600}}>AFTER</div>
                    <p style={{fontFamily:'var(--sans-jp)', fontSize:14.5, lineHeight:1.95, marginTop:8, color:c.ink, whiteSpace:'pre-wrap'}}>{s.after}</p>
                  </div>
                </div>
                <div style={{marginTop:28, paddingTop:18, borderTop:`1px dashed ${c.ink}20`, fontFamily:'var(--hand-jp)', fontSize:12.5, color:c.ink, opacity:0.65, letterSpacing:'0.04em'}}>— {s.meta}</div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );

  // VOICES — リアルな声(ポラロイド/付箋風 PC マソンリー風)
  const Voices = () => {
    const [open, setOpen] = React.useState(null);
    // 3カラムマソンリー(順序を分配)
    const cols = [[],[],[]];
    D.voices.forEach((v,i)=>cols[i%3].push({...v, _i:i}));
    return (
      <section style={{padding:'120px 80px', background:c.cream, color:c.ink, position:'relative', overflow:'hidden'}}>
        <div style={{maxWidth:1200, margin:'0 auto'}}>
          <div style={{textAlign:'center', marginBottom:54}}>
            <div style={{fontFamily:'var(--hand-en)', fontSize:32, color:c.pink}}>real voices ✦</div>
            <h2 style={{fontFamily:'var(--hand-jp)', fontSize:48, fontWeight:600, marginTop:10, lineHeight:1.4}}>
              参加者の<span style={{color:c.pink}}>リアルな声</span>
            </h2>
            <div style={{fontFamily:'var(--hand-jp)', fontSize:14, color:c.ink, opacity:0.78, marginTop:14, lineHeight:1.9}}>
              セミナー後・対談後に、メンバーがそれぞれの言葉で書いた<br/>
              「アウトプット」を、そのまま掲載しています。
            </div>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:24, alignItems:'flex-start'}}>
            {cols.map((col, ci)=>(
              <div key={ci} style={{display:'flex', flexDirection:'column', gap:24}}>
                {col.map((v)=>{
                  const i = v._i;
                  const ccol = c[v.color];
                  const rot = (i % 4 === 0) ? ((i*7)%5 - 2) * 0.6 : 0;
                  const isOpen = open === i;
                  return (
                    <div key={i} style={{background:'white', padding:'22px 24px 26px', borderRadius:4, boxShadow:`10px 14px 32px -8px rgba(0,0,0,0.2), 0 4px 10px rgba(0,0,0,0.08)`, transform:`rotate(${rot}deg)`, position:'relative', borderTop:`4px solid ${ccol}`}}>
                      {/* マスキングテープ */}
                      <div style={{position:'absolute', top:-10, left:30, width:64, height:18, background:`${ccol}aa`, transform:'rotate(-3deg)', boxShadow:'0 2px 4px rgba(0,0,0,0.12)'}}/>
                      <div style={{fontFamily:'var(--hand-jp)', fontSize:12, letterSpacing:'0.05em', color:ccol, fontWeight:600, marginTop:10}}>{v.tag}</div>
                      <div style={{fontFamily:'var(--hand-jp)', fontSize:14, lineHeight:1.95, color:c.ink, marginTop:12, whiteSpace:'pre-wrap'}}>
                        {isOpen ? v.full : v.excerpt}
                      </div>
                      <button onClick={()=>setOpen(isOpen ? null : i)} style={{marginTop:16, padding:'6px 16px', border:`1px solid ${ccol}80`, borderRadius:999, background:'transparent', color:ccol, fontFamily:'var(--hand-jp)', fontSize:12, cursor:'pointer'}}>
                        {isOpen ? '閉じる' : 'もっと読む →'}
                      </button>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // COMMITMENT — この場で、何が起きているか(覚悟・本人の言葉)
  const Commitment = () => (
    <section style={{padding:'140px 80px 160px', background:`radial-gradient(ellipse at top, ${c.bg2} 0%, ${c.bg} 55%, #08051f 100%)`, color:c.text, position:'relative', overflow:'hidden'}}>
      <Stars n={36}/>
      {/* セクションヘッダ */}
      <div style={{position:'relative', textAlign:'center', maxWidth:840, margin:'0 auto 100px'}}>
        <div style={{fontFamily:'var(--hand-en)', fontSize:28, color:c.sun, opacity:0.9, letterSpacing:'0.05em'}}>— {D.commitment.eyebrow} —</div>
        <h2 style={{fontFamily:'var(--hand-jp)', fontSize:54, fontWeight:600, marginTop:24, lineHeight:1.4, whiteSpace:'pre-line', letterSpacing:'0.02em'}}>{D.commitment.title}</h2>
        <div style={{width:60, height:1, background:c.sun, opacity:0.5, margin:'40px auto 0'}}/>
      </div>

      {/* 3ブロック */}
      <div style={{position:'relative', maxWidth:920, margin:'0 auto', display:'flex', flexDirection:'column', gap:120}}>
        {D.commitment.blocks.map((b, i) => {
          const accents = [c.sun, c.pink, c.cyan];
          const col = accents[i];
          const reverse = i % 2 === 1;
          return (
            <div key={i} style={{position:'relative', display:'grid', gridTemplateColumns:'1fr', gap:0}}>
              {/* 装飾的なナンバー(背景) */}
              <div style={{position:'absolute', top:-60, [reverse ? 'left' : 'right']:-20, fontFamily:'var(--hand-en)', fontSize:200, color:col, opacity:0.07, fontWeight:700, lineHeight:1, letterSpacing:'-0.04em', pointerEvents:'none'}}>0{i+1}</div>

              {/* 引用 */}
              <div style={{position:'relative', textAlign:reverse ? 'right' : 'left', padding:reverse ? '0 0 0 80px' : '0 80px 0 0'}}>
                <div style={{fontFamily:'var(--hand-en)', fontSize:60, color:col, opacity:0.45, lineHeight:0.4}}>{reverse ? '”' : '“'}</div>
                <p style={{fontFamily:'var(--hand-jp)', fontSize:34, fontWeight:600, lineHeight:1.65, color:'#fff', whiteSpace:'pre-line', marginTop:18, letterSpacing:'0.02em'}}>{b.quote}</p>
              </div>

              {/* 本文 */}
              <div style={{marginTop:36, padding:reverse ? '0 0 0 80px' : '0 80px 0 0', textAlign:reverse ? 'right' : 'left', borderTop:`1px solid ${col}30`, paddingTop:32}}>
                <p style={{fontFamily:'var(--hand-jp)', fontSize:16.5, lineHeight:2.15, color:'rgba(255,255,255,0.88)', whiteSpace:'pre-line', maxWidth:600, marginLeft:reverse ? 'auto' : 0}}>{b.body}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* 余韻のクロージング */}
      <div style={{position:'relative', textAlign:'center', marginTop:110, maxWidth:580, margin:'110px auto 0'}}>
        <div style={{width:40, height:1, background:c.sun, opacity:0.4, margin:'0 auto 28px'}}/>
        <p style={{fontFamily:'var(--hand-jp)', fontSize:16, lineHeight:2.1, color:'rgba(255,255,255,0.72)', fontStyle:'italic'}}>{D.commitment.closing}</p>
      </div>
    </section>
  );

  // FIRST MONTH — PC 最初の1ヶ月の過ごし方
  const FirstMonth = () => (
    <section style={{padding:'90px 80px 80px', background:c.cream, color:c.ink, position:'relative', overflow:'hidden'}}>
      <LightStars withPath={true} />
      <div style={{position:'absolute', top:-60, right:-80, width:260, height:260, borderRadius:'50%', background:`radial-gradient(circle, ${c.sun}22 0%, transparent 70%)`}}/>
      <div style={{maxWidth:1100, margin:'0 auto', position:'relative'}}>
        <div style={{textAlign:'center', marginBottom:50}}>
          <div style={{fontFamily:'var(--hand-en)', fontSize:30, color:c.sun, transform:'rotate(-2deg)'}}>your first month ✦</div>
          <h2 style={{fontFamily:'var(--hand-jp)', fontSize:42, fontWeight:600, marginTop:8, color:c.ink}}>{D.firstMonth.title}</h2>
          <p style={{fontSize:15, opacity:0.78, marginTop:14, lineHeight:1.9, fontFamily:'var(--hand-jp)'}}>{D.firstMonth.sub}</p>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:24}}>
          {D.firstMonth.items.map((it,i)=>{
            const colors=[c.pink,c.cyan,c.earthLeaf,c.sun];
            const col = colors[i];
            return (
              <div key={i} style={{background:'#ffffff', border:`1px solid ${col}55`, borderTop:`4px solid ${col}`, borderRadius:14, padding:'28px 22px', minHeight:170, display:'flex', flexDirection:'column', gap:14}}>
                <div style={{fontFamily:'var(--hand-en)', fontSize:38, fontWeight:300, color:col, lineHeight:1, letterSpacing:'-0.02em'}}>{it.hand}</div>
                <div style={{fontSize:15, lineHeight:1.85, fontFamily:'var(--hand-jp)'}}>{it.text}</div>
              </div>
            );
          })}
        </div>
        <p style={{fontSize:13, opacity:0.65, marginTop:36, textAlign:'center', lineHeight:1.85, fontStyle:'italic'}}>{D.firstMonth.note}</p>
      </div>
    </section>
  );

  // REASSURANCE — PC 安心ポイント(3列グリッド)
  const Reassurance = () => (
    <section style={{padding:'100px 80px', background:c.cream, color:c.ink, position:'relative', overflow:'hidden'}}>
      <LightStars />
      <div style={{position:'absolute', top:-60, left:-60, width:240, height:240, borderRadius:'50%', background:`radial-gradient(circle, ${c.earthLeaf}25 0%, transparent 70%)`}}/>
      <div style={{position:'absolute', bottom:-60, right:-60, width:280, height:280, borderRadius:'50%', background:`radial-gradient(circle, ${c.cyan}22 0%, transparent 70%)`}}/>
      <div style={{maxWidth:1200, margin:'0 auto', position:'relative'}}>
        <div style={{textAlign:'center', marginBottom:50}}>
          <div style={{fontFamily:'var(--hand-en)', fontSize:30, color:c.earthLeaf, transform:'rotate(-2deg)'}}>be at ease ✦</div>
          <h2 style={{fontFamily:'var(--hand-jp)', fontSize:38, fontWeight:600, marginTop:6, color:c.ink}}>{D.reassurance.title}</h2>
          <p style={{fontSize:14.5, opacity:0.78, marginTop:12, lineHeight:1.9}}>{D.reassurance.sub}</p>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24}}>
          {D.reassurance.items.map((it,i)=>{
            const colors=[c.pink,c.cyan,c.earthLeaf,c.sun,c.accent,c.pink];
            const col = colors[i%6];
            return (
              <div key={i} className="anim-card-hover" style={{padding:'30px 28px', background:'white', borderRadius:16, boxShadow:'0 12px 28px rgba(0,0,0,0.07)', position:'relative', borderTop:`4px solid ${col}`, display:'flex', flexDirection:'column', gap:10}}>
                <div style={{display:'flex', alignItems:'center', gap:12}}>
                  <div style={{width:38, height:38, borderRadius:10, background:col, color:'white', display:'flex', alignItems:'center', justifyContent:'center', fontSize:20, fontWeight:800}}>✓</div>
                  <div style={{fontFamily:'var(--hand-en)', fontSize:18, color:col}}>{it.hand}</div>
                </div>
                <div style={{fontFamily:'var(--hand-jp)', fontSize:18, fontWeight:700, color:c.ink, lineHeight:1.5, marginTop:4}}>{it.title}</div>
                <div style={{fontSize:13.5, lineHeight:1.85, color:c.ink, opacity:0.78}}>{it.body}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );

  // PRICE
  const Price = () => (
    <section style={{padding:'100px 80px', background:c.cream, color:c.ink}}>
      <div style={{maxWidth:720, margin:'0 auto', padding:'56px 48px', background:`linear-gradient(135deg, ${c.bg}, ${c.bg2})`, color:c.text, borderRadius:32, position:'relative', overflow:'hidden', textAlign:'center'}}>
        <Stars n={14}/>
        <div style={{position:'relative'}}>
          <div style={{fontFamily:'var(--hand-en)', color:c.accent, fontSize:30}}>membership</div>
          <h2 style={{fontFamily:'var(--hand-jp)', fontSize:36, fontWeight:600, lineHeight:1.5, marginTop:14}}>
            この場に、<span style={{color:c.accent}}>一緒に居ませんか</span>
          </h2>
          <div style={{margin:'32px 0', padding:'28px 0', borderTop:`2px dashed ${c.accent}50`, borderBottom:`2px dashed ${c.accent}50`}}>
            <div style={{fontFamily:'var(--hand-en)', fontSize:72, fontWeight:700, color:c.accent}}>¥8,800<span style={{fontSize:20, opacity:0.7}}> /月</span></div>
            <div style={{fontSize:13, opacity:0.8, marginTop:10, fontFamily:'var(--hand-jp)', lineHeight:1.8}}>払い続けられる、でも適当にはできない<br/>そんなちょうどいい関係性で。</div>
          </div>
          <a href="https://ss.ldm.international/p/ej" className="anim-cta-pulse" style={{display:'block', textAlign:'center', textDecoration:'none', boxSizing:'border-box', width:'100%', padding:'20px', borderRadius:16, background:`linear-gradient(180deg, ${c.btnGreen}, ${c.btnGreenDeep})`, color:'white', fontWeight:800, fontSize:20, fontFamily:'var(--hand-jp)', letterSpacing:'0.05em', textShadow:'0 1px 2px rgba(0,0,0,0.35)', boxShadow:`0 0 40px ${c.btnGreen}80`, border:'2px solid rgba(255,255,255,0.4)'}}>
            ✦ コミュニティに参加する ✦
          </a>
          <div style={{marginTop:16, fontSize:13, fontFamily:'var(--hand-jp)', opacity:0.75, lineHeight:1.8}}>いつでも退会できます。追加料金もありません。</div>
        </div>
      </div>
    </section>
  );

  // OPEN CHAT — 離脱者の受け皿(無料の入口・PC)
  const OpenChat = () => (
    <section style={{padding:'80px 80px', background:c.cream, color:c.ink, borderTop:`1px dashed ${c.ink}25`}}>
      <div style={{maxWidth:720, margin:'0 auto', textAlign:'center'}}>
        <div style={{fontFamily:'var(--hand-en)', fontSize:24, color:c.pink, opacity:0.85}}>— still wondering? —</div>
        <h3 style={{fontFamily:'var(--hand-jp)', fontSize:28, fontWeight:600, marginTop:14, lineHeight:1.6, color:c.ink}}>
          まだ迷っている方へ。
        </h3>
        <p style={{fontFamily:'var(--hand-jp)', fontSize:15, opacity:0.78, marginTop:20, lineHeight:1.95}}>
          まずは無料のオープンチャットで、堀内の世界観に触れてみてください。<br/>
          そのうえで「もう少し近い距離で」と思ったら、戻ってきてもらえれば。
        </p>
        <a href={D.openChat.url} target="_blank" rel="noopener noreferrer" style={{
          display:'inline-flex', alignItems:'center', gap:10,
          marginTop:30, padding:'15px 36px', borderRadius:999,
          background:'transparent', border:`1.5px solid ${c.ink}45`,
          color:c.ink, textDecoration:'none',
          fontFamily:'var(--hand-jp)', fontSize:15, fontWeight:600,
        }}>
          オープンチャットを見てみる →
        </a>
        <div style={{fontFamily:'var(--hand-jp)', fontSize:12, opacity:0.55, marginTop:14, letterSpacing:'0.06em'}}>
          {D.openChat.label}・「{D.openChat.name}」
        </div>
      </div>
    </section>
  );

  const FAQ = () => (
    <section id="faq" style={{padding:'100px 80px', background:c.cream, color:c.ink, position:'relative', overflow:'hidden'}}>
      <LightStars withPath={true} />
      <div style={{maxWidth:840, margin:'0 auto', position:'relative'}}>
        <div style={{textAlign:'center', marginBottom:40}}>
          <div style={{fontFamily:'var(--hand-en)', fontSize:30, color:c.pink}}>faq</div>
          <h2 style={{fontFamily:'var(--hand-jp)', fontSize:40, fontWeight:600, marginTop:8}}>よくある質問</h2>
        </div>
        <div style={{display:'grid', gap:14}}>
          {D.faqs.map((f,i)=>(
            <details key={i} style={{padding:'22px 28px', background:c.bg, color:c.text, borderRadius:18}}>
              <summary style={{fontWeight:600, fontSize:16, cursor:'pointer', listStyle:'none', fontFamily:'var(--hand-jp)'}}>
                <span style={{color:c.accent, marginRight:10}}>Q.</span>{f.q}
              </summary>
              <p style={{fontSize:14, lineHeight:1.9, marginTop:14, opacity:0.85}}>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );

  // 中間CTA — 「発見」と「確信」の間で、軽く呼びかける
  const MidCTA = () => (
    <section style={{padding:'80px 80px 90px', background:c.cream, color:c.ink, position:'relative', overflow:'hidden'}}>
      <div style={{position:'absolute', top:'50%', left:'50%', width:380, height:380, borderRadius:'50%', background:`radial-gradient(circle, ${c.pink}15 0%, transparent 70%)`, transform:'translate(-50%, -50%)'}}/>
      <div style={{position:'relative', textAlign:'center', maxWidth:680, margin:'0 auto'}}>
        <div style={{fontFamily:'var(--hand-en)', fontSize:22, color:c.pink, opacity:0.85}}>— a quiet invitation —</div>
        <h3 style={{fontFamily:'var(--hand-jp)', fontSize:32, fontWeight:600, marginTop:18, lineHeight:1.65, color:c.ink}}>
          ここまでの空気感、<br/>
          少しでも<span style={{color:c.pink}}>「いいな」</span>と感じたなら。
        </h3>
        <p style={{fontFamily:'var(--hand-jp)', fontSize:15, opacity:0.75, marginTop:20, lineHeight:2}}>
          まずは、いま、この場の温度をそばで眺めてみてください。
        </p>
        <a href="https://ss.ldm.international/p/ej" className="anim-cta-pulse" style={{
          display:'inline-block', textDecoration:'none',
          marginTop:32, padding:'18px 56px', borderRadius:999,
          background:`linear-gradient(180deg, ${c.btnGreen}, ${c.btnGreenDeep})`,
          color:'#ffffff', fontFamily:'var(--hand-jp)', fontSize:17, fontWeight:700,
          border:'2px solid rgba(255,255,255,0.4)',
          boxShadow:`0 10px 30px ${c.btnGreen}55`,
          letterSpacing:'0.06em',
        }}>
          ✦ コミュニティに参加する ✦
        </a>
        <div style={{fontFamily:'var(--hand-jp)', fontSize:12.5, opacity:0.6, marginTop:14}}>
          詳しくは、もう少し読み進めてから。
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer style={{padding:'52px 40px', background:c.bg, color:c.text, textAlign:'center', position:'relative', overflow:'hidden'}}>
      <Stars n={12}/>
      <div style={{fontFamily:'var(--hand-en)', fontSize:32, color:c.accent}}>Earth Journey ✦</div>
      <div style={{fontSize:11, opacity:0.6, marginTop:8, letterSpacing:'0.25em'}}>© LIFE DESIGN METHOD</div>
    </footer>
  );

  // FOR WHOM — チェックリスト
  const ForWhom = () => {
    const items = D.forWhom.items;
    return (
      <section style={{padding:'120px 80px', background:c.cream, color:c.ink, position:'relative', overflow:'hidden'}}>
        {/* 水彩 装飾 */}
        <div style={{position:'absolute', top:-120, left:-100, width:380, height:380, borderRadius:'50%', background:`radial-gradient(circle, ${c.pink}30 0%, transparent 65%)`, filter:'blur(12px)'}}/>
        <div style={{position:'absolute', bottom:-140, right:-120, width:420, height:420, borderRadius:'50%', background:`radial-gradient(circle, ${c.cyan}28 0%, transparent 65%)`, filter:'blur(14px)'}}/>
        <div style={{position:'absolute', top:'40%', right:60, width:140, height:140, borderRadius:'50%', background:`radial-gradient(circle, ${c.sun}30 0%, transparent 70%)`, filter:'blur(10px)'}}/>
        {/* 手書き SVG スクリブル */}
        <svg style={{position:'absolute', top:80, right:120, width:140, height:80, opacity:0.7, pointerEvents:'none'}} viewBox="0 0 140 80">
          <path d="M5,40 Q35,5 70,30 T135,40" stroke={c.pink} strokeWidth="2" fill="none" strokeLinecap="round"/>
          <path d="M115,28 L135,40 L120,52" stroke={c.pink} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <svg style={{position:'absolute', bottom:120, left:80, width:120, height:80, opacity:0.6, pointerEvents:'none'}} viewBox="0 0 120 80">
          <circle cx="20" cy="40" r="3" fill={c.cyan}/>
          <circle cx="50" cy="20" r="2.5" fill={c.earthLeaf}/>
          <circle cx="80" cy="50" r="3" fill={c.pink}/>
          <circle cx="105" cy="25" r="2.5" fill={c.sun}/>
        </svg>
        {/* 手書きコメント */}
        <div style={{position:'absolute', top:140, left:60, fontFamily:'var(--hand-en)', fontSize:22, color:c.earthLeaf, transform:'rotate(-8deg)', opacity:0.85}}>maybe you ✦</div>
        <div style={{position:'absolute', bottom:90, right:90, fontFamily:'var(--hand-en)', fontSize:24, color:c.pink, transform:'rotate(6deg)', opacity:0.85}}>welcome ♡</div>
        {/* 星 */}
        {Array.from({length:8}).map((_,k)=>{
          const left = (k*13+7)%92, top = (k*23+11)%88;
          const size = 4 + (k%3);
          return <div key={k} style={{position:'absolute', left:`${left}%`, top:`${top}%`, width:size, height:size, borderRadius:'50%', background:[c.pink,c.cyan,c.sun,c.earthLeaf][k%4], opacity:0.5, pointerEvents:'none'}}/>;
        })}

        <div style={{maxWidth:980, margin:'0 auto', position:'relative'}}>
          <div style={{textAlign:'center', marginBottom:64}}>
            <div style={{fontFamily:'var(--hand-en)', fontSize:32, color:c.pink, transform:'rotate(-2deg)'}}>have you ever felt... ✦</div>
            <h2 style={{fontFamily:'var(--hand-jp)', fontSize:40, fontWeight:600, marginTop:14, color:c.ink, letterSpacing:'0.02em', lineHeight:1.5, whiteSpace:'pre-line'}}>{D.forWhom.title}</h2>
            <p style={{fontSize:14.5, opacity:0.7, marginTop:18, lineHeight:1.85}}>{D.forWhom.sub}</p>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'24px 36px'}}>
            {items.map((t,i)=>{
              const cols=[c.pink,c.cyan,c.earthLeaf,c.sun];
              const col = cols[i%4];
              return (
                <div key={i} className="anim-card-hover" style={{padding:'30px 32px 32px 36px', background:'white', borderRadius:14, boxShadow:`0 10px 28px ${col}25, 0 4px 10px rgba(0,0,0,0.05)`, borderLeft:`4px solid ${col}`, position:'relative'}}>
                  <div style={{position:'absolute', top:-12, left:24, fontFamily:'var(--hand-en)', fontSize:18, color:col, background:c.cream, padding:'0 10px', fontWeight:600, letterSpacing:'0.05em'}}>— {String(i+1).padStart(2,'0')} —</div>
                  <div style={{fontFamily:'var(--hand-jp)', fontSize:16, lineHeight:2, color:c.ink, fontWeight:500, whiteSpace:'pre-line', marginTop:6}}>{t}</div>
                </div>
              );
            })}
          </div>
          <div style={{textAlign:'center', marginTop:48, fontFamily:'var(--hand-jp)', fontSize:14, color:c.ink, opacity:0.65, lineHeight:1.9}}>
            ……もし、こうした感覚に覚えがあるなら。<br/>
            この先のページが、たぶんあなたに向けて書かれています。
          </div>
        </div>
      </section>
    );
  };

  // STATS — 数字で見るコミュニティ
  const Stats = () => {
    return (
      <section style={{padding:'90px 80px', background:c.bg, color:c.text, position:'relative', overflow:'hidden'}}>
        <Stars n={14}/>
        <div style={{maxWidth:1180, margin:'0 auto', position:'relative'}}>
          <div style={{textAlign:'center', marginBottom:50}}>
            <div style={{fontFamily:'var(--hand-en)', fontSize:28, color:c.accent, transform:'rotate(-2deg)'}}>by the numbers</div>
            <h2 style={{fontFamily:'var(--hand-jp)', fontSize:34, fontWeight:600, marginTop:6}}>数字で見るコミュニティ</h2>
          </div>
          <div style={{display:'grid', gridTemplateColumns:`repeat(${D.stats.length},1fr)`, gap:24}}>
            {D.stats.map((s,i)=>{
              const cols=[c.pink,c.cyan,c.earthLeaf,c.sun];
              const col = cols[i%4];
              return (
                <div key={i} className="anim-card-hover stat-card" data-num={s.num} style={{padding:'34px 24px', background:'rgba(255,255,255,0.04)', border:`1px solid ${col}55`, borderRadius:18, textAlign:'center', position:'relative', overflow:'hidden'}}>
                  <div style={{position:'absolute', top:-30, right:-30, width:100, height:100, borderRadius:'50%', background:`radial-gradient(circle, ${col}30 0%, transparent 70%)`}}/>
                  <div className="stat-num" style={{fontFamily:'var(--hand-en)', fontSize:64, fontWeight:300, color:col, lineHeight:1, letterSpacing:'-0.04em', position:'relative'}}>{s.num}</div>
                  <div style={{fontFamily:'var(--hand-jp)', fontSize:15, marginTop:14, fontWeight:600, position:'relative'}}>{s.label}</div>
                  <div style={{fontFamily:'var(--hand-jp)', fontSize:11.5, opacity:0.65, marginTop:4, position:'relative'}}>{s.sub}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };

  return () => (
    <div style={{background:c.bg, fontFamily:'var(--sans-jp)'}}>
      <Nav/><Hero/><HeroStats/><GuestStrip/><SceneBanner/>
      {/* ❶ 共感 */}
      <ForWhom/>
      {/* ❷ 納得 — 堀内の物語と実績 */}
      <About/><Profile/>
      {/* ❸ 発見 — 旅の中で展開されるもの */}
      <Contents/><Events/><RealPhotos/><EarthBand/>
      {/* — 中間CTA① — */}
      <MidCTA/>
      {/* ❹ 確信 — ゲスト・セミナー・講座 */}
      <Guests/><Seminars/><Programs/>
      {/* ❺ 覚悟 — この場で何が起きているか */}
      <Commitment/>
      {/* ❻ 安心 */}
      <VoiceStories/><Voices/><FirstMonth/><Reassurance/>
      {/* ❼ 決意 — 価格は最下部のここで初出 */}
      <Price/>
      <FAQ/><OpenChat/><Footer/>
    </div>
  );
})();
window.VarE_PC = VarE_PC;
