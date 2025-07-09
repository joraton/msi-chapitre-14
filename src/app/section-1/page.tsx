import BackToPlanButton from '@/components/content/BackToPlanButton';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, TrendingUp, Calendar, Layers, Star } from 'lucide-react';

export default function Section1() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-green-100 p-3 rounded-lg">
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Section I : Les principes</h1>
              <p className="text-gray-600">Évolution et recherche d&apos;intégration des systèmes</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <h2>A. La recherche d&apos;intégration</h2>
            
            <p>
              L&apos;évolution des systèmes d&apos;information peut se structurer autour de grandes phases, 
              liées à des évolutions technologiques. On date l&apos;apparition du premier ERP en 1992, 
              avec le SAP. Le terme lui-même apparaît en 1990 dans une étude du célèbre cabinet Gartner.
            </p>

            {/* Timeline */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg my-8">
              <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
                <Calendar className="h-5 w-5 text-blue-600" />
                Chronologie de l&apos;évolution
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-blue-900">1960 : L&apos;informatisation croissante</h4>
                    <p className="text-blue-800 text-sm">
                      Premières applications : gestion des paies et écritures comptables. 
                      Développement d&apos;applications spécifiques par fonction.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-green-900">Les premiers besoins d&apos;intégration</h4>
                    <p className="text-green-800 text-sm">
                      Problème du &quot;plat de spaghettis&quot; - connexions point à point complexes. 
                      Émergence des EAI (Enterprise Application Integration).
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-purple-900">L&apos;apparition des MRP</h4>
                    <p className="text-purple-800 text-sm">
                      MRP 1 (Material Requirement Planning) puis MRP 2 (Manufacturing Resources Planning). 
                      Intégration native avec base de données commune.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-red-900">L&apos;apparition des ERP</h4>
                    <p className="text-red-800 text-sm">
                      Intégration de toutes les fonctions de l&apos;entreprise : finance, vente, 
                      logistique/achat, ressources humaines.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">💡 Moyen mnémotechnique</h3>
              <p className="text-yellow-800 m-0">
                <strong>IMME</strong> : <strong>I</strong>nformatisation, <strong>I</strong>ntégration, 
                <strong>M</strong>RP, <strong>E</strong>RP
              </p>
            </div>

            <h2>B. Définition et enjeux</h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Principe fondamental</h3>
              <p className="text-blue-800 m-0">
                &quot;L&apos;apport d&apos;un PGI est toujours bien supérieur à la somme des apports 
                de chacun des modules qui le composent&quot;
              </p>
            </div>

            <h3>Modules couverts par un PGI</h3>
            <div className="grid md:grid-cols-3 gap-4 my-6">
              {[
                'Gestion comptable et financière',
                'Contrôle de gestion', 
                'Gestion de production',
                'Gestion des achats et stocks',
                'Administration des ventes',
                'Logistique',
                'Gestion de la trésorerie',
                'Gestion des ressources humaines',
                'Paie'
              ].map((module, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Layers className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium">{module}</span>
                  </div>
                </div>
              ))}
            </div>

            <h3>Apports potentiels d&apos;un ERP</h3>
            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Coordination de l&apos;ensemble des activités',
                  'Réduction du coût d&apos;ensemble du SI',
                  'Introduction des bonnes pratiques',
                  'Meilleure prise de décision',
                  'Réduction des délais, meilleure réactivité',
                  'Standardisation du SI'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-green-800 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3>Inconvénients</h3>
            <div className="bg-red-50 p-6 rounded-lg mb-8">
              <ul className="text-red-800 space-y-2">
                <li>• Mise en place souvent lourde</li>
                <li>• Investissement initial très élevé</li>
                <li>• Trous fonctionnels nécessitant des modules complémentaires</li>
                <li>• Écarts entre fonctionnalités proposées et besoins véritables</li>
                <li>• Obligation d&apos;adapter l&apos;organisation à l&apos;ERP</li>
                <li>• Dépendance envers l&apos;outil</li>
              </ul>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t">
            <Link 
              href="/introduction" 
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              Introduction
            </Link>
            <Link 
              href="/section-2" 
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Section II : Le choix d&apos;un PGI
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}