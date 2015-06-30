/**
 * Created by Eric Smith on 30/06/2015.
 */

projet = [];
projet["nom"]    = "BDPhilia";
projet["auteur"] = "Eric Smith";
projet["copy"]   = "&copy; 2009 CGG";

function affichePageBandeauHaut() {
    document.write("<div id=\"bandeau\">&nbsp;</div>");
}

function affichePageTitre(pageSelectionnee) {
    var titrePage;
    for (var i = 0; i < pagesDisponibles.length; i++) {
        if(pagesDisponibles[i][1] == pageSelectionnee) {
            titrePage = pagesDisponibles[i][2];
            break;
        }
    }
    document.write("<div id=\"titre\"><h1>"+titrePage+"</h1></div>");
}

function affichePagePied() {
    document.write("<div id=\"pied\"><span>"+projet["copy"]+" - Réalisé par "+projet["auteur"]+"</span></div>");
}