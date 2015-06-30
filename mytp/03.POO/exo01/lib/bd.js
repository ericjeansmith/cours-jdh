/**
 * Created by Eric Smith on 30/06/2015.
 */

/**
 * Variable statique de la class bd
 * @type {number}
 */
bd.index = 0;

/**
 * Cosntructeur de la classe bd
 * @param titre
 * @param auteur
 * @param sortie
 * @param resume
 * @param prix
 * @param stock
 */
function bd(titre, auteur, sortie, resume, prix, stock) {
    this.id = bd.index ++;
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
    this.stocker = stocker;
    this.destocker = stocker;
    this.toString = toString;
}

/**
 * incrémente le stock de qte si fourni, de 1 sinon
 * @param qte
 */
function stocker(qte) {
    if(qte === undefined) {
        qte = 1;
    }
    this.stock -= qte;
}

/**
 * décrémente le stock de qte si fourni, de 1 sinon
 * @param qte
 */
function destocker(qte) {
    if(qte === undefined) {
        qte = 1;
    }
    this.stock += qte;
}

/**
 * affiche une répésentation textuelle de l'objet
 */
function toString() {
    return "FICHE BD N°"+this.id+" : "+this.titre+" - Auteur:"+this.auteur+" - Prix  :"+this.prix+" - Stock : "+this.stock;
}
