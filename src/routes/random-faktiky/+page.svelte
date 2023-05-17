<pre>
term-by-document matrix = NxM, sloupce jsou vektory dokumentu, radky jsou vektory termu, ridka

document = obsahuje full text
collection = mnozina dokumentu
term = slovo nebo fraze v dokumentu
vocabulary = mnozina termu (unikatnich), ktere jsou v kolekci

inverted index v booleaovskem modelu = term vektory jsou prevedeny do serazenych listu kde ma kazdej id dokumentu ve kterem se vyskytuje

precision = ve vysledku je skutecne relevantni objekt
recall = objekt relevantni k dotazu je ve vysledku

false alarm = objekt z db, ktery nemel byt ve vysledku ale byl
false drop = object z db, ktery mel byt ve vysledku ale nebyl chudak

false alarm ++ => prection --
false drop ++ => recall --

PR-curve = krivka pro zavislost precision a recall

efektivita = jak moc je user spokojen s vysledkem

laesa - tabulka vzdalenosti mezi pivoty, pivot oznacuje lokalni oblast n*k
aesa - tabulka vzdalenosti mezi vsemi dvojicemi databaze (vsichni jsou pivoti) n^2

vnitrni dimenze = jak dobre je distribuce dat rozlozena
Ball-overlap factor (tady jde o koule) = udava pocet dvojic s prunikem ku poctu vsech dvojic

TG-modifikátor = nemetrika -> metrika

GH-tree - binarni, 2 pivoty rozdeli databazi, pak se rekurzivne zanori a znovu
GNAT - GH-tree ale n-nární strom
r-tree - balancovany strom, dynamicke pivoty, nemetricky
m-tree - jako r-tree, hierarchicke hnizdeni regionu, vyuziva koule misto kvadru ktere ma r-strom, 
         v listech jsou shluky datovych objektu a ve vnitrnich uzlech jsou smerovaci zaznamy,
         pri rozsahovem dotazu se prochazi jen ty vetve, jejichz regiony (koule) protinaji region dotazu.
pm-tree - jako m-tree, ma i globalni pivoty, zmensuje regiony vyhledavani
d-index - params(pivot, median a splitting), hashovani pro rozdelovani prvku do bucketů
m-index - vseho-devka, pivot tabulky, hashovani, vyuziva koule v prostoru, ulozeno vice informaci pro rychlejsi filtrovani
d-file - Index free = lze rovnou zacit dotazovat bez predzpracovani.
</pre>
