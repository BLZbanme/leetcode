function reverseWords(s: string): string {
    return s.split(/\s+/g).map(e => e.split('').reverse().join('')).join(' ');
};