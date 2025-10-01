// Sistema de traducciones simplificado
export type Language = 'es' | 'en';

export interface Translations {
  nav: {
    escualano: string;
    products: string;
    about: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    title: string;
    subtitle: string;
    benefits: {
      bioaffinity: {
        title: string;
        description: string;
      };
      repair: {
        title: string;
        description: string;
      };
      authenticity: {
        title: string;
        description: string;
      };
    };
    cta: string;
  };
  aboutUs: {
    title: string;
    subtitle: string;
    description: string;
    seo: {
      title: string;
      description: string;
    };
  };
  howToUse: {
    title: string;
    steps: {
      face: {
        title: string;
        description: string;
      };
      neck: {
        title: string;
        description: string;
      };
      body: {
        title: string;
        description: string;
      };
      hair: {
        title: string;
        description: string;
      };
    };
  };
  brand: {
    title: string;
    subtitle: string;
    values: {
      mediterranean: string;
      minimal: string;
      clean: string;
    };
    badges: {
      spain: string;
      eur: string;
      responsible: string;
    };
  };
  scualane: {
    title: string;
    subtitle: string;
    description: string;
    usage: {
      title: string;
      face: {
        title: string;
        description: string;
      };
      neck: {
        title: string;
        description: string;
      };
      body: {
        title: string;
        description: string;
      };
      hair: {
        title: string;
        description: string;
      };
    };
    keyBenefits: {
      title: string;
      benefits: string[];
    };
    cta: string;
    seo: {
      title: string;
      description: string;
    };
  };
  'scualane-100': {
    title: string;
    subtitle: string;
    description: string;
    usage: {
      title: string;
      face: {
        title: string;
        description: string;
      };
      neck: {
        title: string;
        description: string;
      };
      body: {
        title: string;
        description: string;
      };
      hair: {
        title: string;
        description: string;
      };
    };
    keyBenefits: {
      title: string;
      benefits: string[];
    };
    cta: string;
    seo: {
      title: string;
      description: string;
    };
  };
  bodyOil: {
    title: string;
    subtitle: string;
    description1: string;
    description2: string;
    description3: string;
    formula: {
      title: string;
      description: string;
    };
    ingredients: {
      title: string;
      subtitle: string;
      macadamia: string;
      avocado: string;
      sesame: string;
      rice: string;
      grape: string;
      safflower: string;
      almond: string;
    };
    aroma: string;
    result: string;
    usage: {
      title: string;
      step1: {
        title: string;
        description: string;
      };
      step2: {
        title: string;
        description: string;
      };
      step3: {
        title: string;
        description: string;
      };
      step4: {
        title: string;
        description: string;
      };
      step5: {
        title: string;
        description: string;
      };
    };
    benefits: {
      title: string;
      hydration: string;
      barrier: string;
      elasticity: string;
      texture: string;
      aroma: string;
    };
    cta: string;
    seo: {
      title: string;
      description: string;
    };
  };
  products: {
    title: string;
    subtitle: string;
    learnMore: string;
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  faq: {
    title: string;
    subtitle: string;
    questions: {
      greasy: {
        question: string;
        answer: string;
      };
      sensitive: {
        question: string;
        answer: string;
      };
      actives: {
        question: string;
        answer: string;
      };
      hair: {
        question: string;
        answer: string;
      };
      comedogenic: {
        question: string;
        answer: string;
      };
      origin: {
        question: string;
        answer: string;
      };
    };
  };
  footer: {
    description: string;
    links: {
      privacy: string;
      terms: string;
      cookies: string;
    };
    copyright: string;
  };
  cookies: {
    title: string;
    description: string;
    accept: string;
    reject: string;
    configure: string;
    settings: {
      title: string;
      description: string;
      necessary: {
        title: string;
        description: string;
      };
      analytics: {
        title: string;
        description: string;
      };
      marketing: {
        title: string;
        description: string;
      };
    };
    save: string;
    close: string;
  };
}

// Traducciones en español
const spanishTranslations: Translations = {
  nav: {
    escualano: "Escualano",
    products: "Productos",
    about: "Sobre nosotros"
  },
  hero: {
    title: "Escualano de oliva",
    subtitle: "La esencia mediterránea que combina pureza, bioafinidad y nutrición profunda en una línea minimalista y eficaz.",
    ctaPrimary: "Conocer Enaló",
    ctaSecondary: "Saber más"
  },
  about: {
    title: "Sobre el escualano",
    subtitle: "Un ingrediente natural que se integra perfectamente con tu piel",
    benefits: {
      bioaffinity: {
        title: "Bioafinidad",
        description: "Afinidad natural con la piel. Se integra de inmediato con los lípidos cutáneos, aportando hidratación sin residuo graso."
      },
      repair: {
        title: "Reparación",
        description: "Recupera y calma la piel. Alivia tras la exposición al sol y devuelve elasticidad y luminosidad."
      },
      authenticity: {
        title: "Autenticidad",
        description: "Del olivo mediterráneo. Un activo que conecta tradición y futuro."
      }
    },
    cta: "Saber más"
  },
  aboutUs: {
    title: "Sobre nosotros",
    subtitle: "Conoce la historia detrás de Enaló",
    description: "Nuestra marca nace con un propósito claro: revalorizar el Mediterráneo a través de un ingrediente único, el <strong>escualano de oliva</strong>. Reconocido por su alta bioafinidad con la piel, ofrece una hidratación profunda, elasticidad y luminosidad con una ligereza incomparable. Una cosmética minimalista y eficaz que refleja la pureza y la innovación mediterránea.",
    seo: {
      title: "Sobre nosotros - Enaló",
      description: "Conoce la historia y valores detrás de Enaló, la línea de cosmética mediterránea basada en escualano de oliva."
    }
  },
  howToUse: {
    title: "Cómo usar el escualano",
    steps: {
      face: {
        title: "Rostro",
        description: "2–3 gotas antes de tu crema. Potencia la absorción y aporta hidratación inmediata."
      },
      neck: {
        title: "Cuello y escote",
        description: "Uso diario con masaje ascendente. Ayuda a mantener firmeza y elasticidad."
      },
      body: {
        title: "Cuerpo",
        description: "Tras la ducha, sobre piel húmeda. Deja la piel suave, luminosa y sin grasa."
      },
      hair: {
        title: "Cabello",
        description: "En medios y puntas. Nutre, controla el frizz y aporta brillo natural."
      }
    }
  },
  brand: {
    title: "Nuestros valores",
    subtitle: "Comprometidos con la excelencia y la sostenibilidad mediterránea",
    values: {
      mediterranean: "Origen mediterráneo",
      minimal: "Minimalismo",
      clean: "Cosmética limpia"
    },
    badges: {
      spain: "Hecho en España",
      eur: "Certificado EU",
      responsible: "Responsable"
    }
  },
  scualane: {
    title: "Escualano de oliva",
    subtitle: "Extraído del fruto del olivo, el <strong>escualano de oliva</strong> es uno de los activos más preciados de la cosmética mediterránea.",
    description: "Su valor añadido reside en su <strong>extraordinaria afinidad con los lípidos naturales de la piel</strong>, lo que lo convierte en un ingrediente capaz de integrarse de manera inmediata y profunda.<br><br>Gracias a esta bioafinidad, el escualano aporta una hidratación duradera sin sensación grasa, refuerza la barrera cutánea y ayuda a mantener la elasticidad y suavidad de la piel. En el cabello, actúa como un aliado invisible que nutre, suaviza y aporta brillo natural, protegiendo la fibra capilar frente a la sequedad y el daño ambiental.<br><br>Con su ligereza única y su alta compatibilidad, el escualano de oliva se convierte en un <strong>aliado de bienestar y belleza</strong>, reflejo de la pureza y la innovación mediterránea.",
    usage: {
      title: "Cómo usarlo",
      face: {
        title: "✨ Rostro",
        description: "2–3 gotas antes de tu crema. Potencia la absorción y aporta hidratación inmediata."
      },
      neck: {
        title: "🎗️ Cuello y escote",
        description: "Uso diario con masaje ascendente. Ayuda a mantener firmeza y elasticidad."
      },
      body: {
        title: "🛁 Cuerpo",
        description: "Tras la ducha, sobre piel húmeda. Deja la piel suave, luminosa y sin grasa."
      },
      hair: {
        title: "💇‍♀️ Cabello",
        description: "En medios y puntas. Nutre, controla el frizz y aporta brillo natural."
      }
    },
    keyBenefits: {
      title: "Beneficios clave",
      benefits: [
        "🌿 <strong>Hidrata en profundidad</strong> sin dejar sensación grasa",
        "💎 <strong>Refuerza la barrera cutánea</strong> y mejora la elasticidad",
        "✨ <strong>Suaviza y aporta luminosidad</strong> a la piel",
        "��‍♀️ <strong>Nutre y protege el cabello</strong>, reduciendo el encrespamiento",
        "🌞 <strong>Ligero, puro y de origen vegetal mediterráneo</strong>"
      ]
    },
    cta: "Ver productos",
    seo: {
      title: "Escualano de oliva - Enaló",
      description: "Descubre los beneficios del escualano de oliva para tu piel y cabello."
    }
  },
  "scualane-100": {
    title: "Escualano de oliva 100%",
    subtitle: "",
    description: "",
    usage: {
      title: "Cómo utilizar el Escualano de Oliva",
      face: {
        title: "✨ Rostro",
        description: "Aplica 2–3 gotas sobre la piel limpia antes de tu crema habitual. Gracias a su afinidad natural, potencia la absorción de los principios activos y proporciona hidratación inmediata sin dejar residuo graso."
      },
      neck: {
        title: "🎗️ Cuello y escote",
        description: "Extiende 3–4 gotas a diario, con un suave masaje ascendente desde el centro hacia los laterales. Esta zona es especialmente delicada: el uso regular ayuda a mantener su firmeza, elasticidad y suavidad."
      },
      body: {
        title: "💧 Cuerpo",
        description: "Después de la ducha, con la piel húmeda, masajea 6–10 gotas por zona hasta su total absorción. El resultado es una piel hidratada, flexible y luminosa, sin sensación grasa."
      },
      hair: {
        title: "🌿 Cabello",
        description: "<strong>Como sérum:</strong> 1–3 gotas en medios y puntas, en seco o húmedo.<br><strong>Como tratamiento pre-lavado:</strong> 4–6 gotas, dejar 15–20 minutos y enjuagar.<br><strong>Como protección ligera:</strong> 1–2 gotas antes de usar secador o plancha.<br><br>Nutre la fibra capilar, controla el encrespamiento y aporta brillo sin apelmazar."
      }
    },
    keyBenefits: {
      title: "Beneficios clave",
      benefits: []
    },
    cta: "Ver productos",
    seo: {
      title: "Escualano de oliva 100% - Enaló",
      description: "Descubre cómo utilizar el escualano de oliva 100% para tu piel y cabello."
    }
  },
  bodyOil: {
    title: "Aceite Corporal Mediterráneo",
    subtitle: "Un aceite corporal ligero y de rápida absorción que combina <strong>escualano de oliva</strong> con siete aceites vegetales nutritivos.",
    description1: "Aplicar sobre <strong>piel limpia y húmeda</strong>, preferiblemente tras la ducha, para potenciar la hidratación y mejorar la elasticidad.",
    description2: "Ideal tras la <strong>exposición solar</strong>, ayuda a calmar, reparar y restaurar la luminosidad natural.",
    description3: "Deja la piel suave, flexible y envuelta en un delicado aroma cítrico-mediterráneo.",
    formula: {
      title: "Fórmula avanzada",
      description: "El <strong>Aceite Corporal Mediterráneo</strong> es una fórmula avanzada que combina como ingrediente principal el <strong>escualano de oliva</strong>, reconocido por su alta bioafinidad con la piel. Gracias a esta característica única, proporciona <strong>hidratación inmediata, suavidad y elasticidad</strong> sin dejar residuo graso."
    },
    ingredients: {
      title: "Siete aceites vegetales",
      subtitle: "La sinergia se completa con una cuidadosa selección de <strong>siete aceites vegetales</strong> que potencian su efectividad:",
      macadamia: "<strong>Aceite de macadamia</strong>: rico en ácidos grasos insaturados, proporciona nutrición intensa y ayuda a regenerar pieles secas o dañadas.",
      avocado: "<strong>Aceite de aguacate</strong>: fuente de vitaminas A, D y E, promueve la elasticidad y mejora la resistencia de la piel a la deshidratación.",
      sesame: "<strong>Aceite de sésamo</strong>: con alto contenido de antioxidantes naturales (sesamol y sesamolina), protege contra el estrés oxidativo y ayuda a mantener la firmeza.",
      rice: "<strong>Aceite de arroz</strong>: de rápida absorción, proporciona una sensación sedosa y uniforme, potenciando la luminosidad de la piel.",
      grape: "<strong>Aceite de semilla de uva</strong>: ligero y antioxidante, ayuda a mejorar la textura de la piel y promueve la reparación celular.",
      safflower: "<strong>Aceite de cártamo</strong>: rico en ácido linoleico, mejora la flexibilidad de la piel y ayuda a mantener un aspecto saludable.",
      almond: "<strong>Aceite de almendra dulce</strong>: emoliente tradicional, suaviza y calma incluso las pieles más sensibles."
    },
    aroma: "El acabado sensorial se enriquece con la <strong>frescura cítrica del aceite esencial de mandarina</strong> y el toque verde y revitalizante del <strong>aceite esencial de verbena</strong>, convirtiendo su aplicación en una experiencia aromática estimulante.",
    result: "El resultado es un aceite corporal de textura ligera y rápida absorción que <strong>hidrata, nutre y revitaliza</strong>, dejando la piel protegida, luminosa y envuelta en un delicado aroma mediterráneo.",
    usage: {
      title: "Cómo usarlo",
      step1: {
        title: "1. Preparar la piel",
        description: "Usa el aceite preferiblemente tras la ducha o baño, cuando la piel esté limpia y ligeramente húmeda. Esto facilita la absorción y ayuda a retener mejor la hidratación."
      },
      step2: {
        title: "2. Aplicación corporal",
        description: "Dispensa una cantidad suficiente en la palma de la mano y extiende sobre la piel con movimientos circulares ascendentes. Enfócate en brazos, piernas y zonas propensas a la sequedad como codos y rodillas."
      },
      step3: {
        title: "3. Cuello y escote",
        description: "Aplica 3–4 gotas adicionales en cuello y escote, realizando un masaje ascendente de centro a laterales. Esta zona es especialmente sensible y responde muy bien a la acción tensor y nutritiva del aceite."
      },
      step4: {
        title: "4. Tiempo de absorción",
        description: "Deja que el aceite se integre naturalmente con la piel durante unos minutos antes de vestirte. Su textura ligera garantiza una rápida absorción sin dejar residuo graso."
      },
      step5: {
        title: "5. Frecuencia",
        description: "Debe usarse <strong>diariamente</strong>. En pieles secas o tras exposición solar, reaplica para potenciar su efecto calmante y reparador."
      }
    },
    benefits: {
      title: "Beneficios",
      hydration: "Hidratación inmediata y duradera sin sensación grasa.",
      barrier: "Refuerzo de la barrera cutánea frente a la sequedad.",
      elasticity: "Mejora de la elasticidad y firmeza, especialmente en cuello y escote.",
      texture: "Sensación sedosa y luminosa gracias a su combinación de aceites vegetales.",
      aroma: "Aroma cítrico y revitalizante que envuelve en una experiencia mediterránea."
    },
    cta: "Ver productos",
    seo: {
      title: "Aceite Corporal Mediterráneo - Enaló",
      description: "Aceite corporal ligero con escualano de oliva y siete aceites vegetales para hidratación profunda y aroma mediterráneo."
    }
  },
  products: {
    title: "Nuestros productos",
    subtitle: "Descubre la línea completa de Enaló",
    learnMore: "Saber más"
  },
  cta: {
    title: "¿Listo para descubrir Enaló?",
    subtitle: "Únete a la experiencia de cuidado natural mediterráneo",
    button: "Contactar"
  },
  faq: {
    title: "Preguntas frecuentes",
    subtitle: "Respondemos tus preguntas sobre nuestros productos",
    questions: {
      greasy: {
        question: "¿El escualano deja sensación grasa?",
        answer: "No, el escualano de oliva tiene una textura ligera y se absorbe rápidamente sin dejar residuo graso. Su alta bioafinidad con la piel permite una absorción inmediata y profunda."
      },
      sensitive: {
        question: "¿Es apto para pieles sensibles?",
        answer: "Sí, el escualano es muy suave y compatible con todo tipo de pieles, incluyendo las más sensibles. Su origen vegetal y pureza lo convierten en un ingrediente ideal para pieles reactivas."
      },
      actives: {
        question: "¿Se puede combinar con otros activos?",
        answer: "Absolutamente. El escualano potencia la absorción de otros ingredientes activos y se integra perfectamente en cualquier rutina de cuidado, actuando como vehículo para otros productos."
      },
      hair: {
        question: "¿Cómo usar escualano en el cabello?",
        answer: "Aplica 1-3 gotas en medios y puntas del cabello, sobre cabello seco o húmedo. También puedes usarlo como tratamiento pre-lavado o como protección ligera antes del secado o planchado."
      },
      comedogenic: {
        question: "¿Es comedogénico?",
        answer: "No, el escualano tiene un índice comedogénico de 0, lo que significa que no obstruye los poros y es seguro para pieles propensas al acné."
      },
      origin: {
        question: "¿De dónde proviene el escualano?",
        answer: "Nuestro escualano se extrae del aceite de oliva mediterráneo, siguiendo procesos sostenibles y respetuosos con el medio ambiente. Es 100% de origen vegetal."
      }
    }
  },
  footer: {
    description: "Enaló — La esencia mediterránea para tu piel",
    links: {
      privacy: "Política de privacidad",
      terms: "Términos y condiciones",
      cookies: "Política de cookies"
    },
    copyright: "© Enaló macarenalorenzo"
  },
  cookies: {
    title: "Usamos cookies",
    description: "Utilizamos cookies para mejorar tu experiencia y analizar el uso del sitio. Puedes elegir qué tipos de cookies aceptar.",
    accept: "Aceptar todas",
    reject: "Rechazar todas",
    configure: "Configurar",
    settings: {
      title: "Configuración de cookies",
      description: "Personaliza tus preferencias de cookies. Puedes activar o desactivar diferentes tipos de cookies según tus necesidades.",
      necessary: {
        title: "Cookies necesarias",
        description: "Estas cookies son esenciales para el funcionamiento del sitio web y no se pueden desactivar."
      },
      analytics: {
        title: "Cookies de análisis",
        description: "Nos ayudan a entender cómo los visitantes interactúan con el sitio web recopilando información de forma anónima."
      },
      marketing: {
        title: "Cookies de marketing",
        description: "Se utilizan para hacer un seguimiento de los visitantes a través de las webs con la intención de mostrar anuncios que sean relevantes y atractivos."
      }
    },
    save: "Guardar preferencias",
    close: "Cerrar"
  }
};

// Traducciones en inglés
const englishTranslations: Translations = {
  nav: {
    escualano: "Squalane",
    products: "Products",
    about: "About us"
  },
  hero: {
    title: "Olive squalane",
    subtitle: "The Mediterranean essence that combines purity, bioaffinity and deep nutrition in a minimalist and effective line.",
    ctaPrimary: "Discover Enaló",
    ctaSecondary: "Learn more"
  },
  about: {
    title: "About squalane",
    subtitle: "A natural ingredient that integrates perfectly with your skin",
    benefits: {
      bioaffinity: {
        title: "Bioaffinity",
        description: "Natural affinity with the skin. It integrates immediately with skin lipids, providing hydration without greasy residue."
      },
      repair: {
        title: "Repair",
        description: "Recovers and soothes the skin. Relieves after sun exposure and restores elasticity and luminosity."
      },
      authenticity: {
        title: "Authenticity",
        description: "From the Mediterranean olive tree. An active ingredient that connects tradition and future."
      }
    },
    cta: "Learn more"
  },
  aboutUs: {
    title: "About us",
    subtitle: "Discover the story behind Enaló",
    description: "Our brand was born with a clear purpose: to revalue the Mediterranean through a unique ingredient, <strong>olive squalane</strong>. Recognized for its high bioaffinity with the skin, it offers deep hydration, elasticity and luminosity with incomparable lightness. A minimalist and effective cosmetics that reflects Mediterranean purity and innovation.",
    seo: {
      title: "About us - Enaló",
      description: "Discover the story and values behind Enaló, the Mediterranean cosmetics line based on olive squalane."
    }
  },
  howToUse: {
    title: "How to use squalane",
    steps: {
      face: {
        title: "Face",
        description: "2–3 drops before your cream. Enhances absorption and provides immediate hydration."
      },
      neck: {
        title: "Neck and décolleté",
        description: "Daily use with upward massage. Helps maintain firmness and elasticity."
      },
      body: {
        title: "Body",
        description: "After shower, on damp skin. Leaves skin soft, luminous and non-greasy."
      },
      hair: {
        title: "Hair",
        description: "On mid-lengths and ends. Nourishes, controls frizz and adds natural shine."
      }
    }
  },
  brand: {
    title: "Our values",
    subtitle: "Committed to excellence and Mediterranean sustainability",
    values: {
      mediterranean: "Mediterranean origin",
      minimal: "Minimalism",
      clean: "Clean cosmetics"
    },
    badges: {
      spain: "Made in Spain",
      eur: "EU Certified",
      responsible: "Responsible"
    }
  },
  scualane: {
    title: "Olive squalane",
    subtitle: "Extracted from the olive fruit, <strong>olive squalane</strong> is one of the most precious assets in Mediterranean cosmetics.",
    description: "Its added value lies in its <strong>extraordinary affinity with the skin's natural lipids</strong>, making it an ingredient capable of integrating immediately and deeply.<br><br>Thanks to this bioaffinity, squalane provides long-lasting hydration without greasy sensation, strengthens the skin barrier and helps maintain skin elasticity and softness. In hair, it acts as an invisible ally that nourishes, softens and adds natural shine, protecting the hair fiber from dryness and environmental damage.<br><br>With its unique lightness and high compatibility, olive squalane becomes a <strong>wellness and beauty ally</strong>, reflecting Mediterranean purity and innovation.",
    usage: {
      title: "How to use it",
      face: {
        title: "✨ Face",
        description: "2–3 drops before your cream. Enhances absorption and provides immediate hydration."
      },
      neck: {
        title: "🎗️ Neck and décolleté",
        description: "Daily use with upward massage. Helps maintain firmness and elasticity."
      },
      body: {
        title: "🛁 Body",
        description: "After shower, on damp skin. Leaves skin soft, luminous and non-greasy."
      },
      hair: {
        title: "💇‍♀️ Hair",
        description: "On mid-lengths and ends. Nourishes, controls frizz and adds natural shine."
      }
    },
    keyBenefits: {
      title: "Key benefits",
      benefits: [
        "🌿 <strong>Deep hydration</strong> without greasy sensation",
        "💎 <strong>Strengthens the skin barrier</strong> and improves elasticity",
        "✨ <strong>Softens and adds luminosity</strong> to the skin",
        "💇‍♀️ <strong>Nourishes and protects hair</strong>, reducing frizz",
        "🌞 <strong>Light, pure and of Mediterranean vegetable origin</strong>"
      ]
    },
    cta: "View products",
    seo: {
      title: "Olive squalane - Enaló",
      description: "Discover the benefits of olive squalane for your skin and hair."
    }
  },
  "scualane-100": {
    title: "100% Olive squalane",
    subtitle: "",
    description: "",
    usage: {
      title: "How to use Olive Squalane",
      face: {
        title: "✨ Face",
        description: "Apply 2–3 drops on clean skin before your usual cream. Thanks to its natural affinity, it enhances the absorption of active ingredients and provides immediate hydration without greasy residue."
      },
      neck: {
        title: "🎗️ Neck and décolleté",
        description: "Spread 3–4 drops daily, with a gentle upward massage from center to sides. This area is especially delicate: regular use helps maintain its firmness, elasticity and softness."
      },
      body: {
        title: "💧 Body",
        description: "After shower, on damp skin, massage 6–10 drops per area until fully absorbed. The result is hydrated, flexible and luminous skin, without greasy sensation."
      },
      hair: {
        title: "🌿 Hair",
        description: "<strong>As serum:</strong> 1–3 drops on mid-lengths and ends, on dry or wet hair.<br><strong>As pre-wash treatment:</strong> 4–6 drops, leave 15–20 minutes and rinse.<br><strong>As light protection:</strong> 1–2 drops before using blow dryer or straightener.<br><br>Nourishes hair fiber, controls frizz and adds shine without weighing down."
      }
    },
    keyBenefits: {
      title: "Key benefits",
      benefits: []
    },
    cta: "View products",
    seo: {
      title: "100% Olive squalane - Enaló",
      description: "Discover how to use 100% olive squalane for your skin and hair."
    }
  },
  bodyOil: {
    title: "Mediterranean Body Oil",
    subtitle: "A light and fast-absorbing body oil that combines <strong>olive squalane</strong> with seven nourishing vegetable oils.",
    description1: "Apply to <strong>clean and damp skin</strong>, preferably after showering, to enhance hydration and improve elasticity.",
    description2: "Ideal after <strong>sun exposure</strong>, helps soothe, repair and restore natural luminosity.",
    description3: "Leaves skin soft, flexible and wrapped in a delicate citrus-Mediterranean aroma.",
    formula: {
      title: "Advanced formula",
      description: "The <strong>Mediterranean Body Oil</strong> is an advanced formula that combines as main ingredient <strong>olive squalane</strong>, recognized for its high bioaffinity with the skin. Thanks to this unique characteristic, it provides <strong>immediate hydration, softness and elasticity</strong> without leaving greasy residue."
    },
    ingredients: {
      title: "Seven vegetable oils",
      subtitle: "The synergy is completed with a careful selection of <strong>seven vegetable oils</strong> that enhance its effectiveness:",
      macadamia: "<strong>Macadamia oil</strong>: rich in unsaturated fatty acids, provides intense nutrition and helps regenerate dry or damaged skin.",
      avocado: "<strong>Avocado oil</strong>: source of vitamins A, D and E, promotes elasticity and improves skin resistance to dehydration.",
      sesame: "<strong>Sesame oil</strong>: with high content of natural antioxidants (sesamol and sesamolin), protects against oxidative stress and helps maintain firmness.",
      rice: "<strong>Rice oil</strong>: fast-absorbing, provides a silky and uniform feel, enhancing skin luminosity.",
      grape: "<strong>Grape seed oil</strong>: light and antioxidant, helps improve skin texture and promotes cellular repair.",
      safflower: "<strong>Safflower oil</strong>: rich in linoleic acid, improves skin flexibility and helps maintain a healthy appearance.",
      almond: "<strong>Sweet almond oil</strong>: traditional emollient, softens and calms even the most sensitive skin."
    },
    aroma: "The sensory finish is enriched with the <strong>citrus freshness of mandarin essential oil</strong> and the green and revitalizing touch of <strong>verbena essential oil</strong>, turning its application into a stimulating aromatic experience.",
    result: "The result is a body oil with light texture and fast absorption that <strong>hydrates, nourishes and revitalizes</strong>, leaving skin protected, luminous and wrapped in a delicate Mediterranean aroma.",
    usage: {
      title: "How to use it",
      step1: {
        title: "1. Prepare the skin",
        description: "Use the oil preferably after showering or bathing, when the skin is clean and slightly damp. This facilitates absorption and helps retain hydration better."
      },
      step2: {
        title: "2. Body application",
        description: "Dispense a sufficient amount in the palm of your hand and spread on the skin with upward circular movements. Focus on arms, legs and areas prone to dryness such as elbows and knees."
      },
      step3: {
        title: "3. Neck and décolleté",
        description: "Apply 3–4 additional drops on neck and décolleté, performing an upward massage from center to sides. This area is especially sensitive and responds very well to the firming and nourishing action of the oil."
      },
      step4: {
        title: "4. Absorption time",
        description: "Let the oil blend naturally with the skin for a few minutes before dressing. Its light texture ensures fast absorption without leaving greasy residue."
      },
      step5: {
        title: "5. Frequency",
        description: "Should be used <strong>daily</strong>. On dry skin or after sun exposure, reapply to enhance its soothing and restorative effect."
      }
    },
    benefits: {
      title: "Benefits",
      hydration: "Immediate and lasting hydration without greasy sensation.",
      barrier: "Strengthening of the skin barrier against dryness.",
      elasticity: "Improvement of elasticity and firmness, especially in neck and décolleté.",
      texture: "Silky and luminous feel thanks to its combination of vegetable oils.",
      aroma: "Citrus and revitalizing aroma that envelops in a Mediterranean experience."
    },
    cta: "View products",
    seo: {
      title: "Mediterranean Body Oil - Enaló",
      description: "Light body oil with olive squalane and seven vegetable oils for deep hydration and Mediterranean aroma."
    }
  },
  products: {
    title: "Our products",
    subtitle: "Discover the complete Enaló line",
    learnMore: "Learn more"
  },
  cta: {
    title: "Ready to discover Enaló?",
    subtitle: "Join the Mediterranean natural care experience",
    button: "Contact"
  },
  faq: {
    title: "Frequently asked questions",
    subtitle: "We answer your questions about our products",
    questions: {
      greasy: {
        question: "Does squalane leave a greasy feeling?",
        answer: "No, olive squalane has a light texture and absorbs quickly without leaving a greasy residue. Its high bioaffinity with the skin allows immediate and deep absorption."
      },
      sensitive: {
        question: "Is it suitable for sensitive skin?",
        answer: "Yes, squalane is very gentle and compatible with all skin types, including the most sensitive ones. Its vegetable origin and purity make it an ideal ingredient for reactive skin."
      },
      actives: {
        question: "Can it be combined with other actives?",
        answer: "Absolutely. Squalane enhances the absorption of other active ingredients and integrates perfectly into any skincare routine, acting as a vehicle for other products."
      },
      hair: {
        question: "How to use squalane on hair?",
        answer: "Apply 1-3 drops to mid-lengths and ends of hair, on dry or wet hair. You can also use it as a pre-wash treatment or as light protection before blow-drying or straightening."
      },
      comedogenic: {
        question: "Is it comedogenic?",
        answer: "No, squalane has a comedogenic index of 0, meaning it does not clog pores and is safe for acne-prone skin."
      },
      origin: {
        question: "Where does the squalane come from?",
        answer: "Our squalane is extracted from Mediterranean olive oil, following sustainable and environmentally respectful processes. It is 100% of vegetable origin."
      }
    }
  },
  footer: {
    description: "Enaló — The Mediterranean essence for your skin",
    links: {
      privacy: "Privacy policy",
      terms: "Terms and conditions",
      cookies: "Cookie policy"
    },
    copyright: "© Enaló macarenalorenzo"
  },
  cookies: {
    title: "We use cookies",
    description: "We use cookies to improve your experience and analyze site usage. You can choose which types of cookies to accept.",
    accept: "Accept all",
    reject: "Reject all",
    configure: "Configure",
    settings: {
      title: "Cookie settings",
      description: "Customize your cookie preferences. You can enable or disable different types of cookies according to your needs.",
      necessary: {
        title: "Necessary cookies",
        description: "These cookies are essential for the website to function and cannot be disabled."
      },
      analytics: {
        title: "Analytics cookies",
        description: "They help us understand how visitors interact with the website by collecting information anonymously."
      },
      marketing: {
        title: "Marketing cookies",
        description: "They are used to track visitors across websites with the intention of displaying relevant and attractive advertisements."
      }
    },
    save: "Save preferences",
    close: "Close"
  }
};

// Objeto con todas las traducciones
export const translations = {
  es: spanishTranslations,
  en: englishTranslations,
} as const;

// Idioma por defecto
export const defaultLanguage: Language = 'es';

// Idiomas soportados
export const supportedLanguages: Language[] = ['es', 'en'];
