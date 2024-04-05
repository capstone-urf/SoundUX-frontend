import { ReactNode } from 'react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { Providers } from '@/app/providers';
import '@/styles/reset.css';

export const metadata: Metadata = {
  title: 'SoundUX',
  description: 'SoundUX',
};

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
