import QRCode from 'qrcode';

export interface QrOpcoes {
  fundo?: string;
  tinta?: string;
  margem?: number;
  largura?: number;
}

/**
 * Gera um QR Code em SVG vetorial puro (funciona em SSR e no navegador).
 */
export async function gerarQrSvg(url: string, opcoes?: QrOpcoes): Promise<string> {
  return QRCode.toString(url, {
    type: 'svg',
    errorCorrectionLevel: 'M',
    margin: opcoes?.margem ?? 1,
    width: opcoes?.largura,
    color: {
      dark: opcoes?.tinta ?? '#181615',
      light: opcoes?.fundo ?? '#FFFFFF',
    },
  });
}

/**
 * Gera um QR Code em Data URL PNG para download no navegador.
 */
export async function gerarQrPngDataUrl(url: string, opcoes?: QrOpcoes): Promise<string> {
  return QRCode.toDataURL(url, {
    errorCorrectionLevel: 'M',
    margin: opcoes?.margem ?? 2,
    width: opcoes?.largura ?? 512,
    color: {
      dark: opcoes?.tinta ?? '#43318C',
      light: opcoes?.fundo ?? '#FFFFFF',
    },
  });
}

function dispararDownload(href: string, nomeArquivo: string, revogar = false): void {
  const link = document.createElement('a');
  link.href = href;
  link.download = nomeArquivo;
  link.rel = 'noopener';
  document.body.appendChild(link);
  link.click();
  link.remove();
  if (revogar) {
    window.setTimeout(() => URL.revokeObjectURL(href), 1000);
  }
}

/**
 * Gera e baixa o QR Code individual em SVG vetorial.
 */
export async function baixarQrSvg(
  url: string,
  nomeArquivo: string,
  opcoes?: QrOpcoes
): Promise<void> {
  const svg = await gerarQrSvg(url, {
    tinta: '#43318C',
    fundo: '#FFFFFF',
    margem: 2,
    largura: 512,
    ...opcoes,
  });
  const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
  dispararDownload(URL.createObjectURL(blob), nomeArquivo, true);
}

/**
 * Gera e baixa o QR Code individual em PNG de alta resolução.
 */
export async function baixarQrPng(
  url: string,
  nomeArquivo: string,
  opcoes?: QrOpcoes
): Promise<void> {
  const dataUrl = await gerarQrPngDataUrl(url, opcoes);
  dispararDownload(dataUrl, nomeArquivo);
}
