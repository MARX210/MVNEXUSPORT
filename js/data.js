// DADOS DO PORTFÓLIO: edite aqui para atualizar o site
/* ===== EDITE AQUI ===== */
const PROFILE={whatsapp:"5593991060012",email:"marxgama2018@gmail.com",github:"https://github.com/MARX210"};
const WORKS=[ // {title, cat, desc, url, img}
 {title:"ElaClean",cat:"Landing page",desc:"Landing page cinematográfica de higienização de estofados, com antes/depois e orçamento no WhatsApp.",url:"https://elaclean-bh69.vercel.app",img:"assets/elaclean.webp"},
 {title:"Zoopet Pet Shop",cat:"Landing page",desc:"Landing page mobile first: leva e traz, banho e tosa, rações e status aberto/fechado em tempo real.",url:"https://zoopetshop.vercel.app/",img:"assets/zoopet.webp"},
 {title:"Super Cell",cat:"Site institucional",desc:"Site institucional, vitrine de produtos e painel administrativo. Vite, JavaScript e Neon Postgres.",url:"https://supercell-pearl.vercel.app/",img:"assets/supercell.webp"},
 {title:"ConectaTrampo",cat:"Sistema web",desc:"Vagas e freelas em Joinville: publicar, gerenciar e denunciar oportunidades. Next.js.",url:"https://conectatrampo-sktc.vercel.app",img:""},
 {title:"Investimax",cat:"Sistema web",desc:"Gestão financeira pessoal com dashboard, investimentos e insights de IA (Gemini). Next.js 15.",url:"https://investimax.vercel.app/login",img:""},
 {title:"Pulso",cat:"Sistema web",desc:"Saúde, treinos e nutrição: peso, fichas de treino, macros e constância diária.",url:"https://pulso-nu-brown.vercel.app",img:""},
 {title:"Tuff Suplementos",cat:"Site institucional",desc:"Vitrine de produtos e painel administrativo.",url:"",img:""},
 {title:"DREATM · SEDUC",cat:"Sistema web",desc:"Gestão do AEE da DRE Altamira: semáforo de atendimento, PDI, laudos e ofícios à SEDUC-PA. Código no GitHub.",url:"https://github.com/MARX210/DREATM",img:""},
 {title:"Psic Marlon",cat:"Sistema web",desc:"Agendamento e gestão de pacientes para psicólogos: agenda, financeiro e leads. Código no GitHub.",url:"https://github.com/MARX210/psicmarlon",img:"assets/psicmarlon.webp"},
 {title:"STUDIOMB21",cat:"Sistema web",desc:"Gestão de salão em Next.js, TypeScript e PostgreSQL.",url:"",img:""},
 {title:"Clínica Amorim",cat:"Marketing",desc:"Conteúdo e comunicação para clínica multiprofissional.",url:"",img:""},
 {title:"EV_DESIGNER",cat:"Motion",desc:"Vídeo publicitário de motion design em 5 cenas.",url:"",img:""},
 {title:"MV NEXUS · Logo Reveal",cat:"Motion",desc:"Revelação cinética da logo, 8 segundos.",url:"",img:""}
];
const VIDEO="assets/logo-reveal.mp4";
const VIDEO_B64="";
const POSTER="assets/poster.webp";
/* ======================= */

const DET={
"ElaClean":{s:"No ar",p:"Um negócio local de higienização precisava mostrar o serviço com qualidade e facilitar o pedido de orçamento.",f:["Hero cinematográfico com navegação em pílula","Texto com revelação letra a letra ao rolar","Passo a passo e antes/depois","Avaliações do Google e contato","Orçamento direto pelo WhatsApp"],t:["React","Vite","TypeScript","Vercel"]},
"Zoopet Pet Shop":{s:"No ar",p:"Um pet shop local queria converter visitas em agendamentos pelo WhatsApp.",f:["Leva e traz em 4 passos","Categorias de produtos e delivery","Avaliações de clientes no Google","Status aberto/fechado em tempo real","Mobile first, sem back-end"],t:["HTML","CSS","JavaScript","Vercel"]},
"Super Cell":{s:"No ar",p:"Uma loja de celulares e assistência técnica precisava de vitrine online e controle do próprio conteúdo.",f:["Site institucional e vitrine de produtos","Painel administrativo","Vídeo de abertura responsivo","Banco de dados Postgres"],t:["Vite","JavaScript","Neon Postgres","Vercel"]},
"ConectaTrampo":{s:"No ar",p:"Reunir vagas e trabalhos freelance em um só lugar, de forma simples para quem divulga e para quem procura.",f:["Listagem e detalhes das oportunidades","Publicação com link próprio de gerenciamento","Editar, encerrar, reativar e excluir","Denúncia de oportunidades suspeitas","Termos, privacidade e cookies"],t:["Next.js","TypeScript","Banco de dados"]},
"Investimax":{s:"No ar",p:"Organizar as finanças pessoais e entender para onde vai o dinheiro.",f:["Dashboard de receitas, despesas e saldo","Transações por categoria e recorrência","Gestão de investimentos","Análise de gastos com IA (Gemini)","Login com senha criptografada e JWT","Tema claro/escuro"],t:["Next.js 15","TypeScript","Tailwind","shadcn/ui","Recharts","Genkit"]},
"Pulso":{s:"No ar",p:"Centralizar treino, nutrição e saúde em um único app.",f:["Peso e evolução em gráficos","Fichas de treino com cronômetro de descanso","Refeições e macros","Ofensiva (streak) diária","Calendário e lembretes","Dados isolados por usuário"],t:["React","Vite","TypeScript","Banco de dados"]},
"Tuff Suplementos":{p:"Uma loja de suplementos e roupas precisava de vitrine e controle dos produtos.",f:["Site institucional","Vitrine de produtos","Painel administrativo restrito ao dono"]},
"DREATM · SEDUC":{s:"Código no GitHub",p:"Acompanhar o atendimento educacional especializado nos 8 municípios da regional.",f:["Semáforo de conformidade do atendimento","Elaboração e vigência do PDI","Laudos e estudos de caso","Gestão de professores de AEE e cuidadores","Emissão de ofícios à SEDUC","Estatísticas dos 8 municípios"],t:["React","Vite","TypeScript","API na Vercel","Neon Postgres"]},
"Psic Marlon":{s:"Código no GitHub",p:"Simplificar o cadastro de pacientes e o agendamento para psicólogos.",f:["Cadastro completo com ID único","Endereço automático por CEP (ViaCEP)","Agenda com horários disponíveis","Financeiro, leads e profissionais","Tema claro/escuro"],t:["Next.js","TypeScript","Tailwind"]},
"STUDIOMB21":{p:"Gestão do dia a dia de um salão em um único sistema.",t:["Next.js","TypeScript","PostgreSQL"]},
"Clínica Amorim":{p:"Comunicação e conteúdo para uma clínica multiprofissional de psicologia, neuropsicologia, psicopedagogia e nutrição."},
"EV_DESIGNER":{p:"Vídeo publicitário em motion design para uma marca de design gráfico.",f:["Roteiro em 5 cenas"]},
"MV NEXUS · Logo Reveal":{video:1,p:"Dar movimento à identidade da marca MV NEXUS.",f:["Revelação cinética da logo","Versão vertical 9:16 de 8 segundos"],t:["Motion design","Edição de vídeo"]}
};
