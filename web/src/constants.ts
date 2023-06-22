export const DOT = '●';
export const NUMS = [
  '⓪',
  '①',
  '②',
  '③',
  '④',
  '⑤',
  '⑥',
  '⑦',
  '⑧',
  '⑨',
  '⑩',
  '⑪',
  '⑫',
  '⑬',
  '⑭',
  '⑮',
  '⑯',
  '⑰',
  '⑱',
  '⑲',
  '⑳',
  '㉑',
  '㉒',
  '㉓',
  '㉔',
  '㉕',
  '㉖',
  '㉗',
  '㉘',
  '㉙',
  '㉚',
  '㉛',
  '㉜',
  '㉝',
  '㉞',
  '㉟',
  '㊱',
  '㊲',
  '㊳',
  '㊴',
  '㊵',
  '㊶',
  '㊷',
  '㊸',
  '㊹',
  '㊺',
  '㊻',
  '㊼',
  '㊽',
  '㊾',
  '㊿'
];

const initial = [640, 750, 828, 1080, 1200, 1400, 1600];
const all = [...initial, ...initial.map((item) => item * 2)];
const sorted = all.sort((a, b) => a / b);

export const IMG_DEVICE_SIZES = sorted;

export const EMAIL = 'hello@tylermcrobert.com';
export const LINK_EMAIL = 'mailto:hello@tylermcrobert.com';
export const IG = '@tylermcrobert';
export const LINK_IG = 'https://www.instagram.com/tylermcrobert/';

//
