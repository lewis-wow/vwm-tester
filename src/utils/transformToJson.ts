const transform = (data: string) => {
  const splited = data.split('\n');
  // make chunks from splited array, each chunk is divided by empty string ""

  const chunks = [];
  let chunk = [];
  for (let i = 0; i < splited.length; i++) {
    if (splited[i] === '') {
      chunks.push(chunk);
      chunk = [];
    } else {
      chunk.push(splited[i]);
    }
  }

  // each chunk has correct answer end with "//", find it and mark is as correct: true in the result
  const result = [];
  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    const question = chunk[0];
    const answers = chunk.slice(1);
    result.push({
      question,
      answers: answers.map((answer) => ({
        answer: answer.replace('//', ''),
        correct: answer.includes('//') ? true : false,
      })),
    });
  }

  console.log(JSON.stringify(result));
  return result;
};

const res = transform(`Co poskytují Stock servery:
časové řady vývoje akcií
zpoplatněná anotovaná multimédia //
sdílení videí ze sociálních sítí
volně stáhnutelná alba obrázků

V kontextu vyhledávání v multimediálních databázích termínem Benchmarking označujeme:
platformu vyhodnocování kvality vyhledávacího systému vzhledem k nějaké anotované „golden-standard“ kolekci //
uživatelská anketa zaměřená na hodnocení kvality webového vyhledávače
měření P-R křivky na nějakém systému
výkonnostní (rychlostní) srovnání dvou vyhledávačů

Přesnost (precision) a úplnost (recall) vyhledávání se reálně chovají tak, že:
přesnost lze spočítat z úplnosti
když roste přesnost, roste i úplnost
chování přesností a úplnosti nelze odhadovat
když roste přesnost, klesá úplnost, a naopak //

Podobnostní vyhledávání (vyhledávání podle podobnosti; similarity search) je:
technika klasifikace objektů do tříd pomocí podobnostní matice
vyhledávací model založený na ad-hoc shlukování podobných objektů a jejich následném filtrování
geometrická interpretace vyhledávacích problémů ve vektorovém prostoru
vyhledávací model založený na univerzu deskriptorů multimediálních objektů a funkcí ohodnocující podobnost libovolných dvou deskriptorů z univerza //

Funkce podobnosti je:
algoritmus, který nalezne pro dotazový deskriptor podobné deskriptory z databáze
funkce ohodnocující danou databázi stupněm podobnosti všech uložených deskriptorů
libovolná funkce vracející pro dva deskriptory z univerze podobnostní skóre //
metrická vzdálenost sloužící jako podobnost

Nemetrické vzdálenosti, narozdíl od metrických:
dovolují modelovat robustnější podobnosti //
fungují dobře pouze ve vysokorozměrných prostorech
jsou indexovatelnější
vyžadují od doménových expertů větší matematické znalosti

Dynamic time warping distance (DTW) se používá pro měření podobnosti na:
vektorech
řetězcích
časových řadách //
množinách

Dynamit time warping distance (DTW) je výhodná, protože:
není metrická, narozdíl od Lp vzdáleností
představuje robustní zarovnání díky lokálnímu natahování/zkracování (time warp) //
umožňuje lokální zarovnání, tj. zarovnání pouze podposloupností (subsequence)
je výpočet levnější než Lp vzdálenost

Earth mover's distance (EMD) je vhodná pro modelování podobnosti na histogramech, když:
histogramy reprezentují obraz omezený na barevný prostor RGB
nestačí pouhá korelace dimenzí (sloupců), ale řeší se „nejmenší přesun 'masy' mezi histogramy“ //
modelujeme biochemickou podobnost vzorků
nevíme jaké korelace vyplnit do matice kvadratické formy (QFD)

SIFT je:
detektor a deskriptor lokálních vlastností v obrázcích //
metoda rozpoznávání obrázku založená na Fourierově transformaci (FT)
technika segmentace obrazu na homogenní textury
algoritmus pro extrakci globálních vlastností z obrázku

Matice pro výpočet QFD (quadratic form distance) pro histogramy barev obsahuje:
vzdálenosti průměru všech barev vyskytujících se v obrázcích
korelace mezi reprezentanty barev vyskytujícími se v obrázcích //
vzdálenosti k několika pevně daným centroidům barev
korelace mezi všemi barvami vyskytujícími se v obrázcích

Termín „query-by-humming“ při vyhledávání např. hudební skladby znamená:
že jako dotaz je použito audio zapískané/zazpívané uživatelem //
totéž co „query-by-example“
že dotazem je zkomprimovaný audio soubor
že jako dotaz je použit audio soubor nějaké skladby

M-strom je:
inspirován R-stromem, využívá hiearchické hnízdění metrických regionů a není vyvážený
inspirován PM-stromem, využívá hiearchické hnízdění metrických regionů a je vyvážený
inspirován PM-stromem, využívá hiearchické hnízdění metrických regionů a není vyvážený
inspirován R-stromem, využívá hiearchické hnízdění metrických regionů a je vyvážený //

T-chyba (T-error) vyžaduje:
proporce trojic v datové sadě splňujících trojúhelníkovou nerovnost
proporce dvojic v datové sadě splňujících trojúhelníkovou nerovnost
proporce trojic v datové sadě porušujících trojúhelníkovou nerovnost //
proporce dvojic v datové sadě porušujících trojúhelníkovou nerovnost

Metrické přístupové metody (metric access methods) jsou:
datové struktury a algoritmy umožňující rychlé vyhledávání v metrickém modelu podobnostního vyhledávání //
stromové indexy odvozené od B-stromu
prostorové indexy využívající vektorové podobnosti
algoritmy pro podobnostní hashování

Globální pivoti jsou:
tvořeny za účelem vytváření indexu
dynamické objekty (příslušné různým částem indexu)
statické objekty (platné po celý život indexu) //
dynamické objekty, ale v průbehu jednoho dotazu fixovány jako statické

Úplnost vyhledávání (retrieval recall) označuje:
pravděpodobnost, že objekt ve výsledku dotazu je relevantní
pravděpodobnost, že objekt relevantní k dotazu je v jeho výsledku //
počet iterací při vyhledávání pomocí uživatelské zpětné vazby
stupeň 1 na stupnici 1-5 uživatelské spokojenosti s výsledkem dotazu

Co je virtuální/implicitní graf v kontextu brouzdání (browsing) v multimédiích?
nejkratší cesta v grafu, kde uzly jsou multimédia a hrany podobnosti mezi nimi
série dotazů v multimediálním prostoru tvořící cestu virtuálním grafem //
graf vytížení uzlů sítě hostující multimediální obsah, tvořené peer-to-peer architekturou
hiearchie multimediálních kategorií, modelovaná explicitně

Boolský model vyhledávání je založen na:
uspořádání dokumentů podle podobnosti k dotazu
binárních vektorech a Hammingově vzdálenosti
bitových řetězcích a operacích AND, OR a XOR
reprezentaci obsahu dokumentů množinou termů a na dotazování boolovskými výrazy a termy //

Co je explicitní graf v kontextu brouzdání (browsing) v multimédiích?
hiearchie multimediálních kategorií, modelovaná explicitně //
graf tvořený uzly a hranami
graf sociálních komunit sdílející podobný multimediální obsah
série ad-hoc dotazů. tvořící řetěz

Výpočet Earth mover's distance (EMD) má časovou složitost:
O(2^n) //
O(n^2)
O(n.log(n))

Vektorový model vyhledávání je založen na:
binárních vektorech a Hammingově vzdálenosti
teorii fuzzy množin
vektorovém paralelismu jednotek GPU (v grafických kartách)
reprezentaci obsahu dokumentů a dotazů vektory, a vektorové míře sloužící jako podobnost //

Editační vzdálenost (edit distance) slouží k měření podobností:
vektorů, kde měří nejmenší tzv. „vektorový edit“
řetězů, kde spočítá nejmenší počet operací nutných ke konverzi jednoho řetězce do druhého //
množin, kde spočítá nejmenší počet množinových operací nutných k transformaci jedné množiny do druhé
téhož co DTW (je to pouze jiný název pro DTW)

Pro vektorový model dotazování neplatí, že:
obsahuje logické spojky //
obsahuje váhy jednotlivých termů dotazu
uživatel může zadat váhy všech termů v dotazu shodně
výsledek je založen na frekvenci výskytu termů v dokumentu a dotazu

Vážení podle tf-idf schématu:
je populární technika konstrukce vah termů ve vektorovém modelu //
je implementace Boolského modelu založená na prohledávání komprimovaného indexu
je kompresní metoda obrazu, založená na tzv. vážení regionů
technika konstrukce vah termů ve vektorovém modelu vhodná pouze pro malé dimenze

Noty u podobnostního skóre monofóní melodie (monophonie melody) jsou modelovány:
svojí výškou
v 2D prostoru pomocí výšky a pozice v čase
v 2D prostoru pomocí výšky a pozice v čase a navíc používá váhy //
pozicí v notovém zápisu

Podobnostní přístup pro symbolicky reprezentované polyfonní melodie je aplikovatelný na:
pouze MIDI soubory //
pouze WAV soubory
libovolný ze zde uvedených audio souborů
pouze MP3 soubory

Standard MPEG7 popisuje:
definice deskriptorů a nástroje k jejich extrakci
definice deskriptorů bez popisu algoritmů jejich extrakce //
definice deskriptorů a definice podobností nad nimi
definice deskriptorů a algoritmy pro jejich získání

TV-modifikátor (TV-modifier) je:
striktně konkávní SP modifikátor, což zajišťuje vyšší hodnotu T-chyby (T-error)
striktně konvexní SP modifikátor, což zajišťuje vyšší hodnotu T-chyby (T-error) //
striktně konkávní SP modifikátor, což zajišťuje nízkou hodnotu T-chyby (T-error)
striktně konvexní SP modifikátor, což zajišťuje nízkou hodnotu T-chyby (T-error)

TG-modifikátor (TG-modifier) je:
striktně konkávní SP modifikátor, což zajišťuje vyšší hodnotu T-chyby (T-error)
striktně konvexní SP modifikátor, což zajišťuje vyšší hodnotu T-chyby (T-error)
striktně konkávní SP modifikátor, což zajišťuje nízkou hodnotu T-chyby (T-error) //
striktně konvexní SP modifikátor, což zajišťuje nízkou hodnotu T-chyby (T-error)

Longest common subsequence (LCS) je výhodná, protože:
je výpočet levnější než Lp vzdálenosti
představuje robustní zarovnání díky lokálnímu natahování/zkracování (time warp)
umožňuje lokální zarovnání, tj. zarovnání pouze podposloupností (subsequence) //
je to opravdu podobnost, nikoliv vzdálenost

Termín Retrieval Efficiancy znamená:
efektivita vyhledávače ve smyslu rychlosti vyhledávání //
efektivita vyhledávače ve smyslu úrovně prezentace výsledků
efektivita vyhledávače ve smyslu kvality ovládání GUI
efektivita vyhledávače ve smyslu kvality výsledku vyhledávání

Vysoká vnitřní dimenze (intrinsic dimensionality) značí že:
data netvoří shluky (clustery) a tedy jsou špatně strukturovaná //
data tvoří shluky a tedy jsou dobře indexovatelná
data netvoří shluky a tedy jsou dobře indexovatelná
datová sada je dobře strukturovaná, protože vnitřní dimenze odpovídá vnější

Lower-bounding je:
odvození výpočetně levné metriky z výpočetně drahé nemetriky
mapování z metrického do vektorového prostoru
obecný mechanismus pro efektivní podobnostní vyhledávání //
metoda redukce dimenze vektorového prostoru

Podobnost zachovávající modifikátor (similarity preserving modifier) je:
rostoucí funkce f pro kterou f(0) = 0 //
klesající funkce f pro kterou f(0) < 0
rostoucí funkce f pro kterou f(0) < 0
klesající funkce f pro kterou f(0) = 0

Dotaz (query) je:
Navigace ve struktuře databáze (webu)
Explicitní formulace jednorázového záměru vyhledávání //
SQL příkaz obsahující predikát LIKE
Postupná filtrace relevantních dokumentů a proudu dokumentů

Webová stránka je:
Vizualizace obsahu staženého z webu
Dokument v jazyce HTML //
Dokument v jazyce XML
Libovolný datový proud předcházený protokolem HTTP

Termín Retrieval efficiency znamená:
Míru úspornosti reprezentace dotazu
Míru výkonu, měřící rychlost odezvy dotazu //
Míru kvality, měřící uživatelskou spokojenost s výsledkem dotazu
Míru rychlosti, s jakou uživatel formuluje dotaz

Co je metavyhledávač:
Vyhledávač, který pouze agreguje výsledky z jiných vyhledávačů //
Vyhledávač integrovaný pouze do e-commerce aplikací
Multimediální vyhledávač, který indexuje pouze klíčová slova, ne samotný multimediální obsah
Vyhledávač, který indexuje pouze nadpisy webových stránek

Čím se odlišuje Web 2.0 od původního konceptu webu:
Primární podporou HTML 5
Orientací na uživatelem generovaný obsah a sociální sítě //
Technickou podporou sémantického webu
Nativní podporou multimediálního obsahu

Nevýhody Booleovského modelu jsou:
Složitost modelu a neefektivní implementace
Neuspořádanost výsledku dotazu //
Nemožnost použití invertovaného indexu
Reprezentace dokumentu indexem

Výhody Booleovského modelu jsou:
Schopnost předem omezit velikost výsledku dotazu
Uspořádání výsledku dotazu
Jednoduchost a efektivní implementace //
Reprezentace dotazu dokumentem

Výhody Boolského modelu jsou:
jednoduchost, rozšiřitelnost a efektivní implementace //
velmi efektivní model, přesnost a úplnost se blíží 100
uspořádání výsledku, dotaz příkladem, snadný relevance feedback
lze snadno kontrolovat velikost výsledku dotazu

Term je:
Ukončovací znak dokumentu (CR LF)
Oddělovač tokenů
Stop slovo
Slovo (případně fráze), vyskytující se v dokumentu //

Mezi nevýhody LSI nepatří:
drahé zpracování matice
hustá matice
těžká vyjádřitelnost konceptů
redukce dimenze //

Zrychlení v LSI modelu lze zajistit:
invertovaným indexem a využitím pouze několika důležitých konceptů
využitím pouze důležitých konceptů //
invertovaným indexem
invertovaným idnexem nebo využitím pouze několika důležitých konceptů

Vektorový model je založen na:
fuzzy logice a teorii fuzzy monzin
Boolské logice a teorii kategorií
Boolské algebře a teorii množin
geometrizaci vyhledávacího problému //

Soubor sitemap:
je ve formátu XML
definuje strukturu dokumentu a může být v XML formátu //
definuje strukturu dokumentu a je v XML formátu
definuje strukturu dokumentu a může být v libovolném formátu

Struktura webu a instrukce pro procházení lze crawlerům popsat pomocí souborů:
sitemap robots.txt a htaccess //
sitemap a robots.txt
robots.txt a htaccess
sitemap a htaccess

Soubor robots.txt:
definuje stránky, které mají a které nemají být indexovány //
definuje celou strukturu web site
definuje stránky, které mají být při indexování zvýhodněny
je vázaný na web server Apache

Výpočet PageRank vektoru pomocí přímích metod (direct methods):
je výpočetně velmi náročný, protože potřebuje explicitně ukládat matice mezivýsledků //
je výpočetně velmi náročný, protože nelze paralelizovat
je výpožetně nejméně náročný, protože nepořebuje explicitně ukládat matice mezivýsledků
je výpočetně nějméně náročný, protože lze velmi dobře paralelizovat

Paramentr \alfa v Google matici vyjadřuje:
Pravděpodobnost skoku na stránku, na kterou vedou odkazy ze stávající stránky (= Damping factor) //
Pravděpodobnost ukončení prohledávání, když uživatel —- ?na stránku nemající žádné outlinky?
Pravděpodobnost, že uživatel —- ?na stránku nemající žádné outlinky?
Pravděpodobnost skoku na stránku, na kterou nevedou odkazy ze stávající stránky

Hub je:
stránka s málo inlinky
stránka s málo outlinky
stránka s mnoha inlinky
stránka s mnoha outlinky //

V kontextu sémantického webu slouží XML:
jako prezentační vrstva
jako protokol komunikace mezi nesémantickým vyhledáváním a webovými službami
jako univerzálně strojově čitelný jazyk pro popis —– a metadat //
jako prostředek migrace webových zrodjů z jednoho schématu do druhého

SPARQL je:
dotazovací jazyk nad XML
dotazovací jazyk nad RDF //
dotazovací jazyk SQL rozšířený o klauzule vyhledávání na sémantickém webu
abstraktní model pro konceptuální modelování —–

Podobnostní operátor narozdíl od dotazu:
je často parametrizovaný a vrací velikou odpověď
není často parametrizovaný a vrací velkou odpověď //
je často parametrizovaný a vrací malou odpověď
není často parametrizovaný a vrací malou odpověď

Který z následujících pojmů je nesmysl:
Faginův operátor //
skyline operátor
top-k operátor
podobnostní spojení

kNN dotaz (range query):
je vhodný pro dotazování nad objekty u kterých uživatel zná sémantiku extrahovaných vektorů a sémantiku podobnostní funkce
je vhodný pro dotazování nad objekty u kterých uživatel nezná sémantiku extrahovaných vektorů
je vhodný pro dotazování nad objekty u kterých uživatel zná sémantiku extrahovaných vektorů
je vhodný pro dotazování nad objekty u kterách uživatel nezná sémantiku extrahovaných vektorů a sémantiku podobnostní funkce //

AESA je:
binární strom využívající dělení prostoru (zobecněnými) nadrovinami
n-ární strom využívající dělení prostoru (zobecněnými) nadrovinami
tabulka vzdáleností mezi všemi objekty databáze a vybranými pivoty
tabulka vzdáleností mezi všemi dvojicemi objektů v databázi //

Mezi axiomy metriky (metric postulates) nepatří:
symetrie (symmetry)
reflexivita (reflexivity)
asociativita (associativity) //
trojůhelníková nerovnost (triangle inequality)

M-strom je:
inspirován PM-stromem, využívá hiearchické hnízdění metrických regionů a není vyvážený
inspirován R-stromem, využívá hiearchické hnízdění metrických regionů a je vyvážený //
inspirován R-stromem, využívá hiearchické hnízdění metrických regionů a není vyvážený
inspirován PM-stromem, využívá hiearchické hnízdění metrických regionů a je vyvážený

Mezi metrické přístupové metody (metric access methods) nepatří:
M-strom
D-index
LAESA
R-strom //

Nevýhoda měření výkonu metrického indexu reálným časem je:
závislost na platformě, optimalizaci, operačním systému a hardware //
nemá nevýhody
nelze použít va paralelním prostředí
nemožnost objetivně porovnat s jiným indexem

PAC jsou:
pravděpodobně podobnostní dotazy
permanentně aproximativní dotazy
pravděpodobně přibližně korektní dotazy //
nic takového neexistuje

Metoda FastMap:
nepoužívá kosinovu a Pythagorovu větu
je rychlá metoda používající náhodné projekce do vektorového prostoru
je metoda mapování obecných metrických dat do euklidovského prostoru //
je omezena pouze na mapování dat v euklidovském prostoru

Aproximativní vyhledávání je výhodné, když:
neznáme přesnou sémantiku vzdálenostní funkce
chceme výrazně rychlejší vyhledávání i za cenu velkého snížení přesnosti vyhledávání
známe přesnou sémantiku vzdálenostní funkce
chceme výrazně rychlejší vyhledávání za cenu malého snížení přesnosti vyhledávání //

Korelovaná data u skyline operátoru způsobí:
chybu
malý skyline //
velký skyline
už nevim

Vektorový model typicky využívá:
euklidovskou vzdálenost
kosinovou podobnost //
váženou euklidovskou vzdálenost
váženou kosinovou vzdálenost

Uživatelská zpětná vazba (user relevance feedback) ve vyhledávačích znamená:
odeslání webového formuláře s popisem chyby
manuální vybírání relevantních objektů z databáze
označení korektnosti odpovědi uživatelem //
vyhledávání několika dotazy najednou

Termínem False dismissal (false drop) označujeme:
objekt, který se měl dostat do výsledku, ale není vůbec v databázi
duplicita objektu ve výsledku dotazu
objekt ve výsledku dotazu, který se tam neměl dostat
objekt v databázi, který se měl dostat do výsledku dotazu, ale nedostal //

Invertovaný index:
má řidší matici než index neinvertovaný
umožňuje určit zda dokument má být ve výsledku bez nutnosti projít celou matici //
neobsahuje v matici všechny dokumenty
je uplatnitelný pouze ve vektorovém modelu vyhledávání

Výpočet Lp (Minkovského) vzdálenosti má časovou složitost:
O(pn^2)
O(n^2)
O(n) //
O(nlogn)

Mezi typické vhodné vlastnosti pro popis obrázku nepatří:
invariance vůči zvětšení/zmenšení (scale)
invariance vůči posunu (translation)
invariance vůči kvantizaci (quantization) //
invariance vůči rotaci (rotation)

Extrakce vlastností (feature extraction) je:
model a procedura tvorby zjednodušené reprezentace multimediálního objektu, použíté pro vyhledávání //
výběr několika vlastností multimédia za účelem jeho komprese
výběr pouze takových vlastností mutimédia, které uživatel označí zpětnou vazbou (relevance feedback)
většinou diskrétní Fourierova transformace (DFT)

PM-tree obohacuje M-tree o:
globální pivoty, čímž zvětšuje regiony a tedy zlepšuje filtrování
globální pivoty, čímž zmenšuje regiony a tedy zlepšuje filtrování //
lokální pivoty, čímž zmenšuje regiony a tedy zlepšuje filtrování
lokální pivoty, čímž zvětšuje regiony a tedy zlepšuje filtrování

Vnitřní dimenze (intrinsic dimensionality) je:
typ fraktální dimenze na metrickém prostoru
průměrný poloměr shluků identifikovaných v databázi
odhad dimenze vektorového Lp prostoru, do kterého bychom namapovali databázi
statistický ukazatel odvozený z distribuce vzdáleností v databázi, sloužící jako indikátor indexovatelnosti databáze pod danou metrikou //

Základní jednotkou nákladů v rámci metrického indexování je:
přůstup na disk
realtime
počet výpočtů vzdálenostní metriky //
přístup do paměti

Mezi nevýhody Boolského modelu dotazování nepatří:
omezená vyjadřovací schopnost
setřídění výstupu
efektivita vyhodnocení řídkých dotazů //
regulace počtu vrázených dokumentů

Server pro ukládání a sdílení multimédií (hosting server):
podporuje vyhledávání multimédií na základě obsahu nebo textového popisu //
vyhledává pouze webové stránky, na kterých jsou videa a obrázky
vždy obsahuje jak uložení (hostování) multimédií, tak vyhledávací funkce
podporuje vyhledávání multimédií pouze na základě textového popisu

Invertovaný index je u boolevského modelu dotazování obzvláště efektivní pro:
sady obsahující málo dokumentů
dotazy obsahující mnoho termů
dotazy s málo termy //
dotazy neobsahující negaci

Dotaz na k nejbližších sousedů (k nearest neighbors query, kNN):
vybere předem neurčený počet objektů do vzdálenosti k
vybere k nejpodobnějších objektů k objektu dotazu //
se vyhodnocuje top-k operátorem
je omezen na euklidovský vektorový prostor

Content-based retrieval označuje:
vyhledávání struktury v obsahu multimédia
získávání dat filtrací webu
vyhledávání přímo podle obsahu multimédia //
vyhledávání podle textového popisu multimédia

Explorace databáze znamená:
Procházení obsahu databáze bez specifikace dotazu //
Procházení databáze v prohlížeči Internet Explorer
Něco s indexováním

Dangling nodes je:

Stránka bez inlinků
Stránka s 1 inlinkem
Stránka bez outlinků //
Stránka s 1 outlinkem

LSI u vektorového modelu částečně řeší problém s:
homonymy
antonymy
homonymy a synonymy //
synonymy

V rozšířeném Booleovském modelu se využívá:
kosinová vzdálenost
euklidovská vzdálenost
vážená euklidovská vzdálenost //
vážená kosinová vzdálenost

O co doplňuje Rozšířený Booleovský model základní Booleovský model?
O vážení a možnost seřazení dokumentů na výstupu //

RDF je založeno na:
dvojicích
trojicích //
čtveřicích
pěticích

Co je potřeba udělat s dokumenty ve formátu PDF a MS Office z hlediska SEO?
Nechat je v původních formátech (nedělat nic)
PDF exportovat do bitmapy a MS Office do formátu 97-2003
Optimalizovat je jako webové stránky //
Nic

Filtering je:
Navigace ve struktuře databáze (webu)
Explicitní formulace jednorázového záměru vyhledávání
SQL příkaz obsahující predikát LIKE
Formulace déle trvajícího záměru vyhledávání //

Google matice je (byly tam nějaké 3 termíny, které si nepamatuji):
Stochastická, irreducibilní, aperiodická //
Stochastická
Irreducibilní, aperiodická
Stochastická, irreducibilní

Algoritmus výpočtu PageRank je:
Iterativní //
Aktualizační


Google Analytics je:
Nástroj pro sledování přístupů na webové stránky //
Něco s vyhledáváním

False alarm je:
Dokument, který se měl dostat do výsledku dotazu, ale nedostal se
Dokument, který se objevil ve výsledku dotazu, ale neměl se objevit //

Na co sa vyuziva PageRank:
Na analýzu popularity stránky, pomocí množství odkazů vedoucí na ni a vedoucí z ní //

Z čeho vychází Google matice?
z matice sousednosti stránek //

Základní konstrukce jazyka SPARQL:
SELECT, CONSTRUCT //
SELECT, JOIN, UNSUBSCRIBE
MAKE, SUBSCRIBE

Základní prvky vyhledávání:
crawling, indexing, searching //
crawling, checking
searching
indexing, crawling

Časová složitost metrix-free je:
O(n) //
O(n^2)
O(2^n)
O(n^3)

Co je to GNAT?
n-ární strom využívající dělení prostoru (zobecněnými) nadrovinami //

Co vyjadřuje P-R křivka?
závislost přesnosti (precision) a úplnosti (recall) u Booleovského modelu (11 standardních úrovních recallu) //

Lp (Minkovského) vzdálenosti:
je třída vektorových vzdáleností, které uvažují nezávislé dimenze. //
jsou obecně použitelné metriky.
je třída vektorých vzdáleností, které uvažují vzájemně korelované dimenze.
je třída řetězcových vzdáleností, sloužících ke globálnímu zarovnání sekvencí

Metrický model podobnostního vyhledávání je:
obecný model indexování čehokoliv na internetu, co lze vyhledat podle podobnosti
založen na univerzu (množině) deskriptorů a metrické vzdálenosti sloužící jako podobnost deskriptorů //
množina metrických vzdáleností pro podobnostní vyhledávání multimédií
speciální případ vektorového podobnostního modelu

Zájmový bod (interest point) je:
bod/region v obraze, který je dobře definovaný, nese informaci o svém okolí a je stabilní //
bodové hodnocení obrázku uživatelem
každý pixel na hraně segmentu (v segmentovaném obraze)
bod/region v obraze, který je zajímavý pro uživatele

MPEG7 audio definuje:
pouze nízkoúrovňové (low-level) diskriptory
nízko, středně (mid-level) a vysokoúrovňové deskriptory
pouze vysokoúrovňové (high-level) deskriptory
nízko i vysoko úrovňové deskriptory //

Keyframe je:
základní prvek pro konstrukci video deskriptoru //
nejreprezentativnější obrázek z video klipu, sumarizující jeho obsah
reprezentativní obrázek z kolekce obrázků
obraz reprezentující střed shluku obrázků

Výpočet kvadratické formy (quadratic form distance, QDF) má časovou složitost:
O(n^2) //
O(n*logn)
O(n)
O(n^3)

Hausdorff distance je:
obecná množinová vzdálenost, kde pro podobnost elementů množin se využívá tzv. ground distance //
vzdálenost měřící (normovanou) velikost průniku dvou množin
obecná vektorová vzdálenost, kde pro podobnost soužadnic vektorů se používá jednoduchá norma |.|2
vzdálenost bodů ve vektorovém prostoru podle tzv. Hausdorffovy neriemannovské geometrie

Výpočet Hausdorff distance má časovou složitost:
O(n*logn)
O(n^2) //
O(n^2)*O(d), kde O(d) je složitost ground distance
O(n)
`);
