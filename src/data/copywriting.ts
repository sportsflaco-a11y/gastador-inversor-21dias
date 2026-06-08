export interface UnlockItem {
  num: string;
  title: string;
  description: string;
  iconName: "Layers" | "EyeOff" | "Zap" | "RefreshCw" | "BarChart";
  highlight: string;
}

export interface TargetItem {
  num: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: "Hammer" | "RotateCcw" | "TrendingUp" | "ShieldAlert";
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface BonusItem {
  badge: string;
  num: string;
  title: string;
  paragraphs: string[];
  iconName: "Trophy" | "FileSpreadsheet" | "Zap";
  visualLabel: string;
}

export interface ExpectationItem {
  num: string;
  title: string;
  points: string[];
  tagColor: string;
}

export const copywriting = {
  hero: {
    badge: "Reto Financiero de 21 Días",
    title: "De Gastador Compulsivo",
    titleAccent: "Inversor",
    titleSuffix: "en 21 Días",
    promo: "Reprograma tus hábitos y comienza a acumular capital en tres semanas.",
    subPromo: "Sin dejar de disfrutar la vida, sin presupuestos imposibles, sin sentirte restringido. Solo decisiones estratégicas — incluso si siempre gastaste todo.",
    ctaMain: "EMPEZAR MI TRANSFORMACIÓN AHORA",
    ctaSec: "Hablemos de tu caso"
  },
  
  theProblem: {
    badge: "Un Diagnóstico Incómodo pero Necesario",
    exerciseTitle: "Haz un ejercicio incómodo:",
    exerciseQuote: "Piensa cuánto dinero has ganado durante los últimos 5 años. Ahora pregúntate: ¿Dónde está?",
    exerciseStats: [
      { label: "Trabajo duro", status: "SOPORTADO" },
      { label: "Madrugones", status: "OLVIDADOS" },
      { label: "Estrés", status: "ACUMULADO" },
      { label: "Patrimonio actual", status: "$0.00" }
    ],
    highlightQuote: "El dinero se ha ido de tu cuenta bancaria en pequeñas decisiones que parecían inofensivas.",
    painStepsTitle: "LA ANESTESIA DEL PEQUEÑO GASTO",
    painSteps: ["No duele gastar $20", "No duele gastar $50", "No duele gastar $100"],
    painRef: "No duele en el momento. Lo que duele de verdad es mirar atrás tras años de esfuerzo y ver que sigues exactamente en el mismo lugar.",
    absoluteTruthTitle: "UNA VERDAD ABSOLUTA",
    absoluteTruthBig: "Quien no sabe gestionar $1,000 tampoco sabrá gestionar $10,000.",
    absoluteTruthDesc: "El problema nunca fue cuánto dinero entra de sueldo. El problema es qué hábitos tienes para controlarlo cuando llega.",
    calloutTitle: "Por eso creamos este Reto de 21 Días.",
    calloutDesc: "Un sistema práctico, directo y sin teorías eternas diseñado para detener el auto-sabotaje y canalizar tus primeros excedentes de capital en tiempo récord."
  },

  unlocks: [
    {
      num: "01",
      title: "Dinero sobrando al final de mes",
      description: "Un método realista para dejar de llegar justo y ver tu excedente crecer mes a mes sin sacrificios extremos.",
      iconName: "Layers",
      highlight: "Excedente Real"
    },
    {
      num: "02",
      title: "Elimina compras impulsivas de raíz",
      description: "Frena de inmediato el auto-sabotaje psicológico y los gastos reactivos que vacían tu cuenta bancaria.",
      iconName: "EyeOff",
      highlight: "Control Emocional"
    },
    {
      num: "03",
      title: "Ahorro automático sin fuerza de voluntad",
      description: "Configura reglas sencillas para que tu acumulación e inversión ocurran de forma líquida, en piloto automático.",
      iconName: "Zap",
      highlight: "Piloto Automático"
    },
    {
      num: "04",
      title: "Reprogramación mental de 21 días",
      description: "Instala nuevos hábitos neuronales para romper el ciclo vicioso de esperar el próximo día de pago.",
      iconName: "RefreshCw",
      highlight: "Nuevos Hábitos"
    },
    {
      num: "05",
      title: "Plan de acumulación progresiva",
      description: "Aprende a transformar ingresos ordinarios en tu primer colchón de activos reales que generan tranquilidad.",
      iconName: "BarChart",
      highlight: "Activos Reales"
    }
  ] as UnlockItem[],

  targets: [
    {
      num: "01",
      title: "Trabajas duro pero tu dinero desaparece",
      subtitle: "Esfuerzo Invisible",
      description: "Te esfuerzas al máximo a diario, pero tu cuenta bancaria cuenta una historia completamente diferente.",
      iconName: "Hammer"
    },
    {
      num: "02",
      title: "Cansado de empezar de cero cada mes",
      subtitle: "Ciclo Infinito",
      description: "Cobras, respiras tranquilo solo unos pocos días y, sin saber cómo, vuelves a la misma situación de estrés.",
      iconName: "RotateCcw"
    },
    {
      num: "03",
      title: "Quieres invertir pero nunca te sobra nada",
      subtitle: "Barrera Inicial",
      description: "Sabes que debes construir tu futuro financiero, pero el problema es que nunca superas el punto de partida.",
      iconName: "TrendingUp"
    },
    {
      num: "04",
      title: "Harto de auto-sabotear tu estabilidad",
      subtitle: "Fuga silenciosa",
      description: "Entiendes que el verdadero problema no es lo que ganas... sino el dinero que se escurre de tus manos diariamente.",
      iconName: "ShieldAlert"
    }
  ] as TargetItem[],

  whatYouAreBuying: {
    realBuying: {
      tag: "COMPROMISO REAL",
      title: "LO QUE REALMENTE ESTÁS COMPRANDO",
      quote: "No estás comprando un curso teórico de finanzas.",
      boldText: "Estás comprando la capacidad de dejar de auto-sabotearte económicamente.",
      tinyDesc: "Invertirás en la estructura de decisiones diarias que detiene las micro-fugas de capital antes de que destruyan tu capacidad de ahorro."
    },
    features: [
      { title: "01. Simple", desc: "Sin hojas de cálculo complejas o terminología financiera técnica." },
      { title: "02. Práctico", desc: "Acciones diarias y comprobadas que toman menos de 10 minutos al día." },
      { title: "03. Permanente", desc: "Hábitos reconfigurados para que el ahorro ocurra en automático." }
    ],
    callout: {
      italic: "Aquí comienza tu cambio de chip mental. No vendemos fantasías de riqueza exprés.",
      bold: "Te damos el control absoluto del dinero que hoy se escurre entre tus dedos."
    },
    expectations: [
      {
        num: "1",
        title: "Recuperar el control de tu dinero",
        points: [
          "Saber con precisión matemática qué pasa con cada euro o dólar que ingresas.",
          "Eliminar por completo la incertidumbre y la ansiedad al mirar tu balance."
        ],
        tagColor: "border-brand text-brand"
      },
      {
        num: "2",
        title: "Romper el ciclo del gasto reactivo",
        points: [
          "Dejar de tomar decisiones impulsivas para complacerte 5 minutos y pagar durante meses.",
          "Alinear el consumo diario con tus objetivos prioritarios de riqueza."
        ],
        tagColor: "border-brand text-brand"
      },
      {
        num: "3",
        title: "Construir hábitos duraderos",
        points: [
          "Acumular capital mes a mes sin sentir que limitas tu calidad de vida.",
          "Cambiar el enfoque: pasar de trabajar para pagar gastos a trabajar para tener paz."
        ],
        tagColor: "border-brand text-brand"
      }
    ] as ExpectationItem[]
  },

  bonuses: [
    {
      badge: "EXCLUSIVO",
      num: "Bono #1",
      title: "EL DESAFÍO DE REPROGRAMACIÓN FINANCIERA DE 21 DÍAS",
      paragraphs: [
        "Cómo Transformar Tu Relación con el Dinero en Tres Semanas y Construir Hábitos que Duren Toda la Vida"
      ],
      iconName: "Trophy",
      visualLabel: "DESAFÍO REPROGRAMACIÓN"
    },
    {
      badge: "AUTOMATIZADO",
      num: "Bono #2",
      title: "EL PLAN DE CONSTRUCCIÓN DE CAPITAL DE LOS PRIMEROS $1.000",
      paragraphs: [
        "Cómo Acumular Tu Primer Capital Sin Ganar Más Dinero, Sin Sentirte Restringido y Sin Sacrificar Tu Calidad de Vida"
      ],
      iconName: "FileSpreadsheet",
      visualLabel: "CONSTRUCCIÓN DE CAPITAL"
    },
    {
      badge: "DESAFÍO",
      num: "Bono #3",
      title: "EL MANUAL DEL NUEVO INVERSOR",
      paragraphs: [
        "Qué Hacer con Tu Primer Dinero Acumulado Para Comenzar a Construir Patrimonio con Inteligencia y Sin Cometer los Errores que Destruyen a la Mayoría de los Principiantes"
      ],
      iconName: "Zap",
      visualLabel: "MANUAL INVERSOR"
    }
  ] as BonusItem[],

  faqs: [
    {
      q: "¿Y si nunca he ahorrado ni invertido antes?",
      a: "Perfecto. No necesitas conocimientos técnicos previos. Primero aprenderás a controlar lo que ingresas actualmente y luego a prestigiar tu capital sin complicaciones."
    },
    {
      q: "¿Necesito ganar más para que funcione?",
      a: "En absoluto. El error común es creer que el problema es tu nivel de ingresos, cuando la base real de fuga es cuánto retienes hoy en día. Optimizaremos tu dinero disponible."
    },
    {
      q: "¿Cuánto tiempo diario debo dedicarle?",
      a: "Solo de 10 a 15 minutos al día. Las lecciones son directas, accionables y diseñadas para integrarse de inmediato en tu rutina sin quitarte el tiempo."
    },
    {
      q: "¿Cuándo empezaré a ver cambios reales?",
      a: "Desde los primeros 3 días empezarás a tapar fugas de capital invisibles y sentirás la tranquilidad mental de volver a mandar sobre tus finanzas."
    },
    {
      q: "¿Hay algún tipo de garantía?",
      a: "Sí, cuentas con una garantía total de 7 días. Si aplicas el reto y sientes que no cambia tu orden financiero, te devolvemos tu inversión sin preguntas."
    }
  ] as FAQItem[]
};
