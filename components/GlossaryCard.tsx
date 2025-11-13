
import React from 'react';
import { GlossaryTerm } from '../types';

interface GlossaryCardProps {
  term: GlossaryTerm;
}

const GlossaryCard: React.FC<GlossaryCardProps> = ({ term }) => {
  const { Icon } = term;

  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 flex flex-col h-full transition-all duration-300 hover:border-sky-500 hover:shadow-2xl hover:shadow-sky-500/10 hover:-translate-y-1">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-slate-700 p-2 rounded-lg">
          <Icon className="w-8 h-8 text-sky-400" />
        </div>
        <h3 className="text-xl font-bold text-white">{term.term}</h3>
      </div>
      <p className="text-slate-400 flex-grow">{term.definition}</p>
    </div>
  );
};

export default GlossaryCard;
