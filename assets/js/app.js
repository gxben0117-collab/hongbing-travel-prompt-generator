// Hongbing Travel Prompt Generator app logic
const MK={
  warrior:"cinematic warrior heroine makeup, crimson red lips, gold foil eyeshadow, sharp black eyeliner, vivid blush, flawless high-definition base, heroic and intense screen presence",
  natural_clean:"natural clean beauty makeup, sheer luminous skin, softly defined brows, bare-skin effect, pale pink tinted balm, minimal visible eyeshadow, fresh Korean-style everyday elegance",
  outdoor_glow:"outdoor radiant makeup, sun-kissed bronze blush, coral-orange lips, waterproof luminous base, healthy travel-photo glow, natural active beauty under sunlight",
  soft_daily:"soft Japanese daily makeup, peach-pink eyeshadow, gentle brown eyeliner, muted rose-beige lips, light translucent base, approachable warm feminine mood",
  korean_dewy:"Korean dewy glass-skin makeup, glossy hydrated complexion, soft straight brows, subtle champagne shimmer, jelly pink lips, clean idol-like radiance",
  noir_minimal:"low-saturation minimalist makeup, matte porcelain base, taupe-brown eyeshadow, tight thin eyeliner, nude beige lips, cool distant editorial elegance",
  fox:"alluring fox-spirit makeup, gold-red gradient eyeshadow, elongated upward eyeliner, vermilion bitten lips, porcelain dewy base, gold inner-corner accents, alluring mythic charm",
  moon:"cold moon-goddess makeup, ice-blue pearlescent eyeshadow, silver-white luminous base, soft lavender lips, delicate brows, serene and distant celestial beauty",
  tang:"high Tang dynasty court makeup, diagonal crimson blush eyeshadow, golden huadian forehead ornament, peony-red full lips, luminous ivory base, ornate imperial glamour",
  xianxia:"ethereal xianxia makeup, pearl-white translucent base, cool blue-purple gradient eyeshadow, soft pink fairy lips, feather-light glow, immortal heroine atmosphere",
  gongting:"Chinese palace consort makeup, saturated red eyeshadow, elongated phoenix eyeliner, cinnabar forehead dot, coral-red lips, refined aristocratic court beauty",
  wuxia_sharp:"sharp wuxia heroine makeup, clean polished base, strong heroic brows, precise thin eyeliner, natural lips, disciplined gaze, agile swordswoman elegance",
  dunhuang_gold:"Dunhuang flying-apsera makeup, golden-orange eyeshadow, radiant temple highlights, ornate huadian forehead detail, warm red lips, mural-inspired desert glow",
  qing_court:"Qing palace portrait makeup, delicate narrow brows, soft rouge cheeks, restrained crimson lips, smooth porcelain base, dignified classical court elegance",
  republic_qipao:"Republic-era qipao makeup, vintage red lips, slender arched brows, soft brown smoky eyes, satin matte skin, old Shanghai jazz-age cinematic charm",
  cinematic:"cinematic celebrity portrait makeup, ultra-clean HD base, natural brows, rose or nude lips, sculpted but realistic contours, premium actor publicity-still polish",
  editorial:"high-fashion editorial makeup, flawless airbrush base, sculpted highlights, clean graphic eyeliner, polished nude or glossy lips, Vogue-cover luxury finish",
  hk_film:"Hong Kong film-noir makeup, deep smoky eyeshadow, dark wine-red lipstick, high-contrast skin finish, moody gaze, nostalgic cinematic film-grain glamorousity",
  y2k:"Y2K neon idol makeup, pastel purple-pink eyeshadow, glossy pearl lip gloss, cat-eye liner, cheek glitter, holographic millennium pop-star energy",
  runway_supermodel:"runway supermodel makeup, razor-sharp cheek contour, metallic eyeshadow, brushed-up brows, nude glossy lips, powerful fashion-week confidence",
  luxury_glam:"luxury jewelry campaign makeup, diamond-like highlighter, champagne-gold eyeshadow, velvet red or nude lips, immaculate skin, expensive red-carpet radiance",
  retro_hollywood:"classic Hollywood glamour makeup, precise black cat eyeliner, sculpted red lips, softly powdered skin, defined waves-friendly styling, 1940s movie-star elegance",
  gothic:"gothic dark glamour makeup, heavy black smoky eyes, deep burgundy lips, pale porcelain skin, dramatic lashes, luxurious castle-night drama",
  beast_dark:"dark beast-girl makeup, red-gold animalistic eye accents, extended smoky eyeliner, deep red lips, strong contrast base, wild alluring fantasy energy",
  demon_lord:"demon-lord makeup, extremely dark black-purple smoky eyes, arcane black eyeliner shapes, deep purple-black lips, pale commanding base, forehead demonic mark, overwhelming evil aura",
  fallen_angel:"fallen-angel makeup, asymmetric light-and-shadow eyeshadow with gold-white on one side and black-purple on the other, torn-wing eyeliner, dark violet-red lips, translucent tragic beauty",
  succubus_alluring:"succubus seduction makeup, wet glossy crimson lips, razor-sharp cat eyeliner, smoky plum eyeshadow, luminous sculpted skin, subtle infernal red highlights, glamorous supernatural temptation",
  vampire_lady:"vampire noblewoman makeup, pale satin base, blood-red lips, smoked burgundy eyeshadow, long elegant lashes, cold aristocratic gaze, luxurious gothic seduction",
  dark_boudoir:"dark boudoir portrait makeup, soft smoky eyes, rose-nude glossy lips, sculpted cheekbones, satin skin, mature glamorous studio-photography mood",
  elf_magic:"elven mage makeup, cool blue-silver gradient eyeshadow, pointed upward eyeliner, pale violet lips, luminous cool-white base, magical forest mystery",
  magic_girl:"magical girl makeup, pink and lavender big-eye eyeshadow, voluminous curled lashes, watery pink lip gloss, sparkling blush, sweet fantasy heroine charm",
  angel_holy:"holy angel makeup, luminous white base, gold pearlescent eyeshadow, delicate precise eyeliner, nude or pale-pink lips, small golden forehead highlight, sacred purity",
  snow_pure:"snow-queen pure makeup, icy porcelain base, cool pink eyeshadow, nude rose lips, clean refined brows, crystalline blue-white winter elegance",
  mermaid_pearl:"deep-sea mermaid makeup, blue-green pearlescent eyeshadow, wet luminous skin, pearl highlights, soft aqua shimmer, glossy coral lips, underwater bioluminescent beauty",
  white_tiger_glow:"white-tiger moonlight makeup, silver-white highlighter, cool taupe eyeshadow, delicate feline liner, pale rose lips, guardian-beast celestial glow",
  flower_fairy:"flower fairy makeup, petal blush across the cheeks, translucent pink eyeshadow, glossy blossom lips, tiny floral shimmer, fresh spring fantasy softness",
  india_bold:"Indian goddess makeup, red bindi ornament, dense black cat eyeliner, deep bronze-gold eyeshadow, vivid red or orange lips, gold nose-jewel detail, ornate exotic beauty",
  arabica_mystic:"Persian mystic makeup, deep gold-copper smoky eyes, veil-friendly half-face glamour, dark red lips, golden eye-corner accents, mysterious Arabian luxury",
  japanese_geisha:"Japanese geisha-inspired refined makeup, porcelain pale base, small red lips, delicate rose eye tint, precise brows, elegant sakura-season restraint, not theatrical or mask-like",
  korean_palace:"Korean palace court makeup, soft matte fair base, gentle peach eyeshadow, refined straight brows, peach-pink lips, graceful Joseon-era elegance",
  egypt_cleopatra:"Cleopatra-inspired Egyptian queen makeup, bold extended black-and-gold eyeliner, peacock-blue eyeshadow, warm bronze skin glow, gilded accents, imperial ancient luxury",
  bohemian_sun:"bohemian sun-travel makeup, warm golden-brown eyeshadow, natural freckles, sunlit bronzer, terracotta lips, effortless free-spirited vacation beauty",
  spirit_water:"spirit-water makeup, silver luminous base, deep dark-red eyeshadow, slightly lifted eyeliner, dark rose lips, cold mysterious aquatic elegance",
  dragon_epic:"epic dragon-rider makeup, metallic skin finish, black-and-gold eyeshadow, sharp eyeliner, golden facial rune accents, heroic warrior presence",
  cosplay_beast:"beastgirl cosplay makeup, cute animal-like blush dots, soft pink nose tip, big curled lashes, playful animal-inspired eyeliner, charming fantasy character expression",
  cyber_idol:"cyber idol makeup, neon blue-magenta eyeliner, holographic glitter, glassy skin, chrome eye accents, glossy lips, futuristic concert-stage energy",
  battle_scar:"battle-worn heroine makeup, smoky ash eyeshadow, controlled smudged liner, muted blood-red lips, subtle realistic battle marks, resilient action-movie strength",
  royal_princess:"lavender royal-princess makeup, crystal highlighter, rose-pink lips, soft lilac eyeshadow, delicate lashes, sweet luxurious ballroom fantasy",
  wedding:"dreamy bridal makeup, rose-pink soft eyeshadow, luminous sheer base, watery peach lips, natural feathered brows, delicate veil-friendly romantic purity",
  forest:"forest elf natural makeup, moss-green pearlescent eyeshadow, petal-soft blush, nude rose lips, fresh luminous skin, organic woodland fairy softness",
  jiangnan_ink:"Jiangnan ink-wash makeup, misty grey-brown eye shading, soft arched brows, pale rose lips, translucent porcelain base, poetic water-town restraint",
  mermaid_deep:"deep-sea mermaid makeup, pearl highlighter, blue-green shimmer eyeshadow, glossy coral lips, wet luminous skin, underwater fantasy glow",
  qing_palace:"Qing palace noble makeup, delicate court brows, porcelain base, refined rouge cheeks, elegant crimson lips, formal imperial dignity",
  cyberpunk:"cyberpunk neon makeup, fluorescent blue-magenta eyeliner, metallic chrome highlighter, glossy lips, holographic glitter accents, futuristic rainy-city energy",
  oriental:"elegant oriental beauty makeup, warm cinnabar eyeshadow, soft matte red lips, refined brows, polished porcelain base, restrained classical grace",
  late_ming_courtesan:"late Ming Qinhuai courtesan makeup, peach-blossom eyeshadow, soft arched brows, rouge-red lips, luminous candlelit skin, refined poetic allure",
  han_flying_dancer:"Han palace flying dancer makeup, slender brows, lifted swallow-tail eyeliner, light red lips, matte ivory base, graceful weightless dance beauty",
  tang_female_official:"Tang female official makeup, red plum huadian, precise brows, dignified red lips, warm pearl base, intelligent court-literati authority",
  empress_wu_formal:"Empress Wu formal makeup, gold-red eyeshadow, phoenix brows, imperial red lips, polished luminous base, commanding sovereign presence",
  song_poet_melancholy:"Song poet melancholy makeup, pale translucent base, soft straight brows, muted lips, faint rose under-eye warmth, literary sorrow and elegance",
  ghost_orchid_bride:"orchid ghost bride makeup, cold white luminous base, misty grey eyeshadow, pale red lips, delicate brows, moonlit supernatural fragility",
  white_snake_mist:"white snake mist makeup, water-green pearlescent eyeshadow, fog-soft white base, glossy rose lips, delicate ethereal brows, West Lake immortal aura",
  red_mansion_lady:"Dream of the Red Chamber lady makeup, powder-white base, petal-pink lips, soft peach eyeshadow, delicate brows, poetic boudoir elegance",
  wuxia_novel_heroine:"wuxia novel heroine makeup, heroic brows, clean translucent base, lively eyes, muted red lips, agile Jianghu intelligence",
  palace_drama_fav:"palace drama favorite consort makeup, refined brows, pearl-white base, vivid red lips, delicate blush, jeweled court glamour and political elegance",
  tang_empress_gold:"Tang empress golden phoenix makeup, gold foil huadian forehead ornament, saturated crimson lips, phoenix-tail eyeliner, warm pearl base, imperial red-and-gold court dignity",
  tang_peony_soft:"Tang peony consort makeup, diagonal rosy-red eyeshadow, peony-shaped huadian, soft full red lips, warm luminous base, luxurious but gentle palace beauty",
  tang_hu_dance:"Tang Hu-dance court performer makeup, golden-orange eyeshadow, sparkling inner-corner highlight, vivid red lips, jewel forehead ornament, lively Silk Road glamour",
  song_pearl_lady:"Song dynasty pearl lady makeup, pale translucent base, soft straight brows, pearl face ornaments, muted rose lips, restrained literati elegance and tea-gathering refinement",
  han_archaic_grace:"Han dynasty archaic grace makeup, long fine brows, tiny cinnabar lips, matte ivory base, minimal eye color, dignified ancient palace restraint",
  ming_cloud_collar:"Ming noble lady makeup, willow-leaf brows, warm rouge cheeks, refined red lips, clean porcelain base, elegant cloud-collar aristocratic beauty",
  ming_bridal_xiapei:"Ming phoenix-crown bridal makeup, bright red lips, red-gold eyeshadow, luminous ceremonial base, precise brows, festive Chinese wedding grandeur",
  qing_empress_formal:"Qing empress formal court makeup, polished porcelain base, dignified brows, balanced rouge, formal red lips, imperial flag-head elegance",
  qing_gege_snow:"Qing princess snow makeup, powder-white winter base, plum-red lips, soft pink eyeshadow, delicate brows, refined cold-weather palace sweetness",
  jianghu_heroine:"jianghu swordswoman makeup, heroic brows, clean matte base, sharp brown-black eyeliner, muted red lips, agile wuxia confidence",
};
const TS={
  movie_title:"large cinematic movie-poster title typography, short English title only, placed at the top or side without covering the face",
  magazine_cover:"premium fashion magazine cover typography, clean editorial layout, short English words only",
  decorative_mark:"decorative brush-style mark or red seal-inspired graphic, visual symbol only, no readable Chinese text required",
  minimal_caption:"minimal small English caption in one corner, low-interference layout, clean and subtle"
};
function toEnglishTextStyle(tsd){
  return tsd || "short clean English typography, low interference";
}
const P={
  // 參考新增：2026-05-16 補充
  cosmic_crystal_bubble:{n:"宇宙水晶泡泡少女",mk:"moon",
    char:"adult dreamy cosmic young woman, fair translucent skin, long brown windblown hair with airy bangs, soft warm smile, ethereal dreamy eyes, long face shape with a softly rounded chin, not a sharp V-shaped face",
    s:"a gigantic transparent crystal bubble floating above a sea of clouds, pastel purple and pale blue galaxy world, huge planets in the background, starry sky, floating sky islands, transparent bubbles, crystal shards, a dreamy whale swimming through the clouds",
    o:"transparent layered crystal organza couture gown, refined fairy-like silhouette, diamond and stardust sparkle across the skirt, lightweight flowing veil layers, elegant celestial jewelry; a companion cat wears a matching miniature crystal couture outfit",
    prop:"sitting gracefully inside the floating crystal bubble, hands relaxed, companion cat beside her, bubble edges and crystal fragments framing the subject without covering the face",
    fx:"dream fog, stardust particles, rainbow refraction, crystal transparency, soft bloom, sacred ethereal glow, galaxy atmosphere, floating hair strands, crystal caustics and prismatic highlights",
    l:"pastel galaxy light, soft cinematic volumetric light, silver-blue rim light, gentle face fill, global illumination, ray-traced crystal refraction",
    cam:"centered 9:16 vertical composition, circular surround composition inside the crystal bubble, dreamy fantasy poster framing, shallow depth of field",
    col:"pastel purple, pale blue, silver, crystal white, soft rainbow refraction, romantic dream palette",
    q:"cinematic fantasy illustration with photorealistic beauty detail, Unreal Engine 5 rendering style, Octane Render quality, 8K HDR, ultra detailed, high-art fantasy dream world",
    neg:"sharp pointed chin, V-shaped face, overly exposed styling, plastic skin, cartoon, low quality, messy text, watermark"},
  vogue_spider_spirit:{n:"蜘蛛精高訂封面",mk:"editorial",
    char:"adult professional slender fashion model aura, sharp deep gaze, refined East Asian beauty, realistic skin texture, visible pores, natural imperfections, polished high-fashion confidence",
    s:"clean minimalist professional studio, pale gray-white gradient backdrop, glossy black-white-gold marble floor reflection, a giant asymmetrical marble plinth with black, white, and gold veining placed in the center",
    o:"white-gold couture outfit merging Journey to the West spider-spirit costume elements with modern luxury street fashion: one-shoulder cape, jade pendant, ornate crown, glass beads, dragon embroidery, metallic accessories, watch, necklace, designer handbag, traditional robe structure fused with contemporary tailoring",
    prop:"relaxed asymmetrical seated pose on the giant marble plinth, one knee raised high with one hand naturally resting on the knee, the other leg bent forward and extended, effortless attitude and fashion authority",
    fx:"subtle spider-web inspired embroidery details, glossy marble reflections, clean magazine-cover negative space, crisp couture material definition",
    l:"large clean softbox studio light, even flattering face light, subtle rim light, natural white balance, controlled contrast, realistic lens behavior",
    cam:"professional fashion magazine cover composition, full English cover typography, 125mm telephoto portrait lens depth of field, 9:16 vertical layout, sharp focus on face and outfit",
    col:"white, platinum gold, black marble, soft gray studio background, luxury brand image tone",
    q:"photorealistic ultra realistic high-resolution professional photography, cinematic lighting, realistic skin texture, detailed pores, natural imperfections, high dynamic range, no over-smoothing, no plastic skin, no waxy texture, no artificial CGI look",
    neg:"cartoon, AI look, over-smoothed skin, waxy skin, cheap costume, chaotic typography, unreadable text, watermark"},
  imperial_red_fan_hanfu:{n:"紅妝宮廷手扇",mk:"tang",
    char:"adult elegant East Asian woman with refined classical beauty, soft contemplative gaze looking slightly to the side, defined brows, subtle winged eyeliner, red lipstick, graceful ceremonial presence",
    s:"ornate imperial interior with warm ambient lighting, dark wood architecture, golden decorative details, softly blurred palace depth, rich ceremonial atmosphere",
    o:"vibrant red traditional Chinese hanfu with intricate gold floral embroidery and delicate white accents, layered ceremonial collar, luxurious silk texture, elaborate golden hairpiece with red flowers, pearls, hanging ornaments, elegant updo with loose forehead strands",
    prop:"holding a circular hand fan decorated with detailed red floral pattern and a butterfly, fan positioned gracefully near the chest, hands refined and natural",
    fx:"warm candle bokeh, subtle golden dust, silk sheen, jewelry sparkle, shallow background blur, rich fabric texture",
    l:"warm imperial interior light, soft face key light, gentle golden rim light, cinematic low-contrast glow",
    cam:"high-resolution portrait photograph, half-body to three-quarter composition, face and fan both clear, 9:16 vertical editorial framing",
    col:"deep red, antique gold, ivory, warm amber, dark wood brown, ceremonial luxury palette",
    q:"beautifully captured realistic portrait photography, ultra detailed embroidery, natural skin texture, professional depth of field, 8K, elegant historical fashion image",
    neg:"cartoon, cheap costume, flat lighting, messy hair ornaments, hidden face, watermark"},
  baroque_hotel_crystal_gala:{n:"巴洛克酒店鑽光晚宴",mk:"wedding",
    char:"adult elegant noble woman, soft facial contours, delicate features, luminous blue eyes, refined aristocratic makeup, gentle blush, natural rosy lips, shallow smile toward camera",
    s:"modern five-star luxury hotel lobby, baroque crystal chandeliers, VIP sofas, ornate baroque carpet, polished grand interior, lavish evening banquet atmosphere",
    o:"milk-white pearlescent silky satin haute couture evening gown, fitted strapless low-shoulder neckline, baroque embroidery, crystal and diamond embellishments, layered shoulder chains like a sparkling jewelry armor waterfall, diamond necklace, bracelet, earrings, ornate crystal hairpiece, gold clutch",
    prop:"holding an exquisite golden clutch, standing or slightly angled toward camera with poised elegant posture as if waiting for a banquet to begin",
    fx:"dreamy soft focus, chandelier bokeh, diamond sparkle, pearlescent satin highlights, delicate crystal reflections, luxury hotel glow",
    l:"cinematic soft glamour light, chandelier warm sparkle, clean face key light, gentle rim light on hair and shoulders",
    cam:"9:16 vertical composition emphasizing the figure, luxurious costume details and noble presence, medium-full portrait with shallow depth of field",
    col:"pearl white, champagne gold, diamond silver, warm amber chandelier light, polished luxury palette",
    q:"semi-realistic fashion illustration with premium 3D rendering, cinematic lens feel, ultra detailed couture material, refined romantic luxury, 8K HDR",
    neg:"cheap wedding dress, plastic skin, cluttered background, cartoon, low quality, watermark"},
  summer_creek_fresh:{n:"盛夏溪流通透寫真",mk:"outdoor_glow",
    char:"adult 20-year-old Taiwanese mixed-heritage young woman, delicate facial features, slender figure, relaxed energetic state, vivid youthful summer atmosphere, natural smile",
    s:"midsummer mountain forest creek, clear shallow water, lush green trees, healing cool atmosphere, dynamic water-play moment, sparkling splashes flying through the air",
    o:"original character-inspired outfit adapted into safe summer travel styling, fully wet from creek water with realistic water-soaked fabric texture, clothing clings naturally without becoming overly exposed, transparent watery skin glow",
    prop:"playing in the creek, arms reaching forward through splashing water, body relaxed and energetic, face clear and joyful",
    fx:"water splashes frozen in motion, fluid mist, bokeh droplets, leaf-filtered light spots, subtle dark-gold glitch texture accents, clean high-saturation transparent summer color",
    l:"natural soft light plus gentle side light, Rembrandt-style contour shaping, dappled sunlight through leaves, transparent highlights, dreamlike water reflections",
    cam:"realistic photography, dynamic close-to-medium portrait, sharp face focus, lively water foreground, 9:16 vertical frame",
    col:"high-saturation warm transparent Japanese fresh color, rich green forest, clear blue-white water highlights, clean advanced image quality",
    q:"ultra high definition, high detail, fine individual hair strands, realistic native skin texture, clean realistic photography, cinematic summer light, no distortion",
    neg:"overly exposed styling, artificial CGI, plastic skin, cartoon, low quality, distorted hands, hidden face, watermark"},
  sakura_orchard_umbrella:{n:"櫻花果園油紙傘",mk:"gongting",
    char:"adult beautiful East Asian young woman, gentle smile toward camera, refined serene expression, elegant ancient-style presence, face based only on the uploaded photo",
    s:"extremely detailed oriental dream landscape photography, blooming cherry blossom orchard, forest path covered with a thick pink petal carpet, distant old wooden multi-story pagoda, stone arch bridge crossing a winding stream, delicate stone lanterns beside the path and river",
    o:"extremely gorgeous silk hanfu, white base fabric embroidered with cranes and complex floral patterns, outer layers of flowing pink transparent chiffon, long skirt train dragging along the petal-covered stone path, elegant ancient updo with floral hairpins and pearl tassel ornaments",
    prop:"holding a traditional oil-paper umbrella decorated with thick multi-layer real cherry blossoms, umbrella angled gracefully, body slightly turned with the skirt train visible",
    fx:"falling cherry petals, clean floating light spots, soft blossom haze, realistic fabric motion, gentle stream reflections, dreamlike but natural atmosphere",
    l:"soft natural sunlight passing through dense cherry blossom canopy, ethereal diffused light, cinematic dimensionality, gentle face illumination",
    cam:"9:16 realistic cinematic photography, full-body environmental portrait, shallow depth of field with background blossoms and pagoda softly blurred, subject integrated perfectly with architecture and landscape",
    col:"soft pink, white silk, fresh green, warm sunlight, low-contrast romantic spring palette",
    q:"realistic photographic masterpiece, 8K ultra high resolution, cinematic lighting, fine skin texture, exquisite fabric embroidery, professional photography, no watermark",
    neg:"cartoon, flat background, cheap costume, over-smoothed skin, hidden face, deformed umbrella, watermark"},
  fenghuang_night_hanfu:{n:"鳳凰古城夜景漢服",mk:"gongting",
    char:"adult graceful East Asian woman, gentle confident smile, elegant travel portrait aura, long black hair and ornate silver crown hairpiece, natural face clarity",
    s:"Fenghuang ancient town riverside at night, wooden stilt houses glowing with warm golden lights, river reflections, distant illuminated pagoda, arched bridge, dark mountain silhouette, lively but softly blurred night tourism atmosphere",
    o:"golden-yellow embroidered hanfu with wide flowing sleeves, pale floral brocade texture, black inner collar, ornate silver crown and dangling hair ornaments, refined ancient-town travel styling",
    prop:"holding a traditional oil-paper umbrella, sometimes opened above the shoulder or held folded at the side, standing by the riverside railing with relaxed elegant hand placement",
    fx:"night bokeh lights, river reflection sparkle, subtle mist above water, warm lantern glow, fabric sleeve motion, realistic handheld flash travel-photo highlights",
    l:"warm golden town lights mixed with controlled soft flash on the face, high-contrast night background, clear facial exposure, cinematic travel-night color grading",
    cam:"9:16 vertical travel portrait, full-body or three-quarter framing, subject foreground sharp with ancient town lights and pagoda visible behind",
    col:"black night sky, warm gold reflections, yellow brocade, red lantern accents, glossy river highlights",
    q:"realistic night travel photography, high detail fabric, sharp face, natural skin texture, professional portrait retouching, 8K HDR",
    neg:"flat daytime lighting, hidden face, overexposed flash, messy umbrella, cartoon, low quality, watermark"},
  lijiang_ethnic_waterwheel:{n:"麗江民族水車旅拍",mk:"india_bold",
    char:"adult lively East Asian woman with confident ethnic travel-photo energy, bright eyes, expressive smile, elegant but playful pose",
    s:"Lijiang old town, large wooden waterwheel, stone paths, red lantern shopfronts, wooden buildings, riverside railing, green willow trees and ancient-town signage",
    o:"vivid red or turquoise ethnic-inspired dress with silver embroidery, layered skirt, ornate silver headdress, forehead jewelry, beaded ornaments, optional sheer turquoise veil, traditional patterns with modern travel-photo polish",
    prop:"posing near the wooden waterwheel or riverside railing, one hand lifting the veil or sleeve, one hand holding skirt edge, graceful tourist portrait posture",
    fx:"soft lantern bokeh, wet stone reflection, silver jewelry sparkle, gentle fabric motion, old-town atmosphere with realistic crowd blur",
    l:"natural daylight or blue-hour lantern mix, flattering face fill, saturated travel colors, soft background separation",
    cam:"environmental portrait, full-body and half-body variations, ancient town landmark clearly visible, 9:16 vertical framing",
    col:"red, turquoise, silver, warm lantern orange, wet stone gray, lush green accents",
    q:"realistic ethnic travel photography, detailed silver ornaments and embroidery, crisp face focus, 8K, documentary-meets-fashion portrait",
    neg:"costume chaos, inaccurate hidden headdress, over-smoothed skin, cartoon, low quality, watermark"},
  tibetan_grassland_lake:{n:"草原藏風湖畔寫真",mk:"bohemian_sun",
    char:"adult adventurous travel woman, expressive face, natural smile or contemplative side gaze, windblown hair braids, open grassland freedom",
    s:"highland grassland beside a wide lake, distant mountains, dramatic cloudy sky, sheep or yaks far in the background, open meadow and lake shoreline, crisp plateau air",
    o:"red Tibetan-inspired cloak and robe with embroidered trim, thick faux-fur collar and cuffs, braided hair ribbons, forehead bead ornament, layered scarf, warm travel costume with cultural texture",
    prop:"arms stretched wide in the wind, hand near face making playful travel gesture, or looking across the lake with cloak spread open",
    fx:"wind moving fur cuffs and cloak, dramatic cloud shadows, plateau haze, lake shimmer, natural documentary motion",
    l:"soft overcast plateau light, occasional sun break through clouds, clean face illumination, cool natural white balance",
    cam:"wide environmental portrait, subject integrated into lake and grassland, 9:16 or cinematic wide framing, realistic travel-photo composition",
    col:"deep red cloak, natural grass green, lake blue-gray, fur brown, moody cloud gray",
    q:"authentic highland travel photography, realistic skin, crisp textile detail, natural lens depth, high resolution, cinematic outdoor atmosphere",
    neg:"studio background, fantasy armor, hidden face, cartoon, overprocessed colors, watermark"},
  kyoto_white_kimono_street:{n:"京都白色和服街拍",mk:"japanese_geisha",
    char:"adult soft Japanese street portrait mood, gentle gaze, neat short or tied hair with floral accessory, calm delicate expression",
    s:"Kyoto old street with wooden tea shop storefronts, noren curtains, ceramic jars, narrow lane, red vending machines, temple steps and everyday urban details",
    o:"white lace kimono or yukata with delicate floral patterns, fluffy white shawl, small structured handbag, soft hair flower accessory, refined modern kimono travel styling",
    prop:"standing beside a red vending machine, sitting on a wooden bench near a tea shop, or walking past temple steps while holding a small handbag",
    fx:"soft street bokeh, gentle film grain, subtle breeze in sleeves, clean documentary travel texture, no fantasy effects",
    l:"soft daylight, open shade from narrow street, natural skin tone, gentle background blur, Fuji film color mood",
    cam:"Japanese street fashion travel portrait, 35mm or 50mm lens, full-body and three-quarter framing, 9:16 vertical",
    col:"white lace, muted wood brown, vending-machine red accent, soft gray street tones, clean pastel highlights",
    q:"realistic Kyoto kimono street photography, high detail fabric lace, natural pores, film-like color, professional travel portrait",
    neg:"overly theatrical geisha makeup, cartoon, cheap costume, cluttered face, watermark"},
  jiangnan_white_fur_umbrella:{n:"江南白狐裘油紙傘",mk:"qing_palace",
    char:"adult refined classical woman, calm elegant gaze looking upward toward the umbrella or softly at camera, poised Jiangnan garden mood",
    s:"Jiangnan classical garden with green pond water, stone lantern, arched bridge, black-tile pavilion, white plaster walls, wooden corridor and misty rainy atmosphere",
    o:"white winter hanfu cloak with soft faux-fur collar, blue embroidered inner robe, ornate turquoise-and-pearl crown, dangling bead tassels, elegant long sleeves",
    prop:"holding a pale white oil-paper umbrella above the shoulder, or holding a small embroidered round fan, standing beside pond or leaning gently on wooden railing",
    fx:"light rain or mist, pond reflection, soft drizzle specks, delicate jewelry sparkle, muted garden haze, sleeve fabric weight",
    l:"overcast soft daylight, gentle cool green reflected light from pond, face softly illuminated, low contrast and refined",
    cam:"elegant Jiangnan garden portrait, three-quarter or half-body framing, subject sharp with garden architecture softly blurred, 9:16 vertical",
    col:"white, porcelain blue, jade green pond, black tile, muted gray garden atmosphere",
    q:"realistic Chinese garden hanfu photography, premium textile embroidery, natural skin texture, cinematic shallow depth, 8K",
    neg:"bright neon colors, hidden face, plastic fur, cartoon, low quality, watermark"},
  song_red_cloak_moon_gate:{n:"宋韻紅披風月洞門",mk:"gongting",
    char:"adult warm classical Chinese woman, gentle smile, red floral hair ornaments, pearl strands, dignified Song/Tang-inspired travel portrait presence",
    s:"traditional Chinese garden at night, circular moon gate glowing with warm rim light, wooden lattice doors, wet stone ground with golden reflections, dark garden behind the gate",
    o:"red embroidered cloak with white faux-fur collar over layered red, pale pink and light-blue hanfu, floral embroidery, ornate updo with red flowers and pearl hair chains",
    prop:"holding a warm-toned oil-paper umbrella or glowing bamboo lantern, one hand near cheek, standing inside the moon gate silhouette",
    fx:"warm gate halo, wet ground reflections, lantern bokeh, subtle drizzle, red cloak texture, cinematic night atmosphere",
    l:"strong warm architectural backlight around the moon gate, soft key light on face, dark garden contrast, golden edge lighting",
    cam:"centered moon-gate composition, full-body vertical 9:16 portrait, circular frame around the subject, face clear and bright",
    col:"deep red cloak, warm gold light, black night background, pale blue sleeve accents, wet stone amber reflections",
    q:"realistic ancient garden night portrait, cinematic composition, high-detail embroidery, natural skin, 8K HDR",
    neg:"flat flash, blown-out face, hidden umbrella face, cartoon, low quality, watermark"},
  korean_palace_pastel_hanbok:{n:"韓宮粉彩韓服",mk:"korean_palace",
    char:"adult gentle East Asian woman, graceful palace-tour mood, soft smile or quiet side gaze, natural Korean clean-beauty expression",
    s:"Korean royal palace courtyard in autumn, brick walls, tiled roofs, palace gates, ginkgo leaves on the ground, red maple trees, distant mountain silhouette, warm afternoon sunlight",
    o:"pastel hanbok with white jeogori, pink, lavender, peach or beige full skirt, delicate ribbon tie, soft traditional hair accessory, flowing skirt volume",
    prop:"walking through palace courtyard, holding skirt lightly, turning back with skirt flowing, or standing with friends in coordinated pastel hanbok",
    fx:"golden leaves falling, skirt movement, warm sun flare, soft palace background bokeh, documentary travel softness",
    l:"natural warm afternoon sunlight, soft backlight through autumn trees, clean face fill, gentle film color",
    cam:"Korean palace travel portrait, full-body environmental framing, 9:16 vertical, palace architecture visible and not overpowered",
    col:"pastel pink, lavender, peach, cream, autumn gold, brick red, clear blue sky",
    q:"realistic Seoul palace hanbok photography, elegant travel editorial, natural skin texture, flowing fabric detail, 8K",
    neg:"Chinese hanfu silhouette, fantasy armor, over-saturated colors, cartoon, hidden face, watermark"},
  lantern_window_guzhen:{n:"古鎮燈籠窗邊人像",mk:"tang",
    char:"adult warm classical beauty, soft close-up smile, expressive eyes, cozy ancient-town night portrait mood",
    s:"ancient town wooden window or shopfront, glowing lanterns, fish-shaped lantern decorations, warm paper lanterns, wooden pillars, narrow alley or indoor-outdoor threshold",
    o:"cream, gold, red or pastel embroidered hanfu with ornate crown, pearl tassels, floral hair ornaments, layered silk and chiffon sleeves",
    prop:"leaning on a wooden window railing, peeking from behind a glowing lantern, holding a small bamboo lantern, one hand resting near chin",
    fx:"large warm lantern foreground blur, golden bokeh, fish-lantern glow overhead, shallow depth of field, cozy night market atmosphere",
    l:"very warm lantern key light from one side, soft fill on face, strong foreground glow and background bokeh, cinematic intimate portrait",
    cam:"close-up or half-body portrait, 85mm lens feel, face sharp with lantern foreground framing, vertical 9:16",
    col:"warm gold, cream silk, red ornaments, dark wood brown, soft amber night glow",
    q:"realistic ancient-town lantern portrait photography, detailed crown jewelry, natural skin texture, high-end travel portrait, 8K",
    neg:"garbled signage, harsh flash, hidden face, plastic skin, cartoon, watermark"},
  cream_rose_floral_goddess:{n:"奶油白玫瑰花神",mk:"xianxia",
    char:"adult ethereal East Asian floral goddess, translucent fair skin, delicate dreamy eyes, gentle mysterious gaze, soft feminine aura",
    s:"cream-white rose garden at golden hour, lace curtain on one side, dense white roses and soft green leaves, warm backlight filtering through floral lace patterns",
    o:"tasteful living vine couture dress, green vines woven like a floral bodice and skirt, cream white roses, daisies, baby's breath and tiny flowers, full floral crown, daisy earrings, strategically covered luxury botanical design",
    prop:"holding a perfect cream-white rose near lips, another hand holding small white flowers and vine branches, elegant front-facing pose with slight body turn",
    fx:"soft bloom, airy light haze, glowing dust particles, lace-shadow patterns on skin, creamy bokeh, dreamlike transparency",
    l:"golden hour backlight and side backlight, very soft high-key diffusion, luminous warm rim light, gentle skin glow",
    cam:"waist-up cinematic portrait, 85mm lens, shallow depth of field, face and floral details sharp, vertical 9:16",
    col:"cream white, champagne gold, ivory, misty green, warm beige, soft pastel highlights",
    q:"ultra realistic fairycore floral goddess photography, luxury editorial portrait, detailed petals and vines, natural skin texture, 8K",
    neg:"nudity, exposed private areas, ordinary clothes, heavy dark makeup, neon colors, plastic skin, gothic horror, cartoon, messy background, watermark"},
  cappadocia_red_convertible:{n:"卡帕紅車熱氣球",mk:"modern",
    char:"adult glamorous travel model with relaxed confident smile, polished vacation makeup, wind-swept long hair",
    s:"Cappadocia-style rocky valley at sunset, vintage red convertible parked on a scenic viewpoint, distant hot-air balloons floating in the orange sky",
    o:"dramatic flowing red dress with elegant slit, gold earrings, delicate bracelets, styled hair, luxury resort travel accessories",
    prop:"sitting gracefully on the hood or side of the convertible, one leg extended elegantly, looking toward sunset or camera",
    fx:"wind-blown fabric, warm sunset flare, dust glow, distant balloon silhouettes, cinematic travel poster atmosphere",
    l:"low golden sunset side light, warm rim light on hair, soft fill on face, natural HDR sky",
    cam:"wide environmental travel portrait, 35mm cinematic lens, car and balloons visible, 9:16 or 16:9 magazine crop",
    col:"deep red dress, sunset orange, desert beige, warm gold, soft blue distant haze",
    q:"ultra realistic luxury travel photography, high fashion destination shoot, sharp fabric detail, natural skin texture, 8K",
    neg:"cheap car interior, awkward legs, distorted car, oversaturated sky, plastic skin, cartoon, watermark"},
  storm_veil_desert_bride:{n:"風暴長紗荒原新娘",mk:"moon",
    char:"adult cinematic bride-like muse, calm elegant profile, romantic but powerful expression, delicate luminous skin",
    s:"open desert plateau or salt flat under dramatic storm clouds, vast horizon, strong wind, minimalist wild landscape",
    o:"white couture bridal gown with extremely long translucent veil and flowing ribbons, pearl hairpins, floral hair ornament, elegant earrings",
    prop:"standing in profile or three-quarter view, lifting veil near face, long veil streaming across the entire frame",
    fx:"storm clouds, wind-blown veil trails, dust haze, soft motion in fabric, epic cinematic scale",
    l:"diffused storm light with bright rim on veil, dramatic cloud contrast, soft face fill, cool cinematic atmosphere",
    cam:"wide full-body environmental portrait, long flowing veil composition, 35mm lens feel, vertical 9:16",
    col:"white, silver gray, storm blue, muted sand, soft pearl highlights",
    q:"ultra realistic cinematic bridal travel photography, dramatic veil movement, detailed fabric, natural skin texture, 8K",
    neg:"wedding hall, cluttered background, muddy dress detail, harsh flash, plastic skin, cartoon, watermark"},
  golden_forest_reflection:{n:"金色森林水鏡",mk:"soft",
    char:"adult poetic travel girl, quiet smile, natural polished makeup, relaxed literary temperament",
    s:"golden autumn forest with tall trees reflected in shallow water, wetland path, glowing yellow leaves, mirror-like water surface",
    o:"black fitted top with soft ivory flowing skirt, elegant black hat, small earrings, tasteful simple accessories",
    prop:"standing gently in shallow reflective water or on a narrow path, touching hat brim, looking down or softly to camera",
    fx:"perfect water reflection, golden leaf bokeh, soft ripples, warm sunlight through trees, dreamy film grain",
    l:"warm backlight filtered by yellow leaves, soft face fill, natural high-key forest glow",
    cam:"full-body environmental portrait with reflection symmetry, 50mm lens, clean centered composition, vertical 9:16",
    col:"golden yellow, black, ivory, wet brown, warm green, amber highlights",
    q:"realistic poetic autumn travel photography, cinematic reflection composition, natural skin, crisp leaf detail, 8K",
    neg:"messy water, broken reflection, harsh flash, oversaturated yellow, plastic skin, cartoon, watermark"},
  dark_deer_night_goddess:{n:"夜之鹿角女神",mk:"dark",
    char:"adult mysterious night forest goddess, delicate face, cool intense gaze, elegant fantasy aura",
    s:"dark enchanted forest at night, twisted tree trunks, moonlight mist, deep purple-blue background, subtle glowing particles",
    o:"black-purple fantasy couture dress with starry embroidery, antler crown or deer-horn headpiece, metallic vine ornaments, dark floral hairpieces, layered skirt and boots",
    prop:"turning back toward camera, one hand raised gracefully near branches, seated or standing among tree roots",
    fx:"moon mist, tiny star lights in hair and dress, subtle magical glow, smoky depth, cinematic fantasy texture",
    l:"cool moonlight key, soft purple fill, rim light on antlers and hair, controlled dark contrast",
    cam:"vertical fantasy poster portrait, 85mm lens, dramatic forest framing, face sharp",
    col:"midnight blue, deep purple, black, silver, muted teal, small white star highlights",
    q:"ultra realistic dark fantasy travel portrait, luxury costume detail, natural skin texture, cinematic lighting, 8K",
    neg:"horror gore, childish costume, cheap horns, overexposure, plastic skin, cartoon, watermark, unreadable text"},
  dark_orb_sorceress:{n:"暗黑寶珠魔女",mk:"dark",
    char:"adult gothic sorceress beauty, sharp mysterious eyes, elegant confident expression, polished fantasy makeup",
    s:"dark magical forest chamber or gothic fantasy set, twisted roots, velvet shadows, stained-glass or iridescent magical background",
    o:"black and burgundy velvet couture gown, ornate corset, lace gloves, metallic filigree arm pieces, black horn-like hair ornaments, gemstone earrings",
    prop:"holding a crystal orb close to chest, leaning forward slightly with intense eye contact, surrounded by magical objects",
    fx:"orb glow, iridescent highlights, smoky atmosphere, velvet texture, low-key cinematic depth",
    l:"soft directional key on face, cool rim light, subtle red fill from velvet, glowing orb underlight balanced naturally",
    cam:"half-body gothic editorial portrait, 85mm lens, shallow depth of field, vertical 9:16",
    col:"black, burgundy, antique silver, deep emerald, violet glow, pearl highlights",
    q:"ultra realistic gothic fantasy fashion photography, detailed lace and metalwork, natural skin texture, cinematic dark luxury, 8K",
    neg:"horror gore, cheap cosplay, overexposed orb, plastic skin, cartoon, watermark, unreadable title text"},
  sakura_kimono_soft_closeup:{n:"櫻花和服柔光近景",mk:"soft",
    char:"adult soft Japanese-style travel muse, gentle smile, clean glowing makeup, bright clear eyes",
    s:"dense pale pink and white cherry blossoms surrounding the frame, shrine garden or quiet riverside background, creamy spring bokeh",
    o:"pale cream, pink or ivory kimono with delicate floral embroidery, pearl hairpins, white flower hair ornament, elegant obi",
    prop:"touching a cherry blossom branch, holding a folding fan, face framed by foreground blossoms",
    fx:"high-key soft bloom, petals in foreground blur, airy spring light, gentle overexposure, romantic haze",
    l:"soft daylight backlight, luminous face fill, low contrast pastel spring lighting",
    cam:"close-up or bust portrait, 85mm lens, foreground blossoms framing face, vertical 9:16",
    col:"sakura pink, ivory, pale gold, soft green, warm white",
    q:"realistic Japanese kimono travel portrait, dreamy cherry blossom close-up, natural skin texture, detailed embroidery, 8K",
    neg:"heavy shadow, harsh flash, distorted flowers, plastic skin, cartoon, watermark"},
  shrine_ema_kimono:{n:"神社繪馬和服",mk:"soft",
    char:"adult cheerful travel girl, bright smile, polished cute makeup, friendly candid expression",
    s:"Japanese shrine ema prayer-board wall, wooden plaques, red shrine details, sunlight, lively but softly blurred travel background",
    o:"white or pale pink kimono with red obi accent, flower hairpin, pearl ornaments, small structured handbag, optional cute themed purse",
    prop:"holding or pointing at an ema wooden prayer plaque, playful V-sign near face, relaxed travel pose",
    fx:"sunlit bokeh, warm wood texture, tiny paper strips, candid tourist energy with polished portrait finish",
    l:"bright natural daylight, soft face fill, clean highlights, pastel editorial color",
    cam:"waist-up travel portrait, 50mm lens, shrine plaques readable as texture not exact text, vertical 9:16",
    col:"white, pale pink, red, warm wood, cream, soft gold",
    q:"realistic Japanese shrine kimono travel photography, cute polished styling, detailed accessories, natural skin texture, 8K",
    neg:"legible fake text focus, cluttered face, harsh flash, plastic skin, cartoon, watermark"},
  asakusa_urban_kimono:{n:"淺草街頭和服",mk:"soft",
    char:"adult elegant urban travel muse, gentle smile, polished city-trip makeup, relaxed graceful posture",
    s:"Asakusa-style temple gate or old Japanese shopping street, large lantern in the distance, rickshaw or pedestrians softly blurred",
    o:"white-blue, red-orange, black-gold or green floral kimono, elaborate obi, flower hairpiece, pearl pins, small handbag, optional folding fan",
    prop:"turning back while walking, holding umbrella or handbag, posing near temple approach or crosswalk",
    fx:"city travel bokeh, soft motion of pedestrians, temple architecture depth, clean documentary luxury feel",
    l:"bright daylight with soft fill, gentle rim light, balanced natural white balance",
    cam:"full-body or three-quarter urban travel portrait, 50mm lens, iconic background visible, vertical 9:16",
    col:"kimono color accents, temple red, stone gray, ivory, gold, soft city blues",
    q:"realistic Japanese urban kimono travel photography, detailed obi and hair accessories, natural skin texture, 8K",
    neg:"crowd blocking face, messy signage, distorted kimono pattern, plastic skin, cartoon, watermark"},
  hydrangea_yukata_garden:{n:"紫陽花浴衣花園",mk:"soft",
    char:"adult fresh summer yukata girl, clear gentle eyes, soft smile, clean transparent makeup",
    s:"lush hydrangea garden in summer daylight, pale blue and lavender flower clusters, green leaves, quiet garden path",
    o:"white or pale lavender yukata with hydrangea patterns, soft obi bow, floral hair ornament, pearl pins, small woven basket bag",
    prop:"standing among hydrangeas, one hand near hair, holding basket bag, body turned slightly with face toward camera",
    fx:"high-key summer softness, green leaf bokeh, delicate floral foreground, airy transparent atmosphere",
    l:"bright diffused daylight, soft highlights on face, low contrast and fresh pastel tone",
    cam:"three-quarter portrait, 85mm lens, flowers surrounding subject, vertical 9:16",
    col:"lavender, pale blue, white, fresh green, soft cream",
    q:"realistic Japanese hydrangea yukata photography, fresh summer travel portrait, detailed fabric and flowers, natural skin, 8K",
    neg:"wilting flowers, harsh noon shadow, oversaturated greens, plastic skin, cartoon, watermark"},
  white_kimono_sword:{n:"白衣和服持刀",mk:"warrior",
    char:"adult elegant white-clad swordswoman, calm focused expression, refined cool beauty, delicate but strong aura",
    s:"minimal shrine courtyard or traditional interior with stone basin, soft neutral architecture, quiet sacred atmosphere",
    o:"pure white kimono with silver-gray obi, pearl and black cord details, white flower hair ornament, clean updo, refined makeup",
    prop:"holding a sheathed or drawn katana safely near shoulder, eyes lowered or looking off-camera, poised stillness",
    fx:"soft blade reflection, clean white fabric glow, quiet cinematic tension, shallow depth of field",
    l:"soft natural window light or open shade, subtle rim on sword and hair, low contrast cool elegance",
    cam:"close-up or half-body portrait, 85mm lens, sword diagonal composition, vertical 9:16",
    col:"white, pearl, silver gray, black accent, pale beige, soft stone tones",
    q:"ultra realistic white kimono swordswoman portrait, cinematic travel editorial, detailed fabric and blade, natural skin texture, 8K",
    neg:"violent blood, unsafe action, cheap costume, distorted sword, plastic skin, cartoon, watermark"},
  y2k_pink_magazine:{n:"粉色Y2K雜誌美學",mk:"modern",
    char:"adult playful fashion model, glossy lips, bright eyes, confident cute expression, polished idol-style makeup",
    s:"sparkly pastel magazine cover backdrop, pink and lavender watercolor textures, chrome stickers, stars, hearts, barcode and fashion graphics as decorative elements",
    o:"pink metallic jacket, white star crop top, layered silver necklaces, charm choker, ruffled pink skirt, chunky sneakers, shiny handbag, hair styled with soft bangs",
    prop:"standing in fashion pose, one hand holding bag strap, wind-blown long hair, magazine cover composition",
    fx:"glitter sparkles, holographic reflections, soft paper texture, playful sticker graphics, glossy Y2K shine",
    l:"bright beauty lighting, soft frontal key, glitter rim highlights, clean studio exposure",
    cam:"fashion magazine cover portrait, full-body or upper-body, centered composition, vertical 9:16",
    col:"bubblegum pink, lavender, white, chrome silver, peach, pastel rainbow highlights",
    q:"high-end Y2K fashion magazine aesthetic, ultra detailed editorial illustration-photo hybrid, polished accessories, 8K",
    neg:"messy unreadable typography, low-quality collage, distorted face, plastic skin, overly childish styling, watermark"},
  shinjuku_sakura_sweet_street:{n:"新宿櫻花甜系街拍",mk:"modern",
    char:"adult cheerful East Asian travel model, sweet relaxed smile, bright clear eyes, glossy natural lips, soft peach blush, fresh idol-style daytime makeup, airy bangs and long brown hair with a pale pink ribbon",
    s:"Tokyo Shinjuku daytime street crossing, lively commercial signs, red lantern food stalls, tall city billboards, blue sky, blooming sakura trees along the sidewalk, realistic crowd in the background kept slightly blurred",
    o:"soft pink floral chiffon mini dress with layered ruffles and delicate bow details, light nude platform sandals, small woven straw handbag with pink ribbon, dainty necklace and subtle earrings, polished sweet vacation styling",
    prop:"holding an iced drink or a small takoyaki skewer, walking or posing with one arm raised, playful peace sign, natural tourist snapshot energy while keeping the face sharp",
    fx:"sakura petals drifting through the street, soft lens flare, bright city bokeh, light wind lifting hair and chiffon layers, airy spring atmosphere",
    l:"clear sunny daylight with flattering soft fill on the face, gentle backlight through sakura blossoms, clean high-key exposure, natural white balance",
    cam:"Japanese street travel portrait, full-body or close-up variant, 35mm lifestyle lens, dynamic low-to-eye-level framing, vertical 9:16, iconic Shinjuku signs readable as atmosphere but not dominating",
    col:"sakura pink, soft peach, cream, city red signage, sky blue, warm beige, clean bright spring palette",
    q:"ultra realistic Japanese spring street fashion travel photography, sweet cinematic lifestyle editorial, natural skin texture, detailed chiffon fabric, realistic city depth, 8K",
    neg:"overly revealing pose, distorted crowd, unreadable messy text, fake landmark, plastic skin, over-smoothing, harsh shadows, cartoon, watermark"},
  // 神話歷史
  daji:{n:"妲己 · 九尾妖狐",mk:"fox",s:"殷商宮廷深宮，朱紅大柱，黑金宮牆，燭火搖曳，奢靡妖冶氛圍",o:"深紅黑色妖狐禮袍，金色花紋刺繡，半透明蕾絲，高開叉設計，金色妖豔頭冠",fx:"九條漂浮金紅色狐狸尾巴（nine flowing golden-red fox tails）環繞全身、紅色靈氣火焰、妖邪符文",l:"暗金宮燈燭火光，深紅背景魅惑戲劇光影",q:"中國古裝奇幻電影大片，妖魅動人，超寫實細節，8K HDR",neg:"卡通、動漫、AI感、廉價感、文字水印"},
  change:{n:"嫦娥 · 廣寒仙子",mk:"moon",s:"廣寒宮月宮，白玉欄杆，桂花樹，巨大滿月懸於身後，清冷如冰",o:"純白廣袖仙裙，銀絲刺繡，多層薄紗飄動，白玉髮簪，月光白色",fx:"月光粒子漂浮（moonlight floating particles）、桂花瓣飄落、銀白仙氣靈霧",l:"月光銀藍清冷光（cool moonlight silver-blue），夢幻光暈 bloom",q:"中國神話仙境大片，清冷絕美，超寫實，8K",neg:"卡通、動漫、AI感、廉價感、文字水印"},
  xuannv:{n:"九天玄女 · 天界神將",mk:"xianxia",s:"天界神殿，玄黃天光穿透雲層，宏偉天宮大殿，雷電環繞",o:"玄黑金色神將禮袍，金甲護肩，飄逸仙袍，威嚴神聖頭冠",fx:"雷電電弧環繞（lightning arc surrounding）、金色符文天書漂浮、玄黃天光體積光",l:"玄黃神聖 volumetric god rays，雷電閃光，威嚴戲劇性光影",q:"中國神話天界大片，神聖威嚴，UE5 cinematic lighting，8K HDR",neg:"卡通、動漫、AI感、廉價感、文字水印"},
  nvwa:{n:"女媧 · 補天造物神",mk:"xianxia",s:"混沌初開的神界天穹，五彩熔岩補天石懸浮，天地裂縫，創世震動宇宙",o:"創世女神袍服，五彩神聖配色（青紅黑白黃），飄逸神衣，龍蛇圖騰紋樣，神聖頭冠",fx:"五彩補天石光芒萬丈（five-colored divine stone radiance）、天穹裂縫光線、創世能量粒子",l:"五彩創世神光，熔岩橙紅配天藍，史詩體積光",q:"中國神話創世大片，神聖偉大，UE5 cinematic，8K HDR",neg:"卡通、動漫、AI感、廉價感、文字水印"},
  mazu:{n:"媽祖 · 海上女神",mk:"gongting",s:"澎湃大海之上，神廟海島，巨浪翻滾，漁船點點，天空神聖彩霞",o:"媽祖神袍，紅黃金色正式神衣，天后冠冕，金色刺繡龍鳳，莊嚴神聖",fx:"海浪翻滾環繞（crashing waves surrounding）、神光從天降下、金色神聖光暈",l:"海上日落金光，神聖天光 god rays，波光粼粼反射",q:"中國海洋神話大片，莊嚴神聖，超寫實，8K HDR",neg:"卡通、動漫、AI感、廉價感、文字水印"},
  xishi:{n:"西施 · 沉魚之美",mk:"moon",s:"越國溪畔浣紗，清澈溪水，青石板，垂柳依依，水霧飄渺",o:"素白越國細布仙裙，簡約清雅，淡藍腰帶，珠釵，素雅無過度華麗",fx:"溪水漣漪反光、水霧飄渺（misty water vapour）、花瓣漂浮水面",l:"清晨柔和自然光，水面反光，空靈素雅光影",q:"中國歷史人物寫真，清麗脫俗，超寫實攝影質感，8K",neg:"卡通、動漫、AI感、廉價感、文字水印"},
  wangzj:{n:"王昭君 · 落雁出塞",mk:"tang",s:"廣袤草原大漠，夕陽餘暉染天，遠處匈奴氈帳，一望無際荒野",o:"漢服宮廷出塞盛裝，紅色暖橙絲綢，金色刺繡，頭戴步搖釵環，飄逸衣袂",fx:"夕陽金色體積光（golden volumetric sunset light）、衣袂隨風飄動、大雁南飛剪影",l:"夕陽落日橙金色光，史詩感暖色調，大氣透視",q:"中國歷史電影大片，出塞史詩感，超寫實，8K HDR",neg:"卡通、動漫、AI感、廉價感、文字水印"},
  diocan:{n:"貂蟬 · 閉月羞花",mk:"tang",s:"月下花園拜月台，夜色朦朧，月光如水，繁花盛開，三國時代華麗花苑",o:"三國時代舞姬禮服，粉紫輕紗，薄如蟬翼，珠寶華麗，飄逸舞裙",fx:"月光如水傾瀉（moonlight pouring like water）、花瓣飄落、輕薄紗裙隨風飄揚",l:"月光銀藍柔光，花苑燈籠暖光，夢幻夜色",q:"中國歷史古裝大片，閉月羞花，超寫實細節，8K",neg:"卡通、動漫、AI感、廉價感、文字水印"},
  guifei:{n:"楊貴妃 · 盛唐牡丹",mk:"tang",s:"華清池旁，盛唐皇宮，牡丹花海盛開，金碧輝煌的唐代宮殿，奢華富貴",o:"盛唐貴妃禮服，牡丹紅與金色，大袖廣袍，高腰齊胸設計，珍珠金飾頭冠，豐腴華美",fx:"牡丹花瓣漂浮飄落（peony petals floating）、金色粒子光、溫泉水霧飄渺",l:"暖金色宮廷燭光，柔和溫暖日光，盛唐奢靡光影",q:"盛唐宮廷電影大片，奢華富貴，超寫實，8K HDR",neg:"卡通、動漫、AI感、廉價感、文字水印"},
  mulan:{n:"花木蘭 · 巾幗英雄",mk:"warrior",s:"大漠戰場，烽煙四起，萬馬奔騰揚塵，壯闊北方邊疆，旌旗獵獵",o:"北魏時代女將戰甲，黑銀色精鋼鎧甲，紅色戰袍，英氣頭盔或戰冠，颯爽英姿",fx:"沙塵粒子飛揚（sand dust particles flying）、戰場烽火、颯颯旌旗飄動",l:"大漠夕陽橙金光，戰場煙塵漫射光，英雄主義光影",q:"中國巾幗英雄史詩電影，颯爽英姿，超寫實，8K HDR",neg:"卡通、動漫、AI感、廉價感、文字水印"},
  // 仙俠
  warrior:{n:"紅衣戰姬",mk:"warrior",s:"古城牆城樓制高點，夕陽橙紅染天，遠方城牆綿延，旌旗飄揚",o:"鮮豔大紅色漢服，金龍紋錦緞刺繡，寬大飄逸袖袍，金色鳳冠，金流蘇耳飾",fx:"夕陽 golden hour 體積光打側身，強烈戲劇性光影，旌旗飄動虛化",l:"cinematic golden hour backlight，dramatic side lighting，暖橙紅色天空",q:"超寫實攝影，8K HDR，電影海報構圖，shallow depth of field",neg:"卡通感、動漫風、AI感、低畫質、廉價感、文字水印"},
  topdown:{n:"俯拍飛天",mk:"gongting",s:"古建築石板廣場地面，青灰色磚石紋理，極簡純淨地面",o:"超大裙擺紅色漢服，蕾絲薄紗多層次，金色刺繡，金鳳冠",fx:"裙擺 360度向外炸開展開如盛開花朵（skirt exploding like a blooming flower overhead），布料真實飛揚",l:"soft overhead diffused light，紅灰色調對比",q:"超高細節布料質感，8K，overhead bird's eye view",neg:"側拍、AI感、卡通、低畫質、文字水印"},
  flames:{n:"火焰特效大片",mk:"warrior",s:"宏偉中式古殿正門前，殿宇飛簷黑瓦，廊柱廣場石板",o:"大紅朱紅古裝禮服，金龍刺繡，飄逸長袖，頭戴金冠",fx:"兩側環繞騰起橙金色火焰（surrounding dramatic fire effect），強烈逆光輪廓光（rim light backlight），衣袍被熱浪吹動",l:"dramatic backlit silhouette，火焰橙金環境光",q:"電影橫幅 16:9，UE5 cinematic lighting，8K 超高細節",neg:"AI感、卡通、低畫質、廉價感、文字水印"},
  xianxia:{n:"仙俠電影海報",mk:"xianxia",s:"漂浮雲海之上的古老仙宮平台，金白天光穿透雲層，仙氣靈霧與粒子流動",o:"白金與淡藍色多層絲綢薄紗仙裙，半透明飄逸長袖，漂浮仙帶",fx:"禁術液態倒影（liquid forbidden art reflection），黑紅紫靈氣，流動符文，空間裂痕",l:"UE5 volumetric light，god rays through clouds，神聖與黑暗並存",q:"中國仙俠電影海報構圖，超現實東方奇幻，8K HDR",neg:"卡通、動漫、AI感、低畫質、文字水印"},
  gongting:{n:"東方宮廷寫真",mk:"gongting",s:"宏偉中式古塔寺廟前，石階頂端，飛簷紅柱，對稱透視構圖，自然日光",o:"極致華麗黑金色宮廷禮服，金白紅花卉刺繡，高級緞面絲綢，超大立體高領，金色鳳冠",fx:"無特效",l:"soft natural daylight，柔和暖光，高動態範圍",q:"超寫實，8K，電影級光影，時尚雜誌封面",neg:"卡通、動漫、AI感、廉價感、文字水印"},
  hanfu:{n:"漢服唐宮大片",mk:"tang",s:"宏偉古典中式宮殿大廳，高聳紅色漆柱，金色雕刻橫樑，格窗屏風，自然光從雕窗斜入",o:"精緻唐制改良漢服，齊胸儒裙飄逸大袖，多層輕薄絲綢薄紗，杏色淡蓮粉玫瑰色調",fx:"花瓣飄落、格窗光影投射地面、柔和光暈",l:"soft warm natural light through lattice windows，暖橙色調，low contrast",q:"高端時尚編輯攝影，超寫實，膠片顆粒，85mm 2:3",neg:"低品質、卡通、cosplay感、文字水印"},
  desert:{n:"大漠敦煌史詩",mk:"warrior",s:"廣袤沙漠，連綿沙丘，夕陽染紅天際線，遠處敦煌式崖壁洞窟",o:"西域風格改良禮服，絲綢與金線刺繡，半透明飄帶，敦煌壁畫紋樣，金色配飾頭冠",fx:"沙塵粒子漂浮（floating sand particles），金色夕陽 god rays 體積光，衣袂隨風飄動",l:"golden hour desert sunset light，暖金橙色天空",q:"史詩電影質感，超廣角壯麗大景，8K",neg:"現代建築、AI感、廉價感、文字水印"},
  // 時尚
  y2k:{n:"Y2K 霓虹海報",mk:"y2k",s:"全息閃粉漸層背景，粉紫藍彩虹反光，幾何星形與愛心裝飾貼紙元素",o:"粉色緞面棒球外套，白色星星圖案短版上衣，銀色鏈條多層項鍊",fx:"全息光澤反光（holographic iridescent glow），閃粉粒子，星形光斑",l:"studio holographic light，粉紫色彩虹漫射光",q:"Y2K千禧復古時尚，韓系偶像宣傳照，雜誌封面排版",neg:"古裝感、卡通感、AI感、廉價感"},
  cinematic:{n:"電影旅拍大片",mk:"cinematic",s:"歐洲古城街道廣場，石板路巴洛克建築，前景虛化，豐富景深",o:"高級訂製時裝或精緻休閒風，剪裁完美，布料流動感強，一線藝人氣質",fx:"膠片色彩分級（film color grading），輕微鏡頭光斑（lens flare）",l:"natural cinematic light，golden hour 或 blue hour",q:"電影旅拍大片，藝人宣傳質感，Leica Q2 風格，8K",neg:"低畫質、AI感、廉價感、文字水印"},
  editorial:{n:"時尚雜誌封面",mk:"editorial",s:"天界宮殿或宇宙大教堂，體積光束，漂浮符文，鏡面反射地面，多層景深",o:"極其華麗奢華 Haute Couture 高訂禮服，飄逸絲綢半透明雪紡，精緻刺繡金屬裝飾",fx:"god rays 體積光，發光粒子漂浮，魔法光暈 bloom",l:"UE5 cinematic lighting，Octane render quality",q:"奢華時尚編輯美學，8K，masterpiece quality",neg:"低品質、光線平淡、卡通感、文字水印"},
  gothic:{n:"暗黑哥德時尚",mk:"gothic",s:"歐洲中世紀古堡，尖拱石牆，哥德式彩繪玻璃窗，蠟燭燭光搖曳",o:"黑色哥德蕾絲長裙，緊身胸衣，暗紅絲絨斗篷，精緻黑色頭飾，頸環珠寶",fx:"煙霧繚繞（atmospheric fog），黑色玫瑰花瓣飄落",l:"dramatic candlelight，dark gothic contrast，deep shadows",q:"暗黑浪漫美學，高對比電影光，精緻黑暗奢華感",neg:"色彩過亮、卡通感、AI感、廉價感、文字水印"},
  cyberpunk:{n:"賽博龐克都市",mk:"y2k",s:"未來亞洲大都市夜景，霓虹燈反射濕潤路面，高樓廣告牌，雨後蒸氣",o:"未來主義科技套裝，發光線條細節，半透明硬殼護具，霓虹配色",fx:"霓虹光污染（neon light pollution），雨絲效果，電弧閃光",l:"neon cyberpunk night lighting，Blade Runner色調",q:"賽博龐克電影美學，UE5，超寫實都市奇幻，8K HDR",neg:"卡通、動漫、AI感、白天場景、廉價感、文字水印"},
  // 奇幻
  lotus:{n:"粉荷月神仙境",mk:"moon",s:"巨大滿月作為背景光源，蓮花池水面，遠處傳統亭台樓閣剪影，粉色桃花漫天",o:"粉白薄紗多層飄動仙裙，金色珠花王冠，精緻流蘇珠寶頭飾",fx:"蓮花花瓣飄落，水面粼粼反光，光粒子漂浮，夢幻光暈 bloom",l:"moonlight silver-blue glow，soft dreamy backlight",q:"東方奇幻仙境，超寫實夢幻，8K",neg:"過度AI感輪廓、低畫質、廉價感、文字水印"},
  wedding:{n:"夢幻婚紗廣告",mk:"wedding",s:"地中海式庭院噴泉花園，白色拱形建築藍瓦屋頂，薰衣草花叢，夜空明月",o:"高訂婚紗雪紡禮服，紫粉藍白波西米亞設計，多層雪紗緞帶，深V超大裙擺",fx:"月光銀藍光澤，空氣光點粒子，裙擺旋轉動態金色光軌",l:"romantic moonlight，warm garden lanterns，soft bokeh",q:"婚紗品牌廣告大片，電影級柔光，Canon EOS R5 85mm f/1.4，HDR 8K",neg:"低畫質、AI感、廉價、文字水印"},

  beast_guardian:{n:"神獸守護 · 星空仙俠",mk:"xianxia",
    char:"冷白通透肌膚，自然皮膚質感，五官精緻立體，眼神深邃有神，氣質如天界守護者",
    s:"浩瀚星空與雲海之上，古代仙宮平台，巨大神獸（白虎/青龍/鳳凰）的靈魂形態從背後天空中顯現，星辰閃爍，滿月高懸",
    o:"白色與金色多層絲綢仙裙，金屬神獸圖騰腰帶，半透明寬袖飄逸，神聖守護者造型",
    prop:"手持神獸同款圖騰法器或古代武器",
    fx:"神獸靈魂形態（divine beast spirit form）從背後天空盤旋顯現、白色光粒子環繞、星光流動符文、仙氣靈霧",
    l:"星空冷藍主光、神獸光暈銀白輔光、moon volumetric light、dramatic cinematic lighting",
    q:"中國仙俠電影海報，神獸守護主題，UE5 cinematic quality，8K HDR，超寫實細節",
    cam:"全身低角度仰拍，中央對稱構圖，9:16直式",
    col:"白銀冷藍色調，金色點綴，星空深藍背景",
    neg:"卡通、動漫、AI感、低畫質、廉價感、文字水印"},
  starry_travel:{n:"星空旅拍 · 銀河湖畔",mk:"cinematic",
    char:"清純甜美氣質，自然無瑕肌膚，溫柔靈動眼神，自然甜笑，如旅行品牌代言人",
    s:"紐西蘭或冰島湖畔，銀河橫跨星空，湖面完美鏡面反射銀河，遠處雪山剪影，湖邊石灘",
    o:"奶白色或米色寬鬆大毛衣，自然休閒風，簡約清新",
    prop:"手捧鐵製馬克杯，身旁有篝火燃燒",
    fx:"篝火暖橙光（warm campfire glow）照亮臉部、銀河粒子（Milky Way stars）、湖面星空倒影、輕微鏡頭光斑",
    l:"篝火暖光為主光、星空冷藍環境光、natural night photography light，canon astro settings",
    q:"超真實旅拍攝影，Sony A7R V + 14mm廣角，長曝光星空，8K，Milky Way photography quality",
    cam:"四分之三側後轉身回眸，寬景構圖，人物置左，星空佔畫面三分之二",
    col:"深藍星空配暖橙篝火，低飽和冷暖對比",
    neg:"卡通、AI感、過度後製感、室內場景、文字水印"},
  princess_palace:{n:"夢幻公主宮殿 · 奢華座椅",mk:"y2k",
    char:"精緻可愛甜美臉孔，高貴溫柔眼神，如童話公主或奢華品牌代言人，氣質甜蜜高貴",
    s:"夢幻奢華宮殿室內，紫色金色巴洛克王座，水晶吊燈瀑布，粉紫玫瑰花牆，愛心氣球漂浮，精緻茶點擺設",
    o:"紫粉色多層薄紗公主禮服，蕾絲刺繡精緻，閃亮水晶裝飾，搭配水晶透明高跟鞋",
    prop:"一手持香檳杯，一手持心形魔法權杖，頭戴水晶皇冠",
    fx:"水晶光折射閃爍（crystal light refraction）、玫瑰花瓣飄落、魔法閃粉粒子、吊燈光瀑布",
    l:"水晶吊燈暖黃主光、粉紫色夢幻環境光、sparkle highlight on crystals",
    q:"夢幻公主宮殿，Barbie movie aesthetic，超寫實奢華，8K HDR，ultra detail",
    cam:"全身坐姿，正面或微斜構圖，9:16直式，Haute Couture editorial",
    col:"粉紫金主色調，水晶透明點綴，夢幻低對比",
    neg:"卡通、動漫、AI感、廉價感、文字水印"},
  dark_sexy:{n:"暗黑性感寫真 · 棚拍精緻",mk:"gothic",
    char:"冷豔性感氣質，深邃眼神，精緻立體五官，高級時尚感，如頂級時裝品牌廣告",
    s:"暗黑奢華室內，深紅絲絨窗簾，黑色大理石牆面，古典黃銅燭台，低調奢華氛圍",
    o:"白色蕾絲馬甲緊身短裙或黑色高訂禮服，精緻蕾絲細節，金色配件，多層金鏈項鍊",
    prop:"手指輕觸嘴唇或頸部，或倚靠深紅窗簾",
    fx:"煙霧繚繞（atmospheric fog）、側光強陰影、絨布質感反光",
    l:"單側強光（dramatic side lighting）製造高對比、深陰影、邊緣輪廓光（rim light），棚拍專業布光",
    q:"高端時裝棚拍，Vogue Italia editorial style，高對比電影感，8K",
    cam:"半身特寫或四分之三身，低角度微仰，強調身形線條",
    col:"黑白深紅主色調，金色配件點綴，高對比單色",
    neg:"色彩過亮、卡通感、AI感、廉價感、文字水印、過度曝光"},
  butterfly_portrait:{n:"古典美人半身 · 蝴蝶髮飾",mk:"gongting",
    char:"東方古典美人，冷白通透肌膚，五官精緻立體，狹長鳳眼含情，眼神柔美朦朧，呈現含蓄東方美",
    s:"古典中式夜晚庭院或閣樓，燈籠溫暖散景背景，月牙星辰裝飾道具，植物枝葉虛化前景",
    o:"藍紫色薄紗漢服，精緻花卉刺繡，半透明廣袖，額心花鈿裝飾",
    prop:"手持金色月牙星辰道具，頭戴精緻藍色蝴蝶花卉髮飾",
    fx:"蝴蝶翩翩飛舞（butterfly particles floating）、燈籠暖光散景 bokeh、細緻珠寶光折射",
    l:"暖金燈籠側光聚焦臉部、冷藍月光環境輔光、邊緣光勾勒髮絲，電影級布光",
    q:"國風CG插畫質感人像，超寫實，電影級鏡頭，85mm f1.4，8K–16K",
    cam:"半身近景特寫，畫面重心聚焦面部與上半身，高級人像構圖",
    col:"藍紫金暖色調，低飽和高質感，避免艷俗",
    neg:"卡通、動漫、AI感、低畫質、廉價感、文字水印"},
  dual_xianxia:{n:"雙人仙俠對立 · 光暗對決",mk:"xianxia",
    char:"兩個版本的同一人物——正道版（白藍仙裙，純淨眼神）與魔道版（紫黑暗袍，凌厲眼神），形成光與暗的分裂對立",
    s:"天界仙宮高台，正面天光璀璨，背景黑暗魔氣漩渦，兩人對立於光暗交界之處，仙宮建築對稱分列兩側",
    o:"正道：白色藍色多層絲綢仙裙，金銀刺繡，飄逸長袖。魔道：紫黑暗色透明薄紗禮袍，黑色蕾絲細節，暗金裝飾",
    prop:"正道手側垂持，魔道手握發光魔力寶珠",
    fx:"光暗兩側能量衝突（light vs dark energy clash），紅紫黑魔氣漩渦（dark purple energy vortex），白金仙氣光粒子，衣袍隨能量飄動",
    l:"光暗強烈對比燈光，正道側暖白神聖光，魔道側紫黑戲劇暗光，energy glow on faces",
    q:"中國仙俠電視劇海報，光暗對決史詩感，UE5 cinematic，8K HDR",
    cam:"全身雙人對立構圖，兩人面對面或一背一正，9:16直式電影海報感",
    col:"白藍金vs紫黑暗紅，強烈對比色調",
    neg:"卡通、動漫、AI感、廉價感、水印"},
  xian_red_epic:{n:"長相思 · 西安紅裙大景",mk:"warrior",
    char:"英氣颯爽，眼神堅定有力，如武俠電視劇女主角，氣場強大",
    s:"西安古城牆，宏偉城牆磚石延伸至遠方形成強烈透視，冷灰陰天壓迫感天空，石板廣場，遠處城樓剪影，旌旗獵獵飄動",
    o:"深紅色大袖漢服，金色龍鳳刺繡，超大裙擺在奔跑中飛揚展開，長長裙裾拖曳在地，頭戴精緻金色髮冠，長髮隨風飛舞",
    prop:"雙手持長劍揮舞，或全速奔跑中裙擺炸開",
    fx:"超大裙擺被風吹起360度飛揚（massive skirt flying dramatically in wind），裙裾長長拖曳地面，髮絲飄逸，冷灰天空與紅裙強烈色彩對比",
    l:"冷灰陰天漫射光，低飽和冷藍色調，紅色與灰色城牆形成強烈對比，cinematic desaturated look",
    q:"中國古裝電視劇電影大片，長相思/蒼蘭訣風格，超寬廣角大景，8K HDR，shallow depth of field",
    cam:"超廣角全身大景，低角度仰拍，人物在構圖中偏小突顯壯闊城牆，或動態奔跑側身構圖",
    col:"深紅 vs 冷灰藍，高對比，低飽和電影色調",
    neg:"卡通、動漫、AI感、廉價感、靜態無動感、文字水印"},

  mirror_dual:{n:"古今雙面 · 鏡中對話",mk:"cinematic",
    char:"同一人扮演現代自我與古代靈魂，氣質在冷豔現代感與古典優雅之間切換",
    s:"中式古典室內，暗色調，玻璃或鏡面分隔空間，一側現代一側古典，低調光影",
    o:"一人兩套：現代白色深V或簡約禮服 + 古裝薄紗花卉漢服，兩人面對面站立",
    prop:"無道具，雙人對視姿態",
    fx:"玻璃反射形成虛實重疊效果（glass reflection creating dual reality），燈光在玻璃上的折射光斑，朦朧虛化背景",
    l:"低調側光，暗室氛圍，玻璃透射柔光，現代側冷光古裝側暖光",
    q:"當代藝術攝影風格，電影感雙重曝光概念，85mm f1.4，8K",
    cam:"半身雙人對立構圖，玻璃居中分隔，兩側各佔畫面",
    col:"冷暖對比，現代側冷白古裝側暖橙",
    neg:"卡通、AI感、廉價感、過度後製、文字水印"},

  snow_hanfu:{n:"雪景漢服 · 宮門飄雪",mk:"tang",
    char:"溫柔靜謐氣質，低頭或仰頭接雪，如古裝劇中深宮女子，清冷又溫婉",
    s:"古典宮門或廟宇前，白雪覆蓋地面，大雪紛飛，紅色宮牆或暗色木門為背景，松樹積雪",
    o:"粉色或暖橙色漢服，白色毛絨披肩，金色花朵髮飾，精緻盤髮",
    prop:"手持大紅油紙傘或透明雨傘",
    fx:"真實雪花飄落粒子（realistic snowflakes falling），積雪地面反光，傘面積雪，髮上輕薄雪花",
    l:"雪景漫射冷白光為主，暖橙宮燈或逆光為輔，雪地反光補底，暖冷對比",
    q:"超寫實雪景攝影，8K，雪花粒子真實感，shallow depth of field bokeh背景",
    cam:"半身或全身，人物置中或偏左，傘作為構圖元素",
    col:"粉白暖橙 vs 冷藍雪景，強烈暖冷對比",
    neg:"卡通、動漫、AI感、廉價感、假雪效果、文字水印"},

  museum_warm:{n:"博物館暖光 · 玻璃倒影",mk:"gongting",
    char:"靜謐優雅，溫柔眼神，如博物館中穿越而來的古典美人，氣質含蓄細膩",
    s:"中式古典博物館展廳，玻璃展示櫃，展品若隱若現，暖橙燈光打在玻璃上形成倒影，木質展台，靜謐空間感",
    o:"奶白色或杏色漢服，白色毛絨披肩，金色細髮飾，精緻盤髮，珍珠耳環",
    prop:"無，或手輕觸玻璃",
    fx:"玻璃反射倒影（glass reflection with soft overlay），暖橙光暈，玻璃上光斑折射",
    l:"暖橙博物館聚光燈主光，玻璃漫反射補光，背景暗部烘托，warm golden museum lighting",
    q:"高端人文攝影，85mm f1.4，溫柔膠片色調，8K",
    cam:"半身四分之三，人物靠近玻璃，倒影在旁側形成構圖",
    col:"暖橙杏白主調，低對比溫柔色調",
    neg:"卡通、AI感、廉價感、冷色調、文字水印"},

  qing_palace:{n:"清宮旗裝 · 故宮天壇",mk:"gongting",
    char:"端莊華貴，眼神溫柔含情，如清宮劇中皇后或寵妃，氣場雍容大氣",
    s:"故宮紅牆黃瓦或天壇圓丘，琉璃瓦屋頂，硃紅色宮牆，漢白玉欄杆，金色陽光",
    o:"清朝旗裝，紅色或黃金色織錦緞面，龍鳳牡丹刺繡，高立領，馬蹄袖，頭戴鈿子或旗頭，金步搖流蘇",
    prop:"手持精緻宮扇，或手持半遮面",
    fx:"花瓣飄落，金色陽光粒子",
    l:"故宮暖金午後陽光，側光打亮刺繡細節，soft warm imperial light",
    q:"故宮旅拍大片，清宮劇質感，超寫實，8K HDR",
    cam:"全身或半身，故宮建築作為壯麗背景，低角度仰拍突出宮殿氣勢",
    col:"紅金黃暖色調，飽和度適中，皇家富貴感",
    neg:"現代感、卡通、AI感、廉價感、文字水印"},

  silk_road_night:{n:"西域珠鍊夜景 · 異域神秘",mk:"fox",
    char:"神秘異域氣質，眼神深邃迷離，如絲路上的舞姬或西域公主，眼尾微揚含情",
    s:"夜晚戶外或神秘宮殿庭院，背景串串燈裝飾形成大散景 bokeh，燈光星點，藤蔓植物若隱若現",
    o:"藍紫色絲綢露肩上衣，波斯/西域風格刺繡，金色腰帶配飾，輕紗裙裾",
    prop:"頭戴金色珠鍊面紗（hanging bead veil）垂落遮半臉，手持古銅燈籠",
    fx:"燈串大散景 bokeh（fairy lights bokeh background），珠鍊面紗的精緻珠光反射，燭光暖橙打臉",
    l:"燭光暖橙主光聚焦臉部，藍紫色夜景環境光，燈串散景，dramatic portrait lighting",
    q:"異域風情人像大片，85mm f1.2，極淺景深，8K",
    cam:"半身近景特寫，重心在臉部與珠鍊面紗，燈串散景佔滿背景",
    col:"藍紫金暖對比，夜色冷藍配燭火暖橙",
    neg:"卡通、動漫、AI感、廉價感、文字水印"},

  // 東方美學
  bamboo_hanfu:{n:"竹林清雅漢服",mk:"natural_clean",
    char:"清雅脫俗，眼神溫柔靈動，如古典詩畫中的仕女，氣質清靜出塵",
    s:"翠綠竹林，竹葉隨風搖曳，竹節細節清晰，綠意盎然，自然散射柔光",
    o:"白色或淡綠色輕薄漢服，交領廣袖，墨綠色腰帶，玉石耳飾，烏黑髮髻",
    prop:"手輕撥竹葉，竹葉半遮臉部，自然姿態",
    fx:"竹葉輕搖虛化前景，自然光斑 bokeh，清新綠意光暈",
    l:"竹林柔和漫射光，綠色環境反光，soft natural forest light",
    q:"中國古典詩意人像，竹林清雅意境，85mm f1.4，8K",
    cam:"半身構圖，竹葉作為前景框架，清雅自然感",
    col:"白綠清雅，低飽和自然色調",
    neg:"卡通、AI感、廉價感、過度妝感、文字水印"},

  jiangnan_bridge:{n:"江南水鄉薄暮",mk:"moon",
    char:"溫婉清冷，眼神含情遠望，如江南詩詞中的女子，朦朧詩意",
    s:"江南古鎮，石拱橋橫跨水面，橋拱倒影清晰，薄暮藍調天空，水面平靜如鏡，岸邊青石板路",
    o:"素色漢服，淡藍或米白色，簡潔飄逸，古典盤髮，珠釵點綴",
    prop:"手持白色油紙傘",
    fx:"水面倒影（bridge reflection on water），薄暮藍調光，輕霧漫起",
    l:"薄暮藍灰自然光，水面反射環境光，blue hour dusk lighting",
    q:"江南水鄉詩意人像，膠片色調，8K，意境深遠",
    cam:"全身構圖，石拱橋為背景，水面倒影豐富畫面",
    col:"藍灰水墨調，低飽和薄暮色",
    neg:"卡通、AI感、廉價感、過度鮮豔、文字水印"},

  studio_white:{n:"純白棚拍商拍",mk:"editorial",
    char:"精緻時尚，眼神直視鏡頭自信從容，如時尚雜誌或商業廣告模特",
    s:"純白無縫背景紙，專業攝影棚，簡潔乾淨背景，高腳椅或簡約道具",
    o:"簡約修身時裝，黑色/白色/純色系，突顯身形線條，高跟鞋",
    prop:"坐於高腳椅，腿部交叉優雅坐姿",
    fx:"專業棚燈光斑，軟體柔光箱效果，簡潔陰影",
    l:"專業三點布光（key light + fill light + rim light），softbox diffused studio lighting",
    q:"高端商業棚拍，Vogue/Harper's Bazaar封面質感，8K，極致清晰",
    cam:"全身或半身，簡潔構圖突顯人物",
    col:"純白高調，乾淨通透，高對比度",
    neg:"雜亂背景、卡通、AI感、廉價感、文字水印"},

  dark_beast:{n:"暗黑獸娘奇幻",mk:"beast_dark",
    char:"野性魅惑，眼神危險凜冽，如黑暗奇幻遊戲中的獸娘角色，充滿危險美感",
    s:"地獄熔岩場景，岩石裂縫冒出橙紅岩漿光，黑暗洞穴，火焰環繞，末日氛圍",
    o:"暗紅黑色金屬鎧甲，精緻金屬雕花，皮革細節，半露肩設計，黑色網紋絲襪",
    prop:"頭上長出狐狸耳或狼耳（fox/wolf ears），配合整體野性造型",
    fx:"熔岩橙紅環境光（lava glow），火焰粒子，黑暗煙霧，眼睛發出紅色光芒",
    l:"熔岩底部橙紅主光，黑暗環境深陰影，dramatic underlighting from lava",
    q:"暗黑奇幻遊戲角色海報，UE5 cinematic，8K HDR，超寫實細節",
    cam:"半身特寫，低角度強調威壓感，左側繁體中文標題排版",
    col:"暗紅黑金，高對比暗黑色調",
    neg:"可愛感、卡通、廉價感、AI感"},

  elf_mage:{n:"精靈魔法師",mk:"elf_magic",
    char:"神秘冷豔，眼神深邃，尖耳精靈特徵，如奇幻RPG遊戲女魔法師，智慧與危險並存",
    s:"古老魔法森林，巨型盤根錯節樹根，發光魔法植物，苔蘚石塊，黑暗神秘氛圍",
    o:"深藍黑色魔法袍，銀色雕花紋樣，蓬鬆裙擺，精靈尖耳，頭戴水晶髮飾",
    prop:"手掌向前發出魔法能量，白色煙霧狀魔力漩渦從掌心湧出",
    fx:"魔法能量煙霧（magic energy smoke from palm），發光魔法植物，森林地面光粒子",
    l:"魔法手掌冷白光為主光，森林暗部環境光，magical bioluminescent lighting",
    q:"奇幻RPG遊戲角色海報，右側繁體中文標題，UE5 cinematic，8K HDR",
    cam:"全身3/4身，右側留白給標題文字",
    col:"深藍黑銀，冷色系神秘奇幻",
    neg:"卡通感、廉價感、AI感、過度可愛"},

  magic_girl_poster:{n:"魔法少女角色海報",mk:"magic_girl",
    char:"甜美靈動，如日本動漫魔法少女真人化，粉紅/粉紫色系，少女感十足",
    s:"魔法奇幻場景，紫紅色能量漩渦背景，魔法城堡剪影，星光粒子漫天",
    o:"魔法少女裙裝，蓬鬆蕾絲短裙，白色手套，頭戴蝴蝶結，長波浪捲髮",
    prop:"手持魔法寶杖，或手伸向前施放魔法",
    fx:"粉紫色魔法能量環繞（pink-purple magic energy swirling），星光粒子，魔法陣光紋",
    l:"魔法能量粉紫主光，城堡暖橙輔光，magical girl sparkle lighting",
    q:"動漫角色真人化海報，多畫面拼接（臉部特寫+全身），頂部英文標題+日文副標，8K HDR",
    cam:"主圖全身+左上角臉部特寫拼接，頂部留白給標題",
    col:"粉紅粉紫金，夢幻少女色調",
    neg:"過度黑暗、卡通平面感、AI感、廉價感"},

  underwater_spider:{n:"水下彼岸花靈境",mk:"spirit_water",
    char:"靈異冷豔，眼神空洞深邃，銀白長髮飄逸，如水中女鬼或靈界使者，詭異卻迷人",
    s:"水下黑暗場景，水面光從上方折射下來，紅色彼岸花（spider lily）漂浮環繞，錦鯉游過，水泡緩緩上升",
    o:"紅色彼岸花花瓣纏繞全身形成衣物，銀白長直髮在水中飄散，裸背肩部設計",
    prop:"一手持彼岸花，一手向鏡頭方向伸出",
    fx:"紅色彼岸花在水中漂浮纏繞（spider lilies floating underwater），水中光折射（caustics），錦鯉游過，水泡粒子",
    l:"水面自然光從上方穿透（surface light caustics），紅色花朵環境反光，dramatic underwater lighting",
    q:"水下靈異藝術攝影，日式「黃泉」美學，超寫實，8K HDR",
    cam:"全身水下構圖，人物置中，花朵和魚作為環境元素",
    col:"深黑水藍 vs 鮮紅彼岸花，高對比靈異色調",
    neg:"卡通、AI感、廉價感、水面以上場景、文字水印"},

    // ── 魅魔 ──
  succubus_queen:{n:"魅魔女王 · 超寫實性感",mk:"fox",
    char:"adult succubus queen aura, alluring dark fantasy beauty, alluring eye contact, dangerous charm, elegant temptation, confident mature femininity, glamorous but tasteful",
    s:"dark infernal royal chamber, black marble throne room, velvet shadows, obsidian columns, black roses, faint lava glow beneath the floor, eternal night atmosphere",
    o:"luxurious black lace corset gown with elegant elegant neckline, fitted waist, delicate lace sleeves, tall slit with tasteful styling, black demon horns, black feathered demon wings, refined ruby and gold jewelry",
    prop:"one finger gently touching the lips or one hand resting on the chest jewelry, relaxed confident posture, direct gaze toward the camera",
    fx:"large black demon wings fully spread behind her, purple-red alluring demonic aura, black rose petals floating, faint magical halo, subtle smoky tendrils around the body",
    l:"low warm lava rim light from below, purple-red ambient glow, soft face key light, alluring dark fantasy lighting, cinematic shadow contrast",
    q:"ultra realistic adult succubus queen portrait, dark glamorous fantasy editorial, premium detailed skin texture, 8K HDR, cinematic realism",
    cam:"vertical half-body or three-quarter portrait, wings clearly visible behind the body, face sharp and readable, elegant powerful composition",
    col:"black, deep burgundy, dark purple, ruby red, warm lava gold, high contrast alluring palette",
    neg:"childlike look, overly exposed styling, vulgar pose, cheap costume, cute innocent mood, cartoon, anime, low quality, plastic skin, hidden face, watermark"},

  // ── 異世界系列 ──
  isekai_demon_lord:{n:"異世界魔王 · 絕對霸權",mk:"demon_lord",
    char:"絕對霸氣，眼神俯視一切，如異世界最強魔王，壓倒性氣場令人臣服",
    s:"魔族黑暗王城，懸浮黑色岩石，紫黑魔法空間，宇宙星空背景，魔王領域",
    o:"黑色魔王禮袍，金銀紋樣，魔族王冠，飄逸黑色披風，魔紋刺青",
    prop:"手握魔力水晶球，或魔法陣在手掌展開",
    fx:"黑紫魔力暴走（dark purple magic overflowing），魔法陣光紋，岩石懸浮，星空背景",
    l:"魔力紫黑光源，宇宙深空背景光，overwhelming dark aura lighting",
    q:"異世界魔王電影海報，壓倒性氣場，UE5，8K HDR",
    cam:"低角度仰拍，強調俯視感，魔王王座構圖",
    col:"黑紫金，絕對霸者色調",
    neg:"弱小感、卡通感、AI感、廉價感、文字水印"},

  hero_adventurer:{n:"勇者 · 光之傳承者",mk:"warrior",
    char:"堅定勇敢，眼神燃燒著正義之火，如RPG遊戲勇者，充滿希望與力量",
    s:"魔王城廢墟戰場，破碎大地，遠處暗雲，光明從裂縫中透出，決戰前夕",
    o:"勇者鎧甲，白銀或金色聖甲，英雄披風，勇者徽章",
    prop:"雙手持聖劍，劍身發出聖光",
    fx:"聖劍光芒爆發（holy sword radiance burst），勇者光環（hero aura），破碎地面，光明衝破黑暗",
    l:"聖劍神聖光源，黑暗戰場對比，hero vs darkness dramatic lighting",
    q:"勇者RPG遊戲封面，史詩決戰，8K HDR",
    cam:"低角度仰拍，聖劍指天，英雄姿態",
    col:"金白聖光 vs 黑暗背景，正義光明色調",
    neg:"卡通感、AI感、廉價感、軟弱感、文字水印"},

  evil_dragon:{n:"惡龍化身 · 毀滅降臨",mk:"dragon_epic",
    char:"毀滅之美，眼神透著古老的惡意，如龍族化身人形的惡龍，強大而危險",
    s:"熔岩廢墟，被龍焰燒毀的城市，滾滾黑煙，熔岩流淌，末日氛圍",
    o:"龍族化身服裝，龍鱗紋身，龍角從頭顱生出，龍翼背後展開，龍尾",
    prop:"手持大型龍牙武器，或龍焰從掌心噴出",
    fx:"龍焰噴射（dragon fire breath），龍鱗皮膚紋樣發光，熔岩環境，黑煙翻滾",
    l:"熔岩橙紅底部光，龍焰爆炸光，destruction cinematic lighting",
    q:"惡龍化身電影海報，末日毀滅美學，UE5，8K HDR",
    cam:"全身大景，廢墟背景突顯毀滅氣場",
    col:"熔岩橙黑，毀滅末日色調",
    neg:"卡通感、AI感、廉價感、可愛感、文字水印"},

  // ── 十二大天使系列 ──
  archangel_michael:{n:"大天使米迦勒 · 戰鬥天使",mk:"angel_holy",
    char:"神聖威嚴，眼神燃燒著神聖之火，如天堂最強戰士，正義化身",
    s:"天堂戰場，金色雲海，聖光從天而降，天使軍團背景，神聖宏偉",
    o:"黃金戰鬥天使鎧甲，聖火紋樣，六翼展開（six white wings），金色頭環",
    prop:"手持燃燒聖火的神劍",
    fx:"六翼聖白羽翼全展開（six-winged holy angel wings），聖火燃燒，神聖光柱 god rays",
    l:"天堂聖光主光，黃金環境反光，divine holy battle lighting",
    q:"大天使戰鬥電影海報，神聖壯麗，UE5，8K HDR",
    cam:"全身低角度仰拍，六翼展開大景",
    col:"金白聖光，神聖威嚴色調",
    neg:"卡通感、AI感、廉價感、黑暗元素、文字水印"},

  archangel_gabriel:{n:"大天使加百列 · 啟示天使",mk:"angel_holy",
    char:"純淨神聖，眼神溫柔而深邃，如天堂使者，傳遞神聖啟示",
    s:"天堂聖殿，白色雲海，神聖光芒，百合花盛開，純淨神聖空間",
    o:"白銀天使禮袍，白色羽翼（four white wings），百合花冠，純白長裙",
    prop:"手持黃金號角，或捲軸神諭",
    fx:"白色羽翼四翼展開（four white angelic wings），號角金色光芒，百合花瓣飄落，神諭光環",
    l:"純白聖光漫射，號角金光，pure heavenly white lighting",
    q:"天使啟示人像，純淨神聖，8K HDR",
    cam:"全身，聖殿為背景，四翼展開構圖",
    col:"純白銀色，聖潔純淨色調",
    neg:"卡通感、AI感、廉價感、黑暗元素、文字水印"},

  archangel_lucifer:{n:"墮天使路西法 · 光明之殤",mk:"fallen_angel",
    char:"最美的悲劇，眼神含著千年孤獨，如曾是最美天使的墮落者，悲壯而迷人",
    s:"天堂與地獄邊界，破碎的天堂石柱，一側聖光一側黑暗，流星隕落",
    o:"破碎黑色羽翼（broken dark fallen wings），白色天使袍被撕裂，黑金混色，殘破美感",
    prop:"無，雙臂張開墮落姿態",
    fx:"破碎黑翼飄散（shattered dark feathers falling），光暗交界能量，流星軌跡，天堂碎片",
    l:"光暗各半對比，天堂側金白，地獄側黑紫，fallen angel dramatic lighting",
    q:"墮天使史詩電影海報，最美的墮落，UE5，8K HDR",
    cam:"全身，墮落姿態，光暗各半背景",
    col:"金白 vs 黑紫，光明與黑暗對立色調",
    neg:"卡通感、AI感、廉價感、文字水印"},

  // ── 星座聖鬥士系列 ──
  zodiac_aries:{n:"白羊座黃金聖鬥士",mk:"warrior",
    char:"熾熱勇猛，眼神燃燒著小宇宙之火，如黃金聖鬥士中最強者，爆炸性氣場",
    s:"宇宙星空背景，聖域遺跡，白羊座星座光紋，宇宙能量爆炸",
    o:"白羊座黃金聖衣，精緻黃金鎧甲設計，羊角頭盔，發光金色",
    prop:"雙拳出擊，宇宙能量從拳頭爆發",
    fx:"小宇宙爆炸（cosmo energy explosion），白羊座星座符文，黃金光芒，宇宙火焰",
    l:"宇宙深空背景，黃金聖衣發光，cosmic golden energy lighting",
    q:"聖鬥士星矢風格，黃金聖衣超寫實，8K HDR",
    cam:"全身動態，宇宙為背景",
    col:"黃金宇宙藍，聖鬥士能量色調",
    neg:"卡通感、AI感、廉價感、文字水印"},

  zodiac_scorpio:{n:"天蠍座黃金聖鬥士",mk:"beast_dark",
    char:"致命魅力，眼神如毒蠍，如黃金聖鬥士中最危險的存在，美麗與致命並存",
    s:"宇宙深空，天蠍座星座光紋，暗紅能量漩渦，神秘危險宇宙空間",
    o:"天蠍座黃金聖衣，蠍尾設計融入鎧甲，暗金紅色系，精緻危險感",
    prop:"蠍尾聖衣攻擊姿態",
    fx:"天蠍毒針能量攻擊（Scarlet Needle energy），星座符文，暗紅宇宙能量",
    l:"暗紅宇宙能量光，天蠍座星座輝光，dangerous cosmo lighting",
    q:"聖鬥士星矢風格，天蠍黃金聖衣，8K HDR",
    cam:"全身，天蠍攻擊姿態，宇宙背景",
    col:"黃金暗紅宇宙，致命魅力色調",
    neg:"卡通感、AI感、廉價感、文字水印"},

  zodiac_virgo:{n:"處女座黃金聖鬥士",mk:"angel_holy",
    char:"超然神聖，眼神如菩薩般悲憫，如黃金聖鬥士中最強防禦者，神佛之氣",
    s:"宇宙聖域，處女座星座光紋，金色蓮花，神聖佛光，宇宙最強防禦場",
    o:"處女座黃金聖衣，佛教蓮花設計融入，黃金長袍，神聖頭飾",
    prop:"雙手合十，或結佛印手勢",
    fx:"神聖佛光爆發（divine holy light burst），蓮花漂浮，處女座星座符文，金色宇宙",
    l:"金白神聖佛光，蓮花反射，divine protective lighting",
    q:"聖鬥士星矢風格，處女黃金聖衣，8K HDR",
    cam:"全身，神聖防禦姿態",
    col:"黃金神聖白，最強防禦色調",
    neg:"卡通感、AI感、廉價感、文字水印"},

  // ── 城市上班族 ──
  office_lady:{n:"城市OL · 職場精英",mk:"editorial",
    char:"精明幹練，眼神自信果決，如都市職場精英女性，知性魅力十足",
    s:"現代辦公大樓，落地玻璃窗，城市景觀，會議室，或大樓外都市背景",
    o:"都市職業裝，合身西裝外套，俐落褲裝或包裙，高跟鞋，精緻配件",
    prop:"手持文件夾或筆記本，或咖啡杯",
    fx:"城市玻璃反射，辦公室光影，都市幾何線條",
    l:"辦公室自然窗光，都市背景光，professional office lighting",
    q:"職場精英商業人像，知性魅力，8K",
    cam:"半身或全身，都市辦公場景",
    col:"都市灰藍黑白，知性職業色調",
    neg:"休閒感、卡通感、AI感、廉價感、文字水印"},

  cafe_work:{n:"咖啡館辦公 · 都市自由人",mk:"natural_clean",
    char:"從容自在，眼神帶著生活溫度，如都市自由工作者，享受生活的美好",
    s:"落地窗咖啡館，午後陽光斜射，木質桌面，植物點綴，城市街道背景",
    o:"休閒知性穿搭，舒適棉麻上衣，輕鬆日常感，舒適配飾",
    prop:"筆記型電腦，咖啡拿鐵，手帳本",
    fx:"落地窗陽光光斑（window sunlight dappled），咖啡蒸氣，溫暖散景",
    l:"落地窗自然午後光，溫暖咖啡館氛圍，warm cafe afternoon light",
    q:"都市生活風格人像，溫暖治癒，8K",
    cam:"半身，咖啡館窗邊構圖，城市為遠景",
    col:"暖橙木質棕，治癒生活色調",
    neg:"緊繃感、卡通感、AI感、廉價感、文字水印"},

  // ── COS獸娘系列 ──
  nekomimi:{n:"貓耳娘 · 療癒系獸娘",mk:"cosplay_beast",
    char:"天真可愛，眼神純淨靈動，如日系萌系動漫貓耳少女，超級治癒",
    s:"現代日式房間，或公園草坪，溫暖柔和背景，日系治癒氛圍",
    o:"日系可愛服裝，貓耳髮飾，貓尾巴，鈴鐺項圈，萌系配件",
    prop:"手持貓咪玩具，或貓爪手套",
    fx:"貓耳毛茸茸質感（fluffy cat ears texture），貓尾搖擺，愛心粒子，治癒光暈",
    l:"柔和暖光，治癒系散景，soft kawaii lighting",
    q:"日系獸娘COS寫真，療癒萌系，8K",
    cam:"半身特寫，強調貓耳和表情",
    col:"粉白暖色，日系萌系色調",
    neg:"黑暗感、過度性感、卡通感、AI感、廉價感、文字水印"},

  foxgirl:{n:"狐狸娘 · 靈狐幻化",mk:"cosplay_beast",
    char:"半妖半人，眼神靈動含情，如東方靈狐幻化人形，妖媚卻純真",
    s:"古典日式庭院，或秋日楓林，暖橙色系，靈狐出沒的神秘氛圍",
    o:"和風改良服裝，狐狸耳朵，多條狐狸尾巴（fox tails），金橙色系",
    prop:"無，或手持紙符",
    fx:"狐狸火焰（kitsune fox fire），多條狐尾飄動，楓葉飄落，靈氣粒子",
    l:"秋日暖橙光，狐火藍綠輔光，japanese kitsune mystical lighting",
    q:"東方靈狐人像，和風奇幻，8K HDR",
    cam:"全身，楓林或庭院為背景",
    col:"金橙暖秋色，靈狐神秘色調",
    neg:"卡通感、AI感、廉價感、文字水印"},

  dragonmaid:{n:"龍娘女僕 · 強大溫柔",mk:"dragon_epic",
    char:"外表溫柔內心強大，眼神溫柔中帶著龍族的古老力量，反差萌",
    s:"現代豪宅或西式城堡，女僕工作的高貴場景，或戶外天空",
    o:"精緻黑白女僕裝，龍角從頭生出，龍尾，龍翼收折，女僕頭飾",
    prop:"手持掃把，或端著茶盤",
    fx:"龍鱗光紋在皮膚閃爍（dragon scale shimmer），龍尾搖動，龍角發光",
    l:"室內溫暖光，龍鱗反光，warm maid dragon lighting",
    q:"龍娘女僕COS寫真，強大溫柔反差萌，8K HDR",
    cam:"全身，女僕姿態，龍角龍尾為識別",
    col:"黑白紅，女僕龍族對比色調",
    neg:"卡通感、AI感、廉價感、文字水印"},

    // ── 大景史詩系列 ──
  great_wall_epic:{n:"萬里長城 · 史詩大景",mk:"warrior",
    char:"颯爽孤傲，站在歷史的脊背上，渺小卻無畏，如史詩電影中的孤獨守護者",
    s:"萬里長城沿山脊蜿蜒至天際，烽火台聳立，山巒層疊，夕陽或清晨薄霧，長城無限延伸的壯闊",
    o:"古裝漢服或現代輕便服裝，與長城背景呼應，衣袂隨風",
    prop:"無，或手持旗幟",
    fx:"衣袂隨山風飄動（clothing billowing in mountain wind），遠處烽煙，光影在長城上流動",
    l:"夕陽金色side light或清晨薄霧漫射光，long shadows on the wall，dramatic landscape lighting",
    q:"超廣角史詩大景，人物在長城構圖中偏小突顯壯闊，foreground-midground-background三層次，8K HDR",
    cam:"超廣角16mm或更廣，人物站於長城之上佔畫面約1/4，長城延伸至遠方消失點，S形構圖",
    col:"夕陽暖橙 vs 青山冷綠，史詩自然色調",
    neg:"人物過大遮擋背景、近景特寫、卡通、AI感、廉價感、文字水印"},

  huangshan_clouds:{n:"黃山雲海 · 仙境之巔",mk:"xianxia",
    char:"超然出塵，如踏雲而行的仙人，眼神望向無限遠方，氣質空靈飄逸",
    s:"黃山奇峰聳立，雲海翻騰如白色海洋，松樹從雲海中探出，仙氣瀰漫，天地間只剩峰頂",
    o:"白色或淡青色漢服仙袍，飄逸廣袖，與雲海融為一體",
    prop:"無，或手持長劍遙指遠方",
    fx:"雲海翻騰流動（rolling sea of clouds），仙氣粒子，山峰在雲海中若隱若現",
    l:"清晨金色陽光穿透雲海 god rays，雲海漫射柔光，ethereal mountain light",
    q:"超廣角山岳大景，人物站於峰頂渺小如螻蟻突顯壯闊，8K HDR，仙境意境",
    cam:"超廣角，人物在峰頂佔畫面1/5，雲海佔據大部分畫面，層次豐富",
    col:"白雲青峰，低飽和仙境色調",
    neg:"雲海模糊、人物過大、卡通、AI感、廉價感、文字水印"},

  cliff_edge:{n:"懸崖絕頂 · 天地之間",mk:"cinematic",
    char:"孤獨自由，站在世界的邊緣俯瞰一切，背影或側臉，充滿故事感",
    s:"萬丈絕壁邊緣，深不見底的峽谷，對岸另一座懸崖，天空雲朵，極致視覺張力",
    o:"現代簡約服裝或古裝，風衣或飄逸長裙，被山風吹動",
    prop:"無，站立眺望",
    fx:"山風吹動衣物和頭髮（hair and clothes blown by wind），雲朵在腳下飄過",
    l:"逆光剪影或側光，dramatic cliff lighting，天空光比強烈",
    q:"電影感懸崖大景，人物渺小突顯天地壯闊，8K HDR，shallow sky depth",
    cam:"廣角，人物在懸崖邊緣佔畫面1/4，深谷和天空各佔大量畫面",
    col:"天空冷藍 vs 峽谷暖橙，高對比自然色",
    neg:"人物過大、過於安全感、卡通、AI感、廉價感、文字水印"},

  rice_terrace:{n:"梯田日出 · 人間仙境",mk:"natural_clean",
    char:"恬靜自然，如東方田園詩中的人物，融入大自然的和諧之美",
    s:"雲南或廣西龍脊梯田，層層梯田從山腳延伸至山頂，日出金光照射，晨霧繚繞，水面反光",
    o:"民族服裝或簡約古風服裝，色彩與梯田和諧",
    prop:"無，或背竹簍",
    fx:"晨霧在梯田間流動（morning mist flowing through rice terraces），水面反射金色日出",
    l:"日出暖金光，晨霧漫射，golden sunrise rice terrace light",
    q:"超廣角梯田大景，層層梯田幾何美感，人物融入其中，8K HDR",
    cam:"超廣角，梯田幾何線條填滿畫面，人物在中景融入場景",
    col:"金黃綠水，東方田園色調",
    neg:"卡通、AI感、廉價感、現代感、文字水印"},

  mirror_lake:{n:"天空之鏡 · 無限倒影",mk:"wedding",
    char:"孤獨夢幻，站在天地之間，上下對稱，如夢境中的孤獨旅者",
    s:"玻利維亞烏尤尼鹽湖或類似鹽湖，極薄水面形成完美鏡面，天空和人物完美倒映，天地不分",
    o:"白色或鮮豔色彩長裙，與天空色調形成對比或呼應",
    prop:"無，張開雙臂或自然站立",
    fx:"完美鏡面倒影（perfect mirror reflection），薄水波紋，天空雲彩倒映",
    l:"黃昏或日出，天空絢麗色彩，golden hour mirror lake",
    q:"超廣角天空之鏡，上下對稱構圖，人物渺小突顯無限感，8K HDR",
    cam:"超廣角正面平視，人物居中，天空和倒影各佔一半，完美對稱",
    col:"天空漸層色倒映，夢幻壯麗色調",
    neg:"水面不平整破壞倒影、人物過大、卡通、AI感、廉價感、文字水印"},

  aurora_wild:{n:"極光曠野 · 天空綠幕",mk:"snow_pure",
    char:"渺小而自由，仰望宇宙奇觀，如探索極地的旅人，充滿敬畏",
    s:"北歐冰島或挪威雪原，極光在天空中舞動如綠紫色簾幕，白雪曠野延伸至遠方，冰湖倒映極光",
    o:"厚重冬裝或民族感大衣，深色系突顯天空",
    prop:"無，仰頭望天或背影",
    fx:"極光流動舞動（aurora borealis dancing），冰湖倒映（aurora reflection on ice lake），星空背景",
    l:"極光綠紫自然光，雪地冷藍反射，aurora naturalistic lighting",
    q:"超廣角極光大景，人物剪影渺小突顯天空，8K HDR，極光攝影級別",
    cam:"超廣角14mm，極光佔滿天空2/3，人物為小小剪影在地平線",
    col:"極光綠紫配雪白，宇宙級壯麗色調",
    neg:"極光顏色失真、人物過大、卡通、AI感、廉價感、文字水印"},

  volcano_land:{n:"火山熔岩 · 末日大地",mk:"warrior",
    char:"末日中的孤獨戰士，眼神堅定，站在毀滅的大地上，如史詩電影主角",
    s:"活躍火山噴發，熔岩流淌大地如紅色河流，濃煙蔽天，遠處火山口烈焰，末日壯景",
    o:"黑色或深色戰鬥服裝，配合末日氛圍",
    prop:"無，或手持武器對抗末日",
    fx:"熔岩流淌大地（lava rivers flowing），火山噴發煙塵（volcanic ash cloud），火星四濺",
    l:"熔岩橙紅底部光，火山爆發側光，apocalyptic volcanic lighting",
    q:"超廣角末日大景，人物在熔岩大地上渺小壯麗，8K HDR",
    cam:"超廣角，熔岩流淌填滿前景，人物在中景，火山在遠景，三層次構圖",
    col:"熔岩橙紅黑，末日火焰色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  space_nebula:{n:"宇宙星雲 · 無垠深空",mk:"xianxia",
    char:"宇宙塵埃中的孤獨靈魂，渺小卻存在，如科幻電影中飄浮在宇宙中的存在",
    s:"壯麗星雲背景，紫橙藍色星雲色彩交織，無數星點，宇宙深邃無盡，可能有行星或宇宙飛石",
    o:"宇宙感服裝，或漢服仙袍在宇宙中飄浮，超現實融合",
    prop:"無，飄浮姿態",
    fx:"星雲色彩粒子環繞（nebula particles），宇宙塵埃，飄浮感（zero gravity floating）",
    l:"星雲自發光，多彩宇宙環境光，deep space dramatic lighting",
    q:"超廣角宇宙大景，人物極小突顯宇宙浩瀚，8K HDR，天文攝影級別",
    cam:"超廣角，星雲佔滿大部分畫面，人物在角落極小或居中極小",
    col:"星雲紫橙藍，宇宙壯麗色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  waterfall_paradise:{n:"瀑布仙境 · 飛流直下",mk:"xianxia",
    char:"飄逸仙氣，站在瀑布旁如謫仙下凡，水霧環繞，超凡脫俗",
    s:"巨型瀑布從高山直瀉而下，彩虹橫跨水霧，翠綠峽谷，水霧漫天，如人間仙境",
    o:"白色或淡藍仙裙，在水霧中飄逸，與瀑布水霧融合",
    prop:"無，或手輕觸瀑布水霧",
    fx:"瀑布水霧漫天（waterfall mist），彩虹光折射，水珠粒子環繞",
    l:"瀑布漫射柔光，彩虹折射光，lush waterfall paradise lighting",
    q:"廣角瀑布大景，壯麗自然奇觀，8K HDR",
    cam:"廣角，瀑布從畫面頂端落下，人物在瀑布前渺小突顯壯麗",
    col:"翠綠白水，清新仙境色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  desert_starry:{n:"沙漠星空 · 銀河之下",mk:"cinematic",
    char:"孤獨的夜行者，在無盡沙漠中仰望銀河，渺小而自由",
    s:"撒哈拉或戈壁沙漠，沙丘連綿，頭頂銀河燦爛橫跨夜空，繁星密布，地平線清晰",
    o:"沙漠風格服裝，深色系突顯星空，頭巾或披風",
    prop:"無，仰望星空或背影望天",
    fx:"銀河拱橋橫跨（Milky Way arch），星空長曝光效果（star trail possible），沙丘輪廓剪影",
    l:"銀河自然星光，沙地冷白反光，desert astrophotography lighting",
    q:"超廣角沙漠星空大景，人物剪影渺小，銀河震撼，8K HDR，天文攝影質感",
    cam:"超廣角14mm，銀河拱橋橫跨畫面，人物在沙丘上小小剪影",
    col:"深藍星空 vs 沙漠暖橙，夜晚星空色調",
    neg:"星空模糊、人物過大、卡通、AI感、廉價感、文字水印"},

  bamboo_sea:{n:"竹海大景 · 千畝翠浪",mk:"natural_clean",
    char:"灑脫自由，如竹林中的俠客或隱士，融入翠綠的海洋",
    s:"四川蜀南竹海，千畝竹林如翠綠海洋鋪展，竹林在風中搖曳如波浪，光影斑駁穿透竹葉",
    o:"古裝或輕便服裝，白色或翠綠色調與竹林呼應",
    prop:"無，或手持竹劍颯然站立",
    fx:"竹葉在風中搖曳如海浪（bamboo leaves swaying like waves），斑駁光影，竹林深處神秘感",
    l:"竹林漫射柔光，光斑穿透竹葉，bamboo forest dappled light",
    q:"廣角竹海大景，竹林延伸至天際，臥虎藏龍電影感，8K HDR",
    cam:"廣角，竹林填滿四周，人物在中間小道上，竹林透視延伸",
    col:"翠綠竹色，清新東方色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  autumn_forest_epic:{n:"秋楓大景 · 萬山紅遍",mk:"cinematic",
    char:"詩意自在，漫步在秋天的調色盤中，如詩詞中的文人雅士",
    s:"層林盡染的秋日山林，萬山紅葉黃葉橙葉交織，山谷中霧氣繚繞，秋日如大地調色盤",
    o:"古裝或現代服裝，深色或與楓葉形成對比",
    prop:"無，或手持楓葉",
    fx:"楓葉在秋風中飄落（maple leaves falling in autumn wind），霧氣在山谷流動",
    l:"秋日暖陽側光，楓葉透光效果（backlit maple leaves），warm autumn lighting",
    q:"廣角秋日大景，萬山紅遍，層次豐富，8K HDR",
    cam:"廣角，秋色填滿整個畫面，人物在其中小而融入",
    col:"暖橙紅黃，秋日史詩色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  sea_temple:{n:"海上神廟 · 天地之門",mk:"gongting",
    char:"神聖孤絕，如神廟的守護者，眼神深邃望向大海，氣質超凡",
    s:"大海中央孤立神廟（類日本嚴島神社），波濤洶湧環繞，日落逆光，鳥居或神廟倒映海面",
    o:"古裝或巫女服裝，與神廟氛圍呼應，紅白色系",
    prop:"無，或雙手合十",
    fx:"海浪拍打神廟基石（waves crashing against temple），日落光暈，海面反光",
    l:"日落逆光剪影，海面金光反射，sunset sea temple dramatic lighting",
    q:"廣角海上神廟大景，神聖孤絕感，8K HDR",
    cam:"廣角，神廟在海中央，波濤前景，人物在神廟前渺小",
    col:"夕陽金紅 vs 海洋深藍，神聖壯麗色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  ruined_city:{n:"廢墟孤城 · 時光遺跡",mk:"cinematic",
    char:"孤獨探索者，眼神充滿故事，如末日後的倖存者或廢墟考古者",
    s:"古代文明廢墟，倒塌的神廟石柱，雜草從磚縫中生長，陽光穿透廢墟缺口，文明消逝的滄桑感",
    o:"探險服裝或古裝，與廢墟氛圍相配",
    prop:"無，或手持地圖探索",
    fx:"陽光穿透廢墟縫隙（god rays through ruins），塵埃粒子飄浮（dust motes），野草蔓延",
    l:"廢墟縫隙穿透光 god rays，廢墟陰影對比，abandoned ruins cinematic lighting",
    q:"廣角廢墟大景，人物在廢墟中渺小突顯滄桑，8K HDR",
    cam:"廣角，廢墟填滿畫面，人物在其中探索，強調建築尺度",
    col:"暖橙石材色，廢墟滄桑色調",
    neg:"卡通、AI感、廉價感、文字水印"},

    // ── 大景100組 ──
  china_guilin:{n:"桂林山水 · 甲天下",mk:"cinematic",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"桂林漓江，喀斯特奇峰倒影水中，竹筏漂浮江面，晨霧繚繞山腰，山峰如筆尖聳立",
    o:"現代輕便服裝或古風，清新自然",
    prop:"竹筏或無",
    fx:"山峰倒影（karst peaks reflection），晨霧繚繞山腰，水面輕霧",
    l:"晨光柔和漫射，山峰輪廓清晰，misty guilin morning light",
    q:"超廣角漓江大景，奇峰倒影三層次，8K HDR",
    cam:"超廣角，江面倒影佔畫面下半，人物在竹筏上極小",
    col:"翠綠水墨，甲天下山水色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  china_zhangjiajie:{n:"張家界 · 阿凡達懸浮山",mk:"xianxia",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"張家界國家公園，砂岩柱峰聳入雲霄，雲霧在峰間漫流，如阿凡達外星世界",
    o:"仙俠漢服或現代探險服",
    prop:"無",
    fx:"雲霧在峰間流動（mist flowing between peaks），懸浮山感（floating mountain illusion）",
    l:"雲霧漫射柔光，峰頂金光，zhangjiajie epic landscape lighting",
    q:"超廣角懸浮山大景，人物在棧道上渺小，8K HDR",
    cam:"超廣角，石柱峰群填滿畫面，人物在其中極小",
    col:"冷翠青山，雲霧神秘色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  china_jiuzhaigou:{n:"九寨溝 · 五彩仙池",mk:"natural_clean",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"九寨溝彩色湖泊，翡翠藍綠到湛藍分層水色，白樺樹倒映，秋日金黃映水",
    o:"民族服裝或清新古風",
    prop:"無",
    fx:"五彩水色（colorful layered lake），白樺樹倒影，秋葉飄落水面",
    l:"九寨溝晴日陽光，水色自然光折射，jiuzhaigou crystal lake lighting",
    q:"廣角彩色湖大景，水色佔畫面大半，8K HDR",
    cam:"廣角，五彩湖水從前景延伸至遠山，人物在岸邊融入",
    col:"翡翠藍金，九寨溝天然色彩",
    neg:"卡通、AI感、廉價感、文字水印"},

  china_tulou:{n:"福建土樓 · 圓形史詩",mk:"gongting",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"福建圓形土樓群，鳥瞰圓形建築從上空看如圓圈，或正面看宏偉圓形土樓牆體",
    o:"閩南傳統服裝或古裝",
    prop:"無",
    fx:"夕陽光從土樓頂灑入（golden light pouring into tulou），土樓圓形幾何感",
    l:"夕陽暖金從高處打入，圓形幾何構圖，dramatic tulou sunset light",
    q:"廣角土樓鳥瞰或正面大景，圓形建築震撼幾何，8K HDR",
    cam:"廣角或超廣角鳥瞰，圓形土樓幾何填滿畫面",
    col:"暖橙土黃，閩南建築色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  china_loess:{n:"黃土高原 · 溝壑大地",mk:"warrior",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"黃土高原，溝壑縱橫大地如月球表面，窯洞點綴山腰，夕陽將大地染成深橙",
    o:"北方農民服裝或古裝",
    prop:"無",
    fx:"夕陽長影（long shadow sunset on loess plateau），塵土飛揚，黃土大地紋理",
    l:"夕陽超低角側光，長陰影，dramatic loess plateau sunset",
    q:"超廣角黃土大景，溝壑紋理填滿畫面，人物渺小，8K HDR",
    cam:"超廣角，黃土地平線延伸，人物在山脊上小小剪影",
    col:"深橙黃土，黃土高原壯闊色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  china_tianmen:{n:"天門山 · 天空玻璃棧道",mk:"editorial",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"湖南天門山，玻璃棧道懸掛絕壁，俯瞰萬丈深淵，雲霧環繞山腰",
    o:"現代時尚服裝，高跟鞋踩在玻璃上",
    prop:"無",
    fx:"玻璃棧道透明感（transparent glass walkway），雲霧環繞（clouds surrounding cliff）",
    l:"陰天漫射柔光或晴天側光，懸崖棧道dramatic lighting",
    q:"廣角玻璃棧道大景，深淵和雲霧震撼，8K HDR",
    cam:"廣角，玻璃棧道從一側延伸，人物在棧道上，深淵在腳下",
    col:"冷灰翠綠，天門山雲霧色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  china_snow_mountain:{n:"西藏雪山 · 聖潔之巔",mk:"snow_pure",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"西藏珠穆朗瑪或念青唐古拉雪山，藍天白雲雪峰，藏族佛塔在雪山前",
    o:"藏族民族服裝或白色服裝",
    prop:"無",
    fx:"雪山冰川閃爍（glacier glittering），雪粒在風中飄（snow particles in wind）",
    l:"高原強烈藍天白光，雪山反射，tibetan plateau holy light",
    q:"超廣角雪山大景，佛塔在前景，雪山在背景，8K HDR",
    cam:"超廣角，佛塔為前景，人物在中景，雪山在遠景三層次",
    col:"純白藍天，聖潔西藏色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  china_karst_sunset:{n:"喀斯特夕照 · 萬峰林",mk:"outdoor_glow",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"貴州萬峰林，喀斯特峰叢在夕陽下如劍林，農田梯田鑲嵌其間，炊煙裊裊",
    o:"苗族服裝或輕便古裝",
    prop:"無",
    fx:"夕陽在峰叢間光芒射出（sun rays between karst peaks），炊煙上升",
    l:"夕陽斜射，峰叢剪影，golden karst valley sunset",
    q:"超廣角喀斯特峰叢大景，農田和峰叢層次，8K HDR",
    cam:"超廣角，峰叢填滿背景，農田梯田前景，人物中景",
    col:"夕陽暖橙翠綠，貴州喀斯特色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  china_danxia:{n:"丹霞地貌 · 彩虹大地",mk:"warrior",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"甘肅張掖丹霞，彩色條紋山體如大地彩虹，紅橙黃綠藍交替，超現實大地畫卷",
    o:"艷色服裝與丹霞呼應",
    prop:"無",
    fx:"彩色丹霞紋路（colorful danxia rock stripes），強烈色彩衝擊",
    l:"夕陽或正午強光突顯色彩，dramatic danxia lighting",
    q:"超廣角丹霞彩色大景，色彩條紋填滿畫面，8K HDR",
    cam:"超廣角俯拍或正面廣角，丹霞色彩條紋為主角",
    col:"彩虹大地色，超現實自然色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  china_river_bend:{n:"黃河大彎 · 九曲回轉",mk:"cinematic",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"四川黃河九曲第一灣，黃河在草原上S形蜿蜒，如金色絲帶繞過碧綠草原",
    o:"藏族或蒙族服裝",
    prop:"無",
    fx:"黃河S形蜿蜒反光（yellow river serpentine reflection），草原綠草",
    l:"金色黃昏，黃河水面金光，golden river bend lighting",
    q:"超廣角俯瞰大景，S形黃河蜿蜒，8K HDR",
    cam:"超廣角俯瞰，S形黃河填滿畫面，人物在草原上渺小",
    col:"金黃翠綠，黃河草原色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  china_ancient_town_night:{n:"鳳凰古城 · 夜色燈影",mk:"hk_film",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"鳳凰古城夜景，苗族吊腳樓倒映沱江，紅燈籠高掛，夜色與燈光交織",
    o:"苗族服裝或復古中式",
    prop:"無",
    fx:"燈籠倒映江面（lantern reflection on river），水波搖曳燈影",
    l:"夜晚燈籠暖橙光，江面反射，romantic ancient town night light",
    q:"廣角鳳凰古城夜景大景，吊腳樓和倒影三層次，8K HDR",
    cam:"廣角，江面倒影下半，吊腳樓中景，夜空上方",
    col:"暖橙燈紅，鳳凰夜色色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  china_prairie:{n:"呼倫貝爾草原 · 天蒼野茫",mk:"outdoor_glow",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"內蒙古呼倫貝爾草原，碧綠草原延伸至地平線，藍天白雲倒影在河灣，策馬奔騰",
    o:"蒙族服裝",
    prop:"騎馬奔騰姿態",
    fx:"草原風吹草低（grassland wind），馬蹄揚塵，雲影在草原上流動",
    l:"正午強光，雲影在草原移動，vast mongolian steppe lighting",
    q:"超廣角草原大景，天空佔半，草原佔半，人物騎馬渺小，8K HDR",
    cam:"超廣角，地平線居中，天空和草原各半，騎馬人物渺小",
    col:"天藍草綠，大草原壯闊色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  world_machu_picchu:{n:"馬丘比丘 · 天空之城",mk:"editorial",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"秘魯馬丘比丘，印加古城遺跡在雲霧山頂，梯田石牆與山峰融合，世界奇蹟",
    o:"探險服裝或現代輕便",
    prop:"無",
    fx:"雲霧在石城間漫流（mist through ancient ruins），印加石牆紋理",
    l:"早晨雲霧散去，金光照耀，machu picchu golden morning light",
    q:"超廣角天空之城大景，古城與山峰融合，8K HDR",
    cam:"超廣角，馬丘比丘遺跡填滿中景，雲霧前景，山峰背景",
    col:"暖金石灰，秘魯古城色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  world_santorini:{n:"聖托里尼 · 藍白愛琴海",mk:"wedding",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"希臘聖托里尼，白色圓頂教堂俯瞰深藍愛琴海，懸崖上藍白小鎮，夕陽金光",
    o:"白色或藍色夏日服裝",
    prop:"無",
    fx:"藍色圓頂反光（blue dome reflection），懸崖下深藍海面",
    l:"日落暖金，藍色圓頂對比，santorini golden hour lighting",
    q:"廣角聖托里尼懸崖大景，藍白建築和深藍海面，8K HDR",
    cam:"廣角，白色建築中景，愛琴海背景，日落天空上方",
    col:"藍白金，希臘愛琴海色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  world_grand_canyon:{n:"科羅拉多大峽谷 · 億年地層",mk:"cinematic",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"美國科羅拉多大峽谷，億年地層紅橙色帶，深邃峽谷縱橫，科羅拉多河在谷底",
    o:"探險服裝或風衣",
    prop:"無",
    fx:"峽谷地層光影變化（canyon layer light），遠處科羅拉多河細如銀絲",
    l:"夕陽或正午，峽谷地層color gradient，grand canyon dramatic light",
    q:"超廣角大峽谷大景，人物在崖邊渺小，8K HDR",
    cam:"超廣角，峽谷縱深延伸，人物在崖邊極小",
    col:"橙紅地層，億年峽谷色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  world_iceland_geyser:{n:"冰島間歇泉 · 地熱奇觀",mk:"snow_pure",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"冰島蓋錫爾間歇泉，滾燙水柱衝天而起，地熱蒸汽瀰漫，冰原背景",
    o:"冰島風格厚重外套",
    prop:"無",
    fx:"水柱衝天（geyser eruption water column），地熱蒸汽（geothermal steam cloud）",
    l:"冰島漫射冷白光，水柱逆光，geyser eruption backlight",
    q:"廣角間歇泉大景，水柱衝天，8K HDR",
    cam:"廣角，水柱從下方衝上，人物在旁邊極小突顯水柱壯觀",
    col:"冰藍白，冰島地熱色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  world_sahara_dunes:{n:"撒哈拉巨沙丘 · 金色海洋",mk:"outdoor_glow",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"摩洛哥撒哈拉沙漠，巨型沙丘如金色海浪，沙脊線條優美，日落光影在沙面滑動",
    o:"沙漠波希米亞或傳統摩洛哥服裝",
    prop:"無",
    fx:"沙丘金色光影（golden sand dune light pattern），沙脊線條美感",
    l:"夕陽側光，沙丘光影極美，sahara golden dune light",
    q:"超廣角撒哈拉沙丘大景，沙丘曲線優美填滿畫面，8K HDR",
    cam:"超廣角，沙丘曲線填滿畫面，人物在沙脊上渺小",
    col:"純金沙橙，撒哈拉黃金色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  world_amazon:{n:"亞馬遜雨林 · 地球之肺",mk:"forest",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"亞馬遜熱帶雨林，參天巨樹如綠色教堂，晨光穿透葉隙如綠色聖光，生命力爆棚",
    o:"探險服裝或精靈風輕裝",
    prop:"無",
    fx:"晨光穿透樹冠（sunbeams through rainforest canopy），水蒸氣上升，蝴蝶蟲鳥",
    l:"晨光強烈透射，綠色散射光，amazon jungle morning light",
    q:"超廣角雨林大景，巨樹延伸天際，8K HDR",
    cam:"超廣角，巨樹從畫面頂端到底，人物在根部渺小",
    col:"翠綠金光，雨林神聖色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  world_norway_fjord:{n:"挪威峽灣 · 冰川奇蹟",mk:"snow_pure",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"挪威西部峽灣，冰川切割出的深峽，深藍海水鏡面，兩側絕壁千仞，瀑布從絕壁直落",
    o:"北歐簡約服裝",
    prop:"無",
    fx:"峽灣倒影（fjord mirror reflection），絕壁瀑布（waterfall from cliff），薄霧",
    l:"陰天漫射柔光，峽灣倒影完美，norway fjord dramatic light",
    q:"超廣角挪威峽灣大景，深V形峽谷，8K HDR",
    cam:"超廣角，V形峽谷延伸至遠方，人物在船頭或岸邊渺小",
    col:"深藍冰藍，挪威峽灣冷峻色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  world_victoria_falls:{n:"維多利亞瀑布 · 雷霆之聲",mk:"warrior",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"非洲維多利亞瀑布，世界最寬瀑布，雷霆萬鈞，水霧遮天，彩虹橫跨",
    o:"探險服裝",
    prop:"無",
    fx:"維多利亞瀑布水霧（victoria falls mist），彩虹橫跨（rainbow arc），雷鳴震撼",
    l:"瀑布漫射柔光，彩虹光折射，victoria falls thundering light",
    q:"廣角瀑布全景大景，人物在觀景台極小，8K HDR",
    cam:"廣角，瀑布填滿背景，水霧前景，彩虹裝飾",
    col:"彩虹水白，非洲瀑布色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  world_ayers_rock:{n:"烏魯魯 · 紅色聖岩",mk:"outdoor_glow",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"澳大利亞烏魯魯，孤立巨石在平坦曠野中，夕陽將岩石染成深紅，原住民聖地",
    o:"澳洲探險服裝",
    prop:"無",
    fx:"夕陽下岩石顏色由橙到深紅漸變（uluru color change at sunset），曠野廣闊",
    l:"夕陽強烈側光，岩石深紅，uluru dramatic sunset",
    q:"超廣角烏魯魯大景，孤岩在曠野中，8K HDR",
    cam:"超廣角，孤岩在畫面中突出，曠野向四面延伸",
    col:"深紅橙，澳洲聖岩色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  world_bora_bora:{n:"波拉波拉 · 夢幻水上屋",mk:"outdoor_glow",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"法屬波里尼西亞波拉波拉，翡翠綠清澈環礁海水，水上屋點綴其上，遠處火山島",
    o:"熱帶度假服裝",
    prop:"無",
    fx:"翡翠環礁水色（turquoise lagoon），水上屋倒影，遠處火山輪廓",
    l:"熱帶強烈陽光，清澈海水反光，bora bora tropical paradise light",
    q:"廣角波拉波拉大景，環礁海水從高處俯瞰，8K HDR",
    cam:"廣角或鳥瞰，清澈環礁海水填滿畫面，水上屋散點分布",
    col:"翡翠藍綠，夢幻珊瑚礁色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  xianxia_nine_heavens:{n:"九重天 · 天帝宮闕",mk:"xianxia",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"九重天宮，層層宮殿向上疊建直達雲霄，金碧輝煌，祥雲環繞，天帝所在之處",
    o:"天帝級別華麗仙袍",
    prop:"無",
    fx:"祥雲環繞層層宮殿（auspicious clouds surrounding heavenly palace），金光普照，天兵天將",
    l:"神聖金白天光，god rays從上方傾瀉，heavenly palace divine light",
    q:"超廣角九重天全景，宮殿向上無限疊加，8K HDR",
    cam:"超廣角，宮殿從下到上延伸至天際，人物在最底層極小",
    col:"金白祥雲，天宮神聖色調",
    neg:"卡通、動漫、AI感、廉價感、文字水印"},

  xianxia_undersea_palace:{n:"水晶龍宮 · 深海仙境",mk:"spirit_water",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"東海龍宮，水晶宮殿在深海中閃爍，珊瑚和海草作為宮殿裝飾，巨型魚群環繞",
    o:"龍族仙裝或水下飄逸服裝",
    prop:"無",
    fx:"水晶宮殿折射光（crystal palace light refraction），魚群環繞（fish school surrounding），水泡上升",
    l:"深海藍綠光，水晶折射彩色光，underwater dragon palace light",
    q:"廣角水晶龍宮大景，宮殿壯麗，8K HDR",
    cam:"廣角，水晶宮殿從下方仰拍，人物在宮殿前渺小",
    col:"深藍水晶綠，龍宮神秘色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  xianxia_demon_realm:{n:"魔界天穹 · 暗夜王國",mk:"gothic",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"魔界，倒掛的山峰，黑暗能量漩渦天空，血紅色雙月，魔族城堡懸浮空中",
    o:"魔族禮袍",
    prop:"無",
    fx:"魔界暗能量漩渦（demonic energy vortex sky），倒掛山峰（inverted floating mountains），血月",
    l:"血月和魔氣混合光，dramatic demon realm lighting",
    q:"超廣角魔界全景，倒掛山峰和魔族城堡，8K HDR",
    cam:"超廣角，倒掛山峰填滿畫面，人物在中間渺小",
    col:"血紅黑紫，魔界暗黑色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  xianxia_heaven_war:{n:"天界大戰 · 諸神黃昏",mk:"warrior",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"天界大戰，天兵天將激戰，宮殿在戰火中崩塌，神聖與魔氣交鋒，諸神黃昏",
    o:"戰天女神戰袍",
    prop:"神聖武器",
    fx:"天界崩塌大景（heavenly palace collapsing），天兵交戰（celestial army battle），神聖能量爆炸",
    l:"神聖金光 vs 魔氣黑紫，戰場dramatic lighting",
    q:"超廣角天界大戰全景，崩塌宮殿和交戰場面，8K HDR",
    cam:"超廣角，戰場填滿畫面，人物在史詩戰場中",
    col:"金白 vs 黑紫，諸神黃昏色調",
    neg:"卡通、動漫、AI感、廉價感、文字水印"},

  xianxia_immortal_island:{n:"蓬萊仙島 · 海市蜃樓",mk:"xianxia",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"傳說中蓬萊仙島，浮在海面上的仙島，雲霧環繞，仙鶴翱翔，樓閣若隱若現",
    o:"蓬萊仙人服裝",
    prop:"無",
    fx:"海市蜃樓效果（mirage floating island），仙鶴翱翔（cranes soaring），海面雲霧",
    l:"海面反射光，仙島金光，ethereal floating island light",
    q:"廣角蓬萊仙島大景，仙島懸浮海面，8K HDR",
    cam:"廣角，仙島在遠方海面，前景海浪，仙鶴飛翔",
    col:"白金仙氣，蓬萊仙境色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  xianxia_chaos_open:{n:"混沌初開 · 創世大爆炸",mk:"xianxia",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"宇宙洪荒創世，混沌能量爆炸分裂，陰陽魚形旋轉，五行能量閃爍，天地初分",
    o:"創世神明服裝",
    prop:"五行法器",
    fx:"混沌能量爆炸（primordial chaos explosion），陰陽旋轉（yin yang rotation），五行色彩",
    l:"創世大爆炸多色彩能量光，big bang creation light",
    q:"超廣角創世大爆炸全景，能量從中心爆炸擴散，8K HDR",
    cam:"超廣角，能量爆炸為中心，人物在中央",
    col:"五行彩色，創世洪荒色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  xianxia_sword_sea:{n:"劍冢 · 萬劍歸宗",mk:"xianxia",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"仙俠劍冢，萬把古劍插立在廣袤大地，劍氣沖天，劍光如星辰，如劍的墳場",
    o:"仙俠劍客服裝",
    prop:"長劍",
    fx:"萬劍沖天劍氣（ten thousand swords soaring），劍光如星（sword light like stars），劍冢廢墟",
    l:"劍光多向輻射，劍冢dramatic cinematic light",
    q:"超廣角劍冢大景，萬劍從地平線延伸，8K HDR",
    cam:"超廣角，萬劍填滿畫面，人物在其中渺小",
    col:"銀白劍光，劍冢壯烈色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  xianxia_flower_rain:{n:"花雨仙境 · 萬花齊放",mk:"xianxia",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"仙界花雨，萬種仙花同時盛開漫天飄落，仙氣瀰漫，彩色花瓣如雨，仙境最美時刻",
    o:"飄逸仙裙",
    prop:"無",
    fx:"萬種仙花花瓣如雨（flower petals raining like waterfall），仙氣光粒子，彩色花海",
    l:"仙界柔和多彩光，花瓣折射彩虹，floral paradise lighting",
    q:"廣角花雨仙境，花瓣從天而降，8K HDR",
    cam:"廣角，花瓣從上方傾瀉，人物在花海中",
    col:"彩色花瓣，仙界最美色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  xianxia_sky_city:{n:"天空之城 · 雲端仙都",mk:"editorial",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"雲端上方的仙都，多座仙城懸浮在雲海之上，橋廊相連，瀑布從雲端倒瀉而下",
    o:"高級仙都服裝",
    prop:"無",
    fx:"懸浮仙城（floating sky cities），雲瀑倒瀉（waterfall from cloud），天橋相連",
    l:"神聖天光從上方打下，雲端dramatic lighting",
    q:"超廣角天空之城全景，多座懸浮城市，8K HDR",
    cam:"超廣角，多座仙城從低到高，橋廊相連",
    col:"白金雲色，天空之城壯麗色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  xianxia_blood_moon:{n:"血月降臨 · 末世仙劫",mk:"gothic",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"仙俠末世，巨大血月降臨天空，仙界崩塌，紅色靈氣暴走，末世之美",
    o:"末世仙人戰袍",
    prop:"無",
    fx:"巨大血月（oversized blood moon），仙界崩塌靈氣（xianxia realm collapsing），末世紅色靈氣",
    l:"血月紅光，末世dramatic red lighting",
    q:"超廣角末世大景，血月佔天空大半，8K HDR",
    cam:"超廣角，血月為背景，崩塌建築中景，人物渺小",
    col:"血紅末世，仙劫色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  season_spring_meadow:{n:"春日花海 · 萬花盛放",mk:"natural_clean",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"春日花海，萬畝野花同時盛放，紫色薰衣草或橙色鬱金香或粉白油菜花，花海至天際",
    o:"春日清新服裝",
    prop:"花束",
    fx:"春風搖曳花海（spring flowers swaying），蜜蜂蝴蝶飛舞，花香光暈",
    l:"春日明亮陽光，花海色彩鮮豔，spring meadow bright light",
    q:"超廣角花海大景，花海延伸至地平線，8K HDR",
    cam:"超廣角，花海從前景延伸至地平線，人物在其中",
    col:"花海彩色，春日自然色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  season_summer_storm:{n:"夏日雷暴 · 閃電大地",mk:"warrior",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"大草原夏日雷暴，黑雲壓城，閃電從雲層直劈大地，雨前靜謐後狂野",
    o:"深色防水服裝",
    prop:"無",
    fx:"多道閃電同時劈下（multiple lightning bolts），烏雲滾動（storm clouds rolling），草原濕潤",
    l:"雷暴戲劇性光，閃電白光，summer thunderstorm dramatic light",
    q:"超廣角雷暴大景，閃電和烏雲填滿天空，8K HDR",
    cam:"超廣角，烏雲和閃電填滿上方，草原下方，人物渺小剪影",
    col:"深灰閃電白，雷暴戲劇色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  season_autumn_ginkgo:{n:"銀杏金雨 · 秋風落葉",mk:"natural_clean",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"銀杏大道，兩排銀杏樹金黃葉片在秋風中落下如金色雨，透視大道延伸至遠方",
    o:"秋日暖色服裝",
    prop:"無",
    fx:"銀杏葉金色雨（ginkgo leaves golden rain），大道透視（ginkgo avenue perspective），暖秋光",
    l:"秋日暖陽側光，銀杏葉透光效果，golden ginkgo autumn light",
    q:"廣角銀杏大道透視大景，落葉如金色雨，8K HDR",
    cam:"廣角，銀杏大道透視向遠方消失，人物在其中",
    col:"金黃暖橙，銀杏秋日色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  season_winter_forest:{n:"冬日雪森 · 靜謐白世界",mk:"snow_pure",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"北歐或加拿大冬日森林，松樹枝頭積雪，整個森林被白雪覆蓋，靜謐純淨",
    o:"白色或深色冬裝",
    prop:"無",
    fx:"雪從松枝滑落（snow falling from pine branches），樹影在雪地投影，晨霧",
    l:"冬日柔和漫射光，雪地反光，winter forest quiet light",
    q:"廣角冬日雪森大景，白雪覆蓋一切，8K HDR",
    cam:"廣角，白雪松樹從兩側夾道，人物在中間深色透視",
    col:"純白冷藍，冬日靜謐色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  season_monsoon_valley:{n:"雨季山谷 · 流雲瀑布",mk:"jiangnan_ink",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"雨季熱帶山谷，暴雨後雲霧從谷底升起，臨時瀑布從山壁奔流而下，植被翠綠",
    o:"輕便古風或探險服裝",
    prop:"無",
    fx:"雲霧從谷底升起（mist rising from valley），多道瀑布（multiple waterfalls），雨後翠綠",
    l:"雨後柔和漫射光，水氣反光，monsoon valley misty light",
    q:"廣角雨季山谷大景，雲霧和瀑布並存，8K HDR",
    cam:"廣角，山谷從兩側夾住，雲霧填滿谷底",
    col:"翠綠水白，雨季山谷色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  season_fog_sea:{n:"雲海日出 · 浮島奇觀",mk:"xianxia",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"山頂雲海日出，山峰從雲海中探出如浮島，金色陽光從地平線衝破雲海，萬丈光芒",
    o:"白色仙裝或登山服裝",
    prop:"無",
    fx:"雲海翻騰如大海（cloud sea rolling like ocean），山峰浮島（mountain peaks as islands），金光",
    l:"日出金色光從地平線衝破，雲海之上dramatic lighting",
    q:"超廣角雲海日出大景，山峰浮島，8K HDR",
    cam:"超廣角，雲海佔畫面大半，山峰從雲海探出",
    col:"金橙雲白，雲海日出色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  season_tidal_flat:{n:"灘塗夕照 · 大地調色盤",mk:"outdoor_glow",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"沿海灘塗，退潮後灘塗留下水窪倒映天空，夕陽將整個大地染成橙紅色，如大地調色盤",
    o:"輕便休閒服裝",
    prop:"無",
    fx:"灘塗水窪倒映天空（tidal flat sky reflection），夕陽光在水面跳躍",
    l:"夕陽超低側光，水窪倒映天空，tidal flat golden hour",
    q:"超廣角灘塗大景，水窪倒映夕陽，8K HDR",
    cam:"超廣角，灘塗水窪從前景延伸，人物剪影在遠處",
    col:"橙紅金，灘塗夕照色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  season_spring_blossom_mountain:{n:"春山花開 · 十里花海",mk:"natural_clean",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"春日山野，從山腳到山頂滿開野花或桃花，整個山坡被粉白橙黃色花朵覆蓋，如春天大地畫卷",
    o:"春日服裝",
    prop:"無",
    fx:"漫山花海（hillside covered with blossoms），蜜蜂蝴蝶，花香光暈",
    l:"春日柔和暖陽，花海色彩，spring mountain blossom light",
    q:"廣角春山花海大景，山坡花開延伸，8K HDR",
    cam:"廣角，花海從山腳蔓延至山頂，人物在其中",
    col:"粉白春色，春山花海色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  ocean_tsunami_art:{n:"海嘯藝術 · 巨浪之美",mk:"warrior",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"藝術化海嘯，完美卷起的巨型海浪，如葛飾北齋神奈川衝浪裡的現實版，水牆高聳",
    o:"颯爽服裝",
    prop:"無",
    fx:"完美卷曲巨浪（perfect curling giant wave），浪內水晶透明感（crystal clear wave interior）",
    l:"逆光打透巨浪，海浪內部如玻璃，dramatic wave backlight",
    q:"超廣角巨浪大景，海浪高聳填滿畫面，8K HDR",
    cam:"超廣角，巨浪從側面拍，人物在浪前渺小",
    col:"海藍透明水色，巨浪藝術色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  ocean_coral_kingdom:{n:"珊瑚王國 · 海底彩虹",mk:"mermaid_deep",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"熱帶珊瑚礁海底，五彩珊瑚群覆蓋海底，熱帶魚群穿梭，清澈透藍海水",
    o:"人魚裝或輕薄水下服裝",
    prop:"無",
    fx:"五彩珊瑚群（colorful coral reef），熱帶魚群穿梭（tropical fish schooling），光柱穿透",
    l:"熱帶海水光透射，珊瑚反彩色光，coral reef paradise lighting",
    q:"廣角珊瑚礁全景，色彩豐富，8K HDR",
    cam:"廣角，珊瑚礁從下方延伸至遠處，人物在其中渺小",
    col:"五彩珊瑚色，熱帶海底色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  ocean_bioluminescent:{n:"螢光海灣 · 藍色精靈海",mk:"spirit_water",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"馬爾地夫或印度洋螢光海灣，夜晚海浪帶動發光浮游生物，藍色螢光隨波而動，如藍色精靈海",
    o:"白色或深色對比服裝",
    prop:"無",
    fx:"螢光海浪發光（bioluminescent waves glowing blue），浮游生物藍光粒子，夜晚海面",
    l:"夜晚自然螢光光源，深藍夜空，bioluminescent beach night",
    q:"廣角螢光海灘大景，藍色發光海浪，8K HDR",
    cam:"廣角，螢光海浪從左到右延伸，人物在其中",
    col:"深藍螢光藍，神秘夜海色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  ocean_frozen_waterfall:{n:"冰瀑奇觀 · 冰凍時間",mk:"snow_pure",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"挪威或加拿大，瀑布在極寒中完全冰凍，形成巨型冰瀑雕塑，藍白冰柱從高處落下",
    o:"冬季服裝",
    prop:"無",
    fx:"冰瀑冰柱（frozen waterfall ice columns），冰面折射光（ice surface refraction），冰霧",
    l:"冬日冷白漫射光，冰面藍色反光，frozen waterfall cold light",
    q:"廣角冰瀑大景，冰柱從頂到底，8K HDR",
    cam:"廣角，冰瀑從頂端到底部，人物在旁極小突顯冰柱高度",
    col:"冰藍白，冰凍奇觀色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  ocean_mangrove:{n:"紅樹林迷宮 · 水上森林",mk:"jiangnan_ink",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"東南亞紅樹林，樹根交錯在平靜水面上，清澈水中倒映樹根，鳥類棲息其間",
    o:"輕便自然服裝",
    prop:"小船",
    fx:"紅樹根倒影（mangrove roots reflection），水面如鏡（mirror water surface），晨霧",
    l:"清晨柔光，水面倒影完美，mangrove forest morning light",
    q:"廣角紅樹林大景，水面倒影和樹根，8K HDR",
    cam:"廣角，樹根填滿前景，水面延伸至遠處",
    col:"翠綠水鏡，紅樹林自然色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  ocean_whale_watching:{n:"鯨魚破水 · 巨獸詩篇",mk:"outdoor_glow",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"阿拉斯加或冰島，座頭鯨破水躍出，巨大身體在空中弧線，海面水花四濺",
    o:"探險服裝",
    prop:"無",
    fx:"座頭鯨躍出水面（humpback whale breaching），水花四濺（water spray explosion），海面",
    l:"晴天強光，水花在陽光下晶瑩，whale breaching golden light",
    q:"超廣角鯨魚躍出大景，鯨魚和大海，8K HDR",
    cam:"廣角，鯨魚佔畫面大半，人物在船上極小突顯鯨魚壯觀",
    col:"海藍水白，座頭鯨史詩色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  ocean_underground_lake:{n:"地下暗河 · 地心奇境",mk:"spirit_water",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"地下溶洞暗河，鐘乳石倒掛，暗河清澈可見河底，地下湖面如黑色鏡面，洞頂發光岩石",
    o:"探險服裝",
    prop:"頭燈",
    fx:"鐘乳石倒影（stalactite reflection），地下湖如黑色鏡面（underground black mirror lake），洞頂光",
    l:"地下弱光，地下湖反射，cave underground mysterious light",
    q:"廣角地下溶洞大景，鐘乳石和地下湖，8K HDR",
    cam:"廣角，鐘乳石從上方延伸，地下湖反射，人物在其中渺小",
    col:"黑色水藍，地下秘境色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  ocean_monsoon_coast:{n:"季風海岸 · 巨浪驚濤",mk:"warrior",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"冬季季風，巨浪猛烈拍擊海岸礁石，白色浪花衝天，驚濤駭浪之美",
    o:"深色防水服裝",
    prop:"無",
    fx:"巨浪拍擊礁石（giant waves crashing against rocks），浪花衝天（spray exploding upward）",
    l:"陰天戲劇光，巨浪逆光，monsoon coast dramatic lighting",
    q:"廣角季風海岸大景，巨浪和礁石，8K HDR",
    cam:"廣角，礁石和巨浪互相衝擊，人物在安全距離渺小",
    col:"灰藍白浪，季風海岸戲劇色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  city_hong_kong_night:{n:"香港夜景 · 東方之珠",mk:"hk_film",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"香港維多利亞港，兩岸摩天大樓萬家燈火，維港夜景，東方之珠璀璨，山頂俯瞰全景",
    o:"時尚都市服裝",
    prop:"無",
    fx:"維港萬家燈火（victoria harbour city lights），摩天大樓燈光反射水面",
    l:"夜晚城市多彩燈光，香港dramatic night lighting",
    q:"超廣角香港夜景全景，維港兩岸燈火，8K HDR",
    cam:"超廣角，維港從左到右延伸，兩岸建築對稱",
    col:"金色城市光，東方之珠夜色",
    neg:"卡通、AI感、廉價感、文字水印"},

  city_dubai_future:{n:"杜拜未來都市 · 摩天奇觀",mk:"editorial",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"杜拜未來城市，哈利法塔聳入雲霄，周圍未來感建築群，沙漠黃昏對比，奢華未來都市",
    o:"高端未來感時裝",
    prop:"無",
    fx:"哈利法塔穿入雲層（burj khalifa piercing clouds），沙漠城市對比（desert meets futuristic city）",
    l:"沙漠夕陽，金色光打在建築群，dubai golden desert city light",
    q:"超廣角杜拜城市大景，哈利法塔為主體，8K HDR",
    cam:"超廣角，哈利法塔居中聳立，城市群環繞",
    col:"金色沙漠現代，杜拜未來色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  city_tokyo_crossroads:{n:"東京十字路口 · 人潮洶湧",mk:"y2k",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"東京澀谷十字路口，行人潮從四面八方湧入，霓虹招牌林立，都市能量滿溢",
    o:"日系時尚街頭服裝",
    prop:"無",
    fx:"行人潮流動（crowd flow from all directions），長曝光人潮模糊（long exposure crowd blur），霓虹",
    l:"夜晚霓虹多彩燈光，人潮動態，tokyo shibuya night lighting",
    q:"廣角澀谷路口大景，行人潮為主體，8K HDR",
    cam:"廣角俯瞰或平視，人潮從四方匯聚，人物在其中",
    col:"霓虹彩色，東京都市活力色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  city_paris_eiffel_night:{n:"巴黎埃菲爾塔 · 光芒萬丈",mk:"editorial",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"巴黎夜晚，埃菲爾鐵塔每小時整點閃爍發光，塞納河倒影，城市浪漫燈光",
    o:"法式優雅服裝",
    prop:"無",
    fx:"埃菲爾塔閃爍光效（eiffel tower sparkling light show），塞納河倒影（seine river reflection）",
    l:"夜晚城市燈光，埃菲爾塔光秀，paris romantic night light",
    q:"廣角巴黎夜景大景，埃菲爾塔為主體，8K HDR",
    cam:"廣角，埃菲爾塔居中，塞納河前景倒影，城市背景",
    col:"金色浪漫，巴黎夜色色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  city_new_york_aerial:{n:"紐約空中鳥瞰 · 都市叢林",mk:"cinematic",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"紐約曼哈頓，高空鳥瞰密集摩天大樓如石林，中央公園綠洲在其中，日落光影",
    o:"現代都市服裝",
    prop:"無",
    fx:"曼哈頓鳥瞰（manhattan aerial view），中央公園綠洲（central park oasis），黃昏光影",
    l:"日落斜射，長陰影在建築間，new york golden hour aerial",
    q:"超廣角紐約鳥瞰大景，建築密集，8K HDR",
    cam:"超廣角鳥瞰，建築群填滿畫面，中央公園為綠色亮點",
    col:"都市灰金，紐約黃昏色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  city_ancient_rome:{n:"古羅馬競技場 · 永恆之城",mk:"editorial",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"羅馬競技場，宏偉的歷史建築，2000年歷史的石牆，遊客如螻蟻，日落金光",
    o:"羅馬風格服裝或現代服裝",
    prop:"無",
    fx:"競技場宏偉石拱（colosseum stone arches），日落金光打入（golden sunset through arches），歷史感",
    l:"日落側光穿透石拱，warm roman sunset light",
    q:"廣角競技場大景，宏偉建築，8K HDR",
    cam:"廣角，競技場填滿畫面，人物在底部渺小突顯建築規模",
    col:"暖橙石灰，羅馬歷史色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  city_forbidden_city:{n:"故宮金秋 · 皇城大景",mk:"qing_palace",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"北京故宮金秋，紅色宮牆金黃銀杏，午門城樓宏偉，廣場延伸深遠，皇城氣象",
    o:"清宮旗裝或明制漢服",
    prop:"無",
    fx:"銀杏金葉在風中飄落（ginkgo leaves falling），故宮紅牆金頂（red walls golden roofs），廣場透視",
    l:"秋日暖金陽光，銀杏反光，forbidden city autumn golden light",
    q:"超廣角故宮廣場大景，午門城樓為主體，8K HDR",
    cam:"超廣角，廣場從前景延伸至午門，透視深遠，人物渺小",
    col:"紅牆金瓦，故宮秋日色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  city_cyber_future:{n:"未來都市 · 霓虹叢林",mk:"cyberpunk",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"賽博龐克未來城市，密集霓虹廣告牌填滿天空，飛行車在高架橋間穿梭，雨後積水反光",
    o:"賽博龐克服裝",
    prop:"無",
    fx:"霓虹廣告牌叢林（neon billboard jungle），飛行車（flying cars），雨後反光",
    l:"霓虹多色光污染，雨後反射，cyberpunk future city light",
    q:"超廣角未來城市大景，霓虹填滿天空，8K HDR",
    cam:"超廣角，建築密集霓虹從下到上，人物在街道渺小",
    col:"霓虹彩色，賽博龐克色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  battle_medieval:{n:"中世紀大決戰 · 騎士衝鋒",mk:"warrior",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"中世紀歐洲大戰場，騎士軍團在平原上衝鋒，旌旗飄揚，戰馬揚塵，史詩電影感",
    o:"中世紀騎士鎧甲",
    prop:"長劍或長矛",
    fx:"騎士軍團衝鋒揚塵（cavalry charge dust），旌旗飄揚（battle standards flying），戰場硝煙",
    l:"陰天戰場側光，塵煙漫射，medieval battle dramatic lighting",
    q:"超廣角中世紀戰場大景，軍隊對決，8K HDR",
    cam:"超廣角，兩側軍隊對決，主角在前景渺小",
    col:"戰場灰棕，中世紀史詩色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  battle_hannibal:{n:"古代大會戰 · 萬軍齊發",mk:"warrior",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"古代戰場，數萬名士兵在廣袤平原對決，旌旗如林，塵煙蔽天，史詩級別的大決戰",
    o:"古代將軍鎧甲",
    prop:"寶劍",
    fx:"萬軍整列前進（massive army advancing），塵土蔽天（dust cloud from armies），戰鼓",
    l:"烏雲壓城，閃電遠方，epic ancient battle dramatic lighting",
    q:"超廣角古代大戰場全景，萬軍如蟻，8K HDR",
    cam:"超廣角，廣袤平原上萬軍對決，主角在前景",
    col:"戰場土黃煙灰，古代大戰色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  battle_xian_fortress:{n:"古城攻防戰 · 城牆硝煙",mk:"warrior",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"古代城池攻防戰，城牆上守軍奮力抵抗，城牆下攻城軍隊蜂擁，攻城器械，硝煙瀰漫",
    o:"古裝將軍戰袍",
    prop:"長劍",
    fx:"攻城車進攻（siege engine advancing），城牆上箭雨（arrow volley），硝煙瀰漫",
    l:"戰場烽火，煙塵漫射，ancient fortress siege battle light",
    q:"廣角古城攻防大景，城牆為主體，8K HDR",
    cam:"廣角，城牆縱深延伸，攻守雙方在畫面中",
    col:"烽火煙灰，攻城戰史詩色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  battle_naval:{n:"古代海戰 · 火船衝陣",mk:"warrior",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"古代海戰，戰艦在海面上炮火交鋒，火船衝入敵陣，海面火光衝天，赤壁之戰感",
    o:"古代水師將軍服裝",
    prop:"寶劍",
    fx:"火船衝入（fire ships charging），海面火光（sea fire），戰艦炮火交鋒（cannon fire exchange）",
    l:"海上火光，硝煙漫天，ancient naval battle fire lighting",
    q:"超廣角海戰大景，戰艦在海面上，8K HDR",
    cam:"超廣角，海面上戰艦對決，火光衝天",
    col:"火紅海黑，古代海戰色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  battle_xian_gate:{n:"函谷關 · 天下第一關",mk:"warrior",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"函谷關，天下第一關，關口城牆如天塹，山河在兩側環繞，千軍萬馬在關前",
    o:"古裝武將服裝",
    prop:"長劍",
    fx:"千軍萬馬在關前（vast army before the gate），關門緊閉（massive fortress gate），山河形勝",
    l:"夕陽照射關牆，壯烈金光，ancient fortress golden hour light",
    q:"超廣角函谷關大景，關門宏偉，8K HDR",
    cam:"超廣角，關門在中央聳立，兩側山河延伸，人物渺小",
    col:"暖金灰牆，古代雄關色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  battle_mongol_steppe:{n:"蒙古鐵騎 · 草原征服",mk:"warrior",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"蒙古草原，蒙古鐵騎如黑色潮水從地平線湧現，馬蹄聲震天，草原颳起狂風",
    o:"蒙古女勇士服裝",
    prop:"弓箭",
    fx:"蒙古騎兵潮水般衝來（mongolian cavalry wave），馬蹄揚塵（dust from hooves），草原風",
    l:"草原平射光，塵土在光中漫射，mongolian steppe cavalry light",
    q:"超廣角蒙古騎兵大景，騎兵從地平線到前景，8K HDR",
    cam:"超廣角，騎兵從遠處衝到近處透視感",
    col:"草原黃塵，蒙古鐵騎色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  battle_three_kingdoms:{n:"三國赤壁 · 萬艦齊發",mk:"warrior",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"赤壁之戰，長江上萬艘戰艦對決，曹操水師連環艦在一側，周瑜火攻，火光映江",
    o:"古裝謀士或將軍",
    prop:"羽扇",
    fx:"萬艦齊發（ten thousand warships），火攻蔓延（fire spreading），長江倒影",
    l:"火光夜戰，江面火光，three kingdoms battle of red cliffs light",
    q:"超廣角赤壁大戰全景，江面戰艦，8K HDR",
    cam:"超廣角，長江上戰艦密布，火光衝天",
    col:"烈火紅橙，赤壁大戰色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  battle_modern_ruins:{n:"現代戰場廢墟 · 末日都市",mk:"cinematic",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"現代都市戰爭廢墟，摩天大樓在戰火中崩塌，廢墟瓦礫遍地，烽火連天，孤獨生存者",
    o:"現代戰術服裝",
    prop:"無",
    fx:"建築崩塌廢墟（building collapse ruins），烽火連天（fires burning throughout city），煙塵",
    l:"戰場火光，廢墟煙塵漫射，war ruins dramatic lighting",
    q:"廣角現代廢墟戰場大景，人物在廢墟中，8K HDR",
    cam:"廣角，廢墟建築從兩側夾道，遠處火光，人物在中間",
    col:"廢墟灰火紅，末日都市色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  astro_eclipse:{n:"日食奇觀 · 天文奇蹟",mk:"xianxia",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"日全食，月球完全遮住太陽，日冕如白色火焰環繞，天空突然黑暗如夜，星辰現身",
    o:"白色或黑色服裝突顯天象",
    prop:"無",
    fx:"日全食日冕（solar eclipse corona），天空半暗如黑夜，星辰現身",
    l:"日食超低光，日冕白色環形光，total solar eclipse dramatic light",
    q:"超廣角日食大景，日冕為中心，8K HDR",
    cam:"超廣角，日食在天空中央，人物在下方渺小仰望",
    col:"黑暗白冕，日食天文色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  astro_meteor_shower:{n:"流星雨 · 天空煙火",mk:"xianxia",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"英仙座流星雨，數十道流星同時劃過天空，星光璀璨，地面人物仰望，如天空煙火",
    o:"深色服裝仰望天空",
    prop:"無",
    fx:"流星雨多道流星（meteor shower multiple streaks），星光璀璨（stellar sky），人物仰望",
    l:"流星雨自然光，深空星光，meteor shower astrophotography light",
    q:"超廣角流星雨大景，流星從天空各處劃過，8K HDR",
    cam:"超廣角，流星雨填滿天空，人物在下方仰頭渺小",
    col:"深藍流星白，流星雨天文色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  astro_galaxy_core:{n:"銀河系中心 · 星際漩渦",mk:"xianxia",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"銀河系核心，星際雲氣，無數星點形成漩渦，宇宙深邃無盡，人物如宇宙塵埃",
    o:"宇宙感服裝或仙袍",
    prop:"無",
    fx:"銀河漩渦（galactic core spiral），星際雲氣（nebula gas clouds），無數星點",
    l:"銀河自然光，宇宙深空lighting",
    q:"超廣角銀河核心大景，漩渦為中心，8K HDR",
    cam:"超廣角，銀河漩渦填滿畫面，人物極小",
    col:"宇宙紫橙藍，銀河壯麗色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  astro_supernova:{n:"超新星爆炸 · 星辰之死",mk:"xianxia",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"超新星爆炸，恆星在宇宙中爆炸成絢麗光環，衝擊波向外擴散，宇宙最壯麗的瞬間",
    o:"宇宙感服裝",
    prop:"無",
    fx:"超新星爆炸衝擊波（supernova explosion shockwave），光環向外擴散（light ring expanding）",
    l:"超新星爆炸自發光，宇宙深空，supernova explosion light",
    q:"超廣角超新星大景，爆炸為中心，8K HDR",
    cam:"超廣角，爆炸光環從中央向外擴散，人物極小",
    col:"爆炸彩色光，超新星壯麗色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  astro_black_hole:{n:"黑洞邊緣 · 時空扭曲",mk:"xianxia",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"黑洞邊緣，吸積盤橙紅色旋轉，光線被引力扭曲，時空彎曲，如星際穿越場景",
    o:"未來感服裝",
    prop:"無",
    fx:"黑洞吸積盤旋轉（accretion disk rotating），光線彎曲扭曲（light bending gravity），時空扭曲",
    l:"吸積盤橙紅光，黑洞周圍光扭曲，interstellar black hole light",
    q:"超廣角黑洞大景，吸積盤為中心，8K HDR",
    cam:"超廣角，黑洞在中央，吸積盤光環，人物極小",
    col:"橙紅深黑，黑洞宇宙色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  astro_saturn_rings:{n:"土星環大景 · 宇宙光環",mk:"editorial",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"土星近距離，巨大土星光環從一側延伸至另一側，氣態行星表面風暴，宇宙奇景",
    o:"宇宙感白色服裝",
    prop:"無",
    fx:"土星光環延伸（saturn rings extending），氣態行星風暴（gas planet storm），宇宙深空",
    l:"土星自然光，光環反光，saturn cinematic space light",
    q:"超廣角土星大景，光環延伸，8K HDR",
    cam:"超廣角，土星在背景，光環橫貫畫面，人物極小",
    col:"土黃宇宙藍，土星奇景色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  astro_comet:{n:"彗星來訪 · 壯麗天際",mk:"cinematic",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"千年一遇彗星，彗星長尾橫跨夜空，光芒比月亮還亮，照亮整個夜空",
    o:"深色服裝仰望",
    prop:"無",
    fx:"彗星長尾橫跨天空（comet tail across sky），彗星照亮地面（comet illuminating ground），星空背景",
    l:"彗星自然光，照亮地面，once in a millennium comet light",
    q:"超廣角彗星大景，彗星尾橫跨畫面，8K HDR",
    cam:"超廣角，彗星長尾從一側到另一側，人物在下方仰望渺小",
    col:"彗星白藍星空，千年彗星色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  astro_aurora_nebula:{n:"星雲極光 · 雙重奇觀",mk:"spirit_water",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"同時出現星雲和極光，紫色星雲在天空一側，綠色極光在另一側，地面雪原反射，雙重天象",
    o:"白色或深色服裝",
    prop:"無",
    fx:"星雲和極光共存（nebula and aurora combined），雪原倒映（snow reflection），雙重天象",
    l:"星雲和極光雙重自然光，aurora nebula combined light",
    q:"超廣角雙重天象大景，星雲和極光各佔天空一半，8K HDR",
    cam:"超廣角，天空雙重天象，地面雪原倒映，人物渺小",
    col:"紫色星雲+極光綠，雙重奇觀色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  ruin_angkor:{n:"吳哥窟 · 叢林神廟",mk:"oriental",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"柬埔寨吳哥窟，巨型石砌神廟從叢林中探出，石塔被樹根纏繞，清晨水面倒影",
    o:"東南亞古典服裝",
    prop:"無",
    fx:"神廟水面倒影（temple reflection），樹根纏繞石塔（tree roots wrapping stones），晨霧",
    l:"清晨金光打在神廟，晨霧繚繞，angkor sunrise golden light",
    q:"廣角吳哥窟大景，神廟倒影和叢林，8K HDR",
    cam:"廣角，神廟在中間，水面倒影下方，叢林兩側",
    col:"金黃石灰，吳哥窟古文明色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  ruin_acropolis:{n:"雅典衛城 · 文明燈塔",mk:"editorial",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"雅典衛城，巴特農神廟聳立山頂，雅典城在山腳延伸，夕陽金光打在大理石柱",
    o:"希臘風格服裝",
    prop:"無",
    fx:"帕特農神廟大理石柱（parthenon marble columns），夕陽金光（golden sunset on marble），雅典城",
    l:"夕陽側光打大理石，greek sunset golden light",
    q:"廣角雅典衛城大景，神廟在山頂，城市在山腳，8K HDR",
    cam:"廣角，山頂神廟主體，山坡延伸，城市背景",
    col:"大理石白金，希臘古典色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  ruin_egypt_pyramid:{n:"埃及金字塔 · 法老遺夢",mk:"warrior",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"埃及沙漠，三座金字塔在沙海中屹立，人面獅身像在前，夕陽照射，永恆的文明",
    o:"古埃及服裝",
    prop:"無",
    fx:"金字塔在沙漠中屹立（pyramids in desert），人面獅身在前景（sphinx foreground），夕陽",
    l:"沙漠夕陽，金字塔長陰影，egypt pyramid sunset light",
    q:"超廣角金字塔大景，三座金字塔構圖，8K HDR",
    cam:"超廣角，三金字塔填滿背景，人面獅身前景，人物渺小",
    col:"沙黃金橙，埃及永恆色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  ruin_petra:{n:"佩特拉 · 玫瑰紅古城",mk:"oriental",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"約旦佩特拉，從玫瑰紅砂岩峽谷走出，古城卡茲尼神廟出現，砂岩紋路如玫瑰",
    o:"探險服裝",
    prop:"無",
    fx:"砂岩峽谷通道（sandstone canyon siq），卡茲尼神廟顯現（treasury temple reveal），玫瑰紅紋路",
    l:"峽谷頂部光，玫瑰紅砂岩光，petra canyon dramatic light",
    q:"廣角佩特拉大景，從峽谷走出看神廟，8K HDR",
    cam:"廣角，峽谷兩側夾住，神廟在盡頭，人物在峽谷中渺小",
    col:"玫瑰紅砂岩，佩特拉古城色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  ruin_stonehenge:{n:"巨石陣 · 德魯伊神秘",mk:"gothic",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"英國巨石陣，巨石排列在英格蘭平原，夏至日出的光從石縫穿過，神秘異教儀式感",
    o:"德魯伊長袍或古英格蘭服裝",
    prop:"無",
    fx:"夏至光從石縫穿過（solstice light through stones），巨石在暮光中的剪影（standing stones silhouette）",
    l:"黎明光從地平線升起，穿透石縫，stonehenge solstice dramatic light",
    q:"廣角巨石陣大景，光穿透石縫，8K HDR",
    cam:"廣角，巨石圓陣，晨光從背後穿過，人物在其中渺小",
    col:"暮光金橙，巨石陣神秘色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  ruin_easter_island:{n:"復活節島 · 石像之謎",mk:"cinematic",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"復活節島，石像摩埃在海岸線排列，背對大海，日落金光，謎之文明",
    o:"探險服裝",
    prop:"無",
    fx:"摩埃石像排列（moai statues row），日落在石像背後（sunset behind moai），海岸线",
    l:"夕陽逆光，石像剪影，easter island sunset mystery light",
    q:"廣角復活節島大景，石像排列，8K HDR",
    cam:"廣角，石像排列成行，海洋背景，夕陽逆光",
    col:"石灰夕陽橙，復活節島神秘色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  ruin_colosseum_battle:{n:"競技場 · 角鬥士的榮耀",mk:"warrior",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"羅馬競技場內部，角鬥士在沙地中對決，觀眾席滿座吶喊，圓形競技場宏偉建築感",
    o:"古羅馬角鬥士戰袍",
    prop:"短劍",
    fx:"競技場宏偉圓形（colosseum circular grandeur），觀眾滿座（packed audience），陽光從頂部射入",
    l:"頂部開口陽光射入，戲劇性聚光，roman colosseum arena light",
    q:"廣角競技場全景，從底部仰拍，宏偉圓形建築，8K HDR",
    cam:"廣角仰拍，競技場從底到頂，觀眾席環繞",
    col:"暖石棕橙，角鬥士競技色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  ruin_babylon:{n:"古巴比倫 · 空中花園",mk:"editorial",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"重現古巴比倫，空中花園層層疊起，幼發拉底河從城中穿過，宏偉古城，七大奇觀",
    o:"巴比倫古典服裝",
    prop:"無",
    fx:"空中花園層層花卉（hanging gardens layers），幼發拉底河（euphrates river），古巴比倫城",
    l:"古代陽光，宏偉建築shadow，ancient babylon reconstruction light",
    q:"超廣角古巴比倫大景，空中花園為主體，8K HDR",
    cam:"超廣角，空中花園向上疊起，河流蜿蜒前景，城市背景",
    col:"翠綠暖黃，古巴比倫文明色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  special_double_sun:{n:"雙陽同輝 · 奇幻天象",mk:"xianxia",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"奇幻或外星球，天空中有雙太陽同時升起，光芒倍增，大地被雙重金光照耀",
    o:"奇幻服裝",
    prop:"無",
    fx:"雙太陽升起（dual suns rising），雙重光影（double shadow on ground），奇幻大地",
    l:"雙太陽雙重光源，奇幻照明，dual sun fantasy light",
    q:"超廣角雙太陽大景，8K HDR",
    cam:"超廣角，雙太陽在天空，人物在下方渺小",
    col:"雙重金橙，雙陽奇幻色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  special_glass_beach:{n:"玻璃海灘 · 彩色寶石灘",mk:"outdoor_glow",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"美國加州玻璃海灘，海浪打磨的彩色玻璃碎片鋪滿海灘，如彩色寶石地毯，陽光下閃爍",
    o:"輕便夏日服裝",
    prop:"無",
    fx:"彩色玻璃碎片在陽光下閃爍（sea glass glittering in sunlight），海浪沖刷",
    l:"海灘陽光，玻璃折射彩色光，glass beach gemstone light",
    q:"廣角玻璃海灘大景，彩色玻璃鋪滿前景，8K HDR",
    cam:"廣角，玻璃碎片前景，海浪中景，天空背景",
    col:"彩色寶石光，玻璃海灘奇景色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  special_crystal_cave:{n:"水晶洞穴 · 地球奇觀",mk:"xianxia",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"墨西哥水晶洞穴，巨型硒石水晶柱從地底生長，最大水晶比人高十倍，地熱霧氣",
    o:"探險服裝",
    prop:"無",
    fx:"巨型水晶柱（giant crystal columns），水晶折射光（crystal refraction），地熱霧氣",
    l:"地底弱光，水晶自發光折射，crystal cave ethereal light",
    q:"廣角水晶洞穴大景，水晶柱填滿畫面，8K HDR",
    cam:"廣角，水晶柱從四面包圍，人物在其中渺小突顯水晶規模",
    col:"晶瑩透明，水晶洞穴奇景色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  special_rainbow_mountain:{n:"彩虹山 · 大地調色盤",mk:"outdoor_glow",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"秘魯維尼坎卡彩虹山，地質條件形成紅橙黃綠藍條紋山體，色彩比丹霞更豐富",
    o:"南美探險服裝",
    prop:"無",
    fx:"彩色山體條紋（colorful mountain stripes），高原雲層（high altitude clouds），自然色彩衝擊",
    l:"高原強光突顯色彩，peru rainbow mountain light",
    q:"超廣角彩虹山大景，色彩條紋填滿畫面，8K HDR",
    cam:"超廣角，彩虹山從前景延伸，人物在山道渺小",
    col:"彩虹大地色，秘魯彩虹山色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  special_pink_lake:{n:"玫瑰湖 · 粉色奇蹟",mk:"wedding",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"澳大利亞希利爾湖，天然粉紅色湖水，從高空看粉紅色湖和藍色海洋並列，超現實",
    o:"粉色或白色服裝",
    prop:"無",
    fx:"粉紅色湖水（pink lake from above），和藍海對比（pink vs blue contrast），高空鳥瞰",
    l:"晴天強光，粉紅色湖反光，pink lake aerial photography light",
    q:"廣角玫瑰湖大景，粉藍對比，8K HDR",
    cam:"廣角鳥瞰，粉紅湖佔畫面大半，藍海在一側",
    col:"玫瑰粉藍，玫瑰湖奇蹟色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  special_lenticular_cloud:{n:"飛碟雲 · 天空奇觀",mk:"xianxia",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"富士山或高山頂，頂帽狀莢狀雲覆蓋山頂如飛碟，雲層光滑如UFO，天空奇觀",
    o:"白色服裝或現代服裝",
    prop:"無",
    fx:"莢狀雲覆蓋山頂（lenticular cloud over summit），雲層光滑如飛碟，山腰雲海",
    l:"側光打在莢狀雲，雲層光滑，lenticular cloud dramatic lighting",
    q:"廣角莢狀雲大景，山頂雲覆蓋，8K HDR",
    cam:"廣角，山從底到頂，莢狀雲帽在最頂",
    col:"白雲山藍，天空奇觀色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  special_mud_volcano:{n:"泥火山 · 地熱大地",mk:"outdoor_glow",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"亞塞拜然泥火山，數百座小泥火山冒著咕嚕咕嚕的泥漿泡，月球地表般的奇景",
    o:"探險服裝",
    prop:"無",
    fx:"泥漿冒泡（mud bubbling），地熱蒸汽（geothermal steam），月球感地貌（lunar landscape）",
    l:"陰天漫射光，地熱蒸汽飄散，mud volcano mysterious light",
    q:"廣角泥火山大景，泥漿和蒸汽填滿畫面，8K HDR",
    cam:"廣角，泥火山群從前景延伸，人物在其中突顯比例",
    col:"灰棕蒸汽白，地熱奇觀色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  special_star_dunes:{n:"星形沙丘 · 沙漠幾何",mk:"outdoor_glow",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"撒哈拉或阿拉伯星形沙丘，沙丘從中央向外輻射多條沙脊，從高空看如沙漠中的星形圖案",
    o:"沙漠服裝",
    prop:"無",
    fx:"星形沙丘從高空（star dune aerial view），沙脊幾何美感（dune ridges geometric pattern），沙漠寂靜",
    l:"午後強光，沙脊光影清晰，star dune aerial golden light",
    q:"超廣角星形沙丘鳥瞰大景，幾何感，8K HDR",
    cam:"鳥瞰或廣角，星形沙丘填滿畫面，人物渺小突顯比例",
    col:"金沙幾何，星形沙丘色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  special_white_sands:{n:"白沙漠 · 純淨世界",mk:"snow_pure",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"美國新墨西哥白沙漠，純白石膏沙丘一望無際，白色如雪，強烈藍天白沙對比",
    o:"白色或亮色服裝",
    prop:"無",
    fx:"純白沙丘（pure white gypsum dunes），藍天白沙強烈對比（blue sky vs white sand），純淨感",
    l:"正午強光，白沙反光刺眼，white sands desert intense light",
    q:"超廣角白沙漠大景，白色沙丘延伸，8K HDR",
    cam:"超廣角，白色沙丘從前景延伸至天際，人物在其中渺小",
    col:"純白藍天，白沙漠純淨色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  special_underwater_cave:{n:"海底藍洞 · 深藍神秘",mk:"spirit_water",
    char:"氣場融入自然壯景，人物渺小突顯天地壯闊，如史詩電影大景鏡頭中的主角",
    s:"巴哈馬大藍洞，從空中看正圓形深藍色洞穴在碧藍海洋中，深邃無底，地球的眼睛",
    o:"探險服裝或人魚裝",
    prop:"無",
    fx:"大藍洞正圓從空中（great blue hole perfect circle aerial），深藍色洞穴（deep blue void），碧海環繞",
    l:"碧海強光，藍洞深藍，great blue hole aerial light",
    q:"超廣角大藍洞鳥瞰大景，正圓深藍為中心，8K HDR",
    cam:"超廣角鳥瞰，大藍洞為中央，碧海環繞",
    col:"深藍碧海，大藍洞神秘色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  // ── 神話補充 ──
  luoshen:{n:"洛神 · 水中女神",mk:"moon",
    char:"清麗飄逸，眼神靈動如水，如曹植筆下洛神，氣質超凡脫俗",
    s:"洛水之上，薄霧飄渺，水面如鏡，蓮花盛開，仙氣縹緲，如夢似幻",
    o:"霓裳羽衣，白色多層輕紗，金色腰帶，珠寶頭飾，裙擺拖曳水面",
    prop:"無，或手持蓮花",
    fx:"裙擺在水面上凌波而行（skirt floating above water），水霧環繞，蓮花粒子，銀白仙氣",
    l:"水面反射柔光，霧氣漫射光，soft ethereal water light",
    q:"洛神賦意境，超寫實仙境，8K HDR",
    cam:"全身，水面倒影，人物凌波微步感",
    col:"白銀水藍，低飽和空靈色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  lihua:{n:"梁祝化蝶",mk:"wedding",
    char:"淒美柔情，眼含淚光，如古典悲劇中的祝英台，感情豐沛動人",
    s:"古典庭院或山頂，漫天蝴蝶飛舞，花叢綻放，夕陽或月光背景，悲戀氛圍",
    o:"古典漢服，白色或淡粉色，飄逸輕盈，簡約清麗",
    prop:"無，雙手自然展開",
    fx:"漫天蝴蝶飛舞（butterflies swarming），花瓣漫天，光粒子，淒美光暈",
    l:"夕陽柔光或月光，淒美暖冷色調交替",
    q:"中國古典悲劇美學，詩意人像，8K",
    cam:"仰拍或正面，蝴蝶漫天構圖",
    col:"粉白蝴蝶色調，淒美浪漫",
    neg:"卡通、AI感、廉價感、文字水印"},

  // ── 仙俠補充 ──
  ice_phoenix:{n:"冰鳳凰 · 冰封神殿",mk:"xianxia",
    char:"冷豔絕世，眼神如冰，如冰雪仙尊，氣質高貴冷傲，令人仰望",
    s:"冰封神殿，冰晶宮柱，冰雪地面反光，冰藍色調天空，極致冷豔仙境",
    o:"冰藍銀白多層仙裙，冰晶刺繡，半透明冰紋，銀色髮冠",
    prop:"無，或手握冰晶法器",
    fx:"冰鳳凰靈魂從背後顯現（ice phoenix spirit），冰晶粒子飄散，冰霧環繞",
    l:"冰藍冷光主光，冰面反射輔光，dramatic cold cinematic lighting",
    q:"冰雪仙俠電影海報，UE5 cinematic，8K HDR",
    cam:"全身，冰殿對稱構圖",
    col:"冰藍銀白，極致冷色調",
    neg:"暖色調、卡通、AI感、廉價感、文字水印"},

  demon_queen:{n:"魔尊女王 · 暗夜宮殿",mk:"gothic",
    char:"霸氣凌厲，眼神俯視眾生，如魔道至尊，氣場強大令人臣服",
    s:"暗夜魔族宮殿，黑金色王座，魔氣漩渦環繞，黑色宮殿建築，暗夜星空",
    o:"黑金色魔道長袍，金色龍紋刺繡，高領設計，頭戴黑金王冠，長披風",
    prop:"端坐王座，或站立俯視",
    fx:"黑紫魔氣漩渦（dark purple demonic energy），金色符文，黑色羽毛飄落",
    l:"王座金色逆光，魔氣紫黑環境光，dramatic underlighting",
    q:"魔道至尊電影海報，黑暗奢華感，UE5，8K HDR",
    cam:"低角度仰拍王座，強調霸氣俯視感",
    col:"黑金紫，高貴暗黑色調",
    neg:"軟弱感、卡通、AI感、廉價感、文字水印"},

  peach_blossom:{n:"三生三世 · 桃花仙境",mk:"xianxia",
    char:"空靈溫柔，眼神含情，如三生三世十里桃花中的白淺，仙氣十足",
    s:"萬畝桃花林，桃花盛開如粉色雲海，花瓣漫天飄落，仙霧縹緲，天際朝霞",
    o:"白色或淡粉色多層薄紗仙裙，飄逸廣袖，簡潔金色髮飾，仙氣純淨",
    prop:"無，或手托桃花",
    fx:"漫天桃花瓣飄落（falling peach blossoms），粉色仙霧，光粒子，夢幻光暈",
    l:"桃花林柔和漫射光，粉色環境反光，dreamy soft pink lighting",
    q:"三生三世仙俠電視劇質感，萬畝桃林大景，8K",
    cam:"全身廣角大景，人物在桃林花海中",
    col:"粉白淡金，夢幻仙境色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  // ── 現代補充 ──
  met_gala:{n:"Met Gala 奢華紅毯",mk:"editorial",
    char:"頂級女星氣場，自信優雅，如好萊塢A咖走紅毯，光芒萬丈",
    s:"Met Gala紅毯，大理石宮廷樓梯，金色牆柱，攝影師閃光燈，奢華博物館場景",
    o:"頂級高訂禮服，誇張設計感，水晶珠寶刺繡或羽毛裝飾，拖地長裙",
    prop:"無，優雅站姿手勢",
    fx:"閃光燈光斑（camera flash bokeh），金色粒子，奢華光暈",
    l:"紅毯聚光燈，多角度閃光燈，dramatic celebrity red carpet lighting",
    q:"頂級時尚大片，Vogue/Harper's Bazaar封面，8K HDR",
    cam:"全身紅毯構圖，金色樓梯背景",
    col:"金白奢華，高飽和富麗色調",
    neg:"廉價感、卡通、AI感、文字水印"},

  sport_chic:{n:"運動潮流 · Sport Chic",mk:"natural_clean",
    char:"活力健康，自信有力，如國際運動品牌代言人，充滿動感美",
    s:"現代都市街頭，籃球場，跑道，或乾淨工業風場景",
    o:"高端運動潮流服裝，Nike/Adidas大廠廣告感，緊身運動上衣，潮流球鞋",
    prop:"無，或手持運動器材",
    fx:"運動動態殘影（motion blur trail），汗水光澤，陽光側光",
    l:"強烈側光或逆光，高對比運動廣告感，dynamic sports lighting",
    q:"國際運動品牌廣告大片，動感活力，8K HDR",
    cam:"動態奔跑或跳躍，低角度仰拍強調氣勢",
    col:"鮮豔對比色，高飽和活力色調",
    neg:"靜態無力感、卡通、AI感、廉價感、文字水印"},

  dark_academia:{n:"Dark Academia 學院風",mk:"cinematic",
    char:"知性憂鬱，眼神深沉有思想，如歐洲古典大學的文學系學生，氣質冷靜",
    s:"歐洲古典圖書館，落地書架，皮革椅，彩繪玻璃窗，木質長桌，燭光搖曳",
    o:"格紋羊毛外套，白色襯衫，深色長裙，牛津鞋，皮革手提包",
    prop:"手持厚重古典書籍，或翻閱舊地圖",
    fx:"燭光搖曳暖光（candlelight warm glow），灰塵粒子（dust motes in light）",
    l:"彩繪玻璃窗光，燭光暖橙，dark academia moody lighting",
    q:"Dark Academia 美學，歐洲古典圖書館，膠片色調，8K",
    cam:"半身坐姿，書架為背景，文學氣質構圖",
    col:"深棕暖橙格紋，低飽和學院色調",
    neg:"現代科技感、卡通、AI感、廉價感、文字水印"},

  // ── 奇幻補充 ──
  mermaid_deep:{n:"深海人魚公主",mk:"spirit_water",
    char:"神秘嬌豔，眼神深邃如海，如深海人魚王女，充滿海洋魔力",
    s:"深海宮殿，珊瑚礁群，發光水母，深藍海水，海底光折射，泡泡粒子",
    o:"人魚尾巴（iridescent fish tail），珊瑚珠寶頭飾，貝殼胸衣，長髮飄散水中",
    prop:"無，或手持海星",
    fx:"人魚尾鱗片閃爍（iridescent fish scale shimmer），水母發光，海底光折射 caustics",
    l:"海底藍綠冷光，水母發光輔光，underwater caustic lighting",
    q:"深海奇幻大片，超寫實，8K HDR，夢幻海底世界",
    cam:"全身水下構圖，人魚尾為視覺重心",
    col:"深藍珊瑚紫，珠母貝虹彩色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  angel_heaven:{n:"天使聖域 · 羽翼光輝",mk:"xianxia",
    char:"聖潔純美，眼神溫柔神聖，如天堂守護天使，氣質純淨無瑕",
    s:"天堂雲海，雲端聖殿，金色光柱從天而降，白雲翻騰，無邊天際",
    o:"純白天使禮袍，金色腰帶，白色大羽翼展開，金色頭環，白色羽毛裝飾",
    prop:"手持金色聖劍或無道具",
    fx:"白色巨型羽翼展開（giant white angel wings spreading），金色神聖光柱，羽毛飄落",
    l:"神聖金白天光，從上方傾瀉的 god rays，holy divine lighting",
    q:"天使聖域大片，神聖純美，UE5 cinematic，8K HDR",
    cam:"全身仰拍，羽翼展開大景，強調神聖壯麗",
    col:"純白金色，神聖純淨色調",
    neg:"卡通、AI感、廉價感、黑暗元素、文字水印"},

  vampire_noble:{n:"吸血鬼貴族 · 黑暗城堡",mk:"gothic",
    char:"永恆神秘，眼神深邃如千年，如歐洲古典吸血鬼貴族，優雅而危險",
    s:"哥德式城堡大廳，石拱長廊，蠟燭燭台，玫瑰花叢，夜晚月光透窗",
    o:"維多利亞時代黑色貴族禮服，蕾絲領口，血紅配飾，黑色緞面手套，珍珠頸鏈",
    prop:"無，或手持紅酒杯",
    fx:"玫瑰花瓣飄落，蠟燭燭光搖曳，夜霧繚繞，血色光暈",
    l:"蠟燭底部逆光，月光冷藍輔光，gothic castle dramatic lighting",
    q:"哥德式吸血鬼電影質感，永恆黑暗美學，8K HDR",
    cam:"半身特寫，石拱迴廊透視背景",
    col:"黑紅深紫，血色月光色調",
    neg:"色彩過亮、卡通、AI感、廉價感、文字水印"},

  // ── 東方美學補充 ──
  dunhuang_dance:{n:"敦煌飛天 · 壁畫舞者",mk:"tang",
    char:"豔麗靈動，眼神飛揚，如敦煌壁畫中的飛天仙女，舞姿優美",
    s:"敦煌莫高窟風格場景，金色壁畫紋樣背景，佛龕石窟，沙漠黃金色光",
    o:"敦煌飛天服裝，多色彩絲帶飄飛，寶石裝飾，五彩斑斕，反彈琵琶舞姿",
    prop:"手持琵琶，反彈琵琶標誌性姿勢",
    fx:"五彩絲帶飄飛（colorful silk ribbons flying），金色沙塵粒子，壁畫圖案光暈",
    l:"敦煌金色暖光，壁畫紋樣反光，warm golden cave lighting",
    q:"敦煌文化藝術大片，反彈琵琶舞姿，超寫實，8K HDR",
    cam:"全身舞姿構圖，絲帶飄飛大景",
    col:"金橙五彩，敦煌壁畫色調",
    neg:"現代感、卡通、AI感、廉價感、文字水印"},

  wuxia_sword:{n:"江湖俠女 · 武俠行走",mk:"wuxia_sharp",
    char:"颯爽英姿，眼神銳利如劍，如武俠小說中的劍客，豪氣干雲",
    s:"江湖客棧，或山頂崖邊，霧氣繚繞，古代建築，俠客行走的江湖世界",
    o:"俠客服裝，灰黑色勁裝，腰間劍鞘，頭巾或竹笠，輕便利落",
    prop:"寶劍出鞘，劍指前方或劍氣外露",
    fx:"劍氣光芒（sword energy slash），衣袂隨劍勢飄動，霧氣環繞",
    l:"武俠電影側光，霧氣漫射光，cinematic wuxia lighting",
    q:"武俠電影感，颯爽俠客大片，8K HDR",
    cam:"動態持劍，低角度仰拍強調俠氣",
    col:"灰黑冷調，低飽和武俠電影色",
    neg:"卡通、AI感、廉價感、文字水印"},

  // ── 旅行補充 ──
  tokyo_night:{n:"東京夜景 · 新宿霓虹",mk:"y2k",
    char:"時尚靈動，眼神好奇，如日系時尚雜誌街拍，年輕活潑感",
    s:"東京新宿或澀谷，密集霓虹招牌，繁華夜晚，人流穿梭，現代都市感",
    o:"日系時尚街頭服裝，或和風現代混搭，色彩鮮豔搶眼",
    prop:"無，自然街頭姿態",
    fx:"霓虹光污染（neon light pollution），人流運動模糊，城市夜晚光暈",
    l:"東京霓虹混合光，暖橙冷藍交錯，dynamic tokyo night lighting",
    q:"東京夜景人像，街頭攝影風格，8K",
    cam:"街頭自然感，霓虹招牌作為背景層次",
    col:"霓虹多色彩，高飽和都市夜色",
    neg:"卡通、AI感、廉價感、白天場景、文字水印"},

  paris_cafe:{n:"巴黎咖啡館 · 文藝午後",mk:"editorial",
    char:"優雅從容，眼神帶著微笑，如巴黎女人的慵懶氣質，自然精緻",
    s:"巴黎街角露天咖啡館，鐵椅圓桌，艾菲爾鐵塔遠景，梧桐樹下，陽光斑駁",
    o:"法式優雅服裝，條紋上衣或碎花裙，貝雷帽，手提藤編包",
    prop:"手持咖啡杯，或翻閱法文雜誌",
    fx:"梧桐樹光斑（dappled sunlight through trees），自然lens flare",
    l:"午後斜射陽光，樹蔭光斑，warm Parisian afternoon light",
    q:"巴黎文藝人像，法式優雅，8K",
    cam:"半身坐姿，鐵塔遠景或咖啡館為背景",
    col:"奶白棕米，巴黎城市暖色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  bali_temple:{n:"峇里島神廟 · 異域風情",mk:"outdoor_glow",
    char:"神秘自然，眼神虔誠靈動，如峇里島神廟的舞者，充滿異域靈性",
    s:"峇里島石雕神廟，熱帶花叢環繞，水稻梯田，石板路，南洋熱帶氛圍",
    o:"峇里島傳統服飾或現代波希米亞風，花環頭飾，白色或金黃色系",
    prop:"手持熱帶花束，或頭頂供品籃",
    fx:"熱帶花朵散景前景，蠟燭燭光，金色晨光",
    l:"熱帶清晨金光，石雕反射暖光，tropical golden morning light",
    q:"峇里島旅拍大片，異域文化感，8K",
    cam:"全身神廟前，熱帶植物為前景框架",
    col:"金黃翠綠，熱帶暖色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  // ── 自然補充 ──
  sakura_kyoto:{n:"京都櫻花 · 花道漫步",mk:"natural_clean",
    char:"純淨甜美，眼神含笑，如日本春日廣告代言人，清新美好",
    s:"京都染井吉野櫻花滿開，花道兩側粉色花海，花瓣如雪飄落，清晨柔光",
    o:"日本和服或漢服，粉色/白色系，配合櫻花色調，精緻髮飾",
    prop:"手持一枝櫻花，或撐油紙傘",
    fx:"漫天櫻花瓣飄落（cherry blossom petals falling），粉色花海散景，清晨薄霧",
    l:"清晨柔和漫射光，粉色花瓣環境反光，soft spring morning light",
    q:"京都櫻花大片，日式春日美學，8K",
    cam:"全身花道構圖，花道透視延伸",
    col:"粉白嫩綠，日式清新春色",
    neg:"卡通、AI感、廉價感、文字水印"},

  lavender_field:{n:"薰衣草田 · 紫色夢境",mk:"wedding",
    char:"溫柔夢幻，眼神寧靜，如北海道薰衣草廣告，治癒系美感",
    s:"北海道或普羅旺斯薰衣草田，紫色花海延伸至地平線，藍天白雲，清風徐來",
    o:"白色或淡紫色長裙，草帽，簡約清新，配合薰衣草紫色調",
    prop:"手持薰衣草花束",
    fx:"薰衣草花田紫色散景，清風搖曳效果，蜜蜂蝴蝶點綴",
    l:"午後暖陽，逆光光暈，lavender field golden hour",
    q:"薰衣草田浪漫人像，清新治癒，8K",
    cam:"全身廣角大景，薰衣草田延伸至遠方",
    col:"紫白淡藍，治癒清新色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  // ── 城市生活補充 ──
  rooftop_sunset:{n:"城市天台 · 日落大景",mk:"cinematic",
    char:"自由灑脫，眼神遠望城市，如都市電影主角，充滿故事感",
    s:"城市高樓天台，都市天際線360度，夕陽染紅城市，摩天大樓燈光漸亮",
    o:"都市休閒時尚服裝，風衣或輕薄外套，時尚都市感",
    prop:"無，眺望城市姿態",
    fx:"城市夕陽金光，樓宇剪影，city sunset golden hour",
    l:"夕陽逆光，都市燈光漸亮，urban golden hour lighting",
    q:"都市電影感大片，城市天際線，8K HDR",
    cam:"廣角全景，城市為大背景，人物置前",
    col:"夕陽橙紅配都市藍灰，電影感色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  night_market:{n:"夜市燈火 · 台式街拍",mk:"y2k",
    char:"可愛親切，自然笑容，如台灣夜市街拍，活潑生活感",
    s:"台灣夜市，紅色燈籠高掛，各式小吃攤位，人潮熱鬧，霓虹招牌，溫暖燈光",
    o:"台式休閒服裝，或日系可愛穿搭，輕鬆隨性",
    prop:"手持夜市小吃或飲料",
    fx:"燈籠暖紅光暈，夜市散景，熱鬧光污染",
    l:"夜市暖橙燈光，燈籠紅光，warm market night lighting",
    q:"台式夜市街拍，生活感人像，8K",
    cam:"半身自然姿態，夜市燈火為背景",
    col:"暖橙紅燈籠色，熱鬧溫暖色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  // ── 棚拍補充 ──
  color_smoke:{n:"彩色煙霧棚拍",mk:"editorial",
    char:"藝術感強，姿態大膽，如時尚藝術攝影大片，視覺衝擊力強",
    s:"純黑背景攝影棚，彩色煙霧噴出",
    o:"簡約或誇張時裝，與煙霧色彩形成對比",
    prop:"無，或持煙霧棒",
    fx:"彩色煙霧爆炸效果（colorful smoke explosion），高對比色彩衝突",
    l:"純黑背景側光，煙霧透射光，dramatic studio smoke lighting",
    q:"時尚藝術攝影，色彩爆炸視覺，8K HDR",
    cam:"全身或半身，煙霧包圍構圖",
    col:"高飽和對比彩色煙霧，純黑背景",
    neg:"卡通、AI感、廉價感、文字水印"},

  neon_portrait:{n:"霓虹燈管棚拍",mk:"hk_film",
    char:"冷豔時尚，眼神直視，如藝術攝影封面，強烈視覺感",
    s:"攝影棚，彩色霓虹燈管環繞排列，幾何霓虹線條，純黑或深色背景",
    o:"簡約黑色服裝，讓霓虹光成為主角",
    prop:"無，姿態配合霓虹燈造型",
    fx:"霓虹燈管彩色光照射（neon tube color light），鏡面反射，幾何光影",
    l:"多色霓虹燈管直接光源，色彩光影交疊，neon tube portrait lighting",
    q:"霓虹藝術攝影，時尚大片，8K HDR",
    cam:"半身特寫，霓虹環繞構圖",
    col:"霓虹多色彩，高飽和色彩對比",
    neg:"卡通、AI感、廉價感、文字水印"},

  // ── 暗黑奇幻補充 ──
  dragon_rider:{n:"龍騎士 · 天空霸主",mk:"dragon_epic",
    char:"霸氣威嚴，眼神如王，如奇幻史詩電影中的龍騎士，氣場震懾",
    s:"高空雲層之上，巨龍盤旋，天空風暴雲，閃電環繞，史詩天空戰場",
    o:"龍鱗金屬鎧甲，飄逸戰袍，頭戴龍紋頭盔，氣勢磅礴",
    prop:"騎乘於巨龍背上，或站立龍頭",
    fx:"巨龍環繞（giant dragon surrounding），閃電電弧，龍焰噴吐，風暴雲",
    l:"閃電白光，龍焰橙紅，storm dramatic lighting",
    q:"奇幻史詩電影海報，龍騎士霸氣，UE5，8K HDR",
    cam:"超廣角大景，巨龍和人物共同構圖",
    col:"金黑暴風色調，高對比史詩感",
    neg:"卡通、AI感、廉價感、文字水印"},

  witch_forest:{n:"暗森女巫 · 魔藥師",mk:"gothic",
    char:"神秘詭異，眼神深不可測，如黑暗童話中的女巫，魅惑危險",
    s:"黑暗古老森林，腐朽樹根，發光蘑菇，霧氣飄渺，神秘魔法氛圍",
    o:"黑色女巫長袍，尖頂女巫帽，蕾絲細節，神秘配飾，黑色靴子",
    prop:"手持魔藥瓶或魔法掃把，大黑帽",
    fx:"魔藥瓶發光（glowing potion bottle），森林魔法粒子，蘑菇發光，黑色煙霧",
    l:"蘑菇發光底光，魔藥瓶彩色輔光，dark enchanted forest lighting",
    q:"黑暗童話奇幻大片，女巫美學，8K HDR",
    cam:"全身，黑暗森林大景，女巫尖帽為識別元素",
    col:"黑綠發光，黑暗童話色調",
    neg:"可愛感、卡通、AI感、廉價感、文字水印"},

  // ── 水境補充 ──
  jellyfish_sea:{n:"水母海 · 夢幻深海",mk:"spirit_water",
    char:"夢幻空靈，眼神迷離，如深海精靈，飄逸柔美",
    s:"深海，藍紫色發光水母群漫天漂浮，深藍海水，遠處珊瑚礁，夢幻深海世界",
    o:"白色或藍紫色飄逸長裙，在水中漂浮展開，銀色髮飾",
    prop:"無，雙手輕觸水母",
    fx:"發光水母群（bioluminescent jellyfish swarm），水中光粒子，裙擺水中漂浮",
    l:"水母生物發光藍紫主光，深海冷藍環境光，bioluminescent underwater lighting",
    q:"深海夢幻藝術攝影，水母仙境，8K HDR",
    cam:"全身水中漂浮構圖，水母為前後景",
    col:"深藍藍紫發光，夢幻深海色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  // ── 日式美學 新分類 ──
  wa_kimono:{n:"和服 · 京都神社",mk:"natural_clean",
    char:"優雅溫柔，眼神含蓄，如日本傳統美人，端莊靜雅",
    s:"京都神社，石燈籠，參道石板路，神社朱紅鳥居，楓葉或竹林背景",
    o:"正統日本和服，精緻腰帶，木屐，精緻髮飾，和風配飾",
    prop:"和紙扇，或雙手合十拜神",
    fx:"楓葉飄落，石燈籠暖光散景，清晨薄霧",
    l:"清晨柔光，石燈籠暖橙輔光，traditional Japanese morning light",
    q:"日本和服人像，京都神社大片，8K",
    cam:"全身，鳥居或石燈籠為背景，和風構圖",
    col:"朱紅白金，傳統和風色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  onsen_snow:{n:"雪中溫泉 · 和風旅館",mk:"snow_pure",
    char:"純淨溫柔，眼神恬靜，如日式溫泉旅館廣告，靜謐美好",
    s:"日本和風旅館庭院，戶外溫泉，雪景庭院，石燈籠積雪，松樹白雪，靜謐冬日",
    o:"日式棉質浴衣（yukata），或傳統和服，溫泉旅館風",
    prop:"手持白色毛巾，或竹製器皿",
    fx:"雪花飄落，溫泉水霧蒸騰（hot spring steam），雪地反光",
    l:"雪地漫射冷白光，溫泉暖光，onsen winter lighting",
    q:"日式溫泉旅館大片，雪景靜謐，8K",
    cam:"庭院全景，溫泉水霧朦朧感",
    col:"白雪冷藍配溫泉暖橙，日式雅致色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  matsuri_night:{n:"夏日祭典 · 浴衣煙火",mk:"natural_clean",
    char:"青春活潑，眼神閃亮，如日本夏日祭典廣告，充滿夏夜美好",
    s:"日本夏日祭典，夜晚煙火大會，紙燈籠排列，攤販熱鬧，夏夜星空",
    o:"日式浴衣（yukata），鮮豔花卉圖案，木屐，夏日祭典造型",
    prop:"手持煙火棒，或金魚撈魚袋",
    fx:"煙火在夜空爆開（fireworks explosion），紙燈籠暖光，夏夜星光",
    l:"煙火爆炸光，燈籠暖橙光，summer festival night lighting",
    q:"日本夏日祭典大片，青春夏夜，8K HDR",
    cam:"全身或半身，夜空煙火為背景",
    col:"煙火彩色配夜空深藍，夏夜浪漫色調",
    neg:"卡通、AI感、廉價感、文字水印"},

  // ── 異域東方 新分類 ──
  india_goddess:{n:"印度女神 · 寶萊塢",mk:"india_bold",
    char:"豔麗熱情，眼神深邃神秘，如印度寶萊塢女星，異域華麗感",
    s:"印度金色神廟，石雕神像，繁複金色裝飾，熱帶花卉，神聖莊嚴氛圍",
    o:"印度紗麗（sari），鮮豔色彩，大量金色珠寶，眉心紅點（bindi），精緻印度首飾",
    prop:"雙手合十祈禱姿勢，或手持蓮花",
    fx:"金色光粒子，花瓣飄落，神廟金光",
    l:"印度神廟金色暖光，神聖光柱，warm golden temple lighting",
    q:"印度女神人像，異域華麗文化感，8K HDR",
    cam:"全身，金色神廟為背景，異域構圖",
    col:"金橙紅，高飽和印度色調",
    neg:"現代感、卡通、AI感、廉價感、文字水印"},

  persian_princess:{n:"波斯公主 · 一千零一夜",mk:"arabica_mystic",
    char:"神秘妖媚，眼神如謎，如一千零一夜中的波斯公主，東方神秘美",
    s:"波斯宮殿，馬賽克拱頂，金色宮燈搖曳，絲綢帷幔，夜晚星空",
    o:"波斯宮廷服裝，薄紗肚皮舞衣，金色頭飾，腰鏈，寶石裝飾",
    prop:"手持金色油燈，或珠鏈面紗半遮臉",
    fx:"宮燈光暈（lantern golden glow），絲綢飄動，金色粒子漂浮",
    l:"金色宮燈主光，馬賽克反光，arabian nights warm golden lighting",
    q:"一千零一夜奇幻大片，波斯宮廷美學，8K HDR",
    cam:"半身特寫，宮殿拱頂為背景",
    col:"金橙深藍夜空，阿拉伯夜晚色調",
    neg:"現代感、卡通、AI感、廉價感、文字水印"},

    tang_glory:{n:"大唐盛世",mk:"tang",
    char:"雍容華貴，五官立體豐腴，神態端莊自信，如盛唐宮廷畫作中走出的仕女",
    s:"古建築紅牆朱柱，飛簷翹角，古典庭院，牡丹花叢，燈籠高掛，色彩飽滿濃烈",
    o:"齊胸襦裙，大袖廣袍，暖橙/大紅/寶藍等高飽和色彩，額心金色花鈿，步搖珠釵，層疊配飾",
    prop:"手持宮扇或牡丹花枝",
    fx:"花瓣飄落，金色陽光粒子，暖橙宮燈光暈",
    l:"午後金色側光，紅牆反射暖光，高飽和電影感色調，rich warm cinematic lighting",
    q:"大唐盛世宮廷電影感，超寫實，色調飽滿濃烈，8K HDR",
    cam:"全身正面或斜側，紅牆為背景，9:16直式",
    col:"大紅暖橙金主色調，高飽和富貴感",
    neg:"低飽和、冷色調、卡通、AI感、廉價感、文字水印"},

  jiangnan_ink:{n:"水墨江南",mk:"natural_clean",
    char:"清雅溫婉，眼神柔和含情，如江南才女，氣質朦朧詩意",
    s:"煙雨濛濛的江南古鎮，青石板路，小橋流水，白牆黛瓦，垂柳依依，水霧飄渺",
    o:"素色漢服或改良旗袍，淡藍/白/淡粉色調，簡約清雅，無過度裝飾",
    prop:"手持油紙傘，或憑欄遠眺",
    fx:"煙雨朦朧（misty rain effect），水面漣漪倒影，柳枝隨風搖曳，輕霧飄渺",
    l:"陰天柔和漫射光，低對比，留白美學，soft misty overcast light",
    q:"水墨畫意境人像，膠片色調，低飽和清雅，85mm，8K",
    cam:"人物在橋上或水邊，中景留白，強調江南意境",
    col:"青灰白淡粉，低飽和水墨色調",
    neg:"過度飽和、豔麗色彩、卡通、AI感、文字水印"},

  palace_intrigue:{n:"宮廷權謀",mk:"gongting",
    char:"冷豔威嚴，眼神深沉有城府，如宮廷劇女主角，氣質沉穩高級",
    s:"宮廷走廊，深景深迴廊，對稱宮殿建築，明暗交替的光影，燭光搖曳的偏殿",
    o:"明制漢服或清代宮廷裝，深色錦緞，金銀刺繡，高領立領，繁複配飾，精緻髮冠",
    prop:"手持宮扇半遮面，或執燭台",
    fx:"燭光搖曳光影（flickering candlelight shadows），深景深迴廊透視",
    l:"側光強陰影，高對比宮廷布光，dramatic side lighting，冷暖對比",
    q:"延禧攻略/甄嬛傳電視劇電影感，對稱構圖，8K，高級沉穩",
    cam:"對稱迴廊構圖，或深景深側身，強調宮廷空間感",
    col:"深藍黑金，低飽和沉穩色調",
    neg:"過度明亮、輕佻感、卡通、AI感、廉價感、文字水印"},

  // 異國電影感
  seoul_afternoon:{n:"首爾午後",mk:"natural_clean",
    char:"清純甜美，自然笑容，如韓系偶像日常，清透自然感",
    s:"首爾街道，特色咖啡廳外觀，景福宮宮門，韓式老街，午後陽光斜射",
    o:"韓系簡約私服，奶白色/米色/淡粉系，oversized外套或韓服改良版",
    prop:"手捧咖啡杯，或自然走路姿態",
    fx:"陽光lens flare，自然bokeh散景，清透光感",
    l:"午後自然側光，清透亮麗，Korean beauty filter aesthetic",
    q:"韓系時尚旅拍，清透自然，85mm f1.4，8K",
    cam:"半身自然姿態，街道透視背景，或景福宮宮門全身",
    col:"清透奶白粉，高亮度低對比，韓系清爽色調",
    neg:"過度暗沉、廉價感、AI感、卡通、文字水印"},

  provence_garden:{n:"南法莊園",mk:"outdoor_glow",
    char:"慵懶浪漫，自然甜笑，如歐洲度假雜誌封面，輕鬆愜意感",
    s:"法式花園莊園，薰衣草田，野餐草坪，歐式石砌花圃，陽光充足，向日葵田",
    o:"碎花棉麻長裙，草帽，輕薄白色/奶油色/花卉圖案，度假風涼鞋",
    prop:"手提野餐籃，或抱著一束鮮花",
    fx:"陽光耀斑 lens flare，花朵虛化前景，蝴蝶點綴",
    l:"黃金時刻暖陽，逆光光暈，golden hour backlight，慵懶溫暖",
    q:"南法度假雜誌風，自然電影感，8K，輕盈明亮",
    cam:"全身廣角大景突顯莊園，或花叢中半身特寫",
    col:"暖橙金黃綠，高亮度自然色調",
    neg:"陰暗場景、卡通、AI感、廉價感、文字水印"},

  hk_noir:{n:"重慶森林港風",mk:"hk_film",
    char:"迷離憂鬱，眼神游離如夢，如王家衛電影女主角，情緒感十足",
    s:"香港霓虹老街，夜晚快餐店，舊式走廊，潮濕路面霓虹倒影，老舊招牌林立",
    o:"90年代港式服裝，格子外套，旗袍改良，或簡約純色，復古感強",
    prop:"手持一杯飲料，或煙霧繚繞",
    fx:"霓虹光污染（neon light bleed），運動模糊（motion blur），膠片顆粒感（film grain）",
    l:"霓虹混合光，低曝光高對比，Wong Kar-wai cinematic mood",
    q:"王家衛電影美學，重度膠片顆粒，色差效果，8K",
    cam:"大光圈淺景深，運動模糊或故意失焦，情緒化構圖",
    col:"暖橙青綠霓虹，重膠片色調，低飽和情緒感",
    neg:"過度清晰銳利、卡通、AI感、廉價感、文字水印"},

  // 自然曠野
  desert_lone:{n:"大漠孤鴻",mk:"outdoor_glow",
    char:"英氣孤傲，眼神遠眺地平線，如絲路旅人或大漠女俠，氣質野性自由",
    s:"廣袤沙漠，連綿沙丘，夕陽染紅天際線，一望無際的荒原，沙塵飛揚",
    o:"艷紅色/寶藍色/橙色等強對比色彩服飾，或波希米亞長裙，飄逸布料",
    prop:"無，或手持長布迎風飄動",
    fx:"沙塵粒子飛揚（sand particles flying），衣袂迎風飄動，夕陽god rays",
    l:"沙漠夕陽逆光，剪影效果，強烈暖橙金色，golden desert light",
    q:"長焦大景，人在沙丘中渺小壯麗，8K HDR，史詩電影感",
    cam:"長焦壓縮透視，人物在廣袤沙丘中形成強烈視覺張力",
    col:"暖橙金棕，強對比色彩服飾 vs 大地色背景",
    neg:"卡通、AI感、廉價感、現代建築、文字水印"},

  arctic_land:{n:"極北之境",mk:"snow_pure",
    char:"冷靜堅毅，眼神沉靜望遠，如探索極地的旅人，孤獨而美麗",
    s:"北歐雪地，冰川，白樺樹林，極光天空，積雪曠野，純淨冰雪世界",
    o:"純色厚重大衣，藏服/蒙服等民族特色服裝，或純白羽絨服，皮草領",
    prop:"無，或手持木質道具",
    fx:"雪花飄落（snowflakes falling），呼出白霧breath fog，極光aurora curtains",
    l:"冷藍漫射雪地光，極光色彩環境光，cold arctic light，低對比純淨感",
    q:"極地人像攝影，冷色調純淨，8K HDR，孤獨壯麗",
    cam:"全身大景突顯曠野，人物渺小在冰雪世界中",
    col:"純白冷藍銀，極簡冷色調",
    neg:"卡通、AI感、廉價感、暖色調、文字水印"},

  midsummer_sea:{n:"仲夏之海",mk:"outdoor_glow",
    char:"清純活力，自然燦爛笑容，如夏日海灘廣告代言人，健康美麗",
    s:"日落時分的海灘，金色波光粼粼，細白沙灘，海浪輕拍，天邊橙紅晚霞",
    o:"清新泳裝或白色/奶油色薄紗長裙，涼鞋或赤足，簡約夏日造型",
    prop:"無，或手持遮陽帽",
    fx:"逆光金色海面反射（golden ocean backlight），波光粼粼，髮絲逆光發光",
    l:"日落逆光，golden hour海灘光，warm backlight through hair",
    q:"夏日海灘大片，逆光攝影，清新自然，8K",
    cam:"逆光全身，或海浪邊半身，突顯逆光髮絲與波光",
    col:"橙金白藍，高亮度清新夏日色調",
    neg:"卡通、AI感、廉價感、陰天、文字水印"},

  // 都市生活流
  convenience_store:{n:"便利店物語",mk:"natural_clean",
    char:"可愛日常，自然親切，如日本街頭雜誌街拍，生活感十足",
    s:"日本都市街頭，7-11便利店，自動販賣機前，夜晚燈光透出的街邊，都市日常",
    o:"日常潮流私服，oversized T恤，迷你裙，球鞋，或制服風，日系街頭感",
    prop:"手持飲料罐或便利店袋子",
    fx:"便利店燈光暈（convenience store fluorescent glow），街道反光，夜晚散景",
    l:"便利店日光燈主光，街道霓虹輔光，spontaneous street photography light",
    q:"日系街頭攝影，膠片顆粒感，自然隨性，8K",
    cam:"半身自然姿態，便利店招牌為背景，生活感構圖",
    col:"日光燈白配街道暖橙，低飽和日系色調",
    neg:"過度精修、廉價感、AI感、卡通、文字水印"},

  rainy_night:{n:"雨夜漫步",mk:"hk_film",
    char:"憂鬱浪漫，情緒飽滿，如都市電影中的主角，迷離而有故事感",
    s:"都市繁華路口，紅綠燈霓虹，夜晚雨後積水路面，倒影清晰，霓虹光污染",
    o:"風衣外套，或簡約都市服裝，手持雨傘",
    prop:"手持透明雨傘或深色雨傘",
    fx:"地面積水霓虹倒影（neon reflection on wet pavement），雨絲效果，霓虹光暈",
    l:"路燈暖橙 + 信號燈紅綠交錯，積水反射光，rainy night neon lighting",
    q:"都市電影感人像，膠片色調，高對比光影，8K",
    cam:"低角度突顯地面倒影，或雨傘半遮臉構圖",
    col:"霓虹橙綠紅 vs 夜色深藍，強烈城市光污染色調",
    neg:"晴天場景、卡通、AI感、廉價感、文字水印"},

  forest:{n:"森林精靈仙境",mk:"xianxia",s:"古老魔法森林，高聳參天大樹，陽光從葉隙穿透形成光束，地面苔蘚花卉",o:"精靈風飄逸長裙，薄紗多層次，自然色調（草綠苔蘚藕粉），花環頭飾",fx:"螢火蟲粒子（firefly particles），花瓣飄落，god rays 森林光束",l:"ethereal forest light，god rays through canopy，soft morning mist",q:"奇幻自然仙境，Lord of the Rings精靈美學，超寫實攝影，夢幻散景 bokeh",neg:"都市場景、AI感、低畫質、文字水印"},

  velvet_boudoir:{n:"紅絲絨暗室",mk:"editorial",
    char:"high-end fashion portrait mood, confident and elegant, intimate editorial atmosphere, glamorous but tasteful",
    s:"dark vintage studio room with deep red velvet curtain on the left, charcoal wall panels, subtle golden highlights, moody luxury interior",
    o:"ivory white lace corset dress with structured bodice, layered chiffon mini skirt, delicate gold jewelry, elegant fashion styling",
    prop:"one hand gently near the lips, body slightly leaning beside the red velvet curtain, relaxed shoulders, direct eye contact",
    fx:"rich red velvet texture, soft hair movement, subtle film grain, warm highlights on skin, shallow depth of field",
    l:"dramatic warm side light from the front-left, deep soft shadows, cinematic low-key portrait lighting",
    q:"ultra realistic high-fashion editorial photography, 85mm portrait lens, f1.8, natural skin texture, premium magazine look, 8K",
    cam:"vertical half-body portrait, face sharp and centered, red velvet curtain as strong foreground frame",
    col:"deep burgundy, ivory white, warm gold, charcoal black, luxurious contrast",
    neg:"overly exposed styling, vulgar pose, cheap glamour, plastic skin, over-retouching, distorted body, hidden face, text watermark"},

  tang_night_water_dance:{n:"唐風夜遊水袖",mk:"tang",
    char:"graceful Tang dynasty dancer aura, joyful festival elegance, soft confident expression",
    s:"warm lantern-lit ancient Chinese night street, wooden balconies, glowing red lanterns, golden roofline, immersive historical travel-photo setting",
    o:"brilliant red-orange Tang hanfu with translucent silk sleeves, gold embroidery, ornate phoenix hair crown, dangling hair ornaments",
    prop:"wide sleeves lifted in a dance motion, one sleeve sweeping outward, elegant raised arm pose",
    fx:"water splash arcs and sparkling droplets around the dress, flowing silk ribbons, floating warm particles, dynamic fabric motion",
    l:"intense warm lantern light, orange-gold backlight, soft face fill, cinematic night festival lighting",
    q:"ultra realistic Tang dynasty travel photography, dynamic dance capture, high shutter detail, 8K HDR",
    cam:"wide horizontal or vertical full-body composition, strong motion in sleeves and skirt, face remains clear",
    col:"fiery red, orange gold, warm lantern yellow, festive high saturation",
    neg:"modern street signs, random tourists, blurry face, cartoon, low quality, watermark"},

  tekapo_stargaze_camp:{n:"星湖營火銀河",mk:"natural_clean",
    char:"warm natural travel portrait mood, peaceful smile, cozy night camping atmosphere",
    s:"Lake Tekapo New Zealand lakeshore at night, calm mirror lake, distant mountain silhouettes, pine trees, Milky Way stretching across the sky and reflected on the water",
    o:"soft cream knit sweater, cozy blanket or simple travel outfit, natural hair, relaxed outdoor styling",
    prop:"holding a dark camping mug beside a small stone-ring campfire, seated on a folding chair or blanket, looking back toward the camera",
    fx:"bright Milky Way stars, mirror reflection in the lake, warm campfire glow on the face, tiny sparks from the fire",
    l:"warm campfire key light on face, cool blue starlight ambient light, balanced night-sky exposure",
    q:"photorealistic astrophotography travel portrait, realistic stars, low noise, natural skin, 8K",
    cam:"wide environmental portrait, subject in lower foreground, lake and Milky Way dominate the background",
    col:"deep midnight blue, violet Milky Way, warm amber firelight, natural cinematic contrast",
    neg:"fake oversized stars, over-smoothed face, harsh flash, unreadable face, city skyline, watermark"},

  red_sword_princess:{n:"紅衣雙劍姬",mk:"warrior",
    char:"heroic ancient princess warrior aura, focused gaze, elegant but dangerous",
    s:"ancient palace rooftop or city wall at sunset, red flags blurred in the background, warm cloudy sky",
    o:"deep crimson embroidered hanfu battle robe with gold trim, ornate golden crown, long black hair flowing, refined court-warrior styling",
    prop:"dual swords pose, one sword raised behind the head and another sword crossing the foreground, body turned sideways, face looking back toward camera",
    fx:"flowing long hair, red sleeves in motion, subtle wind, shallow bokeh background",
    l:"soft sunset backlight, warm sky glow, gentle face fill, cinematic heroic portrait lighting",
    q:"ultra realistic wuxia fashion portrait, detailed embroidery, sharp face, cinematic 8K",
    cam:"medium close-up to three-quarter body, dynamic sword foreground, strong diagonal composition",
    col:"crimson red, warm gold, sunset peach, dark palace gray",
    neg:"wrong sword anatomy, deformed hands, face blocked by blade, cartoon, low quality, watermark"},

  dual_realm_xianxia:{n:"仙魔雙境對望",mk:"gothic",
    char:"epic dual-realm fantasy poster mood, one luminous immortal figure facing a dark powerful sorceress, dramatic destiny conflict",
    s:"floating celestial terrace between a bright heavenly realm and a dark cosmic vortex portal, ornate golden railings, clouds and distant towers",
    o:"front character in translucent white-blue xianxia gown with long ribbons, opposite character in dark purple-black ornate fantasy robe with jewel details",
    prop:"two-character composition, one figure seen from behind in white, one dark figure facing camera through the portal with one hand raised",
    fx:"massive black-purple swirling portal, gold-white heavenly light beams, flying silk ribbons, spark particles, magical energy arcs",
    l:"split lighting, left side bright golden heaven light, right side dark violet-red magical glow, high contrast cinematic poster lighting",
    q:"epic xianxia fantasy movie poster, ultra detailed, photorealistic fantasy realism, 8K HDR",
    cam:"vertical poster composition, full-body foreground figure and sharp face on the dark figure, layered depth",
    col:"white gold and pale blue versus black violet and crimson, luminous high fantasy palette",
    neg:"unreadable faces, messy text, extra limbs, random third person, cartoon, low quality, watermark"},

  white_tiger_moon_goddess:{n:"白虎月神",mk:"snow_pure",
    char:"serene moon goddess warrior aura, calm powerful gaze, sacred beast companion",
    s:"moonlit celestial palace above clouds, starry night sky, full moon, distant pagodas, icy mist",
    o:"white and silver xianxia gown with gold embroidery, translucent flowing sleeves, ornate tiger-themed shoulder armor, delicate jewelry",
    prop:"holding an elegant short sword or ritual dagger, one hand extended forward softly, standing tall with flowing ribbons",
    fx:"giant glowing white tiger spirit behind the subject, sparkling moon particles, silver ribbons floating, icy mist and cloud layers",
    l:"cool moonlight rim light, soft frontal face light, shimmering silver highlights on fabric",
    q:"ultra detailed fantasy realism, sacred beast poster, sharp facial identity, 8K HDR",
    cam:"vertical full-body hero composition, giant white tiger head fills background while subject remains clearly visible",
    col:"white, silver, pale gold, cool violet-blue moonlight",
    neg:"tiger covering face, aggressive gore, distorted animal anatomy, extra fingers, cartoon, watermark"},

  lavender_princess_party:{n:"粉紫公主派對",mk:"wedding",
    char:"luxury princess birthday portrait mood, sweet confident smile, sparkling royal party atmosphere",
    s:"lavender and rose-gold luxury party room, crystal chandelier, ornate sofa throne, pink roses, heart balloons, dessert table, candles",
    o:"lavender-pink glitter princess gown with lightweight lace sleeves, crystal embroidery, tiara crown, elegant high heels",
    prop:"seated on ornate lavender sofa, holding a champagne flute in one hand and a delicate royal scepter in the other",
    fx:"sparkling crystal reflections, glitter particles, rose-gold balloons, candle bokeh, chandelier prism highlights",
    l:"soft glamorous studio lighting, chandelier glow, pink-purple reflective fill, high-key luxury portrait lighting",
    q:"ultra realistic luxury birthday party editorial, rich detail, glossy fairy-tale styling, 8K",
    cam:"vertical full-body seated portrait, symmetrical throne-like composition, face clear and bright",
    col:"lavender, blush pink, rose gold, crystal white, warm candle gold",
    neg:"childlike proportions, messy decorations, cheap party look, overexposed face, watermark"},

  overhead_red_umbrella:{n:"俯拍紅傘飛袖",mk:"warrior",
    char:"dreamlike red hanfu dance from above, graceful and cinematic, quiet powerful expression",
    s:"gray stone-paved ancient courtyard seen from a high overhead viewpoint",
    o:"deep red embroidered hanfu with extremely long flowing sleeves and delicate lace outer layers, golden trim, ornate crown",
    prop:"holding a red oil-paper umbrella above the head, body turning in a dance pose, sleeves and ribbons spread outward like petals",
    fx:"multiple blurred red umbrellas passing in the foreground, long red fabric trails, wind motion, dramatic overhead geometry",
    l:"soft overcast daylight from above, gentle contrast, rich red fabric texture",
    q:"photorealistic overhead fashion travel shot, precise fabric motion, 8K, cinematic composition",
    cam:"90-degree top-down bird's-eye view, subject centered, red sleeves radiating across gray stone ground",
    col:"deep crimson red against muted gray stone, minimal elegant palette",
    neg:"side angle, cropped umbrella, face completely hidden, distorted body, low quality, watermark"},

  black_sword_citywall:{n:"黑衣城牆劍客",mk:"wuxia_sharp",
    char:"cold black-clad wuxia swordswoman aura, mysterious and swift, determined side glance",
    s:"massive gray ancient city wall and gate courtyard, overcast sky, stone stairs, empty cinematic historical plaza",
    o:"black hanfu swordsman robe with silver embroidery, long flowing black hair, slim silver hair ornaments, layered black ribbons",
    prop:"dynamic sword-drawing movement, one sword extended forward, another blade or scabbard trailing behind, body turning while running or lunging",
    fx:"black fabric ribbons whipping in the wind, subtle motion blur on trailing cloth, cold mist, dramatic empty space",
    l:"cool overcast daylight, soft gray ambient light, subtle rim light along hair and blade",
    q:"ultra realistic wuxia action photography, wide cinematic composition, detailed city wall texture, 8K",
    cam:"wide horizontal action shot, subject placed off-center with large gray city wall scale behind, face visible in three-quarter profile",
    col:"black, silver, stone gray, muted cold blue, restrained cinematic palette",
    neg:"modern buildings, crowded background, wrong sword direction, hidden face, deformed hands, cartoon, watermark"},

  lm_forbidden_city:{n:"紫禁城宮廷旅拍",mk:"gongting",
    char:"elegant imperial travel portrait mood, poised and noble, quiet confidence",
    s:"Forbidden City in Beijing, red palace walls, golden glazed roof tiles, carved marble railings, grand symmetrical palace courtyard",
    o:"refined modern hanfu or Ming-style court-inspired dress, rich red and gold silk, delicate embroidery, elegant hair ornaments",
    prop:"standing beside a red palace wall or marble railing, one hand softly touching the sleeve, calm direct gaze",
    fx:"soft golden palace dust glow, shallow depth of field, subtle wind in sleeves",
    l:"warm afternoon sunlight reflected from red walls, soft face fill, cinematic palace lighting",
    q:"photorealistic luxury travel editorial, model photoshoot at a real landmark, 8K HDR, natural skin texture",
    cam:"vertical three-quarter body portrait with recognizable palace architecture behind",
    col:"imperial red, warm gold, ivory, soft shadow contrast",
    neg:"tourist crowd, modern signs, cartoon, cheap costume, hidden face, watermark"},

  lm_wuzhen_water_town:{n:"烏鎮水鄉",mk:"natural_clean",
    char:"gentle poetic Jiangnan travel portrait mood, graceful and quiet",
    s:"Wuzhen water town, stone bridge, narrow canal, black-tile white-wall houses, wooden riverside walkway, misty morning atmosphere",
    o:"pale blue or ivory qipao-inspired dress or simple hanfu, light silk shawl, minimal jewelry",
    prop:"holding a paper umbrella or standing by the canal railing, soft side glance",
    fx:"misty water reflections, willow branches, light drizzle, cinematic bokeh",
    l:"soft overcast morning light, low contrast, watercolor-like atmosphere",
    q:"photorealistic Jiangnan travel photography, elegant model portrait, 85mm lens, 8K",
    cam:"medium full-body portrait with bridge and canal depth lines",
    col:"ink gray, pale blue, ivory, muted green, poetic low saturation",
    neg:"neon colors, modern cars, tourist crowd, cartoon, low quality, watermark"},

  lm_taipei_101:{n:"台北101夜景",mk:"editorial",
    char:"modern Asian city fashion editorial mood, confident and sleek",
    s:"Taipei 101 skyline at night, rooftop terrace or urban overlook, glowing city lights, wet pavement reflections",
    o:"black or silver high-fashion evening dress, tailored coat, minimal luxury jewelry, modern styling",
    prop:"standing near glass railing, hair moved by city wind, looking toward camera",
    fx:"neon bokeh, city light reflections, subtle lens flare, glossy night atmosphere",
    l:"cool city ambient light with warm face key light, cinematic rooftop lighting",
    q:"ultra realistic urban fashion travel shoot, premium magazine look, 8K",
    cam:"vertical full-body or half-body portrait with Taipei 101 clearly visible",
    col:"deep blue night, silver, black, cyan city lights, warm skin highlights",
    neg:"blurry skyline, distorted tower, cheap nightclub look, hidden face, watermark"},

  lm_taipei_palace_museum:{n:"台北故宮博物院",mk:"gongting",
    char:"refined museum travel portrait mood, cultured and elegant",
    s:"National Palace Museum Taipei, green tiled roof, white stone stairs, classical palace facade, quiet museum plaza",
    o:"elegant emerald, ivory, or ink-blue qipao/hanfu hybrid dress, refined jade-like accessories",
    prop:"standing on stone steps with graceful posture, hands lightly folded or holding a small fan",
    fx:"soft architectural depth, subtle jade-green highlights, gentle breeze in fabric",
    l:"soft daylight, clean museum facade light, flattering natural portrait illumination",
    q:"photorealistic cultural travel editorial, sophisticated model photoshoot, 8K",
    cam:"symmetrical medium full-body composition with museum roofline visible",
    col:"jade green, ivory, ink blue, warm stone gray",
    neg:"crowd, museum interior labels, text signs, cartoon, low quality, watermark"},

  lm_eiffel_tower:{n:"巴黎鐵塔",mk:"editorial",
    char:"romantic Paris fashion travel portrait, relaxed luxury confidence",
    s:"Paris street or Trocadero view with the Eiffel Tower in the background, golden hour sky, classic Paris architecture",
    o:"elegant couture dress or chic trench coat with silk scarf, refined European styling",
    prop:"walking naturally or leaning on a stone railing, soft smile, wind catching hair",
    fx:"golden lens flare, Paris street bokeh, subtle film grain",
    l:"golden hour backlight with soft face fill, warm romantic editorial lighting",
    q:"photorealistic Paris fashion travel photography, magazine cover quality, 8K",
    cam:"vertical full-body street portrait with Eiffel Tower clearly framed",
    col:"cream, black, warm gold, soft Parisian pastels",
    neg:"distorted Eiffel Tower, tourist crowd, cartoon, overexposed sky, watermark"},

  lm_notre_dame:{n:"巴黎聖母院",mk:"hk_film",
    char:"classic European cinematic portrait mood, mysterious and elegant",
    s:"Notre-Dame de Paris exterior near the Seine River, Gothic arches, stone facade, old Paris street atmosphere",
    o:"dark velvet dress, vintage coat, lace gloves or delicate jewelry, old-world editorial styling",
    prop:"standing near stone railing or walking along the riverside, contemplative side glance",
    fx:"soft fog, wet cobblestone reflections, faint warm street lamps, film grain",
    l:"blue-hour cinematic light with warm streetlamp accents, gentle face highlight",
    q:"photorealistic vintage European travel portrait, cinematic film still, 8K",
    cam:"medium portrait with Gothic architecture visible and depth in the background",
    col:"stone gray, deep navy, burgundy, warm amber accents",
    neg:"modern cars, harsh daylight, tourist crowd, cartoon, watermark"},

  lm_greek_temple:{n:"希臘神殿",mk:"angel_holy",
    char:"Mediterranean goddess travel portrait mood, serene and radiant",
    s:"ancient Greek temple ruins with marble columns, Aegean Sea light, sunlit stone steps, open blue sky",
    o:"flowing white Grecian dress with gold belt, soft draped fabric, delicate golden jewelry",
    prop:"standing between marble columns, one hand touching the column, dress flowing in sea breeze",
    fx:"sunlit dust particles, fabric motion, bright Mediterranean glow",
    l:"clear warm sunlight, soft golden rim light, clean face illumination",
    q:"photorealistic goddess-style landmark travel shoot, elegant high-fashion realism, 8K",
    cam:"full-body vertical composition with temple columns as strong lines",
    col:"white marble, gold, turquoise sky, warm beige stone",
    neg:"fake ruins, modern buildings, cartoon, low quality, hidden face, watermark"},

  lm_egypt_pyramid_sphinx:{n:"金字塔人面獅身",mk:"india_bold",
    char:"ancient Egyptian queen travel portrait mood, powerful and luxurious",
    s:"Giza pyramids and Great Sphinx at sunset, desert sand, warm golden atmosphere, epic ancient landmark scale",
    o:"gold and black Egyptian-inspired gown, jeweled collar, arm cuffs, elegant headpiece, flowing flowing cape",
    prop:"standing on desert foreground, one hand holding a gold staff or flowing veil, regal posture",
    fx:"sand particles in sunset light, shimmering gold jewelry, heat haze",
    l:"low golden desert sun, dramatic rim light, warm face fill",
    q:"photorealistic ancient luxury landmark editorial, cinematic 8K HDR",
    cam:"full-body hero portrait with pyramids and Sphinx clearly visible",
    col:"sand gold, black, lapis blue, warm orange sunset",
    neg:"tour buses, crowd, fake cartoon pyramids, distorted face, watermark"},

  lm_sahara_desert:{n:"撒哈拉大沙漠",mk:"outdoor_glow",
    char:"free-spirited desert travel fashion mood, solitary and cinematic",
    s:"Sahara desert dunes at sunset, endless golden sand waves, distant horizon, wind-carved dune patterns",
    o:"flowing red, cobalt blue, or ivory long dress with lightweight fabric, desert scarf, refined bohemian jewelry",
    prop:"walking along dune ridge, fabric trailing in the wind, looking back toward camera",
    fx:"wind-blown sand particles, long dress motion, golden haze",
    l:"golden hour desert backlight, warm rim light through hair, soft face fill",
    q:"photorealistic desert travel editorial, epic scale, 8K",
    cam:"wide full-body landscape portrait, subject small but clear against huge dunes",
    col:"golden sand, warm orange sky, strong dress color contrast",
    neg:"modern buildings, vehicles, hidden face, cartoon, low quality, watermark"},

  lm_dunhuang_mogao:{n:"敦煌莫高窟",mk:"tang",
    char:"Dunhuang flying apsara travel portrait mood, elegant and dynamic",
    s:"Mogao Caves Dunhuang desert cliff, ancient grotto facade, warm sand-colored stone, Silk Road atmosphere",
    o:"Dunhuang-inspired flying apsara dress, orange-red silk ribbons, gold embroidery, jeweled head ornaments",
    prop:"dance pose with long silk ribbons flowing around the body, one arm lifted gracefully",
    fx:"flying silk ribbons, golden dust, mural-inspired color glow, desert wind",
    l:"warm desert afternoon light, golden side light, soft face fill",
    q:"photorealistic Dunhuang travel fashion shoot, dynamic fabric capture, 8K",
    cam:"vertical full-body dance composition with cave cliffs visible",
    col:"sand gold, cinnabar red, turquoise accents, warm mural palette",
    neg:"damaged face, messy ribbons covering face, tourist crowd, cartoon, watermark"},

  lm_himalayas:{n:"喜馬拉雅雪峰",mk:"snow_pure",
    char:"high-altitude expedition fashion portrait mood, pure and resilient",
    s:"Himalayan snow mountains, dramatic cloud sea, prayer flags, rocky highland viewpoint, vast alpine scale",
    o:"white or deep red winter cloak with Tibetan-inspired trim, warm layered outfit, silver jewelry",
    prop:"standing beside prayer flags, cloak blowing in strong mountain wind, calm gaze",
    fx:"snow dust, cloud sea layers, fluttering prayer flags, crisp mountain air",
    l:"cold high-altitude sunlight, soft snow reflection fill, sharp rim light",
    q:"photorealistic mountain travel portrait, epic landscape scale, 8K HDR",
    cam:"wide vertical portrait with towering snowy peaks behind",
    col:"snow white, icy blue, prayer-flag colors, deep red fabric accent",
    neg:"ski resort crowd, modern city, hidden face, low quality, watermark"},

  lm_arctic_aurora:{n:"北極極光",mk:"snow_pure",
    char:"dreamlike Arctic aurora portrait, quiet wonder and cinematic solitude",
    s:"Arctic snowfield under vivid northern lights, icy lake or snowy forest, starry polar night",
    o:"white fur-trimmed winter coat or silver-blue gown, warm elegant styling, soft gloves",
    prop:"standing or sitting on snow with face turned toward camera, one hand lightly holding the coat collar",
    fx:"green and violet aurora curtains, sparkling snow, breath mist, starry sky",
    l:"cool aurora ambient light with soft warm lantern or face fill",
    q:"photorealistic aurora travel portrait, realistic night exposure, 8K",
    cam:"vertical environmental portrait with aurora dominating sky",
    col:"deep navy, emerald green, violet, snow white, soft warm skin glow",
    neg:"fake neon sky, unreadable face, harsh flash, cartoon, watermark"},

  lm_antarctic_ice:{n:"南極冰原",mk:"snow_pure",
    char:"pure polar expedition fashion mood, elegant and serene",
    s:"Antarctic ice field, blue icebergs, frozen ocean, vast white horizon, clean polar atmosphere",
    o:"long white or pale blue insulated couture coat, silver boots, minimal icy jewelry",
    prop:"standing on safe ice foreground, coat moving in wind, looking calmly at camera",
    fx:"blue ice reflections, blowing snow, crystalline frost particles",
    l:"soft polar daylight, bright snow bounce fill, cool cinematic contrast",
    q:"photorealistic polar travel fashion editorial, pristine detail, 8K HDR",
    cam:"wide full-body portrait with enormous iceberg scale behind",
    col:"ice blue, pure white, silver, pale cyan",
    neg:"unsafe water pose, crowded expedition ship, hidden face, cartoon, watermark"},

  lm_shanghai_bund:{n:"上海灘外灘",mk:"hk_film",
    char:"Shanghai cinematic glamour portrait, modern retro elegance",
    s:"Shanghai Bund at night, Huangpu River, Oriental Pearl Tower and Pudong skyline glowing across the water, wet promenade reflections",
    o:"modern qipao or black evening dress with vintage Shanghai styling, pearl earrings, elegant heels",
    prop:"standing by riverside railing, hair moved by river breeze, confident side pose",
    fx:"neon skyline bokeh, wet stone reflections, subtle film grain",
    l:"cool city night light mixed with warm key light on face, cinematic urban glow",
    q:"photorealistic Shanghai travel fashion editorial, movie still quality, 8K",
    cam:"half-body or full-body portrait with Bund skyline clearly visible",
    col:"black, pearl white, neon magenta, cyan, warm amber",
    neg:"distorted skyline, crowd, cheap nightclub look, hidden face, watermark"},

  lm_oriental_pearl_lujiazui:{n:"東方明珠陸家嘴",mk:"editorial",
    char:"futuristic Shanghai luxury city portrait, sleek and powerful",
    s:"Lujiazui financial district in Shanghai at night, Oriental Pearl Tower close and recognizable, glass skyscrapers, elevated walkway, neon reflections",
    o:"silver-black couture evening dress or sharp modern suit dress, metallic accessories, polished high-fashion styling",
    prop:"standing on a glass skywalk or riverside viewpoint, confident posture, city wind in hair",
    fx:"glass reflections, neon bokeh, light trails, glossy futuristic urban atmosphere",
    l:"cool cyan skyscraper light with controlled warm key light on the face, cinematic high-end city lighting",
    q:"photorealistic futuristic city travel editorial, luxury model photoshoot, 8K HDR",
    cam:"vertical full-body portrait with Oriental Pearl Tower and skyscrapers clearly framed behind",
    col:"cyan, steel silver, black, magenta neon, polished glass highlights",
    neg:"distorted tower, unreadable face, crowded tourist snapshot, cheap sci-fi look, watermark"},

  lm_tokyo_tower:{n:"東京鐵塔",mk:"hk_film",
    char:"Japanese night city portrait mood, nostalgic and stylish",
    s:"Tokyo Tower glowing at night, quiet Tokyo street, rain-slick pavement, warm tower lights and city bokeh",
    o:"chic trench coat, black dress, or modern street-fashion outfit, subtle jewelry",
    prop:"walking with umbrella or standing near street crossing, natural candid pose",
    fx:"rain reflections, film grain, soft lens flare, neon bokeh",
    l:"warm Tokyo Tower backlight with cool street fill, cinematic night photography",
    q:"photorealistic Japanese city travel portrait, Fuji film-inspired look, 8K",
    cam:"vertical street portrait with Tokyo Tower framed behind subject",
    col:"warm orange tower glow, deep blue night, black, soft skin tones",
    neg:"crowded tourist shot, distorted tower, hidden face, cartoon, watermark"},

  lm_tokyo_skytree_shibuya:{n:"晴空塔澀谷街頭",mk:"y2k",
    char:"energetic Tokyo street-fashion portrait, youthful and cinematic",
    s:"Shibuya crossing or Tokyo street with Skytree-inspired skyline glow, giant screens, neon signs, busy urban energy",
    o:"stylish streetwear, mini skirt or oversized jacket, glossy boots, modern accessories",
    prop:"walking through crossing with motion around her, subject sharp and confident",
    fx:"motion-blurred crowd, neon reflections, holographic city light, cinematic rain gloss",
    l:"neon city light, screen glow on face, controlled editorial flash fill",
    q:"photorealistic Tokyo street fashion editorial, dynamic city movement, 8K",
    cam:"wide vertical street composition, subject sharp amid moving background",
    col:"cyan, magenta, electric blue, black, glossy highlights",
    neg:"unreadable face, messy text signs on subject, deformed pedestrians, cartoon, watermark"},

  lm_osaka_castle:{n:"大阪城櫻花",mk:"outdoor_glow",
    char:"soft Japanese spring travel portrait, graceful and bright",
    s:"Osaka Castle during cherry blossom season, stone walls, moat, blooming sakura trees, clear spring sky",
    o:"pastel kimono, light yukata, or soft spring dress with subtle Japanese accessories",
    prop:"standing under sakura branches or holding a small fan, gentle smile",
    fx:"falling cherry blossoms, soft pink bokeh, spring breeze in sleeves",
    l:"warm spring daylight, soft diffused face light, delicate highlights",
    q:"photorealistic Osaka travel portrait, elegant sakura editorial, 8K",
    cam:"vertical full-body or half-body portrait with Osaka Castle recognizable behind",
    col:"sakura pink, ivory, castle green roof, soft blue sky",
    neg:"crowded tourist snapshot, oversaturated pink, cartoon, hidden face, watermark"},
  // 動漫遊戲致敬 / 角色原型（安全改寫為風格，不直接複製特定角色）
  ag_elf_mage_journey:{n:"銀髮旅途魔法師",mk:"elf_magic",char:"adult serene silver-haired elf mage traveler, gentle but ancient wisdom, quiet emotional fantasy road-movie aura, not a childlike body or face",o:"cream-white mage cloak, dark inner dress, leather belt, small travel staff, simple boots, delicate silver hair ornaments",s:"quiet medieval town road, forest path and distant ruins, soft morning mist, peaceful travel atmosphere",fx:"subtle floating magic glyphs, pale blue mana particles, small spell book pages turning in the air",l:"soft overcast daylight with gentle rim light, calm low-contrast fantasy cinematography",cam:"three-quarter portrait, walking pose, cloak moving in wind, face clearly visible",col:"muted cream, sage green, silver and pale blue palette",q:"premium live-action anime-inspired fantasy portrait, realistic fabric texture, cinematic 8K detail",neg:"exact copyrighted character face, childlike body, school-age appearance"},
  ag_cosplay_muse:{n:"時尚 COS 甜心",mk:"korean_dewy",char:"adult cheerful cosplay fashion muse, playful confident expression, bright creative studio energy",o:"layered cosplay-inspired outfit with wig styling, cute accessories, fashionable ribbons, polished convention-photo styling",s:"colorful dressing-room studio with clothing racks, mirrors, beauty lights and costume details",fx:"sparkle stickers, soft bokeh, pastel studio reflections, playful pop graphics without readable text",l:"bright softbox lighting, clean beauty light, pastel highlights",cam:"half-body portrait, trying on accessories, direct eye contact, face clear",col:"pink, peach, white and aqua pastel palette",q:"high-end cosplay editorial photo, realistic skin, detailed hair strands, 8K HDR",neg:"overly cute styling, overly exposed styling, cheap cosplay"},
  ag_elegant_assassin_mother:{n:"優雅刺客夫人",mk:"retro_hollywood",char:"adult elegant assassin lady with warm domestic grace and lethal composure, poised and refined",o:"black evening dress with red inner lining, rose choker, hidden stiletto weapon, pearl earrings, sleek gloves",s:"luxury apartment hallway or rose garden at dusk, elegant spy-thriller atmosphere",fx:"subtle red rose petals, glinting blade highlight, cinematic suspense shadows",l:"warm tungsten interior light mixed with cool moon rim light",cam:"full-body poised stance, one hand near the hidden weapon, graceful posture, face readable",col:"black, wine red, ivory and gold",q:"premium spy-drama live-action portrait, elegant realistic styling, 8K HDR",neg:"exact copyrighted character face, gore"},
  ag_red_blue_pilot_duo:{n:"紅藍機甲駕駛雙姬",mk:"cyber_idol",char:"adult sci-fi pilot heroine pair concept, red and blue emotional contrast, dramatic mecha-hangar tension",o:"sleek white futuristic pilot suits with red and blue accent panels, sculptural armor seams, clean gloves",s:"minimal white mecha hangar, giant robot silhouettes, luminous cockpit bay",fx:"transparent HUD overlays, red-blue energy reflections, mechanical steam and lens flare",l:"cold laboratory light with red-blue split lighting",cam:"two-character poster composition or single model with mirrored red-blue styling, strong eye contact",col:"white, scarlet red, electric blue and black",q:"realistic anime-inspired sci-fi fashion editorial, sharp 8K detail",neg:"overly cute styling, exact copyrighted character face"},
  ag_thunder_shogun:{n:"雷電御座女將",mk:"xianxia",char:"adult thunder shrine general, calm absolute authority, divine warrior queen aura",o:"purple and white ceremonial battle kimono armor, ornate obi, electro-themed hair ornament, elegant katana",s:"storm-lit shrine courtyard with torii gates, purple thunder clouds and polished stone floor",fx:"violet lightning arcs, glowing sacred symbols, blade charged with electric energy",l:"dramatic purple storm light, sharp rim light, rain-slick reflections",cam:"front-facing heroic stance, hand on sword hilt, strong centered composition",col:"violet, white, black, gold and electric blue",q:"premium live-action game-inspired fantasy poster, realistic silk and armor, 8K HDR",neg:"exact copyrighted character face"},
  ag_fox_shrine_lady:{n:"粉髮狐巫女",mk:"fox",char:"adult fox shrine priestess, charming intellectual smile, playful sacred-and-glamorous aura without changing identity",o:"pink-white shrine maiden inspired robe, fox-ear hair ornaments, gold bells, flowing sleeves",s:"red torii shrine at twilight with lanterns, sacred courtyard and cherry petals",fx:"floating fox-fire wisps, paper talismans, soft golden spiritual glow",l:"warm lantern light with pink dusk sky and soft rim light",cam:"half-body portrait, one sleeve lifted, fox-fire near hand, face unobstructed",col:"pink, white, vermilion and gold",q:"high-end game-inspired shrine fantasy portrait, detailed silk, 8K HDR",neg:"exact copyrighted character face"},
  ag_kafka_noir:{n:"星際黑衣女獵手",mk:"vampire_lady",char:"adult mature sci-fi noir hunter, dangerous elegance, calm smile, hypnotic femme-fatale energy",o:"burgundy long coat, black leather gloves, tailored bodysuit, futuristic sunglasses or hair accessory, luxury tactical details",s:"neon spaceport black market, rain-slick alley, starship lights in background",fx:"purple-red holographic threads, gunmetal reflections, cinematic neon smoke",l:"low-key noir lighting, magenta-blue neon rim light",cam:"three-quarter walking pose, one hand adjusting glove, face clear and confident",col:"burgundy, black, violet, neon blue",q:"realistic sci-fi game editorial, premium texture, 8K HDR",neg:"exact copyrighted character face"},
  ag_acheron_void:{n:"虛無紫刃旅人",mk:"fallen_angel",char:"adult void swordswoman traveler, silent melancholic power, lonely cosmic road aura",o:"dark layered coat with white-violet accents, long katana, asymmetrical high-fashion battle outfit",s:"rainy cosmic highway, violet nebula sky, empty reflective ground",fx:"black-violet void blade trail, red lightning fissures, drifting memory fragments",l:"cold rain light with purple rim and crimson highlights",cam:"dynamic side stance with blade drawn, hair and coat moving, face visible",col:"black, violet, white, deep red",q:"cinematic dark sci-fi fantasy poster, ultra-detailed, 8K HDR",neg:"exact copyrighted character face"},
  ag_firefly_mecha:{n:"螢火機甲少女",mk:"cyber_idol",char:"adult gentle mecha heroine, fragile warmth paired with powerful armor, hopeful starry mood",o:"teal-white lightweight exosuit dress armor, glowing wing-like mechanical fins, clean futuristic boots",s:"starship observation deck, meteor lights and distant planet glow",fx:"green firefly particles, transparent armor energy wings, soft sci-fi holograms",l:"soft teal glow with warm face light and starry backlight",cam:"standing three-quarter pose, one hand reaching forward, face bright and readable",col:"teal, white, silver, soft gold",q:"realistic anime-inspired sci-fi portrait, delicate armor details, 8K HDR",neg:"overly cute styling, exact copyrighted character face"},
  ag_nikke_tactical:{n:"戰術機甲偶像",mk:"runway_supermodel",char:"adult glamorous tactical android heroine, confident action-game cover energy",o:"futuristic tactical jacket, armored corset-like vest over full coverage bodysuit, high boots, sci-fi headset, prop rifle held safely",s:"neon industrial hangar, city ruins or battle command deck",fx:"muzzle-light glow without violence, HUD interface, sparks and smoke, mechanical drones",l:"hard cinematic key light with neon blue-orange rim lighting",cam:"game-poster stance, weapon angled downward, confident gaze, face visible",col:"black, white, neon blue, orange accents",q:"AAA game promotional key art style, realistic materials, 8K HDR",neg:"graphic violence, exact copyrighted character face"},
  ag_fan_kunoichi:{n:"火焰扇舞忍姬",mk:"tang",char:"adult fiery fan dancer fighter, confident graceful martial-arts showmanship",o:"red-and-white kunoichi dance-fighter outfit, large folding fans, gold hair ornament, flowing sash",s:"festival stage or wooden dojo at night, lanterns and sparks",fx:"fan-shaped flame trails, swirling petals, dramatic motion blur",l:"warm stage lantern light with hot rim light",cam:"dynamic fan-dance pose, one fan open near shoulder, full body visible",col:"red, white, gold and warm amber",q:"live-action arcade fighting heroine poster, crisp motion, 8K HDR",neg:"exact copyrighted character face"},
  ag_blue_qipao_fighter:{n:"藍色旗袍武術家",mk:"wuxia_sharp",char:"adult disciplined martial-arts queen, proud heroic energy, classic arcade-fighter silhouette",o:"blue qipao-inspired fighting dress with gold trim, white combat boots, wrist bracers, twin-bun hair styling",s:"urban martial arts arena, Chinese street gate, evening festival lights",fx:"blue chi energy, spinning kick motion lines, dust and silk ribbon movement",l:"bright action key light with cool blue rim",cam:"high kick or grounded fighting stance, face clear, athletic posture",col:"royal blue, gold, white, red accents",q:"realistic martial arts game poster, dynamic anatomy, 8K HDR",neg:"exact copyrighted character face"},
  ag_jojo_high_fashion:{n:"JOJO 高時裝姿勢",mk:"editorial",char:"adult high-fashion comic heroine, flamboyant confidence, sculptural dramatic pose",o:"bold avant-garde couture suit or dress, geometric accessories, sharp shoulder lines, luxurious patterned fabric",s:"colorful editorial studio with manga-like dramatic lighting, marble floor or surreal runway",fx:"graphic speed lines, jewel-like highlights, stylized aura shapes, no readable text",l:"high-contrast fashion lighting with saturated colored gels",cam:"extreme fashion pose with arched body line and expressive hands, face visible",col:"emerald, magenta, gold, black, high saturation",q:"live-action editorial with comic-book drama, crisp couture details, 8K HDR",neg:"exact copyrighted character face"},
  ag_card_magic_girl:{n:"魔法封印少女",mk:"magic_girl",char:"adult magical-card heroine, sweet courageous innocence expressed through styling, not childlike or youth-coded",o:"pink-white magical dress, wing-like cape, ribbon gloves, star wand, ornate hair bow",s:"dreamy floating library or pastel sky temple filled with glowing cards",fx:"glowing magic cards, feather particles, pink star trails, soft sparkles",l:"soft pastel key light, glowing backlight, magical bloom",cam:"full-body floating pose holding wand, face bright and clear",col:"pink, white, gold, sky blue",q:"premium magical girl live-action fantasy portrait, delicate fabric, 8K HDR",neg:"childlike body, overly cute styling, exact copyrighted character face"},
  ag_moon_sailor_queen:{n:"月光水手女王",mk:"angel_holy",char:"adult moon sailor queen, noble romantic guardian energy, celestial palace aura",o:"white and navy sailor-inspired royal gown, moon crown, long gloves, crescent jewelry",s:"moonlit crystal palace, starry sky and silver stairs",fx:"crescent moon halo, sparkling stardust, soft planetary glow",l:"silver moonlight with pearly face light",cam:"elegant guardian pose, hand raised with moonlight, face clear",col:"white, navy, silver, gold, pale pink",q:"realistic celestial anime-inspired princess portrait, 8K HDR",neg:"overly cute styling, exact copyrighted character face"},
  ag_crimson_lolita_doll:{n:"真紅古典蘿莉塔",mk:"qing_court",char:"adult classical lolita doll queen, aristocratic porcelain elegance, refined and solemn",o:"crimson velvet lolita dress, oversized bow, lace bonnet, layered skirt, antique brooch",s:"European manor room, velvet curtains, antique tea table and dollhouse details",fx:"floating rose petals, antique dust sparkle, soft porcelain glow",l:"warm window light with moody aristocratic shadows",cam:"seated royal portrait, hands folded, face clear and doll-like but adult",col:"crimson, ivory, antique gold, dark wood",q:"luxury gothic lolita studio portrait, detailed velvet and lace, 8K HDR",neg:"childlike body, exact copyrighted character face"},
  ag_silver_lolita_doll:{n:"水銀哥德蘿莉塔",mk:"gothic",char:"adult gothic lolita doll queen, cold pride and fragile darkness, dramatic aristocratic aura",o:"black and silver layered lolita gown, feather-like sleeves, lace bonnet, silver hair accessories",s:"moonlit European hall, black roses, old mirror and candlelight",fx:"black feathers, silver dust, cracked mirror reflections",l:"cool moonlight with candle rim highlights",cam:"standing portrait beside mirror, one hand holding rose, face visible",col:"black, silver, ivory, deep violet",q:"premium gothic lolita fashion portrait, ornate lace detail, 8K HDR",neg:"childlike body, exact copyrighted character face"},
  ag_psychic_tornado:{n:"戰慄綠影超能力者",mk:"elf_magic",char:"adult compact psychic queen, fierce pride and floating supernatural energy, not childlike",o:"black sculptural mini dress with green accents, high boots, floating hair styling",s:"destroyed city skyline with objects suspended in the air",fx:"green psychic vortex, levitating debris, circular energy rings",l:"green supernatural rim light with stormy daylight",cam:"floating full-body pose, arms crossed or hand extended, face clear",col:"black, emerald green, grey storm tones",q:"realistic superhero anime-inspired action poster, 8K HDR",neg:"childlike body, exact copyrighted character face"},
  ag_psychic_blizzard:{n:"地獄女王風衣",mk:"noir_minimal",char:"adult elegant psychic mafia queen, composed and icy authority, urban night confidence",o:"long black fur-collar coat, fitted dark dress or tailored suit, heels, emerald jewelry",s:"night city rooftop or luxury lounge with storm clouds",fx:"cold wind spirals, floating glass shards, subtle psychic pressure waves",l:"cool blue city light with soft green rim highlight",cam:"standing full-body pose, coat blowing dramatically, face clear",col:"black, emerald, icy blue, grey",q:"premium urban fantasy portrait, cinematic 8K detail",neg:"exact copyrighted character face"},
  ag_soul_reaper_glam:{n:"成熟死神副官",mk:"luxury_glam",char:"adult mature soul-reaper officer, relaxed confidence and spiritual pressure, elegant glamorousity with refined coverage",o:"black kimono-inspired battle robe with tasteful elegant neckline, white sash, sword at waist, subtle teardrop beauty mark styling",s:"moonlit spiritual courtyard, paper doors and dark cherry trees",fx:"purple spiritual aura, drifting black petals, sword glint",l:"moonlight with warm paper-lantern fill",cam:"three-quarter portrait, one hand on sword, face clear, confident gaze",col:"black, white, violet, warm lantern gold",q:"high-end supernatural samurai portrait, realistic silk, 8K HDR",neg:"overly exposed styling, exact copyrighted character face"},
  ag_dark_skin_cat_warrior:{n:"小麥色貓系忍者",mk:"outdoor_glow",char:"adult dark-skinned feline-speed warrior, athletic, sunlit, wild graceful confidence",o:"sleek black sleeveless backless-inspired combat outfit with full coverage, golden accessories, fitted boots",s:"ancient rooftop at sunset or moonlit training ground",fx:"speed afterimages, cat-like purple energy, dust trails",l:"golden sunset rim light on warm skin, dynamic action light",cam:"low-angle sprinting or crouched action pose, face readable",col:"black, gold, warm brown, violet accents",q:"realistic action anime-inspired portrait, athletic motion, 8K HDR",neg:"exact copyrighted character face"},
  ag_pirate_empress:{n:"海賊女帝姿勢",mk:"india_bold",char:"adult pirate empress, proud untouchable beauty, regal disdain pose with elegant dominance",o:"long red or purple high-slit empress gown, snake jewelry, gold earrings, flowing cape, ornate heels",s:"marble palace terrace overlooking ocean, pirate banners and tropical sky",fx:"serpent aura, rose petals, heat shimmer, royal spotlight",l:"warm tropical sun with glossy fashion rim light",cam:"iconic backward-leaning disdain pose, elongated silhouette, face visible and commanding",col:"purple, red, gold, ivory",q:"luxury pirate-empress fashion poster, realistic fabric movement, 8K HDR",neg:"exact copyrighted character face"},
  ag_white_bride_fantasy:{n:"純白花嫁幻想",mk:"wedding",char:"adult pure white fantasy bride, ethereal calm and sacred romantic beauty",o:"dreamy white bridal gown, feather veil, lace gloves, pearl crown, flowing translucent train",s:"white rose chapel garden, cloud-like curtains and pale marble floor",fx:"soft feathers, pearl sparkles, gentle white floral aura",l:"high-key soft white light, angelic backlight, creamy highlights",cam:"full-body bridal portrait, veil not covering key face features",col:"white, ivory, pearl, pale gold",q:"premium bridal fantasy photography, detailed lace, 8K HDR",neg:"revealing wardrobe, hidden face"},
  ag_white_angel_lounge:{n:"純白天使睡衣風",mk:"angel_holy",char:"pure white angelic lounge portrait, soft serene airy mood, elegant lifestyle editorial feeling",o:"soft white satin lounge gown with modest coverage, feather robe, pearl straps, delicate slippers",s:"bright white bedroom studio with gauze curtains, feathers and morning light",fx:"tiny white feathers, halo-like lens bloom, soft floating dust",l:"morning window light, white bounce fill, gentle high-key glow",cam:"seated relaxed pose, shoulders natural, face clear, tasteful editorial framing",col:"white, pearl, pale blush, soft cream",q:"tasteful luxury angel lifestyle portrait, realistic fabric, 8K HDR",neg:"overly exposed styling, overly cute styling, hidden face"},
  ag_contrast_sailor:{n:"反差水手時裝",mk:"soft_daily",char:"sailor-inspired fashion muse, clean nautical styling, confident editorial attitude, polished magazine interpretation",o:"navy-and-white sailor-inspired fashion outfit, opaque layered top, structured navy collar, ribbon tie, pleated skirt styling, polished editorial fabric layers",s:"clean pastel studio or seaside boardwalk at golden hour",fx:"soft breeze, ribbon movement, glossy fashion highlights",l:"bright editorial light with gentle blue-white reflections",cam:"standing fashion pose, one hand holding ribbon, face clear",col:"navy, white, soft blue, blush pink",q:"tasteful fashion editorial, realistic fabric layers, 8K HDR",neg:"classroom-themed styling, costume parody, unsafe styling, hidden face"},
  ag_contrast_maid:{n:"反差女僕大小姐",mk:"royal_princess",char:"adult contrast maid-lady concept, sweet but confident aristocratic service fantasy, polished studio mood",o:"black-and-white luxury maid-inspired dress, lace apron, large bow, satin gloves, ornate headpiece",s:"European tea room studio, chandelier, roses and porcelain tea set",fx:"sparkling dust, rose petals, polished gold reflections",l:"soft beauty light with chandelier sparkle",cam:"seated tea-service pose, elegant hands, face clear",col:"black, white, pink, antique gold",q:"high-end lolita-maid fashion portrait, detailed lace, 8K HDR",neg:"overly cute styling, overly provocative styling"},
  ag_demon_contrast:{n:"惡魔反差穿搭",mk:"succubus_alluring",char:"adult playful demon-fashion muse, cute and dangerous contrast, mischievous smile",o:"black-red demon-inspired fashion outfit with horns, small tail accessory, corset-shaped bodice over full coverage dress, tall boots",s:"red velvet studio or moonlit gothic room",fx:"tiny bat silhouettes, red spark particles, soft infernal glow",l:"alluring dark lighting with red rim light and clear face light",cam:"standing playful pose, one hand near horn accessory, face visible",col:"black, red, wine, warm gold",q:"tasteful fantasy fashion portrait, realistic styling, 8K HDR",neg:"overly exposed styling, overly cute styling"},
  ag_leather_strappy_couture:{n:"漆皮高訂女王",mk:"gothic",char:"adult leather fashion queen, dangerous high-fashion dominance, confident and controlled",o:"black patent-leather couture outfit with strap details, structured corset jacket, gloves, high boots, fashion harness elements",s:"minimal black studio with chrome chair, red spotlight and smoke",fx:"glossy reflections, subtle chain highlights, smoky atmosphere",l:"hard fashion spotlight, red edge light, face still readable",cam:"power pose, seated or standing, hands composed, editorial framing",col:"black, chrome, blood red",q:"luxury dark fashion editorial, tasteful non-explicit styling, 8K HDR",neg:"unsafe pose, overly exposed styling, overly cute styling"},
  ag_vampire_blood_queen:{n:"吸血鬼血族女王",mk:"vampire_lady",char:"adult vampire queen, aristocratic laziness mixed with danger and forbidden allure",o:"elegant V-neck gothic velvet gown with tasteful coverage, black lace stockings, leather corset details, ruby necklace",s:"ancient castle bedroom or velvet throne room, red curtains and candlelight",fx:"faint blood mark at lip corner, crimson mist, bat shadows, glowing red eyes",l:"low candlelight, red-black gothic rim light, clear face highlight",cam:"languid throne pose or gently resting fingers near lips, regal gaze, face unobstructed",col:"wine red, black, ivory, ruby",q:"premium gothic vampire portrait, realistic velvet and lace, 8K HDR",neg:"graphic gore, overly exposed styling"},
  ag_medusa_lamia_queen:{n:"蛇髮女妖女王",mk:"egypt_cleopatra",char:"adult Medusa or lamia queen, lethal alluring dominance, regal cold gaze",o:"gold metallic ornaments, fitted emerald-black scale-pattern gown, translucent exotic shawl, serpent crown",s:"ancient stone temple with columns, desert night or torchlit throne room",fx:"serpent silhouettes, subtle scale shimmer on skin makeup, glowing reptile eyes, green-gold magic aura",l:"torchlight and emerald rim light, dramatic shadows",cam:"S-curve standing pose, one hand extended in command, face clear",col:"emerald, gold, black, bronze",q:"mythic high-fashion fantasy portrait, detailed jewelry, 8K HDR",neg:"horror gore, exact snake body if not requested"},
  ag_fallen_angel_darkest:{n:"墮天使暗黑聖典",mk:"fallen_angel",char:"adult fallen angel, once-sacred grace transformed into dark temptation, tragic majestic aura",o:"black lace corset dress with flowing side-slit over tasteful lining, layered black gauze skirt, cross jewelry, patent tall boots",s:"ruined cathedral at night, broken stained glass and black feathers",fx:"huge black wings, crimson halo, falling ash, silver-white hair glow",l:"moonlight through cathedral windows, red rim light, smoky volumetric beams",cam:"centered full-body pose with wings open, face clear and powerful",col:"black, silver, crimson, ash grey",q:"darkest-grace gothic fantasy poster, ultra-detailed feathers and lace, 8K HDR",neg:"overly exposed styling, hidden face"},
  ag_saber_armor_queen:{n:"騎士王銀白鎧甲",mk:"angel_holy",char:"adult knight king, noble sacred courage, high-born warrior dignity",o:"blue-white long dress under polished silver plate armor, steel waist armor, flared skirt armor, royal sword",s:"European stone castle courtyard, misty dawn and banners",fx:"gold holy aura, sword light, faint floating motes",l:"clean dawn backlight with silver armor reflections",cam:"heroic standing pose holding sword upright, centered royal composition, face clear",col:"blue, white, silver, gold",q:"realistic Arthurian fantasy armor portrait, detailed metal and cloth, 8K HDR",neg:"exact copyrighted character face"},
  ag_rebel_silver_armor:{n:"叛逆白銀荊棘鎧",mk:"battle_scar",char:"adult rebellious silver knight, aggressive pride and youthful defiance without youth-coded appearance",o:"heavy white-silver armor with sharp thorn-like edges, crimson trim, horned full helmet held under arm, massive sword",s:"burned battlefield gate or stormy castle bridge",fx:"red battle aura, sparks from armor edges, wind-blown cape",l:"stormy grey light with crimson rim and metallic highlights",cam:"low-angle aggressive stance, helmet visible as prop, face clear",col:"silver, white, crimson, charcoal",q:"epic dark fantasy knight poster, realistic armor weight, 8K HDR",neg:"overly cute styling, exact copyrighted character face"},
  ag_dark_saint_armor:{n:"黑化聖女焦黑鐵甲",mk:"demon_lord",char:"adult corrupted saint warrior, burned holiness and vengeful dark charisma",o:"charred black iron armor with jagged edges, tattered black banner, dark corset armor over full coverage bodysuit, armored boots",s:"burning gothic battlefield, ruined chapel, ash-filled sky",fx:"black flame aura, scorched dragon banner, ember particles, smoky wings of fire",l:"hellish orange backlight with cold steel face light",cam:"standing with broken flag and sword, tragic commanding gaze, face clear",col:"charcoal black, iron grey, ember orange, dark red",q:"dark gothic holy-war poster, detailed burned metal and ash, 8K HDR",neg:"graphic gore, exact copyrighted character face"},
  // 中式漢服旅拍 / 朝代服飾妝造
  hf_tang_empress_gold:{n:"唐朝皇后金鳳大袖",mk:"tang_empress_gold",char:"Tang dynasty empress portrait, majestic imperial grace, dignified gaze, lavish palace authority",o:"red and gold Tang dynasty empress daxiushan robe, wide sleeves, phoenix embroidery, layered silk skirt, gold phoenix crown, dangling buyao hairpins",s:"grand Tang palace banquet hall, red lacquer columns, gold carved beams, silk curtains, ceremonial court setting",fx:"floating gold dust, silk sleeve motion, subtle phoenix-shaped light motif, candle bokeh",l:"warm palace lantern light, golden face fill, cinematic red-gold atmosphere",cam:"centered full-body imperial portrait, hands composed at waist, wide sleeves displayed, face clear",col:"imperial red, antique gold, warm ivory, deep lacquer black",q:"luxury Tang court travel portrait, realistic silk embroidery, 8K HDR",neg:"cheap costume, cartoon, hidden face, watermark"},
  hf_tang_peony_consor:{n:"唐朝牡丹貴妃",mk:"tang_peony_soft",char:"Tang noble consort portrait, soft wealthy beauty, relaxed palace confidence, floral romantic aura",o:"high-waisted qixiong ruqun in peony pink and apricot gold, translucent pibo shawl, pearl earrings, peony hair ornaments",s:"Huaqing pool garden, blooming peonies, palace stone steps, warm spring haze",fx:"peony petals floating, warm mist from hot spring, soft golden particles",l:"warm sunset palace light, soft skin glow, romantic bloom highlights",cam:"three-quarter portrait, one hand touching pibo shawl, gentle smile, face unobstructed",col:"peony pink, apricot gold, ivory, warm amber",q:"premium Tang consort photoshoot, detailed silk layers, 8K HDR",neg:"flat costume, overexposed face, watermark"},
  hf_tang_hu_dance:{n:"唐代胡旋舞姬",mk:"tang_hu_dance",char:"Tang Silk Road court dancer, energetic and elegant, lively banquet performance aura",o:"Silk Road inspired Tang dance costume, turquoise and orange silk, embroidered vest, flowing pibo ribbons, gold bells, jeweled waist chain",s:"Tang palace music stage, lanterns, musicians blurred in background, carved wooden floor",fx:"spinning pibo ribbons, gold bell sparkle, circular dance motion blur, flower petals",l:"warm stage lantern light, amber rim light, sparkling highlights",cam:"dynamic full-body dance pose, one sleeve swirling overhead, face visible",col:"turquoise, orange, gold, crimson, warm brown",q:"cinematic Tang dance editorial, realistic fabric movement, 8K HDR",neg:"cheap stage costume, wrong pose, hidden face"},
  hf_tang_night_lantern:{n:"唐風上元花燈",mk:"tang_peony_soft",char:"Tang lantern-festival noble lady, bright festive confidence, graceful night-walk beauty",o:"red-green contrast Tang ruqun, embroidered short jacket, long pibo shawl, tassel hairpins, jade earrings",s:"Chang'an lantern festival street at night, hanging lanterns, ancient market stalls, warm crowd bokeh",fx:"floating lantern glow, silk tassels moving, gentle night breeze, festive sparkles",l:"warm lantern light mixed with cool blue night fill, clear face illumination",cam:"walking portrait holding a lantern, sleeve and pibo flowing, face clear",col:"vermilion, jade green, gold, night blue",q:"high-end Tang night travel photoshoot, cinematic lantern atmosphere, 8K HDR",neg:"crowded tourist snapshot, hidden face, watermark"},
  hf_song_tea_lady:{n:"宋代點茶雅集",mk:"song_pearl_lady",char:"Song dynasty literati lady, quiet refined intelligence, restrained poetic elegance",o:"Song beizi jacket over long skirt, pale celadon and ivory silk, narrow sleeves, pearl hair ornaments, simple jade pendant",s:"Song tea gathering room, low wooden tea table, porcelain tea bowls, bamboo screen, garden view",fx:"tea steam, soft paper-window shadows, tiny dust motes, calm incense smoke",l:"soft window daylight, low contrast, elegant tea-room atmosphere",cam:"seated tea-whisking pose, hands visible, face softly lit",col:"celadon green, ivory, tea brown, muted jade",q:"Song dynasty tea culture editorial portrait, realistic fabric and porcelain, 8K",neg:"overly ornate Tang styling, loud colors, watermark"},
  hf_song_flower_court:{n:"宋代花間仕女",mk:"song_pearl_lady",char:"Song garden lady, gentle scholarly grace, fresh spring elegance",o:"pale peach beizi and cream long skirt, narrow sleeves, silk sash, small floral hairpin, pearl face ornaments",s:"classical Song garden, blooming crabapple branches, carved window, stone path, spring sunlight",fx:"falling flower petals, soft bokeh, light breeze in sleeves",l:"spring morning diffused light, soft green reflections, delicate highlights",cam:"standing beside flower branch, one hand lifting sleeve, face clear",col:"pale peach, cream, soft green, pearl white",q:"Song garden hanfu portrait, delicate and refined, 8K HDR",neg:"heavy makeup, neon color, hidden face"},
  hf_song_poetess_rain:{n:"宋詞雨巷才女",mk:"jiangnan_ink",char:"Song poetess in a rainy alley, introspective and graceful, literary Jiangnan mood",o:"plain grey-blue long robe with white inner layer, simple beizi silhouette, jade hairpin, fabric shoes",s:"Jiangnan rainy stone alley, wet blue-grey walls, small bridge, umbrella and mist",fx:"fine rain, water reflections, misty ink-wash atmosphere, umbrella silhouette",l:"soft rainy daylight, cool blue-grey ambient light, gentle face fill",cam:"half-body portrait under oil-paper umbrella, looking sideways, face readable",col:"ink blue, mist grey, ivory, muted green",q:"poetic Song dynasty rainy portrait, cinematic ink-wash realism, 8K",neg:"overly bright color, hidden face, watermark"},
  hf_han_palace_sleeve:{n:"漢代曲裾宮人",mk:"han_archaic_grace",char:"Han dynasty palace lady, solemn ancient elegance, composed ceremonial grace",o:"curved-hem quju shenyi robe, black and crimson layered silk, wide sleeves, jade belt hook, simple hair bun",s:"Weiyang Palace corridor, wooden beams, bronze lanterns, early morning court light",fx:"slow sleeve movement, bronze lantern glow, subtle incense smoke",l:"cool morning palace light with warm bronze fill, restrained contrast",cam:"ceremonial standing pose with hands folded in sleeves, face clear",col:"black, crimson, bronze, ivory",q:"authentic Han dynasty court portrait, realistic ancient fabric, 8K HDR",neg:"Tang hairstyle, modern jewelry, hidden face"},
  hf_han_warrior_princess:{n:"漢代女將出征",mk:"jianghu_heroine",char:"Han dynasty warrior princess, calm courage and frontier determination",o:"dark red shenyi under light lamellar armor, leather belt, long cape, bronze hairpin, sword at waist",s:"frontier fortress gate, dry wind, distant mountains, war banners, dusty sunset",fx:"wind-blown cape, dust particles, flag movement, sword glint",l:"golden frontier sunset, strong side light, cinematic dust haze",cam:"heroic three-quarter stance, one hand on sword hilt, face clear",col:"dark red, bronze, leather brown, sand gold",q:"Han frontier warrior editorial, realistic armor and cloth, 8K HDR",neg:"heavy fantasy armor, gore, hidden face"},
  hf_han_riverside_folk:{n:"漢風民間採桑女",mk:"natural_clean",char:"Han folk countryside girl, natural graceful smile, calm rural travel-photo mood",o:"plain linen ruqun in oatmeal and pale green, simple cloth sash, wooden hairpin, woven basket",s:"riverside mulberry grove, rural path, soft morning fog, golden farmland",fx:"light mist, leaves moving in breeze, basket and silk cloth details",l:"fresh morning sunlight, natural soft face light",cam:"walking beside river holding basket, candid portrait, face clear",col:"oatmeal, pale green, warm earth, river blue",q:"natural Han folk hanfu travel portrait, realistic texture, 8K",neg:"overly royal styling, heavy makeup, watermark"},
  hf_ming_noble_lady:{n:"明制貴女雲肩",mk:"ming_cloud_collar",char:"Ming noble lady, dignified and delicate, aristocratic garden confidence",o:"Ming standing-collar aoqun, embroidered mamian skirt, ornate cloud collar, pearl tassel earrings, gold hair combs",s:"Ming noble residence flower hall, carved doors, porcelain vases, peony screen",fx:"soft incense smoke, sleeve movement, gold embroidery highlights",l:"warm indoor window light, soft lantern fill, refined shadow depth",cam:"seated or standing noble portrait, hands holding round fan, face clear",col:"jade green, crimson, gold, ivory",q:"luxury Ming-style hanfu studio portrait, detailed embroidery, 8K HDR",neg:"cheap costume, wrong dynasty styling, watermark"},
  hf_ming_wedding_xiapei:{n:"明制鳳冠霞帔",mk:"ming_bridal_xiapei",char:"Ming dynasty bridal queen, festive solemn beauty, ceremonial grandeur",o:"bright red Ming wedding aoqun, phoenix crown, embroidered xiapei shoulder stole, gold thread dragon-phoenix motifs, pearl tassels",s:"traditional Chinese wedding hall, red candles, carved wooden screen, gold double-happiness decor as abstract motif",fx:"red silk movement, candle bokeh, gold embroidery sparkle, gentle flower petals",l:"warm red candlelight with soft face key light, festive glow",cam:"formal bridal portrait, hands holding round fan or sleeve edge, face clear",col:"wedding red, gold, pearl white, dark wood",q:"premium Ming bridal hanfu portrait, ceremonial realism, 8K HDR",neg:"modern white wedding dress, hidden face, watermark"},
  hf_ming_scholar_garden:{n:"明代書院小姐",mk:"ming_cloud_collar",char:"Ming scholarly lady, quiet intelligence, refined literary temperament",o:"moon-white aoqun, pale blue mamian skirt, delicate cloud collar, simple jade hairpin, embroidered round fan",s:"classical study garden, book table, bamboo shadows, inkstone and scrolls",fx:"paper scroll edges, bamboo leaf shadows, soft dust motes",l:"clear afternoon window light, scholarly calm low contrast",cam:"sitting beside desk with book and fan, face softly lit",col:"moon white, pale blue, ink black, bamboo green",q:"Ming literati garden portrait, elegant realistic hanfu, 8K",neg:"overly flashy palace styling, hidden face"},
  hf_qing_empress_formal:{n:"清宮皇后朝服",mk:"qing_empress_formal",char:"Qing empress formal portrait, imperial dignity, calm authority, ceremonial grandeur",o:"bright yellow Qing court robe, dragon and phoenix embroidery, high collar, matixiu cuffs, elaborate dianzi headdress with pearls",s:"Forbidden City red wall and golden roof, marble stairs, palace courtyard symmetry",fx:"pearl tassels, imperial silk shimmer, subtle snow or dust particles",l:"clear palace daylight with warm gold reflection, dignified face light",cam:"centered full-body court portrait, hands composed, face clear",col:"imperial yellow, red wall, pearl white, gold",q:"Qing palace empress travel portrait, realistic embroidery, 8K HDR",neg:"cheap drama costume, hidden face, watermark"},
  hf_qing_gege_winter:{n:"清宮格格雪景",mk:"qing_gege_snow",char:"Qing princess winter portrait, gentle noble sweetness, clear cold-weather elegance",o:"lake-blue Qing flag dress, white fur shoulder cape, pearl dianzi hairpiece, embroidered shoes, hand warmer",s:"Forbidden City palace gate in snow, red walls, falling snow, quiet winter courtyard",fx:"falling snowflakes, white breath mist, fur texture highlights",l:"cool snow daylight with warm face fill, red wall reflection",cam:"standing under palace eaves holding hand warmer, face clear",col:"lake blue, snow white, palace red, pearl silver",q:"Qing princess snow photoshoot, refined winter realism, 8K HDR",neg:"heavy modern makeup, hidden face"},
  hf_qing_flower_pavilion:{n:"清宮花房娘娘",mk:"qing_palace",char:"Qing palace consort in flower pavilion, graceful and fragrant, soft imperial garden beauty",o:"pink-lavender Qing flag dress, floral embroidery, delicate dianzi headdress, jade earrings, silk handkerchief",s:"imperial greenhouse flower pavilion, orchids, peonies, warm glasshouse light, carved flower stands",fx:"flower fragrance mist, petal bokeh, pearl tassel movement",l:"warm greenhouse sunlight, soft pastel face light, gentle highlights",cam:"half-body portrait holding silk handkerchief near flowers, face clear",col:"pink lavender, jade green, ivory, warm gold",q:"Qing palace flower-room portrait, soft luxury realism, 8K",neg:"crowded background, hidden face"},
  hf_wuxia_bamboo_green:{n:"江湖竹影青衣",mk:"jianghu_heroine",char:"green-clad wuxia heroine, agile and calm, wandering martial-world confidence",o:"green fitted hanfu battle outfit, narrow sleeves, leather belt, light shoulder guards, jade hairpin, sword",s:"dense bamboo forest, stone path, mist between bamboo trunks",fx:"bamboo leaves flying, sword glint, green motion blur, mist layers",l:"filtered green bamboo light, cool rim light, clear face exposure",cam:"side stance drawing sword, one sleeve flowing, face visible",col:"bamboo green, jade, black, mist grey",q:"cinematic wuxia bamboo portrait, realistic cloth and sword, 8K HDR",neg:"cartoon action, wrong pose, hidden face"},
  hf_wuxia_red_cape:{n:"江湖紅披風女俠",mk:"jianghu_heroine",char:"red-caped jianghu swordswoman, bold loyal and stormy, dramatic martial-arts heroine",o:"black fitted wuxia outfit, crimson long cape, embroidered arm guards, high ponytail, sword and waist sash",s:"ancient inn street in night rain, lanterns, wet stone pavement, wooden balconies",fx:"rain streaks, cape flying, lantern reflections, sword light",l:"warm lantern light with cool rain-blue rim, cinematic contrast",cam:"walking forward in rain, one hand on sword, cape trailing, face clear",col:"black, crimson, rain blue, lantern amber",q:"wuxia movie poster portrait, rain-soaked realism, 8K HDR",neg:"hidden face, plastic costume, watermark"},
  hf_minguo_hanfu_fusion:{n:"民國漢服融合",mk:"republic_qipao",char:"Republic-era hanfu fusion lady, modern classical confidence, old Shanghai elegance",o:"modified aoqun with qipao tailoring, pearl shawl, embroidered jacket, satin skirt, vintage hair waves",s:"old Shanghai mansion interior, carved staircase, gramophone, warm lamps and rain outside window",fx:"film grain, cigarette-free jazz-club atmosphere, pearl sparkle, window rain reflections",l:"warm tungsten interior light with cool rainy window rim",cam:"elegant standing portrait near staircase, one hand holding shawl, face clear",col:"champagne, jade, burgundy, warm brown",q:"Republic-era Chinese fashion editorial, cinematic vintage realism, 8K",neg:"modern nightclub look, hidden face"},
  hf_dunhuang_luxury:{n:"敦煌華麗飛天",mk:"dunhuang_gold",char:"Dunhuang apsara-inspired travel portrait, radiant desert grace, luxurious mural beauty",o:"gold-orange Dunhuang hanfu dance costume, long flowing pibo ribbons, jeweled crown, embroidered mural motifs, layered silk skirt",s:"Mogao cave exterior at sunset, desert cliff, mural-inspired set, warm sand and stone texture",fx:"long pibo ribbons flying, golden sand particles, apsara mural glow, warm halo",l:"desert sunset gold light, soft face fill, glowing rim light",cam:"dynamic dance pose with ribbons forming arcs, face clear",col:"gold orange, turquoise, sandstone, ivory",q:"Dunhuang luxury travel photoshoot, realistic silk ribbons, 8K HDR",neg:"cheap cosplay, hidden face, watermark"},

  // 影劇小說美女 / 歷史志怪武俠
  dn_chen_yuanyuan_late_ming:{n:"陳圓圓 · 晚明名姬",mk:"late_ming_courtesan",char:"late Ming Qinhuai legendary beauty, poetic stage presence, refined sorrow and luminous charm",o:"late Ming embroidered aoqun, peach-pink silk jacket, ivory mamian skirt, pearl shawl, gold hairpins and floral ornaments",s:"Qinhuai river lantern house, carved balcony, red lantern reflections on water, late Ming night atmosphere",fx:"lantern bokeh, peach petals, silk sleeve movement, soft candle haze",l:"warm lantern light with cool river reflection, cinematic candlelit face glow",cam:"three-quarter standing portrait by carved window, one hand holding round fan, face clear",col:"peach pink, ivory, warm red, antique gold, river blue",q:"historical drama portrait, refined late Ming costume detail, 8K HDR",neg:"cheap stage costume, hidden face, watermark"},
  dn_xishi_yue_palace:{n:"西施 · 越溪浣紗",mk:"jiangnan_ink",char:"Xi Shi inspired Yue-state riverside beauty, pure quiet grace, waterlike softness",o:"plain white Yue-style gauze robe, pale blue sash, simple jade hairpin, minimal pearl earrings",s:"clear riverside washing-stone scene, willow trees, morning mist, old Yue village path",fx:"water ripples, mist, soft falling willow leaves, reflected light on fabric",l:"cool morning light, gentle water reflection on face, low contrast poetic glow",cam:"kneeling or standing by stream with folded silk, face softly turned to camera",col:"white, pale blue, willow green, mist grey",q:"classical historical beauty portrait, photorealistic poetic water atmosphere, 8K",neg:"overly ornate palace styling, hidden face"},
  dn_zhao_feiyan_dancer:{n:"趙飛燕 · 掌上舞",mk:"han_flying_dancer",char:"Han palace dancer Zhao Feiyan archetype, feather-light movement, elegant and elusive",o:"Han dynasty dance robe, pale lavender and white silk, extremely light sleeves, narrow waist sash, jade hair ornaments",s:"Han palace dance platform, bronze mirrors, silk curtains, moonlit interior",fx:"floating sleeves, swallow-like motion trails, bronze mirror highlights",l:"cool moonlight and warm bronze lamp fill, delicate stage glow",cam:"dynamic dance pose on one foot, sleeves floating, face visible",col:"lavender, white, bronze, moon silver",q:"Han palace dancer cinematic portrait, realistic silk motion, 8K HDR",neg:"wrong dynasty costume, blurred face"},
  dn_yu_ji_chu_han:{n:"虞姬 · 楚帳悲歌",mk:"jianghu_heroine",char:"Yu Ji inspired tragic Chu-Han heroine, loyal graceful sorrow before battle",o:"Chu-style red and black robe-dress with light armor details, long sash, jade hairpin, sword prop",s:"war tent at night, candles, battlefield banners outside, cold moonlit dust",fx:"candle flicker, drifting ash, sword glint, fabric moving in night wind",l:"warm candle face light with cold blue moon rim",cam:"half-body portrait holding sword near chest, solemn gaze, face clear",col:"crimson, black, bronze, moon blue",q:"historical war-drama beauty portrait, emotional cinematic realism, 8K",neg:"gore, hidden face"},
  dn_shangguan_waner:{n:"上官婉兒 · 女官才華",mk:"tang_female_official",char:"Tang female official and poet, intelligent authority, graceful literary confidence",o:"Tang court female official robe, deep teal and red silk, narrow belt, official tablet, gold hairpin",s:"palace study, scrolls, brush and ink, red-lacquer desk, warm court lamps",fx:"floating paper edges, brush ink detail, candle dust motes",l:"warm study light with soft side shadow, clear face highlight",cam:"seated at writing desk holding brush, direct composed gaze",col:"deep teal, crimson, gold, ink black",q:"Tang palace intellectual portrait, detailed textile and calligraphy set, 8K",neg:"modern office, hidden face"},
  dn_wu_zetian_queen:{n:"武則天 · 女皇朝服",mk:"empress_wu_formal",char:"Empress Wu inspired sovereign portrait, majestic command, absolute imperial power",o:"black and gold Tang imperial court robe, phoenix and sun embroidery, grand crown, layered ceremonial sleeves",s:"Luoyang Mingtang grand hall, golden throne stairs, tall red columns, ceremonial court atmosphere",fx:"golden aura, silk sleeves, floating dust in sunbeams, phoenix motif lighting",l:"dramatic golden throne light, strong but flattering face key",cam:"centered seated or standing imperial composition, hands composed, face clear",col:"black, gold, crimson, ivory",q:"epic historical queen portrait, luxury Tang court realism, 8K HDR",neg:"cheap costume, hidden face"},
  dn_li_qingzhao_poet:{n:"李清照 · 宋詞清照",mk:"song_poet_melancholy",char:"Song dynasty poetess, delicate melancholy, quiet intelligence and literary refinement",o:"pale grey-green Song beizi, ivory skirt, simple pearl hairpin, light silk shawl",s:"rain-washed study window, books, inkstone, chrysanthemum vase, garden after rain",fx:"raindrops on window, tea steam, falling chrysanthemum petals",l:"soft rainy daylight, cool green-grey palette, gentle face fill",cam:"seated near window with book, eyes slightly distant, face clear",col:"grey green, ivory, pale yellow, ink black",q:"Song poetry drama portrait, subtle realistic texture, 8K",neg:"flashy palace style, hidden face"},
  dn_zhuo_wenjun_qin:{n:"卓文君 · 琴台私奔",mk:"han_archaic_grace",char:"Zhuo Wenjun inspired romantic Han literati lady, brave and tender, music-filled elegance",o:"cream and warm brown Han quju robe, silk sash, jade pendant, simple hair bun",s:"bamboo-window music room, guqin table, warm candlelight, quiet courtyard beyond",fx:"soft incense smoke, guqin string highlights, candle bokeh",l:"warm intimate candlelight with soft window fill",cam:"seated at guqin, one hand near strings, gentle direct gaze",col:"cream, warm brown, jade green, candle gold",q:"Han literati romance portrait, realistic guqin and silk, 8K",neg:"modern instrument, hidden face"},
  dn_bai_suzhen_misty:{n:"白素貞 · 西湖白蛇",mk:"white_snake_mist",char:"White Snake legend heroine, gentle immortal beauty, devoted and misty West Lake aura",o:"white and pale green hanfu fairy dress, long flowing sleeves, jade hairpin, delicate scale-like embroidery",s:"West Lake broken bridge in rain mist, willow trees, water surface and distant pagoda",fx:"white mist, water ripples, subtle serpent-shaped light trail, floating willow leaves",l:"soft rainy daylight, pearly green-white glow, clear face light",cam:"standing on bridge holding umbrella or sleeve, face unobstructed",col:"white, pale green, mist grey, lake blue",q:"Chinese legend fantasy portrait, photorealistic mist and silk, 8K HDR",neg:"horror snake transformation, hidden face"},
  dn_xiaoqian_ghost_bride:{n:"聶小倩 · 幽蘭鬼新娘",mk:"ghost_orchid_bride",char:"Liaozhai ghost bride beauty, fragile mysterious sadness, moonlit supernatural romance",o:"white fully lined bridal hanfu, pale orchid embroidery, long ribbon sleeves, silver hair ornaments",s:"Lanruo temple courtyard at night, old wooden doors, moonlight, blue fog and orchids",fx:"blue ghost mist, floating orchid petals, candle flame flicker, moon halo",l:"cool moonlight with soft candle face fill, ethereal but readable face",cam:"half-body portrait near temple doorway, hands holding ribbon, face clear",col:"white, pale orchid, moon blue, candle gold",q:"elegant supernatural Chinese ghost-story portrait, 8K HDR",neg:"horror gore, hidden face, unsafe styling"},
  dn_luo_shen_river:{n:"洛神 · 水上凌波",mk:"moon",char:"Luo Shen river goddess, graceful over-water movement, divine poetic beauty",o:"pale blue and white flowing immortal gown, long water-like ribbons, pearl hair crown, light jade jewelry",s:"moonlit river surface, mist, lotus leaves, distant palace silhouette",fx:"water ribbons, moonlit ripples, floating lotus petals, shimmering mist",l:"silver-blue moonlight, soft face glow, reflective water highlights",cam:"full-body standing as if walking over water, ribbons trailing, face clear",col:"pale blue, white, silver, jade",q:"Chinese myth river goddess portrait, cinematic water realism, 8K HDR",neg:"cartoon water, hidden face"},
  dn_daji_fox_palace:{n:"妲己 · 九尾宮宴",mk:"fox",char:"Daji fox queen archetype, dangerous palace glamour, ancient mythic allure",o:"red-black fox-fur inspired court gown, gold embroidery, layered silk, fox-tail hair ornament, ruby jewelry",s:"Shang palace banquet hall, bronze vessels, red curtains, candlelit shadows",fx:"nine fox-fire wisps, gold-red aura, bronze reflections, drifting black rose petals",l:"low warm candlelight with red-gold rim, clear face key",cam:"seated on palace couch or standing beside bronze vessel, regal gaze, face clear",col:"deep red, black, bronze, gold",q:"mythic Chinese palace fantasy portrait, realistic costume, 8K HDR",neg:"cheap demon costume, hidden face"},
  dn_lin_daiyu_flower:{n:"林黛玉 · 葬花詩意",mk:"red_mansion_lady",char:"Lin Daiyu inspired poetic boudoir lady, fragile intelligence, melancholy flower-burial beauty",o:"pale pink Qing-Ming style aoqun, soft shawl, delicate floral hairpin, embroidered handkerchief",s:"Grand View Garden bamboo courtyard, falling petals, flower basket, stone path after rain",fx:"falling petals, soft rain mist, handkerchief detail, poetic bokeh",l:"soft overcast garden light, gentle pastel face glow",cam:"kneeling or standing near flower basket, eyes thoughtful, face clear",col:"pale pink, bamboo green, ivory, mist grey",q:"Dream of the Red Chamber inspired portrait, delicate literary realism, 8K",neg:"overly glamorous styling, hidden face"},
  dn_xue_baochai_snow:{n:"薛寶釵 · 雪中端雅",mk:"song_pearl_lady",char:"Xue Baochai inspired noble lady, composed and warm, graceful restraint in winter",o:"ivory and pale gold aoqun with pearl accessories, fur-trimmed shawl, refined hair ornaments",s:"Grand View Garden snow courtyard, plum blossoms, red pavilion and white snow",fx:"falling snow, plum petals, pearl highlights, soft breath mist",l:"cool snow daylight with warm pavilion reflection",cam:"standing near plum branch holding hand warmer, face clear",col:"ivory, pale gold, snow white, plum red",q:"classical novel winter portrait, refined costume texture, 8K HDR",neg:"hidden face, flashy neon colors"},
  dn_wang_xifeng_red:{n:"王熙鳳 · 紅樓鳳辣",mk:"palace_drama_fav",char:"Wang Xifeng inspired noble household beauty, sharp charisma, witty authority and luxurious confidence",o:"red and gold Qing-Ming noble aoqun, phoenix hairpins, embroidered vest, jade bangles",s:"Rongguo mansion flower hall, carved screens, red carpet, porcelain and lanterns",fx:"gold embroidery sparkle, sleeve movement, warm incense haze",l:"warm interior lantern light with crisp face highlights",cam:"standing with fan half-open, confident sideways smile, face clear",col:"red, gold, jade green, dark wood",q:"classical mansion drama portrait, detailed jewelry and textile, 8K HDR",neg:"cheap costume, hidden face"},
  dn_xiaolongnv_ancient_tomb:{n:"小龍女 · 古墓白衣",mk:"snow_pure",char:"ethereal white-clad wuxia heroine, cold jade-like calm, secluded ancient-tomb elegance",o:"pure white flowing hanfu, long simple sleeves, white silk belt, minimal silver hairpin",s:"ancient tomb stone chamber, cold pool, pale moonlight through opening, misty air",fx:"cold mist, white ribbon motion, water reflection, subtle silver particles",l:"cool moonlight, soft white face glow, low contrast",cam:"full-body standing beside cold pool, sleeves falling naturally, face clear",col:"white, silver, pale blue, stone grey",q:"wuxia novel immortal portrait, realistic white silk, 8K HDR",neg:"overly ornate jewelry, hidden face"},
  dn_huang_rong_begonia:{n:"黃蓉 · 江南靈巧",mk:"wuxia_novel_heroine",char:"clever Jiangnan wuxia heroine, lively smile, agile intelligence and playful confidence",o:"green-yellow short ruqun with light travel cloak, braided hair ribbons, small bamboo staff, embroidered pouch",s:"Peach Blossom Island garden, sea breeze, begonia flowers, bamboo path",fx:"flower petals, cloak movement, playful wind, sunlight bokeh",l:"bright spring daylight, warm face fill, clear lively color",cam:"walking or turning with bamboo staff, bright eyes, face clear",col:"green, yellow, peach pink, sky blue",q:"wuxia novel heroine travel portrait, fresh and realistic, 8K",neg:"heavy palace styling, hidden face"},
  dn_zhao_min_mongol:{n:"趙敏 · 蒙元郡主",mk:"wuxia_novel_heroine",char:"Mongol-Yuan princess heroine, bright proud intelligence, grassland command",o:"red-white Mongol inspired riding outfit, embroidered vest, fur-trimmed cloak, jeweled headband, riding boots",s:"grassland royal camp, yurts, horses in distance, blue sky and wind",fx:"wind-blown cloak, grass movement, horse silhouettes, sunlight sparkle",l:"clear grassland daylight with golden rim light",cam:"standing beside horse or royal tent, hand on belt, face clear",col:"red, white, sky blue, grass green, gold",q:"wuxia historical grassland portrait, realistic textile and wind, 8K HDR",neg:"hidden face, cheap costume"},
  dn_ren_yingying_lute:{n:"任盈盈 · 黑衣琴心",mk:"gothic",char:"black-clad wuxia musician heroine, cool elegant mystery, restrained emotional depth",o:"black layered hanfu with subtle silver embroidery, opaque gauze layers, guqin or lute prop, silver hairpin",s:"bamboo forest pavilion at night, mist, lantern on table, musical instrument case",fx:"floating bamboo leaves, music-note-like light particles, lantern bokeh",l:"cool moonlight with warm lantern face fill",cam:"seated beside instrument, one hand on strings, face clear",col:"black, silver, bamboo green, lantern gold",q:"wuxia music heroine portrait, cinematic night atmosphere, 8K",neg:"unsafe styling, hidden face"},
  dn_dongfang_red:{n:"東方不敗 · 紅衣教主",mk:"warrior",char:"red-robed martial sect leader archetype, intense beauty, commanding and theatrical Jianghu aura",o:"flowing crimson robe with black embroidered trim, long sleeves, high collar, gold hair crown, silk sash",s:"mountain sect altar, red banners, cliff wind, dramatic clouds",fx:"red silk ribbons, petal storm, strong wind, sword-light glints",l:"dramatic sunset rim light with crimson ambient glow",cam:"centered power pose with sleeves spread, face sharp and clear",col:"crimson, black, gold, storm grey",q:"stylized wuxia sect-leader portrait, realistic fabric motion, 8K HDR",neg:"cartoon, hidden face"},
  dn_qing_palace_drama:{n:"清宮寵妃 · 宮鬥劇感",mk:"palace_drama_fav",char:"Qing palace favorite consort, elegant political intelligence, gentle smile with hidden power",o:"pink-gold Qing flag dress, jeweled dianzi headdress, pearl tassels, embroidered handkerchief",s:"Forbidden City red wall corridor in snow, palace lanterns, distant carved doors",fx:"falling snow, pearl tassel movement, warm lantern bokeh",l:"cool snow light with warm red-wall reflection on face",cam:"three-quarter portrait holding handkerchief, composed gaze, face clear",col:"pink gold, palace red, snow white, pearl",q:"Qing palace drama portrait, luxury costume realism, 8K HDR",neg:"cheap drama costume, hidden face"},
  dn_ming_spy_beauty:{n:"明代錦衣女探",mk:"jianghu_heroine",char:"Ming dynasty female investigator, sharp calm and hidden danger, cinematic detective energy",o:"dark blue-black modified feiyufu-inspired robe, leather belt, embroidered cloud patterns, short sword, official token",s:"Ming alley at night, lanterns, rain-wet stone street, shadowed courtyard gate",fx:"rain reflections, lantern smoke, sword glint, cloak movement",l:"low-key lantern light with blue night rim",cam:"walking through alley with one hand near sword, face visible",col:"dark blue, black, lantern amber, silver",q:"historical detective drama portrait, realistic rain and textile, 8K HDR",neg:"modern police styling, hidden face"},
  dn_tang_detective_princess:{n:"唐代探案公主",mk:"tang_female_official",char:"Tang detective princess, witty noble confidence, elegant mystery-solving energy",o:"Tang riding hu clothing with pibo shawl, fitted embroidered jacket, high-waist skirt, small gold crown, folding fan",s:"Chang’an night market, lantern stalls, palace gate in distance, lively but blurred crowd",fx:"lantern glow, fan movement, paper clue scroll, golden dust",l:"warm lanterns and cool night fill, clear face lighting",cam:"standing with fan and clue scroll, alert gaze, face clear",col:"teal, gold, vermilion, night blue",q:"Tang mystery drama portrait, high-end historical styling, 8K HDR",neg:"cheap costume, hidden face"},
  dn_fantasy_flower_goddess:{n:"花神 · 奇幻古偶",mk:"flower_fairy",char:"fantasy flower goddess from costume drama, gentle divine beauty, blooming celestial aura",o:"multi-layer floral hanfu fairy gown, pastel petals, gold vine embroidery, flower crown, long lined ribbons",s:"heavenly flower sea, floating palace terrace, giant blossoms, soft clouds",fx:"petals swirling around body, golden pollen light, vine-shaped magic aura",l:"soft sunrise divine light, pastel rim light, glowing face fill",cam:"full-body pose with ribbons and flowers surrounding, face clear",col:"pink, white, gold, soft green, sky blue",q:"Chinese fantasy costume drama poster, luxurious floral realism, 8K HDR",neg:"overly childish styling, hidden face"},

};

const PRESET_CORE_OVERRIDES={
  cosmic_crystal_bubble:"dreamy cosmic crystal-bubble girl, pastel galaxy cloud sea, floating transparent bubble, planets, sky islands, crystal shards and dream whale",
  vogue_spider_spirit:"Vogue-style high-fashion spider-spirit studio cover, Journey to the West mythology fused with modern luxury couture, white-gold marble editorial",
  imperial_red_fan_hanfu:"imperial red hanfu portrait with circular floral fan, ornate golden hairpiece, warm palace interior, elegant ceremonial Chinese beauty",
  baroque_hotel_crystal_gala:"baroque five-star hotel crystal gala portrait, pearl-white satin couture gown, chandelier diamonds and luxury banquet atmosphere",
  summer_creek_fresh:"midsummer mountain creek fresh Japanese-style realistic portrait, wet water-play motion, sparkling splashes, transparent natural light",
  sakura_orchard_umbrella:"oriental sakura orchard hanfu travel portrait, cherry-blossom oil-paper umbrella, pagoda, stone bridge and petal-covered path",
  fenghuang_night_hanfu:"Fenghuang ancient town night hanfu travel portrait, golden riverside lights, oil-paper umbrella, pagoda and river reflections",
  lijiang_ethnic_waterwheel:"Lijiang old town ethnic travel portrait, wooden waterwheel, silver headdress, red or turquoise dress and lantern streets",
  tibetan_grassland_lake:"Tibetan highland grassland lake travel portrait, red fur-trimmed cloak, dramatic clouds, open plateau and wind",
  kyoto_white_kimono_street:"Kyoto white lace kimono street portrait, tea shop storefronts, vending machines, temple steps and soft daylight",
  jiangnan_white_fur_umbrella:"Jiangnan classical garden winter hanfu portrait, white fur cloak, blue embroidery, oil-paper umbrella, pond and pavilion",
  song_red_cloak_moon_gate:"Chinese garden night portrait with red embroidered cloak, moon gate, warm lantern light, umbrella and wet stone reflections",
  korean_palace_pastel_hanbok:"Korean royal palace pastel hanbok travel portrait, autumn courtyard, ginkgo leaves, tiled roofs and warm sunlight",
  lantern_window_guzhen:"ancient town lantern window portrait, glowing fish lanterns, wooden railing, warm close-up hanfu photography",
  cream_rose_floral_goddess:"ethereal cream-white rose garden floral goddess, living vine couture dress, lace curtain, golden-hour soft bloom fairycore portrait",
  cappadocia_red_convertible:"Cappadocia sunset luxury travel portrait, red flowing dress, vintage red convertible, hot-air balloons and cinematic desert valley",
  storm_veil_desert_bride:"dramatic stormy desert bridal portrait, white couture gown, extremely long wind-blown veil, epic cinematic wilderness atmosphere",
  golden_forest_reflection:"poetic golden autumn forest reflection portrait, mirror-like shallow water, ivory skirt, black hat, warm literary travel photography",
  dark_deer_night_goddess:"dark enchanted forest night goddess, antler crown, black-purple starry couture, moon mist, mysterious fantasy portrait",
  dark_orb_sorceress:"gothic dark sorceress fashion portrait, black burgundy velvet gown, crystal orb, ornate metalwork, cinematic magical forest set",
  sakura_kimono_soft_closeup:"dreamy Japanese cherry blossom kimono close-up, pale floral kimono, soft high-key bloom, foreground sakura framing",
  shrine_ema_kimono:"Japanese shrine ema-board kimono travel portrait, cute polished styling, red shrine details, wooden prayer plaques and sunlight",
  asakusa_urban_kimono:"Asakusa urban kimono travel portrait, temple gate, large lantern, rickshaw bokeh, ornate obi and flower hair accessories",
  hydrangea_yukata_garden:"fresh summer hydrangea yukata garden portrait, lavender-blue flowers, white yukata, basket bag, airy soft daylight",
  white_kimono_sword:"elegant white kimono swordswoman portrait, silver obi, katana diagonal composition, quiet shrine atmosphere, cool refined beauty",
  y2k_pink_magazine:"pink Y2K fashion magazine cover aesthetic, metallic jacket, star crop top, chrome accessories, glitter stickers and pastel sparkle",
  ag_vampire_blood_queen:"adult vampire queen portrait with gothic velvet, crimson eyes, noble danger, black lace, candlelit castle, forbidden elegant allure",
  ag_medusa_lamia_queen:"adult Medusa or lamia queen portrait with serpent symbolism, emerald-gold scale motifs, temple throne, lethal alluring dominance",
  ag_fallen_angel_darkest:"adult fallen angel gothic portrait with huge black wings, lace corset dress, ruined cathedral, tragic sacred darkness",
  ag_saber_armor_queen:"adult knight king portrait with blue-white gown, polished silver plate armor, royal sword, sacred Arthurian dignity",
  ag_dark_saint_armor:"adult corrupted saint warrior portrait with charred black iron armor, broken flag, dark gothic battlefield and vengeful holy-war aura",

  daji:"Daji nine-tailed fox spirit queen, alluring ancient Chinese myth fantasy, imperial palace intrigue, red-black fox demon glamour",
  change:"Chang'e moon goddess, cold elegant lunar palace immortal beauty, white flowing gown, giant full moon, silver-blue moonlight",
  xuannv:"Nine Heavens Xuannv celestial warrior goddess, divine commander aura, thunder runes, sacred heavenly battlefield",
  nvwa:"Nuwa creation goddess, divine world-mender, five-colored sacred stones, cosmic mythic creator energy",
  mazu:"Mazu sea goddess, solemn ocean deity, crashing waves, temple island, sacred golden sea light",
  xishi:"Xi Shi classical Chinese beauty, gentle riverside washing-silk scene, elegant poetic historical portrait",
  wangzj:"Wang Zhaojun frontier princess, epic grassland sunset, pipa, northern desert journey, historical cinematic mood",
  diocan:"Diao Chan moonlit palace dancer, Three Kingdoms beauty, flower garden night scene, graceful dramatic dance",
  guifei:"Yang Guifei Tang dynasty imperial beauty, peony palace luxury, warm golden court glamour",
  mulan:"Hua Mulan heroic woman warrior, battlefield armor, northern frontier dust, epic patriotic wuxia energy",
  warrior:"red-robed ancient warrior heroine, golden crown, city wall sunset, heroic wuxia poster energy",
  topdown:"overhead flying hanfu shot, giant skirt spread like a flower, top-down fashion composition",
  flames:"red ancient costume fire-effect cinematic poster, palace entrance, dramatic orange flames and rim light",
  xianxia:"Chinese xianxia fantasy movie poster, floating heavenly palace, forbidden magic reflection, sacred and dark energy",
  gongting:"oriental palace editorial portrait, black-gold court gown, symmetrical temple architecture, imperial luxury",
  hanfu:"Tang palace hanfu editorial, red columns, carved palace interior, soft warm window light, elegant historical fashion",
  desert:"Dunhuang Silk Road desert epic, golden sand, flowing ribbons, western-region fantasy travel portrait",
  y2k:"Y2K neon idol poster, holographic glitter, pastel purple-pink fashion, playful modern magazine energy",
  cinematic:"European cinematic travel portrait, old city street, film color grading, celebrity editorial mood",
  editorial:"luxury haute couture fantasy editorial, celestial palace, god rays, floating particles, Vogue-level fashion",
  gothic:"dark gothic fashion portrait, medieval castle, black lace, burgundy velvet, candlelit romantic shadows",
  cyberpunk:"cyberpunk Asian megacity portrait, neon rain, futuristic outfit, Blade Runner night atmosphere",
  lotus:"pink lotus moon goddess fantasy, giant full moon, lotus pond, soft dreamy eastern fairy atmosphere",
  wedding:"dreamy luxury wedding gown advertisement, Mediterranean garden, moonlight, romantic bridal editorial",
  beast_guardian:"divine beast guardian xianxia poster, celestial platform, white tiger or dragon spirit behind the subject",
  starry_travel:"Milky Way lakeside travel portrait, campfire glow, mountain lake reflection, cozy astrophotography mood",
  princess_palace:"fairy-tale luxury princess palace portrait, ornate gown, grand interior, dreamy royal elegance",
  dark_sexy:"dark glamorous studio fashion portrait, refined glamorous mood, black lace styling, cinematic low-key light",
  butterfly_portrait:"butterfly fantasy beauty portrait, soft magical wings and particles, romantic delicate close-up",
  dual_xianxia:"dual xianxia light-and-dark character poster, two opposing energies, dramatic fantasy conflict",
  xian_red_epic:"red immortal xianxia epic, flowing crimson robe, heavenly palace, high-impact fantasy poster",
  mirror_dual:"mirror duality portrait, reflection composition, light and shadow contrast, cinematic symbolic mood",
  snow_hanfu:"snowy hanfu winter portrait, white landscape, falling snow, pure cold elegant atmosphere",
  museum_warm:"warm museum editorial portrait, indoor architecture, cultured elegant travel-photo mood",
  qing_palace:"Qing palace historical portrait, ornate court styling, imperial architecture, refined dramatic elegance",
  silk_road_night:"Silk Road night fantasy, lanterns, desert market mood, exotic ancient travel atmosphere",
  tang_glory:"Tang dynasty golden-age palace portrait, saturated red and gold, peony luxury, imperial grandeur",
  jiangnan_ink:"misty Jiangnan ink-wash travel portrait, canal town, stone bridge, poetic low-saturation elegance",
  palace_intrigue:"palace intrigue drama portrait, deep corridor, candlelight, cold noble gaze, historical suspense",
  seoul_afternoon:"Seoul afternoon lifestyle portrait, Korean clean beauty, cafe street, soft bright natural light",
  provence_garden:"Provence garden vacation editorial, lavender field, rustic estate, relaxed European romance",
  hk_noir:"Wong Kar-wai Hong Kong noir portrait, neon wet street, film grain, moody cinematic emotion",
  desert_lone:"lonely desert wanderer portrait, vast dunes, sunset horizon, flowing fabric, epic solitude",
  arctic_land:"Arctic land portrait, snow field, aurora sky, cold pure expedition beauty",
  midsummer_sea:"midsummer sea travel portrait, beach sunset, glowing water, healthy natural summer beauty",
  convenience_store:"Japanese convenience-store street portrait, casual fashion, fluorescent night glow, everyday cinematic mood",
  rainy_night:"rainy city night portrait, umbrella, neon puddle reflections, emotional urban film mood",
  succubus_queen:"adult succubus queen, alluring dark fantasy beauty, glamorous but tasteful, black wings and infernal throne",
  isekai_demon_lord:"isekai demon lord queen, absolute dark ruler, black magic realm, commanding fantasy villain aura",
  hero_adventurer:"heroic adventurer fantasy portrait, sacred weapon, RPG quest energy, cinematic adventure mood",
  evil_dragon:"evil dragon dark fantasy scene, enormous dragon presence, flames and shadow, epic dangerous atmosphere"
};
function presetCoreFromId(id){
  if(!id)return "complete cinematic character style, photorealistic model travel editorial";
  if(PRESET_CORE_OVERRIDES[id])return PRESET_CORE_OVERRIDES[id];
  return id
    .replace(/^lm_/,"real-world landmark travel portrait ")
    .replace(/^world_/,"world landmark travel portrait ")
    .replace(/^china_/,"Chinese landmark travel portrait ")
    .replace(/^xianxia_/,"Chinese xianxia fantasy ")
    .replace(/^season_/,"seasonal landscape portrait ")
    .replace(/^ocean_/,"ocean and water landscape portrait ")
    .replace(/^city_/,"iconic city travel portrait ")
    .replace(/^battle_/,"epic battlefield cinematic portrait ")
    .replace(/^astro_/,"astronomical cosmic fantasy portrait ")
    .replace(/^ruin_/,"ancient ruins travel portrait ")
    .replace(/^special_/,"rare natural wonder travel portrait ")
    .replace(/_/g," ")
    .trim();
}
function presetEnglishCore(p){
  const id=p?._id||"";
  const core=presetCoreFromId(id);
  return `${core}, strong recognizable theme, complete outfit and setting concept, photorealistic cinematic editorial image`;
}
function englishFieldFallback(p,field){
  const id=p?._id||"";
  const core=presetCoreFromId(id);
  const lower=core.toLowerCase();
  const isLandmark=/landmark|forbidden city|wuzhen|taipei|paris|eiffel|notre|greek|egypt|sahara|dunhuang|himalayan|arctic|antarctic|shanghai|tokyo|osaka|world|china|real-world/.test(lower);
  const isXianxia=/xianxia|immortal|celestial|heaven|goddess|moon|nuwa|xuannv|chang|divine|dragon|phoenix|palace/.test(lower);
  const isDark=/dark|gothic|succubus|demon|vampire|witch|infernal|noir/.test(lower);
  const isModern=/modern|city|cyber|y2k|fashion|editorial|magazine|urban|seoul|tokyo|shanghai|office|cafe/.test(lower);
  const isNature=/desert|arctic|snow|sea|lake|mountain|forest|aurora|waterfall|prairie|beach|garden|provence|lavender/.test(lower);
  const mood=isDark?"dramatic, alluring, mysterious, powerful and cinematic":isXianxia?"ethereal, majestic, graceful and mythic":isModern?"confident, fashionable, polished and contemporary":isNature?"natural, cinematic, expansive and poetic":"elegant, expressive, high-end and cinematic";
  const scene=isLandmark?`recognizable real-world travel location matching ${core}, with accurate landmark architecture, atmospheric depth, and model photoshoot framing`:isDark?`dark fantasy environment matching ${core}, with layered shadows, rich textures, and a premium cinematic background`:isXianxia?`mythic Chinese fantasy environment matching ${core}, with palace architecture, mist, clouds, magical atmosphere, and grand depth`:isModern?`stylish modern editorial environment matching ${core}, with clean fashion composition and cinematic background depth`:isNature?`wide natural landscape matching ${core}, with strong environmental scale, atmospheric light, and travel editorial realism`:`complete cinematic environment matching ${core}, with clear setting, depth, and high-end editorial composition`;
  const outfit=isDark?`complete dark fantasy couture outfit matching ${core}, refined fitted silhouette, ornate lace or armor details, premium jewelry, mature elegant styling`:isXianxia?`complete flowing xianxia or historical couture outfit matching ${core}, layered silk, embroidered details, long sleeves or ribbons, ornate hair accessories`:isModern?`complete high-fashion outfit matching ${core}, polished styling, premium fabrics, contemporary accessories, editorial silhouette`:isNature?`complete travel-fashion outfit matching ${core}, flowing fabric or layered outdoor styling, colors harmonized with the landscape`:`complete character-specific couture outfit matching ${core}, with coherent fabric, accessories, hairstyle, and silhouette`;
  const fx=isDark?`subtle magical smoke, dark particles, petals or sparks, atmospheric glow, effects supporting the character without covering the face`:isXianxia?`floating particles, flowing ribbons, mist, magical light aura, cinematic fantasy effects supporting the pose`:isModern?`lens flare, bokeh, reflections, film grain or neon glow matching the scene, subtle editorial effects`:isNature?`wind in fabric and hair, atmospheric haze, natural particles, reflections or environmental movement`:isLandmark?`natural travel-photo atmosphere, lens bokeh, subtle wind, realistic reflections, landmark depth cues`:`cinematic atmosphere, subtle particles, fabric motion, depth, and realistic environmental effects`;
  const light=isDark?`alluring low-key cinematic lighting, controlled face key light, deep shadows, colored rim light, high contrast but readable facial features`:isXianxia?`soft divine cinematic light, volumetric rays, glowing rim light, clear face illumination, magical color contrast`:isModern?`professional editorial lighting, flattering face key light, city or studio ambient glow, polished highlights`:isNature?`golden hour, moonlight, snow bounce, campfire, or natural ambient lighting matching the environment, with clear face exposure`:isLandmark?`realistic travel photography lighting matching the landmark time of day, flattering face fill, cinematic depth`:`professional cinematic lighting with clear facial readability, atmospheric rim light, and balanced contrast`;
  const cam=isLandmark?`model travel editorial composition, landmark clearly recognizable, subject face sharp, full-body or three-quarter framing with strong environmental depth`:isDark?`vertical three-quarter portrait, powerful body language, face sharp, costume and atmosphere clearly visible`:isXianxia?`vertical heroic fantasy poster composition, flowing costume visible, face sharp, environment and effects framing the subject`:isModern?`fashion editorial portrait composition, clean silhouette, face sharp, outfit visible, premium magazine framing`:isNature?`environmental travel portrait, subject integrated into the landscape, face readable, strong sense of scale`:`polished portrait composition, face sharp, body pose clear, outfit and setting readable`;
  const quality=`ultra realistic photorealistic image, premium model photoshoot, natural skin texture, detailed fabric, coherent anatomy, cinematic color grading, 8K HDR`;
  const map={char:`${mood} mood for ${core}`,s:scene,o:outfit,fx,l:light,cam,q:quality,col:`coherent color palette matching ${core}, cinematic grade, no random colors`};
  return map[field]||"";
}
function completeEnglishField(p,field,value,minLen=36){
  const cleaned=cleanEnglishLine(value||"");
  if(cleaned.length>=minLen)return cleaned;
  const fallback=englishFieldFallback(p,field);
  if(cleaned&&fallback)return `${fallback}, ${cleaned}`;
  return fallback||cleaned;
}

const ALL_IDS=Object.keys(P);
let selPID="warrior",selMK="warrior",selAngle="4:5 social portrait format",activeTab="preset",manualMK=false,txtMode="off",txtStyle="movie_title";

// tabs
document.querySelectorAll(".tab").forEach(t=>t.addEventListener("click",()=>{
  document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));
  document.querySelectorAll(".tab-panel").forEach(x=>x.classList.remove("active"));
  t.classList.add("active");document.getElementById("tab-"+t.dataset.tab).classList.add("active");activeTab=t.dataset.tab;
}));

// cat filter
document.querySelectorAll(".cat-btn").forEach(b=>b.addEventListener("click",()=>{
  document.querySelectorAll(".cat-btn").forEach(x=>x.classList.remove("active"));b.classList.add("active");
  const cat=b.dataset.cat;
  document.querySelectorAll(".preset-card").forEach(c=>{
    if(cat==="all"||c.dataset.cat===cat)c.classList.add("visible");else c.classList.remove("visible");
  });
}));

// random
document.getElementById("random-btn").addEventListener("click",()=>{
  const pid=ALL_IDS[Math.floor(Math.random()*ALL_IDS.length)];
  document.querySelectorAll(".preset-card").forEach(c=>{c.classList.remove("selected");c.classList.add("visible")});
  document.querySelectorAll(".cat-btn").forEach(x=>x.classList.remove("active"));
  document.querySelector('.cat-btn[data-cat="all"]').classList.add("active");
  const card=document.querySelector(`.preset-card[data-pid="${pid}"]`);
  if(card){card.classList.add("selected");card.scrollIntoView({behavior:"smooth",block:"nearest"})}
  selPID=pid;manualMK=false;autoMK(pid);
  const btn=document.getElementById("random-btn");
  btn.innerHTML=`🎲 已選：${P[pid].n} ✨`;
  setTimeout(()=>btn.innerHTML='🎲 隨機幫我選一個風格 <span class="rbadge">選擇困難專用</span>',2500);
});

function autoMK(pid){if(manualMK)return;const p=P[pid];if(!p)return;selMK=p.mk;document.querySelectorAll(".mk-card").forEach(c=>c.classList.toggle("selected",c.dataset.mk===selMK));document.getElementById("auto-makeup-tag").textContent="✦ 自動配妝："+p.n}

// preset select
document.querySelectorAll(".preset-card").forEach(c=>c.addEventListener("click",()=>{
  document.querySelectorAll(".preset-card").forEach(x=>x.classList.remove("selected"));
  c.classList.add("selected");selPID=c.dataset.pid;manualMK=false;autoMK(selPID);
}));

// makeup
document.querySelectorAll(".mk-card").forEach(c=>c.
addEventListener("click",()=>{
  document.querySelectorAll(".mk-card").forEach(x=>x.classList.remove("selected"));
  c.classList.add("selected");selMK=c.dataset.mk;manualMK=true;
  document.getElementById("auto-makeup-tag").textContent="✦ 手動選擇妝容";
}));


// text mode
window.setTxt=function(mode){
  txtMode=mode;
  ["off","auto","custom"].forEach(m=>document.getElementById("tbtn-"+m).classList.toggle("on",m===mode));
  const sub=document.getElementById("text-sub");
  sub.classList.toggle("show",mode!=="off");
  const wrap=document.getElementById("custom-txt-wrap");
  const hint=document.getElementById("auto-txt-hint");
  if(wrap) wrap.style.display = mode==="custom" ? "block" : "none";
  if(hint) hint.style.display = mode==="auto" ? "block" : "none";
};

// text style
document.querySelectorAll(".ts-card").forEach(c=>c.addEventListener("click",()=>{
  document.querySelectorAll(".ts-card").forEach(x=>x.classList.remove("selected"));c.classList.add("selected");txtStyle=c.dataset.ts;
}));

function bindChip(chip){
  chip.addEventListener("click",()=>{chip.classList.toggle("on");updateSum()});
}
function addKeywordChip(g,v,selected=false,fromPreset=false){
  if(!v)return null;
  const container=document.getElementById("chips-"+g);
  if(!container)return null;
  const value=String(v).trim();
  if(!value)return null;
  const existing=[...container.querySelectorAll(".chip")].find(x=>x.textContent===value);
  if(existing){
    if(selected)existing.classList.add("on");
    if(fromPreset)existing.classList.add("from-preset");
    return existing;
  }
  const chip=document.createElement("div");
  chip.className="chip"+(selected?" on":"")+(fromPreset?" from-preset":"");
  chip.dataset.g=g;
  chip.textContent=value;
  chip.title=value;
  bindChip(chip);
  container.appendChild(chip);
  return chip;
}
function populatePresetImport(){
  const sel=document.getElementById("preset-import-select");
  if(!sel)return;
  sel.innerHTML="";
  ALL_IDS.forEach(id=>{
    const p=P[id];
    if(!p)return;
    const opt=document.createElement("option");
    opt.value=id;
    opt.textContent=p.n || id;
    sel.appendChild(opt);
  });
}
function importPresetToKeywords(pid){
  const p=P[pid];
  if(!p)return;
  document.querySelectorAll(".chip.on").forEach(c=>c.classList.remove("on"));
  addKeywordChip("scene",p.s,true,true);
  addKeywordChip("outfit",p.o,true,true);
  addKeywordChip("fx",p.fx,true,true);
  addKeywordChip("light",p.l,true,true);
  if(p.prop)addKeywordChip("pose",p.prop,true,true);
  if(p.cam)addKeywordChip("pose",p.cam,true,true);
  if(p.col)addKeywordChip("weather",p.col,true,true);
  if(p.char)addKeywordChip("scene",p.char,true,true);
  selMK=p.mk||selMK;
  document.querySelectorAll(".mk-card").forEach(c=>c.classList.toggle("selected",c.dataset.mk===selMK));
  document.getElementById("auto-makeup-tag").textContent="✦ 已匯入風格配妝："+(p.n||pid);
  manualMK=false;
  updateSum();
}
function pickRandom(arr){
  return arr[Math.floor(Math.random()*arr.length)];
}
function randomPresetValue(key){
  const values=ALL_IDS.map(id=>P[id]?.[key]).filter(Boolean);
  return values.length?pickRandom(values):"";
}
function randomCustomStyle(){
  document.querySelectorAll(".chip.on").forEach(c=>c.classList.remove("on"));
  const mkSource=P[pickRandom(ALL_IDS)];
  if(mkSource?.mk){
    selMK=mkSource.mk;
    document.querySelectorAll(".mk-card").forEach(c=>c.classList.toggle("selected",c.dataset.mk===selMK));
    document.getElementById("auto-makeup-tag").textContent="✦ 隨機混搭配妝："+(mkSource.n||selMK);
  }
  addKeywordChip("location",randomPresetValue("s"),true,true);
  addKeywordChip("scene",randomPresetValue("char"),true,true);
  addKeywordChip("outfit",randomPresetValue("o"),true,true);
  addKeywordChip("fx",randomPresetValue("fx"),true,true);
  addKeywordChip("light",randomPresetValue("l"),true,true);
  const prop=randomPresetValue("prop");
  const cam=randomPresetValue("cam");
  if(prop)addKeywordChip("pose",prop,true,true);
  if(cam)addKeywordChip("pose",cam,true,true);
  const col=randomPresetValue("col");
  if(col)addKeywordChip("weather",col,true,true);
  manualMK=false;
  updateSum();
}
populatePresetImport();
const presetImportBtn=document.getElementById("preset-import-btn");
if(presetImportBtn){
  presetImportBtn.addEventListener("click",()=>{
    const sel=document.getElementById("preset-import-select");
    if(sel)importPresetToKeywords(sel.value);
  });
}
const customRandomBtn=document.getElementById("custom-random-btn");
if(customRandomBtn){
  customRandomBtn.addEventListener("click",()=>{
    randomCustomStyle();
    customRandomBtn.textContent="已隨機生成 ✨";
    setTimeout(()=>customRandomBtn.textContent="隨機生成風格",1600);
  });
}

// chips
document.querySelectorAll(".chip").forEach(bindChip);
function addC(g,id){
  const inp=document.getElementById(id);const v=inp.value.trim();if(!v)return;
  addKeywordChip(g,v,true,false);inp.value="";updateSum();
}
window.addC=addC;
function updateSum(){
  const all=[...document.querySelectorAll(".chip.on")].map(c=>c.textContent);
  const el=document.getElementById("selected-summary");
  if(!all.length){el.textContent="尚未選擇";return;}
  el.innerHTML="";
  all.forEach(t=>{
    const span=document.createElement("span");
    span.textContent=t+" ×";
    span.style.cssText="display:inline-block;background:#fff;border:1px solid #ddd;border-radius:12px;padding:2px 8px;margin:2px;font-size:11px;cursor:pointer";
    span.addEventListener("click",()=>{
      document.querySelectorAll(".chip").forEach(c=>{if(c.textContent===t)c.classList.remove("on")});
      updateSum();
    });
    el.appendChild(span);
  });
}

// size cards
document.querySelectorAll(".size-card").forEach(card=>card.addEventListener("click",()=>{
  document.querySelectorAll(".size-card").forEach(x=>x.classList.remove("on"));
  card.classList.add("on");
  selAngle=card.dataset.v;
}));

// generate - 即時組合英文咒語
document.getElementById("gen-btn").addEventListener("click",async()=>{
  const genBtn=document.getElementById("gen-btn");
  const resultBox=document.getElementById("result-box");
  resultBox.style.display="none";

  // ① 核心鎖臉指令
  const FACE_LOCK = "請以這則訊息中上傳的照片人物為唯一原型，只改變服裝、場景、光影與姿勢，不改變本人身份。嚴格保留原始五官比例、臉型、骨相、眼型、鼻型、嘴型、髮際線、膚色與整體臉部結構，preserve exact facial identity，maintain original facial structure，do not change facial proportions。妝容只能覆蓋在原本五官上，不可重塑五官或換成其他明星/角色的臉。保持人物臉部清晰，髮絲細節根根分明（detailed individual hair strands），不要讓頭髮、道具、面紗或特效遮擋原始五官特徵。";

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
      location:get("location"),weather:get("weather"),pose:get("pose")};
  }

  // ③ 妝容
  const mkDesc = MK[selMK]||MK["warrior"];

  // ④ 文字指令
  let txtLine="";
  if(txtMode==="auto"){
    const tsd=TS[txtStyle]||TS["movie_title"];
    txtLine=`Typography design: ${toEnglishTextStyle(tsd)}. Generate short English text only, matched to the theme, naturally integrated into the composition. Keep it clean and readable; avoid garbled letters, misspellings, dense text, and any text covering the face.`;
  } else if(txtMode==="custom"){
    const customTxt=document.getElementById("custom-txt-input").value.trim();
    const tsd=TS[txtStyle]||TS["movie_title"];
    txtLine=`Typography design: ${toEnglishTextStyle(tsd)}. ${customTxt?"Use the exact custom text: \""+customTxt+"\".":"Generate short English text only, matched to the theme."} Integrate the typography naturally into the composition. Keep it clean and readable; avoid garbled letters, misspellings, dense text, and any text covering the face.`;
  }

  // ⑤ 額外備註
  const extras=document.getElementById("extra-notes").value.trim();

  // ⑥ 組合咒語
  let parts=[];

  // 鎖臉（第一句）
  parts.push(FACE_LOCK);

  if(p){
    // 預設風格：七層架構拼接
    if(p.char) parts.push(p.char);
    parts.push(`妝容：${mkDesc}`);
    parts.push(`服裝：${p.o}`);
    if(p.prop) parts.push(`道具：${p.prop}`);
    parts.push(`場景：${p.s}`);
    parts.push(`特效：${p.fx}`);
    parts.push(`光影：${p.l}`);
    if(p.cam) parts.push(`構圖：${p.cam}`);
    else parts.push(`構圖：${p.cam}，輸出尺寸：${selAngle}`);
    if(p.col) parts.push(`色彩：${p.col}`);
    parts.push(`品質：${p.q}`);
    if(txtLine) parts.push(txtLine);
    if(extras) parts.push(`額外要求：${extras}`);
    parts.push(`不要：低畫質、卡通感、AI感、廉價感、文字水印、${p.neg}`);
  } else {
    // 自由組合
    parts.push(`妝容：${mkDesc}`);
    if(customParts.location!=="未指定") parts.push(`地點：${customParts.location}`);
    parts.push(`場景：${customParts.scene}`);
    if(customParts.weather!=="未指定") parts.push(`天氣氛圍：${customParts.weather}`);
    parts.push(`服裝：${customParts.outfit}`);
    if(customParts.pose!=="未指定") parts.push(`姿態：${customParts.pose}`);
    parts.push(`特效：${customParts.fx}`);
    parts.push(`光影：${customParts.light}`);
    parts.push(`輸出尺寸：${selAngle}`);
    if(txtLine) parts.push(txtLine);
    if(extras) parts.push(`額外要求：${extras}`);
    parts.push("不要：低畫質、卡通感、AI感、廉價感、文字水印");
  }

  // 全英文版直接顯示
  const enResult = sanitizePolicySensitiveTerms(cleanEnglishPrompt(buildEnglishPrompt(p, customParts, mkDesc, selAngle, txtLine, extras, FACE_LOCK)));
  document.getElementById("result-text").textContent=enResult;
  resultBox.style.display="block";
  resultBox.scrollIntoView({behavior:"smooth",block:"start"});
});

// 建立全英文 Prompt
function buildEnglishPrompt(p, customParts, mkDesc, selAngle, txtLine, extras, FACE_LOCK){
  const parts=[];
  const TRAVEL_STYLING_BOOST="Professional travel-portrait styling upgrade: makeup should look like a real paid travel photoshoot makeover, more polished and more visible than everyday makeup, with defined eye makeup, refined eyeliner, curled lashes, layered eyeshadow, blush, contour, luminous base, polished lips, and camera-ready skin while still preserving the uploaded person's original facial structure. Costume styling must feel abundant and ceremonial: layered fabrics, embroidered trims, waist ornaments, earrings, necklaces, bracelets, tassels, hairpins, floral hair inserts, crowns, combs, beads, ribbons, veils, shawls, hand props, and matching accessories. Do not simplify the outfit or leave the hair plain; build a complete head-to-toe travel photoshoot look with rich but coherent accessories.";
  const UNIVERSAL_NEGATIVES = "low quality, cartoon style, AI art style, cheap look, watermark, face swap, altered facial proportions, disconnected arms, floating limbs, spatial contradiction between face and body, broken pose flow, hidden face";

  const addPart=(label,value)=>{
    if(value===undefined||value===null)return;
    const cleaned=cleanEnglishLine(String(value));
    if(cleaned)parts.push(label?`${label}: ${cleaned}`:cleaned);
  };
  // ① Unified Identity & Pose Lock (v6.51)
  parts.push("Identity Lock: Use the uploaded photo as the sole identity reference. Preserve exact facial identity, bone structure, and skin tone with complete fidelity. Change ONLY outfit, environment, and body pose. Pose Coherence: Face angle, neck alignment, shoulder rotation, and center of gravity must form one continuous physical pose. Identity override: if style elements conflict with the face, keep the face unchanged. Ensure no props, hair, or effects cover eyes, nose, or lips.");

  if(p){
    addPart("Style Theme",presetEnglishCore(p));
    addPart("Aura",completeEnglishField(p,"char",p.char));
    addPart("Makeup",mkDesc);
    addPart("Styling Boost",TRAVEL_STYLING_BOOST);
    addPart("Outfit",completeEnglishField(p,"o",p.o));
    addPart("Props",p.prop);
    addPart("Scene",completeEnglishField(p,"s",p.s));
    addPart("Visual effects",completeEnglishField(p,"fx",p.fx));
    addPart("Lighting",completeEnglishField(p,"l",p.l));
    if(p.cam) addPart("Composition",completeEnglishField(p,"cam",p.cam));
    else parts.push(`Output size: ${selAngle}`);
    addPart("Color tone",completeEnglishField(p,"col",p.col,28));
    addPart("Quality",completeEnglishField(p,"q",p.q));
    addPart("",txtLine);
    addPart("Special requirements",extras);
    addPart("Avoid", `${UNIVERSAL_NEGATIVES}, ${p.neg||""}`);
  } else {
    if(customParts){
      const get=g=>[...document.querySelectorAll(`.chip.on[data-g="${g}"]`)].map(x=>x.textContent).join(", ")||"not specified";
      parts.push(`Makeup: ${mkDesc}`);
      parts.push(`Styling Boost: ${TRAVEL_STYLING_BOOST}`);
      if(get("location")!=="not specified") parts.push(`Location: ${get("location")}`);
      parts.push(`Scene: ${get("scene")}`);
      if(get("weather")!=="not specified") parts.push(`Weather/atmosphere: ${get("weather")}`);
      parts.push(`Outfit: ${get("outfit")}`);
      parts.push(`Visual effects: ${get("fx")}`);
      parts.push(`Lighting: ${get("light")}`);
      parts.push(`Output size: ${selAngle}`);
      if(txtLine) parts.push(txtLine);
      if(extras) parts.push(`Special requirements: ${extras}`);
      parts.push(`Avoid: ${UNIVERSAL_NEGATIVES}`);
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
