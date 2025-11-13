
import React, { useState } from 'react';
import GlossaryView from './components/GlossaryView';
import QuizView from './components/QuizView';
import { DatabaseIcon } from './components/icons';

type View = 'glossary' | 'quiz';

const App: React.FC = () => {
  const [view, setView] = useState<View>('glossary');

  const headerStyles = "flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-8 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-20 border-b border-slate-700";
  const buttonBaseStyles = "px-6 py-2 rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900";
  const activeBtnStyles = "bg-sky-500 text-white shadow-lg shadow-sky-500/30";
  const inactiveBtnStyles = "bg-slate-700 text-slate-300 hover:bg-slate-600";

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300">
      <header className={headerStyles}>
        <div className="flex items-center gap-4">
          <DatabaseIcon className="w-10 h-10 text-sky-400" />
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Glosario de Bases de Datos
          </h1>
        </div>
        <nav className="flex items-center gap-4 bg-slate-800 p-2 rounded-full">
          <button
            onClick={() => setView('glossary')}
            className={`${buttonBaseStyles} ${view === 'glossary' ? activeBtnStyles : inactiveBtnStyles}`}
          >
            Glosario
          </button>
          <button
            onClick={() => setView('quiz')}
            className={`${buttonBaseStyles} ${view === 'quiz' ? activeBtnStyles : inactiveBtnStyles}`}
          >
            Evaluar Conocimiento
          </button>
        </nav>
      </header>
      <main className="p-4 md:p-8">
        {view === 'glossary' ? <GlossaryView /> : <QuizView />}
      </main>
      <footer className="text-center p-6 text-slate-500 border-t border-slate-800 mt-8">
        <p>&copy; {new Date().getFullYear()} Glosario Interactivo. Creado con fines educativos.</p>
      </footer>
    </div>
  );
};

export default App;
