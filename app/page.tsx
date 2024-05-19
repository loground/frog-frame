import { getFrameMetadata } from 'frog/next';
import type { Metadata } from 'next';

import styles from './page.module.css';

export async function generateMetadata(): Promise<Metadata> {
  const frameTags = await getFrameMetadata(
    `${process.env.VERCEL_URL || 'http://localhost:3000'}/api`,
  );
  return {
    other: frameTags,
  };
}

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <p>You shouldn't miss those</p>
          <a href="https://zora.co/collect/base:0x338da94719499060d4fe18121114fd24e8668220/1">
            Elefant
          </a>
          <a href="https://zora.co/collect/base:0x338da94719499060d4fe18121114fd24e8668220/2">
            Trade
          </a>
        </div>
      </div>
    </main>
  );
}
