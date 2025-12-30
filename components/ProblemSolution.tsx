import React from 'react';
import { motion } from 'framer-motion';
import { Brain, AlertCircle, User, Activity, Zap } from 'lucide-react';
import { ComparisonItem } from '../types';

const comparisonData: ComparisonItem[] = [
  {
    title: "Timidez",
    description: "Desconforto temporário e superável com prática.",
    points: ["Tensão em eventos sociais", "Autoconsciência exagerada", "Desejo de participar, mas medo bloqueia"],
    color: "bg-indigo-50"
  },
  {
    title: "Ansiedade Social",
    description: "Condição clínica intensa e persistente.",
    points: ["Evitação total de situações", "Sintomas físicos intensos (tremores)", "Interferência na vida diária"],
    color: "bg-purple-50"
  },
  {
    title: "Introversão",
    description: "Preferência natural por ambientes calmos.",
    points: ["Recarrega energia sozinho", "Não é patologia", "Conforto social quando descansado"],
    color: "bg-slate-50"
  }
];

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="sobre">
      <div className="container mx-auto px-4">
        
        {/* Definition Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Você sabe o que realmente é a <span className="gradient-text">Timidez?</span>
          </h2>
          <p className="text-lg text-slate-600">
            Muitas pessoas confundem timidez com introversão ou ansiedade social grave. Entender onde você está é o primeiro passo para a mudança.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {comparisonData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${item.color} p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow duration-300`}
            >
              <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm mb-6 h-10">{item.description}</p>
              <ul className="space-y-3">
                {item.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                    <div className="mt-1 min-w-[6px] h-[6px] rounded-full bg-indigo-500"></div>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Science Section - Based on PDF Page 4 */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-32 bg-indigo-600 rounded-full blur-[100px] opacity-20"></div>
          
          <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
            <div className="md:w-1/2">
              <div className="flex items-center gap-3 mb-6 text-indigo-400 font-semibold uppercase tracking-wider text-sm">
                <Brain className="w-5 h-5" />
                A Ciência por trás
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Por que você "trava"?<br/>Culpe a <span className="text-indigo-400">Amígdala</span>.</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Neurologicamente, a timidez está relacionada à hiperatividade da amígdala — a região cerebral responsável pelo medo. Quando você se sente observado, ela dispara um alarme falso de "perigo", mesmo sem ameaça real.
              </p>
              <div className="p-4 bg-white/10 rounded-xl border border-white/10 backdrop-blur-sm">
                <p className="text-indigo-200 text-sm font-medium">
                  💡 A boa notícia? A <span className="text-white">Neuroplasticidade</span> permite que você reprogramámos essas respostas. Nosso guia ensina exatamente como fazer isso.
                </p>
              </div>
            </div>
            
            <div className="md:w-1/2 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {[
                   { icon: AlertCircle, title: "1. Ameaça Social", desc: "Cérebro vê julgamento como perigo" },
                   { icon: Zap, title: "2. Ativação", desc: "Resposta de luta, fuga ou congelamento" },
                   { icon: Activity, title: "3. Sintomas", desc: "Coração acelerado, rubor, suor" },
                   { icon: User, title: "4. Reforço", desc: "Evitar situações piora o medo" }
                 ].map((step, i) => (
                   <div key={i} className="bg-slate-800/50 p-5 rounded-xl border border-slate-700 hover:bg-slate-800 transition-colors">
                     <step.icon className="w-8 h-8 text-indigo-400 mb-3" />
                     <h4 className="font-bold text-white mb-1">{step.title}</h4>
                     <p className="text-xs text-slate-400">{step.desc}</p>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProblemSolution;