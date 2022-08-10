export function getCaretIndex(element: HTMLElement) {
  let position = 0;
  const isSupported = typeof window.getSelection !== 'undefined';
  if (isSupported) {
    const selection = window.getSelection();
    if (selection && selection.rangeCount !== 0) {
      const range = selection.getRangeAt(0);
      const preCaretRange = range.cloneRange();
      preCaretRange.selectNodeContents(element);
      preCaretRange.setEnd(range.endContainer, range.endOffset);
      position = preCaretRange.toString().length;
    }
  }
  return position;
}

interface GetTextWidth {
  (text: string, font: string): number;
  canvas?: HTMLCanvasElement;
}

export const getTextWidth: GetTextWidth = (text, font) => {
  const canvas =
    getTextWidth.canvas ||
    (getTextWidth.canvas = document.createElement('canvas'));
  const context = canvas.getContext('2d');
  if (context) {
    context.font = font;
    const metrics = context.measureText(text);
    return metrics.width;
  }
  return 0;
};

export const getCaretCalculatedCoordinates =
  (font: { family: string; size: string; weight: string; height: string }) =>
  (element: HTMLElement) => {
    if (!element.innerText) {
      return [0, 0];
    }
    const parts = element.innerText.split(/\n/g);
    let index = getCaretIndex(element);
    let text = '';
    let line = 0;

    for (const part of parts) {
      if (part.length >= index) {
        text = part;
        break;
      } else {
        index -= part.length;
        line++;
      }
    }

    const top = Number(font.height.replace('px', '')) * line;
    const left = getTextWidth(
      text.slice(0, index),
      `${font.weight} ${font.size} ${font.family}`
    );

    return [top, left];
  };

export const formatValue = (value: string) => {
  const parts = value.trim().replace(/\s+/g, ' ').split(/\s/);

  if (!value || parts.length < 2) {
    return value;
  } else {
    const [first, ...rest] = parts;
    return `${first}<br />${rest.join(' ')}`;
  }
};
