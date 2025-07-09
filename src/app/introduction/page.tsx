import BackToPlanButton from '@/components/content/BackToPlanButton';
import Link from 'next/link';
import { ChevronRight, Database, Lightbulb, Target } from 'lucide-react';

export default function Introduction() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Database className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Introduction aux PGI/ERP</h1>
              <p className="text-gray-600">Concepts de base et définitions</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-blue-900 m-0">Définition clé</h3>
              </div>
              <p className="text-blue-800 m-0">
                Un <strong>PGI (Progiciel de Gestion Intégré)</strong> ou <strong>ERP (Enterprise Resource Planning)</strong> 
                est un ensemble de modules applicatifs travaillant en mode natif sur une unique base de données.
              </p>
            </div>

            <h2>Contexte et enjeux</h2>
            <p>
              Les PGI occupent une place prépondérante dans les unités opérationnelles des organisations, 
              tous secteurs d&apos;activité confondus. Ils constituent progressivement la colonne vertébrale 
              des systèmes d&apos;information.
            </p>

            <p>
              Le traitement de l&apos;information dans les organisations est en perpétuelle mutation. 
              L&apos;inadaptation chronique des solutions informatiques d&apos;antan, révélée par un manque 
              flagrant de flexibilité, d&apos;adaptabilité et d&apos;évolutivité, a été à l&apos;origine 
              d&apos;une période de transitions.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <div className="flex items-center gap-2 mb-2">
                <Target className="h-5 w-5 text-green-600" />
                <h3 className="text-lg font-semibold text-green-900 m-0">Objectifs des PGI</h3>
              </div>
              <ul className="text-green-800 m-0">
                <li>Apporter des réponses transverses et fédératrices</li>
                <li>Assurer la compatibilité et l&apos;intégration</li>
                <li>Garantir l&apos;efficacité et l&apos;efficience</li>
                <li>Permettre l&apos;évolutivité des systèmes</li>
              </ul>
            </div>

            <h2>Caractéristiques principales</h2>
            <p>Pour être intégré, un progiciel de gestion doit principalement :</p>
            
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Unicité</h4>
                <p className="text-gray-700 text-sm">
                  Émaner d&apos;un concepteur unique et garantir l&apos;unicité des informations traitées
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Temps réel</h4>
                <p className="text-gray-700 text-sm">
                  Mise à jour en temps réel de toute information modifiée dans tous les modules
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Traçabilité</h4>
                <p className="text-gray-700 text-sm">
                  Fournir des pistes d&apos;audit basées sur une totale traçabilité des opérations
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Couverture</h4>
                <p className="text-gray-700 text-sm">
                  Couvrir un ensemble de processus ou la totalité du système d&apos;information
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">💡 Moyen mnémotechnique</h3>
              <p className="text-yellow-800 m-0">
                <strong>UTRC</strong> : <strong>U</strong>nicité, <strong>T</strong>emps réel, 
                <strong>T</strong>raçabilité, <strong>C</strong>ouverture
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t">
            <div></div>
            <Link 
              href="/section-1" 
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Section I : Les principes
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}