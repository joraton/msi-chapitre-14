import { Target } from 'lucide-react';
import SectionBlock from './SectionBlock';

const sections = [
  {
    title: 'Introduction',
    description: 'Concepts de base et définitions des PGI/ERP',
    href: '/introduction',
    iconName: 'Rocket',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    title: 'Section I : Les principes',
    description: 'Évolution et recherche d\'intégration des systèmes',
    href: '/section-1',
    iconName: 'TrendingUp',
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    title: 'Section II : Le choix d\'un PGI',
    description: 'Critères de sélection et mise en œuvre',
    href: '/section-2',
    iconName: 'Building2',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  {
    title: 'Exercices complémentaires',
    description: 'Cas pratiques et approfondissement des concepts',
    href: '/exercices',
    iconName: 'BookOpen',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100'
  },
  {
    title: 'Cas pratiques',
    description: 'Exercices pratiques et cas d\'application',
    href: '/cas-pratiques',
    iconName: 'Award',
    color: 'text-red-600',
    bgColor: 'bg-red-100'
  },
  {
    title: 'Questions DSCG',
    description: 'Annales officielles avec corrections détaillées',
    href: '/questions-dscg',
    iconName: 'GraduationCap',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100'
  },
  {
    title: 'Quiz',
    description: 'Évaluation interactive de vos connaissances',
    href: '/quiz',
    iconName: 'HelpCircle',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100'
  }
];

export default function CoursePlan() {
  return (
    <div className="max-w-4xl mx-auto px-2 sm:px-4">
      {/* Header */}
      <div className="text-center mb-6 sm:mb-8">
        <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
          <Target className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Plan du cours
          </h2>
        </div>
        <p className="text-gray-600 text-base sm:text-lg px-4 sm:px-0">
          Suivez ce parcours structuré pour maîtriser les PGI/ERP
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-3 sm:space-y-4">
        {sections.map((section, index) => (
          <SectionBlock
            key={section.href}
            {...section}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}