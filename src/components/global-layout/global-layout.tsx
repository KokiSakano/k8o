import Link from 'next/link';
import { FC, ReactNode } from 'react';

export const GlobalLayout: FC<{ children: ReactNode }> = ({
  children,
}) => {
  //　k8oというアプリのヘッダーをtailwindcssで作成する
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center justify-center p-4">
        <div className="w-full max-w-5xl">
          <Link href="/">
            <h1 className="text-3xl font-medium">k8o</h1>
          </Link>
        </div>
      </header>
      <main className="flex grow justify-center bg-slate-300">
        <div className="w-full max-w-5xl p-4">{children}</div>
      </main>
    </div>
  );
};
