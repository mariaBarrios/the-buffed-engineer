import type { TalkContent } from '../../domain/entities/TalkContent';
import type { TalkContentRepository } from '../../domain/ports/TalkContentRepository';

const aiSnippetCode = `function UserDashboard({ userId }) {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api/users/' + userId)
      .then((r) => r.json())
      .then((result) => setData(result))
  }, [userId])

  if (!data) return <div>Loading...</div>
  return <div>{data.name}</div>
}`;

const architectSnippetCode = `type UserResponse = { id: string; name: string };

export const useUser = (userId: string) => {
  const [state, setState] = useState<{ data?: UserResponse; isLoading: boolean; error?: string }>({
    isLoading: true,
  });

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const response = await fetch('/api/users/' + userId);
        if (!response.ok) throw new Error('Failed to fetch user');
        const data: UserResponse = await response.json();
        if (!cancelled) setState({ data, isLoading: false });
      } catch (error) {
        if (!cancelled) setState({ error: String(error), isLoading: false });
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [userId]);

  return state;
};

// test: should expose loading, success and error states`;

export class InMemoryTalkContentRepository implements TalkContentRepository {
  getContent(): TalkContent {
    return {
      hero: {
        title: 'THE BUFFED ARCHITECT',
        subtitle: 'IA + criterio de ingeniería = desarrollo que escala',
        callToAction: 'UNLOCK NEXT LEVEL',
        unlockedLabel: 'Level unlocked. Welcome to the arena.',
      },
      codeDuel: {
        title: 'The Code Duel: IA vs Architect',
        subtitle: 'No gana quien genera más rápido, gana quien diseña mejor.',
        aiSnippet: {
          label: 'IA (funciona, pero sin criterio)',
          language: 'tsx',
          code: aiSnippetCode,
        },
        architectSnippet: {
          label: 'Architect (tipado, estados, errores, testable)',
          language: 'tsx',
          code: architectSnippetCode,
        },
      },
      skillTree: {
        title: 'The Skill Tree',
        subtitle: 'Tres pilares para un arquitecto buffeado.',
        pillars: [
          {
            id: 'stability',
            title: 'Stability',
            description: 'Testing como red de seguridad: unit, integration y contrato.',
          },
          {
            id: 'scalability',
            title: 'Scalability',
            description: 'Clean Architecture, boundaries y patrones para crecer sin caos.',
          },
          {
            id: 'performance',
            title: 'Performance',
            description: 'Critical Rendering Path, carga progresiva y UX en condiciones reales.',
          },
        ],
      },
      timeline: {
        title: 'The XP Timeline',
        subtitle: '18 años de carrera. Cambian herramientas, permanecen principios.',
        entries: [
          {
            year: '2008',
            title: 'ABAP Origins',
            stack: 'SAP / Enterprise',
            insight: 'Primeras lecciones sobre dominio, reglas de negocio y mantenibilidad.',
          },
          {
            year: '2015',
            title: 'Frontend Shift',
            stack: 'Angular / SPA',
            insight: 'De la lógica pesada al diseño de interfaces y arquitectura modular.',
          },
          {
            year: '2019',
            title: 'React Ecosystem',
            stack: 'React / Gatsby / Next.js',
            insight: 'Componentes, SSR, performance y testing como base operativa.',
          },
          {
            year: '2026',
            title: 'AI-Assisted Engineering',
            stack: 'Copilot / Agents / Product Teams',
            insight: 'La IA acelera. El criterio arquitectónico evita deuda técnica.',
          },
        ],
      },
      manifesto: {
        title: 'The Terminal Manifesto',
        prompt: 'cat architect_manifesto.txt',
        lines: [
          '1) No delegues criterio; delega tareas repetitivas.',
          '2) Diseña límites claros antes de pedir código.',
          '3) Tipa contratos para proteger decisiones.',
          '4) Testea para dormir tranquilo en producción.',
          '5) Performance es una feature, no un extra.',
          '6) La IA es buff, no reemplazo del arquitecto.',
        ],
      },
    };
  }
}
