/**
 * Taxonomia da exposição Ciência Delas (SNCT 2026).
 */

export type Escopo = 'nordeste' | 'brasil' | 'internacional';

export type Regiao =
  | 'nordeste'
  | 'norte'
  | 'centro-oeste'
  | 'sudeste'
  | 'sul'
  | 'nacional'
  | 'internacional';

export type Area =
  | 'ia'
  | 'software'
  | 'redes'
  | 'dados'
  | 'ihc'
  | 'teoria'
  | 'hardware'
  | 'seguranca'
  | 'sociedade';

export const AREAS: Record<Area, { nome: string; curto: string; sigla: string }> = {
  ia: { nome: 'Inteligência Artificial', curto: 'Inteligência Artificial', sigla: 'IA' },
  software: { nome: 'Engenharia de Software e Linguagens', curto: 'Engenharia de Software', sigla: 'ES' },
  redes: { nome: 'Redes e Sistemas Distribuídos', curto: 'Redes e Distribuídos', sigla: 'RD' },
  dados: { nome: 'Bancos e Ciência de Dados', curto: 'Dados', sigla: 'DD' },
  ihc: { nome: 'Interação Humano-Computador', curto: 'IHC', sigla: 'IHC' },
  teoria: { nome: 'Teoria da Computação e Algoritmos', curto: 'Teoria e Algoritmos', sigla: 'TA' },
  hardware: { nome: 'Arquitetura e Hardware', curto: 'Hardware', sigla: 'HW' },
  seguranca: { nome: 'Segurança da Informação e Criptografia', curto: 'Segurança e Criptografia', sigla: 'SC' },
  sociedade: { nome: 'Informática na Educação e Política Científica', curto: 'Educação e Sociedade', sigla: 'ED' },
};

export type UF =
  | 'AC' | 'AL' | 'AP' | 'AM' | 'BA' | 'CE' | 'DF' | 'ES' | 'GO'
  | 'MA' | 'MT' | 'MS' | 'MG' | 'PA' | 'PB' | 'PR' | 'PE' | 'PI'
  | 'RJ' | 'RN' | 'RS' | 'RO' | 'RR' | 'SC' | 'SP' | 'SE' | 'TO';

export const UFS: Record<UF, { nome: string; regiao: Regiao }> = {
  RR: { nome: 'Roraima', regiao: 'norte' },
  AP: { nome: 'Amapá', regiao: 'norte' },
  AC: { nome: 'Acre', regiao: 'norte' },
  AM: { nome: 'Amazonas', regiao: 'norte' },
  PA: { nome: 'Pará', regiao: 'norte' },
  MA: { nome: 'Maranhão', regiao: 'nordeste' },
  CE: { nome: 'Ceará', regiao: 'nordeste' },
  RN: { nome: 'Rio Grande do Norte', regiao: 'nordeste' },
  RO: { nome: 'Rondônia', regiao: 'norte' },
  TO: { nome: 'Tocantins', regiao: 'norte' },
  PI: { nome: 'Piauí', regiao: 'nordeste' },
  PE: { nome: 'Pernambuco', regiao: 'nordeste' },
  PB: { nome: 'Paraíba', regiao: 'nordeste' },
  MT: { nome: 'Mato Grosso', regiao: 'centro-oeste' },
  GO: { nome: 'Goiás', regiao: 'centro-oeste' },
  BA: { nome: 'Bahia', regiao: 'nordeste' },
  SE: { nome: 'Sergipe', regiao: 'nordeste' },
  AL: { nome: 'Alagoas', regiao: 'nordeste' },
  MS: { nome: 'Mato Grosso do Sul', regiao: 'centro-oeste' },
  DF: { nome: 'Distrito Federal', regiao: 'centro-oeste' },
  MG: { nome: 'Minas Gerais', regiao: 'sudeste' },
  ES: { nome: 'Espírito Santo', regiao: 'sudeste' },
  PR: { nome: 'Paraná', regiao: 'sul' },
  SP: { nome: 'São Paulo', regiao: 'sudeste' },
  RJ: { nome: 'Rio de Janeiro', regiao: 'sudeste' },
  SC: { nome: 'Santa Catarina', regiao: 'sul' },
  RS: { nome: 'Rio Grande do Sul', regiao: 'sul' },
};
