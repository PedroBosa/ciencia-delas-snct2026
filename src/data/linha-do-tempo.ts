export interface MarcoLinhaDoTempo {
  ano: string;
  ordenacao: number;
  escopo: 'brasil' | 'internacional';
  titulo: string;
  texto: string;
  slugs: string[];
}

export const linhaDoTempo: MarcoLinhaDoTempo[] = [
  {
    ano: '1843',
    ordenacao: 1843,
    escopo: 'internacional',
    titulo: 'Ada Lovelace escreve o primeiro algoritmo',
    texto:
      'Nas notas sobre a Máquina Analítica de Charles Babbage, descreve passo a passo como calcular os números de Bernoulli e percebe que computadores poderiam trabalhar com símbolos, músicas e textos, não só com contas.',
    slugs: ['ada-lovelace'],
  },
  {
    ano: '1940–1945',
    ordenacao: 1940,
    escopo: 'internacional',
    titulo: 'Joan Clarke decifra mensagens da máquina Enigma',
    texto:
      'Em Bletchley Park, trabalha na equipe de Alan Turing aplicando cálculos de probabilidade para descobrir diariamente os ajustes das máquinas alemãs durante a Segunda Guerra Mundial.',
    slugs: ['joan-clarke'],
  },
  {
    ano: '1941–1942',
    ordenacao: 1941,
    escopo: 'internacional',
    titulo: 'Hedy Lamarr registra o salto em frequência',
    texto:
      'Ao lado do músico George Antheil, cria um sistema de rádio que muda de canal o tempo todo para impedir interferências. Décadas depois, a ideia virou base do Bluetooth e das primeiras redes Wi-Fi.',
    slugs: ['hedy-lamarr'],
  },
  {
    ano: '1945–1946',
    ordenacao: 1945,
    escopo: 'internacional',
    titulo: 'Seis matemáticas programam o ENIAC',
    texto:
      'Jean Bartik, Betty Holberton, Kathleen McNulty, Marlyn Meltzer, Ruth Teitelbaum e Frances Spence descobrem como programar o primeiro computador eletrônico de uso geral ligando cabos e chaves diretamente nos painéis.',
    slugs: ['programadoras-do-eniac'],
  },
  {
    ano: '1947',
    ordenacao: 1947,
    escopo: 'internacional',
    titulo: 'Kathleen Booth cria a primeira linguagem Assembly',
    texto:
      'No Birkbeck College em Londres, substitui sequências binárias diretas por abreviações alfabéticas de instruções e projeta os computadores ARC, SEC e APE(X)C com seus primeiros montadores.',
    slugs: ['kathleen-booth'],
  },
  {
    ano: '1952',
    ordenacao: 1952,
    escopo: 'internacional',
    titulo: 'Grace Hopper cria o compilador A-0',
    texto:
      'Escreve o primeiro programa capaz de transformar comandos legíveis em código binário. Sete anos depois, seu trabalho dá origem ao COBOL, usado até hoje em sistemas bancários.',
    slugs: ['grace-hopper'],
  },
  {
    ano: '1961–1962',
    ordenacao: 1961,
    escopo: 'internacional',
    titulo: 'Dorothy Vaughan e Katherine Johnson programam e verificam rotas na NASA',
    texto:
      'Dorothy Vaughan aprende FORTRAN e treina sua equipe para programar os mainframes IBM 7090 da NASA, enquanto Katherine Johnson calcula órbitas do Programa Mercury e confere na mão as saídas do computador para John Glenn.',
    slugs: ['dorothy-vaughan', 'katherine-johnson'],
  },
  {
    ano: '1962–1969',
    ordenacao: 1962,
    escopo: 'internacional',
    titulo: 'Evelyn Berezin projeta reservas aéreas em tempo real e o primeiro processador de textos',
    texto:
      'Entrega em 1962 o sistema Instamatic de passagens aéreas em tempo real pela Teleregister (11 anos sem falhas centrais) e funda a Redactron em 1969 lançando o Data Secretary com chips semicondutores.',
    slugs: ['evelyn-berezin'],
  },
  {
    ano: '1965',
    ordenacao: 1965,
    escopo: 'internacional',
    titulo: 'Mary Kenneth Keller conclui o doutorado em Computação',
    texto:
      'Torna-se a primeira mulher doutora em Ciência da Computação nos Estados Unidos e passa vinte anos dirigindo o departamento que fundou no Clarke College.',
    slugs: ['mary-kenneth-keller'],
  },
  {
    ano: '1969',
    ordenacao: 1969,
    escopo: 'internacional',
    titulo: 'O software de Margaret Hamilton pousa na Lua',
    texto:
      'Minutos antes do toque no solo lunar, o computador da Apollo 11 sobrecarrega; o código da equipe liderada por Hamilton deixa tarefas secundárias de lado e garante o pouso.',
    slugs: ['margaret-hamilton'],
  },
  {
    ano: '1972',
    ordenacao: 1972,
    escopo: 'brasil',
    titulo: 'Edith Ranzini participa da construção do Patinho Feio',
    texto:
      'Engenheira formada pela Poli-USP, integra a equipe que projetou e montou do zero o primeiro computador brasileiro.',
    slugs: ['edith-ranzini'],
  },
  {
    ano: '1972',
    ordenacao: 1972.1,
    escopo: 'internacional',
    titulo: 'Karen Spärck Jones publica o cálculo estatístico TF-IDF',
    texto:
      'Na Universidade de Cambridge, formula a frequência inversa em documentos (IDF), método estatístico que permite aos motores de busca ranquear documentos relevantes pelo peso de palavras raras.',
    slugs: ['karen-sparck-jones'],
  },
  {
    ano: '1973–1980',
    ordenacao: 1973,
    escopo: 'internacional',
    titulo: 'Adele Goldberg desenvolve o Smalltalk-80',
    texto:
      'No laboratório Xerox PARC, ajuda a construir a linguagem que popularizou a programação orientada a objetos e o uso de janelas, ícones e menus na tela.',
    slugs: ['adele-goldberg'],
  },
  {
    ano: '1974',
    ordenacao: 1974,
    escopo: 'brasil',
    titulo: 'Primeira turma de Computação da USP tem maioria de mulheres',
    texto:
      'Quando o curso de Ciência da Computação do IME-USP abre vagas pela primeira vez, 14 dos 20 estudantes são mulheres.',
    slugs: [],
  },
  {
    ano: '1974–1985',
    ordenacao: 1974.1,
    escopo: 'internacional',
    titulo: 'Elizabeth Feinler estrutura o diretório da ARPANET e os domínios .com, .edu e .gov',
    texto:
      'Dirige o Network Information Center (NIC) no SRI International entre 1972 e 1989, cria o serviço de consultas WHOIS e organiza o esquema de domínios organizacionais genéricos da rede.',
    slugs: ['elizabeth-feinler'],
  },
  {
    ano: '1977',
    ordenacao: 1977,
    escopo: 'brasil',
    titulo: 'Liane Tarouco lança o primeiro livro brasileiro sobre redes',
    texto:
      'Professora da UFRGS, publica Redes de Comunicação de Dados mais de dez anos antes da chegada comercial da internet ao país.',
    slugs: ['liane-tarouco'],
  },
  {
    ano: '1978–1979',
    ordenacao: 1978,
    escopo: 'internacional',
    titulo: 'Gladys West modela o geóide terrestre para o GPS e Lynn Conway lança o método VLSI',
    texto:
      'Gladys West gerencia o satélite Seasat e programa modelos geodésicos no IBM 7030 Stretch que sustentam a precisão do GPS; no Xerox PARC, Lynn Conway publica com Carver Mead as regras escaláveis de projeto de microchips VLSI.',
    slugs: ['gladys-west', 'lynn-conway'],
  },
  {
    ano: '1978–1982',
    ordenacao: 1978.1,
    escopo: 'internacional',
    titulo: 'Carol Shaw cria River Raid para o Atari 2600',
    texto:
      'Primeira mulher a trabalhar profissionalmente programando videogames, desenha e escreve sozinha um dos maiores clássicos do Atari em apenas 4 KB de memória.',
    slugs: ['carol-shaw'],
  },
  {
    ano: '1983–1987',
    ordenacao: 1983,
    escopo: 'brasil',
    titulo: 'Valéria Menezes Bastos trabalha na estatal COBRA',
    texto:
      'Entre as primeiras mulheres negras formadas em Informática no Brasil, atua na fabricante nacional de computadores antes de seguir carreira como professora na UFRJ.',
    slugs: ['valeria-menezes-bastos'],
  },
  {
    ano: '1983–1985',
    ordenacao: 1983.1,
    escopo: 'internacional',
    titulo: 'Sophie Wilson desenha o conjunto de instruções do processador ARM',
    texto:
      'Após projetar o microcomputador BBC Micro e a linguagem BBC BASIC na Acorn Computers, especifica entre 1983 e 1985 a arquitetura RISC do primeiro chip ARM1, base dos processadores móveis atuais.',
    slugs: ['sophie-wilson'],
  },
  {
    ano: '1985',
    ordenacao: 1985,
    escopo: 'internacional',
    titulo: 'Radia Perlman cria o protocolo Spanning Tree',
    texto:
      'Resolve em poucos dias um problema que travava redes locais grandes, impedindo que pacotes de dados ficassem girando sem parar entre equipamentos.',
    slugs: ['radia-perlman'],
  },
  {
    ano: '1990',
    ordenacao: 1990,
    escopo: 'brasil',
    titulo: 'Teresa Ludermir traz pesquisa em redes neurais para o Recife',
    texto:
      'Depois do doutorado em Londres, passa a lecionar na UFPE e forma no Centro de Informática gerações de pesquisadores em inteligência artificial.',
    slugs: ['teresa-ludermir'],
  },
  {
    ano: '1993',
    ordenacao: 1993,
    escopo: 'brasil',
    titulo: 'Sandra Aluísio cofunda o núcleo NILC de processamento do português',
    texto:
      'Na USP em São Carlos, participa da criação do Núcleo Interinstitucional de Linguística Computacional (NILC), construindo córpus, revisores gramaticais e ferramentas de simplificação textual em português.',
    slugs: ['sandra-aluisio'],
  },
  {
    ano: '1995',
    ordenacao: 1995,
    escopo: 'brasil',
    titulo: 'Olga Bellon funda o grupo de visão computacional IMAGO na UFPR',
    texto:
      'Cadastra em Curitiba o grupo IMAGO no diretório do CNPq e desenvolve algoritmos de reconstrução tridimensional e biometria para saúde e preservação de acervos culturais.',
    slugs: ['olga-bellon'],
  },
  {
    ano: '2001',
    ordenacao: 2001,
    escopo: 'brasil',
    titulo: 'Ana Carolina Salgado assume a direção do CIn-UFPE',
    texto:
      'Primeira mulher eleita para dirigir o Centro de Informática da UFPE, justamente nos anos em que nascia o Porto Digital no Recife.',
    slugs: ['ana-carolina-salgado'],
  },
  {
    ano: '2002',
    ordenacao: 2002,
    escopo: 'brasil',
    titulo: 'Rossana Andrade funda o grupo GREat na UFC em Fortaleza',
    texto:
      'Cria na Universidade Federal do Ceará o laboratório GREat, dedicado a redes móveis, segurança de protocolos em IoT, engenharia de software e aplicações em saúde digital.',
    slugs: ['rossana-andrade'],
  },
  {
    ano: '2006',
    ordenacao: 2006,
    escopo: 'internacional',
    titulo: 'Frances Allen vence o Prêmio Turing',
    texto:
      'Após 45 anos otimizando compiladores na IBM, torna-se a primeira mulher a receber o principal prêmio mundial da computação.',
    slugs: ['frances-allen'],
  },
  {
    ano: '2006',
    ordenacao: 2006.1,
    escopo: 'brasil',
    titulo: 'Cláudia Werner é homenageada na Engenharia de Software',
    texto:
      'Professora da COPPE-UFRJ, torna-se a primeira mulher premiada pela Comissão Especial de Engenharia de Software da SBC.',
    slugs: ['claudia-werner'],
  },
  {
    ano: '2008',
    ordenacao: 2008,
    escopo: 'internacional',
    titulo: 'Barbara Liskov recebe o Prêmio Turing',
    texto:
      'Reconhecida por criar mecanismos de abstração de dados presentes em quase todas as linguagens modernas e pelo princípio que forma a letra L do SOLID.',
    slugs: ['barbara-liskov'],
  },
  {
    ano: '2009',
    ordenacao: 2009,
    escopo: 'internacional',
    titulo: 'Fei-Fei Li publica o banco de imagens ImageNet',
    texto:
      'Reúne milhões de fotos organizadas para treinar computadores a reconhecer objetos, passo decisivo para o avanço recente da visão computacional.',
    slugs: ['fei-fei-li'],
  },
  {
    ano: '2012',
    ordenacao: 2012,
    escopo: 'internacional',
    titulo: 'Shafi Goldwasser vence o Prêmio Turing em criptografia',
    texto:
      'Premiada com Silvio Micali por criar bases matemáticas da segurança na internet e as provas de conhecimento zero.',
    slugs: ['shafi-goldwasser'],
  },
  {
    ano: '2018',
    ordenacao: 2018,
    escopo: 'internacional',
    titulo: 'Timnit Gebru revela falhas raciais em reconhecimento facial',
    texto:
      'Com Joy Buolamwini, testa sistemas comerciais de identificação de rostos e comprova que eles erravam até 34% das vezes em mulheres negras.',
    slugs: ['timnit-gebru'],
  },
  {
    ano: '2019–2025',
    ordenacao: 2019,
    escopo: 'brasil',
    titulo: 'Redes regionais de ensino de TI e reconhecimento internacional na Computação',
    texto:
      'Projeto Katie (Eliana Almeida e Raquel Cabral na UFAL), Nordestinas Digitais (Keylla Aita no Piauí), Meninas Digitais MT (Karen Ribeiro), pós-graduação e ciência aberta na UFBA (Christina von Flach), IHC com Simone Barbosa e pesquisa na UFMG com Jussara Almeida ampliam a formação feminina no Brasil.',
    slugs: [
      'keylla-aita',
      'eliana-almeida',
      'raquel-cabral',
      'karen-ribeiro',
      'christina-flach',
      'simone-barbosa',
      'jussara-almeida',
    ],
  },
  {
    ano: '2021',
    ordenacao: 2021,
    escopo: 'brasil',
    titulo: 'Liane Tarouco entra para o Hall da Fama da Internet',
    texto:
      'Torna-se a primeira mulher brasileira incluída no Internet Hall of Fame pelo trabalho na criação das redes acadêmicas do país.',
    slugs: ['liane-tarouco'],
  },
  {
    ano: '2023',
    ordenacao: 2023,
    escopo: 'brasil',
    titulo: 'Thais Batista é eleita presidente da SBC',
    texto:
      'Professora da UFRN, assume a presidência da Sociedade Brasileira de Computação como a primeira mulher nordestina no cargo.',
    slugs: ['thais-batista'],
  },
  {
    ano: '2025–2026',
    ordenacao: 2026,
    escopo: 'brasil',
    titulo: 'Cientistas da computação na SBPC, na UFAM e na ONU',
    texto:
      'Francilene Garcia (UFCG) assume a presidência da SBPC, Tanara Lauschner torna-se reitora da UFAM e Teresa Ludermir (UFPE) passa a integrar o painel científico de IA da ONU.',
    slugs: ['francilene-garcia', 'tanara-lauschner', 'teresa-ludermir'],
  },
];
