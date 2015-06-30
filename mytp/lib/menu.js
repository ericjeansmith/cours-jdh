/**
 * Created by Eric Smith on 30/06/2015.
 */

pagesDisponibles = [
        ["Accueil","index.htm","Bienvenue sur "+projet["nom"]],
        ["Recherche","recherche.htm","Votre recherche de BD"],
        ["Commande","commande.htm","Votre panier"]
    ];

function affichePageMenu(pageSelectionnee) {

    var menuItems = "<div id=\"menu\">";
    menuItems += "<ul>";
    for(var i = 0; i<pagesDisponibles.length; i++) {
        var item = "<li";
        if(pageSelectionnee == pagesDisponibles[i][1]) {
            item += " class=\"select\"";
        }
        item += "><a href=\""+pagesDisponibles[i][1]+"\" title=\""+pagesDisponibles[i][0]+"\">"+pagesDisponibles[i][0]+"</a></li>";
        console.log(item);
        menuItems += item;
    }
    menuItems += "</ul>";
    menuItems += "</div>";
    document.write(menuItems);
}