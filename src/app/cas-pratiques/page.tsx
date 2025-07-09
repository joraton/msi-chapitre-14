'use client';

import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import Link from 'next/link';
import { ChevronLeft, GraduationCap, FileText, CheckCircle, Eye, EyeOff, Lightbulb } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface DSCGQuestion {
  id: number;
  title: string;
  context: string;
  question: string;
  points: number;
  correction: string[];
  methodology: string[];
  tips: string[];
}

const dscgQuestions: DSCGQuestion[] = [
  {
    id: 1,
    title: "Cas MEDIC PLUS - Choix d'un ERP",
    context: "MEDIC PLUS est une entreprise de distribution de matériel médical qui souhaite remplacer ses applications métier vieillissantes par un ERP. L'entreprise compte 150 salariés répartis sur 3 sites et réalise un CA de 25 M€. Elle dispose actuellement d'applications séparées pour la comptabilité, la gestion commerciale et les stocks.",
    question: "Vous êtes consultant en systèmes d'information. Présentez les étapes du projet ERP et les critères de choix à considérer pour MEDIC PLUS. Analysez les avantages et inconvénients d'une solution Cloud vs On-premise.",
    points: 15,
    correction: [
      "**1. Étapes du projet ERP (méthode EPIC) :**",
      "• **Étude préalable** : Audit de l'existant, définition des besoins fonctionnels, analyse des processus métier",
      "• **Planification** : Cahier des charges, sélection des fournisseurs, choix de l'intégrateur",
      "• **Implémentation** : Paramétrage, formation, migration des données, tests",
      "• **Contrôle** : Recette fonctionnelle, mise en production, accompagnement au changement",
      "",
      "**2. Critères de choix pour MEDIC PLUS :**",
      "• **Fonctionnels** : Couverture métier (distribution, traçabilité médicale), spécificités sectorielles",
      "• **Techniques** : Intégration avec l'existant, évolutivité, performance",
      "• **Économiques** : Coût total (TCO), retour sur investissement, modèle de licence",
      "• **Organisationnels** : Accompagnement au changement, formation, support",
      "",
      "**3. Cloud vs On-premise :**",
      "• **Avantages Cloud** : Coûts prévisibles, maintenance externalisée, accès multi-sites, évolutivité",
      "• **Inconvénients Cloud** : Dépendance fournisseur, sécurité des données, personnalisation limitée",
      "• **Avantages On-premise** : Contrôle total, personnalisation poussée, sécurité interne",
      "• **Inconvénients On-premise** : Investissement initial élevé, maintenance interne, obsolescence"
    ],
    methodology: [
      "Structurer la réponse en 3 parties distinctes",
      "Utiliser le moyen mnémotechnique EPIC pour les étapes",
      "Présenter les critères sous forme de tableau comparatif",
      "Équilibrer avantages/inconvénients pour chaque solution",
      "Conclure par une recommandation argumentée"
    ],
    tips: [
      "💡 Pensez aux spécificités du secteur médical (traçabilité, normes)",
      "📊 Mentionnez l'importance du TCO sur 5 ans",
      "🔄 N'oubliez pas l'accompagnement au changement",
      "⚖️ Pesez les critères selon la taille de l'entreprise"
    ]
  },
  {
    id: 2,
    title: "Évolution des ERP - Analyse prospective",
    context: "Les ERP évoluent rapidement avec l'émergence de nouvelles technologies (IA, Cloud, IoT). Les entreprises s'interrogent sur l'avenir de leurs systèmes d'information et l'émergence des concepts d'ERP de 4ème génération et d'XRP (eXperience Resource Planning).",
    question: "Analysez l'évolution des ERP de la 1ère à la 4ème génération. Expliquez le concept d'XRP et son impact sur l'expérience utilisateur. Quels sont les défis et opportunités pour les entreprises ?",
    points: 12,
    correction: [
      "**1. Évolution des générations d'ERP :**",
      "• **1ère génération (1990s)** : ERP monolithiques, architecture client-serveur, modules intégrés",
      "• **2ème génération (2000s)** : Architecture web, SOA, ouverture vers l'extérieur",
      "• **3ème génération (2010s)** : Cloud, SaaS, mobilité, analytics intégrés",
      "• **4ème génération (2020s)** : IA, machine learning, IoT, expérience utilisateur",
      "",
      "**2. Concept d'XRP (eXperience Resource Planning) :**",
      "• **Définition** : Évolution centrée sur l'expérience utilisateur plutôt que sur les processus",
      "• **Caractéristiques** : Interface intuitive, personnalisation, intelligence artificielle",
      "• **Objectif** : Simplifier l'interaction homme-machine, réduire la formation",
      "• **Technologies** : UI/UX avancées, chatbots, reconnaissance vocale, prédictif",
      "",
      "**3. Défis et opportunités :**",
      "• **Opportunités** : Productivité accrue, adoption facilitée, décisions data-driven",
      "• **Défis** : Coût de migration, formation, sécurité des données, dépendance technologique",
      "• **Enjeux stratégiques** : Transformation digitale, compétitivité, agilité organisationnelle"
    ],
    methodology: [
      "Présenter l'évolution chronologique avec les caractéristiques clés",
      "Définir clairement le concept d'XRP avec des exemples concrets",
      "Équilibrer les aspects techniques et organisationnels",
      "Structurer défis/opportunités par catégories",
      "Adopter une approche prospective et stratégique"
    ],
    tips: [
      "🚀 Illustrez avec des exemples d'entreprises innovantes",
      "🤖 Mentionnez l'impact de l'IA sur l'automatisation",
      "👥 Insistez sur l'importance de l'expérience utilisateur",
      "📈 Reliez aux enjeux de transformation digitale"
    ]
  },
  {
    id: 3,
    title: "Intégration vs Best of Breed",
    context: "Une entreprise industrielle de 500 salariés hésite entre deux approches : adopter un ERP intégré couvrant tous ses besoins ou opter pour une approche 'Best of Breed' en sélectionnant les meilleures solutions spécialisées pour chaque fonction.",
    question: "Comparez les approches ERP intégré et Best of Breed. Analysez les critères de choix et recommandez une stratégie en justifiant votre position.",
    points: 10,
    correction: [
      "**1. ERP intégré :**",
      "• **Avantages** : Cohérence des données, interface unique, maintenance simplifiée, coût global maîtrisé",
      "• **Inconvénients** : Fonctionnalités parfois limitées, dépendance à un fournisseur, rigidité",
      "• **Cas d'usage** : Entreprises recherchant la simplicité et l'intégration",
      "",
      "**2. Best of Breed :**",
      "• **Avantages** : Fonctionnalités spécialisées, flexibilité, innovation, négociation par module",
      "• **Inconvénients** : Complexité d'intégration, interfaces multiples, coût de maintenance élevé",
      "• **Cas d'usage** : Entreprises avec besoins spécifiques ou expertise technique forte",
      "",
      "**3. Critères de choix :**",
      "• **Complexité métier** : Spécificités sectorielles, processus critiques",
      "• **Ressources IT** : Compétences internes, budget, équipe dédiée",
      "• **Stratégie** : Agilité vs stabilité, innovation vs standardisation",
      "• **Évolutivité** : Croissance prévue, acquisitions, internationalisation",
      "",
      "**4. Recommandation :**",
      "Pour une entreprise industrielle de 500 salariés : approche hybride recommandée",
      "• ERP intégré pour les fonctions support (finance, RH, achats)",
      "• Solutions spécialisées pour les fonctions critiques (production, qualité)",
      "• Plateforme d'intégration (ESB) pour assurer la cohérence"
    ],
    methodology: [
      "Structurer en tableau comparatif avantages/inconvénients",
      "Identifier les critères de choix pertinents",
      "Adapter la recommandation au contexte donné",
      "Justifier la position avec des arguments factuels",
      "Proposer une approche hybride si pertinente"
    ],
    tips: [
      "⚖️ Équilibrez les arguments pour chaque approche",
      "🏭 Tenez compte des spécificités industrielles",
      "💰 Mentionnez le TCO et les coûts cachés",
      "🔗 Insistez sur l'importance de l'intégration"
    ]
  }
];

export default function CasPratiques() {
  const [showCorrection, setShowCorrection] = useState<{ [key: number]: boolean }>({});
  const [showMethodology, setShowMethodology] = useState<{ [key: number]: boolean }>({});

  const toggleCorrection = (questionId: number) => {
    setShowCorrection(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const toggleMethodology = (questionId: number) => {
    setShowMethodology(prev => ({
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
            <div className="bg-purple-100 p-3 rounded-lg">
              <GraduationCap className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Cas pratiques</h1>
              <p className="text-gray-600">Exercices pratiques et cas d&apos;application</p>
            </div>
          </div>
          
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
            <h3 className="font-semibold text-purple-900 mb-2">📋 Instructions</h3>
            <ul className="text-purple-800 space-y-1">
              <li>• Lisez attentivement le contexte et la question</li>
              <li>• Structurez votre réponse selon la méthodologie proposée</li>
              <li>• Utilisez les moyens mnémotechniques du cours (EPIC, UTRC...)</li>
              <li>• Consultez les tips avant de rédiger</li>
              <li>• Comparez votre réponse avec la correction détaillée</li>
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
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                        Question {question.id}
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {question.points} points
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">{question.title}</h2>
                    
                    {/* Context */}
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                      <h4 className="font-semibold text-blue-900 mb-2">📄 Contexte</h4>
                      <p className="text-blue-800">{question.context}</p>
                    </div>
                    
                    {/* Question */}
                    <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
                      <h4 className="font-semibold text-orange-900 mb-2">❓ Question</h4>
                      <p className="text-orange-800">{question.question}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tips */}
              <div className="p-6 bg-yellow-50 border-b border-gray-200">
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="h-5 w-5 text-yellow-600" />
                  <h4 className="font-semibold text-yellow-900">Tips pour réussir</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-2">
                  {question.tips.map((tip, tipIndex) => (
                    <div key={tipIndex} className="text-yellow-800 text-sm">
                      {tip}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 bg-gray-50">
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => toggleMethodology(question.id)}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <FileText className="h-4 w-4" />
                    {showMethodology[question.id] ? 'Masquer' : 'Voir'} la méthodologie
                  </button>
                  
                  <button
                    onClick={() => toggleCorrection(question.id)}
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    {showCorrection[question.id] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    {showCorrection[question.id] ? 'Masquer' : 'Voir'} la correction
                  </button>
                </div>
              </div>

              {/* Methodology */}
              <AnimatePresence>
                {showMethodology[question.id] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-gray-200"
                  >
                    <div className="p-6 bg-blue-50">
                      <h4 className="font-semibold text-blue-900 mb-4 flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        Méthodologie recommandée
                      </h4>
                      <ul className="space-y-2">
                        {question.methodology.map((method, methodIndex) => (
                          <li key={methodIndex} className="text-blue-800 flex items-start gap-2">
                            <span className="text-blue-600 font-bold mt-1">•</span>
                            {method}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Correction */}
              <AnimatePresence>
                {showCorrection[question.id] && (
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
                        {question.correction.map((line, lineIndex) => (
                          <div key={lineIndex} className="text-green-800">
                            {line.startsWith('**') ? (
                              <div className="font-semibold mt-3 mb-1">{line.replace(/\*\*/g, '')}</div>
                            ) : line.startsWith('•') ? (
                              <div className="ml-4 flex items-start gap-2">
                                <span className="text-green-600 font-bold mt-1">•</span>
                                {line.substring(2)}
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
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center">
            <Link 
              href="/quiz" 
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              Retour au Quiz
            </Link>
            
            <div className="text-center">
              <p className="text-gray-600 mb-2">🎯 Objectif DSCG atteint !</p>
              <p className="text-sm text-gray-500">
                Vous maîtrisez maintenant les concepts essentiels des PGI/ERP
              </p>
            </div>
            
            <Link 
              href="/" 
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Retour au plan
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}