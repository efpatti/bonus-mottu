// Configurações globais
export const config = {
 // Navbar
 navItems: [
  { name: "Início", href: "#" },
  { name: "Moto", href: "#moto" },
  { name: "Carro", href: "#carro" },
 ],

 // Classes para estilização
 classes: {
  link: {
   base:
    "transition-all duration-300 ease-in-out font-medium border-b-2 border-transparent",
   active: "text-white border-green-400",
   inactive: "text-gray-300 hover:text-white hover:border-green-400",
   desktop: "px-3 py-2 text-sm",
   mobile: "px-3 py-2 text-base block",
  },
 },

 // Conteúdo das seções
 content: {
  hero: {
   title: "Aumente seus Ganhos com Nosso Programa de Bônus!",
   subtitle: "Seu desempenho merece o nosso reconhecimento",
   eligibilityTitle:
    "Quem pode participar do Programa de Bonificação Individual?",
  },

  about: {
   title: "Reconhecendo quem faz a diferença!",
   subtext: "Valorizamos o seu esforço.",
  },

  benefits: [
   { icon: "check-circle", text: "Reconhecimento pelo seu trabalho" },
   { icon: "check-circle", text: "Bônus financeiro mensal" },
   { icon: "check-circle", text: "Incentivo para melhoria contínua" },
  ],

  participation: [
   { icon: "star", text: "Atender aos critérios de desempenho" },
   { icon: "star", text: "Manter consistência nos resultados" },
   { icon: "star", text: "Seguir as diretrizes da empresa" },
  ],

  criteria: {
   title: "Critérios de Desempenho",
   subtitle: "Cumpra esses requisitos para habilitar sua equipe",
   items: [
    { icon: "group", title: "Prestadores", text: "4 prestadores previstos" },
    {
     icon: "time-five",
     title: "Tempo de Atendimento",
     text: "80% dos casos abaixo de 90 min na rua",
    },
    {
     icon: "car",
     title: "Frota",
     text:
      "Menos de 0,3% da frota em apropriação excluindo os casos maiores que 120 dias)",
    },
   ],
   important: {
    title: "Importante",
    text:
     "Todas as regras devem ser cumpridas simultaneamente para que a filial seja elegível ao programa de bonificação. Filiais que não atenderem aos critérios estabelecidos acima não terão direito ao bônus individual do colaborador.",
   },
  },
  redirect: {
   moto: [{ name: "Motos", href: "motos.html" }],
   carro: [{ name: "Carros", href: "carros.html" }],
  },
 },
};
