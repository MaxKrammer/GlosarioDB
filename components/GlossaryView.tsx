
import React from 'react';
import { glossaryData } from '../data/glossaryData';
import GlossaryCard from './GlossaryCard';

const GlossaryView: React.FC = () => {
  return (
    <div className="space-y-12">
      {glossaryData.map((section, index) => (
        <section key={index}>
          <div className="mb-8 max-w-4xl">
            <h2 className="text-3xl font-bold text-sky-400 mb-3 tracking-tight">{section.title}</h2>
            <p className="text-slate-400 text-lg">{section.introduction}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.terms.map(term => (
              <GlossaryCard key={term.id} term={term} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default GlossaryView;
