import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { BookOpen, Check } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-indigo-500 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-600 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-8"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 font-medium text-sm">
              🚀 O Guia Definitivo para Autoconfiança
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Liberte-se da <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Timidez</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Descubra como transformar sua timidez em coragem genuína e conquistar a vida social, profissional e pública que você sempre desejou. Baseado em neurociência e Terapia Cognitivo-Comportamental.
            </p>

            <div className="space-y-4">
              {[
                "Supere o medo do julgamento e rejeição",
                "Domine técnicas de oratória e postura (Método Caroline Goyder)",
                "Plano prático de 30 dias para transformação total"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Check size={14} className="text-green-400" />
                  </div>
                  <span className="text-slate-200">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button onClick={() => window.open('https://pay.kirvano.com/812499e9-117e-474f-aa79-6631b6a3d121', '_blank')}>
                Quero Transformar Minha Vida
              </Button>
              <Button variant="secondary" onClick={() => document.getElementById('metodo')?.scrollIntoView({behavior: 'smooth'})}>
                <BookOpen className="mr-2 h-5 w-5" />
                Ler Prévia
              </Button>
            </div>
            
            <p className="text-sm text-slate-400 pt-2">
              🔒 Compra segura • Acesso imediato • Garantia de 7 dias
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            {/* Book Cover Simulation */}
            <div className="relative mx-auto w-64 lg:w-80 aspect-[2/3] bg-white rounded-r-2xl rounded-l-sm shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.5)] transform rotate-y-12 rotate-3 hover:rotate-0 transition-transform duration-500 group cursor-pointer border-l-8 border-slate-200">
               <div className="absolute inset-0 bg-gradient-to-b from-indigo-600 to-purple-800 rounded-r-xl overflow-hidden flex flex-col p-6 text-center justify-between">
                  <div className="text-white/80 text-xs font-bold tracking-widest uppercase mt-4">Best Seller</div>
                  <div>
                    <h2 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter">Liberte-se<br/>da Timidez</h2>
                    <div className="w-16 h-1 bg-white mx-auto my-4"></div>
                    <p className="text-indigo-100 text-sm">O Guia Completo para Desenvolver Autoconfiança Autêntica</p>
                  </div>
                  <div className="mb-8 text-white/90 text-xs">
                    Inclui exercícios práticos e plano de 30 dias
                  </div>
               </div>
               {/* Shine effect */}
               <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none rounded-r-xl"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white text-indigo-900 p-4 rounded-xl shadow-xl border border-indigo-100 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <Check className="text-green-600 w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-sm">Validado Cientificamente</p>
                  <p className="text-xs text-slate-500">Baseado em estudos de Psicologia</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;