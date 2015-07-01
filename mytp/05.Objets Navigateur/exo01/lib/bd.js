/**
 * Created by Eric Smith on 30/06/2015.
 */

/**
 * Variable statique de la class bd
 * @type {number}
 */
ficheBd.index = 1;

/**
 * Cosntructeur de la classe bd
 * @param titre
 * @param auteur
 * @param sortie
 * @param resume
 * @param prix
 * @param stock
 */
function ficheBd(titre, auteur, sortie, resume, prix, stock) {
    this.id = ficheBd.index ++;
    this.titre = titre;
    this.auteur = auteur;
    this.sortie = sortie;
    this.resume = resume;
    if(prix === undefined) {
        this.prix = 0.0;
    } else {
        this.prix = prix;
    }
    this.stock = (stock === undefined) ? 0 : stock;

    this.stocker = function(qte) {
        if(qte === undefined) {
            qte = 1;
        }
        this.stock += qte;
    };

    this.destocker = function(qte) {
        if(qte === undefined) {
            qte = 1;
        }
        this.stock -= qte;
    };

    this.toString = function() {
        return "FICHE BD N°"+this.id+" : "+this.titre+" - Auteur:"+this.auteur+" - Prix  :"+this.prix+" - Stock : "+this.stock;
    };
}


function stockBd() {
    this.stock = new Array();
    this.stockByKey = new Array();

    this.referencer = function(bd) {
        if (typeof bd === "object") {
            this.stockByKey[bd.id] = this.stock.length;
            this.stock.push(bd);
        }
    };

    this.ajouter = function(titre, auteur, sortie, resume, prix, stock) {
        var uneBd = new ficheBd(titre, auteur, sortie, resume, prix, stock);
        this.referencer(uneBd);
    };

    this.stocker = function(id, qte) {
        if(this.stockByKey[id] !== undefined) {
            var bd = this.stock[this.stockByKey[id]];
            bd.stocker(qte);
        }
    };

    this.destocker = function(id, qte) {
        if(this.stockByKey[id] !== undefined) {
            var bd = this.stock[this.stockByKey[id]];
            bd.destocker(qte);
        }
    };

    this.toString = function() {
        var ret = '<div id="stock"><table><tr><th>id</th><th>titre</th><th>auteur</th><th>prix</th><th>stock</th><th>sortie</th></tr>';
        for(var i = 0; i<this.stock.length; i++) {
            var bd = this.stock[i];
            ret += "<tr>";
            ret += "<td>"+ bd.id + "</td>";
            ret += "<td>"+ bd.titre + "</td>";
            ret += "<td>"+ bd.auteur + "</td>";
            ret += "<td>"+ bd.prix + "</td>";
            ret += "<td>"+ bd.stock+ "</td>";
            ret += "<td>"+ bd.sortie + "</td>";
            ret += "</tr>";
        }
        ret += "</table></div>";
        return ret;
    }

}

