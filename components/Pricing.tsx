import React from 'react';
import Button from './Button';
import { CheckCircle2, Lock, Download } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 to-slate-900 text-white" id="pricing">
      <div className="container mx-auto px-4 text-center">
        
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Sua Nova História Começa Agora</h2>
        <p className="text-indigo-200 text-lg mb-12 max-w-2xl mx-auto">
          "Confiança não é ausência de medo, mas a coragem de agir apesar dele." - Caroline Goyder. Não deixe para amanhã a vida que você merece hoje.
        </p>

        <div className="max-w-md mx-auto bg-white text-slate-900 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold mb-2">Oferta Especial de Lançamento</div>
            <h3 className="text-4xl font-extrabold mb-4">R$ 29,90</h3>
            <p className="text-slate-500 text-sm mb-6">Pagamento único • Acesso vitalício</p>
            
            <div className="space-y-4 text-left mb-8">
              {[
                "Ebook Completo (PDF de Alta Qualidade)",
                "Plano de Ação de 30 Dias",
                "Modelos de Diário da Timidez",
                "Checklist de Preparação para Eventos",
                "Áudios de Meditação Guiada (Bônus)"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Button 
              fullWidth 
              className="text-lg h-14 shadow-xl shadow-indigo-500/20"
              onClick={() => window.open('https://pay.kirvano.com/812499e9-117e-474f-aa79-6631b6a3d121', '_blank')}
            >
              <Download className="mr-2 h-5 w-5" />
              Baixar Agora
            </Button>
          </div>
          <div className="bg-slate-50 p-4 border-t border-slate-100 flex items-center justify-center gap-2 text-sm text-slate-500">
            <Lock className="w-4 h-4" />
            Pagamento 100% Seguro via Kirvano
          </div>
        </div>

        <div className="mt-12 text-slate-400 text-sm">
          <p>Garantia incondicional de 7 dias. Se não gostar, devolvemos seu dinheiro.</p>
        </div>

      </div>
    </section>
  );
};

export default Pricing;