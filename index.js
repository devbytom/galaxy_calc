import colors from 'colors';
import { createInterface } from 'readline';
import { parseGalactical, toCredits } from './parsers/currency';

function ask(listener, output) {
  return new Promise((res, rej) => {
    listener.question(output, answer => {
      res(answer.toLowerCase().trim());
    });
  });
}

async function main() {
  let start = true;
  const listener = createInterface(process.stdin, process.stdout);

  while (true) {
    let answer = await ask(
      listener,
      `${start ? 'greetings!' : 'well,'} you might input galactic unities and i shall parse it for thee \n >> `,
    );

    let result = parseGalactical(answer);
    start = false;
    if (!result || !result.roman) {
      console.error(`you ought to be reasonable! i have no idea what you are talking about`);
      continue;
    }
    result = toCredits(result.roman, result.weight);
    console.info(`${colors.green('marvelous!')} thats precisely ${colors.green(result.credits)} credits`);
  }
}

if (process.env.NODE_ENV != 'test') main();
