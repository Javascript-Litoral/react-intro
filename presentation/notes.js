import React from 'react';

export function titlelize(text) {
  return <h4>{text}</h4>
}

export const notes = {
  intro: 'Intro a React',
  concepts: 'UI, V en MVC, funcional, composicion -> herencia',
  ecosystem: 'framework vs lib, a lot of community stuff',
  declarative: 'view = f(data)',
  componentBased: 'nada especial (ng1, ng2, Vue, Ember), popularizó el concepto',
  dataFlow: 'mucho más ordenado, pero se vuelve verboso',
  vdom: 'renderizado rápido, de nuevo no es el único',
  jsx: 'separation of concerns? f*ck it! enhance JS FTW! (mostrar link)',
  propsState: '',
  demo: 'repazar conceptos, explicar componentes',
  questions: '???',
  thanks: 'la proxima hacemos una app!!! \\o/'
}
