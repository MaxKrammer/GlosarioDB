
import React from 'react';
import DragAndDropQuiz from './DragAndDropQuiz';

const QuizView: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-sky-400 mb-4">¡Pon a Prueba tus Conocimientos!</h2>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          Arrastra cada término a su definición correcta. Es una forma divertida y rápida de comprobar lo que has aprendido.
        </p>
      </div>
      <DragAndDropQuiz />
    </div>
  );
};

export default QuizView;
