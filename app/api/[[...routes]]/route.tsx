/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog';
import { devtools } from 'frog/dev';
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/next';
import { serveStatic } from 'frog/serve-static';
import { pinata } from 'frog/hubs';

const app = new Frog({
  assetsPath: '/',
  basePath: '/api',

  // hub: pinata(),
});

// Uncomment to use Edge Runtime
// export const runtime = 'edge'

app.frame('/', (c) => {
  return c.res({
    image: 'https://frog-frame-green.vercel.app/api/Battle.png',
    action: '/utility',
    title: 'Battle',
    intents: [
      <Button value="Battle Reply">Shit yes, I did</Button>,
      <Button value="Battle Reply">Hell naw, I didnt</Button>,
    ],
  });
});

app.frame('/utility', (c) => {
  return c.res({
    image: 'https://frog-frame-green.vercel.app/api/Utility.png',
    action: '/utility',
    title: 'utility',
    intents: [
      <Button action="/bleu" value="Battle Reply">
        HELL YEA 😤
      </Button>,
      <Button action="/bleu">NO 😭</Button>,
    ],
  });
});

app.frame('/bleu', (c) => {
  console.log(c);
  return c.res({
    image: 'https://frog-frame-green.vercel.app/api/Bleu.png',
    action: '/bleu',
    title: 'Bleu',

    intents: [
      <Button.Link href="https://zora.co/collect/base:0x338da94719499060d4fe18121114fd24e8668220/1?referrer=0x2De78F2dB332726Bf6e45722A20E96118d3d2462">
        Touch it
      </Button.Link>,
      <Button action="/to">Been there, what else?</Button>,
    ],
  });
});

app.frame('/to', (c) => {
  console.log(c);
  return c.res({
    image: 'https://frog-frame-green.vercel.app/api/Trade.png',
    title: 'trade',

    intents: [
      <Button.Link href="https://zora.co/collect/base:0x338da94719499060d4fe18121114fd24e8668220/2">
        HOLY WOW MINTING RN, thanks BOSS
      </Button.Link>,
    ],
  });
});

devtools(app, { serveStatic });

export const GET = handle(app);
export const POST = handle(app);
