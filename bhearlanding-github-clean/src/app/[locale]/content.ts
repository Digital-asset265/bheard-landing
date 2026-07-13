export type Locale = "pt" | "en";

export const copy: Record<Locale, any> = {
  pt: {
    nav: {
      product: "Produto",
      offers: "Ofertas",
      how: "Como funciona",
      social: "Provas sociais",
      faq: "FAQ",
      cta: "Aceder à app",
    },

    hero: {
      badge: "BHeard • AI Voice Receptionist",
      h1: "Nunca mais percas uma chamada.\nTransforma chamadas em clientes.",
      p: "A BHeard atende chamadas automaticamente, qualifica contactos e cria leads prontas a fechar. Sem equipa extra, sem chamadas perdidas.",
      ctaPrimary: "Começar",
      ctaSecondary: "Ver ofertas",
      note: "AI Voice • Leads • 24/7 • Mercado US",
    },

    blocks: {
      one: {
        title: "Atendimento automático",
        desc: "A IA atende todas as chamadas em segundos, com voz natural.",
      },
      two: {
        title: "Captação de leads",
        desc: "Cada chamada transforma-se numa oportunidade real de negócio.",
      },
      three: {
        title: "Qualificação",
        desc: "Filtra e organiza os contactos antes de chegares a eles.",
      },
      four: {
        title: "Disponível 24/7",
        desc: "Mesmo fora de horas, a tua empresa continua a atender.",
      },
    },

    how: {
      title: "Como funciona",
      steps: [
        {
          t: "Configuramos o número",
          d: "Compramos e configuramos um número dedicado para ligar ao sistema de AI.",
        },
        {
          t: "A IA atende as chamadas",
          d: "Cada chamada é atendida instantaneamente com voz humana.",
        },
        {
          t: "Recebes leads prontas",
          d: "Os dados chegam organizados e prontos para fechar negócio.",
        },
      ],
    },

    social: {
      title: "Provas sociais",
      subtitle: "Resultados reais de empresas que deixaram de perder chamadas.",
      pills: ["Mais leads", "Mais vendas", "Menos chamadas perdidas", "Mais controlo"],
      cards: [
        {
          quote: "Deixámos de perder chamadas e começámos a fechar mais negócios logo na primeira semana.",
          who: "Michael R., Empresa de serviços",
        },
        {
          quote: "Agora cada chamada conta — e já não precisamos de atender tudo manualmente.",
          who: "Sarah M., Dona de negócio",
        },
        {
          quote: "As leads chegam organizadas e prontas para agir. Mudou o jogo.",
          who: "Daniel T., Equipa comercial",
        },
      ],
    },

    faq: {
      title: "FAQ",
      items: [
        {
          q: "A IA substitui a equipa?",
          a: "Michael R., Roofing Owner — Não. A IA trata do primeiro contacto e da qualificação, para a tua equipa focar-se em fechar negócios.",
        },
        {
          q: "Funciona fora de horas?",
          a: "Sarah M., Practice Manager — Sim. A IA atende chamadas 24/7, incluindo noites e fins de semana.",
        },
        {
          q: "Que dados são recolhidos?",
          a: "Daniel T., Operations Manager — Nome, telefone, morada e motivo do contacto, tudo organizado automaticamente para follow-up rápido.",
        },
      ],
    },

    footer: {
      rights: "Todos os direitos reservados.",
      contact: "Contacto",
    },
  },

  en: {
    nav: {
      product: "Product",
      offers: "Offers",
      how: "How it works",
      social: "Social proof",
      faq: "FAQ",
      cta: "Open app",
    },

    hero: {
      badge: "BHeard • AI Voice Receptionist",
      h1: "Never miss another call.\nTurn every call into revenue.",
      p: "BHeard answers calls instantly, qualifies prospects and creates ready-to-close leads — without adding staff or missing opportunities.",
      ctaPrimary: "Get Started",
      ctaSecondary: "See offers",
      note: "AI Voice • Leads • 24/7 • US Market",
    },

    blocks: {
      one: {
        title: "Automatic call answering",
        desc: "AI answers every call within seconds using a natural voice.",
      },
      two: {
        title: "Lead capture",
        desc: "Every call becomes a real business opportunity.",
      },
      three: {
        title: "Qualification",
        desc: "Filters and organizes contacts before they reach your team.",
      },
      four: {
        title: "Available 24/7",
        desc: "Your business keeps answering, even after hours.",
      },
    },

    how: {
      title: "How it works",
      steps: [
        {
          t: "We configure the number",
          d: "We buy and configure a dedicated number and connect it to the AI system.",
        },
        {
          t: "AI answers your calls",
          d: "Every incoming call is answered instantly with a human-like voice.",
        },
        {
          t: "Receive qualified leads",
          d: "You get structured lead data ready for follow-up and closing.",
        },
      ],
    },

    social: {
      title: "Social proof",
      subtitle: "Real results from businesses that stopped missing calls.",
      pills: ["More leads", "More sales", "Fewer missed calls", "More control"],
      cards: [
        {
          quote: "We stopped missing calls completely — and closed more jobs in the first week.",
          who: "Michael R., Service business owner",
        },
        {
          quote: "Now every call is handled instantly without needing extra staff.",
          who: "Sarah M., Business owner",
        },
        {
          quote: "Leads arrive organized and ready to act on. Game changer.",
          who: "Daniel T., Sales team",
        },
      ],
    },

    faq: {
      title: "FAQ",
      items: [
        {
          q: "Does the AI replace my team?",
          a: "Michael R., Roofing Owner — No. It handles first contact and qualification so your team can focus on closing deals.",
        },
        {
          q: "Does it work after hours?",
          a: "Sarah M., Practice Manager — Yes. The AI answers calls 24/7, including nights and weekends.",
        },
        {
          q: "What data is collected?",
          a: "Daniel T., Operations Manager — Name, phone number, address and reason for the call — all structured automatically for fast follow-up.",
        },
      ],
    },

    footer: {
      rights: "All rights reserved.",
      contact: "Contact",
    },
  },
};