import type { TalkContent } from '../../domain/entities/TalkContent';
import type { TalkContentRepository } from '../../domain/ports/TalkContentRepository';

const aiSnippetCode = `<!-- IA (funciona hoy, lloras mañana) -->
<div style="width: 300px; height: 400px; background: white; position: relative; border-radius: 10px;">
  <img src="user.jpg" style="position: absolute; top: 20px; left: 20px; width: 50px; height: 50px;">
  
  <div style="position: absolute; top: 30px; left: 80px; color: black; font-size: 18px; font-family: Arial;">
    Juan Pérez
  </div>
  
  <div style="position: absolute; top: 80px; left: 20px; color: gray; font-family: Arial;">
    Desarrollador Web
  </div>
  
  <button onclick="follow()" style="position: absolute; bottom: 20px; left: 20px; width: 260px; background: blue; color: white; border: none; padding: 10px;">
    Seguir
  </button>
</div>`;

const architectSnippetCode = `<!-- Tú, pero Buffeado -->
<style>
  .user-card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
    background: var(--surface-color, #ffffff);
    border-radius: 12px;
    max-width: 320px;
    font-family: system-ui, sans-serif;
  }
  .user-card__header {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .user-card__avatar {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    object-fit: cover;
  }
  .user-card__name {
    font-size: 1.125rem;
    font-weight: 600;
    margin: 0;
  }
  .user-card__role {
    color: #666;
    margin: 0;
  }
  .btn-primary {
    padding: 0.75rem 1rem;
    background: var(--primary-color, #0056b3);
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: opacity 0.2s ease;
  }
  .btn-primary:hover {
    opacity: 0.9;
  }
</style>

<article class="user-card">
  <header class="user-card__header">
    <img src="user.jpg" alt="Avatar de Juan Pérez" class="user-card__avatar" loading="lazy">
    <div>
      <h2 class="user-card__name">Juan Pérez</h2>
      <p class="user-card__role">Desarrollador Web</p>
    </div>
  </header>
  
  <button type="button" class="btn-primary" aria-label="Seguir a Juan Pérez">
    Seguir
  </button>
</article>`;

export class InMemoryTalkContentRepository implements TalkContentRepository {
  getContent(): TalkContent {
    return {
      hero: {
        title: 'The Buffed Architect',
        subtitle: 'IA + cabeza = código que no explota cuando lo usa gente real',
      },
      introProfile: {
        nameLead: 'Soy ',
        name: 'María Barrios',
        intro: 'Me apasiona construir productos digitales útiles, mantenibles y con impacto real.',
        experience: 'Llevo 18 años en Biko, ahora Jakala, acompañando equipos y proyectos en su evolución tecnológica.',
        companyLogoSrc: '/jakala-logo.png',
        companyLogoAlt: 'Logo de Jakala',
        photoSrc: '/maria-barrios.png',
        photoAlt: 'Foto de María Barrios',
      },
      clientProjects: {
        title: 'Proyectos y clientes',
        subtitle:
          'Algunos de los equipos y organizaciones en los que he colaborado a lo largo de estos años.',
        clients: [
          {
            id: 'unicaja',
            name: 'Unicaja',
            logoSrc: '/clients/unicaja.svg',
            logoAlt: 'Logo Unicaja',
          },
          {
            id: 'genially',
            name: 'Genially',
            logoSrc: '/clients/genially.png',
            logoAlt: 'Logo Genially',
          },
          {
            id: 'mcp',
            name: 'Mancomunidad de la Comarca de Pamplona',
            logoSrc: '/clients/mcp.jpg',
            logoAlt: 'Mancomunidad de la Comarca de Pamplona (MCP)',
          },
          {
            id: 'zara',
            name: 'Zara',
            logoSrc: '/clients/zara.svg',
            logoAlt: 'Logo Zara',
          },
          {
            id: 'el-corte-ingles',
            name: 'El Corte Inglés',
            logoSrc: '/clients/el-corte-ingles.svg',
            logoAlt: 'Logo El Corte Inglés',
          },
          {
            id: 'barcelo',
            name: 'Hoteles Barceló',
            logoSrc: '/clients/barcelo.svg',
            logoAlt: 'Logo Hoteles Barceló',
          },
          {
            id: 'laboral-kutxa',
            name: 'Laboral Kutxa',
            logoSrc: '/clients/laboral-kutxa.jpg',
            logoAlt: 'Logo Laboral Kutxa',
            isCurrent: true,
          },
        ],
      },
      codeDuel: {
        title: 'El Duelo: Copiar y Pegar de IA vs Hacerlo Bien',
        subtitle: 'No gana el que escupe código más rápido, sino el que hace que no se rompa mañana.',
        aiSnippet: {
          label: 'IA (funciona hoy, lloras mañana)',
          language: 'html',
          code: aiSnippetCode,
        },
        architectSnippet: {
          label: 'Tú, pero Buffeado',
          language: 'html',
          code: architectSnippetCode,
        },
      },
      timeline: {
        title: 'Mi Historial (XP)',
        subtitle: '18 años picando código. Las modas cambian, pero lo importante es siempre lo mismo.',
        entries: [
          {
            year: '2008',
            title: 'Los Inicios',
            stack: 'SAP / Enterprise',
            insight: 'Aprendiendo a base de golpes que el código tiene que entenderlo el negocio, no solo las máquinas.',
          },
          {
            year: '2015',
            title: 'El Boom del Frontend',
            stack: 'Angular / SPA',
            insight: 'Cuando las webs empezaron a ser apps completas y tuvimos que aprender a ordenarlas para no volvernos locos.',
          },
          {
            year: '2019',
            title: 'La Era React',
            stack: 'React / Next.js',
            insight: 'Componentes por todas partes, obsesión por que cargue rápido y no romper nada al actualizar.',
          },
          {
            year: '2026',
            title: 'Programar con IA',
            stack: 'Copilot / Agents',
            insight: 'El Agente te escribe el código, pero tú tienes que saber si es una basura o si sirve para producción.',
          },
        ],
      },
      aiFails: {
        title: 'Cuando la IA descarrila',
        subtitle: 'Ejemplos reales de por qué necesitas estar al volante y no dormirte.',
        entries: [
          {
            title: 'Alucinaciones de Librerías',
            description: 'La IA inventa paquetes o métodos que suenan lógicos pero no existen.',
            example: 'Te sugiere importar `useAuthentication()` de `react-router-dom` o usar un método `Array.prototype.toMagicString()` que se acaba de inventar.',
            solution: 'Verifica siempre la documentación oficial. Si suena demasiado específico y perfecto, probablemente sea inventado.',
          },
          {
            title: 'El Bucle Infinito de Refactorización',
            description: 'Le pides arreglar un bug y te reescribe todo el archivo cambiando la arquitectura entera.',
            example: 'Pides corregir un typo en un botón y te devuelve el componente reescrito usando un patrón de estado complejo que no necesitas y rompe 5 tests.',
            solution: 'Da instrucciones precisas y limita el alcance: "Solo corrige la línea 45, no cambies nada más de la estructura".',
          },
          {
            title: 'Código Inseguro por Defecto',
            description: 'La IA prioriza que el código funcione rápido sobre que sea seguro.',
            example: 'Genera consultas SQL concatenando strings directamente (SQL Injection) o guarda contraseñas en texto plano en el localStorage.',
            solution: 'Aplica siempre tus conocimientos de seguridad. Pídele explícitamente: "Escribe esto siguiendo las mejores prácticas de seguridad de OWASP".',
          },
          {
            title: 'Amnesia de Contexto',
            description: 'Olvida reglas de negocio o convenciones del proyecto que le explicaste hace 10 mensajes.',
            example: 'Vuelve a usar `var` o `any` a pesar de que acordasteis usar tipado estricto y `const/let` al principio de la sesión.',
            solution: 'Mantén el contexto fresco. Usa reglas en `.cursor/rules/*.mdc` para normas persistentes y `AGENTS.md` para el flujo operativo del equipo; además, recuérdale restricciones clave en prompts complejos.',
          }
        ],
      },
      dailyTasks: {
        title: 'El Día a Día Buffeado',
        subtitle: 'Tareas donde la IA brilla y marca la diferencia si tienes criterio.',
        tasks: [
          {
            title: 'Refactorización Segura',
            description: 'Pasar código legacy a estándares modernos sin romper nada.',
            example: 'Pedirle a la IA que migre un componente de clases a hooks, pero tú revisas que el ciclo de vida (useEffect) sea exacto.',
            impact: 'Ahorras horas de teclear, pero tu criterio evita bugs sutiles de renderizado.',
          },
          {
            title: 'Generación de Tests Tediosos',
            description: 'Crear la base de pruebas unitarias para casos límite.',
            example: 'Le das una función compleja y le pides que genere los tests para todos los edge cases posibles.',
            impact: 'Aumentas la cobertura al 100% en minutos, pero tú decides qué aserciones son realmente valiosas para el negocio.',
          },
          {
            title: 'Explicación de Código Alienígena',
            description: 'Entender código antiguo o no documentado rápidamente.',
            example: 'Pedirle a la IA: "Explícame qué hace esta regex de 4 líneas y dame 3 ejemplos de lo que matchea y lo que no".',
            impact: 'Desbloqueas tareas de mantenimiento al instante, usando la IA como traductor de intenciones.',
          },
          {
            title: 'Automatización de Tareas Repetitivas',
            description: 'Convertir rutinas frecuentes en Skills reutilizables guiadas por IA, sin depender de scripting manual cada vez.',
            example: 'Definir un Skill para preparar PRs (lint, tests, formato y checklist) y pedirle al agente que lo ejecute cuando detecte cambios listos para revisar.',
            impact: 'Estandarizas el trabajo repetitivo en minutos: la IA ejecuta el flujo y tú te centras en validar decisiones y calidad final.',
          }
        ],
      },
      aiRails: {
        title: 'Preparar el Terreno: Skills + Agentes',
        subtitle: 'Más autonomía, menos caos: define raíles para que la IA rinda bien en proyectos reales.',
        entries: [
          {
            title: 'Integrar Skills para lo repetible',
            description: 'Convierte tareas frecuentes en playbooks accionables para que el agente no improvise en cada sesión.',
            checklist: [
              'Define objetivo, entradas esperadas y salida válida del Skill.',
              'Incluye ejemplos reales para reducir ambigüedad en prompts.',
              'Mantén cada Skill con una sola responsabilidad clara.',
            ],
            example: 'Crear un Skill "Review PR" que ejecute `npm run lint`, corra los tests afectados y genere un resumen del diff antes de abrir una Pull Request.',
            outcome: 'Menos decisiones ad hoc y resultados más consistentes entre iteraciones.',
          },
          {
            title: 'Crear agentes específicos por misión',
            description: 'Para tareas con mucho contexto (debug, QA, migraciones), usa agentes especializados con límites explícitos.',
            checklist: [
              'Declara alcance, rutas que puede tocar y herramientas permitidas.',
              'Añade criterios de éxito verificables: tests, lint, checks o diff esperado.',
              'Exige una salida resumida con cambios, riesgos y validación realizada.',
            ],
            example: 'Un agente "QA-Bot" configurado en modo lectura que revisa archivos `.spec.ts` y sugiere edge cases faltantes, sin permiso para modificar código de producción.',
            outcome: 'Mayor autonomía con menor riesgo de romper partes no relacionadas.',
          },
          {
            title: 'Reutilizar agentes y Skills genéricos',
            description: 'No todo necesita un agente nuevo: combina piezas existentes para acelerar sin duplicar trabajo.',
            checklist: [
              'Prioriza reutilizar antes de construir un flujo nuevo.',
              'Combina exploración genérica + Skill específico de ejecución.',
              'Documenta cuándo usar cada opción para evitar decisiones improvisadas.',
            ],
            example: 'En lugar de crear un agente desde cero para cada refactor, usar un agente genérico de "Exploración" para encontrar la lógica acoplada, y luego aplicar un Skill de "Extracción de Componentes" ya probado.',
            outcome: 'Velocidad de entrega más alta manteniendo estabilidad técnica.',
          },
          {
            title: 'Definir guardrails de calidad',
            description: 'La autonomía real aparece cuando hay controles simples y obligatorios antes de cerrar una tarea.',
            checklist: [
              'Checklist mínimo: build, tests, lint y revisión del diff.',
              'Reglas de stop-and-ask ante ambigüedad o cambios inesperados.',
              'Plantillas para PR, handoff y comunicación de riesgos.',
            ],
            example: 'Añadir una regla en `.cursor/rules/typescript-standards.mdc`: "Nunca uses `any` en TypeScript. Si no conoces el tipo, pide aclaración antes de generar el código".',
            outcome: 'Menos fallos por falta de contexto y decisiones más trazables.',
          },
          {
            title: 'Mejorar en ciclos cortos',
            description: 'Itera rápido sobre errores recurrentes para reforzar los raíles del sistema.',
            checklist: [
              'Registra fallos frecuentes y conviértelos en reglas explícitas.',
              'Quita instrucciones vagas y añade casos borde con ejemplos.',
              'Revisa semanalmente qué Skills/agentes aportan valor real.',
            ],
            example: 'Si el CSS se vuelve inconsistente entre componentes, crea una regla en `.cursor/rules/frontend-css-outside-in.mdc` para fijar orden outside-in y documenta el checklist de revisión en `AGENTS.md`.',
            outcome: 'Una IA más fiable, predecible y útil conforme avanza el proyecto.',
          },
        ],
      },
      contextStrategy: {
        title: 'La estrategia que sí escala',
        subtitle:
          'Tres capas combinadas para que el agente recuerde contexto, siga proceso y ejecute cada tarea con foco.',
        layers: [
          {
            title: 'Capa 1: El manual de estilo de la empresa',
            objective: 'Fija las normas inamovibles (como la tipografía corporativa) para que el agente no improvise.',
            useWhen: 'Reglas de fondo que garantizan el sello de la empresa en todo el código.',
            artifact: '.cursor/rules/*.mdc',
            example:
              'Ej. "En esta agencia siempre usamos TypeScript y nunca dejamos variables sin tipar".',
          },
          {
            title: 'Capa 2: El proceso de calidad y los SOPs (Skills)',
            objective:
              'Define el checklist general de la empresa y los manuales paso a paso (Skills) para tareas complejas.',
            useWhen: 'Protocolos operativos y flujos de trabajo que el trabajador consulta al hacer una tarea específica.',
            artifact: 'AGENTS.md y Skills (.cursor/skills/*)',
            example:
              'Ej. "Antes de entregar, pasa los tests (AGENTS). Si te toca hacer una subida a producción, sigue el manual de despliegue (Skill)".',
          },
          {
            title: 'Capa 3: El ticket de la tarea',
            objective: 'Acota el encargo específico de hoy, como un mensaje de Slack o un ticket de Jira.',
            useWhen: 'La instrucción exacta del momento, con límites claros de qué tocar y qué no.',
            artifact: 'Prompt de la tarea',
            example:
              'Ej. "Arregla este error en el formulario de contacto. Solo toca la validación, no refactorices el resto".',
          },
        ],
        references: [
          {
            label: 'AGENTS.md — Guía de agentes del proyecto',
            url: 'https://github.com/mariaBarrios/the-buffed-architect/blob/main/AGENTS.md',
          },
          {
            label: 'Rule — project-guardrails.mdc',
            url: 'https://github.com/mariaBarrios/the-buffed-architect/blob/main/.cursor/rules/project-guardrails.mdc',
          },
          {
            label: 'Rule — react-talk-content-style.mdc',
            url: 'https://github.com/mariaBarrios/the-buffed-architect/blob/main/.cursor/rules/react-talk-content-style.mdc',
          },
          {
            label: 'Skill — preparar-demo-charla',
            url: 'https://github.com/mariaBarrios/the-buffed-architect/blob/main/.cursor/skills/preparar-demo-charla/SKILL.md',
          },
        ],
      },
      aiEngineeringFundamentals: {
        title: 'Ingeniería antes del prompt',
        subtitle:
          'Lo que diferencia a un ingeniero de un "pasador de prompts": criterio técnico, saber poner límites a la IA y no apagar el cerebro al programar.',
        entries: [
          {
            title: 'Arquitectura',
            description:
              'La IA te genera piezas de Lego sueltas, pero tú decides qué vas a construir. Si no tienes claro el diseño de tu sistema antes de pedir código, terminarás con un monstruo imposible de mantener.',
            checklist: [
              'Define bien las capas y responsabilidades (ej. separar BD de la interfaz) antes de pedirle código a la IA.',
              'Fija los contratos (interfaces, endpoints de tu API) para que la IA no se invente cómo se comunican las partes.',
              'Toma tú las decisiones de diseño importantes; no te conformes con "mientras compile me vale".',
            ],
            outcome:
              'Le pides a la IA que implemente piezas pequeñas y concretas. La IA rellena los huecos, pero tú mantienes el control del proyecto.',
          },
          {
            title: 'Testing',
            description:
              'Los tests son tu red de seguridad. Si dejas que la IA escriba código sin tener tests que lo validen, jugarás a la ruleta rusa cada vez que subas a producción.',
            checklist: [
              'Crea tests que comprueben la lógica importante, no solo el "happy path" donde todo sale bien.',
              'Busca feedback rápido: haz tests unitarios que te avisen al instante si la IA ha roto algo.',
              'La IA te puede ayudar a escribir los tests, pero tú debes revisar que de verdad estén comprobando lo que toca.',
            ],
            outcome:
              'Puedes iterar rapidísimo con la IA. Si el test está en verde, avanzas; si está en rojo, sabes que el modelo ha alucinado.',
          },
          {
            title: 'Buenas prácticas',
            description:
              'Git, revisiones de código y seguridad no son cosas para "cuando haya tiempo". Son lo que diferencia un proyecto de clase de un software profesional real.',
            checklist: [
              'Haz commits pequeños y con sentido. Si le pides a la IA que te haga medio proyecto de golpe, nadie podrá revisar ese PR.',
              'Ojo con la seguridad: revisa que la IA no haya dejado contraseñas en el código o agujeros de seguridad básicos.',
              'Usa linters y formateadores (ESLint, Prettier) para que el código de la IA siga el mismo estilo que el tuyo.',
            ],
            outcome:
              'El código que genera la IA pasa por los mismos filtros de calidad que si lo hubieras escrito tú a mano.',
          },
          {
            title: 'Clean Code',
            description:
              'Si tu código es un espagueti ilegible, la IA se va a liar igual que tú. Un código limpio y ordenado ayuda a que el modelo entienda mejor qué le estás pidiendo.',
            checklist: [
              'Usa nombres de variables que expliquen qué hacen, sin abreviaturas raras ni funciones de 500 líneas.',
              'Mantén el código ordenado. Si la IA tiene que leer un archivo caótico, te devolverá más caos.',
              'Busca código simple y directo en lugar de soluciones "súper ingeniosas" que nadie entiende.',
            ],
            outcome:
              'Tus prompts son más efectivos porque el contexto que le pasas a la IA es claro. Menos alucinaciones y menos tiempo arreglando desastres.',
          },
          {
            title: 'Extreme Programming (XP)',
            description:
              'El desarrollo de software va de personas resolviendo problemas, no solo de picar código. La IA te ayuda a teclear más rápido, pero no sustituye hablar con tu equipo.',
            checklist: [
              'Integra tu código a menudo (CI/CD) para no encontrarte con conflictos gigantes el día de la entrega.',
              'Haz "Pair Programming" con tus compañeros cuando el código generado por la IA sea complejo o crítico.',
              'Refactoriza poco a poco apoyándote en los tests, antes de pedirle a la IA que añada nuevas funcionalidades.',
            ],
            outcome:
              'Usas la IA para quitarte el trabajo repetitivo, pero mantienes la comunicación y el trabajo en equipo que de verdad aporta valor.',
          },
        ],
      },
      finalSlide: {
        title: 'La IA acelera, la arquitectura sostiene',
        subtitle: 'De “funciona hoy” a “evoluciona mañana”',
        before: {
          title: 'Antes',
          bullets: [
            'Contenido acoplado al código (InMemory enorme).',
            'Composición de dependencias dentro de la UI.',
            'Bundle inicial pesado.',
          ],
        },
        decisions: {
          title: 'Decisiones',
          bullets: [
            'Composición hexagonal en bootstrap (main).',
            'Capa de view-models para desacoplar dominio y presentación.',
            'Backlog técnico explícito: code splitting + contenido externo.',
          ],
        },
        result: {
          title: 'Resultado',
          bullets: [
            'Más mantenibilidad y testabilidad.',
            'Capacidad de cambiar infraestructura sin romper el núcleo.',
            'Narrativa técnica clara para equipo y producto.',
          ],
        },
        closingQuote: 'La IA escribe más rápido. Tu criterio decide si eso escala.',
        references: [
          {
            label: 'Issue #1 — Fase 2: Optimizar bundle con code splitting',
            url: 'https://github.com/mariaBarrios/the-buffed-architect/issues/1',
          },
          {
            label: 'Issue #2 — Fase 2: Extraer TalkContent fuera del repositorio in-memory',
            url: 'https://github.com/mariaBarrios/the-buffed-architect/issues/2',
          },
          {
            label: 'Issue #3 — Fase 2: Roadmap técnico para la charla',
            url: 'https://github.com/mariaBarrios/the-buffed-architect/issues/3',
          },
        ],
      },
      finalContact: {
        title: 'Cierre',
        subtitle: 'Gracias por acompañarme en este recorrido.',
        eyebrow: 'THANK YOU',
        badge: "LET'S BUILD WHAT MATTERS",
        thanks: 'Gracias por vuestro tiempo y por llegar hasta aquí.',
        motivation:
          'La IA potencia nuestro impacto, pero el verdadero cambio llega cuando combinamos tecnología, criterio arquitectónico y ganas de compartir.',
        contactPrompt: 'Si quieres saber más o te interesa Jakala, hablemos:',
        linkedinLabel: 'linkedin.com/in/mbg-galdeano',
        linkedinUrl: 'https://www.linkedin.com/in/mbg-galdeano/',
        email: 'maria.barrios@jakala.com',
      },
    };
  }
}
