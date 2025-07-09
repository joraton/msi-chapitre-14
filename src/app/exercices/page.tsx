'use client';

import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import Link from 'next/link';
import { ChevronLeft, BookOpen, CheckCircle, Eye, EyeOff, Users, Building, Cloud, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Exercise {
  id: number;
  title: string;
  context: string;
  questions: string[];
  correction?: string[];
  type: 'theory' | 'case-study' | 'analysis';
  difficulty: 'facile' | 'moyen' | 'difficile';
  icon: string;
}

const exercises: Exercise[] = [
  {
    id: 1,
    title: "L'INTÉGRATION",
    context: "L'intégration est un concept clé des systèmes d'information modernes. Elle permet de faire communiquer différentes applications et de centraliser les données.",
    questions: [
      "Définissez les trois types d'intégration dans les systèmes d'information.",
      "Expliquez les avantages et inconvénients de chaque type d'intégration.",
      "Donnez des exemples concrets pour chaque type d'intégration."
    ],
    correction: [
      "**1. Les trois types d'intégration :**",
      "• **Intégration des données** : Centralisation et unification des données dans un référentiel unique",
      "• **Intégration des processus** : Coordination et automatisation des processus métier entre applications",
      "• **Intégration des applications** : Interconnexion technique des applications via des interfaces (API, ESB)",
      "",
      "**2. Avantages et inconvénients :**",
      "• **Intégration des données** :",
      "  - Avantages : Cohérence, unicité, reporting global",
      "  - Inconvénients : Complexité de migration, risque de perte de données",
      "• **Intégration des processus** :",
      "  - Avantages : Automatisation, efficacité, traçabilité",
      "  - Inconvénients : Rigidité, dépendance entre processus",
      "• **Intégration des applications** :",
      "  - Avantages : Flexibilité, réutilisation, évolutivité",
      "  - Inconvénients : Complexité technique, maintenance",
      "",
      "**3. Exemples concrets :**",
      "• **Données** : Base de données clients unique pour CRM et facturation",
      "• **Processus** : Workflow automatisé commande → production → livraison",
      "• **Applications** : Interface entre ERP et site e-commerce"
    ],
    type: 'theory',
    difficulty: 'moyen',
    icon: 'Building'
  },
  {
    id: 2,
    title: "Architecture en étoile vs Architecture en silos",
    context: "Les entreprises doivent choisir entre différentes architectures pour organiser leurs systèmes d'information. L'architecture influence directement l'efficacité et la maintenance du SI.",
    questions: [
      "Comparez l'architecture en silos et l'architecture en étoile.",
      "Quels sont les avantages et inconvénients de chaque approche ?",
      "Dans quels contextes recommanderiez-vous chaque architecture ?"
    ],
    correction: [
      "**1. Comparaison des architectures :**",
      "• **Architecture en silos** :",
      "  - Applications indépendantes et isolées",
      "  - Chaque application gère ses propres données",
      "  - Communication limitée entre applications",
      "• **Architecture en étoile** :",
      "  - Applications connectées via un hub central (ERP)",
      "  - Données centralisées dans le système central",
      "  - Communication orchestrée par le système central",
      "",
      "**2. Avantages et inconvénients :**",
      "• **Silos** :",
      "  - Avantages : Simplicité, indépendance, spécialisation",
      "  - Inconvénients : Redondance, incohérence, cloisonnement",
      "• **Étoile** :",
      "  - Avantages : Cohérence, intégration, vision globale",
      "  - Inconvénients : Complexité, dépendance au système central",
      "",
      "**3. Contextes d'utilisation :**",
      "• **Silos** : Petites entreprises, activités très spécialisées",
      "• **Étoile** : Moyennes/grandes entreprises, processus intégrés"
    ],
    type: 'analysis',
    difficulty: 'moyen',
    icon: 'Cpu'
  },
  {
    id: 4,
    title: "Cas MEDIC PLUS - Analyse détaillée",
    context: "MEDIC PLUS est une entreprise de distribution de matériel médical. Elle souhaite moderniser son système d'information vieillissant composé d'applications hétérogènes (comptabilité, gestion commerciale, stocks) qui ne communiquent pas entre elles.",
    questions: [
      "Identifiez les problèmes du SI actuel de MEDIC PLUS.",
      "Proposez une solution ERP adaptée en justifiant vos choix.",
      "Définissez les étapes de mise en œuvre du projet."
    ],
    correction: [
      "**1. Problèmes identifiés :**",
      "• **Cloisonnement** : Applications isolées, pas de communication",
      "• **Redondance** : Saisies multiples, risques d'erreurs",
      "• **Incohérence** : Données dupliquées et non synchronisées",
      "• **Inefficacité** : Processus manuels, perte de temps",
      "• **Reporting** : Difficile à consolider, manque de vision globale",
      "",
      "**2. Solution ERP proposée :**",
      "• **Type** : ERP sectoriel spécialisé distribution médicale",
      "• **Modules** : Gestion commerciale, stocks, comptabilité, traçabilité",
      "• **Déploiement** : Cloud hybride (sécurité + flexibilité)",
      "• **Intégration** : API avec partenaires (fournisseurs, transporteurs)",
      "",
      "**3. Étapes de mise en œuvre (méthode EPIC) :**",
      "• **Étude** : Audit existant, expression besoins, cahier charges",
      "• **Planification** : Sélection fournisseur, planning, budget",
      "• **Implémentation** : Paramétrage, formation, migration données",
      "• **Contrôle** : Tests, recette, mise en production, support"
    ],
    type: 'case-study',
    difficulty: 'difficile',
    icon: 'Users'
  },
  {
    id: 5,
    title: "Cas ACADOMIA - Transformation digitale",
    context: "ACADOMIA, leader du soutien scolaire, souhaite digitaliser ses processus pour améliorer l'expérience client et optimiser la gestion de ses 20 000 enseignants répartis sur 100 agences.",
    questions: [
      "Analysez les enjeux de la transformation digitale pour ACADOMIA.",
      "Proposez une architecture SI adaptée aux spécificités du secteur.",
      "Identifiez les risques et les facteurs clés de succès."
    ],
    correction: [
      "**1. Enjeux de la transformation digitale :**",
      "• **Expérience client** : Plateforme unique, suivi personnalisé",
      "• **Gestion RH** : Planning enseignants, compétences, évaluations",
      "• **Opérationnel** : Automatisation administrative, facturation",
      "• **Concurrentiel** : Différenciation, innovation pédagogique",
      "",
      "**2. Architecture SI proposée :**",
      "• **CRM** : Gestion relation client, suivi parcours élève",
      "• **HRM** : Gestion enseignants, planning, compétences",
      "• **LMS** : Plateforme pédagogique, contenus, évaluations",
      "• **ERP** : Gestion administrative, comptabilité, facturation",
      "• **Mobile** : Applications dédiées enseignants et familles",
      "",
      "**3. Risques et facteurs clés de succès :**",
      "• **Risques** : Résistance au changement, complexité métier, RGPD",
      "• **FCS** : Accompagnement utilisateurs, formation, pilotage projet",
      "• **Gouvernance** : Comité de pilotage, communication, indicateurs"
    ],
    type: 'case-study',
    difficulty: 'difficile',
    icon: 'Users'
  },
  {
    id: 6,
    title: "LA FIN DES ERP - Évolution vers les solutions spécialisées",
    context: "Les ERP traditionnels sont remis en question. Les entreprises recherchent plus d'agilité et se tournent vers des solutions spécialisées (outils verticaux) et des architectures plus flexibles.",
    questions: [
      "Explicitez les termes : outils verticaux, capacité d'interfaçage, approche 'best of breed'.",
      "Analysez l'évolution du Cloud dans les ERP (privé vs public).",
      "Présentez les différentes générations d'ERP et leurs caractéristiques."
    ],
    correction: [
      "**1. Définitions :**",
      "• **Outils verticaux** : Solutions spécialisées par métier/secteur",
      "• **Capacité d'interfaçage** : Aptitude des systèmes à communiquer",
      "• **Best of breed** : Sélection des meilleures solutions par fonction",
      "",
      "**2. Évolution du Cloud :**",
      "• **Cloud privé** : Infrastructure dédiée, personnalisation possible",
      "• **Cloud public** : Limites pour personnalisations complexes",
      "• **Défis** : Standardisation vs spécificités métier",
      "",
      "**3. Générations d'ERP :**",
      "• **1ère génération** : ERP monolithiques, client-serveur",
      "• **2ème génération** : Architecture web, ouverture externe",
      "• **3ème génération** : Cloud, SaaS, mobilité",
      "• **4ème génération** : IA, auto-apprentissage, expérience utilisateur"
    ],
    type: 'analysis',
    difficulty: 'difficile',
    icon: 'Cloud'
  },
  {
    id: 7,
    title: "L'ERP EST MORT VIVE L'ERP - Vers les XRP",
    context: "L'explosion des données hétérogènes et l'impact du digital transforment les ERP. Les entreprises évoluent vers des solutions XRP (eXperience Resource Planning) plus agiles et centrées utilisateur.",
    questions: [
      "Comment se caractérise une solution agile ?",
      "Présentez les différences entre une approche ERP et une approche XRP.",
      "Analysez les enjeux de cette transformation pour les entreprises."
    ],
    correction: [
      "**1. Caractéristiques d'une solution agile :**",
      "• **Flexibilité** : Adaptation rapide aux changements métier",
      "• **Modularité** : Architecture en composants indépendants",
      "• **Intégration** : Capacité à connecter des sources hétérogènes",
      "• **Évolutivité** : Montée en charge et nouvelles fonctionnalités",
      "• **Expérience** : Interface intuitive, personnalisable",
      "",
      "**2. ERP vs XRP :**",
      "• **ERP traditionnel** :",
      "  - Centré sur les processus internes",
      "  - Base de données unique et fermée",
      "  - Architecture monolithique",
      "• **XRP (eXperience Resource Planning)** :",
      "  - Centré sur l'expérience utilisateur",
      "  - Orchestration de données hétérogènes",
      "  - Architecture ouverte et modulaire",
      "",
      "**3. Enjeux de la transformation :**",
      "• **Opportunités** : Agilité, innovation, compétitivité",
      "• **Défis** : Migration, formation, sécurité",
      "• **Stratégie** : Transformation progressive, accompagnement"
    ],
    type: 'analysis',
    difficulty: 'difficile',
    icon: 'Cpu'
  }
];

const iconMap = {
  Building,
  Users,
  Cloud,
  Cpu
};

export default function Exercices() {
  const [showCorrection, setShowCorrection] = useState<{ [key: number]: boolean }>({});

  const toggleCorrection = (exerciseId: number) => {
    setShowCorrection(prev => ({
      ...prev,
      [exerciseId]: !prev[exerciseId]
    }));
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'facile': return 'bg-green-100 text-green-800';
      case 'moyen': return 'bg-yellow-100 text-yellow-800';
      case 'difficile': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'theory': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-purple-100 text-purple-800';
      case 'analysis': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <BackToPlanButton />
        
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Exercices Complémentaires</h1>
              <p className="text-gray-600">Approfondissement des concepts PGI/ERP</p>
            </div>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <h3 className="font-semibold text-blue-900 mb-2">📚 Objectifs pédagogiques</h3>
            <ul className="text-blue-800 space-y-1">
                <li>• Maîtriser les concepts d&apos;intégration des systèmes d&apos;information</li>
                <li>• Analyser des cas concrets d&apos;implémentation ERP</li>
                <li>• Comprendre l&apos;évolution vers les solutions XRP</li>
                <li>• Développer une approche critique des choix technologiques</li>
              </ul>
          </div>
        </div>

        {/* Exercises List */}
        <div className="space-y-6">
          {exercises.map((exercise, index) => {
            const IconComponent = iconMap[exercise.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={exercise.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                {/* Exercise Header */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-blue-100 p-2 rounded-lg">
                          <IconComponent className="h-5 w-5 text-blue-600" />
                        </div>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                          Exercice {exercise.id}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(exercise.difficulty)}`}>
                          {exercise.difficulty}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(exercise.type)}`}>
                          {exercise.type === 'theory' ? 'Théorie' : 
                           exercise.type === 'case-study' ? 'Cas pratique' : 'Analyse'}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 mb-3">{exercise.title}</h2>
                      
                      {/* Context */}
                      <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">📋 Contexte</h4>
                        <p className="text-gray-700">{exercise.context}</p>
                      </div>
                      
                      {/* Questions */}
                      <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
                        <h4 className="font-semibold text-orange-900 mb-3">❓ Questions</h4>
                        <ol className="text-orange-800 space-y-2">
                          {exercise.questions.map((question, qIndex) => (
                            <li key={qIndex} className="flex items-start gap-2">
                              <span className="font-semibold text-orange-600 mt-1">{qIndex + 1}.</span>
                              <span>{question}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="p-6 bg-gray-50">
                  <button
                    onClick={() => toggleCorrection(exercise.id)}
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    {showCorrection[exercise.id] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    {showCorrection[exercise.id] ? 'Masquer' : 'Voir'} la correction
                  </button>
                </div>

                {/* Correction */}
                <AnimatePresence>
                  {showCorrection[exercise.id] && exercise.correction && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-gray-200"
                    >
                      <div className="p-6 bg-green-50">
                        <h4 className="font-semibold text-green-900 mb-4 flex items-center gap-2">
                          <CheckCircle className="h-5 w-5" />
                          Correction détaillée
                        </h4>
                        <div className="space-y-2">
                          {exercise.correction.map((line, lineIndex) => (
                            <div key={lineIndex} className="text-green-800">
                              {line.startsWith('**') ? (
                                <div className="font-semibold mt-3 mb-1">{line.replace(/\*\*/g, '')}</div>
                              ) : line.startsWith('•') ? (
                                <div className="ml-4 flex items-start gap-2">
                                  <span className="text-green-600 font-bold mt-1">•</span>
                                  {line.substring(2)}
                                </div>
                              ) : line.startsWith('  -') ? (
                                <div className="ml-8 flex items-start gap-2">
                                  <span className="text-green-500 font-bold mt-1">-</span>
                                  {line.substring(4)}
                                </div>
                              ) : line === '' ? (
                                <div className="h-2"></div>
                              ) : (
                                <div>{line}</div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center">
            <Link 
              href="/section-2" 
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              Retour Section 2
            </Link>
            
            <div className="text-center">
              <p className="text-gray-600 mb-2">📖 Exercices terminés !</p>
              <p className="text-sm text-gray-500">
                Passez maintenant au quiz pour valider vos connaissances
              </p>
            </div>
            
            <Link 
              href="/quiz" 
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Passer au Quiz
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}