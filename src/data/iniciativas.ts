export interface Iniciativa {
  nome: string;
  vinculo: string;
  local: string;
  descricao: string;
}

export const iniciativas: Iniciativa[] = [
  {
    nome: 'Meninas Digitais e WIT',
    vinculo: 'Sociedade Brasileira de Computação (SBC)',
    local: 'Nacional',
    descricao:
      'Programa da SBC que reúne projetos em escolas públicas de todo o país e organiza anualmente o encontro Women in Information Technology (WIT).',
  },
  {
    nome: 'Calendário de Mulheres Brasileiras na Computação',
    vinculo: 'UFRGS e UNIPAMPA',
    local: 'Rio Grande do Sul / Nacional',
    descricao:
      'Publicação anual organizada pelos projetos ENIGMA e Gurias na Computação para registrar a trajetória de professoras e pesquisadoras brasileiras da área.',
  },
  {
    nome: 'Elas@Computação',
    vinculo: 'Universidade Federal de Campina Grande (UFCG)',
    local: 'Paraíba',
    descricao:
      'Grupo criado em 2017 por alunas e ex-alunas de Ciência da Computação da UFCG com recepção de feras, oficinas e apoio à permanência no curso.',
  },
  {
    nome: 'Cintia',
    vinculo: 'Centro de Informática da UFPE',
    local: 'Pernambuco',
    descricao:
      'Coletivo de estudantes, professoras e pesquisadoras do CIn-UFPE que promove oficinas técnicas, rodas de conversa e ações com escolas do Recife.',
  },
  {
    nome: 'Nordestinas Digitais',
    vinculo: 'Universidade Federal do Piauí (UFPI)',
    local: 'Piauí',
    descricao:
      'Projeto de extensão que leva aulas de programação em Python, lógica e inteligência artificial para alunas da rede pública no Piauí.',
  },
  {
    nome: 'Meninas na Ciência de Dados',
    vinculo: 'Universidade Federal da Bahia (UFBA)',
    local: 'Bahia',
    descricao:
      'Oficinas de estatística, análise de dados e programação voltadas a estudantes do ensino médio de Salvador e região.',
  },
];
