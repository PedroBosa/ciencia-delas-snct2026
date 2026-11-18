export function paraAscii(texto: string): string {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export function paraBinario(texto: string): string[] {
  return [...paraAscii(texto)]
    .filter((c) => c.charCodeAt(0) < 128)
    .map((c) => c.charCodeAt(0).toString(2).padStart(8, '0'));
}

export const cordoes = ['ELAS', 'TI', 'TADS', 'SNCT', '2026'] as const;

export const palavrasVerticais = ['CÓDIGO', 'LÓGICA', 'DADOS', 'REDE', 'FUTURO'] as const;
