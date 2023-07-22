export function generateRandomHexColor(): string {
  const HEX_DIGITS = '0123456789ABCDEF';
  const COLOR_LENGTH = 6;
  let color = '#';

  for (let i = 0; i < COLOR_LENGTH; i++) {
    color += HEX_DIGITS[Math.floor(Math.random() * HEX_DIGITS.length)];
  }

  return color;
}
