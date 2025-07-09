'use client';

import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import Link from 'next/link';
import { ChevronLeft, GraduationCap, Calendar, CheckCircle, Eye, EyeOff, BookOpen, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface DSCGQuestion {
  id: number;
  year: string;
  title: string;
  context: string;
  questions: string[];
  corrections: string[];
}

const dscgQuestions: DSCGQuestion[] = [
  {
    id: 1,
    year: "2022",
    title: "ÉQUIPEMENT DE NOUVEAUX SYSTÈMES D'INFORMATION",
    context: "Questions sur les modes de distribution SaaS et On Premise, ainsi que les solutions 'tout en un'.",
    questions: [
      "1. Définir les deux modes de distribution (SaaS et On Premise) et proposer des arguments permettant de choisir un type de distribution pour chaque application.",
      "2. Citer un avantage et un inconvénient distinct d'une solution 'tout en un'."
    ],
    corrections: [
      "**1. Définir les deux modes de distribution (SaaS et On Premise) et proposer des arguments permettant de choisir un type de distribution pour chaque application.**",
      "• **On-Premise :** Traduction de 'sur site', les infrastructures informatiques et logicielles sont appelées 'on-premise' lorsque celles-ci sont hébergées et maintenues par le propre service informatique de l'entreprise. Elles sont acquises sous forme d'un investissement en licence auprès de l'éditeur de la solution.",
      "• **SaaS :** Définition de 'Software as a Service' ou en français : 'logiciel en tant que service', est une solution logicielle applicative hébergée dans le cloud et exploitée en dehors de l'organisation ou de l'entreprise par un tiers, aussi appelé fournisseur de service. La solution SaaS est accessible à la demande via une connexion Internet et s'utilise depuis un navigateur web. L'utilisation de la solution est généralement facturée sous forme d'un abonnement mensuel selon le nombre d'utilisateurs ou au service consommé.",
      "• **CRM :** Ils sont en général proposés en distribution SaaS sur le marché. Ils permettent la souplesse de s'adapter au nombre d'utilisateurs et aux fonctionnalités recherchées souhaitées par les organisations. Le CRM doit aussi être facilement accessible (par mobile, depuis un accès web public…), l'hébergement dans le Cloud est alors un avantage.",
      "• **ERP :** La plupart sont proposés en On premise pour les grandes organisations, mais certains éditeurs proposent des ERP spécifiques en SaaS. On retiendra que l'ERP est au cœur de la production et de la gestion financière des entreprises et l'héberger au sein de son SI est une maîtrise supplémentaire pour la sécurité.",
      "• **GED :** Elles sont en général proposées en On Premise sur le marché pour des arguments de sécurités d'accès et de maîtrise du stockage de documents qui peut être plus économique quand il est internalisé dans l'entreprise.",
      "",
      "**2. Citer un avantage et un inconvénient distinct d'une solution 'tout en un'.**",
      "• **Assurer la relation avec un prestataire unique :** La solution tout en un est éditée ou distribuée par un unique fournisseur, cela simplifie la relation client-fournisseur et administrative. Mais la dépendance de 3 solutions envers un fournisseur unique augmente le risque en cas de défaut de ce prestataire.",
      "• **Interopérabilité des applications au sein du Système d'Information :** La solution tout-en-un sera nativement 'interconnectée' pour disposer de référentiels uniques et communs. C'est un gain en valeur pour l'organisation et évite de faire des interfaces entre les 3 applications pour transférer des données ou faciliter la navigation de l'utilisateur.",
      "• **Avantage au niveau des coûts et de la simplification du Système d'information :** l'architecture applicative d'une solution tout-en-un diminue les coûts d'exploitation et simplifie l'administration en ayant tout sur une même plateforme.",
      "• **Inconvénient de ne pas pouvoir choisir 'la meilleure' solution de chaque domaine d'application :** Une solution CRM + ERP + GED n'est sans doute pas la meilleure pour l'organisation que si elles étaient choisies individuellement.",
      "• **Devoir choisir la solution tout en un en SaaS ou en On Premise :** car des solutions mixtes amèneraient de la complexité en termes d'architecture. Il faut donc choisir un mode de distribution qui n'est peut-être pas adapté à chaque application."
    ]
  },
  {
    id: 2,
    year: "2020",
    title: "MIGRATION VERS UN ERP - FORMATION ET ACCOMPAGNEMENT",
    context: "Questions sur les avancées d'un nouveau système d'information ERP et la structuration de séminaires de formation.",
    questions: [
      "16. Quelles sont les avancées majeures proposées par le nouveau système d'information ? (1 point)",
      "17. Comment structurer votre propos et vos séances pour faire passer vos messages dans chacun des deux séminaires (end-user et key-user) ? (2 points)",
      "18. Quelle conclusion pourriez-vous proposer lors de ce double séminaire afin de montrer le bien-fondé de cette migration vers un ERP ? (1 point)"
    ],
    corrections: [
      "**16. Quelles sont les avancées majeures proposées par le nouveau système d'information ?**",
      "Les réponses doivent être orientées sur les bénéfices de l'intégration autour de l'homogénéité et de la standardisation des données et des processus et autour de l'unicité de la base de données.",
      "• L'importance d'un paramétrage, d'un déploiement, d'une formation et de saisies de données bien effectués avant, pendant et après l'implémentation de l'ERP.",
      "• Les gains en termes de rapidité d'accès à une information de gestion bien homogène et bien actualisée donc des gains en termes de réactivité (time to market) et de capacité de réponse aux clients (devis, audit, reporting, dossier partagé, etc.).",
      "",
      "**17. Comment structurer votre propos et vos séances pour faire passer vos messages dans chacun des deux séminaires (end-user et key-user) ?**",
      "• **Structure du plan :**",
      "  - 1/ Tronçon commun (1H) centré sur l'intégration du système d'information.",
      "  - 2.1/ Spécialisation qui sera centrée sur le travail opérationnel des EU (2H).",
      "  - 2.2/ Spécialisation qui sera centrée sur le travail de contrôle et de paramétrage des KU (2H).",
      "  - 3. Conclusion (1H) sur le bien fondé de cette évolution majeure du système d'information.",
      "• **Tronçon commun :** explication de la logique de la migration, passage d'un système non intégré à un système intégré (ERP) plus réactif et plus vulnérable grâce à sa base de données unique et son interopérabilité.",
      "• **Séminaire End-User (EU) :** centré sur les bonnes pratiques de saisie des données (conformité, standardisation, exactitude, homogénéité, ponctualité) et de sécurité du poste de travail (mot de passe, confidentialité). Insister sur la transversalité du système sans aborder la complexité technique.",
      "• **Séminaire Key-User (KU) :** s'adresse aux utilisateurs formés au paramétrage et à la maintenance du sous-système fonctionnel. Ils doivent prendre conscience de la transversalité du nouveau système et de leur responsabilité sur l'ensemble de leur périmètre fonctionnel (conformité, sincérité des données, plan de continuité d'activité).",
      "",
      "**18. Quelle conclusion pourriez-vous proposer lors de ce double séminaire afin de montrer le bien-fondé de cette migration vers un ERP ?**",
      "• Souligner que l'architecture modulaire des ERP permet d'être à la fois plus réactifs grâce à la centralisation des données dans l'unique DB et à l'interopérabilité des modules, mais aussi plus vulnérables face à une attaque ou des anomalies.",
      "• La responsabilité des end-users est forte pour la conformité des données saisies et le respect des processus. Elle est encore plus forte pour les key-users qui ont la responsabilité du paramétrage et du fonctionnement de l'ensemble de leur sous-système fonctionnel."
    ]
  },
  {
    id: 3,
    year: "2019",
    title: "ALIGNEMENT STRATÉGIQUE DU SI - ERP, CRM ET SAAS",
    context: "Questions sur les outils ERP et CRM, leur alignement stratégique, et l'analyse du mode SaaS.",
    questions: [
      "2. Après avoir rappelé ce que sont des outils de type ERP et CRM, vous montrerez en quoi le déploiement d'un outil CRM associé à un NPS vous semble adapté aux objectifs stratégiques.",
      "3. Après avoir expliqué ce qu'est le mode SaaS, sur lequel est basé la solution Planning & Tracking développée par Aleth, vous en expliquerez simplement les forces et faiblesses."
    ],
    corrections: [
      "**2. Après avoir rappelé ce que sont des outils de type ERP et CRM, vous montrerez en quoi le déploiement d'un outil CRM associé à un NPS vous semble adapté aux objectifs stratégiques.**",
      "• **Rappels et définition sur les outils ERP et CRM :** Il s'agit généralement de progiciels.",
      "  - L'**ERP (Enterprise Resource Planning)** ou PGI (Progiciel de Gestion Intégré) est un outil intégré permettant de traiter les principales fonctions de l'entreprise en temps réel et en simultané grâce à de nombreux modules fonctionnels interconnectés autour d'une vaste et unique base de données qui devient le pivot de l'architecture du système.",
      "  - Le **CRM (Consumer Relationship Management)** ou GRC (Gestion de Relation Client) est un progiciel qui aborde la gestion de la relation client de façon intégrée et qui est opérée en utilisant les données et ressources collectées autour d'un client ou groupe de client ciblé. Il permet de développer des activités relatives à la vente en ligne, à la communication, à la personnalisation et fidélisation de la relation, au support client, etc..",
      "• **Pertinence du choix CRM/NPS adapté aux objectifs de SOLIDOR :** Le couplage de l'outil CRM et de l'outil statistique NPS permettra à SOLIDOR de moderniser sa stratégie marketing et fidélisation autour de son cœur de cible. Ce couplage devrait favoriser le développement des démarches de fidélisation en insistant sur le conseil, la personnification des relations et l'évaluation de la satisfaction des clients. Ces outils sont en parfaite conformité avec l'objectif d'augmentation des volumes de vente.",
      "",
      "**3. Après avoir expliqué ce qu'est le mode SaaS, sur lequel est basé la solution Planning & Tracking développée par Aleth, vous en expliquerez simplement les forces et faiblesses.**",
      "• **Description du mode Software as a Service (SaaS) :** C'est un mode de distribution en cloud computing où une solution logicielle est fournie en tant que service. L'éditeur fournit l'accès à la solution sous forme d'application web et l'utilisateur final n'en supporte pas ou peu l'installation sur son propre système. Le service est délivré et maintenu par l'éditeur.",
      "• **Forces (avantages) de la solution en SaaS pour SOLIDOR :**",
      "  - Flexibilité (capacité de répondre rapidement aux besoins de l'entreprise).",
      "  - Mises à jour en temps réel – à la charge de l'éditeur.",
      "  - Absence de frais d'investissement (ils se transforment en frais d'exploitation).",
      "  - Paiement à l'utilisation (pay per use) et non pas à la licence (pay per licence).",
      "  - Facilité d'usage, sécurité assurée par le prestataire, lisibilité des tarifs.",
      "• **Faiblesses (inconvénients) de la solution en SaaS pour SOLIDOR :**",
      "  - Dépendance prestataire forte.",
      "  - Vulnérabilité des données (garantie en cas de pannes, dégradation des performances, faillite du prestataire ; protection des données, localisation, accès).",
      "  - Dépendance technologique (problèmes éventuels liés à la réversibilité – récupération des données et applications – et à la compatibilité – interfaçage des applications).",
      "  - Perte des compétences informatiques et informationnelles en interne.",
      "  - Complexité de la contractualisation/tarification, coût de réversibilité élevé."
    ]
  },
  {
    id: 4,
    year: "2018",
    title: "REMPLACEMENT DU PGI - GESTION DE PROJET",
    context: "Questions complètes sur la gestion d'un projet de remplacement de PGI : organes, conditions de réussite, critères de choix et difficultés.",
    questions: [
      "1. Quels sont les organes à mettre en place pour la gestion de ce projet ? Préciser leur composition et leur rôle respectif.",
      "2. Quelles sont les principales conditions de réussite du projet ? (Quatre conditions sont attendues.)",
      "3. Lors du choix d'un PGI, quels sont les points auxquels l'entreprise doit être attentive ? Citer et expliciter quatre points clés.",
      "4. Quelles sont les principales difficultés rencontrées lors de la mise en place d'un PGI ? (Quatre difficultés sont attendues.)"
    ],
    corrections: [
      "**1. Quels sont les organes à mettre en place pour la gestion de ce projet ? Préciser leur composition et leur rôle respectif.**",
      "• **Le comité de pilotage :**",
      "  - **Composition :** Présidé par un directeur de projet, composé de représentants opérationnels (responsables métiers et utilisateurs-clés) concernés par le PGI, du responsable informatique, d'experts internes ou externes (intégrateur).",
      "  - **Rôle :** Lancement du projet (objectifs, finalités, critères de qualité, arbitrage des moyens), définition des choix stratégiques d'architecture et des orientations en matière de sécurité et de droits d'accès, accompagnement de la maîtrise d'ouvrage dans la conduite du changement (plans de communication et formation), management du projet (suivi des échéances, risques, contrôle qualité).",
      "• **Le comité des utilisateurs :**",
      "  - **Composition :** Constitué de tous les utilisateurs représentatifs des domaines d'activité concernés par le projet (achats, commercial, fabrication, comptabilité, contrôle de gestion).",
      "  - **Rôle :** Expression détaillée des besoins et des règles de gestion, validation des solutions/maquettes, participation aux tests du PGI, participation aux actions de formation, réception définitive du progiciel, accompagnement du déploiement.",
      "• **Le chef de projet :**",
      "  - **Rôle :** Assure le pilotage du projet, préside les réunions, coordonne les acteurs, rend compte à la direction de l'avancement, est l'interlocuteur de la maîtrise d'ouvrage, supervise la réalisation des tests et le recettage, valide les supports (documentation, formation). Doit avoir l'autorité nécessaire (ici, le DAF est suggéré en raison des implications organisationnelles).",
      "",
      "**2. Quelles sont les principales conditions de réussite du projet ? (Quatre conditions sont attendues.)**",
      "• Les objectifs doivent être clairement définis.",
      "• Les équipes projets doivent être organisées avec soin et contrôles appropriés.",
      "• Ne pas négliger la dimension humaine (animation et motivation des équipes).",
      "• Prendre en compte la gestion du changement (intégrer les acteurs, communication appropriée).",
      "• Maîtriser les délais et les coûts (analyse des risques).",
      "",
      "**3. Lors du choix d'un PGI, quels sont les points auxquels l'entreprise doit être attentive ? Citer et expliciter quatre points clés.**",
      "• **PGI multilingue, multidevises et multi-référentiel comptable :** pour permettre l'intégration de filiales internationales et l'uniformisation des SI.",
      "• **Coût global du PGI (ou coût total de possession TCO) :** incluant les sommes dues à l'éditeur (licences, maintenance, mises à jour), coûts d'installation (équipe projet, intégrateur, formation), coûts d'adaptation matérielle, et coûts cachés (baisse de productivité).",
      "• **Adaptabilité du PGI (possibilités de paramétrage) :** la souplesse du PGI détermine son degré d'adaptation au contexte de l'entreprise ; un PGI trop rigide impose d'adapter l'entreprise à lui-même.",
      "• **Complexité du PGI :** le paramétrage peut être source de difficultés, augmentant durée et coût du projet.",
      "• **Expérience et pérennité de l'éditeur :** la relation s'inscrit dans la durée, son expérience garantit la pertinence des choix et sa capacité à durer pour éviter un changement de PGI. L'existence de nombreux utilisateurs permet des échanges et une capitalisation de l'expérience collective.",
      "• **Conditions de mise en œuvre :** modes d'accès (client lourd, léger, cloud), ressources nécessaires, aspects juridiques.",
      "",
      "**4. Quelles sont les principales difficultés rencontrées lors de la mise en place d'un PGI ? (Quatre difficultés sont attendues.)**",
      "• **Nécessité d'adapter certains processus aux contraintes du progiciel :** l'entreprise doit parfois modifier son organisation pour s'adapter au PGI standard, arbitrant entre impact organisationnel et complexité des paramétrages.",
      "• **Le projet impacte l'organisation dans son ensemble :** cela implique des risques, surtout si la gestion du changement est mal appréhendée.",
      "• **Coûts induits très importants, et souvent sous-estimés :** en temps de travail du personnel, baisse d'efficacité des services liée à la désorganisation.",
      "• **Dépendance vis-à-vis d'un éditeur :** rendant les retours en arrière ou changements de PGI difficiles.",
      "• **Dépendance par rapport aux intégrateurs et aux consultants :** créant des asymétries d'information, des risques sur les choix et les coûts, et des tensions possibles.",
      "• **Complexité du paramétrage :** peut entraîner un dépassement des délais et des coûts ou des difficultés d'utilisation."
    ]
  },
  {
    id: 5,
    year: "2016",
    title: "PROJET DE MODERNISATION DU SI - CAS SOVANI",
    context: "Cas complet de modernisation d'un ERP avec analyse des solutions, étapes de mise en œuvre, facteurs de réussite et alternatives cloud.",
    questions: [
      "1. Présenter le faisceau d'éléments conduisant la société SOVANI à modifier l'ERP ARTGEST actuellement en place.",
      "2. Identifier et apporter des commentaires sur les principales étapes à adopter dans cette perspective de mise en œuvre du projet ERP.",
      "3. Proposer un récapitulatif des avantages et inconvénients des trois solutions proposées en annexe. Justifier votre choix de la solution qui vous semble le mieux convenir à SOVANI.",
      "4. Présenter sous forme de tableau, 3 facteurs de réussite d'une telle conduite de projet en intégrant par exemple les référentiels et autres bonnes pratiques.",
      "5. Dans le contexte du projet de modernisation de l'ERP de SOVANI, proposer des éléments de comparaison entre les 3 alternatives cloud existantes."
    ],
    corrections: [
      "**1. Présenter le faisceau d'éléments conduisant la société SOVANI à modifier l'ERP ARTGEST actuellement en place.**",
      "• **Liquidation judiciaire de la société ARTING :** éditeur de l'ERP ARTGEST, la maintenance et les mises à jour ne pourront plus être réalisées.",
      "• **Difficultés avec les factures fournisseurs dématérialisées :** 70% sont traitées, mais les 30% restants génèrent des erreurs.",
      "• **Dysfonctionnements du projet GED :** mis en place en 2015, il occasionne des retards et impacte la performance.",
      "• **Faible interopérabilité de l'ERP ARTGEST :** avec le logiciel de production DATAPRODINT.",
      "• **Insatisfaction globale de la situation applicative :** sauf pour DATAPRODINT et CONCEPTPROD qui sont mal interfacés.",
      "",
      "**2. Identifier et apporter des commentaires sur les principales étapes à adopter dans cette perspective de mise en œuvre du projet ERP.**",
      "• **Diagnostic d'un projet :** Déclenché par la liquidation d'ARTING, validé par un comité de sélection.",
      "• **Choix d'un chef de projet :** Ressource interne ou maître d'ouvrage.",
      "• **Consultation des RH :** Présentation des enjeux, communication du déroulement, prise en considération des échanges.",
      "• **Constitution d'une équipe projet :** Pluridisciplinaire, choix de spécialistes métiers, embauche ou appel à une ESN, comité de pilotage.",
      "• **Choix d'une méthode de conduite de projet :** Méthodes d'amélioration des processus comme CMMI, CobiT, ITIL.",
      "• **Description détaillée du projet :** Caractéristiques, contexte, périmètre, délais, nature, budget, avantages, objectifs, risques.",
      "• **Étude de faisabilité des solutions :** Technique, ordonnancement, concordance des délais, disponibilité des ressources, budget, adéquation projet/solutions.",
      "• **Sélection de la solution optimale :** Par le comité de pilotage, mise en concordance solution/objectifs, tests, comparaisons des solutions (y compris coûts), choix des partenaires, identification des risques.",
      "• **Finalisation de l'étude technique du projet :** Caractéristiques techniques détaillées, identification des étapes, ordonnancement, budget complet.",
      "• **Lancement du projet :** Démarrage, communication aux RH.",
      "• **Réalisation du projet :** Déploiement, plan de formation.",
      "• **Suivi de l'avancement du projet :** Surveillance de l'ordonnancement, tests intermédiaires (concordance projet/objectifs/coûts).",
      "• **Concordance projet et réalisation :** Mesurer et vérifier les étapes, détection des écarts, réajustements.",
      "• **Finalisation du projet :** Prise en main, conduite du changement.",
      "• **Suivi post projet :** Vérification des attentes et impacts, réactions et modifications éventuelles.",
      "",
      "**3. Proposer un récapitulatif des avantages et inconvénients des trois solutions proposées en annexe. Justifier votre choix de la solution qui vous semble le mieux convenir à SOVANI.**",
      "• **Solution 1 (DATAPROD) :**",
      "  - **Avantages :** Interfaçage positif avec GESTPROD et CONCEPTPROD, maintenance applicative et mises à jour en infogérance, licence à l'utilisateur, GED possible et intégrative, logiciel d'audit assisté par ordinateur, petite ESN flexible et réactive, coûts bas.",
      "  - **Inconvénients :** ESN nouvelle sans expérience, pas de possibilité actuelle d'intégration du site Web, pas de SaaS, système de sauvegarde non pris en compte (maintient la situation actuelle).",
      "• **Solution 2 (DATAMM) :**",
      "  - **Avantages :** Solution en SaaS, sauvegardes possibles en cloud gérées par l'éditeur, expériences avec clients ayant un site web, GED possible et intégrative, logiciel d'audit assisté par ordinateur, éditeur avec notoriété et expérience, habitué aux grands comptes et plans multi-devises, licence sur site (multi-utilisateurs), qualité des prestations reconnues.",
      "  - **Inconvénients :** Délais longs.",
      "• **Solution 3 (DATAGC) :**",
      "  - **Avantages :** SaaS, expériences dans des clients ayant un site Web, GED, logiciel d'audit assisté par ordinateur, possibilité d'un système de sauvegarde en cloud.",
      "  - **Inconvénients :** Coûts plus élevés, délais longs avant réalisation.",
      "• **Choix :** La solution numéro 1 (DATAPROD) est à retenir, car elle est la plus en adéquation avec le contexte de SOVANI.",
      "",
      "**4. Présenter sous forme de tableau, 3 facteurs de réussite d'une telle conduite de projet en intégrant par exemple les référentiels et autres bonnes pratiques.**",
      "• **Participation des RH :** Indispensable pour l'adhésion du personnel 'métiers' et SI de SOVANI.",
      "• **Formation des RH :** Pour acquérir les compétences adéquates avec le nouveau projet (ERP, GED, EDI, intégration globale du SI) afin de limiter les résistances et profiter des retombées.",
      "• **Maîtrise du budget :** Pour ne pas impacter d'éventuels autres projets ou la performance globale de l'entreprise.",
      "• **Prévoir un tableau de bord :** Avec indicateurs clés (temps, coûts, heures de formation, gains de temps, qualité post-projet).",
      "• **Implication de la DG :** Permettra une réelle imprégnation du projet dans toute la société.",
      "• **Identification des risques projet :** Diagnostic des risques inhérents au projet ERP, aux projets cloud (dépassements de budgets, écarts entre prévu et réalisé).",
      "• **Mesure de la conformité :** Appréciation de la correspondance entre le projet défini et la livraison effective.",
      "• **Exploitation d'outils de gestion de projet :** Méthodes d'ordonnancement (PERT, GANTT), méthodes pour cadrer la mise en œuvre (CobiT, ITIL, CMMI).",
      "• **Choix du ou des maîtres d'œuvre, prestataires :** Crucial pour la qualité des interventions et la collaboration des ESN.",
      "",
      "**5. Dans le contexte du projet de modernisation de l'ERP de SOVANI, proposer des éléments de comparaison entre les 3 alternatives cloud existantes.**",
      "• **Cloud privé :**",
      "  - **Définition :** Accès sur serveur distant via internet pour stocker en externe données et/ou applications, mis à disposition d'une seule entreprise. Peut être situé chez SOVANI ou l'ESN.",
      "  - **Avantages :** Garantie d'étanchéité, sécurité des traitements et des données, consommation du SI via SaaS.",
      "  - **Coûts :** Plus élevés.",
      "• **Cloud public :**",
      "  - **Définition :** Matériel et services à distance fournis par un prestataire pour plusieurs entreprises. Permet un accès aux mêmes ressources et services applicatifs.",
      "  - **Avantages :** Coût moindre.",
      "• **Cloud hybride :**",
      "  - **Définition :** Concilie le meilleur du cloud privé et du cloud public. Met à disposition des ressources sur une partie publique et restreint l'accès pour des ressources plus sensibles.",
      "  - **Coûts :** Intermédiaire entre un cloud public et un cloud privé."
    ]
  }
];

export default function QuestionsDSCG() {
  const [showCorrection, setShowCorrection] = useState<{ [key: number]: boolean }>({});

  const toggleCorrection = (questionId: number) => {
    setShowCorrection(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <BackToPlanButton />
        
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <GraduationCap className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Questions DSCG</h1>
              <p className="text-gray-600">Annales officielles avec corrections détaillées</p>
            </div>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <h3 className="font-semibold text-blue-900 mb-2">📚 Contenu exhaustif</h3>
            <p className="text-blue-800 mb-3">
              Cette section reprend TOUTES les questions du DSCG ayant un lien direct avec le contenu du chapitre 14 sur les PGI/ERP, 
              classées par année avec leurs corrections complètes et détaillées.
            </p>
            <ul className="text-blue-800 space-y-1">
              <li>• Questions officielles des sessions 2016 à 2022</li>
              <li>• Corrections détaillées et structurées</li>
              <li>• Cas pratiques d&apos;entreprises réelles</li>
              <li>• Méthodologies et bonnes pratiques</li>
            </ul>
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-6">
          {dscgQuestions.map((question, index) => (
            <motion.div
              key={question.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              {/* Question Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Session {question.year}</h2>
                    <p className="text-blue-100">{question.title}</p>
                  </div>
                </div>
                <p className="text-blue-100">{question.context}</p>
              </div>

              {/* Questions */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  Questions posées
                </h3>
                <div className="space-y-3 mb-6">
                  {question.questions.map((q, qIndex) => (
                    <div key={qIndex} className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-800">{q}</p>
                    </div>
                  ))}
                </div>

                {/* Toggle Correction Button */}
                <button
                  onClick={() => toggleCorrection(question.id)}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors mb-4"
                >
                  {showCorrection[question.id] ? (
                    <>
                      <EyeOff className="h-4 w-4" />
                      Masquer la correction
                    </>
                  ) : (
                    <>
                      <Eye className="h-4 w-4" />
                      Afficher la correction
                    </>
                  )}
                </button>

                {/* Correction */}
                <AnimatePresence>
                  {showCorrection[question.id] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg"
                    >
                      <h3 className="font-semibold text-green-900 mb-4 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5" />
                        Correction détaillée
                      </h3>
                      <div className="space-y-2">
                        {question.corrections.map((correction, cIndex) => (
                          <div key={cIndex}>
                            {correction === '' ? (
                              <div className="h-4"></div>
                            ) : correction.startsWith('**') && correction.endsWith('**') ? (
                              <h4 className="font-semibold text-green-800 mt-4 mb-2">
                                {correction.replace(/\*\*/g, '')}
                              </h4>
                            ) : correction.startsWith('• **') ? (
                              <div className="ml-4">
                                <h5 className="font-medium text-green-800 mb-1">
                                  {correction.replace(/• \*\*/g, '').replace(/\*\*/g, '').split(':')[0]}:
                                </h5>
                                {correction.includes(':') && (
                                  <p className="text-green-700 ml-4">
                                    {correction.split(':').slice(1).join(':').trim()}
                                  </p>
                                )}
                              </div>
                            ) : correction.startsWith('  - **') ? (
                              <div className="ml-8">
                                <h6 className="font-medium text-green-800">
                                  {correction.replace(/  - \*\*/g, '').replace(/\*\*/g, '').split(':')[0]}:
                                </h6>
                                {correction.includes(':') && (
                                  <p className="text-green-700 ml-4">
                                    {correction.split(':').slice(1).join(':').trim()}
                                  </p>
                                )}
                              </div>
                            ) : correction.startsWith('  - ') ? (
                              <p className="text-green-700 ml-8">{correction.replace(/  - /g, '')}</p>
                            ) : correction.startsWith('• ') ? (
                              <p className="text-green-700 ml-4">{correction.replace(/• /g, '')}</p>
                            ) : (
                              <p className="text-green-700">{correction}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 mt-8 border-t">
          <Link 
            href="/cas-pratiques" 
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Cas pratiques
          </Link>
          
          <Link 
            href="/" 
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <Award className="h-4 w-4" />
            Retour au plan
          </Link>
        </div>
      </div>
    </div>
  );
}