import { Database, Clock, Users, BookOpen } from 'lucide-react';

export default function CourseHeader() {
  return (
    <div className="mb-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-4">
        <span>Accueil</span>
        <span className="mx-2">{'>'}</span>
        <span>Cours</span>
        <span className="mx-2">{'>'}</span>
        <span className="text-blue-600">Les PGI/ERP</span>
      </nav>

      {/* Main Card */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white shadow-lg">
        <div className="flex items-start gap-6">
          {/* Icon */}
          <div className="bg-white/20 p-4 rounded-lg">
            <Database className="h-12 w-12" />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-3">
              Chapitre 14 : Les PGI/ERP
            </h1>
            <p className="text-blue-100 mb-6 text-lg">
              Découvrez les progiciels de gestion intégrés, leur évolution, leurs enjeux et leur impact sur les systèmes d&apos;information des entreprises.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                <Users className="h-4 w-4" />
                <span className="text-sm">Expert</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                <Clock className="h-4 w-4" />
                <span className="text-sm">3h 30min</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                <BookOpen className="h-4 w-4" />
                <span className="text-sm">6 sections</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}