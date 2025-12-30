import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">
          Histórias de <span className="gradient-text">Transformação Real</span>
        </h2>

        <div className="max-w-4xl mx-auto bg-slate-50 rounded-2xl p-8 md:p-12 relative">
          <Quote className="absolute top-8 left-8 text-indigo-200 w-12 h-12 -z-10" />
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0">
               {/* Placeholder for Marina's image */}
               <img 
                 src="https://picsum.photos/200/200?random=1" 
                 alt="Marina" 
                 className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-md"
               />
            </div>
            
            <div className="flex-1">
              <div className="flex gap-1 text-yellow-400 mb-3">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-lg text-slate-700 italic mb-6">
                "Durante anos, evitei reuniões importantes e nunca compartilhava ideias. Minha carreira estagnou. Após 6 meses aplicando técnicas deste guia, fiz minha primeira apresentação para 40 pessoas. Tremi, mas completei. Hoje, 2 anos depois, lidero treinamentos e fui promovida duas vezes."
              </p>
              <div>
                <h4 className="font-bold text-slate-900">Marina</h4>
                <p className="text-sm text-slate-500">32 anos, Analista Financeira</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
                { name: "Carlos T.", role: "Estudante", text: "A técnica de reestruturação cognitiva mudou a forma como me vejo." },
                { name: "Ana P.", role: "Designer", text: "O capítulo sobre linguagem corporal é ouro puro. Me sinto poderosa." },
                { name: "Ricardo M.", role: "Vendas", text: "Simples, direto e científico. Sem promessas falsas, apenas trabalho real." }
            ].map((t, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-slate-600 text-sm mb-4">"{t.text}"</p>
                    <div className="font-bold text-slate-800 text-sm">{t.name}</div>
                    <div className="text-xs text-indigo-500">{t.role}</div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;