import React, { useState } from 'react';
import { Ruler, CheckCircle2, RefreshCcw } from 'lucide-react';

const InteractiveAssessment: React.FC = () => {
  const [scores, setScores] = useState({
    strangers: 3,
    eyeContact: 4,
    meetings: 2,
    presentation: 1
  });

  const [showResult, setShowResult] = useState(false);

  const handleSliderChange = (key: keyof typeof scores, value: string) => {
    setScores(prev => ({ ...prev, [key]: parseInt(value) }));
    setShowResult(false);
  };

  const calculateProgress = () => {
    const total = (Object.values(scores) as number[]).reduce((a, b) => a + b, 0);
    const max = 40;
    return Math.round((total / max) * 100);
  };

  const getFeedback = (percentage: number) => {
    if (percentage < 30) return "Sua timidez está limitando severamente seu potencial. O ebook é essencial para você começar do zero.";
    if (percentage < 60) return "Você tem potencial, mas o medo do julgamento trava seu crescimento. As técnicas do Capítulo 3 vão mudar isso.";
    return "Você está no caminho certo, mas pode atingir a excelência e liderança com o refinamento do Capítulo 5.";
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100 max-w-3xl mx-auto my-12">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center justify-center gap-2">
          <Ruler className="text-indigo-600" />
          Autoavaliação Interativa
        </h3>
        <p className="text-slate-600 mt-2">
          Baseado na ferramenta da página 19. Como você se sente hoje? (1 = Muito Difícil, 10 = Muito Confortável)
        </p>
      </div>

      <div className="space-y-6">
        {[
          { key: 'strangers', label: 'Iniciar conversas com desconhecidos' },
          { key: 'eyeContact', label: 'Manter contato visual durante diálogos' },
          { key: 'meetings', label: 'Falar em reuniões ou eventos profissionais' },
          { key: 'presentation', label: 'Fazer apresentações públicas' }
        ].map((item) => (
          <div key={item.key}>
            <div className="flex justify-between mb-2">
              <label className="font-medium text-slate-700">{item.label}</label>
              <span className="font-bold text-indigo-600">{scores[item.key as keyof typeof scores]}/10</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={scores[item.key as keyof typeof scores]}
              onChange={(e) => handleSliderChange(item.key as keyof typeof scores, e.target.value)}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-indigo-50 rounded-xl">
        <div className="flex items-center justify-between mb-2">
          <span className="text-lg font-bold text-slate-800">Seu Nível de Confiança Atual</span>
          <span className="text-2xl font-black text-indigo-600">{calculateProgress()}%</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-4 mb-4">
          <div 
            className="bg-indigo-600 h-4 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${calculateProgress()}%` }}
          ></div>
        </div>
        <p className="text-slate-700 italic border-l-4 border-indigo-400 pl-4">
          "{getFeedback(calculateProgress())}"
        </p>
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-slate-500 mb-4">
          Este ebook oferece um plano de 30 dias para levar esses números para 10/10.
        </p>
        <button className="flex items-center justify-center mx-auto text-indigo-600 font-semibold hover:text-indigo-800 transition-colors gap-2"
          onClick={() => setScores({ strangers: 1, eyeContact: 1, meetings: 1, presentation: 1 })}
        >
          <RefreshCcw size={16} /> Reiniciar Teste
        </button>
      </div>
    </div>
  );
};

export default InteractiveAssessment;