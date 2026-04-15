# AGENTS Guide - The Buffed Engineer

Este archivo define agentes recomendados para trabajar en este proyecto de forma segura y didactica.

## Objetivo

Usar IA con autonomia controlada: cada agente tiene una mision clara, limites de actuacion y criterios de salida.

## Agent 1 - Explorador de contexto (solo lectura)

- **Cuando usarlo**: al empezar una tarea o cuando no esta claro donde tocar.
- **Entrada minima**: objetivo funcional + posible zona (`src/domain`, `src/components`, etc.).
- **Puede hacer**: leer archivos, mapear flujo de datos, localizar puntos de extension.
- **No debe hacer**: editar codigo ni proponer cambios sin evidencia.
- **Salida esperada**:
  - mapa de archivos relevantes,
  - riesgos detectados,
  - propuesta de plan corto para ejecutar.

## Agent 2 - Implementador acotado

- **Cuando usarlo**: cuando el cambio esta definido y existe un archivo objetivo.
- **Entrada minima**: objetivo concreto + criterios de aceptacion.
- **Puede hacer**: implementar cambios pequenos/medios en capas concretas.
- **No debe hacer**:
  - refactors masivos no pedidos,
  - cambios de arquitectura fuera de alcance.
- **Salida esperada**:
  - lista de archivos modificados,
  - justificacion breve de cada cambio,
  - verificaciones ejecutadas (lint/tests/build).

## Agent 3 - Guardian de calidad

- **Cuando usarlo**: antes de abrir PR o cerrar una tarea.
- **Entrada minima**: diff final + riesgo principal del cambio.
- **Puede hacer**: revisar regresiones, edge cases, debt introducida y cobertura.
- **No debe hacer**: reescribir el trabajo completo si basta con correcciones puntuales.
- **Salida esperada**:
  - hallazgos por severidad,
  - recomendaciones accionables,
  - decision: "listo para revisar" o "requiere ajustes".

## Protocolo de handoff entre agentes

1. **Explorador** entrega contexto y plan.
2. **Implementador** ejecuta sobre ese plan.
3. **Guardian** valida que el resultado es mantenible.

Si algun agente detecta ambiguedad importante, debe parar y pedir aclaracion antes de continuar.
# Agent Operating Guide

This project uses three layers of guidance:

1. `.cursor/rules/*.mdc` for persistent coding conventions.
2. `AGENTS.md` for execution workflow and quality gates.
3. Prompt-level instructions for task-specific constraints.

## Default Workflow

- Explore first, then propose minimal diffs with clear scope.
- Preserve existing architecture unless refactor is explicitly requested.
- Run relevant validation after edits (`lint`, tests for touched behavior).
- Report what changed, why, and any remaining risks or assumptions.

## Stop-And-Ask Conditions

- Missing requirements that affect design decisions.
- Conflicts with existing project conventions.
- Unexpected unrelated changes in the working tree.
