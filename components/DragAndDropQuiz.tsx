import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { glossaryData } from '../data/glossaryData';
import { GlossaryTerm } from '../types';

const QUIZ_SIZE = 6;

type DropState = {
  termId: string | null;
  status: 'empty' | 'correct' | 'incorrect';
};

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const DraggableTerm: React.FC<{ term: GlossaryTerm, isPlaced: boolean }> = ({ term, isPlaced }) => {
  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('termId', term.id);
  };

  return (
    <div
      draggable={!isPlaced}
      onDragStart={onDragStart}
      className={`
        px-4 py-2 bg-slate-700 rounded-lg text-white font-semibold flex items-center gap-2
        transition-all duration-300
        ${isPlaced
          ? 'opacity-30 cursor-not-allowed'
          : 'cursor-grab hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-500/30'
        }
      `}
    >
      <term.Icon className="w-5 h-5" />
      {term.term}
    </div>
  );
};

const DropTarget: React.FC<{
  definitionTerm: GlossaryTerm,
  droppedTerm: GlossaryTerm | null,
  status: 'empty' | 'correct' | 'incorrect',
  onDrop: (definitionId: string, droppedTermId: string) => void,
}> = ({ definitionTerm, droppedTerm, status, onDrop }) => {
  
  const [isOver, setIsOver] = useState(false);

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOver(true);
  };

  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOver(false);
    const droppedTermId = e.dataTransfer.getData('termId');
    if (droppedTermId) {
      onDrop(definitionTerm.id, droppedTermId);
    }
  };
  
  const borderClasses = {
    empty: 'border-slate-600',
    correct: 'border-green-500 bg-green-500/10',
    incorrect: 'border-red-500 bg-red-500/10',
  };

  return (
    <div className="flex flex-col md:flex-row items-stretch gap-4">
      <div 
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={handleDrop}
        className={`
          w-full md:w-64 h-24 md:h-auto flex-shrink-0 border-2 border-dashed rounded-lg p-4
          flex items-center justify-center transition-all duration-300
          ${borderClasses[status]}
          ${isOver ? 'border-sky-500 bg-sky-500/10' : ''}
        `}
      >
        {droppedTerm ? (
           <div className={`px-4 py-2 rounded-lg text-white font-semibold flex items-center gap-2 ${status === 'correct' ? 'bg-green-600/50' : status === 'incorrect' ? 'bg-red-600/50' : 'bg-slate-600'}`}>
             <droppedTerm.Icon className="w-5 h-5" />
             {droppedTerm.term}
           </div>
        ) : (
          <span className="text-slate-500 text-sm">Arrastra aquí</span>
        )}
      </div>
      <div className="flex-grow bg-slate-800/50 p-4 rounded-lg flex items-center">
        <p className="text-slate-300">{definitionTerm.definition}</p>
      </div>
    </div>
  );
};


const DragAndDropQuiz: React.FC = () => {
  const [quizTerms, setQuizTerms] = useState<GlossaryTerm[]>([]);
  const [shuffledDefinitions, setShuffledDefinitions] = useState<GlossaryTerm[]>([]);
  const [dropStates, setDropStates] = useState<Record<string, DropState>>({});
  const [score, setScore] = useState(0);

  const allTerms = useMemo(() => glossaryData.flatMap(section => section.terms), []);

  const setupQuiz = useCallback(() => {
    const selectedTerms = shuffleArray(allTerms).slice(0, QUIZ_SIZE);
    setQuizTerms(selectedTerms);
    setShuffledDefinitions(shuffleArray(selectedTerms));
    
    const initialDropStates: Record<string, DropState> = {};
    selectedTerms.forEach(term => {
      initialDropStates[term.id] = { termId: null, status: 'empty' };
    });
    setDropStates(initialDropStates);
    setScore(0);
  }, [allTerms]);

  useEffect(() => {
    setupQuiz();
  }, [setupQuiz]);
  
  const handleDrop = (definitionId: string, droppedTermId: string) => {
    const isCorrect = definitionId === droppedTermId;
    
    setDropStates(prev => {
      const newStates = { ...prev };
      // Clear previous placements of this term, allowing it to be moved
      Object.keys(newStates).forEach(key => {
        if(newStates[key].termId === droppedTermId) {
            newStates[key] = { termId: null, status: 'empty' };
        }
      });

      newStates[definitionId] = {
        termId: droppedTermId,
        status: isCorrect ? 'correct' : 'incorrect',
      };
      return newStates;
    });
  };

  useEffect(() => {
    const newScore = Object.values(dropStates).filter(s => s.status === 'correct').length;
    setScore(newScore);
  }, [dropStates]);

  const placedTermIds = useMemo(() => new Set(Object.values(dropStates).map(s => s.termId).filter(Boolean)), [dropStates]);

  if (quizTerms.length === 0) {
    return <div>Cargando...</div>;
  }
  
  const isComplete = score === QUIZ_SIZE;

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 md:p-8">
      <div className="mb-8 p-4 bg-slate-900 rounded-lg flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex flex-wrap justify-center gap-3">
          {quizTerms.map(term => (
            <DraggableTerm key={term.id} term={term} isPlaced={placedTermIds.has(term.id)} />
          ))}
        </div>
        <div className="text-center sm:text-right">
          <div className="text-lg font-bold text-sky-400">Puntuación</div>
          <div className="text-3xl font-extrabold text-white">{score} / {QUIZ_SIZE}</div>
        </div>
      </div>

      <div className="space-y-6">
        {shuffledDefinitions.map(defTerm => {
          const state = dropStates[defTerm.id] || { termId: null, status: 'empty' };
          const droppedTerm = state.termId ? quizTerms.find(t => t.id === state.termId) : null;
          return (
            <DropTarget 
              key={defTerm.id}
              definitionTerm={defTerm}
              droppedTerm={droppedTerm ?? null}
              status={state.status}
              onDrop={handleDrop}
            />
          );
        })}
      </div>
      
      <div className="mt-8 text-center">
        {isComplete && (
            <div className="p-4 bg-green-500/20 text-green-300 rounded-lg mb-4 text-lg font-semibold">
                ¡Felicidades! Has completado el cuestionario.
            </div>
        )}
        <button 
          onClick={setupQuiz}
          className="px-8 py-3 bg-sky-600 text-white font-bold rounded-lg hover:bg-sky-500 transition-colors duration-300 shadow-lg shadow-sky-600/30"
        >
          Reiniciar Cuestionario
        </button>
      </div>
    </div>
  );
};

export default DragAndDropQuiz;
