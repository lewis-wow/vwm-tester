<p>term-by-document matrix = NxM, sloupce jsou vektory dokumentu, radky jsou vektory termu, ridka</p>
<p />
<p>document = obsahuje full text</p>
<p>collection = mnozina dokumentu</p>
<p>term = slovo nebo fraze v dokumentu</p>
<p>vocabulary = mnozina termu (unikatnich), ktere jsou v kolekci</p>
<p />
<p>
  inverted index v booleaovskem modelu = term vektory jsou prevedeny do serazenych listu kde ma kazdej id dokumentu ve
  kterem se vyskytuje
</p>
<p />
<p>precision = ve vysledku je skutecne relevantni objekt</p>
<p>recall = objekt relevantni k dotazu je ve vysledku</p>
<p />
<p>false alarm = objekt z db, ktery nemel byt ve vysledku ale byl</p>
<p>false drop = object z db, ktery mel byt ve vysledku ale nebyl chudak</p>
<p />
<p>false alarm ++ => prection --</p>
<p>false drop ++ => recall --</p>
<p />
<p>PR-curve = krivka pro zavislost precision a recall</p>
<p />
<p>efektivita = jak moc je user spokojen s vysledkem</p>
<p />
<p>laesa - tabulka vzdalenosti mezi pivoty, pivot oznacuje lokalni oblast n*k</p>
<p>aesa - tabulka vzdalenosti mezi vsemi dvojicemi databaze (vsichni jsou pivoti) n^2</p>
<p />
<p>vnitrni dimenze = jak dobre je distribuce dat rozlozena</p>
<p>Ball-overlap factor (tady jde o koule) = udava pocet dvojic s prunikem ku poctu vsech dvojic</p>
<p />
<p>TG-modifikátor = nemetrika -> metrika</p>
<p />
<p>GH-tree - binarni, 2 pivoty rozdeli databazi, pak se rekurzivne zanori a znovu</p>
<p>GNAT - GH-tree ale n-nární strom</p>
<p>r-tree - balancovany strom, dynamicke pivoty, nemetricky</p>
<p>m-tree - jako r-tree, hierarchicke hnizdeni regionu, vyuziva koule misto kvadru ktere ma r-strom,</p>
<p>v listech jsou shluky datovych objektu a ve vnitrnich uzlech jsou smerovaci zaznamy,</p>
<p>pri rozsahovem dotazu se prochazi jen ty vetve, jejichz regiony (koule) protinaji region dotazu.</p>
<p>pm-tree - jako m-tree, ma i globalni pivoty, zmensuje regiony vyhledavani</p>
<p>d-index - params(pivot, median a splitting), hashovani pro rozdelovani prvku do bucketů</p>
<p>
  m-index - vseho-devka, pivot tabulky, hashovani, vyuziva koule v prostoru, ulozeno vice informaci pro rychlejsi
  filtrovani
</p>
<p>d-file - Index free = lze rovnou zacit dotazovat bez predzpracovani.</p>
<p />
