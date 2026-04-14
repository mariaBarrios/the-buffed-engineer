---
name: preparar-demo-charla
description: Prepara cambios de la charla para ser mostrados a estudiantes con foco en claridad, diff pequeno y validacion minima. Usar cuando se actualizan slides, contenido o ejemplos didacticos en este repositorio.
---

# Skill: Preparar demo de charla

## Objetivo

Convertir una idea de mejora en un cambio presentable para clase: facil de entender, verificable y listo para repositorio.

## Flujo recomendado

1. **Entender el alcance**
   - Identifica que se quiere mejorar (slide, copy, ejemplo tecnico o componente).
   - Define un criterio de aceptacion observable.

2. **Localizar impacto**
   - Revisa primero `src/infrastructure/repositories/InMemoryTalkContentRepository.ts` para cambios de contenido.
   - Revisa `src/components/*` solo si hay impacto visual o estructural.
   - Verifica contratos en `src/domain/entities/TalkContent.ts` si aparecen campos nuevos.

3. **Implementar en pequeno**
   - Aplica cambios minimos necesarios.
   - Evita mezclar mejoras no relacionadas en el mismo commit.

4. **Validar**
   - Ejecuta checks minimos (`npm run lint` o tests relacionados).
   - Si algo falla, corrige antes de cerrar.

5. **Comunicar para clase**
   - Resume:
     - que problema habia,
     - que decision se tomo,
     - que evidencia valida el cambio.

## Plantilla de salida

Usa este formato al terminar:

```markdown
## Resultado
- Objetivo: ...
- Archivos tocados: ...
- Decision clave: ...
- Validacion: ...
- Riesgo residual: ...
```

## Buenas practicas

- Preferir lenguaje claro y ejemplos concretos.
- Si se actualizan referencias de la slide final, enlazar recursos del repositorio para que el alumnado pueda explorarlos.
