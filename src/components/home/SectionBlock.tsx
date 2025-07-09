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
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200 hover:border-gray-300"
    >
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
          {/* Icon */}
          <div className={`${bgColor} p-2.5 sm:p-3 rounded-lg flex-shrink-0 mx-auto sm:mx-0`}>
            <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${color}`} />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              {title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Button */}
          <Link
            href={href}
            className="bg-blue-600 hover:bg-blue-700 hover:shadow-lg text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-200 text-center flex-shrink-0 self-center shadow-md border-2 border-blue-500/30 hover:border-blue-400/50 hover:scale-105 text-sm sm:text-base w-full sm:w-auto"
          >
            Commencer
          </Link>
        </div>
      </div>
    </motion.div>
  );
}