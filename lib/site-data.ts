import {
  Apple,
  BookOpenCheck,
  Brain,
  Ear,
  Flower2,
  Footprints,
  Heart,
  HeartHandshake,
  MessageCircleHeart,
  Microscope,
  MousePointer2,
  Puzzle,
  ScanSearch,
  Sparkles,
  Sprout,
  TreePine,
  UsersRound,
} from "lucide-react";

export const navigation = [
  { label: "Início", href: "/#inicio" },
  { label: "Clínica", href: "/#clinica" },
  { label: "Especialidades", href: "/#especialidades" },
  { label: "Abordagem", href: "/#abordagem" },
  { label: "Espaço", href: "/#espaco" },
  { label: "Contato", href: "/#contato" },
];

export const brandConcepts = [
  {
    icon: Heart,
    title: "Coração",
    text: "Presença e vínculo para que família e criança sejam ouvidas sem julgamento.",
  },
  {
    icon: TreePine,
    title: "Árvore",
    text: "Desenvolvimento como processo contínuo, influenciado por relações e contexto.",
  },
  {
    icon: Flower2,
    title: "Flor",
    text: "Respeito às diferentes formas de comunicar, aprender e participar do cotidiano.",
  },
  {
    icon: Microscope,
    title: "Ciência",
    text: "Evidências para orientar avaliação, objetivos terapêuticos e revisão do percurso.",
  },
];

export const supportSigns = [
  { icon: MessageCircleHeart, text: "Atraso ou desafios na fala" },
  { icon: UsersRound, text: "Dificuldade de interação" },
  { icon: Apple, text: "Seletividade alimentar" },
  { icon: MousePointer2, text: "Dificuldade de atenção" },
  { icon: BookOpenCheck, text: "Desafios na aprendizagem" },
  { icon: Ear, text: "Alterações sensoriais" },
  { icon: Footprints, text: "Dificuldades motoras" },
  { icon: HeartHandshake, text: "Necessidade de orientação familiar" },
];

export const careAreas = [
  {
    icon: Sprout,
    title: "Desenvolvimento infantil",
    text: "Leitura integrada de habilidades, necessidades, relações e participação no cotidiano.",
  },
  {
    icon: Sparkles,
    title: "Intervenção precoce",
    text: "Ações oportunas nos primeiros anos, definidas a partir de avaliação e prioridades reais.",
  },
  {
    icon: HeartHandshake,
    title: "Orientação familiar",
    text: "Informação clara e estratégias construídas com quem acompanha a criança todos os dias.",
  },
  {
    icon: ScanSearch,
    title: "Avaliação e acompanhamento",
    text: "Hipóteses cuidadosas, objetivos observáveis e acompanhamento documentado da evolução.",
  },
  {
    icon: Brain,
    title: "Neurodesenvolvimento",
    text: "Acompanhamento ético diante de atrasos, transtornos e diferenças do desenvolvimento.",
  },
  {
    icon: Puzzle,
    title: "Cuidado integrado",
    text: "Decisões compartilhadas entre áreas para evitar planos fragmentados ou contraditórios.",
  },
];

export const approachSteps = [
  { number: "01", title: "Escuta inicial", text: "A família apresenta a história, o que observa e o que mais precisa compreender neste momento." },
  { number: "02", title: "Avaliação cuidadosa", text: "A equipe reúne observação clínica e informações do cotidiano sem reduzir a criança a um rótulo." },
  { number: "03", title: "Plano individualizado", text: "Objetivos são definidos por relevância clínica e impacto possível na participação da criança." },
  { number: "04", title: "Intervenção integrada", text: "As áreas compartilham decisões e alinham estratégias com família e escola quando necessário." },
  { number: "05", title: "Revisão do percurso", text: "Evolução, dificuldades e novas prioridades são discutidas para ajustar o plano com transparência." },
];

export const faqs = [
  {
    question: "Preciso de diagnóstico para procurar a clínica?",
    answer: "Não. A família pode procurar a Arvorear ao perceber dúvidas ou desafios no desenvolvimento. O primeiro contato ajuda a compreender a demanda e orientar o caminho mais adequado.",
  },
  {
    question: "A clínica atende apenas crianças pequenas?",
    answer: "O atendimento é definido a partir da necessidade de cada criança e da possibilidade de cuidado da equipe. No primeiro contato, nossa equipe confirma se o perfil e a faixa etária podem ser acolhidos pela clínica.",
  },
  {
    question: "Como funciona o primeiro contato?",
    answer: "Começamos com uma conversa breve para conhecer a principal preocupação da família, explicar como a clínica trabalha e indicar o próximo passo possível.",
  },
  {
    question: "A família participa do processo?",
    answer: "Sim. A participação da família é parte importante do cuidado, com orientações, alinhamentos e espaço para dúvidas ao longo do acompanhamento.",
  },
  {
    question: "O acompanhamento é individualizado?",
    answer: "Sim. O planejamento considera a história, o contexto, as necessidades e as potências de cada criança. Objetivos e estratégias são revistos ao longo do processo.",
  },
];

export const spaceGallery = [
  {
    src: "/assets/arvorear/espaco/hero/hero-recepcao-real-16x9.webp",
    alt: "Vista ampla da recepção real da Clínica Arvorear com árvore cenográfica, balcão e logo na parede verde.",
    label: "Recepção",
    className: "col-span-2 row-span-2 md:col-span-7 md:row-span-2",
  },
  {
    src: "/assets/arvorear/espaco/ambientes/corredor-portas-coloridas-vertical.webp",
    alt: "Corredor real da Clínica Arvorear com portas coloridas e elementos lúdicos nas paredes.",
    label: "Caminhos com cor",
    className: "col-span-1 row-span-2 md:col-span-5 md:row-span-3",
  },
  {
    src: "/assets/arvorear/espaco/ambientes/sala-acolhimento-sofa.webp",
    alt: "Sala real de acolhimento com sofá, decoração suave e iluminação natural.",
    label: "Acolhimento familiar",
    className: "col-span-1 row-span-1 md:col-span-3 md:row-span-2",
  },
  {
    src: "/assets/arvorear/espaco/ambientes/sala-infantil-arcoiris.webp",
    alt: "Sala infantil real com tapete de arco-íris, mesa e parede delicada.",
    label: "Infância respeitada",
    className: "col-span-2 row-span-2 md:col-span-4 md:row-span-2",
  },
  {
    src: "/assets/arvorear/espaco/detalhes/teto-arvore-iluminada.webp",
    alt: "Detalhe real do teto com copa de árvore iluminada na Clínica Arvorear.",
    label: "Detalhes que acolhem",
    className: "col-span-1 row-span-2 md:col-span-5 md:row-span-2",
  },
  {
    src: "/assets/arvorear/espaco/ambientes/sala-terapia-motora.webp",
    alt: "Sala real de terapia com tatame verde, equipamentos e parede de escalada infantil.",
    label: "Espaço para desenvolver",
    className: "col-span-1 row-span-2 md:col-span-7 md:row-span-2",
  },
];
