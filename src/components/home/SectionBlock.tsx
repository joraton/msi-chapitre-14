'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Rocket, TrendingUp, Building2, HelpCircle, Award, BookOpen, GraduationCap } from 'lucide-react';

interface SectionBlockProps {
  title: string;
  description: string;
  href: string;
  iconName: string;
  color: string;
  bgColor: string;
  index: number;
}

const iconMap = {
  'Rocket': Rocket,
  'TrendingUp': TrendingUp,
  'Building2': Building2,
  'BookOpen': BookOpen,
  'HelpCircle': HelpCircle,
  'Award': Award,
  'GraduationCap': GraduationCap
};

export default function SectionBlock({
  title,
  description,
  href,
  iconName,
  color,
  bgColor,
  index
}: SectionBlockProps) {
  const Icon = iconMap[iconName as keyof typeof iconMap] || BookOpen;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-4 flex-1">
          {/* Icon Circle */}
          <div className={`${bgColor} p-3 rounded-full flex-shrink-0`}>
            <Icon className={`h-6 w-6 ${color}`} />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              {title}
            </h3>
            <p className="text-gray-600">
              {description}
            </p>
          </div>
        </div>

        {/* Button */}
        <Link
          href={href}
          className="bg-blue-600 hover:bg-blue-700 hover:shadow-lg text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 text-center flex-shrink-0 self-start sm:self-center shadow-md border-2 border-blue-500/30 hover:border-blue-400/50 hover:scale-105"
        >
          Commencer
        </Link>
      </div>
    </motion.div>
  );
}