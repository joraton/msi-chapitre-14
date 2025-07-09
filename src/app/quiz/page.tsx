'use client';

import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, HelpCircle, CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Quelle est la date d'apparition du premier ERP ?",
    options: ["1990", "1992", "1995", "2000"],
    correct: 1,
    explanation: "Le premier ERP est apparu en 1992 avec SAP, bien que le terme ait été créé en 1990 par le cabinet Gartner."
  },
  {
    id: 2,
    question: "Que signifie l'acronyme MRP 1 ?",
    options: [
      "Material Requirement Planning",
      "Manufacturing Resource Planning", 
      "Management Resource Planning",
      "Material Resource Planning"
    ],
    correct: 0,
    explanation: "MRP 1 signifie Material Requirement Planning (gestion en besoin des composants)."
  },
  {
    id: 3,
    question: "Quelles sont les 4 caractéristiques principales d'un PGI intégré (moyen mnémotechnique UTRC) ?",
    options: [
      "Unicité, Temps réel, Traçabilité, Couverture",
      "Utilité, Technologie, Rentabilité, Compatibilité",
      "Uniformité, Transparence, Rapidité, Contrôle",
      "Universalité, Technicité, Robustesse, Cohérence"
    ],
    correct: 0,
    explanation: "UTRC : Unicité des informations, mise à jour Temps réel, Traçabilité des opérations, Couverture fonctionnelle."
  },
  {
    id: 4,
    question: "Quel est le principe fondamental des PGI selon le cours ?",
    options: [
      "Un PGI coûte moins cher que des applications séparées",
      "L'apport d'un PGI est toujours bien supérieur à la somme des apports de chacun des modules",
      "Un PGI est plus facile à maintenir",
      "Un PGI garantit une meilleure sécurité"
    ],
    correct: 1,
    explanation: "Le principe fondamental est que l'apport d'un PGI est toujours bien supérieur à la somme des apports de chacun des modules qui le composent."
  },
  {
    id: 5,
    question: "Quelles sont les 4 étapes principales d'un projet PGI (moyen mnémotechnique EPIC) ?",
    options: [
      "Étude, Planification, Implémentation, Contrôle",
      "Évaluation, Préparation, Installation, Configuration", 
      "Exploration, Programmation, Intégration, Certification",
      "Enquête, Proposition, Intervention, Clôture"
    ],
    correct: 0,
    explanation: "EPIC : Étude préalable, Planification (cahier des charges), Implémentation, Contrôle (recette)."
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    setShowExplanation(false);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setShowExplanation(false);
  };

  const score = selectedAnswers.reduce((acc, answer, index) => {
    return acc + (answer === questions[index].correct ? 1 : 0);
  }, 0);

  const percentage = Math.round((score / questions.length) * 100);

  if (showResults) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <BackToPlanButton />
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className={`mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-6 ${
                  percentage >= 80 ? 'bg-green-100' : percentage >= 60 ? 'bg-yellow-100' : 'bg-red-100'
                }`}
              >
                <span className={`text-3xl font-bold ${
                  percentage >= 80 ? 'text-green-600' : percentage >= 60 ? 'text-yellow-600' : 'text-red-600'
                }`}>
                  {percentage}%
                </span>
              </motion.div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Résultats du Quiz</h1>
              <p className="text-xl text-gray-600 mb-8">
                Vous avez obtenu {score} sur {questions.length} bonnes réponses
              </p>
              
              <div className={`p-6 rounded-lg mb-8 ${
                percentage >= 80 ? 'bg-green-50 border border-green-200' : 
                percentage >= 60 ? 'bg-yellow-50 border border-yellow-200' : 
                'bg-red-50 border border-red-200'
              }`}>
                <p className={`text-lg font-semibold ${
                  percentage >= 80 ? 'text-green-800' : 
                  percentage >= 60 ? 'text-yellow-800' : 
                  'text-red-800'
                }`}>
                  {percentage >= 80 ? '🎉 Excellent ! Vous maîtrisez bien les concepts des PGI/ERP.' :
                   percentage >= 60 ? '👍 Bien ! Quelques révisions vous permettront de parfaire vos connaissances.' :
                   '📚 Il serait bon de revoir le cours avant de passer aux exercices pratiques.'}
                </p>
              </div>
              
              <div className="flex gap-4 justify-center">
                <button
                  onClick={resetQuiz}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  <RotateCcw className="h-4 w-4" />
                  Recommencer
                </button>
                <Link
                  href="/cas-pratiques"
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  Cas pratiques
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-orange-100 p-3 rounded-lg">
              <HelpCircle className="h-8 w-8 text-orange-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Quiz d&apos;évaluation</h1>
              <p className="text-gray-600">Question {currentQuestion + 1} sur {questions.length}</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
            <div 
              className="bg-orange-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>

          {/* Question */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="mb-8"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                {question.question}
              </h2>
              
              <div className="space-y-3">
                {question.options.map((option, index) => {
                  const isSelected = selectedAnswers[currentQuestion] === index;
                  const isCorrect = index === question.correct;
                  const showAnswer = showExplanation;
                  
                  return (
                    <button
                      key={index}
                      onClick={() => !showExplanation && handleAnswer(index)}
                      disabled={showExplanation}
                      className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                        showAnswer
                          ? isCorrect
                            ? 'border-green-500 bg-green-50'
                            : isSelected
                            ? 'border-red-500 bg-red-50'
                            : 'border-gray-200 bg-gray-50'
                          : isSelected
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option}</span>
                        {showAnswer && (
                          <div>
                            {isCorrect && <CheckCircle className="h-5 w-5 text-green-600" />}
                            {!isCorrect && isSelected && <XCircle className="h-5 w-5 text-red-600" />}
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Explanation */}
          <AnimatePresence>
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8"
              >
                <h3 className="font-semibold text-blue-900 mb-2">Explication</h3>
                <p className="text-blue-800">{question.explanation}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t">
            <Link 
              href="/section-2" 
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              Section II
            </Link>
            
            {showExplanation && (
              <button
                onClick={nextQuestion}
                className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                {currentQuestion < questions.length - 1 ? 'Question suivante' : 'Voir les résultats'}
                <ChevronRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}