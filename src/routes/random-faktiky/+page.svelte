<div class="p-4">
  <pre>
    term-by-document matrix = NxM, sloupce jsou vektory dokumentu, radky jsou vektory termu, ridka
    
    GH-tree = binarni strom rozdelujici databazi pomoci pivotu, rekurzivni
    GNAT = n-ární strom rozdělující databázi pomocí dělení nadrovin, rekurzivní procházení a filtrovaní, vychází z GH-tree
    D-index = hashovaci funkce rozdeluje itemy databaze do 3 trid, 0, 1, 2, 2 => item zustava v aktualni tride, 0 => item se posouva do vissí tridy, 1 => item se presouva do nizsi tridy, bez pouziti 2 nam vzika hamminguv kod, diky kteremu vime jak moc je nase databaze indexovatelna
    M-index = vyuziva rekurzivni deleni nadrovin, hashovani a rozdelovani do bucketu jako D-index, vyvazeny, inspirovany R-stromem, vyuziva koule
    R-tree = vyvazeny, vyuziva obdelniky, nemetricky (porusuje trojuhelnikovou nerovnost)
    D-file = neni nutnost indexace, vse se deje za runtime, bez predpocitani
    AESA = tabulka vsech dvojic databaze a jejich podobnostni skore
    LAESA = tabulka vsech pivotu databaze a jejich podobnosti skore
    SIFT & SURF = detektory a deskriptory obrazu a obrazovych medii, dokazi analyzovat dulezite body obrazku, SIFT pracuje se 128 dimenzemi, SURF je rychlejsi ovsem pracuje pouze s 64 dimenzemi, coz snizuje presnost dulezitych bodu obrazku, vyuzivaji se v Machine learing a vyhledavani podle obrazku
    
    DOKUMENT = fulltext soubor
    TERM = slovo nebo veta dokumentu
    VOCAB = slovnik, mnozina termu
    COLLECTION = mnozina dokumentu
    
    HUB = stranka s mnoha outlinky
    AUTORITA = stranka s mnoha inlinky
    
    OWL = jazyk pro psani semantickeho webu a ontologie a spojeni mezi nimi
    ontologie = popisuje vlastnosti a vztahy mezi semantikou webu nad nejakou abstrakci (na nejake tema)
    
    TV-modifikator = striktne konvexni, vyssi chyba T-error
    TG-modifikator = striktne konkavni, nizsi chyba T-error
    
    PR-curve = krivka pro pomer precision a recall
    
    false alarm, hit = dokument databaze ktery se nemel dostat do vysledku dotazu ale dostal
    false drop = dokument ktery mel byt vysledkem dotazu ale nebyl
    
    skyline = skyline operator slouzi k vyhledani itemu databaze ktere nejsou horsi nez jine, typicky hotel na plazi u more v Chorvatsku s lehatkem, tyto pozadavky by splnovalo velmi malo hotelu, skyline pouzije i ty co to nesplnuji ale nejsou horsi nez by mohli byt
    top-k = vyuziva treshold a faginuv algoritmus, slouzi k vraceni top k vysledku z databaze
    kNN = podobne jako top-k vraci top k dotazu z databaze, narozdil od top-k nepotrebujeme znat data, kNN se uci za behu, vyuziva datove struktury jako je priority queue a pole kandidatu sousedu
    fagin algorithm = paralelne pristupuje k listum dat dokud ve vsech listech nevidel vsechny itemy, v tu chvili zastavi a spocita top-k
    treshold algorithm = iterativne strida poradi k itemu dokud jejich skore rozdilnosti mezi sebou je co nejmensi, pote top-k
    vnitrni dimenze = urcuje jak moc mame skvela data pro indexaci
    inverted index u booleovskeho modelu = term-by-document matice je velmi ridka, toho se vyuzije a matice se reprezentuje pouze jako pole listu, vyuziva sorteneni dokumentu
    </pre>
</div>
