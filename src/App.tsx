import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Terminal, Layers, Cpu, Network, Database, Workflow, ShieldCheck, X } from 'lucide-react';

type Project = {
  id: string;
  icon: React.ElementType;
  title: string;
  shortDescription: string;
  fullContent: React.ReactNode;
};

const projects: Project[] = [
  {
    id: 'SYS.01',
    icon: Network,
    title: 'Estratégias de implementação de IA para o Grupo Panorama',
    shortDescription: 'Estruturação de três cenários estratégicos para implementação de IA no Grupo Panorama, comparando arquitetura proprietária, criação de capacidade interna e automação low-code, com foco em viabilidade, governança, risco e escalabilidade operacional.',
    fullContent: (
      <div className="flex flex-col gap-8 text-contrast/90 leading-relaxed font-light">
        <div>
          <h5 className="text-xl font-medium text-contrast mb-3">Contexto</h5>
          <p>Este projeto consistiu na estruturação de três cenários estratégicos para viabilizar a implantação de uma solução de IA no Grupo Panorama, com foco em comparação de risco, maturidade técnica, capacidade de execução e aderência ao financiamento.</p>
          <p className="mt-3">O valor principal da entrega está na capacidade de comparar arquiteturas distintas e justificar escolhas técnicas e executivas com base em impacto real, não apenas em sofisticação técnica.</p>
        </div>

        <div className="system-border p-4 sm:p-6 bg-primary/5">
          <h5 className="text-xl font-medium text-contrast mb-3">Cenário A — Robustez tecnológica e profundidade</h5>
          <p>O Cenário A propõe a construção de um Neural CRM Core como núcleo orquestrador, estruturado em microsserviços sobre Kubernetes, com integração a Data Lake, Vector DB, LLM API, agentes especialistas e APIs de execução. A solução foi desenhada para operar como um sistema executivo, capaz de fechar o ciclo entre análise, decisão e ação.</p>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <strong className="text-contrast block mb-2 font-medium">Do ponto de vista técnico, isso evidencia capacidade de:</strong>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>arquitetar plataforma proprietária;</li>
                <li>orquestrar microsserviços;</li>
                <li>integrar dados, IA e automação;</li>
                <li>desenhar fluxo completo de execução;</li>
                <li>aplicar RAG em contexto operacional;</li>
                <li>estruturar governança técnica.</li>
              </ul>
            </div>
            <div>
              <strong className="text-contrast block mb-2 font-medium">Do ponto de vista executivo, o cenário maximiza:</strong>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>robustez;</li>
                <li>escalabilidade estrutural;</li>
                <li>auditabilidade;</li>
                <li>domínio da propriedade intelectual;</li>
                <li>potencial de investimento em I&D.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="system-border p-4 sm:p-6 bg-primary/5">
          <h5 className="text-xl font-medium text-contrast mb-3">Cenário B — Criação de emprego e sustentabilidade interna</h5>
          <p>O Cenário B prioriza a criação de capacidade interna permanente, com contratação de FTEs e execução de um MVP mais enxuto do Neural CRM Core. A estratégia desloca o foco de “construir o sistema mais sofisticado” para “construir uma base organizacional sustentável para operar e evoluir o sistema”.</p>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <strong className="text-contrast block mb-2 font-medium">Isso evidencia:</strong>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>desenho pragmático de MVP;</li>
                <li>planejamento de transferência de conhecimento;</li>
                <li>balanceamento entre complexidade e continuidade;</li>
                <li>visão operacional orientada a adoção real;</li>
                <li>alinhamento técnico com critérios de financiamento.</li>
              </ul>
            </div>
            <div>
              <strong className="text-contrast block mb-2 font-medium">No plano executivo, o cenário fortalece:</strong>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>criação líquida de emprego;</li>
                <li>sustentabilidade pós-consultoria;</li>
                <li>continuidade operacional;</li>
                <li>redução de dependência externa;</li>
                <li>maior probabilidade de aprovação.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="system-border p-4 sm:p-6 bg-primary/5">
          <h5 className="text-xl font-medium text-contrast mb-3">Cenário C — Custo-eficiência reforçada com low-code</h5>
          <p>O Cenário C adota n8n self-hosted / gerenciado como núcleo de automação, com Custom Connectors, APIs de LLM/ML gerenciadas, governança de IA e documentação de risco. A lógica aqui é pragmática: entregar automação com menor risco financeiro, maior velocidade e boa resiliência operacional, sem sobreengenharia.</p>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <strong className="text-contrast block mb-2 font-medium">Tecnicamente, o cenário demonstra:</strong>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>automação low-code com visão arquitetural;</li>
                <li>integração resiliente entre sistemas;</li>
                <li>uso de orquestração centralizada;</li>
                <li>consumo de IA via APIs gerenciadas;</li>
                <li>construção de conectores customizados;</li>
                <li>governança e compliance em automação;</li>
                <li>orientação a time-to-market.</li>
              </ul>
            </div>
            <div>
              <strong className="text-contrast block mb-2 font-medium">Executivamente, o valor está em:</strong>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>menor investimento relativo;</li>
                <li>implantação rápida;</li>
                <li>previsibilidade operacional;</li>
                <li>menor risco técnico;</li>
                <li>estrutura suficiente para evolução controlada.</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h5 className="text-xl font-medium text-contrast mb-3">Síntese do Projeto</h5>
          <p>Este projeto demonstra capacidade de estruturar, comparar e justificar três caminhos arquiteturais distintos, cada um adequado a um objetivo específico: robustez, sustentabilidade ou eficiência.</p>
          <p className="mt-3">A entrega evidencia domínio de:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
            <li>arquitetura de solução;</li>
            <li>análise de trade-offs;</li>
            <li>governança;</li>
            <li>funding estratégico;</li>
            <li>alinhamento entre tecnologia e negócio.</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 'SYS.02',
    icon: Layers,
    title: 'Automação com agentes de IA e webapresentação da proposta',
    shortDescription: 'Arquitetura de automação multicanal com agentes de IA para triagem e atendimento de primeira linha, complementada por uma webapresentação estratégica da proposta com identidade visual, narrativa executiva e deploy publicado.',
    fullContent: (
      <div className="flex flex-col gap-8 text-contrast/90 leading-relaxed font-light">
        <div>
          <h5 className="text-xl font-medium text-contrast mb-3">Contexto</h5>
          <p>Este projeto reúne duas iniciativas complementares:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
            <li>a proposta de automação com agentes de IA para atendimento e triagem multicanal;</li>
            <li>a transformação da proposta em uma webapresentação com identidade visual do cliente, estruturada como artefato de comunicação executável.</li>
          </ul>
          <p className="mt-3">O valor do projeto está em combinar arquitetura da solução com forma de apresentação da solução.</p>
        </div>

        <div className="system-border p-4 sm:p-6 bg-primary/5">
          <h5 className="text-xl font-medium text-contrast mb-3">Projeto 2A — Automação de atendimento e triagem com IA</h5>
          <p>A iniciativa técnica propõe uma camada de agentes de IA como primeira linha de comunicação, atendendo em canais como chatbot onsite, WhatsApp, redes sociais e com possibilidade de expansão para e-mail.</p>
          
          <div className="mt-4">
            <strong className="text-contrast block mb-2 font-medium">A dor tratada é operacional:</strong>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>alto volume de dúvidas repetitivas;</li>
              <li>sobrecarga de suporte;</li>
              <li>perda de foco de especialistas em tarefas de baixo valor;</li>
              <li>tempo de resposta inadequado para interações simples.</li>
            </ul>
          </div>

          <div className="mt-4">
            <strong className="text-contrast block mb-2 font-medium">A solução foi desenhada com:</strong>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>RAG sobre base validada;</li>
              <li>strict grounding;</li>
              <li>guardrails cognitivos;</li>
              <li>confidence threshold;</li>
              <li>handoff programático para humano;</li>
              <li>arquitetura multicanal expansível.</li>
            </ul>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <strong className="text-contrast block mb-2 font-medium">Isso evidencia competências em:</strong>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>automação de atendimento;</li>
                <li>orquestração de fluxos;</li>
                <li>RAG aplicado à operação;</li>
                <li>controle de risco;</li>
                <li>handoff humano;</li>
                <li>visão de produto operacional;</li>
                <li>arquitetura escalável por fases.</li>
              </ul>
            </div>
            <div>
              <strong className="text-contrast block mb-2 font-medium">Em termos executivos, o impacto é claro:</strong>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>redução de esforço do suporte;</li>
                <li>aumento de eficiência;</li>
                <li>melhor resposta em primeiro contato;</li>
                <li>liberação de especialistas para atividades de maior valor;</li>
                <li>base para escalar atendimento sem crescimento linear da equipe.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="system-border p-4 sm:p-6 bg-primary/5">
          <h5 className="text-xl font-medium text-contrast mb-3">Projeto 2B — Webapresentação estratégica da proposta</h5>
          <p>A segunda iniciativa converteu a proposta em uma webapresentação, criada com frontend no Google Studio, identidade visual do cliente, narrativa estratégica da solução e deploy via GitHub/Vercel.</p>
          <p className="mt-3">A dor aqui não era técnica, mas de comunicação de valor: transformar uma proposta complexa em um formato claro, profissional e facilmente assimilável.</p>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <strong className="text-contrast block mb-2 font-medium">Isso demonstra:</strong>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>capacidade de estruturar comunicação executiva;</li>
                <li>uso de frontend como instrumento de apresentação;</li>
                <li>aplicação de identidade visual;</li>
                <li>organização narrativa da proposta;</li>
                <li>publicação e deploy;</li>
                <li>entrega digital ponta a ponta.</li>
              </ul>
            </div>
            <div>
              <strong className="text-contrast block mb-2 font-medium">O valor executivo está em:</strong>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>aumentar a clareza da proposta;</li>
                <li>elevar percepção de profissionalismo;</li>
                <li>facilitar leitura por stakeholders técnicos e não técnicos;</li>
                <li>reforçar credibilidade da solução;</li>
                <li>tornar a entrega mais memorável e funcional.</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h5 className="text-xl font-medium text-contrast mb-3">Síntese do Projeto</h5>
          <p>Este projeto mostra que a solução não termina no desenho técnico. Ela também precisa ser apresentada, empacotada e entregue de forma convincente.</p>
        </div>
      </div>
    )
  },
  {
    id: 'SYS.03',
    icon: Workflow,
    title: 'Base de conhecimento RAG como sistema web',
    shortDescription: 'Base de conhecimento RAG estruturada como sistema web, com arquitetura modular, design system definido, uso de IA na implementação e deploy publicado via GitHub/Netlify.',
    fullContent: (
      <div className="flex flex-col gap-8 text-contrast/90 leading-relaxed font-light">
        <div>
          <h5 className="text-xl font-medium text-contrast mb-3">Contexto</h5>
          <p>Este projeto nasceu da necessidade de aprender RAG de forma mais profunda e prática, substituindo estudo linear por uma base de conhecimento navegável e estruturada.</p>
          <p className="mt-3">A proposta foi transformar um tema complexo em um sistema web consultável e expansível, com arquitetura clara, progressão lógica e uso orientado à aprendizagem.</p>
        </div>

        <div className="system-border p-4 sm:p-6 bg-primary/5">
          <h5 className="text-xl font-medium text-contrast mb-3">Problema / dor</h5>
          <p>A dor central era a dispersão do conhecimento sobre RAG:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
            <li>conteúdo fragmentado;</li>
            <li>aprendizado pouco fluido;</li>
            <li>dificuldade de progressão;</li>
            <li>necessidade de centralizar conceitos e arquiteturas.</li>
          </ul>
        </div>

        <div className="system-border p-4 sm:p-6 bg-primary/5">
          <h5 className="text-xl font-medium text-contrast mb-3">Solução desenvolvida</h5>
          <p>Foi criado um website em HTML, com apoio de IA na codificação, mas com direção explícita de:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
            <li>arquitetura;</li>
            <li>hierarquia;</li>
            <li>design system;</li>
            <li>organização modular.</li>
          </ul>
          
          <div className="mt-4">
            <strong className="text-contrast block mb-2 font-medium">O sistema foi estruturado para permitir:</strong>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>navegação progressiva;</li>
              <li>expansão sem reestruturação;</li>
              <li>consistência visual e estrutural;</li>
              <li>uso como base de estudo e consulta.</li>
            </ul>
          </div>
        </div>

        <div className="system-border p-4 sm:p-6 bg-primary/5">
          <h5 className="text-xl font-medium text-contrast mb-3">Competências técnicas demonstradas</h5>
          <p>O projeto evidencia:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
            <li>engenharia de prompt aplicada à construção;</li>
            <li>arquitetura de informação;</li>
            <li>design system;</li>
            <li>estruturação de sistemas web;</li>
            <li>organização modular de conteúdo;</li>
            <li>curadoria técnica;</li>
            <li>uso pragmático de IA;</li>
            <li>pensamento de escalabilidade estrutural.</li>
          </ul>
        </div>

        <div className="system-border p-4 sm:p-6 bg-primary/5">
          <h5 className="text-xl font-medium text-contrast mb-3">UX/UI e arquitetura</h5>
          <p>Do ponto de vista de experiência e estrutura, o valor está em:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
            <li>hierarquia de conteúdo clara;</li>
            <li>progressão de leitura natural;</li>
            <li>redução de fricção;</li>
            <li>consistência visual;</li>
            <li>base preparada para expansão.</li>
          </ul>
          <p className="mt-3">O mérito do projeto é arquitetural: ele foi organizado como sistema, não como página isolada.</p>
        </div>

        <div className="system-border p-4 sm:p-6 bg-primary/5">
          <h5 className="text-xl font-medium text-contrast mb-3">Execução e operação</h5>
          <p>Além da concepção, o projeto foi:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
            <li>exportado;</li>
            <li>importado no GitHub;</li>
            <li>publicado no Netlify.</li>
          </ul>
          
          <div className="mt-4">
            <strong className="text-contrast block mb-2 font-medium">Isso demonstra noção prática de:</strong>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>versionamento;</li>
              <li>deploy;</li>
              <li>publicação;</li>
              <li>ciclo básico de entrega digital.</li>
            </ul>
          </div>
        </div>

        <div>
          <h5 className="text-xl font-medium text-contrast mb-3">Síntese do Projeto</h5>
          <p>Este projeto mostra capacidade de transformar um tema técnico complexo em uma base de conhecimento funcional, escalável e navegável, unindo IA, arquitetura de informação e execução web.</p>
        </div>
      </div>
    )
  }
];

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center w-full relative">
      {/* Top Navigation Bar - System Status Style */}
      <header className="w-full max-w-7xl mx-auto px-6 py-4 flex justify-between items-center system-border-b text-xs font-mono text-primary uppercase tracking-wider absolute top-0 left-0 right-0 z-10 bg-bg/80 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="AR Logo" className="h-4 w-auto opacity-90" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span>System.Online</span>
          </div>
        </div>
        <div className="hidden sm:flex gap-6">
          <span>LAT: 41.1579</span>
          <span>LON: -8.6291</span>
          <span>SYS_VER: 1.0.0</span>
        </div>
      </header>

      {/* 1. Hero Section - Full Viewport Height */}
      <section className="w-full min-h-screen flex flex-col justify-center relative px-6 pt-24 pb-10 md:pb-16">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            className="flex flex-col gap-6 z-10"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="flex flex-col gap-2">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter text-accent uppercase flex flex-col w-full leading-[0.9]">
                <span className="self-start">André</span>
                <span className="self-start flex">
                  <span className="invisible select-none" aria-hidden="true">An</span>
                  <span>Rangel</span>
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-primary font-medium italic tracking-wide mt-2 whitespace-normal sm:whitespace-nowrap">
                Arquiteto de Sistemas e Soluções Inteligentes com IA.
              </h2>
            </motion.div>
            
            <motion.div variants={fadeIn} className="mt-6">
              <p className="text-lg md:text-xl text-contrast/80 leading-relaxed font-light whitespace-normal sm:whitespace-nowrap">
                Construindo ecossistemas escaláveis, integrados e governáveis.<br className="hidden sm:block" />
                Transformo complexidade operacional em arquiteturas limpas e eficientes.
              </p>
            </motion.div>
          </motion.div>

          {/* Skills Map Visualization */}
          <motion.div 
            className="relative w-full aspect-square max-w-[500px] mx-auto lg:ml-auto flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Outer dashed circle */}
            <div className="absolute inset-4 rounded-full border border-dashed border-primary/20"></div>
            {/* Middle dashed circle */}
            <div className="absolute inset-16 rounded-full border border-dashed border-primary/30"></div>
            {/* Inner solid circle */}
            <div className="absolute inset-32 rounded-full border border-primary/40"></div>
            
            {/* Center Core */}
            <div className="absolute w-24 h-24 bg-contrast flex flex-col items-center justify-center z-20 shadow-2xl" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
              <div className="w-3 h-3 bg-accent rounded-full mb-2"></div>
              <span className="text-[9px] font-mono text-primary tracking-widest uppercase">Core</span>
            </div>

            {/* Connecting Lines & Nodes */}
            <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 500 500">
              {/* IA Node (90%) */}
              <line x1="250" y1="250" x2="315" y2="185" stroke="#E05F1E" strokeWidth="1" strokeOpacity="0.9" />
              <circle cx="315" cy="185" r="5" fill="#E05F1E" />
              <text x="315" y="170" fontSize="10" fill="#93A8AE" fontFamily="monospace" textAnchor="middle" letterSpacing="1">IA</text>

              {/* SYS Node (80%) */}
              <line x1="250" y1="250" x2="220" y2="140" stroke="#E05F1E" strokeWidth="1" strokeOpacity="0.8" />
              <circle cx="220" cy="140" r="5" fill="#E05F1E" />
              <text x="220" y="125" fontSize="10" fill="#93A8AE" fontFamily="monospace" textAnchor="middle" letterSpacing="1">SYS</text>

              {/* OPS Node (80%) */}
              <line x1="250" y1="250" x2="169" y2="331" stroke="#E05F1E" strokeWidth="1" strokeOpacity="0.8" />
              <circle cx="169" cy="331" r="5" fill="#E05F1E" />
              <text x="169" y="351" fontSize="10" fill="#93A8AE" fontFamily="monospace" textAnchor="middle" letterSpacing="1">OPS</text>

              {/* API Node (75%) */}
              <line x1="250" y1="250" x2="371" y2="282" stroke="#E05F1E" strokeWidth="1" strokeOpacity="0.75" />
              <circle cx="371" cy="282" r="5" fill="#E05F1E" />
              <text x="371" y="267" fontSize="10" fill="#93A8AE" fontFamily="monospace" textAnchor="middle" letterSpacing="1">API</text>

              {/* AUTO Node (70%) */}
              <line x1="250" y1="250" x2="119" y2="215" stroke="#E05F1E" strokeWidth="1" strokeOpacity="0.7" />
              <circle cx="119" cy="215" r="5" fill="#E05F1E" />
              <text x="119" y="200" fontSize="10" fill="#93A8AE" fontFamily="monospace" textAnchor="middle" letterSpacing="1">AUTO</text>

              {/* DB Node (65%) */}
              <line x1="250" y1="250" x2="288" y2="392" stroke="#E05F1E" strokeWidth="1" strokeOpacity="0.65" />
              <circle cx="288" cy="392" r="5" fill="#E05F1E" />
              <text x="288" y="412" fontSize="10" fill="#93A8AE" fontFamily="monospace" textAnchor="middle" letterSpacing="1">DB</text>
              
              {/* Fading background lines */}
              <line x1="250" y1="250" x2="380" y2="50" stroke="#E05F1E" strokeWidth="1" strokeOpacity="0.1" />
              <line x1="250" y1="250" x2="450" y2="400" stroke="#E05F1E" strokeWidth="1" strokeOpacity="0.1" />
              <line x1="250" y1="250" x2="100" y2="420" stroke="#E05F1E" strokeWidth="1" strokeOpacity="0.1" />
            </svg>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="font-mono text-[10px] text-primary uppercase tracking-[0.2em] rotate-180" style={{ writingMode: 'vertical-rl' }}>
            Scroll
          </span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-primary/50 to-transparent"></div>
        </motion.div>
      </section>

      <main className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col gap-16 md:gap-24">
        
        {/* 2. Resumo Executivo */}
        <motion.section 
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 system-border-t pt-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="md:col-span-4">
            <span className="font-mono text-xs text-accent uppercase tracking-widest">01 // Manifesto</span>
          </motion.div>
          <motion.div variants={fadeIn} className="md:col-span-8 flex flex-col gap-6">
            <h3 className="text-2xl md:text-3xl font-medium leading-snug">
              Acredito que a arquitetura precede a interface e a solução precede a estética.
            </h3>
            <p className="text-contrast/70 leading-relaxed">
              Desenho e implemento sistemas onde a inteligência artificial atua como motor de eficiência operacional, sempre com foco em governança e pragmatismo técnico. Meu objetivo não é adotar a tecnologia mais recente, mas sim a arquitetura mais robusta e adequada para o problema de negócio.
            </p>
            <div className="flex flex-wrap gap-4 mt-4 font-mono text-xs text-primary">
              <span className="px-3 py-1 system-border rounded-full">Arquitetura antes de interface</span>
              <span className="px-3 py-1 system-border rounded-full">Solução antes de estética</span>
              <span className="px-3 py-1 system-border rounded-full">Governança antes de complexidade</span>
            </div>
          </motion.div>
        </motion.section>

        {/* 3. Projetos em Destaque (Bento Grid) */}
        <motion.section 
          className="flex flex-col gap-12 system-border-t pt-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn}>
            <span className="font-mono text-xs text-accent uppercase tracking-widest">02 // Ecossistemas Implementados</span>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                variants={fadeIn} 
                className={`group system-border p-6 sm:p-8 flex flex-col gap-8 hover:bg-contrast hover:text-bg transition-colors duration-300 cursor-pointer ${index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                onClick={() => setSelectedProject(project)}
              >
                <div className="flex justify-between items-start">
                  <project.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                  <span className="font-mono text-xs text-primary group-hover:text-bg/50">{project.id}</span>
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-3">{project.title}</h4>
                  <p className="text-sm text-contrast/70 group-hover:text-bg/70 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Modal Overlay for Projects */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 bg-contrast/40 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div 
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-bg w-full max-w-4xl max-h-full overflow-y-auto system-border shadow-2xl flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 bg-bg/95 backdrop-blur-md border-b border-primary/20 p-4 md:p-6 flex justify-between items-start z-10">
                  <div className="pr-4 md:pr-8">
                    <span className="font-mono text-xs text-accent uppercase tracking-widest mb-2 block">{selectedProject.id} // Dossier</span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-contrast leading-tight">{selectedProject.title}</h3>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-primary/10 rounded-full transition-colors text-contrast flex-shrink-0 -mt-1 -mr-1 md:mt-0 md:mr-0"
                    aria-label="Close modal"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="p-4 sm:p-6 md:p-10">
                  {selectedProject.fullContent}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 4. Capacidades Centrais */}
        <motion.section 
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 system-border-t pt-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="md:col-span-4">
            <span className="font-mono text-xs text-accent uppercase tracking-widest">03 // Capacidades Core</span>
          </motion.div>
          
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
            <motion.div variants={fadeIn} className="flex flex-col gap-3">
              <div className="flex items-center gap-3 mb-1">
                <Database className="w-4 h-4 text-accent" />
                <h4 className="font-medium">Arquitetura de Sistemas</h4>
              </div>
              <p className="text-sm text-contrast/70 leading-relaxed">
                Design de sistemas distribuídos, microsserviços e modelagem de dados escalável. Foco em resiliência e alta disponibilidade.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-col gap-3">
              <div className="flex items-center gap-3 mb-1">
                <Cpu className="w-4 h-4 text-accent" />
                <h4 className="font-medium">IA Aplicada a Negócios</h4>
              </div>
              <p className="text-sm text-contrast/70 leading-relaxed">
                Implementação pragmática de LLMs, RAG (Retrieval-Augmented Generation) e agentes autônomos integrados a fluxos reais.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-col gap-3">
              <div className="flex items-center gap-3 mb-1">
                <Terminal className="w-4 h-4 text-accent" />
                <h4 className="font-medium">Automação Operacional</h4>
              </div>
              <p className="text-sm text-contrast/70 leading-relaxed">
                Mapeamento e engenharia de workflows. Redução de atrito operacional através de automação inteligente e RPA.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-col gap-3">
              <div className="flex items-center gap-3 mb-1">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <h4 className="font-medium">Governança Técnica</h4>
              </div>
              <p className="text-sm text-contrast/70 leading-relaxed">
                Estabelecimento de padrões, segurança by design, observabilidade e controle de custos em infraestruturas cloud e IA.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* 5. Fechamento Executivo */}
        <motion.section 
          className="system-border-t pt-24 pb-12 flex flex-col items-center text-center gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-medium tracking-tight max-w-3xl">
            Sistemas claros, escaláveis e funcionais.
          </motion.h2>
          <motion.p variants={fadeIn} className="text-primary font-mono text-sm max-w-xl">
            Vamos construir a próxima fundação tecnológica do seu negócio.
          </motion.p>
          
          <motion.div variants={fadeIn} className="mt-8">
            <a 
              href="https://wa.me/+351936505168" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-4 bg-contrast text-bg hover:bg-accent transition-colors duration-300 font-medium text-xs sm:text-sm tracking-wide w-full sm:w-auto"
            >
              INICIAR PROTOCOLO DE CONTATO
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.section>

      </main>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-8 system-border-t flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-primary relative">
        {/* Left content (Links) */}
        <div className="flex gap-6 flex-1 justify-center md:justify-start w-full">
          <a href="https://www.linkedin.com/in/andre-rangel-tech-innovation/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LINKEDIN</a>
          <a href="https://github.com/Rangel-IA" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GITHUB</a>
        </div>
        
        {/* Center content */}
        <div className="text-center md:absolute md:left-1/2 md:-translate-x-1/2 whitespace-normal sm:whitespace-nowrap">
          &copy; {new Date().getFullYear()} ANDRÉ RANGEL. ALL RIGHTS RESERVED.
        </div>
        
        {/* Right spacer for flex balancing */}
        <div className="hidden md:block flex-1"></div>
      </footer>
    </div>
  );
}
