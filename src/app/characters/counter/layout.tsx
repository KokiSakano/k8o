import { Heading } from '@/app/_components/heading';

export const metadata = {
  title: '文字数カウンター',
  description: '入力した文字数をカウントします。',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4">
      <Heading type="h3">文字数カウンター</Heading>
      {children}
    </div>
  );
}
