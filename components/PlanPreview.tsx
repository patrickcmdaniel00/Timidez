import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Mic, Wind, Eye, Calendar, ArrowRight } from 'lucide-react';
import { Feature, PlanWeek } from '../types';

const techniques: Feature[] = [
  {
    title: "Exposição Gradual",
    description: "Aprenda a 'Escada da Coragem'. Comece com desafios baixos (ex: dar bom dia ao porteiro) até desafios avançados.",
    icon: Shield
  },
  {
    title: "Voz e Presença",
    description: "Técnicas de Caroline Goyder para projetar voz e postura. O corpo influencia a mente: postura de poder gera confiança real.",
    icon: Mic
  },
  {
    title: "Mindfulness",
    description: "Pare de reagir automaticamente. Crie um espaço entre o estímulo e sua resposta para agir com calma.",
    icon: Wind
  },
  {
    title: "Visualização",
    description: "O cérebro não distingue imaginação de realidade. Treine o sucesso mentalmente antes do evento real.",
    icon: Eye
  }
];

const planWeeks: PlanWeek[] = [
  { week: "Semana 1", title: "Fundação", items: ["Diário da timidez", "Identificar pensamentos", "Respiração diafragmática"] },
  { week: "Semana 2", title: "Desafio Cognitivo", items: ["Questionar crenças limitantes", "Postura de poder", "Pequenas interações"] },
  { week: "Semana 3", title: "Exposição", items: ["Visualização criativa", "Exercícios vocais", "Participar de 1 evento social"] },
  { week: "Semana 4", title: "Integração", items: ["Desafio de coragem", "Apresentação simulada", "Celebrar vitórias"] },
];

const PlanPreview: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50" id="metodo">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Um Arsenal de <span className="text-indigo-600">Técnicas Comprovadas</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Não é apenas teoria. Combinamos TCC (Terapia Cognitivo-Comportamental), treinamento de atores e mindfulness em um método único.
          </p>
        </div>

        {/* Techniques Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {techniques.map((tech, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-100"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 text-indigo-600">
                <tech.icon size={24} />
              </div>
              <h3 className="font-bold text-lg text-slate-800 mb-2">{tech.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{tech.description}</p>
            </motion.div>
          ))}
        </div>

        {/* 30 Day Plan Timeline */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="bg-indigo-600 p-8 text-center text-white">
            <div className="flex items-center justify-center gap-2 mb-2 opacity-80 uppercase tracking-widest text-xs font-bold">
              <Calendar size={14} />
              Bônus Exclusivo
            </div>
            <h3 className="text-2xl md:text-3xl font-bold">Plano de Ação de 30 Dias</h3>
            <p className="text-indigo-100 mt-2">Um roteiro passo-a-passo para sair da estagnação</p>
          </div>
          
          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-4 gap-8">
              {planWeeks.map((week, idx) => (
                <div key={idx} className="relative">
                  {idx < 3 && <div className="hidden md:block absolute top-4 -right-4 text-slate-300">
                    <ArrowRight size={20} />
                  </div>}
                  <div className="text-xs font-bold text-indigo-600 uppercase mb-2">{week.week}</div>
                  <h4 className="font-bold text-xl text-slate-800 mb-4">{week.title}</h4>
                  <ul className="space-y-2">
                    {week.items.map((item, i) => (
                      <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PlanPreview;