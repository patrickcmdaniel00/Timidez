import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4 font-bold text-white text-lg">Liberte-se da Timidez</p>
        <div className="flex justify-center gap-6 mb-8 text-sm">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Contato</a>
        </div>
        <p className="text-xs text-slate-600">
          &copy; {new Date().getFullYear()} Todos os direitos reservados. Este produto não substitui o parecer médico profissional.
        </p>
      </div>
    </footer>
  );
};

export default Footer;