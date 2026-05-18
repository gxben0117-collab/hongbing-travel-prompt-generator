function buildProControlPrompt(){
  const actionGuard=/sword|blade|martial|combat|battle|weapon|spear|cape|xianxia/i.test(proControls.action)
    ?" Action anatomy guard: weapon must be held naturally with correct grip, blade direction must be clear, arms must not cross into impossible positions, fingers must remain separate and anatomically correct, motion blur may appear around fabric or weapon but never on the face, no duplicate weapons unless explicitly requested."
    :"";
  const roleGuard=" Action field workflow: extract the physical action from the selected style example first; when no action exists, compose one clean action from role, location, costume, prop, and story tension.";
  return [
    `Camera language: ${proControls.lens}.`,
    `Pose and action direction: ${proControls.action}. Follow this as an active pose instruction, not just mood words.${actionGuard}${roleGuard}`,
    "Action safety premise: keep the selected pose physically readable, balanced, and natural; hands, fingers, limbs, fabric motion, props, and camera angle must support the action without covering the face.",
    "Wardrobe integrity: complete outfit construction, clean skirt or sleeve drape, accessories attached logically to hair or clothing, fabric and jewelry may change freely as long as anatomy stays correct.",
    `Anti-failure guard: ${proControls.guard}.`
  ].join(" ");
}

function roleActionSeed(text){
  let h=0;
  for(let i=0;i<text.length;i++)h=(h*31+text.charCodeAt(i))>>>0;
  return (h ^ (Date.now() & 0xffff)) >>> 0;
}
function pickRoleAction(text,options){
  return options[roleActionSeed(text)%options.length];
}
function presetExplicitActionText(p){
  if(!p)return"";
  const raw=[p.char,p.prop,p.cam,p.s].filter(Boolean).join(" ");
  const actionRe=/sitting|seated|standing|walking|kneeling|dancing|turning|looking back|holding|gripping|raising|leaning|stepping|running|rising|pointing|reaching|casting|opening|touching|blessing|commanding|riding|flying|pose|gesture|mid-turn|crossed-leg|坐姿|坐|站立|站|行走|走|奔跑|跑|跪|舞|旋身|回眸|手持|持|握|拿|舉|抬|伸手|施法|倚靠|靠|騎|俯衝|漂浮|開封|祝福|指向|轉身|側身|仰拍|低角度|構圖/i;
  return actionRe.test(raw)?raw:"";
}
function summarizeExplicitActionText(raw){
  const tags=[];
  [
    [/雙手持|兩手持/i,"holding the prop with both hands"],
    [/手持|持|握|拿/i,"holding the specified prop naturally"],
    [/長劍|刀|武器|劍|sword|katana|blade/i,"weapon held with clear grip and direction"],
    [/奔跑|跑|running/i,"running or fast movement"],
    [/行走|走|walking/i,"walking movement"],
    [/坐姿|坐|seated|sitting/i,"seated pose"],
    [/跪|kneeling/i,"kneeling pose"],
    [/舞|旋身|dancing|mid-turn/i,"dance or turning motion"],
    [/回眸|looking back/i,"looking-back pose"],
    [/站立|站|standing/i,"standing pose"],
    [/倚靠|靠|leaning/i,"leaning pose"],
    [/騎|俯衝|riding|flying/i,"riding or flying movement"],
    [/伸手|施法|舉|抬|reaching|casting|raising/i,"extended-hand or casting gesture"],
    [/低角度|仰拍|low-angle/i,"low-angle heroic framing"],
    [/全身|full-body/i,"full-body readable framing"],
    [/側身|轉身|profile|three-quarter/i,"turned body or three-quarter body angle"]
  ].forEach(([re,label])=>{if(re.test(raw)&&!tags.includes(label))tags.push(label)});
  const english=cleanEnglishLine(raw);
  if(english.length>40)return english.slice(0,360);
  return tags.length?tags.join(", "):"the existing preset pose/action described in Props or Composition";
}
function cleanActionDirectiveText(text){
  return String(text||"")
    .replace(/ is the primary body action/gi,"")
    .replace(/ must stay readable/gi," readable")
    .replace(/must follow/gi,"follows")
    .replace(/\s{2,}/g," ")
    .trim();
}
function cleanPresetNegativeTerms(text){
  return String(text||"")
    .replace(/\bwrong pose\b/gi,"incoherent anatomy")
    .replace(/\s{2,}/g," ")
    .trim();
}
function buildRoleActionPrompt(p){
  if(!p)return"";
  const text=[p._id,p.n,p.cat,p.char,p.o,p.s,p.prop,p.fx,p.cam].filter(Boolean).join(" ").toLowerCase();
  const explicitAction=presetExplicitActionText(p);
  const rules=[
    [/魅魔|succubus|alluring|誘惑|酒廊|cabaret|boudoir|velvet|rose|玫瑰|黑羽夜宴|暗香舞會/i,[
      "tasteful seductive power pose: camera pulled back to full-body or knee-up fashion distance, slow confident walk toward camera, one shoulder angled, lace sleeve or dress train trailing, direct magnetic eye contact, one hand near a prop or collarbone without covering the face, head naturally small relative to the body",
      "alluring lounge or throne pose: seated diagonally with elegant crossed-leg silhouette, full torso and legs readable, one hand resting on velvet armrest, other hand holding a glass, feather fan, silk ribbon, or rose, face clear but not enlarged",
      "dark ballroom dance pose: full-body mid-turn with skirt and sleeves spiraling, hips and shoulders angled gracefully, gaze locked on camera, sensual but premium editorial, no vulgar body emphasis, no close-up crop"
    ]],
    [/魔王|demon lord|dark lord|overwhelming|霸權|王座|煉獄|深淵|黑城|abyss|infernal/i,[
      "overlord command action: low-angle cinematic pose, one hand raised issuing an order, cape opening like dark wings, magic or embers gathering behind, expression calm and absolute",
      "rising from throne action: stepping down from a black throne or broken stair, long cape sweeping outward, one hand gripping sword, crystal orb, or crimson sigil scroll, face clear and intimidating",
      "battlefield ruler pose: standing amid ash, banners, or ruins with weapon lowered beside the body, shoulders square, chin slightly lifted, quiet oppressive power rather than generic standing"
    ]],
    [/女王|queen|empress|王權|王冠|imperial|royal|sovereign|貴妃|guifei/i,[
      "royal procession pose: walking through palace doors or down ceremonial stairs, one hand lifting the cape or skirt train, attendants and banners blurred behind, composed sovereign gaze",
      "throne-room authority pose: seated or leaning at the edge of a throne, one hand on armrest, jewelry and cape arranged clearly, face sharp, powerful but elegant",
      "coronation gesture: one hand touching crown or scepter, the other controlling the train or fan, light forming a halo around the silhouette, premium royal poster energy"
    ]],
    [/妲己|九尾|狐|fox|妖后|狐火|daji|ninefox/i,[
      "fox-enchantress sleeve action: turning through palace lanterns with one long sleeve hiding a charm or fan, fox-fire curling behind, eyes playful and dangerous",
      "court intrigue pose: leaning beside lacquer screen or bronze table, one hand holding a cup, mask, or hairpin token, red silk smoke moving around the body",
      "night-market hunter walk: walking between lanterns with cloak and fox-tail shaped silk trails flowing, one hand holding a fox mask, face clear in warm light"
    ]],
    [/嫦娥|change|moon|月|廣寒|玉兔|lunar/i,[
      "moon-goddess floating step: rising or walking up moonlit stairs, gauze sleeves drifting like clouds, one hand reaching toward silver petals or jade rabbit lantern, serene face clear",
      "cold immortal pose: seated beside moon osmanthus or jade railing, sleeve pooled around her, head turned toward camera with lonely elegance, no generic standing",
      "celestial sleeve dance: slow mid-turn under a full moon, long translucent sleeves forming a crescent arc, hair and veil moving softly, face crisp"
    ]],
    [/九天玄女|玄女|war goddess|thunder|雷|神將|天軍|女將|general|戰姬|battlefield|warrior/i,[
      "divine commander action: one hand raising a thunder talisman or battle order, cloak and banners blown upward, army or clouds below, face calm and commanding",
      "battle-ready stride: walking through dust, snow, or cloud battlefield with spear or sword lowered, armor skirt and cape moving, low-angle heroic poster composition",
      "strategic command pose: standing over a map, altar, or city wall, two fingers pointing forward as lightning or war flags respond, hands natural and readable"
    ]],
    [/女媧|nuwa|創世|補天|五彩石|creation|creator/i,[
      "creation ritual action: raising a five-colored stone toward a cracked sky, both arms elegant and anatomically correct, rainbow light wrapping the body, face softly determined",
      "primordial kneeling pose: kneeling beside river or clay figure with one hand shaping glowing life, robe spread naturally, compassionate creator expression",
      "mountain altar gesture: standing on a sacred altar as dragon-serpent light circles the waist, one hand guiding creation energy, not a static portrait"
    ]],
    [/媽祖|mazu|海上女神|sea goddess|巨浪|海|浪|harbor|港|船/i,[
      "sea-protector action: standing on rocks or temple steps with robe and cape shaped like waves, one hand blessing distant boats, sea spray frozen around the body",
      "lantern-guiding pose: holding a glowing sea lantern toward the horizon, wind driving sleeves and hair back, face lit warmly and readable",
      "storm-calming gesture: one palm extended toward a giant wave, the other steadying the robe, protective divine aura, body powerful but graceful"
    ]],
    [/西施|xishi|浣紗|溪|lotus|荷|江南|water pavilion/i,[
      "quiet waterside story pose: kneeling or leaning beside stream washing silk, reflection and willow leaves visible, face turned gently toward camera",
      "soft walking-in-rain pose: walking through old town or bridge with silk bundle or umbrella, robe hem moving, melancholic but natural travel-photo motion",
      "lotus-pavilion pose: one hand touching lotus or railing, body angled toward water reflection, understated graceful beauty"
    ]],
    [/昭君|zhaojun|琵琶|pipa|大漠|desert|frontier|草原|出塞/i,[
      "frontier farewell walk: walking beside a horse or caravan with pipa held close, cloak blown by desert wind, gaze looking back toward the pass",
      "pipa-performance pose: standing or sitting on frontier rocks, one hand on pipa strings, geese and sunset behind, dignified sorrow",
      "snow-pass resolve: standing in snow at a border gate, red cloak wrapping around body, pipa visible, face calm and brave"
    ]],
    [/貂蟬|diaochan|舞|dance|dancer|歌舞|ballroom|stage|名伶|歌姬|idol/i,[
      "dance-story action: mid-turn with long sleeves, shawl, or stage ribbons forming a clear arc, face sharp at the center of motion, hands elegant and readable",
      "secret-token pose: holding a hairpin, fan, or letter near the chest, body angled beside lanterns or screen, intelligent dramatic gaze",
      "stage finale pose: one arm extended and one foot stepping forward under spotlight, costume fabric flowing, cinematic performance energy"
    ]],
    [/仙俠|劍仙|御劍|sword|blade|martial|武打|刺客|assassin|俠|xianxia/i,[
      "xianxia weapon action: sword or blade held with correct grip and clear direction, robe and ribbons flying, face sharp, motion blur only around weapon and fabric",
      "flying-sword movement: stepping or gliding above clouds with one hand controlling sword energy, body readable, no impossible arm crossing",
      "martial stance: grounded footwork, one arm guarding and one arm striking or drawing blade, powerful core tension, clean silhouette and visible fingers"
    ]],
    [/天使|angel|聖女|holy|seraph|wing|羽翼|精靈|elf|fairy|仙子/i,[
      "sacred descent action: stepping down through light or cloud stairs with wings, veil, or cape opening behind, one hand offering light, face clear and peaceful",
      "forest-spirit movement: walking through glowing trees or flowers, fingertips brushing light particles or leaves, soft magical wind lifting fabric",
      "blessing gesture: both hands shaping a small orb of light near the chest or outward, sleeves and feathers moving, calm divine expression"
    ]],
    [/哥德|goth|vampire|吸血|墓園|古堡|教堂|夜后|黑蕾絲|black|dark/i,[
      "gothic editorial movement: walking down castle stairs or chapel aisle with one hand trailing along stone or railing, candlelight and veil motion, face unobstructed",
      "dark noble pose: seated beside window, piano, coffin-like velvet chaise, or banquet table, one hand holding rose, goblet, or mask, elegant dangerous gaze",
      "midnight cloak action: turning in moonlit fog with black cape or veil forming a crescent, eyes clear, premium gothic poster look"
    ]],
    [/賽博|cyber|機甲|mecha|星艦|starship|星際|sci-fi|hologram|neon|駭客|指揮官/i,[
      "sci-fi command action: one hand operating holographic controls, other hand steadying a console, neon reflections on costume, face clear through visor-free framing",
      "urban combat pose: stepping across a rooftop or hangar floor with weapon or device lowered safely, coat and cables moving, cinematic neon backlight",
      "starship crisis pose: turning from bridge window toward camera while pointing to a hologram route, crew lights blurred behind, commander energy"
    ]],
    [/棚拍|studio|magazine|editorial|fashion|珠寶|香水|廣告|cover|runway|高訂/i,[
      "high-fashion editorial pose: asymmetrical stance with one hand adjusting collar, earring, hat, or jewelry, sharp shoulder line, clean face light, magazine-cover polish",
      "commercial campaign pose: interacting with product, perfume bottle, handbag, watch, or jewelry without covering the face, precise hand placement and luxury posture",
      "runway turn pose: mid-step or half-turn with fabric swing, chin steady, eyes at camera, clean negative space for cover layout"
    ]],
    [/都市|city|街|天台|地鐵|出租車|便利店|風衣|港風|雨夜|霓虹|modern/i,[
      "cinematic city-walk action: walking through rain, neon, taxi light, subway platform, or rooftop wind, one hand holding coat, umbrella, bag, or phone, face visible",
      "street-film pause: leaning beside window, taxi door, vending machine, bridge rail, or cafe glass, wind moving hair and coat, story-like eye contact",
      "night-crossing motion: stepping across wet pavement with reflections and traffic bokeh, coat or skirt moving naturally, not a static studio pose"
    ]],
    [/世界|旅行|旅拍|landmark|culture|market|festival|宮殿|神廟|沙漠|island|bazaar|地標/i,[
      "destination interaction pose: walking through market, palace, festival, bridge, or landmark plaza while touching shawl, hat, lantern, railing, or travel prop, face clear",
      "travel-story movement: turning back mid-walk with local architecture behind, fabric and accessories moving in real wind, confident destination portrait energy",
      "cultural editorial gesture: respectfully interacting with textile, flower, lantern, fan, basket, or doorway detail, natural hands and readable costume"
    ]],
    [/自然|nature|森林|雪山|草原|湖|瀑布|海邊|荒漠|mountain|forest|beach|waterfall|canyon/i,[
      "landscape-motion pose: walking into wind across mountain, beach, canyon, forest, or lake shore, one hand controlling shawl or skirt, environment scale visible",
      "adventure pause: standing on rock, trail, pier, or overlook with cloak and hair blown by wind, face turned toward camera, cinematic outdoor energy",
      "nature interaction: fingertips brushing flowers, water, snow, grass, or rain while body remains dynamic, not stiff or generic"
    ]],
    [/漢服|唐|宋|明|清|宮|長安|江南|hanfu|dynasty|palace|pavilion|tea|fan|琵琶|古琴/i,[
      "period-drama sleeve action: walking through corridor, garden, bridge, or lantern street with long sleeves and skirt train flowing, face clear, hands elegant",
      "classical prop pose: holding fan, lantern, tea cup, scroll, pipa, guqin, or umbrella naturally, prop supports the story and never covers the face",
      "palace-drama turn: looking back from pavilion, carved door, or red-wall corridor, one sleeve lifted by wind, refined emotional tension"
    ]],
    [/動漫|遊戲|cos|魔法|學院|龍騎士|地下城|寶箱|arcade|game|fantasy|魔女|鍊金|塔羅|海盜/i,[
      "character-game action: performing the role's signature task, opening treasure, casting magic, commanding dragon, fixing machinery, reading tarot, piloting, or entering arena, with clear hands and face",
      "cosplay editorial movement: stepping into the character world with prop activated, costume pieces moving, colorful rim light, expressive but anatomically stable pose",
      "quest-start pose: one hand holding the key prop while the other points, reaches, or casts, background tells the mission, face sharp"
    ]]
  ];
  if(explicitAction){
    const cleaned=cleanActionDirectiveText(summarizeExplicitActionText(explicitAction));
    return `${cleaned}. Motion and attitude are shaped by this style's role, costume, prop, location, and camera mood.`;
  }
  const matched=rules.find(([re])=>re.test(text));
  const fallback=[
    "role-specific story action: choose a dynamic pose that belongs to this exact character, scene, outfit, and prop, not a generic standing or sitting pose; show one clear gesture that explains the story while keeping the face visible",
    "cinematic character moment: the body, hands, fabric, and props should express the selected theme's personality and plot, with readable anatomy and clear facial identity",
    "editorial travel action: move through the chosen location with natural fabric motion, meaningful hand placement, and a strong role-based attitude rather than a neutral pose"
  ];
  const prompt=cleanActionDirectiveText(pickRoleAction(text,matched?matched[1]:fallback));
  return `${prompt}. Role energy: dominant, sexy, sacred, gentle, heroic, mysterious, commercial, or travel-like according to the selected role and category.`;
}

// generate - 即時組合英文咒語
document.getElementById("gen-btn").addEventListener("click",async()=>{
  const genBtn=document.getElementById("gen-btn");
  const resultBox=document.getElementById("result-box");
  resultBox.style.display="none";

  // ② 取得風格資料
  let p=null, customParts=null;
  if(activeTab==="preset"){
    p=P[selPID];
    if(p)p._id=selPID;
    if(!p){
      document.getElementById("result-text").textContent="請先選擇一個風格！";
      resultBox.style.display="block";return;
    }
  } else {
    const get=g=>[...document.querySelectorAll(`.chip.on[data-g="${g}"]`)].map(x=>x.textContent).join("、")||"未指定";
    customParts={scene:get("scene"),outfit:get("outfit"),fx:get("fx"),light:get("light"),
      location:get("location"),weather:get("weather"),prop:get("prop"),pose:get("pose"),camera:get("camera")};
  }

  // ③ 妝容
  const mk = MK[selMK]||MK["warrior"];
  const mkDesc = Array.isArray(mk) ? mk[Math.floor(Math.random()*mk.length)] : mk;

  // ④ 文字指令
  let txtLine="";
  const textLangMap={
    zh:"Traditional Chinese",
    en:"English",
    ja:"Japanese",
    ko:"Korean",
    fr:"French",
    th:"Thai",
    zh_en:"Traditional Chinese plus English bilingual"
  };
  const customStyle=document.getElementById("custom-style-input")?.value.trim();
  const tsd=txtStyle==="custom_style"&&customStyle?customStyle:(TS[txtStyle]||TS["travel_photo"]);
  const placementText=PLACEMENT_GUIDE[txtPlacement]||"";
  const typeText=TXT_TYPE_GUIDE[txtType]||"";
  const textControlLine=`${placementText?placementText+" ":""}${typeText?typeText+" ":""}`;
  if(txtMode==="custom"){
    const customTxt=document.getElementById("custom-txt-input").value.trim();
    txtLine=`Typography design: ${toEnglishTextStyle(tsd)}. ${textControlLine}${customTxt?"Use the exact custom text: \""+customTxt+"\".":"Generate short text matched to the theme."} Integrate the typography naturally into the composition. Keep it clean and readable; avoid garbled letters, misspellings, dense text, and any text covering the face.`;
  } else if(textLangMap[txtMode]){
    txtLine=`Typography design: ${toEnglishTextStyle(tsd)}. ${textControlLine}Generate short ${textLangMap[txtMode]} text matched to the theme, naturally integrated into the composition. Keep it clean and readable; avoid garbled letters, misspellings, dense text, and any text covering the face.`;
  }

  // ⑤ 額外備註
  const extras=document.getElementById("extra-notes").value.trim();
  const proPrompt=buildProControlPrompt();

  // ⑥ 組合咒語
  // Legacy Chinese preview assembly removed; final output is built by buildEnglishPrompt().
  const enResult = sanitizePolicySensitiveTerms(cleanEnglishPrompt(buildEnglishPrompt(p, customParts, mkDesc, selAngle, txtLine, extras, proPrompt, selMK)));
  document.getElementById("result-text").textContent=enResult;
  resultBox.style.display="block";
  resultBox.scrollIntoView({behavior:"smooth",block:"start"});
});

// 建立全英文 Prompt
function buildEnglishPrompt(p, customParts, mkDesc, selAngle, txtLine, extras, proPrompt, selectedMakeupKey){
  const parts=[];
  const TRAVEL_STYLING_BOOST="Professional travel-portrait styling upgrade: makeup and styling should look like a real paid travel photoshoot makeover while preserving the uploaded person's exact facial identity. Makeup is surface cosmetics only: color, texture, eyeliner, lashes, blush, lip finish, and lighting polish may change, but bone structure, face shape, eye shape, eye size, nose shape, lip shape, cheek volume, jawline, chin, smile structure, age impression, and skin identity must not be beautified or reshaped. Costume styling must feel abundant and ceremonial: layered fabrics, embroidered trims, waist ornaments, earrings, necklaces, bracelets, tassels, hairpins, floral hair inserts, crowns, combs, beads, ribbons, veils, shawls, hand props, and matching accessories. Do not simplify the outfit or leave the hair plain; build a complete head-to-toe travel photoshoot look with rich but coherent accessories.";
  const BARE_FACE_LOCK="Bare-face mode hard lock: because the selected makeup is natural_clean / no-makeup, preserve the uploaded person's original bare face instead of applying beauty retouching. Keep real skin texture, pores, small blemishes, natural under-eye shadows, original brow density, real lip color, real nose bridge, real jawline, real cheek volume, natural facial asymmetry, and age impression. Do not create glass skin, Korean idol skin, clean-girl makeover, influencer beauty face, V-shaped face, enlarged eyes, higher nose bridge, smaller nose, sharper chin, thinner jaw, smaller face, smoother cheeks, whiter skin, doll-like lips, or studio beauty filter. Lighting may be cinematic, but the face must remain the same ordinary real person from the uploaded photo. Generate this as an unretouched candid documentary photograph taken on location, not a beauty campaign, not a social media beauty post, not a studio fashion shoot. The face must look like a real ordinary person photographed in real life, not a model or influencer prepared for camera.";
  const BARE_FACE_STYLE_FILTER="Bare-face style filter: if any selected preset, character description, scene wording, quality wording, or style example says idol, celebrity, model, brand ambassador, advertisement, commercial campaign, fashion campaign, magazine beauty, clean beauty, perfect beauty, sweet idol, Korean idol, Japanese ad girl, influencer, or social-media-ready face, treat those words as mood or environment reference only and do not apply them to the face. Do not infer a more attractive face from role, location, costume, lens, or genre. The uploaded face remains ordinary, specific, and unchanged.";
  const UNIVERSAL_FACE_STYLE_FILTER="Universal face-preservation filter: words such as princess, bride, bridal, goddess, heroine, celebrity, model, actor, diva, ambassador, campaign, advertisement, luxury editorial, beauty portrait, clear soft smile, sweet smile, delicate features, refined beauty, flawless base, sculpted contour, luminous base, camera-ready skin, high-end polish, and similar beauty or role words describe costume, mood, lighting, pose, and surface makeup only. They must not replace the uploaded face, invent a prettier face, force a new smile, change mouth corners, change cheek volume, enlarge eyes, shrink the nose, sharpen the chin, narrow the jaw, smooth skin identity, or make the person look like a different bride/model/influencer. If role or makeup conflicts with identity, preserve the uploaded face and adapt the styling around it.";
  const MAKEUP_SURFACE_LOCK="Makeup application lock: apply makeup as paint, cosmetics, texture, and lighting on top of the exact uploaded face. Keep the person's original facial geometry and expression anatomy. Eyeliner must follow the original eye shape; lipstick must follow the original lip shape; contour must not change bone structure; blush/highlight must not change cheek volume; smile or romantic expression must remain subtle enough that the person is still recognizably the same.";
  const isBareFaceMode=selectedMakeupKey==="natural_clean";
  const AUTO_QUALITY_V670={
    travel:"cinematic travel photography quality, outdoor natural light, location-based real-environment depth, professional travel photoshoot finish, high-resolution realistic skin and material detail",
    landmark:"cinematic travel photography quality, outdoor natural light, location-based real-environment depth, professional travel photoshoot finish, high-resolution realistic skin and material detail",
    japanese:"cinematic travel photography quality, outdoor natural light, location-based real-environment depth, professional travel photoshoot finish, high-resolution realistic skin and material detail",
    nature:"cinematic travel photography quality, outdoor natural light, location-based real-environment depth, professional travel photoshoot finish, high-resolution realistic skin and material detail",
    bigscene:"cinematic travel photography quality, outdoor natural light, location-based real-environment depth, professional travel photoshoot finish, high-resolution realistic skin and material detail",
    modern:"cinematic travel photography quality, outdoor natural light, location-based real-environment depth, professional travel photoshoot finish, high-resolution realistic skin and material detail",
    citywalk:"cinematic travel photography quality, outdoor natural light, location-based real-environment depth, professional travel photoshoot finish, high-resolution realistic skin and material detail",
    world_culture:"cinematic travel photography quality, outdoor natural light, location-based real-environment depth, professional travel photoshoot finish, high-resolution realistic skin and material detail",
    indian:"cinematic travel photography quality, outdoor natural light, location-based real-environment depth, professional travel photoshoot finish, high-resolution realistic skin and material detail",
    hanfu:"cinematic epic blockbuster quality, dramatic film lighting, detailed costume and environment texture, high dynamic range, photorealistic material rendering, no AI look",
    oriental:"cinematic epic blockbuster quality, dramatic film lighting, detailed costume and environment texture, high dynamic range, photorealistic material rendering, no AI look",
    dramanovel:"cinematic epic blockbuster quality, dramatic film lighting, detailed costume and environment texture, high dynamic range, photorealistic material rendering, no AI look",
    xianxia:"cinematic epic blockbuster quality, dramatic film lighting, detailed costume and environment texture, high dynamic range, photorealistic material rendering, no AI look",
    myth:"cinematic epic blockbuster quality, dramatic film lighting, detailed costume and environment texture, high dynamic range, photorealistic material rendering, no AI look",
    changxiangsi:"cinematic epic blockbuster quality, dramatic film lighting, detailed costume and environment texture, high dynamic range, photorealistic material rendering, no AI look",
    succubus_series:"cinematic epic blockbuster quality, dramatic film lighting, detailed costume and environment texture, high dynamic range, photorealistic material rendering, no AI look",
    queen_series:"cinematic epic blockbuster quality, dramatic film lighting, detailed costume and environment texture, high dynamic range, photorealistic material rendering, no AI look",
    demon_lord_series:"cinematic epic blockbuster quality, dramatic film lighting, detailed costume and environment texture, high dynamic range, photorealistic material rendering, no AI look",
    daji_series:"cinematic epic blockbuster quality, dramatic film lighting, detailed costume and environment texture, high dynamic range, photorealistic material rendering, no AI look",
    ninefox_series:"cinematic epic blockbuster quality, dramatic film lighting, detailed costume and environment texture, high dynamic range, photorealistic material rendering, no AI look",
    change_series:"cinematic epic blockbuster quality, dramatic film lighting, detailed costume and environment texture, high dynamic range, photorealistic material rendering, no AI look",
    xuannv_series:"cinematic epic blockbuster quality, dramatic film lighting, detailed costume and environment texture, high dynamic range, photorealistic material rendering, no AI look",
    nuwa_series:"cinematic epic blockbuster quality, dramatic film lighting, detailed costume and environment texture, high dynamic range, photorealistic material rendering, no AI look",
    mazu_series:"cinematic epic blockbuster quality, dramatic film lighting, detailed costume and environment texture, high dynamic range, photorealistic material rendering, no AI look",
    xishi_series:"cinematic epic blockbuster quality, dramatic film lighting, detailed costume and environment texture, high dynamic range, photorealistic material rendering, no AI look",
    zhaojun_series:"cinematic epic blockbuster quality, dramatic film lighting, detailed costume and environment texture, high dynamic range, photorealistic material rendering, no AI look",
    diaochan_series:"cinematic epic blockbuster quality, dramatic film lighting, detailed costume and environment texture, high dynamic range, photorealistic material rendering, no AI look",
    yang_guifei_series:"cinematic epic blockbuster quality, dramatic film lighting, detailed costume and environment texture, high dynamic range, photorealistic material rendering, no AI look",
    animegame:"cinematic epic blockbuster quality, dramatic film lighting, detailed costume and environment texture, high dynamic range, photorealistic material rendering, no AI look",
    fantasy:"cinematic epic blockbuster quality, dramatic film lighting, detailed costume and environment texture, high dynamic range, photorealistic material rendering, no AI look",
    myth_angel:"cinematic epic blockbuster quality, dramatic film lighting, detailed costume and environment texture, high dynamic range, photorealistic material rendering, no AI look",
    darkfantasy:"cinematic epic blockbuster quality, dramatic film lighting, detailed costume and environment texture, high dynamic range, photorealistic material rendering, no AI look",
    dark_gothic:"cinematic epic blockbuster quality, dramatic film lighting, detailed costume and environment texture, high dynamic range, photorealistic material rendering, no AI look",
    underwater:"cinematic epic blockbuster quality, dramatic film lighting, detailed costume and environment texture, high dynamic range, photorealistic material rendering, no AI look",
    cos_fantasy:"cinematic epic blockbuster quality, dramatic film lighting, detailed costume and environment texture, high dynamic range, photorealistic material rendering, no AI look",
    studio:"editorial magazine studio photography quality, controlled studio lighting, fashion magazine finish, sharp material detail, no over-smoothing"
  };
  const PROMPT_STRUCTURE_GUIDE="Prompt structure guide: after the identity and Action / Gesture priority locks, build the image from large environment to person. Establish the medium and overall tone first, then location, weather, time, lighting, and environmental perspective; then place the subject into that light; then add outfit, hair styling, props, action details, camera composition, effects, color, quality, and technical finish.";
  const PHOTO_REFERENCE_GATE="MANDATORY FIRST STEP: Check the current ChatGPT message / conversation for an uploaded reference photo of the person. If no reference photo is attached or visible, STOP and ask the user to upload the person's photo first. Do not generate an image, do not invent a face, do not use a generic influencer/model face, and do not proceed from text alone.";
  const IDENTITY_LOCK_TEXT="Use the uploaded photo as the only identity reference. Lock exact face shape, bone structure, eye shape, nose shape, lip shape, jawline, hairline, skin tone, skin texture, and age impression. Change only outfit, environment, lighting, makeup effect, and body pose — do not alter any facial features, proportions, or personal likeness. Do not beautify into a different face: no generic influencer, model, celebrity, idol, AI influencer, clean-girl, doll, or V-shaped beauty-filter face. Do not apply glass skin or plastic skin. Keep the face fully visible: hair, props, veil, particles, and effects must frame the subject without covering eyes, nose, mouth, or face outline. Hair must render as individual strands, not merged blobs. Body proportion: adult realistic eight-head proportion with correct head-to-body ratio, realistic shoulder width, and full limb length. Hands must have correct finger count; all joints must be anatomically coherent. Pose coherence: face angle, neck, shoulder, torso, and hips must form one continuous physical pose with plausible center of gravity — no disconnected arms, floating limbs, or face-body direction contradiction. Identity override: if any style element conflicts with the uploaded face, keep the face unchanged and adapt the style around it.";
  const AVOID_LOCK="low quality, cartoon style, AI art style, watermark, face swap, identity drift, replaced face, different person, generic influencer face, model face, celebrity face, AI influencer face, Korean idol face, beauty filter face, V-shaped face, doll face, plastic skin, glass skin, over-smoothed skin, altered facial proportions, changed jawline, changed nose, changed eye shape, changed hairline, oversized head, big head, chibi body ratio, doll proportions, deformed hands, fused fingers, extra fingers, incoherent anatomy, hidden face, props covering face, particles covering facial features, disconnected arms, floating limbs, spatial contradiction between face and body, broken pose flow, implausible center of gravity";
  const addPart=(label,value)=>{
    if(value===undefined||value===null)return;
    const cleaned=cleanEnglishLine(String(value));
    if(cleaned)parts.push(label?`${label}: ${cleaned}`:cleaned);
  };
  // ① Highest priority identity and action lock
  addPart("Photo reference gate (absolute first instruction)",PHOTO_REFERENCE_GATE);
  addPart("Identity lock (highest priority)",IDENTITY_LOCK_TEXT);
  addPart("Universal face-preservation filter",UNIVERSAL_FACE_STYLE_FILTER);
  addPart("Makeup surface-only lock",MAKEUP_SURFACE_LOCK);
  if(isBareFaceMode)addPart("Bare-face no-beauty-filter lock",BARE_FACE_LOCK);
  if(isBareFaceMode)addPart("Bare-face preset/style filter",BARE_FACE_STYLE_FILTER);
  parts.push(PROMPT_STRUCTURE_GUIDE);
  addPart("Priority action, camera, and finish lock",proPrompt||buildProControlPrompt?.());

  if(p){
    const roleActionPrompt=buildRoleActionPrompt(p);
    addPart("Action / Gesture priority",roleActionPrompt);
    addPart("Style / medium / overall tone",presetEnglishCore(p));
    addPart("Large environment / location",completeEnglishField(p,"s",p.s));
    addPart("Environment lighting",completeEnglishField(p,"l",p.l));
    addPart("Character costume/story atmosphere only, never face replacement",completeEnglishField(p,"char",p.char));
    addPart("Makeup surface design only",mkDesc);
    if(!isBareFaceMode)addPart("Travel photoshoot makeup and accessory density",TRAVEL_STYLING_BOOST);
    else addPart("Bare-face styling rule","Keep costume, hair, accessories, camera, and environment cinematic, but keep the face natural and unretouched from the uploaded photo.");
    addPart("Outfit",completeEnglishField(p,"o",p.o));
    addPart("Props",p.prop);
    if(roleActionPrompt) parts.push(`Action integration: Action / Gesture is the physical pose and movement source. Props describe handheld or story objects. Composition describes framing, lens angle, and subject placement. Keep the face readable within this action.`);
    parts.push("Prop and effect safety: props, foreground framing, atmospheric particles, hair, veil, smoke, rain, snow, and visual effects must stay around the body or frame edge, not across the face or key facial features.");
    if(p.cam) addPart("Composition",completeEnglishField(p,"cam",p.cam));
    else parts.push(`Output size: ${selAngle}`);
    addPart("Visual effects",completeEnglishField(p,"fx",p.fx));
    addPart("Color tone",completeEnglishField(p,"col",p.col,28));
    addPart("Auto quality by preset category",AUTO_QUALITY_V670[p.cat]);
    addPart("Quality",completeEnglishField(p,"q",p.q));
    addPart("",txtLine);
    addPart("Special requirements",extras);
    addPart("Avoid",AVOID_LOCK);
  } else {
    if(customParts){
      const get=g=>[...document.querySelectorAll(`.chip.on[data-g="${g}"]`)].map(x=>x.textContent).join(", ")||"not specified";
      parts.push(`Makeup surface design only: ${mkDesc}`);
      if(!isBareFaceMode)parts.push(`Travel photoshoot makeup and accessory density: ${TRAVEL_STYLING_BOOST}`);
      else parts.push("Bare-face styling rule: Keep costume, hair, accessories, camera, and environment cinematic, but keep the face natural and unretouched from the uploaded photo.");
      if(get("location")!=="not specified") parts.push(`Location type: ${get("location")}`);
      if(get("weather")!=="not specified") parts.push(`Weather / environment: ${get("weather")}`);
      parts.push(`Lighting: ${get("light")}`);
      parts.push(`Atmosphere / story: ${get("scene")}`);
      parts.push(`Outfit styling: ${get("outfit")}`);
      if(get("prop")!=="not specified") parts.push(`Props / objects: ${get("prop")}`);
      if(get("pose")!=="not specified") parts.push(`Action / Gesture: ${get("pose")}. Use this as the clean physical action element, including body direction, hand placement, and camera framing where applicable. Keep the uploaded person's face visible and recognizable unless the selected action is intentionally a back-view composition.`);
      if(get("camera")!=="not specified") parts.push(`Camera composition: ${get("camera")}`);
      parts.push(`Visual effects: ${get("fx")}`);
      parts.push("Prop and effect safety: props, foreground framing, atmospheric particles, hair, veil, smoke, rain, snow, and visual effects must stay around the body or frame edge, not across the face or key facial features.");
      parts.push(`Output size: ${selAngle}`);
      if(txtLine) parts.push(txtLine);
      if(extras) parts.push(`Special requirements: ${extras}`);
      parts.push(`Avoid: ${AVOID_LOCK}`);
    }
  }
  return parts.join("\n");
}

function cleanEnglishLine(line){
  return line
    .replace(/[\u3400-\u9FFF\uF900-\uFAFF]+/g, "")
    .replace(/[（）]/g, " ")
    .replace(/[，、。；：]/g, ", ")
    .replace(/[「」]/g, '"')
    .replace(/[·]/g, " ")
    .replace(/\s+,/g, ",")
    .replace(/,\s*,+/g, ",")
    .replace(/\s{2,}/g, " ")
    .replace(/^[\s,:-]+/, "")
    .replace(/[\s,:-]+$/, "")
    .trim();
}

function sanitizePolicySensitiveTerms(text){
  const pairs=[
    [/\bunderage\b/gi,"youth-coded"],
    [/\bschoolgirl\b/gi,"classroom-uniform"],
    [/sexualization/gi,"unsafe styling"],
    [/explicit\s+nudity/gi,"overly exposed styling"],
    [/\bnudity\b/gi,"overly exposed styling"],
    [/see-through/gi,"transparent"],
    [/\bsheer\b/gi,"lightweight"],
    [/deep-V/gi,"elegant V-neck"],
    [/deep neckline/gi,"elegant neckline"],
    [/thigh-high/gi,"tall"],
    [/\blingerie\b/gi,"delicate loungewear"],
    [/\bbondage\b/gi,"strappy couture"],
    [/\bseductive\b/gi,"alluring"],
    [/\bsensual\b/gi,"glamorous"],
    [/sexual act/gi,"unsafe pose"],
    [/biting finger/gi,"resting fingers near lips"]
  ];
  let out=text;
  pairs.forEach(([a,b])=>{out=out.replace(a,b)});
  return out;
}

function cleanEnglishPrompt(text){
  return text
    .split("\n")
    .map(cleanEnglishLine)
    .filter(line=>line && !/^[A-Za-z /]+:$/.test(line))
    .join("\n");
}

// copy - compatible with file:// and https://
function copyTxt(txt, btn, orig) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(txt).then(() => {
      btn.textContent = "✓ 已複製！";
      setTimeout(() => btn.textContent = orig, 2000);
    }).catch(() => fallbackCopy(txt, btn, orig));
  } else {
    fallbackCopy(txt, btn, orig);
  }
}
function fallbackCopy(txt, btn, orig) {
  const ta = document.createElement("textarea");
  ta.value = txt;
  ta.style.cssText = "position:fixed;top:-9999px;left:-9999px;opacity:0";
  document.body.appendChild(ta);
  ta.focus(); ta.select();
  try {
    document.execCommand("copy");
    btn.textContent = "✓ 已複製！";
    setTimeout(() => btn.textContent = orig, 2000);
  } catch(e) {
    window.prompt("請手動選取複製：", txt);
  }
  document.body.removeChild(ta);
}
document.getElementById("copy-small-btn").addEventListener("click", function(){
  copyTxt(document.getElementById("result-text").textContent, this, "複製");
});
document.getElementById("clear-result-btn").addEventListener("click", function(){
  document.getElementById("result-text").textContent="";
  document.getElementById("result-box").style.display="none";
  this.textContent="已清除";
  setTimeout(()=>this.textContent="清除",1200);
});
document.getElementById("copy-all-btn").addEventListener("click", function(){
  copyTxt(document.getElementById("result-text").textContent, this, "📋 一鍵複製英文咒語 · 貼進 ChatGPT");
});
document.addEventListener('DOMContentLoaded', function() {
  const grid = document.getElementById('preset-grid');
  if (grid) {
    grid.addEventListener('click', function(e) {
      const card = e.target.closest('.preset-card');
      if (card) {
        document.querySelectorAll('.preset-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
      }
    });
  }
});
document.addEventListener('DOMContentLoaded', function() {
  const grid = document.getElementById('preset-grid');
  const search = document.getElementById('preset-search');
  const count = document.getElementById('preset-count');
  let robustCat = document.querySelector('.cat-btn.active')?.dataset.cat || 'all';

  function robustFilter() {
    if (!grid) return;
    const q = (search?.value || '').trim().toLowerCase();
    const cards = Array.from(grid.querySelectorAll('.preset-card'));
    let shown = 0;
    let matched = 0;
    cards.forEach(card => {
      const data = [card.textContent, card.dataset.cat || '', card.dataset.pid || ''].join(' ').toLowerCase();
      const pid = card.dataset.pid || '';
      const favs = typeof getFavoritesV648 === 'function' ? getFavoritesV648() : [];
      const recents = typeof getRecentsV648 === 'function' ? getRecentsV648() : [];
      const specialOk = robustCat === '__fav__' ? favs.includes(pid) : robustCat === '__recent__' ? recents.includes(pid) : null;
      const superOk = specialOk !== null ? true : (typeof categoryBelongsToSuperV641 === 'function' ? categoryBelongsToSuperV641(card.dataset.cat || '') : true);
      const catOk = specialOk !== null ? specialOk : superOk && (robustCat === 'all' || card.dataset.cat === robustCat);
      const searchOk = !q || data.includes(q);
      const ok = catOk && searchOk;
      card.classList.toggle('visible', ok);
      card.classList.toggle('hide-search', !searchOk);
      card.classList.remove('hide-page');
      if (catOk && searchOk) matched++;
      if (ok) shown++;
    });
    if (count) count.textContent = `顯示 ${shown} / ${matched} 組，共 ${cards.length} 組`;
  }

  document.addEventListener('click', function(e) {
    const superBtn = e.target.closest('.super-btn');
    if (superBtn) {
      robustCat = 'all';
      setSuperCategoryV641?.(superBtn.dataset.super || 'all');
      return;
    }
    const btn = e.target.closest('.cat-btn');
    if (!btn) return;
    robustCat = btn.dataset.cat || 'all';
    document.querySelectorAll('.cat-btn').forEach(x => x.classList.remove('active'));
    btn.classList.add('active');
    robustFilter();
  }, true);

  if (search) search.addEventListener('input', robustFilter);
  robustFilter();
});