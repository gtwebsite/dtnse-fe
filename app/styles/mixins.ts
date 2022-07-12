export const fontSize = (size, base = 16) => `
  font-size: ${size}px;
  font-size: calc(${size / base} * 1rem);
`;

export const remFontSize = (size, base = 16) => `
  ${fontSize(size, base)}
  line-height: ${size + 2}px;

  @media (min-width: 40em) {
    ${fontSize(size * 1.25, base)}
    line-height: ${size * 1.25 + 2}px;
  }

  @media (min-width: 52em) {
    ${fontSize(size * 1.5, base)}
    line-height: ${size * 1.5 + 2}px;
  }

  @media (min-width: 64em) {
    ${fontSize(size * 2, base)}
    line-height: ${size * 2 + 2}px;
  }
`;
