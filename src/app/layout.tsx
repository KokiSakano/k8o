import { Fredoka } from 'next/font/google';

const font = Fredoka({ subsets: ['latin'] });

export const metadata = {
  title: 'k8o',
  description: 'k8o portal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={font.className}>{children}</body>
    </html>
  );
}
