import { Link } from 'react-router-dom'
import SectionOne from '../../Components/SectionOne'
import '../../Utils/Style/Home.css'
import Footer from '../../Components/Footer'

function Security() {
  return (
    <div className="pageContainer">
      <div className="pageMain">
        {/* <Link to="/">
          <SectionOne src={SectionOne} />
        </Link> */}

        {/* <Link to="/">
          <Gallery src={Gallery} />
        </Link>
      </div>
      <div className="HomeFooter">
        <Footer src={Footer} /> */}
      </div>

      <div className="pageText"> 

<h2>Le consentement des personnes</h2>

      <p>

Le consentement était déjà inscrit dans la loi Informatique et Libertés. Il est renforcé par le RGPD et les conditions de son recueil sont précisées.

Il assure aux personnes concernées un contrôle fort sur leurs données, en leur permettant :

    de comprendre le traitement qui sera fait de leurs données ;
    de choisir sans contrainte d’accepter ou non ce traitement ;
    de changer d’avis librement.

Le recueil du consentement des personnes autorise le traitement de leurs données par les responsables du traitement.

Souvent mis en avant lors de la souscription et l’utilisation de services, notamment en ligne, il doit être recueilli dans des conditions particulières assurant sa validité.
</p><p>
Plus d'information : <a href="https://www.cnil.fr/fr/les-bases-legales/consentement">
      </a></p>

<h2> Sensibilisation à la sécurité des données et des informations personnelles </h2>
<p>
La sécurité informatique protège l'intégrité des technologies de l'information 
comme les systèmes, les réseaux et les données informatiques contre les attaques, 
les dommages ou les accès non autorisés. </p>

<p>
La sécurité continue repose sur un système régulier de feedback et d'adaptation 
qui est généralement géré au moyen de points de contrôle automatisés. 
Grâce à l'automatisation, le feedback est rapide et efficace. 
Il ne ralentit pas le cycle de vie du produit. 
Cette méthode d'intégration de la sécurité du réseau permet de mettre en œuvre 
les mises à jour et les réponses aux incidents rapidement et globalement
 dans un environnement en constante évolution.</p>

<h2> Sécurité de Linux </h2>
<p>
SELinux (Security-Enhanced Linux) est une architecture de sécurité 
pour systèmes Linux® qui permet aux administrateurs de mieux contrôler 
les accès au système d'information. Cette architecture a initialement 
été conçue par la NSA, l'agence de sécurité nationale des États-Unis, 
comme une série de correctifs pour le noyau Linux sur la base 
de la structure LSM (Linux Security Modules).</p>

<h2>Modèle de sécurité Zero Trust </h2>
<p>
Le modèle Zero Trust, ou « zéro confiance », 
est une approche de la conception des architectures 
de sécurité réseau basée sur le principe suivant : 
aucune interaction n'est fiable au départ. 
Cette approche diffère de celle des architectures traditionnelles 
où une communication est réputée fiable dès lors qu'elle est émise 
derrière un pare-feu. Plus précisément, le modèle Zero Trust vise
 à combler les failles des architectures de sécurité qui s'appuient 
 sur des modèles de confiance implicite et une authentification
 à un seul facteur.</p>

 <h2>Sécurité dans le cloud </h2>
<p>
LSi de nombreux utilisateurs comprennent les avantages des services cloud, 
ils se laissent souvent dissuader par les menaces qui le guettent.
 Nous sommes bien conscients qu'il est difficile d'appréhender 
 quelque chose qui existe quelque part entre des ressources immatérielles 
 envoyées sur Internet et un serveur physique. Il s'agit d'un environnement
  dynamique où tout évolue en continu, à l'instar des menaces qui pèsent 
  sur la sécurité.</p>
</div>
<div className="pageFooter">
        <Footer src={Footer} />
      </div>
    </div>
  )
}

export default Security