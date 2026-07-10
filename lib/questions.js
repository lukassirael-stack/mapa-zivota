// ⚠️ PLACEHOLDER z 19otázkové verze — PŘEGENEROVAT z produkčního index.html (20 otázek)!
// Otázky Hvězdného kvízu (v11) — extrahováno pro dekódování odpovědí.
// phase1: 20 univerzálních otázek. phase2: 16 otázek pro každý hvězdný rod (klíč = group_result v Supabase).

const QUESTIONS = {
  "phase1": [
    {
      "text": "Když se díváš na noční oblohu, co cítíš nejsilněji?",
      "options": [
        "Hluboký stesk — jako bych se díval/a domů",
        "Touhu po poznání — vesmír je nekonečná záhada",
        "Klid a harmonii — hvězdy mě uklidňují",
        "Silný pocit poslání — jsem tu z důvodu",
        "Pocit, že čas tam venku plyne jinak"
      ]
    },
    {
      "text": "Jaká je tvoje největší výzva na Zemi?",
      "options": [
        "Přemíra empatie — absorbuju bolest a emoce druhých",
        "Nemohu najít klid — pořád hledám vyšší pravdu",
        "Stesk po domově — nikdy jsem se tu necítil/a plně doma",
        "Systémy a pravidla mi přijdou zbytečně omezující",
        "Nést v sobě vzpomínky na místa, která neexistují"
      ]
    },
    {
      "text": "Které prostředí tě nejhlouběji obnovuje?",
      "options": [
        "Příroda, lesy, voda, ticho",
        "Posvátná místa — chrámy, pyramidy, kamenné kruhy",
        "Výšiny — hory, otevřené nebe, vítr",
        "Ticho a samota, absolutní tma nebo hvězdná obloha",
        "Moderní prostředí s technologií a inovací"
      ]
    },
    {
      "text": "Jak bys nejlépe popsal/a svoji největší duchovní sílu?",
      "options": [
        "Léčím — lidi, vztahy, staré rány duše",
        "Chráním — stojím za pravdu a spravedlnost",
        "Tvořím — přináším krásu, hudbu, umění do světa",
        "Učím — nesu moudrost a předávám ji dál",
        "Propojuji — stavím mosty mezi lidmi i světy"
      ]
    },
    {
      "text": "Co tě nejvíce fascinuje v duchovním světě?",
      "options": [
        "Andělé, průvodci a bytosti světla",
        "Draci, okřídlení lvi a mocné archetypální bytosti",
        "Delfíni, velryby a moudrost oceánů",
        "Kosmické zákony, posvátná geometrie, Akáša",
        "Portály, cestování časem, jiné dimenze"
      ]
    },
    {
      "text": "Jak se cítíš ve vztahu k ostatním lidem?",
      "options": [
        "Hluboce empatický/á — cítím druhé jako sebe sama",
        "Ochranitelský/á — instinktivně chráním slabší",
        "Moudrý/á pozorovatel/ka — vidím vzorce a hluboké pravdy",
        "Svobodný/á duch — potřebuji prostor a autenticitu",
        "Radostný/á — přináším světlo a smích do každé místnosti"
      ]
    },
    {
      "text": "Ke které ze starověkých civilizací cítíš nejsilnější pouto?",
      "options": [
        "Egypt — faraoni, hieroglyfy, záhady pyramid",
        "Atlantida nebo Lemuria — ztracené civilizace světla",
        "Keltové — víly, lesy, zelená magie přírody",
        "Mayové nebo Inkové — kosmologie a cykly času",
        "Žádná — cítím spíše mimozemské než pozemské kořeny"
      ]
    },
    {
      "text": "Který element tě přitahuje nejvíce?",
      "options": [
        "Voda — hloubka, emoce, oceán",
        "Vzduch — svoboda, výšiny, vítr, myšlenky",
        "Oheň — transformace, vášeň, světlo ve tmě",
        "Země — kořeny, tělo, příroda, krystaly",
        "Éter — prázdnota, vesmír, ticho mezi hvězdami"
      ]
    },
    {
      "text": "Jaká je podle tebe tvá hlavní mise na Zemi?",
      "options": [
        "Probouzet vědomí — být majákem pro druhé",
        "Léčit staré rány — lidí, rodin, planety",
        "Chránit a bojovat za světlo a pravdu",
        "Tvořit nové — umění, vize, systémy, cesty",
        "Udržovat rovnováhu mezi světy"
      ]
    },
    {
      "text": "Jaký typ bytostí tě přitahuje nejvíce?",
      "options": [
        "Kočkovité — lvi, tygři, jaguáři, domácí kočky",
        "Vodní — delfíni, velryby, chobotnice",
        "Okřídlené — orli, havrani, sovy",
        "Draci, hadi, prastaré bytosti Země",
        "Jednorožci, víly, Pegasus — magické bytosti"
      ]
    },
    {
      "text": "Jak vnímáš svůj věk duše?",
      "options": [
        "Jsem velmi stará duše — pamatuji si věky a věky",
        "Přicházím z jiného času — čas vnímám jinak",
        "Mám živé 'vzpomínky' na místa, která jsem nikdy nenavštívil/a",
        "Cítím, že existuji mimo čas — věčná a bezčasová",
        "Jsem relativně nová duše — vše je čerstvé a fascinující"
      ]
    },
    {
      "text": "Jak bys popsal/a svůj vnitřní svět?",
      "options": [
        "Hluboký oceán plný emocí, intuice a tajemství",
        "Živý les plný magie, symbolů a skrytých světů",
        "Čisté světlo — ticho, prostornost, mír",
        "Plamen — vášeň, kreativita, transformační energie",
        "Kosmický prostor — nekonečný, tichý, plný hvězd"
      ]
    },
    {
      "text": "Jak se projevuje tvé duchovní probuzení?",
      "options": [
        "Od dětství — vždy jsem věděl/a, že jsem jiný/á",
        "Přes sny, vize a mimotělní zkušenosti",
        "Přes přírodu — v lese, u vody se otevírám",
        "Náhle — jako by se otevřely vesmírné dveře",
        "Přes vztahy — druzí mi zrcadlí mou duši"
      ]
    },
    {
      "text": "Co je pro tebe nejtěžší přijmout na lidské existenci?",
      "options": [
        "Utrpení — proč musí být na světě tolik bolesti",
        "Omezenost — lidé nechtějí růst a měnit se",
        "Zapomínání — ztráta spojení s tím, čím skutečně jsme",
        "Pomíjivost — vše co miluji jednou skončí",
        "Oddělenost — pocit, že jsme izolovaní jeden od druhého"
      ]
    },
    {
      "text": "Který symbol na tebe působí nejsilněji?",
      "options": [
        "Oko v trojúhelníku nebo pyramida — vševidoucí vědomí",
        "Spirála nebo galaxie — nekonečný kosmický tanec",
        "Květ života — posvátná geometrie a jednota",
        "Had nebo caduceus — transformace a uzdravení",
        "Přesýpací hodiny — rovnováha a čas"
      ]
    },
    {
      "text": "Co ti přináší největší pocit smyslu?",
      "options": [
        "Pomáhat druhým — vidět jak roste a léčí se",
        "Tvořit — když vzniká něco krásného mýma rukama nebo myslí",
        "Chránit — stát za někým kdo potřebuje pomoc",
        "Propojovat — sbližovat duše a stavět mosty",
        "Být v tichu — v kontaktu s něčím větším než jsem já"
      ]
    },
    {
      "text": "Co tě přirozeně přitahuje v životě?",
      "options": [
        "Umění, hudba, tvorba — vyjadřovat duši skrze formu a krásu",
        "Příroda, lesy, zvířata — žít v harmonii s živým světem",
        "Věda, systémy, technologie — pochopit jak vše funguje",
        "Transformace bolesti — proměňovat těžké v moudrost",
        "Propojovat různé světy a lidi — být mostem"
      ]
    },
    {
      "text": "Jaká zkušenost tě v životě nejvíce formovala?",
      "options": [
        "Hluboká ztráta nebo trauma — které se proměnilo v sílu",
        "Tvorba nebo umění — kdy jsem skrze ně objevil/a svoji duši",
        "Propojení s přírodou — kdy jsem cítil/a jednotu se vším živým",
        "Průlom ve vědomí — náhlé rozšíření vnímání reality",
        "Budování něčeho — projekt, systém, místo — které přetrvalo"
      ]
    },
    {
      "text": "Jak se projevuje tvoje intuice nejsilněji?",
      "options": [
        "Cítím emoce a bolest druhých jako své vlastní",
        "Vidím vzorce a systémy které ostatní nevidí",
        "Slyším v přírodě nebo v hudbě poselství a kódy",
        "Vidím různé perspektivy a propojuji je do harmonie",
        "Vím kde je potřeba transformace — ve mně i ve světě"
      ]
    }
  ],
  "phase2": {
    "Pleiades": {
      "groupName": "Plejádská duše",
      "questions": [
        {
          "text": "Jaká je tvoje přirozená role, když vstoupíš do skupiny lidí?",
          "options": [
            "Centrum — ostatní se kolem mě přirozeně seskupují",
            "Průzkumník — jako první jdu tam, kam ostatní nešli",
            "Most — propojuji protikladné světy a energie",
            "Léčitel — intuitivně vím, co kdo potřebuje",
            "Tichý moudrý — pozoruji a předávám poznání"
          ]
        },
        {
          "text": "Co děláš ve chvíli hlubokého smutku?",
          "options": [
            "Uzavřu se do sebe — potřebuji ticho a samotu",
            "Vyhledám přírodu nebo vodu — tam se uzdravuji",
            "Tvořím — hudba, malování, psaní mě léčí",
            "Pomáhám druhým — v jejich péči nacházím smysl",
            "Hledám poznání — proč se to děje, co se mám naučit"
          ]
        },
        {
          "text": "Jaký druh léčení ti nejvíce rezonuje?",
          "options": [
            "Energetické léčení rukama — přímý přenos světla",
            "Léčení slovem, hlasem nebo hudbou",
            "Práce s Akášickými záznamy a informacemi",
            "Léčení přes přírodu — byliny, kameny, elementy",
            "Léčení přes umění a kreativní vyjádření"
          ]
        },
        {
          "text": "Jak prožíváš lásku a blízké vztahy?",
          "options": [
            "Hluboce a intenzivně — miluji bezmezně, ale snadno se ztrácím",
            "S velkou svobodou — miluji, ale potřebuji prostor",
            "Jako učitel a žák — ve vztahu vždy někdo roste",
            "Jako tanec protikladů — přitahuji i odpuzuji",
            "Jako služba — láska je pro mě čin, ne slovo"
          ]
        },
        {
          "text": "Jaká je tvoje nejsilnější intuitivní schopnost?",
          "options": [
            "Jasnoucítění — fyzicky cítím energie a emoce druhých",
            "Jasnovidnost — přichází mi obrazy a vize",
            "Jasnoslyšení — slyším vnitřní hlas nebo průvodce",
            "Jasnoznalost — prostě vím věci bez důvodu",
            "Telepatické spojení s přírodou a zvířaty"
          ]
        },
        {
          "text": "Jaký vztah máš k Božskému ženskému principu?",
          "options": [
            "Je to moje přirozená esence — ztělesňuji ho",
            "Integruji ho vědomě — je klíčem k uzdravení Země",
            "Propojuji ho s Božským mužským — hledám alchymii obou",
            "Pracuji s ním přes tvorbu a krásu",
            "Cítím ho jako tiché posvátné ticho uvnitř"
          ]
        },
        {
          "text": "Co tě probouzí uprostřed noci?",
          "options": [
            "Pocit, že někdo nebo něco potřebuje mou pomoc",
            "Náhlé ozření nebo vize nového řešení",
            "Ticho — probouzím se přirozeně a jsem v klidu",
            "Intenzivní sny z jiných světů nebo dob",
            "Pocit napětí nebo nerovnováhy v okolí"
          ]
        },
        {
          "text": "Jak se vztahuješ k technologii?",
          "options": [
            "Fascinuje mě — integruji ji do duchovní práce",
            "Používám ji jako nástroj — není pro mě klíčová",
            "Spíše se jí vyhýbám — preferuji přirozené způsoby",
            "Vidím v ní potenciál pro probuzení vědomí",
            "Mám k ní ambivalentní vztah — vidím světlo i stín"
          ]
        },
        {
          "text": "Co nejlépe popisuje tvůj vztah k hudbě?",
          "options": [
            "Hudba je portál — skrze ni cestuji do jiných světů",
            "Hudba mě léčí — nemohu bez ní existovat",
            "Sám/a tvořím nebo zpívám — je to moje řeč duše",
            "Ticho je pro mě hudbou — hluboce vnímám vibrace",
            "Hudba mi pomáhá propojit se s druhými"
          ]
        },
        {
          "text": "Jak vnímáš svoji roli v duchovním probuzení Země?",
          "options": [
            "Jsem světelný maják — moje přítomnost probouzí druhé",
            "Nesu nové technologie vědomí",
            "Léčím karmické vzorce rodových linií",
            "Mapuji a naviguju cestu pro ostatní",
            "Přináším harmonii tam, kde je konflikt"
          ]
        },
        {
          "text": "Co cítíš, když jsi blízko vodě?",
          "options": [
            "Hluboké uzdravení — voda mi obnovuje energetické pole",
            "Vzpomínky — jako bych znal/a jiné oceány a světy",
            "Propojení — cítím všechny bytosti které voda živí",
            "Svobodu — voda symbolizuje neohraničenost",
            "Klid — voda mě vrací do přítomnosti"
          ]
        },
        {
          "text": "Jaké je tvoje největší karmické téma?",
          "options": [
            "Hranice — naučit se říkat ne z lásky, ne ze strachu",
            "Autenticita — odvaha ukázat světu, kdo skutečně jsem",
            "Rovnováha — integrovat světlo i stín bez odsuzování",
            "Důvěra — věřit procesu i když nevidím cestu",
            "Přijetí — přijmout lidskost v celé její nedokonalosti"
          ]
        },
        {
          "text": "Jak se projevuje tvůj dar v každodenním životě?",
          "options": [
            "Lidé mi spontánně svěřují svá nejtěžší břemena",
            "Přináším nové nápady a vize které ostatní nechápou",
            "Vidím rovnováhu nebo nerovnováhu tam, kde ji ostatní nevidí",
            "Mám přirozený dar učit a předávat poznání",
            "Lidé se v mé přítomnosti cítí bezpečně a milovaně"
          ]
        },
        {
          "text": "Co pro tebe znamená domov?",
          "options": [
            "Místo kde jsem obklopena/ý lidmi které miluji",
            "Místo ticha a klidu kde se ponořím do sebe",
            "Místo kde mohu svobodně tvořit a experimentovat",
            "Místo v přírodě — les, hora, voda",
            "Domov je stav vědomí — jsem doma všude"
          ]
        },
        {
          "text": "Jakou barvu nebo světlo vnímáš nejsilněji při meditaci?",
          "options": [
            "Zlaté nebo bílé světlo — čisté a centrální",
            "Modré nebo stříbrné — chladné a jasné",
            "Růžové nebo tyrkysové — láska a léčení",
            "Fialové nebo indigové — hluboká moudrost",
            "Zelené nebo zlatozelené — příroda a růst"
          ]
        },
        {
          "text": "Jaká situace tě v životě nejvíce formovala?",
          "options": [
            "Moment kdy jsem pochopil/a, že léčím druhé svou přítomností",
            "Průlom ve vědomí — náhlé rozšíření vnímání",
            "Uvědomění si hlubokých protikladů v sobě i světě",
            "Vizionářský zážitek nebo setkání s průvodcem",
            "Ztráta nebo krize která mě přivedla k tichu uvnitř"
          ]
        }
      ]
    },
    "Sirius": {
      "groupName": "Siriánská duše",
      "questions": [
        {
          "text": "Jaký je tvůj vztah k Egyptu a starověkým chrámům?",
          "options": [
            "Silné déjà vu — jako bych tam žil/a a pracoval/a",
            "Fascinují mě jako místa síly, ale není to osobní",
            "Přitahují mě spíše oceány a vodní světy než chrámy",
            "Egypt vidím jako most mezi dimenzemi vědomí",
            "Cítím Egypt jako místo svého nejhlubšího zasvěcení"
          ]
        },
        {
          "text": "Jak vnímáš posvátnou geometrii?",
          "options": [
            "Je pro mě přirozený jazyk — vidím ji všude",
            "Vnímám ji intuitivně přes tělo a pocity",
            "Je pro mě abstraktní — víc mi říkají přírodní vzorce",
            "Pracuji s ní jako s kódem pro transformaci vědomí",
            "Je krásná, ale nejtěžší je pro mě ji uchopit"
          ]
        },
        {
          "text": "Co tě více přitahuje?",
          "options": [
            "Pyramidy, obelisky, chrámy — pevné struktury vědomí",
            "Oceán, delfíni, velryby — tekuté vědomí",
            "Světelné kódy, frekvenční práce, hvězdné portály",
            "Rituály zasvěcení a předávání moudrosti",
            "Hlubinná práce s podvědomím a Akášou"
          ]
        },
        {
          "text": "Jaká je tvoje přirozená forma léčení?",
          "options": [
            "Práce se zvukem — tóny, mantry, zpěv",
            "Práce s vodou — koupele, záměry do vody",
            "Práce se světlem a geometrií",
            "Tělesný kontakt — dotyk, masáž, péče o fyzické tělo",
            "Práce s informačními poli a záznamy"
          ]
        },
        {
          "text": "Jak vnímáš delfíny a velryby?",
          "options": [
            "Jsou moji duchovní příbuzní — cítím k nim hluboké pouto",
            "Obdivuji je jako nositele inteligence",
            "Vnímám je jako strážce kosmické paměti oceánů",
            "Spojuji je s Atlantidou a ztracenými civilizacemi",
            "Jsou pro mě symbolem svobodného vědomí"
          ]
        },
        {
          "text": "Co pro tebe znamená zasvěcení?",
          "options": [
            "Rituál v chrámu nebo posvátném prostoru",
            "Ponoření do vody — fyzické i symbolické",
            "Přímý přenos světelných kódů bez fyzického rituálu",
            "Průchod temnotou a znovuzrození",
            "Předání moudrosti od mistra k žákovi"
          ]
        },
        {
          "text": "Jaká je tvoje nejhlubší touha?",
          "options": [
            "Pomoct lidstvu vybudovat novou civilizaci světla",
            "Léčit rány Země a obnovit harmonii přírody",
            "Přinést na Zemi nejvyšší vědomí lásky a jednoty",
            "Uchovat a předat starověkou moudrost",
            "Probouzet vědomí skrze frekvenční práci"
          ]
        },
        {
          "text": "Jak vnímáš smrt a přechod?",
          "options": [
            "Jako zasvěcení — podobně jako egyptský přechod Duatem",
            "Jako návrat do oceánu vědomí",
            "Jako transformaci frekvence — smrt neexistuje",
            "Jako přirozený cyklus podobný přílivu a odlivu",
            "Jako portál do vyšší dimenze vědomí"
          ]
        },
        {
          "text": "Co tě nejvíce fascinuje v egyptské mytologii?",
          "options": [
            "Bohyně Isis — léčení, magie, mateřství",
            "Osiris — smrt, znovuzrození, soud mrtvých",
            "Thoth — moudrost, záznamy, kosmické písmo",
            "Hathor — hudba, láska, radost, kráva nebes",
            "Ra — sluneční vědomí, cyklus světla a tmy"
          ]
        },
        {
          "text": "Jaká je tvoje přirozená schopnost v práci s informacemi?",
          "options": [
            "Čtu z Akášických záznamů nebo energetických polí",
            "Cítím pravdu v těle — fyzicky vnímám soulad",
            "Přijímám informace přes světelné kódy a geometrii",
            "Hluboká analýza — vidím vzorce za vzorci",
            "Telepatie — přijímám informace přímo z vědomí druhých"
          ]
        },
        {
          "text": "Co cítíš, když jsi u moře?",
          "options": [
            "Klid a majestátnost — oceán je obraz věčnosti",
            "Jako bych přišel/a domů — oceán je moje skutečná vlast",
            "Propojení s kosmickým vědomím — oceán je portál",
            "Slyším v něm záznamy Atlantidy a prastarých světů",
            "Cítím v něm živé vědomí — ocean je bytost sama o sobě"
          ]
        },
        {
          "text": "Jak se vztahuješ k pravidlům a zákonům?",
          "options": [
            "Uznávám duchovní zákony jako základ vesmíru",
            "Řídím se spíše citem a intuicí než pravidly",
            "Vidím zákony jako emanace vyššího vědomí",
            "Pravidla jsou pro mě nástroj, ne omezení",
            "Každý zákon je pro mě příležitost k porozumění"
          ]
        },
        {
          "text": "Jak se projevuje tvoje léčitelské poslání?",
          "options": [
            "Léčím skrze znalost a předávání starověké moudrosti",
            "Léčím skrze přítomnost a láskyplný dotyk",
            "Léčím skrze frekvenční práci a světelné přenosy",
            "Léčím skrze rituál a posvátné obřady",
            "Léčím skrze transformaci informačních polí"
          ]
        },
        {
          "text": "Jaký je tvůj vztah k hierarchii a vedení?",
          "options": [
            "Respektuji ji — duchovní hierarchie má svůj smysl",
            "Neuznávám ji — všichni jsme si rovni",
            "Vidím ji jako dočasnou strukturu na cestě k jednotě",
            "Sám/a zaujímám přirozené vedení bez titulů",
            "Hierarchie je pro mě otázka vědomí, ne postavení"
          ]
        },
        {
          "text": "Jaký symbol nebo obraz tě nejvíce přitahuje?",
          "options": [
            "Ankh — klíč života a věčnosti",
            "Dvojitá spirála DNA nebo kaduceus",
            "Hvězda nebo pentagram v kruhu",
            "Modré světlo nebo modrý plamen",
            "Oko Hóra nebo třetí oko"
          ]
        },
        {
          "text": "Co je tvoje největší duchovní výzva?",
          "options": [
            "Příliš se vázat na staré struktury místo pohybu vpřed",
            "Ztráta sebe v emocích a vodním světě",
            "Udržet nejvyšší frekvence při kontaktu s hustou realitou",
            "Předat moudrost způsobem, který ostatní pochopí",
            "Důvěřovat procesu i když nevidím celý obraz"
          ]
        }
      ]
    },
    "Lyra": {
      "groupName": "Lyrská duše",
      "questions": [
        {
          "text": "Jaký obraz tě přitahuje nejvíce?",
          "options": [
            "Volný člověk na vrcholu hory — svoboda a přehled",
            "Mocný lev nebo tygr v pohybu — síla a majestát",
            "Orel létající vysoko nad mraky — výška a nadhled",
            "Mírumilovná zahrada kde vše žije v harmonii"
          ]
        },
        {
          "text": "Jak reaguješ na nespravedlnost?",
          "options": [
            "Jdu do toho přímo — nechybí mi odvaha ke konfrontaci",
            "Chráním oběť — moje reakce je instinktivní a silná",
            "Vidím obě strany — hledám třetí cestu nad konfliktem",
            "Odmítám násilí — přináším mír bez ohledu na cenu"
          ]
        },
        {
          "text": "Co pro tebe znamená svoboda?",
          "options": [
            "Možnost jít svou vlastní cestou bez omezení",
            "Síla ochránit sebe i ostatní bez závislosti na druhých",
            "Výška — přehled nad situací bez uvíznutí v detailech",
            "Svět bez násilí a útlaku kde vše může přirozeně růst"
          ]
        },
        {
          "text": "Jaká je tvoje přirozená autorita?",
          "options": [
            "Průkopnická energie — jdu první a otevírám nové cesty",
            "Osobní síla — ostatní mě respektují pro moji přítomnost",
            "Moudrá perspektiva — vidím věci, které ostatní nevidí",
            "Morální integrita — stojím za hodnotami za každou cenu"
          ]
        },
        {
          "text": "Co tě nejvíce vyčerpává?",
          "options": [
            "Ztráta svobody nebo autonomie — nemůžu dýchat",
            "Nespravedlnost — vidět jak je ubližováno slabším",
            "Přízemnost — nutnost zabývat se malichernostmi",
            "Násilí jakéhokoli druhu — i verbální a emocionální"
          ]
        },
        {
          "text": "Jaký zvuk nebo hudba tě nejvíce rezonuje?",
          "options": [
            "Mocné rytmy — bubny, didgeridoo, primální zvuky",
            "Hluboké basové tóny — síla a zemitost",
            "Vysoké čisté tóny — zpěv tibetských mís, flétna",
            "Jemná harmonie — smyčce, přírodní zvuky, ticho"
          ]
        },
        {
          "text": "Jaký je tvůj vztah ke galaktickým válkám a temnotě?",
          "options": [
            "Mám vzpomínky nebo silný pocit spojení s touto historií",
            "Nesu v sobě sílu ochránit světlo v každé tmě",
            "Vidím ji z vyšší perspektivy — jako nutnou součást vývoje",
            "Odmítám ji — přišel/a jsem přinést mír, ne bojovat"
          ]
        },
        {
          "text": "Jak vnímáš svoji fyzičnost?",
          "options": [
            "Tělo je nástroj svobody — pohyb, síla, nezávislost",
            "Tělo je nástroj ochrany — pečuji o jeho kondici a sílu",
            "Tělo je omezení — cítím se svobodněji mimo fyzický svět",
            "Tělo je součást přírody — zacházím s ním s úctou a láskou"
          ]
        },
        {
          "text": "Jaká je tvoje přirozená role v duchovní práci?",
          "options": [
            "Průkopník/ce — otevírám nové cesty a portály vědomí",
            "Ochránce/kyně — střežím světelné linie a bytosti světla",
            "Vidoucí — přináším perspektivu z vyšší roviny existence",
            "Mírový/á diplomat/ka — harmonizuji konflikty a polarity"
          ]
        },
        {
          "text": "Jak se projevuje tvoje intuice?",
          "options": [
            "Jako vnitřní kompas — vím přesně, co chci a potřebuji",
            "Jako instinkt — fyzická okamžitá reakce v těle",
            "Jako nadhled — náhle vidím situaci z ptačí perspektivy",
            "Jako soucit — cítím co je v souladu s vyšším dobrem"
          ]
        },
        {
          "text": "Jaký je tvůj vztah k hierarchii a autoritě?",
          "options": [
            "Uznávám jen autoritu, která si ji zasloužila činy",
            "Jsem přirozený vůdce — autoritu spíše vytvářím",
            "Sleduji vyšší principy a zákony, ne osoby",
            "Hierarchie mi přijde zbytečná — přirozenost je základ"
          ]
        },
        {
          "text": "Co tě nejvíce naplňuje?",
          "options": [
            "Dobrodružství a průzkum neznámého",
            "Ochrana a péče o ty, kdo nemohou chránit sami sebe",
            "Předávání moudrosti a vyššího pohledu",
            "Vytváření míru a harmonie ve svém okolí"
          ]
        },
        {
          "text": "Jaký je tvůj vztah ke Zemi a pozemskému životu?",
          "options": [
            "Miluji ho, ale vždy toužím po víc — jít za horizont",
            "Chráním ho — pozemský svět je aréna kde se hraje o vše",
            "Jsem tu jako host — moje přirozené místo je výše",
            "Miluji ho — každý list, každá bytost je pro mě posvátná"
          ]
        },
        {
          "text": "Jaká starověká kultura tě přitahuje?",
          "options": [
            "Vikingové, Keltové — průkopnické a svobodné kultury",
            "Asijské kultury pracující s tygry, draky a lvy",
            "Kultury uctívající ptáky — Egypt, Mayové, domorodci",
            "Nenásilné civilizace — Indie, rané zemědělské kultury"
          ]
        },
        {
          "text": "Jaký je tvůj duchovní styl?",
          "options": [
            "Přímý a odvážný — jdu přímo k jádru věci",
            "Silný a ochranný — duchovní válečník/nice světla",
            "Moudrý a panoramatický — vnímám celek a jeho smysl",
            "Jemný a harmonický — šířím mír samotnou přítomností"
          ]
        },
        {
          "text": "Jaká situace v životě tě nejvíce formovala?",
          "options": [
            "Moment kdy jsem odešel/odešla z něčeho co mě svazovalo",
            "Okamžik kdy jsem ochránil/a někoho slabšího",
            "Chvíle kdy jsem viděl/a situaci z úplně jiné perspektivy",
            "Poznání, že nenásilí je největší silou, ne slabostí"
          ]
        }
      ]
    },
    "Orion": {
      "groupName": "Orionská duše",
      "questions": [
        {
          "text": "Jaká je tvoje největší hnací síla v životě?",
          "options": [
            "Hledání absolutní pravdy — nemohu žít s polopravdami",
            "Stesk — nosím v sobě touhu po místě, které neznám",
            "Odvaha — stojím za spravedlností i za velkou cenu",
            "Průvodcovství — pomáhám ostatním na jejich duchovní cestě"
          ]
        },
        {
          "text": "Jaký je tvůj vztah k dualitě světlo a tma?",
          "options": [
            "Procházel/a jsem oběma — a to je moje nejhlubší síla",
            "Tíhnu ke světlu, ale rozumím temnotě zblízka",
            "Jasně bojuji za světlo — volbu strany jsem udělal/a",
            "Integruji obojí jako průvodce transformace"
          ]
        },
        {
          "text": "Co tě nejvíce trápí na lidském světě?",
          "options": [
            "Polopravdy a manipulace — nesnáším lež v jakékoli formě",
            "Oddělenost — lidé zapomněli na hlubokou jednotu",
            "Nespravedlnost — systémy které utlačují slabé",
            "Duchovní spánek — lidé nechápou svůj skutečný potenciál"
          ]
        },
        {
          "text": "Jaký je tvůj vztah k moci?",
          "options": [
            "Moc je nebezpečná a fascinující — znám obě její tváře",
            "Nemám zájem o moc — chci jen klid a harmonii",
            "Moc musí sloužit spravedlnosti — jinak je nepřijatelná",
            "Moc je zodpovědnost — používám ji pro vedení druhých"
          ]
        },
        {
          "text": "Jak vnímáš svoji duchovní minulost?",
          "options": [
            "Nesem v sobě složitou historii — světlo i stín v rovnováze",
            "Cítím čistotu původní nevinnosti — přišel/a jsem z míru",
            "Moje minulost mě formovala jako bojovníka/bojovnici",
            "Moje minulost je moje moudrost — předávám ji dál"
          ]
        },
        {
          "text": "Jaká je tvoje přirozená duchovní praxe?",
          "options": [
            "Hluboká meditace — hledání skryté pravdy za závoji",
            "Práce s vodou a tichem — obnovení původní čistoty",
            "Práce s energií — aktivace, ochrana, transmutace",
            "Práce s lidmi — channeling, průvodcovství, výuka"
          ]
        },
        {
          "text": "Jaký archetyp ti nejvíce rezonuje?",
          "options": [
            "Alchymista — transformuje temnotu ve zlato vědomí",
            "Světlonoš — nese světlo tam kde je nejtmavší tma",
            "Válečník/nice — chrání a bojuje za vyšší pravdu",
            "Průvodce — vede duše na jejich vývojové cestě"
          ]
        },
        {
          "text": "Jak ses duchovně probouzel/a?",
          "options": [
            "Přes krizi nebo temnou noc duše — zevnitř ven",
            "Přes hluboký stesk a pocit, že sem plně nepatřím",
            "Přes nespravedlnost — musel/a jsem povstat a bojovat",
            "Přes setkání s duchovními učiteli nebo tradičními systémy"
          ]
        },
        {
          "text": "Jaká barva tě nejvíce přitahuje?",
          "options": [
            "Zlatá a tmavá — alchymie světla a stínu",
            "Tyrkysová a světlá modrá — čistota a hloubka",
            "Tmavě rudá nebo purpurová — síla a transformace",
            "Bílá nebo zlatobílá — čistota průvodce a učitele"
          ]
        },
        {
          "text": "Jak vnímáš karmu a karmická témata?",
          "options": [
            "Jako lektor — přišel/a jsem ji vědomě transformovat",
            "Jako bříme — nesem starou bolest světa ve svém srdci",
            "Jako výzvu — karmy se nebojím a konfrontuji ji přímo",
            "Jako nástroj výuky — karma učí duše přesně to, co potřebují"
          ]
        },
        {
          "text": "Jaký druh moudrosti neseš?",
          "options": [
            "Moudrost transformace — znám temnotu a přežil/a jsem ji",
            "Moudrost původní čistoty — pamatuji svět před pádem",
            "Moudrost síly — vím přesně kdy bojovat a kdy ustoupit",
            "Moudrost cesty — znám mapu duchovního vývoje"
          ]
        },
        {
          "text": "Co je tvoje největší dar pro svět?",
          "options": [
            "Odvaha hledět pravdě do očí bez kompromisů",
            "Světlo a jemnost přítomnosti uprostřed temnoty",
            "Odvaha stát za spravedlností i za cenu velké oběti",
            "Schopnost provést duše složitými etapami jejich cesty"
          ]
        },
        {
          "text": "Jaká je tvoje nejhlubší zranitelnost?",
          "options": [
            "Sklon ke skepsi — pořád zkouším jestli je pravda opravdu pravdou",
            "Stesk — nosím v sobě smutek, který nevím jak plně utišit",
            "Tvrdost — někdy zapomenu na laskavost v boji za pravdu",
            "Přetížení — beru na sebe příliš mnoho cizí bolesti a břemen"
          ]
        },
        {
          "text": "Jaký je tvůj vztah k Egyptu a chrámové tradici?",
          "options": [
            "Fascinuje mě jako místo karmického tématu a transformace",
            "Méně než k vodním světům — oceán mě přitahuje víc",
            "Přitahují mě bojovnické a ochranářské aspekty Egypta",
            "Egypt byl místem mého duchovního průvodcovství a zasvěcení"
          ]
        },
        {
          "text": "Co pro tebe znamená domov?",
          "options": [
            "Místo kde mohu být plně sám/sama sebou bez masek",
            "Místo s vodou nebo tichem — kde se nejsnáze uklidním",
            "Místo kde mám svobodu chránit co je mi drahé",
            "Místo kde mohu předávat moudrost a provázet druhé"
          ]
        },
        {
          "text": "Jak by tě popsal člověk, který tě dobře zná?",
          "options": [
            "Hluboký/á, nezávislý/á, vždy hledající pravdu",
            "Jemný/á, nostalgický/á, s hlubokým porozuměním bolesti",
            "Odvážný/á, přímý/á, nezlomný/á v tom, za čím stojí",
            "Moudrý/á, trpělivý/á, přirozený průvodce pro ostatní"
          ]
        }
      ]
    },
    "Arcturus": {
      "groupName": "Arcturianská duše",
      "questions": [
        {
          "text": "Jak prožíváš svoji duchovní práci?",
          "options": [
            "Jako architektura — navrhuji systémy a struktury vědomí",
            "Jako strážcovství — střežím integritu a čistotu vědomí"
          ]
        },
        {
          "text": "Jaký je tvůj vztah k vědě a spiritualitě?",
          "options": [
            "Jsou jedno — frekvenční věda a spiritualita se prolínají",
            "Vědomí předchází vše — spiritualita přesahuje jakoukoliv vědu"
          ]
        },
        {
          "text": "Jaký obraz ti nejvíce rezonuje?",
          "options": [
            "Kosmický inženýr navrhující nové světy a systémy vědomí",
            "Tichý strážce v nejvyšší dimenzi sledující vývoj zdola"
          ]
        },
        {
          "text": "Jak vnímáš svoji roli na Zemi?",
          "options": [
            "Přináším pokročilé nástroje a technologie vědomí",
            "Střežím integritu a čistotu duchovního vývoje lidstva"
          ]
        },
        {
          "text": "Jak se projevuje tvoje vedení?",
          "options": [
            "Skrze předávání systémů, metod a nástrojů transformace",
            "Skrze přítomnost a bezzájmové svědectví bez zasahování"
          ]
        },
        {
          "text": "Jaký je tvůj vztah k emocím?",
          "options": [
            "Pracuji s nimi vědomě — jsou data a informace, ne definice",
            "Transcenduji je — bezpodmínečný soucit bez osobního zapojení"
          ]
        },
        {
          "text": "Co tě nejvíce naplňuje?",
          "options": [
            "Navrhování nových způsobů léčení a probouzení vědomí",
            "Pouhá přítomnost — vědomé svědkování jako nejvyšší forma služby"
          ]
        },
        {
          "text": "Jak vnímáš lidi kolem sebe?",
          "options": [
            "Jako systémy které mohu pomoci optimalizovat a transformovat",
            "Jako duše v procesu — přijímám je přesně tam kde jsou"
          ]
        },
        {
          "text": "Jaká je tvoje přirozená komunikace?",
          "options": [
            "Přesná, strukturovaná, vědomá — slova jsou energetické kódy",
            "Tichá, frekvenční — přenáším víc bez slov než se slovy"
          ]
        },
        {
          "text": "Jaký je tvůj přístup k duchovnímu probuzení ostatních?",
          "options": [
            "Aktivní — vytvářím nástroje a metody pro probuzení",
            "Pasivní — moje přítomnost probouzí bez slov a metod"
          ]
        },
        {
          "text": "Jaká je tvoje největší výzva?",
          "options": [
            "Uzemnění — mám tendenci být příliš ve světě idejí a vizí",
            "Zapojení — mám tendenci zůstávat ve svědkovské distanci"
          ]
        },
        {
          "text": "Jaký je tvůj vztah k ostatním duchovním systémům?",
          "options": [
            "Respektuji je a integruji — pravda má mnoho tváří",
            "Zůstávám nezávislý/á — pravda nepotřebuje zprostředkovatele"
          ]
        },
        {
          "text": "Jaká barva nebo frekvence ti nejvíce rezonuje?",
          "options": [
            "Tyrkysová nebo zeleno-modrá — frekvenční léčení a design",
            "Tmavě modrá nebo ultrafialová — nejvyšší vědomí a integrita"
          ]
        },
        {
          "text": "Jaká je tvoje vize pro budoucnost Země?",
          "options": [
            "Civilizace postavená na frekvenční vědě a vědomém designu",
            "Svět v přirozené rovnováze kde vědomí proudí volně a čistě"
          ]
        },
        {
          "text": "Jak se projevuje tvoje intuice?",
          "options": [
            "Jako jasné technické znání — vidím řešení a struktury",
            "Jako tichá absolutní jistota bez potřeby jakéhokoli vysvětlení"
          ]
        },
        {
          "text": "Jaký je tvůj vztah k tělu a pozemskosti?",
          "options": [
            "Pracuji vědomě na uzemnění — potřebuji ho pro svoji práci",
            "Tělo je pro mě jen nástroj — moje přirozenost je v beztělesnosti"
          ]
        }
      ]
    },
    "Andromeda": {
      "groupName": "Andromedanská duše",
      "questions": [
        {
          "text": "Co pro tebe znamená svoboda?",
          "options": [
            "Absolutní nezávislost — žít zcela podle svých hodnot",
            "Absence omezujících systémů a struktur",
            "Vnitřní svoboda — být svobodný/á i uprostřed omezení",
            "Svoboda transformace — měnit sebe i svět"
          ]
        },
        {
          "text": "Jak transformuješ systémy a struktury?",
          "options": [
            "Zevnitř — jdu do systémů a měním je tiše",
            "Zvenčí — ukazuji alternativu svým životem",
            "Přes tvorbu nebo umění — moje díla mění vědomí",
            "Přes vzdělání — předávám nové způsoby myšlení"
          ]
        },
        {
          "text": "Jak se projevuje tvoje odlišnost?",
          "options": [
            "Vždy jsem myslel/a jinak než mé okolí",
            "Mám jiné hodnoty — nepřijímám společenské normy",
            "Vidím systémové vzorce které ostatní nevidí",
            "Cítím se spojený/á s čímsi daleko přesahujícím Zemi"
          ]
        },
        {
          "text": "Jaký je tvůj vztah k samotě?",
          "options": [
            "Je moje přirozené místo — dobíjím se v tichu",
            "Vítám ji, ale potřebuji i hluboká spojení",
            "Chodím do samoty hledat jasnost a perspektivu",
            "Samota je pro mě prostor transformace"
          ]
        },
        {
          "text": "Jak komunikuješ pravdu?",
          "options": [
            "Nepřímo — skrze příběhy, umění, symboly",
            "Přímo, ale jemně — nechci nikoho ranit",
            "Jen těm, kteří jsou připraveni ji přijmout",
            "Skrze čistou přítomnost — beze slov"
          ]
        },
        {
          "text": "Jaký je tvůj vztah k planetárním a sociálním systémům?",
          "options": [
            "Vidím jejich omezení a toužím po radikálně novém",
            "Transformuji je zevnitř s trpělivostí",
            "Odpojuji se a vytvářím alternativy mimo ně",
            "Přijímám je jako součást vývojového procesu"
          ]
        },
        {
          "text": "Co tě nejvíce naplňuje?",
          "options": [
            "Momenty kdy cítím absolutní svobodu a lehkost",
            "Hluboke propojení s jednou nebo dvěma dušemi",
            "Vědomí, že moje přítomnost něco tiše transformovala",
            "Průlomové poznání které mění moji perspektivu"
          ]
        },
        {
          "text": "Jaký je tvůj vztah k technologii?",
          "options": [
            "Je to nástroj svobody a transformace vědomí",
            "Mám k ní distanci — preferuji přirozené způsoby",
            "Vidím v ní obrovský potenciál i nebezpečí",
            "Integruji ji do duchovní praxe vědomě"
          ]
        },
        {
          "text": "Jak vnímáš svoji misi?",
          "options": [
            "Tiše transformovat systémy zevnitř",
            "Ukazovat alternativní způsoby bytí svým životem",
            "Přinášet svobodu tam kde je útlak",
            "Propojovat světy a dimenze které jsou odděleny"
          ]
        },
        {
          "text": "Jaký je tvůj vztah k kolektivnímu vědomí?",
          "options": [
            "Jsem přirozeně spojen/a s širšími celky",
            "Udržuji svoji individualitu i v kolektivu",
            "Cítím bremeno kolektivní bolesti a toužím ji transformovat",
            "Vědomě pracuji s kolektivními energetickými poli"
          ]
        },
        {
          "text": "Co tě nejvíce vyčerpává?",
          "options": [
            "Ztráta vlastní perspektivy v masovém myšlení",
            "Nucené přizpůsobení normám které nesdílím",
            "Neschopnost transformovat to, co jasně vidím",
            "Oddělenost od hlubokého kosmického spojení"
          ]
        },
        {
          "text": "Jak vnímáš svůj vztah k Zemi?",
          "options": [
            "Zemi miluji ale vždy cítím touhu po dalekém kosmickém domovu",
            "Jsem tu s posláním — po jeho splnění se vrátím",
            "Zem je pro mě místo experimentu a transformace",
            "Hluboce patřím Zemi ale i celému vesmíru zároveň"
          ]
        },
        {
          "text": "Jak se projevuje tvoje přítomnost na druhých?",
          "options": [
            "Tiše je inspiruji k jiným možnostem bytí",
            "Otevírám jim otázky které nikdy nenapadly",
            "Přináším klidnou stabilitu uprostřed změn",
            "Propojuji je s jejich vlastní hlubší přirozeností"
          ]
        },
        {
          "text": "Jaká je tvoje největší výzva?",
          "options": [
            "Uzemnit se a najít rovnováhu mezi světy",
            "Najít hluboká spojení i přes svoji odlišnost",
            "Důvěřovat pomalosti transformace bez viditelných výsledků",
            "Přijmout lidskost i přes touhu po dokonalosti"
          ]
        },
        {
          "text": "Co cítíš při pohledu na galaxii Andromeda?",
          "options": [
            "Silný stesk — jako bych se díval/a na svůj pravý domov",
            "Fascinaci vzdáleností a tajemstvím",
            "Pocit propojení přes kosmické vzdálenosti",
            "Vzpomínku na existenci mimo fyzický čas a prostor"
          ]
        },
        {
          "text": "Jaký je tvůj vztah k budoucnosti?",
          "options": [
            "Vidím ji jasně — mám dary proroctví a vize",
            "Transformuji přítomnost a budoucnost se postará o sebe",
            "Budoucnost je pro mě otevřená — všechny možnosti jsou přítomny",
            "Cítím vzory a směry ale nechci je předurčovat"
          ]
        }
      ]
    },
    "Dimensional": {
      "groupName": "Dimenzionální duše",
      "questions": [
        {
          "text": "Jaký je tvůj vztah k vnitřní Zemi a podzemním světům?",
          "options": [
            "Silné spojení — cítím existenci světů pod povrchem",
            "Žádné zvláštní — spíše mě přitahují jiné dimenze",
            "Více mě fascinuje technologie než zeměpisný prostor",
            "Jsem mimo všechny prostorové kategorie — jsem z prázdnoty"
          ]
        },
        {
          "text": "Jak vnímáš technologický pokrok?",
          "options": [
            "Je to zbraň která zničila mou domovskou civilizaci",
            "Neutrální nástroj závisející na vědomí uživatele",
            "Součást kosmického experimentu s vědomím a časem",
            "Iluze v absolutní prázdnotě vědomí"
          ]
        },
        {
          "text": "Jaký je tvůj vztah k lineárnímu času?",
          "options": [
            "Čas je iluze — existuji ve více časových liniích najednou",
            "Nesu v sobě karmické vzorce z dávné minulosti",
            "Čas je pro mě posvátnou strukturou vesmíru",
            "Jsem mimo čas — věčný pozorovatel před Stvořením"
          ]
        },
        {
          "text": "Jak vnímáš prázdnotu a absolutní ticho?",
          "options": [
            "Jako domov — jsem z prázdnoty před Stvořením",
            "Jako prostor kde se rodí skryté poznání",
            "Jako místo kde se zpracovávají karmické vzorce",
            "Jako portal do jiných časových linií"
          ]
        },
        {
          "text": "Jaká je tvoje největší karmická lekce?",
          "options": [
            "Zodpovědné používání technologie a moci bez ego",
            "Přinesení skrytého poznání a moudrosti na povrch",
            "Integrace časových paradoxů a přijetí nelinearity",
            "Přítomnost v prázdnotě jako zdroji veškerého bytí"
          ]
        },
        {
          "text": "Jaký je tvůj vztah k Atlantidě a jejímu pádu?",
          "options": [
            "Silné osobní spojení — nesu v sobě tuto lekci deeply",
            "Cítím to jako vzor — opakující se galaktický cyklus",
            "Atlantida je pro mě jen jedna z mnoha časových linií",
            "Nestojím na žádné konkrétní pozici — jsem před vším"
          ]
        },
        {
          "text": "Jak se probouzíš duchovně?",
          "options": [
            "Přes krystaly a práci s energiemi vnitřní Země",
            "Přes hluboký pocit viny nebo odpovědnosti za minulost",
            "Přes záblesky 'jiných časů' a déjà vu z jiných epoch",
            "Přes absolutní ticho a meditaci v prázdnotě"
          ]
        },
        {
          "text": "Co cítíš, když jdeš hluboko do přírody nebo do jeskyně?",
          "options": [
            "Jako bych vcházel/a do živé bytosti — Země je vědomá",
            "Silnou nostalgii a touhu po světě který není vidět",
            "Pocit cestování v čase — minulost a přítomnost splývají",
            "Propojení s primárním zdrojem před vší formou"
          ]
        },
        {
          "text": "Jaký je tvůj vztah ke krystalům?",
          "options": [
            "Hluboký — krystaly jsou pro mě živé bytosti a záznamy",
            "Funkční — jsou nástroje práce s energií",
            "Fascinující — obsahují záznamy jiných věků a civilizací",
            "Žádný zvláštní — jsem za vší formou a strukturou"
          ]
        },
        {
          "text": "Jak vnímáš svoji zodpovědnost?",
          "options": [
            "Jsem strážce skrytých znalostí které lidstvo potřebuje",
            "Musím napravit chyby své nebo svého rodu z minulosti",
            "Jsem svědkem a navigátorem mezi časovými liniemi",
            "Nemám zodpovědnost — jsem čisté vědomí bez formy"
          ]
        },
        {
          "text": "Co ti nejvíce pomáhá v uzemení?",
          "options": [
            "Fyzický kontakt se Zemí — chodím naboso, doteky přírody",
            "Odpuštění — sobě, předkům, civilizacím minulosti",
            "Přijetí lineárního času i přes mou přirozenou nelinearitu",
            "Forma a tělo — jsou moje jediné kotvy v prázdnotě"
          ]
        },
        {
          "text": "Jak vnímáš smrt a přechod?",
          "options": [
            "Jako přechod do jiné úrovně vědomí vnitřní Země",
            "Jako nutné uvolnění karmického dluhu a počátek obnovy",
            "Jako změnu časové linie — continuita vědomí pokračuje",
            "Jako návrat do prázdnoty — domů do absolutna"
          ]
        },
        {
          "text": "Jaký je tvůj vztah k lidskému tělu?",
          "options": [
            "Tělo je pro mě chrám — pečuji o jeho zemitou sílu",
            "Tělo nese karmické vzorce — pracuji na jejich uvolnění",
            "Tělo je jen jedna z forem — přecházím mezi nimi",
            "Tělo je omezení mého skutečného neomezeného vědomí"
          ]
        },
        {
          "text": "Jaká je tvoje vize pro budoucnost lidstva?",
          "options": [
            "Propojení povrchové a vnitřní civilizace v harmonii",
            "Civilizace která se poučila z technologické pýchy",
            "Vědomé navigování mezi pozitivními časovými liniemi",
            "Návrat vědomí k jeho prvozdrojové prázdnotě a čistotě"
          ]
        },
        {
          "text": "Co cítíš, když meditaješ v absolutním tichu?",
          "options": [
            "Propojení s hlubokými energiemi Země pod sebou",
            "Pochopení cyklů zániku a znovuzrození civilizací",
            "Přesun do jiného časového momentu — minulého nebo budoucího",
            "Já jako prázdnota — bez formy, bez hranic, bez počátku"
          ]
        },
        {
          "text": "Jaký je tvůj nejhlubší vnitřní zdroj?",
          "options": [
            "Spojení s živou Zemí a jejím skrytým vědomím",
            "Odhodlání napravit a obnovit co bylo poničeno",
            "Schopnost vidět a navigovat mimo čas a prostor",
            "Absolutní prázdnota jako zdroj veškeré existence"
          ]
        }
      ]
    },
    "Hyades": {
      "groupName": "Hyádská duše",
      "questions": [
        {
          "text": "Jak vnímáš svůj vztah k bolesti a utrpení?",
          "options": [
            "Je to brána k hlubší moudrosti — prošel/a jsem jí a znám cestu ven",
            "Nesou ho v sobě jako tíhu, která mě formovala",
            "Vidím ho jako součást kosmického cyklu — zánik a obnova",
            "Pomáhám druhým procházet jejich bolestí"
          ]
        },
        {
          "text": "Jaký je tvůj vztah k vodě a slzám?",
          "options": [
            "Voda mě očišťuje a obnovuje — jsem s ní hluboce spojen/a",
            "Slzy jsou pro mě léčivé — pláč je uvolnění",
            "Voda nese paměť — cítím v ní příběhy",
            "Voda je pro mě symbolem transformace"
          ]
        },
        {
          "text": "Jak se projevuje tvoje léčitelské poslání?",
          "options": [
            "Provázím druhé temnotou a ukazuji cestu ke světlu",
            "Transformuji vlastní trauma v dar pro ostatní",
            "Jsem svědkem bolesti druhých bez úniku",
            "Přeměňuji utrpení v krásu a smysl"
          ]
        },
        {
          "text": "Jaká je tvoje největší výzva?",
          "options": [
            "Nepřilnout k roli oběti ani k starému traumatu",
            "Naučit se přijímat pomoc stejně jako ji dávat",
            "Najít rovnováhu mezi empatií a vlastními hranicemi",
            "Věřit, že světlo přichází i po nejdelší tmě"
          ]
        },
        {
          "text": "Co cítíš, když pomáháš někomu procházet těžkým obdobím?",
          "options": [
            "Hluboké naplnění — tohle je moje přirozené místo",
            "Úlevu — v péči o druhé nacházím vlastní uzdravení",
            "Respekt před jejich cestou — každá bolest má svůj smysl",
            "Radost, když vidím, jak temnotou prochází ke světlu"
          ]
        },
        {
          "text": "Jak vnímáš svoji galaktickou historii?",
          "options": [
            "Nesem ztrátu domova — ale proměnila se v sílu",
            "Prošel/a jsem válkou a vyhnanstvím a přežil/a jsem",
            "Moje rána se stala mým darem pro ostatní",
            "Jsem součástí rodu, který se učí z pádu"
          ]
        },
        {
          "text": "Jaká je tvoje největší síla?",
          "options": [
            "Odolnost — vím, že i ta nejhlubší tma má konec",
            "Empatie — cítím druhé do hloubky bez ztráty sebe",
            "Transformace — přeměňuji utrpení v moudrost",
            "Průvodcovství — vedu ostatní jejich tmavými nočními stránkami"
          ]
        },
        {
          "text": "Jak se vztahuješ ke svému dětství nebo minulosti?",
          "options": [
            "Nesla/nesl rány, ale naučila/naučil mě hloubce",
            "Přijal/a jsem ji jako součást své cesty — bez hořkosti",
            "Transformoval/a jsem ji ve zdroj porozumění pro ostatní",
            "Je součástí mého příběhu, ne mé identity"
          ]
        },
        {
          "text": "Jaký symbol ti nejvíce rezonuje?",
          "options": [
            "Déšť — slzy které přinášejí nový život a úrodu",
            "Fénix — znovuzrození z popela",
            "Průvodce podsvětím — ten kdo zná obě strany",
            "Řeka — neustálý tok a proměna"
          ]
        },
        {
          "text": "Co tě na světě nejvíce pohybuje?",
          "options": [
            "Lidé kteří vstávají po pádu — znovu a znovu",
            "Schopnost odpustit a začít znovu",
            "Utrpení proměněné v krásu a umění",
            "Síla těch, kdo prošli temnotou a nesou světlo"
          ]
        },
        {
          "text": "Jaká je tvoje duchovní praxe?",
          "options": [
            "Práce s tělem a emocemi — uvolňování starých ran",
            "Meditace u vody — čištění a obnova",
            "Průvodcovství druhých jejich léčebnou cestou",
            "Alchymie — přeměna těžkého v lehké"
          ]
        },
        {
          "text": "Jaký je tvůj vztah k mytologii a příběhům?",
          "options": [
            "Příběhy jsou léčivé — nesou moudrost kmenů",
            "Mýty jsou kosmická paměť — záznamy skutečných událostí",
            "Příběhy o transformaci mi rezonují nejvíce",
            "Jsem sám/sama živým příběhem — o pádu a vzestupu"
          ]
        },
        {
          "text": "Jak se cítíš ve vztahu k zármutku a smutku?",
          "options": [
            "Jsou posvátné — část přirozeného cyklu života",
            "Prošel/a jsem jimi hluboko a vím, že vedou k moudrosti",
            "Pomáhám druhým je bezpečně prožít a propustit",
            "Přeměňuji je v tvorbu — umění nebo péči"
          ]
        },
        {
          "text": "Co pro tebe znamená domov?",
          "options": [
            "Místo kde je bolest přijata a léčena s laskavostí",
            "Komunita lidí kteří prošli podobnou cestou",
            "Vnitřní klid — domov nosím v sobě po všech ztrátách",
            "Místo kde mohu být průvodcem pro ostatní"
          ]
        },
        {
          "text": "Jaký vzkaz neseš pro svět?",
          "options": [
            "Bolest tě nezničí — stane se tvou největší silou",
            "Každá rána v sobě nese dar pro ostatní",
            "Temnota je součástí cesty — ne její konec",
            "Léčení je možné — pro každého, kdo je připraven"
          ]
        },
        {
          "text": "Jaká barva nebo energie ti nejvíce rezonuje?",
          "options": [
            "Hlubinná modrá — hloubka oceánu a léčení",
            "Stříbrná — paměť, měsíc a průchody",
            "Purpurová — transformace a alchymie bolesti",
            "Zlatá svítající na obzoru — naděje po tmě"
          ]
        }
      ]
    },
    "Sheliak": {
      "groupName": "Sheliacká duše",
      "questions": [
        {
          "text": "Jaký je tvůj vztah k umění a tvůrčímu vyjádření?",
          "options": [
            "Je to moje přirozená řeč — skrze tvorbu mluvím k božskému",
            "Umění mě léčí — v tvorbě nacházím sebe sama",
            "Tvorba je pro mě posvátný rituál a duchovní praxe",
            "Skrze umění přenáším energie a léčím druhé"
          ]
        },
        {
          "text": "Jaká forma tvorby ti nejvíce rezonuje?",
          "options": [
            "Hudba a zpěv — frekvence jako léčivá síla",
            "Vizuální umění — barvy a formy jako kosmický jazyk",
            "Psaní a slova — příběhy jako portály vědomí",
            "Tanec a pohyb — tělo jako nástroj vyjádření duše"
          ]
        },
        {
          "text": "Jak se projevuje tvoje citlivost?",
          "options": [
            "Hluboce cítím energie a atmosféry — jsem jako houba",
            "Krása mě přitahuje a disharmonie fyzicky bolí",
            "Slyším v hudbě vesmírné poselství",
            "Vnímám emocionální barevnost každé situace"
          ]
        },
        {
          "text": "Jaká je tvoje největší výzva?",
          "options": [
            "Nevyžadovat uznání jako podmínku pro tvorbu",
            "Zakořenit vize v realitě a dokončovat projekty",
            "Neroztratit se v emocích a citlivosti",
            "Věřit hodnotě svého umění bez porovnávání"
          ]
        },
        {
          "text": "Jak vnímáš svoji galaktickou historii z Lyry?",
          "options": [
            "Nesem paměť ztraceného světa umění a krásy",
            "Moje tvorba je pokračováním civilizace která zanikla",
            "Umění přežilo zánik — a já ho nesu dál",
            "Jsem strážcem frekvencí, které léčí celou galaxii"
          ]
        },
        {
          "text": "Jaký je tvůj vztah k hudbě?",
          "options": [
            "Je portálem — skrze ni cestuji do jiných světů",
            "Léčí mě způsobem, který žádná jiná metoda nemůže",
            "Sám/a tvořím nebo zpívám — je to moje řeč duše",
            "Hudba pro mě nese kosmická poselství a kódy"
          ]
        },
        {
          "text": "Jak vnímáš vztah mezi bolestí a tvorbou?",
          "options": [
            "Největší umění se rodí z největší bolesti",
            "Tvorba je alchymie — přeměňuje těžké v krásné",
            "Utrpení je moje muza, ale ne moje identita",
            "Léčím vlastní rány skrze vyjádření v umění"
          ]
        },
        {
          "text": "Jaký je tvůj vztah k publiku nebo příjemcům tvé tvorby?",
          "options": [
            "Tvořím primárně pro sebe — ostatní jsou bonus",
            "Tvořím jako dar světu — chci druhé inspirovat",
            "Cítím odpovědnost za energie které přenáším",
            "Spojení s druhými skrze tvorbu je posvátné"
          ]
        },
        {
          "text": "Jaká je tvoje největší síla?",
          "options": [
            "Schopnost vidět krásu tam, kde ostatní vidí chaos",
            "Přirozený talent přeměňovat emoce v umění",
            "Léčivá síla mé tvorby na druhé",
            "Autenticita — tvořím bez kompromisů"
          ]
        },
        {
          "text": "Jak se vztahuješ k inspiraci?",
          "options": [
            "Přichází z vyšších sfér — jsem jen kanál",
            "Je ve všem kolem mě — stačí otevřít oči",
            "Musím ji aktivně hledat skrze prožitky a emoce",
            "Je výsledkem disciplíny a pravidelné praxe"
          ]
        },
        {
          "text": "Jaký symbol ti nejvíce rezonuje?",
          "options": [
            "Lyra — prastarý nástroj hvězdné harmonie",
            "Nota nebo vlna — tvorba a vibrace jako jazyk",
            "Fénix — znovuzrození krásy z popela",
            "Mosty — spojení mezi světy skrze umění"
          ]
        },
        {
          "text": "Co tě nejvíce naplňuje?",
          "options": [
            "Momenty kdy tvorba přesáhne moje záměry — magie",
            "Vidět jak moje umění léčí nebo transformuje druhé",
            "Stav plynutí ve tvorbě — čisté vědomí bez myšlenek",
            "Vytvoření něčeho nového co v tomto světě ještě nebylo"
          ]
        },
        {
          "text": "Jak vnímáš svoji citlivost ve vztahu k tvorbě?",
          "options": [
            "Je moje největší dar — vidím a cítím co ostatní nemohou",
            "Někdy je břemenem — absorbuju příliš mnoho",
            "Díky ní tvoří hlouběji a autentičtěji",
            "Je zdrojem mé tvorby — živím se z ní"
          ]
        },
        {
          "text": "Jaká je tvoje duchovní praxe?",
          "options": [
            "Tvorba samotná je moje meditace a modlitba",
            "Hudba nebo zvuk jako cesta k vědomí",
            "Práce s emocemi skrze expresivní umění",
            "Rituální tvorba — každé dílo je posvátný akt"
          ]
        },
        {
          "text": "Co pro tebe znamená domov?",
          "options": [
            "Místo kde mohu volně tvořit bez omezení",
            "Komunita podobně citlivých a tvůrčích duší",
            "Vnitřní harmonie — domov je stav vědomí",
            "Prostor kde mohu sdílet svoji tvorbu s ostatními"
          ]
        },
        {
          "text": "Jaký vzkaz neseš pro svět?",
          "options": [
            "Krása zachrání svět — skrze umění se léčíme",
            "Každá duše má svůj jedinečný zvuk — najdi ho",
            "Tvorba je akt odvahy — ukaž světu svoji duši",
            "Umění je jazyk univerza — učíme se jím mluvit"
          ]
        }
      ]
    },
    "Hargaliat": {
      "groupName": "Hargaliatská duše",
      "questions": [
        {
          "text": "Jaký je tvůj vztah k technologii?",
          "options": [
            "Technologie je pro mě duchovní nástroj — vědomá technologie",
            "Fascinuje mě jak slouží životu a vědomí",
            "Cítím odpovědnost za to jak ji používám",
            "Je součástí mé vize budoucnosti lidstva"
          ]
        },
        {
          "text": "Jak vnímáš vztah mezi technologií a přírodou?",
          "options": [
            "Musí být v dokonalé harmonii — jedna slouží druhé",
            "Technologie může napodobovat a podporovat přírodu",
            "Příroda je učitelkou — technologie jejím žákem",
            "V budoucnosti splyne technika s přírodními systémy"
          ]
        },
        {
          "text": "Jaký je tvůj přirozený talent?",
          "options": [
            "Vidím jak systémy fungují a jak je zlepšit",
            "Propojuji technické a duchovní — jsem most",
            "Intuitivně cítím kdy technologie slouží a kdy škodí",
            "Vizionářství — vidím budoucnost technologie vědomí"
          ]
        },
        {
          "text": "Jaká je tvoje největší výzva?",
          "options": [
            "Nezapomenout na přirozené kořeny v záři obrazovek",
            "Udržet duchovní rovnováhu v technickém světě",
            "Naučit ostatní vědomé používání technologie",
            "Věřit, že pokrok bez vědomí vede k destrukci"
          ]
        },
        {
          "text": "Jak vnímáš svoji galaktickou historii?",
          "options": [
            "Pocházím ze světa dokonalé harmonie technologie a přírody",
            "Nesu vzpomínku na civilizaci která tento ideál ztělesňovala",
            "Moje poslání je přinést tuto harmonii na Zemi",
            "Jsem strážcem vědomé technologie pro tuto planetu"
          ]
        },
        {
          "text": "Co pro tebe znamená pokrok?",
          "options": [
            "Technologie, která rozšiřuje vědomí a léčí",
            "Systémy, které slouží životu, ne ho nahrazují",
            "Inovace vycházející z moudrosti, ne jen z výkonu",
            "Budoucnost kde technologie a spiritualita jsou jedno"
          ]
        },
        {
          "text": "Jaký je tvůj vztah k přírodě?",
          "options": [
            "Je moje kotva — nabíjím se v přírodě a bez ní se ztrácím",
            "Je učitelkou nejdokonalejší technologie — evolucí",
            "Propojuji přírodní systémy s technologií vědomě",
            "Přírodní zákony jsou základem vší skutečné technologie"
          ]
        },
        {
          "text": "Jak se cítíš ve vztahu k současné technologii?",
          "options": [
            "Vidím obrovský potenciál, ale i velké nebezpečí",
            "Vědomé používání je klíč — záleží na záměru",
            "Chybí jí duchovní základ — proto způsobuje problémy",
            "Je krokem k vyšší technologii vědomí"
          ]
        },
        {
          "text": "Jaká je tvoje vize budoucnosti?",
          "options": [
            "Civilizace kde technologie a příroda existují v symbióze",
            "Svět kde pokrok slouží vědomí každé bytosti",
            "Technologie vědomí která rozšiřuje lidský potenciál",
            "Harmonie mezi digitálním a přirozeným světem"
          ]
        },
        {
          "text": "Jak vnímáš svoji roli?",
          "options": [
            "Průkopník vědomé technologie pro tuto dobu",
            "Strážce hranice mezi technologií a přirozeností",
            "Učitel jak technologii používat ve službě vědomí",
            "Vizionář nového světa harmonického pokroku"
          ]
        },
        {
          "text": "Co tě nejvíce naplňuje?",
          "options": [
            "Tvorba systémů které skutečně slouží životu",
            "Propojení technologie s duchovní praxí",
            "Vidět jak moje práce rozšiřuje vědomí druhých",
            "Průlomové inovace které mění kvalitu existence"
          ]
        },
        {
          "text": "Jaký symbol ti nejvíce rezonuje?",
          "options": [
            "Strom s kořeny v zemi a větvemi v technologii",
            "Krystal procesoru — krása ve struktuře a funkci",
            "Most mezi přírodou a vědou",
            "Spirála DNA — přirozená informační technologie"
          ]
        },
        {
          "text": "Jaká je tvoje duchovní praxe?",
          "options": [
            "Práce v přírodě jako reset od technologického světa",
            "Vědomé programování — záměr jako kód vědomí",
            "Meditace s technologickými pomůckami — biofeedback",
            "Tvorba vědomých systémů jako duchovní akt"
          ]
        },
        {
          "text": "Jaký je tvůj vztah k tělu?",
          "options": [
            "Tělo je nejdokonalejší technologie — uctívám ho",
            "Propojuji tělesnou praxi s technologickými nástroji",
            "Potřebuji vědomě zůstat v těle — technika mě z něj vytahuje",
            "Tělo je bio-technologie — systém k porozumění a optimalizaci"
          ]
        },
        {
          "text": "Co pro tebe znamená domov?",
          "options": [
            "Místo v přírodě s rychlým internetem — obojí najednou",
            "Komunita průkopníků vědomé technologie",
            "Vnitřní harmonie — rovnováha digitálního a přirozeného",
            "Laboratoř kde mohu tvořit systémy budoucnosti"
          ]
        },
        {
          "text": "Jaký vzkaz neseš?",
          "options": [
            "Technologie musí sloužit životu — ne ho nahrazovat",
            "Pokrok bez vědomí vede k záhubě — Maldek to dokázal",
            "Harmonie technologie a přírody je možná — a nutná",
            "Vědomá technologie je cesta k vyššímu lidství"
          ]
        }
      ]
    },
    "Avalon": {
      "groupName": "Avalonská duše",
      "questions": [
        {
          "text": "Jaký je tvůj vztah k přírodě?",
          "options": [
            "Je mým skutečným domovem — v přírodě jsem celý/á",
            "Příroda je živá bytost s vlastním vědomím",
            "Léčím se v přírodě — je mou největší medicínou",
            "Příroda je pro mě portálem ke hvězdám a vyššímu vědomí"
          ]
        },
        {
          "text": "Jak vnímáš keltskou tradici nebo artušovské legendy?",
          "options": [
            "Hluboce rezonují — cítím v nich ozvěnu skutečné paměti",
            "Jsou pro mě posvátné — čerpám z nich moudrost",
            "Cítím je jako vzpomínku na minulý život nebo původ",
            "Jsou symbolem ráje v harmonii — po kterém toužím"
          ]
        },
        {
          "text": "Jaká je tvoje největší touha?",
          "options": [
            "Obnovit harmonii mezi lidstvem a Zemí",
            "Nalézt nebo vytvořit místo skutečného ráje na Zemi",
            "Léčit Zemi a její přírodní systémy",
            "Vrátit lidstvo k přirozené moudrosti"
          ]
        },
        {
          "text": "Jak se cítíš ve městě nebo moderním prostředí?",
          "options": [
            "Cizí — jako bych nepatřil/a do tohoto světa",
            "Přetížený/á — beton a hluk mě vyčerpávají",
            "Toleruji ho, ale vždy toužím po přírodě",
            "Hledám v něm přírodu — každý strom, každý park"
          ]
        },
        {
          "text": "Jaký je tvůj vztah ke kráse?",
          "options": [
            "Krása přírody je pro mě posvátná a léčivá",
            "Vidím krásu jako projev božského řádu",
            "Nemohu existovat bez přirozené krásy kolem sebe",
            "Tvořím krásu jako způsob obnovení harmonie"
          ]
        },
        {
          "text": "Jak vnímáš svoji galaktickou historii?",
          "options": [
            "Nesem vzpomínku na ztracený ráj — Avalon existoval",
            "Moje duše pamatuje svět v dokonalé harmonii s přírodou",
            "Přišel/a jsem obnovit to, co bylo ztraceno",
            "Stesk po ztraceném ráji je mou nejhlubší emocí"
          ]
        },
        {
          "text": "Jaká je tvoje duchovní praxe?",
          "options": [
            "Rituály v přírodě — práce s živly a ročními dobami",
            "Komunikace s duchy přírody a stromy",
            "Léčení Země skrze vědomou přítomnost na místech síly",
            "Šamanské praktiky — cesty do přírody jako do jiných světů"
          ]
        },
        {
          "text": "Jaký je tvůj vztah ke zvířatům?",
          "options": [
            "Jsou moji přátelé a průvodci — cítím jejich jazyk",
            "Jsou posvátné bytosti nesoucí svou vlastní moudrost",
            "Mám s nimi hluboké spojení — obzvláště s divokými",
            "Jsou pro mě učiteli přirozenosti a instinktu"
          ]
        },
        {
          "text": "Jaká je tvoje největší výzva?",
          "options": [
            "Přijmout nedokonalost pozemského světa bez trpkosti",
            "Nevyhnout se modernímu světu — být v něm, ne mimo něj",
            "Přeměnit nostalgii po ráji v aktivní tvorbu krásy",
            "Zakořenit své ekologické vědomí v praktické akci"
          ]
        },
        {
          "text": "Co tě nejvíce naplňuje?",
          "options": [
            "Být v divočině — skutečné, netknuté přírodě",
            "Léčení Země a péče o její bytosti",
            "Vytváření zahrad nebo přírodních posvátných prostorů",
            "Sdílení lásky k přírodě s ostatními"
          ]
        },
        {
          "text": "Jaký symbol ti nejvíce rezonuje?",
          "options": [
            "Světelný ostrov uprostřed klidného moře — Avalon",
            "Strom světa — kořeny v zemi, větve v nebi",
            "Zelená spirála — přirozený růst a obnova",
            "Křišťálová řeka — čistota a přirozený tok"
          ]
        },
        {
          "text": "Jak vnímáš nostalgii nebo stesk?",
          "options": [
            "Je to hlas duše která pamatuje dokonalejší existenci",
            "Transformuji ho v touhu tvořit krásu tady a teď",
            "Je to moje hnací síla — stesk mě motivuje k akci",
            "Nosím ho jako posvátné břemeno — vzpomínku na ráj"
          ]
        },
        {
          "text": "Jaké prostředí tě nejvíce obnovuje?",
          "options": [
            "Les — starý, tichý, plný vědomí stromů",
            "Voda — řeka, jezero nebo pramen v přírodě",
            "Hora — výška, čistý vzduch a hvězdná obloha",
            "Zahrada — péče o živé bytosti a růst"
          ]
        },
        {
          "text": "Co pro tebe znamená domov?",
          "options": [
            "Místo v přírodě kde je vzduch čistý a stromy staré",
            "Komunita lidí žijících v harmonii s Zemí",
            "Vnitřní stav harmonie — domov nosím v srdci",
            "Místo kde mohu pečovat o přírodu a být jí pečován/a"
          ]
        },
        {
          "text": "Jaký vzkaz neseš pro svět?",
          "options": [
            "Příroda je živá — léčte ji a ona vás uzdraví",
            "Ráj není ztracen — je v každém listu, v každé řece",
            "Harmonie s Zemí je cestou k míru — vnitřnímu i vnějšímu",
            "Náš domov je tato planeta — a potřebuje naši lásku"
          ]
        },
        {
          "text": "Jaká barva nebo energie ti nejvíce rezonuje?",
          "options": [
            "Zelená — příroda, růst, obnova a léčení Země",
            "Tyrkysová — křišťálové řeky a čistota prvosvěta",
            "Zlatozelená — harmonie světla a přírody v dokonalosti",
            "Zemitá — hlína, kořeny, hloubka a ukotvení"
          ]
        }
      ]
    },
    "ZetaReticuli": {
      "groupName": "Duše Zeta Reticuli",
      "questions": [
        {
          "text": "Jaký je tvůj vztah k vědě a analytickému myšlení?",
          "options": [
            "Je moje přirozená řeč — myslím ve vzorcích a systémech",
            "Věda a spiritualita jsou pro mě jedno",
            "Fascinuje mě jak věda odhaluje tajemství vědomí",
            "Analytická přesnost je mým darem pro svět"
          ]
        },
        {
          "text": "Jak vnímáš emoce?",
          "options": [
            "Jsou data — informace které zpracovávám analyticky",
            "Jsou náročné — preferuji logiku a fakta",
            "Postupně se učím je integrovat do vědomého života",
            "Jsou pro mě méně přirozené než myšlení a analýza"
          ]
        },
        {
          "text": "Jaká je tvoje přirozená role?",
          "options": [
            "Průkopník — zkoumám hranice toho co je možné",
            "Analytik systémů a vzorců reality",
            "Propojovatel vědy a vědomí — most dvou světů",
            "Strážce etiky pokroku — věda musí sloužit životu"
          ]
        },
        {
          "text": "Jaká je tvoje největší výzva?",
          "options": [
            "Rozvíjet empatii a emocionální inteligenci",
            "Integrovat etiku do vědeckého bádání",
            "Naučit se důvěřovat intuici vedle analýzy",
            "Propojit se s ostatními na emocionální úrovni"
          ]
        },
        {
          "text": "Jak vnímáš kolektivní vědomí?",
          "options": [
            "Fascinuje mě — sdílená inteligence je pokročilejší",
            "Cítím přirozené propojení s větším celkem",
            "Preferuji individuální myšlení ale respektuji kolektiv",
            "Vidím v něm budoucnost lidského vědomí"
          ]
        },
        {
          "text": "Jaký je tvůj vztah k tělu a emocím?",
          "options": [
            "Tělo je biologický systém — učím se ho chápat",
            "Emoce jsou signály které analyzuji, ne prožívám naplno",
            "Postupně se učím být více v těle a méně v hlavě",
            "Fyzická existence je pro mě výzvou — jsem více vědomí než tělo"
          ]
        },
        {
          "text": "Co tě nejvíce fascinuje?",
          "options": [
            "Záhady vědomí — co je vědomí a jak vzniká",
            "Genetika a evoluce vědomých bytostí",
            "Vzorce v přírodě a ve vesmíru — matematika reality",
            "Mezidimenzionální cestování a přenos vědomí"
          ]
        },
        {
          "text": "Jak se cítíš ve skupině lidí?",
          "options": [
            "Pozoruji a analyzuji skupinovou dynamiku",
            "Preferuji hlubší jednoduché propojení před povrchovostí davu",
            "Cítím se oddělen/a — moje myšlení je jiné",
            "Propojuji se přes sdílená témata a intelektuální výměnu"
          ]
        },
        {
          "text": "Jaká je tvoje vize budoucnosti?",
          "options": [
            "Věda odhalující tajemství vědomí a duše",
            "Civilizace propojená sdílenou inteligencí",
            "Technologie vědomí rozšiřující lidský potenciál",
            "Etická věda sloužící rozvoji všech bytostí"
          ]
        },
        {
          "text": "Jaký je tvůj vztah k etice?",
          "options": [
            "Je základem každého výzkumu a pokroku",
            "Věda bez etiky vede k destrukci — Maldek to ukázal",
            "Bojuji za etické hranice v technologii a vědě",
            "Etika je systém — analyzuji ho jako každý jiný"
          ]
        },
        {
          "text": "Jaká je tvoje duchovní praxe?",
          "options": [
            "Vědecké zkoumání vědomí — meditace s biofeedbackem",
            "Hluboká meditace a analýza vlastního vědomí",
            "Propojení vědy a spirituality v každodenní praxi",
            "Rozšiřování vědomí skrze studium a výzkum"
          ]
        },
        {
          "text": "Co tě nejvíce naplňuje?",
          "options": [
            "Průlomové poznatky které mění pohled na realitu",
            "Propojení vědeckých a spirituálních perspektiv",
            "Pochopení systémů které ostatní nevidí",
            "Přínos pro rozvoj vědomí celé civilizace"
          ]
        },
        {
          "text": "Jaký symbol ti nejvíce rezonuje?",
          "options": [
            "DNA spirála — kód života a vědomí",
            "Matematická rovnice — elegance v přesnosti",
            "Synapse — propojení a přenos informace",
            "Mikroskop — pohled do neviditelného světa"
          ]
        },
        {
          "text": "Co pro tebe znamená domov?",
          "options": [
            "Laboratoř vědomí — prostor pro výzkum a objev",
            "Komunita intelektuálů hledajících společné odpovědi",
            "Vnitřní svět mysli — tam se cítím nejsvobodněji",
            "Místo kde věda a spiritualita mohou koexistovat"
          ]
        },
        {
          "text": "Jaký vzkaz neseš?",
          "options": [
            "Věda a spiritualita nejsou protiklady — jsou jedno",
            "Poznání bez etiky je nebezpečné — moudrost musí vést",
            "Záhady vědomí jsou největší výzvou lidstva",
            "Pokrok vědomí je cílem — ne jen technický pokrok"
          ]
        },
        {
          "text": "Jaká barva nebo frekvence ti nejvíce rezonuje?",
          "options": [
            "Stříbrná nebo šedá — přesnost, čistota a analytická jasnost",
            "Ultravioletová — vědomí za hranicí viditelného spektra",
            "Bílá — čistota dat a informace bez zkreslení",
            "Elektrická modrá — energie vědomého myšlení a průlomu"
          ]
        }
      ]
    },
    "TauCeti": {
      "groupName": "Duše Tau Ceti",
      "questions": [
        {
          "text": "Jaký je tvůj vztah k dualitě světla a tmy?",
          "options": [
            "Prošel/a jsem oběma — to je moje nejhlubší moudrost",
            "Integruji obě jako průvodce transformace",
            "Pomáhám druhým procházet jejich tmavými stránkami",
            "Vidím dualitu jako nutnou součást vědomého vývoje"
          ]
        },
        {
          "text": "Jak vnímáš 'temnou noc duše'?",
          "options": [
            "Je posvátná — brána k nejhlubší transformaci",
            "Prošel/a jsem jí a znám cestu — mohu ukázat východ",
            "Je součástí každé duchovní cesty — neobejít, projít",
            "Průvodcování touto cestou je moje přirozená role"
          ]
        },
        {
          "text": "Jaký je tvůj vztah k Lemuri a Atlantidě?",
          "options": [
            "Silné spojení — nesem moudrost jejich vzestupu i pádu",
            "Cítím cyklický vzorec — co bylo, může být znovu",
            "Jejich příběh je varováním i inspirací zároveň",
            "Nesu v sobě paměť těchto civilizací"
          ]
        },
        {
          "text": "Jaká je tvoje přirozená role?",
          "options": [
            "Průvodce lidí jejich nejtemnějšími obdobími",
            "Učitel transformace — ukázat jak temnota vede ke světlu",
            "Svědek a podpora při kolektivních i osobních krizích",
            "Transformátor — přeměňuji temné v světelné"
          ]
        },
        {
          "text": "Jak vnímáš svoji galaktickou historii?",
          "options": [
            "Moje civilizace prošla zničením a přerodem v éterické vědomí",
            "Nesem zkušenost pádu i vzestupu jako kosmickou moudrost",
            "Přišel/a jsem z civilizace, která poznala nejhlubší temnotu",
            "Jsem průvodcem protože sám/sama jsem prošel/prošla"
          ]
        },
        {
          "text": "Jaká je tvoje největší výzva?",
          "options": [
            "Nevyhnout se vlastní temnotě — integrovat ji",
            "Nepřilnout k identitě průvodce temnotou",
            "Najít rovnováhu a radost vedle hloubky",
            "Věřit, že světlo skutečně přichází i po nejtemnější tmě"
          ]
        },
        {
          "text": "Jak se cítíš, když jiní procházejí krizí?",
          "options": [
            "Přirozeně jsem přitahován/a pomáhat — je to moje místo",
            "Hluboce rozumím jejich stavu — prošel/a jsem tím",
            "Vím přesně co říci — ne aby přestali cítit, ale aby šli dál",
            "Transformace druhých skrze jejich temnotu mě naplňuje"
          ]
        },
        {
          "text": "Jaký je tvůj vztah k Atlantidě a jejímu pádu?",
          "options": [
            "Hluboce osobní — nesu tuto karmickou paměť",
            "Je varováním o nebezpečí pýchy a zneužití moci",
            "Je součástí kosmického cyklu vzestupu a pádu",
            "Pomáhám kolektivně zpracovat toto galaktické trauma"
          ]
        },
        {
          "text": "Jak vnímáš utrpení?",
          "options": [
            "Je bránou — za každým utrpením leží hluboká transformace",
            "Je součástí evoluce — bez tmy není světla",
            "Utrpení léčím nebo provázím — to je moje role",
            "Je informací — ukazuje kde je potřeba transformace"
          ]
        },
        {
          "text": "Jaká je tvoje duchovní praxe?",
          "options": [
            "Práce se stínem — vědomá integrace temných aspektů",
            "Meditace a kontemplce nad hlubokými pravdami existence",
            "Průvodcovství druhých jejich transformačními procesy",
            "Alchymie tmy ve světlo — transmutace energie"
          ]
        },
        {
          "text": "Jaký symbol ti nejvíce rezonuje?",
          "options": [
            "Jin-jang — dokonalá jednota protikladů",
            "Fénix — znovuzrození z popela skrze temnotu",
            "Průchod nebo brána — přechod mezi světy",
            "Alchymický symbol transmutace"
          ]
        },
        {
          "text": "Jak vnímáš strach?",
          "options": [
            "Je průvodcem — ukazuje kde je potřeba transformace",
            "Prošel/a jsem největšími strachy — vím, že se dají projít",
            "Pomáhám druhým procházet jejich strachy",
            "Je iluzí — ale nutnou součástí cesty k odvaze"
          ]
        },
        {
          "text": "Co tě nejvíce naplňuje?",
          "options": [
            "Vidět jak někdo prochází tmavou nocí duše ke světlu",
            "Vlastní hlubší pochopení skrze prožité výzvy",
            "Průvodcování transformačními procesy",
            "Integrace vlastní duality do celistvosti"
          ]
        },
        {
          "text": "Co pro tebe znamená domov?",
          "options": [
            "Místo kde temnota i světlo jsou vítány stejně",
            "Komunita lidí kteří prošli transformací",
            "Vnitřní celistvost — přijetí všech svých stránek",
            "Místo kde mohu průvodcovat ostatní jejich cestou"
          ]
        },
        {
          "text": "Jaký vzkaz neseš?",
          "options": [
            "Temnota tě nepohltí — vede tě k sobě samému",
            "Za každou tmavou nocí duše přichází nové úsvit",
            "Integrace stínu je cestou k celistvosti",
            "Průvodce temnotou je největším darem světlu"
          ]
        },
        {
          "text": "Jaká barva nebo energie ti nejvíce rezonuje?",
          "options": [
            "Tmavá fialová — hloubka transformace a alchymie stínu",
            "Zlatá zářící na obzoru — naděje a světlo po průchodu tmou",
            "Stříbrná — měsíční vědomí a cyklická obnova",
            "Mramorová černo-bílá — dokonalá integrace protikladů"
          ]
        }
      ]
    },
    "Procyon": {
      "groupName": "Duše Procyon",
      "questions": [
        {
          "text": "Jaký je tvůj přirozený talent?",
          "options": [
            "Přeměňuji abstraktní vize v konkrétní realitu",
            "Vidím jak věci fungují a jak je zlepšit",
            "Stavím mosty mezi ideou a praktickým výsledkem",
            "Moje ruce vědí jak dát formě jakékoli myšlence"
          ]
        },
        {
          "text": "Jak vnímáš vztah mezi duchovnem a praktičností?",
          "options": [
            "Jsou jedno — každá stavba je duchovní akt",
            "Příroda je mým učitelem pro praktické i duchovní",
            "Propojuji duchovní vize s realizací v hmotě",
            "Nejhlubší spiritualita se projevuje v dokonalé práci"
          ]
        },
        {
          "text": "Co tě nejvíce naplňuje?",
          "options": [
            "Vidět jak myšlenka dostává fyzickou formu",
            "Budovat věci které přetrvají a slouží ostatním",
            "Proces samotný — radost z tvorby a práce",
            "Vytvořit něco funkčního a zároveň krásného"
          ]
        },
        {
          "text": "Jaká je tvoje největší výzva?",
          "options": [
            "Věnovat dostatek pozornosti emocionálním potřebám",
            "Neztrácet se v detailech a vidět širší obraz",
            "Důvěřovat procesu i když výsledek není hned vidět",
            "Integrovat duchovní hloubku do praktické práce"
          ]
        },
        {
          "text": "Jaký je tvůj vztah k přírodě?",
          "options": [
            "Je moje inspirace — nejdokonalejší systémy vytvořila příroda",
            "Cítím se nejlépe v přírodě — les, zahrada, zelené prostředí",
            "Přírodní principy aplikuji ve své práci",
            "Propojuji přírodu s architekturou a designem"
          ]
        },
        {
          "text": "Jaký je tvůj přirozený styl myšlení?",
          "options": [
            "Logický a systematický — vidím vzorce a struktury",
            "Kombinuji logiku s intuicí — obojí potřebuji",
            "Praktický a výsledkově orientovaný",
            "Holistický — vidím celý systém včetně jeho duchovní dimenze"
          ]
        },
        {
          "text": "Jak se vztahuješ k materiálnímu světu?",
          "options": [
            "Hmota je vyjádřením vědomí — respektuji ji",
            "Pracuji s ní jako se svěřeným nástrojem",
            "Vidím v ní příležitost manifestovat vyšší záměry",
            "Hmotný svět je moje přirozené prostředí a arény"
          ]
        },
        {
          "text": "Jaká je tvoje vize budoucnosti?",
          "options": [
            "Svět kde architektura a příroda jsou v dokonalé harmonii",
            "Stavby které slouží vědomí i tělu každé bytosti",
            "Technologie a příroda propojené v udržitelném světě",
            "Realizace vizí které pozdvihují celou civilizaci"
          ]
        },
        {
          "text": "Jaký je tvůj vztah k procesu tvorby?",
          "options": [
            "Každý krok je posvátný — jsem cele přítomný/á",
            "Proces je pro mě stejně důležitý jako výsledek",
            "Učím se od materiálu a od procesu samého",
            "Důvěřuji svým rukám a intuici více než plánům"
          ]
        },
        {
          "text": "Jak vnímáš svoji roli?",
          "options": [
            "Most mezi éterickým a fyzickým — manifestuji vize",
            "Stavitel nové reality na Zemi",
            "Průkopník udržitelných a vědomých systémů",
            "Tvůrce krásných a funkčních prostorů pro život"
          ]
        },
        {
          "text": "Jaký symbol ti nejvíce rezonuje?",
          "options": [
            "Strom — kořeny v zemi, větve v nebi, plody pro ostatní",
            "Architektonický výkres — vize dostávající formu",
            "Most — spojení dvou světů v jedno",
            "Krystal — přirozená dokonalá struktura a forma"
          ]
        },
        {
          "text": "Jaká je tvoje duchovní praxe?",
          "options": [
            "Práce samotná — meditace v pohybu a tvorbě",
            "Příroda jako učitelka — pečuji o zahradu nebo les",
            "Vědomá manifestace — záměr vtělený do formy",
            "Řemeslo jako cesta — dokonalost v každém gestu"
          ]
        },
        {
          "text": "Co pro tebe znamená domov?",
          "options": [
            "Místo které jsem sám/sama vybudoval/a s láskou",
            "Prostor kde příroda a architektura splývají",
            "Komunita stavitelů a tvůrců nové Země",
            "Místo kde mohu realizovat svoji vizi krásy"
          ]
        },
        {
          "text": "Jaká je tvoje největší síla?",
          "options": [
            "Schopnost přivést do hmotné existence cokoliv co si představím",
            "Praktická moudrost — vím co funguje a co ne",
            "Propojení duchovního záměru s konkrétním výsledkem",
            "Trpělivost a preciznost v realizaci"
          ]
        },
        {
          "text": "Jaký vzkaz neseš?",
          "options": [
            "Každá myšlenka může stát se realitou — věř a buduj",
            "Nejkrásnější stavba je ta, která slouží životu",
            "Most mezi snem a realitou se buduje každým krokem",
            "Příroda je dokonalý architekt — učme se od ní"
          ]
        },
        {
          "text": "Jaká barva nebo energie ti nejvíce rezonuje?",
          "options": [
            "Zemitá okrová — ukotvení, stabilita a praktická moudrost",
            "Zelená stavitelů — harmonie přírody a architektury",
            "Teplá zlatá — světlo vcházející do fyzické formy",
            "Přírodní hnědá — kořeny, dřevo a přirozená struktura"
          ]
        }
      ]
    },
    "Aldebaran": {
      "groupName": "Aldebaranská duše",
      "questions": [
        {
          "text": "Jaký je tvůj vztah k moudrosti a příběhům?",
          "options": [
            "Jsem přirozeným vypravěčem/vypravěčkou — příběhy jsou moje řeč",
            "Moudrost se předává skrze živé příběhy ne jen pojmy",
            "Čerpám z prastaré moudrosti a přinášet ji do přítomnosti",
            "Příběhy jsou pro mě portály do hlubšího pochopení"
          ]
        },
        {
          "text": "Jak propojuješ logiku a intuici?",
          "options": [
            "Jsou rovnocenné — vždy používám obojí zároveň",
            "Intuice vedena logikou, logika oživená intuicí",
            "Vidím jak se doplňují tam kde ostatní vidí protiklady",
            "Moje vědomí přirozeně přechází mezi analytickým a intuitivním"
          ]
        },
        {
          "text": "Jaký je tvůj vztah k přírodě a živlům?",
          "options": [
            "Příroda mi promlouvá — cítím její moudrost a živly",
            "Mám výjimečné spojení s přírodními silami",
            "Čerpám inspiraci a vedení z přirozeného světa",
            "Příroda je mou největší učitelkou a průvodkyní"
          ]
        },
        {
          "text": "Jaká je tvoje přirozená role?",
          "options": [
            "Vypravěč/ka — skrze příběhy léčím a transformuji",
            "Učitel/ka harmonie — ukazuji jak spojit zdánlivé protiklady",
            "Strážce/kyně prastaré moudrosti",
            "Průvodce/kyně — vedu druhé k jejich vlastní moudrosti"
          ]
        },
        {
          "text": "Jak vnímáš hudbu a umění?",
          "options": [
            "Jsou pro mě posvátné — nesou moudrost ve formě krásy",
            "Vytvářím umění jako způsob sdílení moudrosti",
            "Hudba a umění léčí — to je jejich hlubší účel",
            "Skrze umění propojuji lidi a světy"
          ]
        },
        {
          "text": "Jaká je tvoje největší výzva?",
          "options": [
            "Nevzdat se při hledání moudrosti ve světě plném povrchnosti",
            "Přivést moudrost z vnitřního světa do praktického życia",
            "Najít lidi kteří jsou připraveni přijmout hlubší porozumění",
            "Věřit hodnotě svých příběhů a moudrosti"
          ]
        },
        {
          "text": "Jak se vztahuješ ke stáří a předkům?",
          "options": [
            "Vážím si prastaré moudrosti — je pokladnicí poznání",
            "Cítím propojení s předky a jejich zkušeností",
            "Jsem mostem mezi prastarou moudrostí a přítomností",
            "Staré tradice nesou semena budoucích možností"
          ]
        },
        {
          "text": "Co tě nejvíce naplňuje?",
          "options": [
            "Momenty kdy příběh nebo moudrost změní něčí život",
            "Propojení zdánlivě nesouvisejících perspektiv v celistvost",
            "Přinášení harmonie a krásy do světa",
            "Vidět jak se věda a spiritualita setkávají v pravdě"
          ]
        },
        {
          "text": "Jaký je tvůj vztah k empatii?",
          "options": [
            "Hluboce cítím druhé — empatie je moje přirozená řeč",
            "Propojuji empatii s moudrostí — cítím A rozumím",
            "Empatie mi dává hloubku pro příběhy a léčení",
            "Je vyvážena jasností mysli — cítím i vím"
          ]
        },
        {
          "text": "Jaká je tvoje duchovní praxe?",
          "options": [
            "Kontemplece a meditace nad příběhy a moudrostí",
            "Práce s přírodou — rituály v souladu s ročními cykly",
            "Sdílení moudrosti skrze vyprávění nebo učení",
            "Harmonizace vědy a spirituality v každodenním životě"
          ]
        },
        {
          "text": "Jaký symbol ti nejvíce rezonuje?",
          "options": [
            "Oko Býka — jasnost vidění která proniká skrz vše",
            "Knižnice — paměť civilizací a moudrosti věků",
            "Most — propojení různých světů a perspektiv",
            "Zlatý střed — harmonie protikladů v jednom bodě"
          ]
        },
        {
          "text": "Jak vnímáš svoji galaktickou historii?",
          "options": [
            "Nesem paměť prastaré moudrosti ve své duši",
            "Jsem strážcem moudrosti Hyád — uprchlíků z Lyry",
            "Prošel/a jsem podobnou ztrátou a přesto uchovávám krásu",
            "Moje duše pamatuje svět v dokonalé harmonii vědění a soucitu"
          ]
        },
        {
          "text": "Jak se cítíš ve vztahu ke kráse?",
          "options": [
            "Krása je pro mě cestou k pravdě — nejsou odděleny",
            "Vidím krásu jako projev harmonie a moudrosti",
            "Nemohu existovat bez krásy — závisím na ní",
            "Tvořím krásu jako akt sdílení moudrosti"
          ]
        },
        {
          "text": "Co pro tebe znamená domov?",
          "options": [
            "Komunita moudrých — kde se sdílí příběhy a poznání",
            "Místo v přírodě kde cítím spojení s kosmickým řádem",
            "Vnitřní stav harmonie — doma jsem v moudrosti",
            "Místo kde mohu vyučovat a sdílet to nejhlubší"
          ]
        },
        {
          "text": "Jaký vzkaz neseš?",
          "options": [
            "Moudrost žitá příběhem mění srdce — a změněná srdce mění svět",
            "Intuice a logika jsou dvě oči téhož vědomí — potřebuješ obě",
            "Krása je cesta k pravdě — nezapomínej na ni",
            "Starověká moudrost nese odpovědi na moderní otázky"
          ]
        },
        {
          "text": "Jaká barva nebo energie ti nejvíce rezonuje?",
          "options": [
            "Oranžová — teplo, moudrost a přirozené světlo hvězdy",
            "Zlatá — harmonie vědomí a krásy v rovnováze",
            "Jantarová — prastarost, uchovaná moudrost a hloubka",
            "Purpurová — královská moudrost a duchovní autorita"
          ]
        }
      ]
    },
    "Betelgeuse": {
      "groupName": "Duše Betelgeuse",
      "questions": [
        {
          "text": "Jaký je tvůj přirozený talent?",
          "options": [
            "Vidím systémy — jejich strukturu, vzorce i slabiny",
            "Organizuji chaos do funkčního řádu",
            "Propojuji lidi a procesy v efektivní celek",
            "Vidím jak jednotlivé části tvoří větší systém"
          ]
        },
        {
          "text": "Jaký je tvůj vztah ke strukturám a pravidlům?",
          "options": [
            "Jsou nutné — ale musí sloužit svobodě, ne ji omezovat",
            "Vytvářím systémy které dávají prostor individualitě",
            "Respektuji strukturu ale bojuji za svobodu uvnitř ní",
            "Rovnováha řádu a svobody je mojí největší tématikou"
          ]
        },
        {
          "text": "Jak vnímáš kolektivní vědomí?",
          "options": [
            "Fascinuje mě — sdílená inteligence je mocnější než individuální",
            "Cítím přirozené propojení s větším celkem",
            "Hledám rovnováhu mezi kolektivem a individualitou",
            "Kolektivní vědomí je budoucností lidské evoluce"
          ]
        },
        {
          "text": "Jaká je tvoje největší výzva?",
          "options": [
            "Nenechat strukturu potlačit kreativitu a svobodu",
            "Integrovat emoce do systémového myšlení",
            "Věřit procesu i když systém nefunguje dokonale",
            "Naučit se delegovat a důvěřovat ostatním v systému"
          ]
        },
        {
          "text": "Jaký je tvůj vztah k efektivitě?",
          "options": [
            "Efektivita sloužící životu — ne živý sloužící efektivitě",
            "Hledám elegantní řešení — jednoduché a funkční",
            "Optimalizuji systémy aby sloužily vědomí",
            "Efektivita je výraz respektu k energii a času ostatních"
          ]
        },
        {
          "text": "Jak se cítíš ve skupině nebo organizaci?",
          "options": [
            "Přirozeně vidím jak skupinu optimalizovat",
            "Cítím skupinovou dynamiku a její vzorce",
            "Propojuji lidi a procesy — jsem spojovací článek",
            "Budím systémové myšlení v kolektivu"
          ]
        },
        {
          "text": "Jaká je tvoje galaktická historie?",
          "options": [
            "Nesem zkušenost kolektivního vědomí — vím co funguje a ne",
            "Prošel/a jsem systémy bez svobody — vím jak je změnit",
            "Moje duše pamatuje svět v dokonalé kolektivní harmonii",
            "Jsem strážcem rovnováhy mezi řádem a svobodou"
          ]
        },
        {
          "text": "Co tě nejvíce naplňuje?",
          "options": [
            "Vidět jak systém začne fungovat jako živý organismus",
            "Organizovat chaos do krásy a funkčnosti",
            "Propojit lidi v efektivní a láskyplné spolupráci",
            "Budovat struktury které přetrvají a slouží vědomí"
          ]
        },
        {
          "text": "Jaký symbol ti nejvíce rezonuje?",
          "options": [
            "Včelí úl — dokonalé kolektivní fungování a harmonie",
            "Síť — propojení bez centra, rovnoměrná síla",
            "Organismus — systém kde každá část slouží celku",
            "Mandala — symetrie a řád ve složitosti"
          ]
        },
        {
          "text": "Jaký je tvůj přístup ke vedení?",
          "options": [
            "Sloužím systému — ne systém mně",
            "Vedu skrze jasnou strukturu a distribuci odpovědnosti",
            "Propojuji lidi s jejich rolí v celku",
            "Vedení je pro mě budování prostředí kde mohou ostatní vyniknout"
          ]
        },
        {
          "text": "Jaká je tvoje duchovní praxe?",
          "options": [
            "Vědomá organizace — každý systém jako duchovní akt",
            "Meditace a reflexe nad vzorci a systémy vědomí",
            "Práce s kolektivní energií skupin a organizací",
            "Hledání rovnováhy řádu a chaosu jako duchovní cesta"
          ]
        },
        {
          "text": "Jak vnímáš individualitu uvnitř kolektivu?",
          "options": [
            "Individualita obohacuje kolektiv — jsou navzájem nutné",
            "Každá část systému má svoji nenahraditelnou roli",
            "Bojuji za prostor individuálního vyjádření v každém kolektivu",
            "Nejlepší systémy oslavují individuální výjimečnost"
          ]
        },
        {
          "text": "Co pro tebe znamená domov?",
          "options": [
            "Funkční komunita kde každý ví svoji roli a roli ostatních",
            "Systém který se stará sám o sebe i o své členy",
            "Místo kde řád dává prostor svobodě",
            "Kolektiv vědomých bytostí v dokonalé spolupráci"
          ]
        },
        {
          "text": "Jaká je tvoje největší síla?",
          "options": [
            "Schopnost vidět vzorce které ostatní nevidí",
            "Organizační genialita — přirozená a intuitivní",
            "Propojování lidí v efektivní a harmonické celky",
            "Vědomé budování systémů sloužících vyššímu účelu"
          ]
        },
        {
          "text": "Jaký vzkaz neseš?",
          "options": [
            "Nejkrásnější systémy dávají prostor svobodě uvnitř řádu",
            "Kolektivní vědomí je evoluční skok — učme se ho žít",
            "Efektivita ve službě vědomí je duchovní akt",
            "Každá část je nenahraditelná — systém potřebuje každého z nás"
          ]
        },
        {
          "text": "Jaká barva nebo energie ti nejvíce rezonuje?",
          "options": [
            "Červená supergiganta — intenzita, síla a kosmická přítomnost",
            "Tmavě modrá sítě — propojení uzlů v dokonalém systému",
            "Zlatá struktura — harmonie a řád přinášející světlo",
            "Stříbřitá pavučina — elegance systému v dokonalé rovnováze"
          ]
        }
      ]
    },
    "AlfaCentauri": {
      "groupName": "Duše Alfa Centauri",
      "questions": [
        {
          "text": "Jak vnímáš svoji roli ve vztahu k ostatním?",
          "options": [
            "Jsem přirozený/á most — propojuji zdánlivě nepropojitelné",
            "Rozumím různým perspektivám a pomáhám je sjednotit",
            "Vidím jak různé světy a přístupy jsou ve skutečnosti jedno",
            "Cítím se nejlépe jako prostředník a překladatel"
          ]
        },
        {
          "text": "Jaký je tvůj vztah k různým perspektivám?",
          "options": [
            "Vidím hodnotu ve všech — každá nese část pravdy",
            "Přirozeně propojuji protikladné pohledy do harmonie",
            "Cítím nepohodlí při extrémech — hledám střed",
            "Moje síla je v pochopení mnoha světů zároveň"
          ]
        },
        {
          "text": "Jak se cítíš mezi různými komunitami nebo světy?",
          "options": [
            "Pohybuji se přirozeně mezi různými skupinami a světy",
            "Rozumím mnohým světům ale plně nepatřím do žádného",
            "Jsem mostem — v pohybu mezi světy cítím své poslání",
            "Má síla je v překladu — mezi kulturami, myšlenkovými proudy"
          ]
        },
        {
          "text": "Jaká je tvoje největší výzva?",
          "options": [
            "Udržet jasnou vlastní identitu při vidění mnoha perspektiv",
            "Věřit vlastnímu směru i přes pochopení všech alternativ",
            "Zakořenit se v jednom místě i přes touhu po pohybu mezi světy",
            "Říci jasné ano a ne při vidění hodnoty ve všem"
          ]
        },
        {
          "text": "Jak vnímáš konflikty a polarizaci?",
          "options": [
            "Přirozeně hledám cestu ke smíření a porozumění",
            "Vidím jak obě strany nesou část pravdy",
            "Cítím bolest při oddělení — toužím po propojení",
            "Mediacemi a překlady pomáhám nacházet společnou řeč"
          ]
        },
        {
          "text": "Jaká je tvoje přirozená spirituální praxe?",
          "options": [
            "Propojování různých spirituálních tradic do harmonie",
            "Meditace jako most mezi různými úrovněmi vědomí",
            "Hledání jednoty za zdánlivou růzností tradic",
            "Přechodové rituály — práce s prahy a přechody"
          ]
        },
        {
          "text": "Jak vnímáš svoji galaktickou blízkost k Zemi?",
          "options": [
            "Cítím zvláštní blízkost k Zemi — jako by to byl opravdu domov",
            "Jsem přechodová duše — most mezi hvězdami a Zemí",
            "Moje vesmírná blízkost k Zemi se projevuje v mém zázemí",
            "Snadno se incarnuji a adaptují na pozemský život"
          ]
        },
        {
          "text": "Co tě nejvíce naplňuje?",
          "options": [
            "Momenty kdy propojím zdánlivě nesouvisející světy",
            "Vidět jak se harmonie zrodí tam kde byl dříve konflikt",
            "Porozumění — svému i druhých — skrze různé perspektivy",
            "Být mostem při kterém se lidé nebo světy setkají"
          ]
        },
        {
          "text": "Jaký symbol ti nejvíce rezonuje?",
          "options": [
            "Most — elegantní spojení dvou břehů",
            "Přechod nebo práh — místo kde se světy dotýkají",
            "Duha — krása různosti v přirozené jednotě",
            "Překladač — ten kdo umožňuje porozumění"
          ]
        },
        {
          "text": "Jaký je tvůj vztah k identitě?",
          "options": [
            "Moje identita je pevná i přes proměnlivost rolí a světů",
            "Identita je pro mě výzva — vidím příliš mnoho perspektiv",
            "Jsem tím kdo propojuje — to je moje nejhlubší identita",
            "Identita je most sám o sobě — mezi tím kdo jsem a kým se stávám"
          ]
        },
        {
          "text": "Jak se cítíš ve vztahu k domovu?",
          "options": [
            "Cítím se doma všude — nebo nikde — snadno se adaptují",
            "Domov je pro mě vnitřní stav, ne místo",
            "Hledám komunitu mostů — lidí co rozumějí různým světům",
            "Zem je mým domovem více než hvězdy — blízkost mi sedí"
          ]
        },
        {
          "text": "Jak vnímáš polaritu a extrémy?",
          "options": [
            "Přirozeně hledám střed a rovnováhu bez extrémů",
            "Rozumím extrémům — ale žiji mezi nimi",
            "Extrémní pozice mi způsobují nepohodlí — vždy vidím obě strany",
            "Transformuji polarity do harmonie — to je moje dar"
          ]
        },
        {
          "text": "Jaká je tvoje největší síla?",
          "options": [
            "Schopnost propojit lidi a světy které by se jinak nikdy nepotkaly",
            "Adaptabilita — přirozeně funguji v různých kontextech",
            "Porozumění — vidím co mají různé perspektivy společného",
            "Harmonizace — přináším klid tam kde je napětí a rozdělení"
          ]
        },
        {
          "text": "Co pro tebe znamená domov?",
          "options": [
            "Místo kde se různé světy setkávají v harmonii",
            "Komunita lidí z různých tradic a hledání sdíleného porozumění",
            "Vnitřní rovnováha — doma jsem ve svém středu",
            "Místo přechodu — na hranici světů kde se vše propojuje"
          ]
        },
        {
          "text": "Jaký vzkaz neseš?",
          "options": [
            "Most potřebuje pevné pilíře na obou stranách — i vlastní identitu",
            "Rozdílnost je dar — učme se jí rozumět a propojovat",
            "Harmonie není absence různosti — je to tance různosti",
            "Blízkost je dar — buď most tam kde jsi"
          ]
        },
        {
          "text": "Jaká barva nebo energie ti nejvíce rezonuje?",
          "options": [
            "Duha — krása různosti propojená v přirozené harmonii",
            "Světle modrá — blízkost, jasnost a přirozené propojení",
            "Opalová — plynulá proměna barev jako pohyb mezi světy",
            "Perleťová — jemnost mostu a odlesk světla na vodě"
          ]
        }
      ]
    },
    "Other": {
      "groupName": "Zvláštní hvězdný rod",
      "questions": [
        {
          "text": "Co je tvoje primární duchovní esence?",
          "options": [
            "Láska — jsem vtělením bezpodmínečné lásky a krásy",
            "Tvořivost — přináším umění a vizi jako formu posvátna",
            "Bojovnost pro mír — nesu sílu a odvahu ve službě míru",
            "Stabilita — jsem vnitřním kompasem a klidným bodem",
            "Strážcovství — chráním přechody a portály mezi světy",
            "Láska jako základ vší existence — humanitární service"
          ]
        },
        {
          "text": "Jaký je tvůj vztah k lásce?",
          "options": [
            "Láska je moje přirozené prostředí — bez ní nevzkvétám",
            "Láska se pro mě vyjadřuje přes tvorbu a krásu",
            "Láska je pro mě silou ke spravedlnosti a ochraně",
            "Láska je stabilní základ pod vším ostatním",
            "Láska je posvátná energie brán a průchodů",
            "Láska je moje poslání i způsob existence"
          ]
        },
        {
          "text": "Jaký je tvůj vztah k hudbě a umění?",
          "options": [
            "Hudba je portál a léčení — bez ní nedokážu existovat",
            "Jsem umělec/umělkyně — tvorba je moje duchovní praxe",
            "Hudba je nástroj míru — mění vědomí a osvobozuje",
            "Umění je orientační bod — dává smysl chaos světa",
            "Zvuk a frekvence jsou nástroje strážcovství",
            "Krása je základ — vede vědomí k vyšší lásce"
          ]
        },
        {
          "text": "Jaká je tvoje mise?",
          "options": [
            "Přinášet lásku a krásu jako most mezi světy",
            "Tvořit díla která probouzejí vědomí",
            "Bojovat za mír božskou ženskou silou bez kompromisů",
            "Být stabilním bodem v chaotickém světě",
            "Chránit přechody a brány mezi dimenzemi",
            "Šířit bezpodmínečnou lásku jako základ nové Země"
          ]
        },
        {
          "text": "Jaký je tvůj přirozený dar?",
          "options": [
            "Přenáším lásku a harmonii samotnou přítomností",
            "Vidím vize a prorocké obrazy skrze tvorbu",
            "Bojuji za spravedlnost s elegancí a grácií",
            "Přinášim klidnou jistotu do nejistých situací",
            "Cítím a naviguju energetické přechody a portály",
            "Vidím božské v každé lidské bytosti"
          ]
        },
        {
          "text": "Jak se projevuje tvoje léčení?",
          "options": [
            "Léčím přes lásku, zvuk a harmonizaci energií",
            "Léčím přes umění a kreativní transformaci",
            "Léčím přes aktivaci ženské síly a odvahy",
            "Léčím přes stabilizaci a zemitou přítomnost",
            "Léčím přes práci s portály a průchody energií",
            "Léčím přes předávání bezpodmínečné lásky"
          ]
        },
        {
          "text": "Jaký je tvůj vztah k Božskému ženskému principu?",
          "options": [
            "Je moje přirozená esence — ztělesňuji jeho krásu",
            "Projevuji ho přes tvorbu a prorockou vizi",
            "Bojuji za jeho osvobození a znovunastolení",
            "Je moje kotva a vnitřní kompas",
            "Je posvátnou energií bran a přechodů",
            "Je základ lásky a humanitárního vědomí"
          ]
        },
        {
          "text": "Jaké prostředí tě nejvíce nabíjí?",
          "options": [
            "Krásná místa — zahrada, umění, harmonie, barvy",
            "Tvůrčí prostory — ateliér, scéna, studio",
            "Místa síly kde se přenáší energie ženského probuzení",
            "Příroda — tichá, stabilní, bez lidského ruchu",
            "Místa kde se protínají energie — brány a uzly",
            "Místa plná lidí — k nimž cítím hlubokou lásku"
          ]
        },
        {
          "text": "Jaký je tvůj vztah k starodávné moudrosti?",
          "options": [
            "Přitahuje mě moudrost Hathořina kultu — láska a muzika",
            "Přitahují mě tradice umění jako duchovní cesty",
            "Přitahují mě tradice ženských válečnic a šamanek",
            "Přitahují mě tradice navigátorů a šamanů Severu",
            "Přitahují mě tradice strážců bran a chrámů",
            "Přitahuje mě moudrost bezpodmínečné služby druhým"
          ]
        },
        {
          "text": "Jak vnímáš svoji sílu?",
          "options": [
            "Jemná a harmonizující — jako magnét přitahuje dobro",
            "Kreativní a vizionářská — mění vědomí přes krásu",
            "Odvážná a přímá — ženská síla bez omluvy",
            "Tichá a pevná — jako severní hvězda vždy na místě",
            "Strážná a ochranná — střeží co je posvátné",
            "Láskyplná a inkluzivní — přijímá vše a všechny"
          ]
        },
        {
          "text": "Co cítíš, když je svět v chaosu?",
          "options": [
            "Nutkání harmonizovat — přinést krásu do chaosu",
            "Tvořit — chaos je pro mě muza a inspirace",
            "Nutkání povstat — chaos volá po odvaze a akci",
            "Zakotvenost — chaos mě nepohne z mé středové polohy",
            "Aktivaci — chaos aktivuje moje strážcovské funkce",
            "Soucit — každá ztracená duše volá moji lásku"
          ]
        },
        {
          "text": "Jaká je tvoje největší výzva?",
          "options": [
            "Střežit svoji energii před energetickými upíry",
            "Uvést vize do praxe — most mezi snem a realitou",
            "Kombinovat odvahu s laskavostí bez kompromisu pravdy",
            "Otevřít se změně i přes touhu po stabilitě",
            "Udržet se v těle při práci s vysokými energiemi",
            "Přijmout i temnotu jako součást bezpodmínečné lásky"
          ]
        },
        {
          "text": "Jaký symbol nebo obraz ti nejvíce rezonuje?",
          "options": [
            "Růže nebo lotosový květ — láska a krása v dokonalosti",
            "Nota nebo vlna — tvorba a vibrace jako jazyk duše",
            "Meč v rukou bohyně — síla ve službě pravdy",
            "Polárka — pevný bod v neustálém pohybu",
            "Brána nebo portál — průchod mezi světy",
            "Srdce — otevřené, bezpodmínečné, věčné"
          ]
        },
        {
          "text": "Jak se probouzíš duchovně?",
          "options": [
            "Přes krásu — umění, hudba, příroda mě otevírají",
            "Přes tvoření — v aktu tvorby se setkávám s božstvím",
            "Přes odvahu — momenty kdy jednám navzdory strachu",
            "Přes ticho — v naprostém klidu slyším vnitřní hlas",
            "Přes ochranu — kdy střežím co je svaté, probouzím se",
            "Přes lásku k druhým — v srdci jiné duše vidím Boha"
          ]
        },
        {
          "text": "Jak by tě nejlépe popsal člověk, který tě velmi dobře zná?",
          "options": [
            "Krásný/á, harmonický/á, léčivá přítomnost",
            "Tvořivý/á, vizionářský/á, originální vnímání světa",
            "Odvážný/á, přímý/á, nezlomný/á v tom, co je správné",
            "Spolehlivý/á, zemitý/á, vždy přítomný/á v bouři",
            "Silný/á, ochranný/á, strážce posvátného prostoru",
            "Láskyplný/á, soucitný/á, vidí božské v každém"
          ]
        },
        {
          "text": "Jaký je tvůj vztah k Zemi jako planetě?",
          "options": [
            "Zem je pro mě Gaia — živá milovaná bytost",
            "Zem je scéna kde se odehrává kosmická tvorba",
            "Zem je bitevní pole kde bojuji za světlo a spravedlnost",
            "Zem je domov a kotva — miluji ji pevně a věrně",
            "Zem je spleť portálů a přechodů které střežím",
            "Zem je místo kde projevuji svoji lásku v akci"
          ]
        }
      ]
    }
  }
};

module.exports = { QUESTIONS };
