/* Variation E — B案ベース × A案水彩アース融合
   Hand-drawn / playful / cosmic + watercolor earth hero. */
const VarE = (() => {
  const D = window.LDM_DATA;
  const c = {
    bg: '#0f0a2e',
    bg2: '#1c1547',
    cream: '#fbf7ee',
    accent: '#ffd56b',
    sun: '#f5a847',
    pink: '#f48ec7',
    cyan: '#7fdcff',
    leaf: '#a8e063',
    btnGreen: '#3fb89a',         // ティールグリーン(青寄り) - FVと馴染む
    btnGreenDeep: '#2d8a73',     // 深いティール
    teal: '#5dbfb0',              // 明るめティール(セミナーカード用)
    tealDeep: '#1f5b5a',          // 深い暗ティール
    indigo: '#3b3577',            // 深い青紫(セミナーカード用)
    earthLeaf: '#88b56a',
    text: '#f5f0ff',
    ink: '#2a2238'
  };

  const Star = ({top, left, size=2, op=0.8}) => (
    <div className="anim-twinkle" style={{position:'absolute', top, left, width:size, height:size, borderRadius:'50%', background:'white', opacity:op, boxShadow:`0 0 ${size*2}px white`, pointerEvents:'none', animationDelay:`${(parseFloat(top)+parseFloat(left))%5}s`}} />
  );
  const Stars = () => (
    <>
      {[[8,12,3,0.9],[15,80,2,0.7],[25,40,2,0.8],[40,20,3,0.9],[55,75,2,0.6],[70,30,2,0.8],[85,60,3,0.9],[20,55,1,0.5],[60,15,2,0.7],[78,85,2,0.6]].map(([t,l,s,o],i)=>(
        <Star key={i} top={`${t}%`} left={`${l}%`} size={s} op={o} />
      ))}
    </>
  );

  // LightStars — ライトテーマセクション用(クリーム背景に微かな星と道)
  // 「旅」のモチーフがライトセクションでも途切れないよう、極めて控えめな存在感で配置
  const LightStars = ({withPath=false}) => (
    <>
      {[[12,8,2.5,0.18],[28,88,2,0.14],[20,45,1.5,0.12],[58,15,2.5,0.16],[72,72,2,0.14],[42,90,1.5,0.10],[88,30,2,0.16],[50,55,1.5,0.10],[78,8,2,0.13]].map(([t,l,s,o],i)=>(
        <div key={i} style={{position:'absolute', top:`${t}%`, left:`${l}%`, width:s, height:s, borderRadius:'50%', background:'#2a2238', opacity:o, pointerEvents:'none'}}/>
      ))}
      {/* 小さな手書き「✦」のサブ装飾 */}
      <div style={{position:'absolute', top:'18%', right:'10%', fontFamily:'var(--hand-en)', fontSize:14, color:'#2a2238', opacity:0.18, pointerEvents:'none'}}>✦</div>
      <div style={{position:'absolute', bottom:'14%', left:'8%', fontFamily:'var(--hand-en)', fontSize:11, color:'#2a2238', opacity:0.15, pointerEvents:'none'}}>✦</div>
      {/* 「道」のモチーフ — withPath=trueの時だけ繊細な曲線を1本 */}
      {withPath && (
        <svg style={{position:'absolute', bottom:0, left:0, width:'100%', height:80, opacity:0.08, pointerEvents:'none'}} viewBox="0 0 400 80" preserveAspectRatio="none">
          <path d="M-10 50 Q 80 30, 160 45 T 320 40 Q 380 38, 410 50" stroke="#2a2238" strokeWidth="1.5" fill="none" strokeDasharray="3 6" strokeLinecap="round"/>
        </svg>
      )}
    </>
  );

  // HERO — A案の水彩画像をフルブリードで使い、B案の手書きコピー&装飾を重ねる
  const Hero = () => (
    <div style={{position:'relative', width:'100%', aspectRatio:'9/13', overflow:'hidden', background: c.bg}}>
      <img src="assets/hero-watercolor.png" style={{position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', filter:'brightness(0.62) saturate(1.05)'}} />
      {/* 全体を暗めにする為のオーバーレイ + 上下のグラデ */}
      <div style={{position:'absolute', inset:0, background:'rgba(15,10,46,0.28)'}} />
      <div style={{position:'absolute', inset:0, background:'linear-gradient(180deg, rgba(15,10,46,0.45) 0%, rgba(15,10,46,0.1) 25%, rgba(15,10,46,0.2) 55%, rgba(15,10,46,0.92) 100%)'}} />

      {/* 手書きラベル — ロゴ重複解消のため削除済 */}
      <div style={{position:'absolute', top:38, right:18, fontFamily:'var(--hand-en)', color:c.accent, fontSize:22, transform:'rotate(8deg)', textShadow:'0 0 20px rgba(255,213,107,0.6)'}}>let's go ✦</div>
      <div style={{position:'absolute', top:64, left:18, fontFamily:'var(--hand-en)', color:c.pink, fontSize:16, transform:'rotate(-6deg)', opacity:0.95, textShadow:'0 0 12px rgba(0,0,0,0.4)'}}>✦ play ✦</div>

      {/* メインコピー */}
      <div style={{position:'absolute', bottom:0, left:0, right:0, padding:'20px 22px 26px', color:'white'}}>
        <div style={{fontFamily:'var(--hand-en)', fontSize:26, color: c.accent, marginBottom:6, textShadow:'0 2px 16px rgba(0,0,0,0.5)'}}>A new journey begins.</div>
        <h1 style={{fontFamily:'var(--hand-jp)', fontWeight:600, fontSize:38, lineHeight:1.25, textShadow:'0 2px 20px rgba(0,0,0,0.6)'}}>
          新しい地球を、<br/>
          <span style={{position:'relative', display:'inline-block'}}>
            仲間と遊ぶ。
            <svg style={{position:'absolute', bottom:-6, left:0, width:'100%', height:10}} viewBox="0 0 200 10" preserveAspectRatio="none">
              <path d="M2 6 Q 50 1, 100 5 T 198 4" stroke={c.accent} strokeWidth="3" fill="none" strokeLinecap="round" />
            </svg>
          </span>
        </h1>
        <p style={{marginTop:14, fontSize:11.5, lineHeight:1.7, opacity:0.85, fontFamily:'var(--hand-jp)', letterSpacing:'0.05em'}}>
          <span style={{display:'inline-block', padding:'3px 10px', borderRadius:999, background:'rgba(255,255,255,0.18)', backdropFilter:'blur(6px)', fontSize:10.5}}>LDM月額メンバーシップ</span>
        </p>
        <p style={{marginTop:10, fontSize:12.5, lineHeight:1.9, opacity:0.92}}>
          ライフ・デザイン・メソッド開発者・堀内恭隆と、<br/>地球という遊び場を旅するコミュニティ。
        </p>
        <div style={{display:'flex', gap:6, marginTop:16, flexWrap:'wrap'}}>
          {['#堀内との距離','#ゲスト対談','#エネルギーワーク','#リアルの場'].map(t => (
            <span key={t} style={{fontSize:10.5, padding:'5px 10px', background:'rgba(255,255,255,0.15)', backdropFilter:'blur(6px)', borderRadius:999, fontFamily:'var(--hand-jp)'}}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );

  // GUEST STRIP — ヒーロー直下の出演実績バナー(モバイル)
  const GuestStrip = () => (
    <section style={{padding:'24px 0 8px', background:c.bg, position:'relative', overflow:'hidden'}}>
      <div style={{textAlign:'center', marginBottom:12, padding:'0 24px'}}>
        <div style={{fontFamily:'var(--hand-en)', fontSize:14, color:c.cyan, letterSpacing:2}}>past guests ✦</div>
        <div style={{fontFamily:'var(--hand-jp)', fontSize:11.5, color:c.text, opacity:0.85, marginTop:4}}>これまでに出演してくれた、各界のフロントランナーたち</div>
      </div>
      <div style={{display:'flex', gap:10, padding:'8px 24px 14px', overflowX:'auto', scrollbarWidth:'none', WebkitOverflowScrolling:'touch'}}>
        {D.guests.map((g,i)=>{
          const colors=[c.pink,c.cyan,c.leaf,c.accent,c.pink,c.cyan,c.leaf,c.accent,c.pink];
          const col = colors[i];
          return (
            <div key={i} style={{flexShrink:0, width:72, textAlign:'center'}}>
              <div style={{position:'relative', width:72, height:72, borderRadius:'50%', overflow:'hidden', border:`2px solid ${col}`, background:c.bg2}}>
                <img src={g.img} loading="lazy" decoding="async" style={{width:'100%', height:'100%', objectFit:'cover', objectPosition:'center 20%'}}/>
              </div>
              <div style={{fontFamily:'var(--hand-jp)', fontSize:9, marginTop:6, color:c.text, lineHeight:1.3, fontWeight:600}}>{g.name}</div>
            </div>
          );
        })}
        <div style={{flexShrink:0, width:8}}/>
      </div>
    </section>
  );

  // HERO STATS — FV直下のシンプル数字帯(信頼の最低限)
  const HeroStats = () => (
    <section style={{padding:'18px 18px 22px', background:c.bg, borderBottom:`1px solid ${c.text}15`}}>
      <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:8, textAlign:'center'}}>
        {D.heroStats.map((s,i)=>(
          <div key={i} style={{padding:'4px 0'}}>
            <div style={{fontFamily:'var(--hand-en)', fontSize:24, fontWeight:700, color:i===0?c.accent:i===1?c.pink:c.cyan, lineHeight:1, letterSpacing:'-0.01em'}}>{s.num}</div>
            <div style={{fontFamily:'var(--hand-jp)', fontSize:10, color:c.text, opacity:0.75, marginTop:6, letterSpacing:'0.04em'}}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );

  // SCENE BANNER — 実際のオンラインセミナー風景
  const SceneBanner = () => (
    <section style={{padding:'40px 24px 24px', background:c.bg, position:'relative'}}>
      <div style={{textAlign:'center', marginBottom:18}}>
        <div style={{fontFamily:'var(--hand-en)', fontSize:20, color:c.cyan, lineHeight:1}}>live scene ✦</div>
        <div style={{fontFamily:'var(--hand-jp)', fontSize:13, color:'#ffffff', marginTop:6, opacity:0.95}}>
          画面の向こうに、たしかに「場」がある。
        </div>
      </div>
      {/* ポラロイド風フレーム */}
      <div style={{position:'relative', maxWidth:340, margin:'0 auto', transform:'rotate(-1.2deg)'}}>
        {/* マスキングテープ */}
        <div style={{position:'absolute', top:-10, left:'50%', transform:'translateX(-50%) rotate(2deg)', width:80, height:18, background:`${c.sun}cc`, opacity:0.85, zIndex:3, boxShadow:'0 2px 6px rgba(0,0,0,0.15)'}} />
        <div style={{background:'white', padding:'10px 10px 36px', boxShadow:'0 18px 40px -12px rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.2)', borderRadius:2}}>
          <div style={{position:'relative', width:'100%', aspectRatio:'1489/931', overflow:'hidden', background:'#0a0e1a'}}>
            <img src="assets/seminar-scene.png" style={{position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover'}} />
            {/* Zoomラベルをマスク(左上) */}
            <div style={{position:'absolute', top:'5%', left:'5.5%', width:'30%', height:'15%', background:`linear-gradient(135deg, ${c.pink}, ${c.accent})`, borderRadius:6, display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 2px 8px rgba(0,0,0,0.3)'}}>
              <div style={{fontFamily:'var(--hand-en)', fontSize:11, color:'white', textAlign:'center', lineHeight:1.2}}>LDM<br/>SESSION</div>
            </div>
            {/* 下部の小さい文字をマスク */}
            <div style={{position:'absolute', bottom:0, left:0, right:0, height:'8%', background:'linear-gradient(to top, rgba(10,14,26,0.9), transparent)'}} />
          </div>
          <div style={{textAlign:'center', marginTop:14, fontFamily:'var(--hand-jp)', fontSize:11, color:c.ink, opacity:0.7}}>
            ── オンラインセミナー風景より
          </div>
        </div>
      </div>
      <div style={{textAlign:'center', marginTop:22, fontFamily:'var(--hand-jp)', fontSize:12, lineHeight:1.8, color:c.text, opacity:0.85, maxWidth:300, margin:'22px auto 0'}}>
        全国・海外から参加できる、<br/>
        オンライン中心のジャーニー。<br/>
        <span style={{color:c.cyan}}>※ 録画アーカイブも視聴可能。</span>
      </div>
    </section>
  );

  // FOR-WHOM — もしかして、こんなふうに感じていませんか
  const ForWhom = () => (
    <section style={{padding:'56px 24px', background:c.cream, color:c.ink, position:'relative', overflow:'hidden'}}>
      <div style={{position:'absolute', top:-30, left:-30, width:100, height:100, borderRadius:'50%', background:`radial-gradient(circle, ${c.pink}25 0%, transparent 70%)`}}/>
      <div style={{position:'relative', textAlign:'center', marginBottom:28}}>
        <div style={{fontFamily:'var(--hand-en)', fontSize:22, color:c.pink}}>have you ever felt... ✦</div>
        <h2 style={{fontFamily:'var(--hand-jp)', fontSize:24, fontWeight:600, marginTop:8, lineHeight:1.5, whiteSpace:'pre-line'}}>{D.forWhom.title}</h2>
        <p style={{fontSize:11.5, opacity:0.7, marginTop:10, lineHeight:1.7}}>{D.forWhom.sub}</p>
      </div>
      <ul style={{listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:14, position:'relative'}}>
        {D.forWhom.items.map((it,i)=>{
          const colors=[c.pink,c.cyan,c.earthLeaf,c.sun];
          const col=colors[i];
          return (
            <li key={i} style={{padding:'16px 18px 18px 22px', background:'white', borderRadius:14, boxShadow:'0 2px 10px rgba(0,0,0,0.06)', borderLeft:`3px solid ${col}`, position:'relative'}}>
              <div style={{position:'absolute', top:-8, left:14, fontFamily:'var(--hand-en)', fontSize:14, color:col, background:c.cream, padding:'0 6px', fontWeight:600}}>— {String(i+1).padStart(2,'0')} —</div>
              <div style={{fontSize:13, lineHeight:1.95, fontFamily:'var(--hand-jp)', color:c.ink, whiteSpace:'pre-line', marginTop:4}}>{it}</div>
            </li>
          );
        })}
      </ul>
      <div style={{textAlign:'center', marginTop:24, fontFamily:'var(--hand-jp)', fontSize:12, color:c.ink, opacity:0.65, lineHeight:1.8}}>
        ……もし、こうした感覚に覚えがあるなら。<br/>
        この先のページが、たぶんあなたに向けて書かれています。
      </div>
    </section>
  );

  // STATS — 数字でわかる規模感
  const Stats = () => (
    <section style={{padding:'40px 24px', background:c.bg, color:c.text, position:'relative', overflow:'hidden'}}>
      <Stars />
      <div style={{position:'relative', display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:8, textAlign:'center'}}>
        {D.stats.map((s,i)=>{
          const colors=[c.accent,c.pink,c.cyan];
          return (
            <div key={i} className="stat-card" data-num={s.num}>
              <div className="stat-num" style={{fontFamily:'var(--hand-en)', fontSize:34, fontWeight:600, color:colors[i], lineHeight:1}}>{s.num}</div>
              <div style={{fontFamily:'var(--hand-jp)', fontSize:11.5, marginTop:8, fontWeight:600}}>{s.label}</div>
              <div style={{fontSize:9.5, marginTop:3, opacity:0.7, fontFamily:'var(--hand-jp)'}}>{s.sub}</div>
            </div>
          );
        })}
      </div>
    </section>
  );

  // ABOUT — クリーム背景に手書きのトーンで(D案: 小ポートレート+手書きラベル+水彩テクスチャ)
  const About = () => (
    <section id="about" style={{padding:'52px 24px', background:c.cream, color:c.ink, position:'relative', overflow:'hidden'}}>
      <div style={{position:'absolute', top:-40, right:-30, width:140, height:140, borderRadius:'50%', background:`radial-gradient(circle, ${c.sun}30 0%, transparent 70%)`}} />
      {/* 背景に薄い水彩テクスチャ */}
      <img src="assets/hero-watercolor.png" style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', objectFit:'cover', opacity:0.07, mixBlendMode:'multiply', pointerEvents:'none'}} alt=""/>
      <div style={{position:'relative'}}>
        <div style={{fontFamily:'var(--hand-en)', fontSize:24, color:c.pink, marginBottom:6}}>about us</div>
        <h2 style={{fontFamily:'var(--hand-jp)', fontSize:28, fontWeight:600, lineHeight:1.4, marginBottom:18}}>
          コミュニティと、<br/>はじまりの<span style={{position:'relative', display:'inline-block'}}>物語<svg style={{position:'absolute', bottom:-3, left:0, width:'100%', height:6}} viewBox="0 0 60 6" preserveAspectRatio="none"><path d="M2 4 Q 30 0, 58 3" stroke={c.sun} strokeWidth="2.5" fill="none" strokeLinecap="round"/></svg></span>。
        </h2>
        {/* 小ポートレート + 手書きラベル */}
        <div style={{display:'flex', alignItems:'center', gap:14, marginBottom:22}}>
          <div style={{position:'relative', width:62, height:62, borderRadius:'50%', overflow:'hidden', border:`2px solid ${c.sun}`, boxShadow:`0 3px 14px ${c.sun}40`, flexShrink:0}}>
            <img src="assets/horiuchi-portrait.png" style={{width:'100%', height:'100%', objectFit:'cover', objectPosition:'top'}} alt="堀内恭隆"/>
          </div>
          <div>
            <div style={{fontFamily:'var(--hand-en)', fontSize:18, color:c.pink, lineHeight:1, transform:'rotate(-2deg)'}}>since 2000 ✦</div>
            <div style={{fontFamily:'var(--hand-jp)', fontSize:11, color:c.ink, opacity:0.75, marginTop:4, letterSpacing:'0.04em'}}>25年の歩みと、これから</div>
          </div>
        </div>
        <div style={{fontSize:14, lineHeight:2}}>
          {(D.community.bodyParts || []).map((part, i) => {
            if (part.type === 'p') return (
              <p key={i} style={{whiteSpace:'pre-line', margin:'0 0 18px'}}>{part.text}</p>
            );
            if (part.type === 'quote') return (
              <div key={i} style={{margin:'24px 0', position:'relative', padding:'0 8px'}}>
                <div style={{fontFamily:'var(--hand-en)', fontSize:60, color:c.pink, lineHeight:1, opacity:0.8, transform:'translateY(8px)'}}>"</div>
                <p style={{fontFamily:'var(--hand-jp)', fontSize:18, lineHeight:1.7, whiteSpace:'pre-line', color:c.ink, margin:'0 0 0 14px', letterSpacing:'0.02em'}}>{part.text}</p>
                <div style={{fontFamily:'var(--hand-en)', fontSize:60, color:c.pink, lineHeight:1, opacity:0.8, textAlign:'right', transform:'translateY(-12px)'}}>"</div>
              </div>
            );
            if (part.type === 'sep') return (
              <div key={i} style={{display:'flex', alignItems:'center', justifyContent:'center', gap:12, margin:'28px 0', opacity:0.6}}>
                <span style={{fontFamily:'var(--hand-en)', fontSize:14, color:c.pink}}>✦</span>
                <span style={{flex:1, height:1, background:`linear-gradient(90deg, transparent, ${c.pink}40, transparent)`}}></span>
                <span style={{fontFamily:'var(--hand-en)', fontSize:14, color:c.pink}}>✦</span>
              </div>
            );
            return null;
          })}
        </div>
      </div>
    </section>
  );

  // PROFILE — コズミック背景に堀内さん
  const Profile = () => (
    <section id="profile" style={{padding:'52px 24px', background:`linear-gradient(180deg, ${c.bg2} 0%, ${c.bg} 100%)`, color:c.text, position:'relative', overflow:'hidden'}}>
      <Stars />
      <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:14, position:'relative'}}>
        <div style={{fontFamily:'var(--hand-en)', fontSize:22, color:c.accent}}>your guide</div>
        <div style={{position:'relative'}}>
          <div style={{width:170, height:170, borderRadius:'50%', overflow:'hidden', background:c.cream, border:`3px solid ${c.accent}`, boxShadow:`0 0 40px ${c.accent}40`}}>
            <img src="assets/horiuchi-portrait.png" style={{width:'100%', height:'100%', objectFit:'cover', objectPosition:'top'}} />
          </div>
          <div style={{position:'absolute', top:-6, right:-10, fontFamily:'var(--hand-en)', color:c.pink, fontSize:18, transform:'rotate(15deg)'}}>✦ guide</div>
          <div style={{position:'absolute', bottom:-4, left:-10, fontFamily:'var(--hand-en)', color:c.cyan, fontSize:14, transform:'rotate(-8deg)'}}>since 2000</div>
        </div>
        <div style={{textAlign:'center'}}>
          <h3 style={{fontFamily:'var(--hand-jp)', fontSize:26, fontWeight:600}}>{D.profile.name}</h3>
          <div style={{fontSize:11, opacity:0.7, marginTop:4, letterSpacing:'0.1em'}}>{D.profile.role}</div>
        </div>
        <p style={{fontSize:13, lineHeight:2, whiteSpace:'pre-line', textAlign:'center'}}>{D.profile.bio}</p>
        {/* 実績 */}
        <ul style={{listStyle:'none', padding:'14px 18px', margin:'8px 0 0', background:'rgba(255,255,255,0.06)', borderRadius:12, display:'flex', flexDirection:'column', gap:8, width:'100%', maxWidth:340}}>
          {D.achievements.map((a,i)=>(
            <li key={i} style={{fontSize:11.5, lineHeight:1.6, display:'flex', gap:10, alignItems:'flex-start', fontFamily:'var(--hand-jp)'}}>
              <span style={{color:c.accent, fontFamily:'var(--hand-en)', fontSize:14, lineHeight:1, marginTop:2}}>✦</span>
              <span>{a}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );

  // CONTENTS — 4 cards 手描き感
  const Contents = () => (
    <section style={{padding:'56px 24px', background:c.cream, color:c.ink}}>
      <div style={{fontFamily:'var(--hand-en)', fontSize:22, color:c.pink, textAlign:'center'}}>what we offer</div>
      <h2 style={{fontFamily:'var(--hand-jp)', fontSize:28, fontWeight:600, textAlign:'center', marginTop:6, marginBottom:30}}>この場に入ると、何がある？</h2>
      <div style={{borderTop:`1px solid ${c.ink}25`}}>
        {D.contents.map((co,i) => {
          const colors = [c.pink, c.cyan, c.earthLeaf, c.sun];
          const col = colors[i];
          return (
            <div key={i} style={{padding:'22px 0', borderBottom:`1px solid ${c.ink}25`, display:'grid', gridTemplateColumns:'auto 1fr', gap:18, alignItems:'baseline'}}>
              <div style={{fontFamily:'var(--hand-en)', fontSize:32, fontWeight:300, color:col, lineHeight:1, letterSpacing:'-0.02em', minWidth:46}}>0{i+1}</div>
              <div>
                <div style={{fontFamily:'var(--hand-en)', fontSize:10, color:col, letterSpacing:'0.18em', fontWeight:600}}>{co.tag}</div>
                <div style={{display:'flex', alignItems:'baseline', gap:10, marginTop:4, flexWrap:'wrap'}}>
                  <h4 style={{fontFamily:'var(--hand-jp)', fontSize:18, fontWeight:600, lineHeight:1.4, margin:0}}>{co.title}</h4>
                  <span style={{fontFamily:'var(--hand-jp)', fontSize:10.5, color:col, border:`1px solid ${col}66`, borderRadius:999, padding:'2px 9px', whiteSpace:'nowrap', letterSpacing:'0.04em'}}>{co.freq}</span>
                </div>
                <p style={{fontSize:12, lineHeight:1.8, marginTop:8, opacity:0.75}}>{co.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );

  // EVENTS — ポラロイド風集合写真
  const Events = () => (
    <section style={{padding:'56px 24px 64px', background:c.cream, color:c.ink, position:'relative', overflow:'hidden'}}>
      <div style={{textAlign:'center', marginBottom:34}}>
        <div style={{fontFamily:'var(--hand-en)', fontSize:24, color:c.pink}}>real gathering</div>
        <h2 style={{fontFamily:'var(--hand-jp)', fontSize:28, fontWeight:600, marginTop:6}}>{D.events.title}</h2>
        <p style={{fontSize:12.5, opacity:0.75, marginTop:8, lineHeight:1.8}}>{D.events.sub}</p>
      </div>
      <div style={{position:'relative', height:520, maxWidth:340, margin:'0 auto'}}>
        {D.events.photos.map((p,i)=>{
          const colors=[c.pink,c.cyan,c.earthLeaf];
          const layouts=[
            {top:0, left:8, rot:-4},
            {top:160, left:60, rot:3.5},
            {top:310, left:14, rot:-2.5}
          ];
          const L=layouts[i];
          return (
            <div key={i} className="anim-polaroid" style={{position:'absolute', top:L.top, left:L.left, width:260, padding:'10px 10px 36px', background:'white', borderRadius:4, boxShadow:'0 12px 28px rgba(0,0,0,0.18), 0 2px 6px rgba(0,0,0,0.1)', transform:`rotate(${L.rot}deg)`}}>
              <div style={{width:'100%', aspectRatio:'4/3', overflow:'hidden', background:'#eee'}}>
                <img src={p.src} style={{width:'100%', height:'100%', objectFit:'cover'}}/>
              </div>
              <div style={{position:'absolute', bottom:6, left:0, right:0, textAlign:'center', fontFamily:'var(--hand-jp)', fontSize:13, color:c.ink}}>{p.caption}</div>
              <div style={{position:'absolute', top:-12, right:-12, fontFamily:'var(--hand-en)', color:colors[i], fontSize:18, transform:`rotate(${-L.rot+5}deg)`, textShadow:'0 1px 2px rgba(0,0,0,0.1)'}}>{p.hand}</div>
            </div>
          );
        })}
      </div>
    </section>
  );

  // REAL PHOTOS — マソンリーグリッド(モバイル: 2列)
  const RealPhotos = () => (
    <section style={{padding:'56px 20px 64px', background:c.bg2, color:c.text, position:'relative', overflow:'hidden'}}>
      <Stars n={8}/>
      <div style={{textAlign:'center', marginBottom:24, position:'relative'}}>
        <div style={{fontFamily:'var(--hand-en)', fontSize:22, color:c.accent}}>real scene ✦</div>
        <h2 style={{fontFamily:'var(--hand-jp)', fontSize:24, fontWeight:600, marginTop:6}}>{D.realPhotos.title}</h2>
        <p style={{fontSize:11.5, opacity:0.75, marginTop:8, lineHeight:1.7}}>{D.realPhotos.sub}</p>
      </div>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, position:'relative'}}>
        {D.realPhotos.photos.map((p,i)=>{
          const tall = (i%3===0);
          return (
            <div key={i} style={{aspectRatio: tall ? '3/4' : '4/3', overflow:'hidden', borderRadius:8, position:'relative', background:'#222'}}>
              <img src={p.src} style={{width:'100%', height:'100%', objectFit:'cover'}}/>
              <div style={{position:'absolute', bottom:0, left:0, right:0, padding:'14px 8px 6px', background:'linear-gradient(180deg, transparent, rgba(0,0,0,0.8))', fontFamily:'var(--hand-jp)', color:'white', fontSize:10.5, lineHeight:1.4}}>{p.caption}</div>
            </div>
          );
        })}
      </div>
    </section>
  );

  // SEMINARS — 過去セミナー一覧
  const Seminars = () => {
    const [openIdx, setOpenIdx] = React.useState(null);
    return (
    <section id="seminars" style={{padding:'56px 24px', background:c.bg, color:c.text, position:'relative', overflow:'hidden'}}>
      <Stars />
      <div style={{position:'relative', textAlign:'center', marginBottom:30}}>
        <div style={{fontFamily:'var(--hand-en)', fontSize:24, color:c.accent}}>past seminars</div>
        <h2 style={{fontFamily:'var(--hand-jp)', fontSize:26, fontWeight:600, marginTop:6, lineHeight:1.4}}>{D.seminars.title}</h2>
        <p style={{fontSize:12, opacity:0.8, marginTop:8, lineHeight:1.8}}>{D.seminars.sub}</p>
      </div>
      <div style={{display:'grid', gap:10, position:'relative'}}>
        {D.seminars.list.map((s,i)=>{
          // FV統一トーンの3色をローテーション(深い青紫 / ティール / 深ティール)
          const tones = [
            {bg: c.indigo, accent: c.teal},
            {bg: c.tealDeep, accent: c.cyan},
            {bg: c.bg2, accent: c.teal},
          ];
          const t = tones[i%3];
          const isOpen = openIdx === i;
          const hasDetail = (s.core && s.core.length) || (s.quotes && s.quotes.length);
          return (
            <div key={i} style={{padding:'10px 10px 0', background:'rgba(255,255,255,0.04)', border:`1px solid ${t.accent}40`, borderRadius:12, display:'flex', flexDirection:'column', gap:10, overflow:'hidden'}}>
              <div style={{position:'relative', width:'100%', aspectRatio:'16/9', borderRadius:8, overflow:'hidden', background:`linear-gradient(135deg, ${t.bg}, ${c.bg})`}}>
                {s.img ? (
                  <>
                    <img src={s.img} loading="lazy" decoding="async" style={{position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover'}}/>
                    <div style={{position:'absolute', inset:0, background:`linear-gradient(180deg, transparent 70%, ${c.bg}60)`}}/>
                  </>
                ) : (
                  <>
                    <div style={{position:'absolute', inset:0, background:`radial-gradient(circle at 30% 30%, ${t.accent}30, transparent 70%)`}}/>
                    <div style={{position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', fontSize:42, color:t.accent, opacity:0.85, textShadow:`0 0 20px ${t.accent}80`}}>{s.sym}</div>
                  </>
                )}
                <div style={{position:'absolute', top:8, left:8, fontFamily:'var(--hand-en)', fontSize:11, color:'white', background:'rgba(0,0,0,0.55)', padding:'2px 8px', borderRadius:999, lineHeight:1.3, backdropFilter:'blur(4px)'}}>#{s.num}</div>
              </div>
              <div style={{padding:'2px 4px 6px'}}>
                <div style={{fontSize:10, color:t.accent, fontFamily:'var(--hand-jp)', opacity:0.95, letterSpacing:'0.04em'}}>{s.tag}</div>
                <div style={{fontSize:13, lineHeight:1.55, fontFamily:'var(--hand-jp)', fontWeight:500, marginTop:5, color:c.text}}>{s.title}</div>
              </div>
              {hasDetail && (
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  style={{margin:'0 -10px', padding:'9px 14px', background:isOpen ? `${t.accent}15` : 'rgba(255,255,255,0.03)', border:'none', borderTop:`1px solid ${t.accent}30`, color:c.text, fontFamily:'var(--hand-jp)', fontSize:11, cursor:'pointer', display:'flex', justifyContent:'space-between', alignItems:'center'}}
                >
                  <span style={{opacity:0.85}}>内容を{isOpen ? '閉じる' : '見る'}</span>
                  <span style={{fontSize:13, color:t.accent, transform:isOpen ? 'rotate(180deg)' : 'none', transition:'transform 0.3s'}}>▼</span>
                </button>
              )}
              {hasDetail && isOpen && (
                <div style={{margin:'0 -10px', padding:'14px 16px 16px', borderTop:`1px dashed ${t.accent}40`, background:'rgba(0,0,0,0.18)'}}>
                  {s.core && s.core.length > 0 && (
                    <>
                      <div style={{fontFamily:'var(--hand-jp)', fontSize:11, color:t.accent, fontWeight:700, letterSpacing:0.5, marginBottom:6}}>核心</div>
                      <ul style={{margin:'0 0 14px', padding:0, listStyle:'none', display:'flex', flexDirection:'column', gap:7}}>
                        {s.core.map((x, j) => (
                          <li key={j} style={{display:'flex', gap:8, fontFamily:'var(--hand-jp)', fontSize:11.5, lineHeight:1.7, color:c.text, opacity:0.92}}>
                            <span style={{flexShrink:0, color:t.accent, fontWeight:700}}>✦</span>
                            <span>{x}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  {s.quotes && s.quotes.length > 0 && (
                    <>
                      <div style={{fontFamily:'var(--hand-jp)', fontSize:11, color:t.accent, fontWeight:700, letterSpacing:0.5, marginBottom:6}}>印象的なフレーズ</div>
                      <div style={{display:'flex', flexDirection:'column', gap:8}}>
                        {s.quotes.map((q, j) => (
                          <div key={j} style={{padding:'9px 11px', background:`${t.accent}10`, borderLeft:`2px solid ${t.accent}90`, borderRadius:'0 6px 6px 0', fontFamily:'var(--hand-jp)', fontSize:12, lineHeight:1.65, color:c.text, fontStyle:'italic'}}>“{q}”</div>
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
      <div style={{textAlign:'center', marginTop:24, fontFamily:'var(--hand-jp)', fontSize:14, color:c.accent}}>
        これらすべてが、この場の中で展開されています。
      </div>
    </section>
    );
  };

  // EARTH BAND — A案の水彩画像をストライプ的に再利用してリズムを作る
  const EarthBand = () => (
    <section style={{position:'relative', height:260, overflow:'hidden'}}>
      <img src="assets/hero-watercolor.png" style={{position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', objectPosition:'center 40%'}} />
      <div style={{position:'absolute', inset:0, background:'linear-gradient(180deg, rgba(15,10,46,0.5) 0%, rgba(15,10,46,0.15) 50%, rgba(15,10,46,0.8) 100%)'}} />
      <div style={{position:'absolute', inset:0, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', color:'white', textAlign:'center', padding:'0 24px'}}>
        <div style={{fontFamily:'var(--hand-en)', fontSize:20, color:c.accent, transform:'rotate(-2deg)'}}>welcome to</div>
        <h2 style={{fontFamily:'var(--hand-jp)', fontSize:28, fontWeight:600, marginTop:6, textShadow:'0 2px 20px rgba(0,0,0,0.6)', lineHeight:1.4}}>
          この地球で、<br/>新しいものを生み出す。
        </h2>
        <div style={{fontFamily:'var(--hand-en)', fontSize:16, color:c.pink, marginTop:10, transform:'rotate(2deg)'}}>let's play together ✦</div>
      </div>
    </section>
  );

  // GUESTS — コズミックグリッド
  const Guests = () => {
    const [openIdx, setOpenIdx] = React.useState(null);
    const palette = [c.pink, c.accent, c.cyan, c.leaf, c.pink, c.accent, c.cyan, c.leaf, c.pink];
    return (
      <section id="guests" style={{padding:'52px 24px', background:c.bg, color:c.text, position:'relative', overflow:'hidden'}}>
        <Stars />
        <div style={{fontFamily:'var(--hand-en)', fontSize:24, color:c.accent, textAlign:'center', position:'relative'}}>guest talks</div>
        <h2 style={{fontFamily:'var(--hand-jp)', fontSize:28, fontWeight:600, textAlign:'center', marginTop:6, marginBottom:14, position:'relative'}}>濃密ゲスト対談</h2>

        {/* リード文 */}
        <div style={{maxWidth:520, margin:'0 auto 26px', fontFamily:'var(--hand-jp)', fontSize:13, lineHeight:1.85, color:c.text, opacity:0.9, whiteSpace:'pre-line', position:'relative', textAlign:'left'}}>
          {D.guestTalks.lead}
        </div>

        {/* カードリスト */}
        <div style={{display:'flex', flexDirection:'column', gap:14, position:'relative'}}>
          {D.guestTalks.cards.map((g, i) => {
            const col = palette[i];
            const isOpen = openIdx === i;
            return (
              <div key={i} style={{borderRadius:16, background:'rgba(255,255,255,0.04)', border:`1px solid ${col}55`, overflow:'hidden'}}>
                {/* 上部:写真 + 基本情報 */}
                <div style={{display:'flex', gap:12, padding:12}}>
                  <div style={{position:'relative', flexShrink:0, width:96, height:96, borderRadius:12, overflow:'hidden', background:`linear-gradient(135deg, ${col}30, ${c.bg2})`}}>
                    <img src={g.img} alt={g.name} loading="lazy" decoding="async" style={{position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', objectPosition:'center 25%'}}/>
                  </div>
                  <div style={{flex:1, minWidth:0}}>
                    <div style={{display:'inline-block', fontFamily:'var(--hand-en)', fontSize:10, color:col, background:`${col}1a`, padding:'2px 8px', borderRadius:999, marginBottom:5, letterSpacing:0.5}}>{g.month}</div>
                    <div style={{fontFamily:'var(--hand-jp)', fontSize:15, fontWeight:700, lineHeight:1.35}}>{g.name}</div>
                    <div style={{fontFamily:'var(--hand-jp)', fontSize:10, color:c.text, opacity:0.7, marginTop:3, lineHeight:1.45}}>{g.caption}</div>
                  </div>
                </div>
                {/* キャッチコピー */}
                <div style={{padding:'0 14px 12px'}}>
                  <div style={{fontFamily:'var(--hand-jp)', fontSize:13, lineHeight:1.55, color:col, fontWeight:600}}>
                    “{g.tagline}”
                  </div>
                </div>
                {/* 開閉ボタン */}
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  style={{width:'100%', padding:'10px 14px', background:isOpen ? `${col}15` : 'rgba(255,255,255,0.03)', border:'none', borderTop:`1px solid ${col}30`, color:c.text, fontFamily:'var(--hand-jp)', fontSize:11.5, cursor:'pointer', display:'flex', justifyContent:'space-between', alignItems:'center'}}
                >
                  <span style={{opacity:0.85}}>対談の内容を{isOpen ? '閉じる' : '見る'}</span>
                  <span style={{fontSize:14, color:col, transform:isOpen ? 'rotate(180deg)' : 'none', transition:'transform 0.3s'}}>▼</span>
                </button>
                {/* 展開部分 */}
                {isOpen && (
                  <div style={{padding:'14px 16px 18px', borderTop:`1px dashed ${col}40`, background:'rgba(0,0,0,0.15)'}}>
                    {g.profile && (
                      <>
                        <div style={{fontFamily:'var(--hand-jp)', fontSize:11, color:col, fontWeight:700, letterSpacing:0.5, marginBottom:6}}>プロフィール</div>
                        <div style={{fontFamily:'var(--hand-jp)', fontSize:12, lineHeight:1.7, color:c.text, opacity:0.95, marginBottom:14}}>{g.profile}</div>
                      </>
                    )}
                    <div style={{fontFamily:'var(--hand-jp)', fontSize:11, color:col, fontWeight:700, letterSpacing:0.5, marginBottom:6}}>対談テーマ</div>
                    <div style={{fontFamily:'var(--hand-jp)', fontSize:12, lineHeight:1.7, color:c.text, opacity:0.95, marginBottom:14}}>{g.theme}</div>
                    <div style={{fontFamily:'var(--hand-jp)', fontSize:11, color:col, fontWeight:700, letterSpacing:0.5, marginBottom:6}}>ハイライト</div>
                    <ul style={{margin:0, padding:0, listStyle:'none', display:'flex', flexDirection:'column', gap:7}}>
                      {g.highlights.map((h, j) => (
                        <li key={j} style={{display:'flex', gap:8, fontFamily:'var(--hand-jp)', fontSize:11.5, lineHeight:1.65, color:c.text, opacity:0.9}}>
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
        <div style={{marginTop:24, padding:'14px 16px', borderTop:`1px dashed ${c.text}30`, fontFamily:'var(--hand-jp)', fontSize:11, lineHeight:1.7, color:c.text, opacity:0.7, textAlign:'center', position:'relative'}}>
          {D.guestTalks.plus}
        </div>
      </section>
    );
  };

  // PROGRAMS — 5つの本格連続講座(モバイル)
  const Programs = () => {
    const [openIdx, setOpenIdx] = React.useState(0);  // 1個目だけ開いた状態でスタート
    const totalSessions = D.programs.list.reduce((s,p)=>s + p.sessions, 0);
    const totalHours = D.programs.list.reduce((s,p)=>s + p.totalHours, 0);
    return (
      <section style={{padding:'56px 24px 60px', background:`linear-gradient(180deg, ${c.bg2} 0%, ${c.bg} 100%)`, color:c.text, position:'relative', overflow:'hidden'}}>
        <Stars />
        {/* Header */}
        <div style={{textAlign:'center', position:'relative'}}>
          <div style={{fontFamily:'var(--hand-en)', fontSize:22, color:c.sun}}>{D.programs.en}</div>
          <h2 style={{fontFamily:'var(--hand-jp)', fontSize:22, fontWeight:600, lineHeight:1.5, marginTop:8}}>
            {D.programs.title}
          </h2>
        </div>

        {/* Big numbers headline */}
        <div style={{marginTop:28, padding:'20px 16px', background:`linear-gradient(135deg, ${c.sun}18, ${c.accent}10)`, border:`1px solid ${c.sun}40`, borderRadius:14, position:'relative'}}>
          <div style={{display:'flex', alignItems:'baseline', justifyContent:'center', gap:14, marginBottom:10}}>
            <div style={{textAlign:'center'}}>
              <div style={{fontFamily:'var(--hand-en)', fontSize:38, color:c.sun, fontWeight:700, lineHeight:1}}>{totalSessions}</div>
              <div style={{fontFamily:'var(--hand-jp)', fontSize:10, color:c.text, opacity:0.85, marginTop:4}}>全講義回数</div>
            </div>
            <div style={{fontFamily:'var(--hand-en)', fontSize:14, color:c.text, opacity:0.6}}>×</div>
            <div style={{textAlign:'center'}}>
              <div style={{fontFamily:'var(--hand-en)', fontSize:38, color:c.sun, fontWeight:700, lineHeight:1}}>{totalHours}h</div>
              <div style={{fontFamily:'var(--hand-jp)', fontSize:10, color:c.text, opacity:0.85, marginTop:4}}>合計時間</div>
            </div>
          </div>
          <div style={{fontFamily:'var(--hand-jp)', fontSize:13, lineHeight:1.7, color:c.text, textAlign:'center', whiteSpace:'pre-line', fontWeight:600}}>{D.programs.leadHeadline}</div>
          <div style={{fontFamily:'var(--hand-jp)', fontSize:11, lineHeight:1.8, color:c.text, opacity:0.85, marginTop:10, whiteSpace:'pre-line'}}>{D.programs.leadBody}</div>
        </div>

        {/* Program cards */}
        <div style={{display:'grid', gap:14, marginTop:24}}>
          {D.programs.list.map((p,i)=>{
            const col = c[p.color];
            const isOpen = openIdx === i;
            return (
              <div key={i} style={{background:'rgba(255,255,255,0.05)', border:`1px solid ${col}55`, borderRadius:14, overflow:'hidden'}}>
                {/* Hero image with LIVE badge */}
                <div style={{position:'relative', width:'100%', aspectRatio:'16/9', background:`linear-gradient(135deg, ${col}30, ${c.bg})`, overflow:'hidden'}}>
                  {p.img && <img src={p.img} loading="lazy" decoding="async" style={{position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover'}}/>}
                  <div style={{position:'absolute', inset:0, background:`linear-gradient(180deg, transparent 50%, ${c.bg}A0)`}}/>
                  {/* Number badge */}
                  <div style={{position:'absolute', top:10, left:10, width:28, height:28, borderRadius:'50%', background:'rgba(0,0,0,0.55)', backdropFilter:'blur(6px)', border:`1px solid ${col}90`, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--hand-en)', fontSize:13, color:col, fontWeight:700}}>{i+1}</div>
                  {/* LIVE badge */}
                  <div style={{position:'absolute', top:10, right:10, padding:'3px 8px', background:'rgba(255,72,72,0.85)', backdropFilter:'blur(4px)', borderRadius:4, display:'flex', alignItems:'center', gap:4}}>
                    <span style={{width:6, height:6, borderRadius:'50%', background:'white', boxShadow:'0 0 6px rgba(255,255,255,0.8)'}}/>
                    <span style={{fontFamily:'var(--hand-en)', fontSize:9, color:'white', fontWeight:700, letterSpacing:'0.08em'}}>LIVE</span>
                  </div>
                </div>

                {/* Title block */}
                <div style={{padding:'14px 16px 6px'}}>
                  <div style={{fontFamily:'var(--hand-jp)', fontSize:15, fontWeight:700, lineHeight:1.35, color:c.text}}>{p.name}</div>
                  <div style={{fontFamily:'var(--hand-jp)', fontSize:11.5, opacity:0.75, marginTop:4, lineHeight:1.5}}>{p.tagline}</div>

                  {/* Volume badge */}
                  <div style={{display:'inline-flex', alignItems:'center', gap:6, marginTop:10, padding:'5px 10px', background:`${col}20`, border:`1px solid ${col}50`, borderRadius:999}}>
                    <span style={{fontFamily:'var(--hand-en)', fontSize:10, color:col, fontWeight:700, letterSpacing:'0.06em'}}>LIVE</span>
                    <span style={{width:1, height:10, background:`${col}60`}}/>
                    <span style={{fontFamily:'var(--hand-jp)', fontSize:10.5, color:c.text, fontWeight:600}}>全{p.sessions}回 × 各3時間</span>
                    <span style={{fontFamily:'var(--hand-en)', fontSize:10, color:c.text, opacity:0.7}}>= {p.totalHours}h</span>
                  </div>
                </div>

                {/* Intro text */}
                <div style={{padding:'8px 16px 14px'}}>
                  <p style={{fontFamily:'var(--hand-jp)', fontSize:11.5, lineHeight:1.85, color:c.text, opacity:0.85, whiteSpace:'pre-line', margin:0}}>{p.intro}</p>
                </div>

                {/* Accordion toggle */}
                <button onClick={()=>setOpenIdx(isOpen ? -1 : i)} style={{width:'100%', padding:'12px 16px', background:isOpen ? `${col}20` : 'rgba(255,255,255,0.03)', border:'none', borderTop:`1px solid ${col}30`, color:c.text, fontFamily:'var(--hand-jp)', fontSize:11.5, fontWeight:600, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'space-between', textAlign:'left'}}>
                  <span style={{display:'flex', alignItems:'center', gap:8}}>
                    <span style={{fontFamily:'var(--hand-en)', fontSize:11, color:col, letterSpacing:'0.05em'}}>curriculum</span>
                    <span>各回のテーマ</span>
                  </span>
                  <span style={{fontFamily:'var(--hand-en)', color:col, fontSize:14, transition:'transform 0.3s', transform:isOpen ? 'rotate(180deg)' : 'rotate(0deg)', display:'inline-block'}}>▾</span>
                </button>

                {/* Accordion content */}
                {isOpen && (
                  <div style={{padding:'4px 16px 18px', background:`${col}10`}}>
                    {p.curriculum.map((day,di)=>(
                      <div key={di} style={{display:'flex', gap:12, padding:'12px 0', borderBottom: di < p.curriculum.length - 1 ? `1px dashed ${col}30` : 'none'}}>
                        <div style={{flexShrink:0, width:36, paddingTop:2}}>
                          <div style={{fontFamily:'var(--hand-en)', fontSize:9.5, color:col, fontWeight:600, letterSpacing:'0.08em', opacity:0.8}}>DAY</div>
                          <div style={{fontFamily:'var(--hand-en)', fontSize:22, color:col, fontWeight:700, lineHeight:1, marginTop:2}}>{day.day}</div>
                        </div>
                        <div style={{flex:1, minWidth:0}}>
                          <div style={{fontFamily:'var(--hand-jp)', fontSize:12.5, fontWeight:700, color:c.text, lineHeight:1.45}}>{day.title}</div>
                          <div style={{fontFamily:'var(--hand-jp)', fontSize:10.5, color:c.text, opacity:0.78, lineHeight:1.75, marginTop:5}}>{day.body}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Closing - membership inclusion */}
        <div style={{marginTop:26, padding:'20px 16px', background:`linear-gradient(135deg, ${c.sun}18, ${c.accent}15)`, border:`1px solid ${c.sun}50`, borderRadius:14, textAlign:'center'}}>
          <div style={{fontFamily:'var(--hand-jp)', fontSize:13, color:c.text, lineHeight:1.7}}>
            これらすべてが、<br/><span style={{color:c.accent, fontWeight:700}}>月額メンバーシップに含まれています</span>。
          </div>
        </div>

        {/* Closing note - free LINE */}
        <div style={{marginTop:14, padding:'14px 14px', background:'rgba(255,255,255,0.025)', border:'1px dashed rgba(255,255,255,0.18)', borderRadius:10}}>
          <p style={{fontFamily:'var(--hand-jp)', fontSize:10.5, color:c.text, opacity:0.7, lineHeight:1.85, whiteSpace:'pre-line', margin:0, textAlign:'center'}}>{D.programs.closingNote}</p>
        </div>
      </section>
    );
  };

  // VOICE STORIES — ストーリー型の声(参加前→参加後の変化)
  const VoiceStories = () => (
    <section style={{padding:'60px 24px 40px', background:c.cream, color:c.ink, position:'relative', overflow:'hidden'}}>
      <LightStars withPath={true} />
      <div style={{position:'relative', textAlign:'center', marginBottom:28}}>
        <div style={{fontFamily:'var(--hand-en)', fontSize:20, color:c.pink}}>their stories ✦</div>
        <h2 style={{fontFamily:'var(--hand-jp)', fontSize:23, fontWeight:600, marginTop:6, lineHeight:1.5}}>
          ここで起きた、<br/><span style={{color:c.pink}}>参加前と、参加後。</span>
        </h2>
      </div>
      <div style={{display:'grid', gap:22}}>
        {D.voiceStories.map((s,i)=>{
          const col = i===0 ? c.cyan : c.accent;
          return (
            <article key={i} style={{background:'white', borderRadius:14, padding:'24px 20px', borderTop:`4px solid ${col}`, boxShadow:'0 6px 24px -8px rgba(0,0,0,0.12)'}}>
              <div style={{fontFamily:'var(--hand-jp)', fontSize:10.5, color:col, letterSpacing:'0.06em', fontWeight:600}}>{s.tag}</div>
              <h3 style={{fontFamily:'var(--hand-jp)', fontSize:18, fontWeight:600, lineHeight:1.55, marginTop:10, color:c.ink, whiteSpace:'pre-wrap'}}>{s.headline}</h3>
              <div style={{display:'grid', gap:14, marginTop:18}}>
                <div>
                  <div style={{fontFamily:'var(--hand-en)', fontSize:11, color:c.ink, opacity:0.45, letterSpacing:'0.1em'}}>BEFORE</div>
                  <p style={{fontFamily:'var(--sans-jp)', fontSize:12, lineHeight:1.85, marginTop:5, color:c.ink, opacity:0.85, whiteSpace:'pre-wrap'}}>{s.before}</p>
                </div>
                <div style={{height:1, background:`${col}40`, position:'relative'}}>
                  <div style={{position:'absolute', left:'50%', top:'50%', transform:'translate(-50%, -50%)', background:'white', padding:'0 10px', fontFamily:'var(--hand-en)', fontSize:11, color:col, letterSpacing:'0.1em'}}>↓</div>
                </div>
                <div>
                  <div style={{fontFamily:'var(--hand-en)', fontSize:11, color:col, opacity:0.85, letterSpacing:'0.1em', fontWeight:600}}>AFTER</div>
                  <p style={{fontFamily:'var(--sans-jp)', fontSize:12, lineHeight:1.85, marginTop:5, color:c.ink, whiteSpace:'pre-wrap'}}>{s.after}</p>
                </div>
              </div>
              <div style={{marginTop:18, paddingTop:14, borderTop:`1px dashed ${c.ink}20`, fontFamily:'var(--hand-jp)', fontSize:11, color:c.ink, opacity:0.65, letterSpacing:'0.04em'}}>— {s.meta}</div>
            </article>
          );
        })}
      </div>
    </section>
  );

  // VOICES — リアルな声(ポラロイド/付箋風カード・モバイル)
  const Voices = () => {
    const [open, setOpen] = React.useState(null);
    return (
      <section style={{padding:'56px 0 60px', background:c.cream, color:c.ink, position:'relative', overflow:'hidden'}}>
        <LightStars />
        <div style={{position:'relative', padding:'0 24px', textAlign:'center', marginBottom:24}}>
          <div style={{fontFamily:'var(--hand-en)', fontSize:22, color:c.pink}}>real voices ✦</div>
          <h2 style={{fontFamily:'var(--hand-jp)', fontSize:26, fontWeight:600, marginTop:6, lineHeight:1.45}}>
            参加者の<span style={{color:c.pink}}>リアルな声</span>
          </h2>
          <div style={{fontFamily:'var(--hand-jp)', fontSize:11.5, opacity:0.75, marginTop:10, lineHeight:1.7}}>
            セミナー後・対談後に、<br/>メンバーがそれぞれの言葉で書いた「アウトプット」をそのまま。
          </div>
        </div>
        {/* 横スクロール */}
        <div style={{display:'flex', gap:14, padding:'10px 24px 20px', overflowX:'auto', scrollSnapType:'x mandatory'}}>
          {D.voices.map((v,i)=>{
            const col = c[v.color];
            const rot = (i%4 === 0) ? ((i%8 < 4) ? -1.2 : 1.2) : 0;
            const isOpen = open === i;
            return (
              <div key={i} style={{flex:'0 0 280px', scrollSnapAlign:'start', background:'white', padding:'14px 16px 18px', borderRadius:4, boxShadow:`6px 8px 22px -6px rgba(0,0,0,0.18), 0 2px 6px rgba(0,0,0,0.08)`, transform:`rotate(${rot}deg)`, position:'relative', borderTop:`3px solid ${col}`}}>
                {/* マスキングテープ */}
                <div style={{position:'absolute', top:-6, left:18, width:46, height:14, background:`${col}aa`, transform:'rotate(-3deg)', boxShadow:'0 1px 3px rgba(0,0,0,0.12)'}}/>
                <div style={{fontFamily:'var(--hand-jp)', fontSize:10.5, letterSpacing:'0.05em', color:col, fontWeight:600, marginTop:8}}>{v.tag}</div>
                <div style={{fontFamily:'var(--hand-jp)', fontSize:12, lineHeight:1.85, color:c.ink, marginTop:8, whiteSpace:'pre-wrap'}}>
                  {isOpen ? v.full : v.excerpt}
                </div>
                <button onClick={()=>setOpen(isOpen ? null : i)} style={{marginTop:12, padding:'4px 12px', border:`1px solid ${col}80`, borderRadius:999, background:'transparent', color:col, fontFamily:'var(--hand-jp)', fontSize:10.5, cursor:'pointer'}}>
                  {isOpen ? '閉じる' : 'もっと読む'}
                </button>
              </div>
            );
          })}
        </div>
        <div style={{textAlign:'center', marginTop:8, fontFamily:'var(--hand-jp)', fontSize:10, opacity:0.5}}>← 横にスワイプ →</div>
      </section>
    );
  };

  // COMMITMENT — この場で、何が起きているか(覚悟・本人の言葉)
  const Commitment = () => (
    <section style={{padding:'72px 0 80px', background:`radial-gradient(ellipse at top, ${c.bg2} 0%, ${c.bg} 60%, #08051f 100%)`, color:c.text, position:'relative', overflow:'hidden'}}>
      <Stars n={20}/>
      {/* セクションヘッダ */}
      <div style={{position:'relative', textAlign:'center', padding:'0 24px', marginBottom:48}}>
        <div style={{fontFamily:'var(--hand-en)', fontSize:20, color:c.sun, opacity:0.9, letterSpacing:'0.05em'}}>— {D.commitment.eyebrow} —</div>
        <h2 style={{fontFamily:'var(--hand-jp)', fontSize:28, fontWeight:600, marginTop:14, lineHeight:1.5, whiteSpace:'pre-line'}}>{D.commitment.title}</h2>
        <div style={{width:40, height:1, background:c.sun, opacity:0.5, margin:'22px auto 0'}}/>
      </div>

      {/* 3ブロック */}
      <div style={{position:'relative', display:'flex', flexDirection:'column', gap:56, padding:'0 24px'}}>
        {D.commitment.blocks.map((b, i) => {
          const accents = [c.sun, c.pink, c.cyan];
          const col = accents[i];
          return (
            <div key={i} style={{position:'relative'}}>
              {/* 装飾的なナンバー */}
              <div style={{position:'absolute', top:-22, right:-2, fontFamily:'var(--hand-en)', fontSize:60, color:col, opacity:0.18, fontWeight:700, lineHeight:1, letterSpacing:'-0.02em'}}>0{i+1}</div>
              {/* 引用ブロック */}
              <div style={{position:'relative', padding:'28px 24px 24px', background:`linear-gradient(180deg, ${col}12 0%, transparent 100%)`, borderLeft:`2px solid ${col}80`, borderRadius:'0 14px 14px 0'}}>
                <div style={{fontFamily:'var(--hand-en)', fontSize:32, color:col, opacity:0.4, lineHeight:0.4}}>“</div>
                <p style={{fontFamily:'var(--hand-jp)', fontSize:19, fontWeight:600, lineHeight:1.7, color:'#fff', whiteSpace:'pre-line', marginTop:6, letterSpacing:'0.01em'}}>{b.quote}</p>
              </div>
              {/* 本文 */}
              <div style={{padding:'20px 4px 0', fontFamily:'var(--hand-jp)', fontSize:13.5, lineHeight:2, color:'rgba(255,255,255,0.85)', whiteSpace:'pre-line'}}>{b.body}</div>
            </div>
          );
        })}
      </div>

      {/* 余韻のクロージング */}
      <div style={{position:'relative', textAlign:'center', marginTop:56, padding:'0 32px'}}>
        <div style={{width:24, height:1, background:c.sun, opacity:0.4, margin:'0 auto 18px'}}/>
        <p style={{fontFamily:'var(--hand-jp)', fontSize:13, lineHeight:2, color:'rgba(255,255,255,0.7)', fontStyle:'italic'}}>{D.commitment.closing}</p>
      </div>
    </section>
  );

  // FIRST MONTH — 最初の1ヶ月の過ごし方(プレッシャーゼロ)
  const FirstMonth = () => (
    <section style={{padding:'56px 24px 50px', background:c.cream, color:c.ink, position:'relative', overflow:'hidden'}}>
      <LightStars withPath={true} />
      <div style={{position:'absolute', top:-30, right:-40, width:120, height:120, borderRadius:'50%', background:`radial-gradient(circle, ${c.sun}22 0%, transparent 70%)`}}/>
      <div style={{position:'relative', textAlign:'center', marginBottom:26}}>
        <div style={{fontFamily:'var(--hand-en)', fontSize:22, color:c.sun}}>your first month ✦</div>
        <h2 style={{fontFamily:'var(--hand-jp)', fontSize:24, fontWeight:600, marginTop:6, lineHeight:1.45}}>{D.firstMonth.title}</h2>
        <p style={{fontSize:12.5, opacity:0.75, marginTop:8, lineHeight:1.7, fontFamily:'var(--hand-jp)'}}>{D.firstMonth.sub}</p>
      </div>
      <div style={{display:'flex', flexDirection:'column', gap:11, position:'relative', maxWidth:380, margin:'0 auto'}}>
        {D.firstMonth.items.map((it,i)=>{
          const colors=[c.pink,c.cyan,c.earthLeaf,c.sun];
          const col = colors[i];
          return (
            <div key={i} style={{background:'#ffffff', border:`1px solid ${col}55`, borderLeft:`4px solid ${col}`, borderRadius:10, padding:'14px 16px', display:'grid', gridTemplateColumns:'auto 1fr', gap:14, alignItems:'center'}}>
              <div style={{fontFamily:'var(--hand-en)', fontSize:22, fontWeight:300, color:col, lineHeight:1, letterSpacing:'-0.02em'}}>{it.hand}</div>
              <div style={{fontSize:13, lineHeight:1.65, fontFamily:'var(--hand-jp)'}}>{it.text}</div>
            </div>
          );
        })}
      </div>
      <p style={{fontSize:11.5, opacity:0.6, marginTop:22, textAlign:'center', lineHeight:1.7, fontStyle:'italic', maxWidth:340, marginLeft:'auto', marginRight:'auto'}}>{D.firstMonth.note}</p>
    </section>
  );

  // REASSURANCE — 安心ポイント(肯定形)
  const Reassurance = () => (
    <section style={{padding:'56px 22px 60px', background:c.cream, color:c.ink, position:'relative', overflow:'hidden'}}>
      <LightStars />
      <div style={{position:'absolute', top:-40, left:-40, width:140, height:140, borderRadius:'50%', background:`radial-gradient(circle, ${c.earthLeaf}25 0%, transparent 70%)`}}/>
      <div style={{position:'absolute', bottom:-50, right:-50, width:160, height:160, borderRadius:'50%', background:`radial-gradient(circle, ${c.cyan}25 0%, transparent 70%)`}}/>
      <div style={{position:'relative', textAlign:'center', marginBottom:30}}>
        <div style={{fontFamily:'var(--hand-en)', fontSize:24, color:c.earthLeaf}}>be at ease ✦</div>
        <h2 style={{fontFamily:'var(--hand-jp)', fontSize:24, fontWeight:600, marginTop:6}}>{D.reassurance.title}</h2>
        <p style={{fontSize:12, opacity:0.75, marginTop:8, lineHeight:1.7}}>{D.reassurance.sub}</p>
      </div>
      <div style={{display:'flex', flexDirection:'column', gap:14, position:'relative'}}>
        {D.reassurance.items.map((it,i)=>{
          const colors=[c.pink,c.cyan,c.earthLeaf,c.sun,c.accent,c.pink];
          const col = colors[i%6];
          return (
            <div key={i} style={{padding:'18px 20px', background:'white', borderRadius:14, boxShadow:'0 6px 18px rgba(0,0,0,0.06)', display:'flex', gap:14, alignItems:'flex-start', borderLeft:`4px solid ${col}`}}>
              <div style={{flex:'0 0 32px', height:32, borderRadius:8, background:col, color:'white', display:'flex', alignItems:'center', justifyContent:'center', fontSize:18, fontWeight:800}}>✓</div>
              <div style={{flex:1}}>
                <div style={{fontFamily:'var(--hand-en)', fontSize:14, color:col, marginBottom:2}}>{it.hand}</div>
                <div style={{fontFamily:'var(--hand-jp)', fontSize:14.5, fontWeight:700, color:c.ink, lineHeight:1.45}}>{it.title}</div>
                <div style={{fontSize:11.5, lineHeight:1.7, color:c.ink, opacity:0.78, marginTop:4}}>{it.body}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );

  // PRICE
  const Price = () => (
    <section style={{padding:'52px 24px', background:c.cream, color:c.ink}}>
      <div style={{padding:'30px 22px', background:`linear-gradient(135deg, ${c.bg} 0%, ${c.bg2} 100%)`, color:c.text, borderRadius:24, position:'relative', overflow:'hidden'}}>
        <Stars />
        <div style={{textAlign:'center', position:'relative'}}>
          <div style={{fontFamily:'var(--hand-en)', color:c.accent, fontSize:20}}>membership</div>
          <h2 style={{fontFamily:'var(--hand-jp)', fontSize:22, fontWeight:600, lineHeight:1.5, marginTop:10}}>
            この場に、<br/><span style={{color:c.accent}}>一緒に居ませんか</span>
          </h2>
          <div style={{margin:'24px 0 20px', padding:'18px 0', borderTop:`2px dashed ${c.accent}50`, borderBottom:`2px dashed ${c.accent}50`}}>
            <div style={{fontFamily:'var(--hand-en)', fontSize:44, fontWeight:700, color:c.accent}}>¥8,800<span style={{fontSize:14, opacity:0.7}}> /月</span></div>
            <div style={{fontSize:11, opacity:0.75, marginTop:6, fontFamily:'var(--hand-jp)', lineHeight:1.7}}>払い続けられる、でも適当にはできない<br/>そんなちょうどいい関係性で。</div>
          </div>
          <a href="https://ss.ldm.international/p/ej" className="anim-cta-pulse" style={{display:'block', textAlign:'center', textDecoration:'none', boxSizing:'border-box', width:'100%', padding:'17px', borderRadius:14, background:`linear-gradient(180deg, ${c.btnGreen} 0%, ${c.btnGreenDeep} 100%)`, color:'#ffffff', fontWeight:800, fontSize:17, fontFamily:'var(--hand-jp)', letterSpacing:'0.05em', textShadow:'0 1px 2px rgba(0,0,0,0.35)', boxShadow:`0 0 30px ${c.btnGreen}80`, border:'2px solid rgba(255,255,255,0.4)'}}>
            ✦ コミュニティに参加する ✦
          </a>
          <div style={{marginTop:12, fontSize:11, fontFamily:'var(--hand-jp)', opacity:0.75, lineHeight:1.7}}>
            いつでも退会できます。<br/>追加料金もありません。
          </div>
        </div>
      </div>
    </section>
  );

  const FAQ = () => (
    <section id="faq" style={{padding:'52px 24px', background:c.cream, color:c.ink, position:'relative', overflow:'hidden'}}>
      <LightStars withPath={true} />
      <div style={{position:'relative', fontFamily:'var(--hand-en)', fontSize:22, color:c.pink, textAlign:'center'}}>faq</div>
      <h2 style={{fontFamily:'var(--hand-jp)', fontSize:24, fontWeight:600, textAlign:'center', marginTop:6, marginBottom:20}}>よくある質問</h2>
      <div style={{display:'grid', gap:10}}>
        {D.faqs.map((f,i) => (
          <details key={i} style={{padding:'14px 16px', background:c.bg, color:c.text, borderRadius:14}}>
            <summary style={{fontWeight:600, fontSize:13, cursor:'pointer', listStyle:'none', fontFamily:'var(--hand-jp)'}}>
              <span style={{color:c.accent, marginRight:6}}>Q.</span>{f.q}
            </summary>
            <p style={{fontSize:12, lineHeight:1.8, marginTop:10, opacity:0.85}}>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );

  // OPEN CHAT — 離脱者の受け皿(無料の入口)
  const OpenChat = () => (
    <section style={{padding:'48px 24px 56px', background:c.cream, color:c.ink, borderTop:`1px dashed ${c.ink}25`}}>
      <div style={{maxWidth:340, margin:'0 auto', textAlign:'center'}}>
        <div style={{fontFamily:'var(--hand-en)', fontSize:16, color:c.pink, opacity:0.85}}>— still wondering? —</div>
        <h3 style={{fontFamily:'var(--hand-jp)', fontSize:18, fontWeight:600, marginTop:10, lineHeight:1.7, color:c.ink}}>
          まだ迷っている方へ。
        </h3>
        <p style={{fontFamily:'var(--hand-jp)', fontSize:12.5, opacity:0.78, marginTop:14, lineHeight:1.95}}>
          まずは無料のオープンチャットで、<br/>
          堀内の世界観に触れてみてください。
        </p>
        <a href={D.openChat.url} target="_blank" rel="noopener noreferrer" style={{
          display:'inline-flex', alignItems:'center', gap:8,
          marginTop:20, padding:'12px 24px', borderRadius:999,
          background:'transparent', border:`1.5px solid ${c.ink}40`,
          color:c.ink, textDecoration:'none',
          fontFamily:'var(--hand-jp)', fontSize:13, fontWeight:600,
        }}>
          オープンチャットを見てみる →
        </a>
        <div style={{fontFamily:'var(--hand-jp)', fontSize:10.5, opacity:0.55, marginTop:10, letterSpacing:'0.04em'}}>
          {D.openChat.label}・「{D.openChat.name}」
        </div>
      </div>
    </section>
  );

  // 中間CTA — 「発見」と「確信」の間で、軽く呼びかける(価格表示なし)
  const MidCTA = () => (
    <section style={{padding:'48px 24px 56px', background:c.cream, color:c.ink, position:'relative', overflow:'hidden'}}>
      <div style={{position:'absolute', top:'50%', left:'50%', width:160, height:160, borderRadius:'50%', background:`radial-gradient(circle, ${c.pink}18 0%, transparent 70%)`, transform:'translate(-50%, -50%)'}}/>
      <div style={{position:'relative', textAlign:'center', maxWidth:340, margin:'0 auto'}}>
        <div style={{fontFamily:'var(--hand-en)', fontSize:18, color:c.pink, opacity:0.85}}>— a quiet invitation —</div>
        <h3 style={{fontFamily:'var(--hand-jp)', fontSize:20, fontWeight:600, marginTop:12, lineHeight:1.7, color:c.ink}}>
          ここまでの空気感、<br/>
          少しでも<span style={{color:c.pink}}>「いいな」</span>と感じたなら。
        </h3>
        <p style={{fontFamily:'var(--hand-jp)', fontSize:12.5, opacity:0.75, marginTop:14, lineHeight:1.95}}>
          まずは、いま、この場の温度を<br/>
          そばで眺めてみてください。
        </p>
        <a href="https://ss.ldm.international/p/ej" className="anim-cta-pulse" style={{
          display:'inline-block', textDecoration:'none',
          marginTop:24, padding:'15px 36px', borderRadius:999,
          background:`linear-gradient(180deg, ${c.btnGreen}, ${c.btnGreenDeep})`,
          color:'#ffffff', fontFamily:'var(--hand-jp)', fontSize:14, fontWeight:700,
          border:'2px solid rgba(255,255,255,0.4)',
          boxShadow:`0 8px 24px ${c.btnGreen}55`,
          letterSpacing:'0.06em',
        }}>
          ✦ コミュニティに参加する ✦
        </a>
        <div style={{fontFamily:'var(--hand-jp)', fontSize:10.5, opacity:0.6, marginTop:10}}>
          詳しくは、もう少し読み進めてから。
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer style={{padding:'36px 24px 110px', background:c.bg, color:c.text, textAlign:'center', position:'relative', overflow:'hidden'}}>
      <Stars />
      <div style={{fontFamily:'var(--hand-en)', fontSize:24, color:c.accent}}>Earth Journey ✦</div>
      <div style={{fontSize:10, opacity:0.6, marginTop:6, letterSpacing:'0.2em'}}>© LIFE DESIGN METHOD</div>
    </footer>
  );

  // STICKY CTA — モバイル下部に常時表示(position: sticky でframe内に貼り付く)
  const StickyCTA = () => {
    const [visible, setVisible] = React.useState(false);
    const ref = React.useRef(null);
    React.useEffect(()=>{
      const el = ref.current ? ref.current.closest('.lp-frame') : null;
      const scroller = el || window;
      const onScroll = () => {
        const top = scroller === window ? window.scrollY : scroller.scrollTop;
        const h = scroller === window ? window.innerHeight : scroller.clientHeight;
        setVisible(top > h * 0.6);
      };
      onScroll();
      scroller.addEventListener('scroll', onScroll, { passive:true });
      return () => scroller.removeEventListener('scroll', onScroll);
    }, []);
    return (
      <div ref={ref} style={{
        position:'sticky', bottom:0, left:0, right:0, zIndex:50,
        marginTop: visible ? -84 : 0,
        height: visible ? 'auto' : 0,
        overflow:'visible',
        padding: visible ? '10px 14px 14px' : '0 14px',
        background:'linear-gradient(180deg, rgba(15,10,46,0) 0%, rgba(15,10,46,0.92) 35%, rgba(15,10,46,0.98) 100%)',
        opacity: visible ? 1 : 0,
        transition:'opacity .3s ease, margin-top .3s ease',
        pointerEvents: visible ? 'auto' : 'none',
      }}>
        <a href="https://ss.ldm.international/p/ej" className="anim-cta-pulse" style={{
          display:'block', textAlign:'center', textDecoration:'none', boxSizing:'border-box',
          width:'100%', padding:'15px', borderRadius:14,
          background:`linear-gradient(180deg, ${c.btnGreen} 0%, ${c.btnGreenDeep} 100%)`,
          color:'#ffffff', fontFamily:'var(--hand-jp)', fontSize:16, fontWeight:700,
          border:'none', boxShadow:`0 8px 24px ${c.btnGreen}55, 0 0 0 1px rgba(255,255,255,0.1) inset`,
          letterSpacing:'0.04em',
        }}>
          ✦ コミュニティに参加する ✦
        </a>
      </div>
    );
  };

  return () => (
    <div style={{background:c.bg, fontFamily:'var(--sans-jp)'}}>
      <Hero /><HeroStats /><GuestStrip /><SceneBanner />
      {/* ❶ 共感 */}
      <ForWhom />
      {/* ❷ 納得 — 堀内が世界に出ていくプロジェクト */}
      <About /><Profile />
      {/* ❸ 発見 — 旅の中で展開されるもの */}
      <Contents /><Events /><RealPhotos /><EarthBand />
      {/* — 中間CTA① — */}
      <MidCTA />
      {/* ❹ 確信 — ゲスト・セミナー・講座 */}
      <Guests /><Seminars /><Programs />
      {/* ❺ 覚悟 — この場で何が起きているか */}
      <Commitment />
      {/* ❻ 安心 — 参加者の声と安心の場 */}
      <VoiceStories /><Voices /><FirstMonth /><Reassurance />
      {/* ❼ 決意 — 価格は最下部のここで初出 */}
      <Price />
      <FAQ /><OpenChat /><Footer />
      <StickyCTA />
    </div>
  );
})();
window.VarE = VarE;
