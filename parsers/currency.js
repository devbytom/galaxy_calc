const romans = ['L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
const credits = [50, 40, 10, 9, 5, 4, 1];

export const galactical = {
  glob: 'I',
  prok: 'V',
  pish: 'X',
  tegj: 'L',
};

export const weights = {
  silver: 17,
  gold: 14450,
  iron: 195.5,
};

export const parseGalactical = strGalactical => {
  let result = '';
  let weight;
  const nonparsed = strGalactical.split(' ');

  for (const coin of nonparsed) {
    if (!galactical[coin] && !weights[coin]) return;
    if (weights[coin]) {
      weight = coin;
      continue;
    }
    result += galactical[coin];
  }

  return { roman: result, weight };
};

export const toCredits = (roman, weight) => {
  let result = 0;
  for (var i = 0; i <= credits.length; i++) {
    while (roman.indexOf(romans[i]) === 0) {
      result += credits[i];
      roman = roman.replace(romans[i], '');
    }
  }

  return { credits: weights[weight] ? parseFloat(result) * parseFloat(weights[weight]) : parseFloat(result) };
};
