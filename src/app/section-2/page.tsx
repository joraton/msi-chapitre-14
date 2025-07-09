import BackToPlanButton from '@/components/content/BackToPlanButton';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Building2, Users, Settings, AlertTriangle, CheckCircle } from 'lucide-react';

export default function Section2() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Building2 className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Section II : Le choix d&apos;un PGI</h1>
              <p className="text-gray-600">Critères de sélection et mise en œuvre</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p>
              Le choix d&apos;un PGI implique l&apos;identification des acteurs clés et des principaux 
              éléments nécessaires à l&apos;implantation. La question essentielle est : comment ces 
              acteurs vont-ils cohabiter, s&apos;organiser et communiquer pour atteindre les objectifs 
              fixés par le management ?
            </p>

            <h2>Le rôle de l&apos;intégrateur</h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-blue-900 m-0">Missions de l&apos;intégrateur</h3>
              </div>
              <ul className="text-blue-800 m-0 space-y-2">
                <li>• Analyse des besoins et des processus existants</li>
                <li>• Paramétrage et configuration du PGI</li>
                <li>• Formation des utilisateurs</li>
                <li>• Accompagnement dans la conduite du changement</li>
                <li>• Support technique et maintenance</li>
              </ul>
            </div>

            <h2>Étapes d&apos;un projet PGI</h2>
            
            <div className="space-y-6 my-8">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-green-900 mb-2">Étude préalable</h4>
                    <p className="text-green-800 text-sm">
                      Analyse de l&apos;existant, définition des besoins, étude de faisabilité
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">Cahier des charges</h4>
                    <p className="text-blue-800 text-sm">
                      Spécifications fonctionnelles et techniques, critères de sélection
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-red-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-purple-900 mb-2">Sélection et implémentation</h4>
                    <p className="text-purple-800 text-sm">
                      Choix de l&apos;éditeur, paramétrage, tests, formation
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-red-900 mb-2">Recette et déploiement</h4>
                    <p className="text-red-800 text-sm">
                      Tests d&apos;acceptation, mise en production, accompagnement
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2>Approches alternatives</h2>
            
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <h4 className="font-semibold text-green-900 m-0">Approche &quot;Best of Breed&quot;</h4>
                </div>
                <p className="text-green-800 text-sm mb-3">
                  Utilisation d&apos;outils spécialisés par métier, interfacés entre eux.
                </p>
                <div className="text-green-700 text-xs">
                  <strong>Avantages :</strong> Spécialisation, coût moindre, flexibilité
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Settings className="h-5 w-5 text-blue-600" />
                  <h4 className="font-semibold text-blue-900 m-0">ERP monolithique</h4>
                </div>
                <p className="text-blue-800 text-sm mb-3">
                  Solution unique couvrant tous les besoins de l&apos;entreprise.
                </p>
                <div className="text-blue-700 text-xs">
                  <strong>Avantages :</strong> Intégration native, cohérence, support unifié
                </div>
              </div>
            </div>

            <h2>Évolution vers le Cloud et l&apos;IA</h2>
            
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-purple-900 mb-4">Les 4 générations d&apos;ERP</h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-blue-800">1ère génération (1990s)</h4>
                  <p className="text-blue-700 text-sm">
                    ERP monolithiques, architecture client-serveur, modules intégrés dans une base unique
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-800">2ème génération (2000s)</h4>
                  <p className="text-green-700 text-sm">
                    Architecture web, SOA (Service Oriented Architecture), ouverture vers l&apos;extérieur
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-semibold text-purple-800">3ème génération (2010s) : Cloud</h4>
                  <p className="text-purple-700 text-sm">
                    Architectures cloud, SaaS, mobilité, analytics intégrés, flexibilité d&apos;intégration
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-semibold text-orange-800">4ème génération (2020s) : XRP</h4>
                  <p className="text-orange-700 text-sm">
                    eXperience Resource Planning - Approche user-centric, IA, orchestration des données hétérogènes
                  </p>
                </div>
              </div>
            </div>
            
            <h3>Le concept XRP (eXperience Resource Planning)</h3>
            
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
              <h4 className="font-semibold text-orange-900 mb-3">Transformation fondamentale</h4>
              <p className="text-orange-800 mb-4">
                L&apos;XRP marque le passage d&apos;une approche &quot;ERP-centric&quot; à une approche &quot;user-centric&quot;. 
                Plus de 60% des données critiques proviennent désormais de sources externes.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold text-orange-900 mb-2">ERP traditionnel</h5>
                  <ul className="text-orange-800 text-sm space-y-1">
                    <li>• Centré sur les processus internes</li>
                    <li>• Base de données unique et fermée</li>
                    <li>• Architecture monolithique</li>
                    <li>• Données produites en interne</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-semibold text-orange-900 mb-2">XRP nouvelle génération</h5>
                  <ul className="text-orange-800 text-sm space-y-1">
                    <li>• Centré sur l&apos;expérience utilisateur</li>
                    <li>• Orchestration de données hétérogènes</li>
                    <li>• Architecture ouverte et modulaire</li>
                    <li>• Intégration de sources externes</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <h3>Cloud privé vs Cloud public</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-3">Cloud privé</h4>
                <p className="text-blue-800 text-sm mb-3">
                  Infrastructure dédiée permettant personnalisations et paramétrages complexes.
                </p>
                <div className="text-blue-700 text-xs">
                  <strong>Avantages :</strong> Sécurité, personnalisation, contrôle
                </div>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Cloud public</h4>
                <p className="text-gray-800 text-sm mb-3">
                  Limites actuelles pour les personnalisations complexes. Risque de &quot;faux Cloud&quot;.
                </p>
                <div className="text-gray-700 text-xs">
                  <strong>Défis :</strong> Standardisation vs spécificités métier
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">💡 Moyen mnémotechnique</h3>
              <p className="text-yellow-800 m-0">
                <strong>EPIC</strong> : <strong>E</strong>tude, <strong>P</strong>lanification, 
                <strong>I</strong>mplémentation, <strong>C</strong>ontrôle (recette)
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                <h3 className="text-lg font-semibold text-red-900 m-0">Risques à surveiller</h3>
              </div>
              <ul className="text-red-800 m-0 space-y-1">
                <li>• Résistance au changement des utilisateurs</li>
                <li>• Dépassement des budgets et délais</li>
                <li>• Inadéquation entre le PGI et les processus métier</li>
                <li>• Dépendance technologique envers l&apos;éditeur</li>
                <li>• Complexité de la migration des données</li>
              </ul>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t">
            <Link 
              href="/section-1" 
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              Section I : Les principes
            </Link>
            <Link 
              href="/exercices" 
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Exercices complémentaires
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}