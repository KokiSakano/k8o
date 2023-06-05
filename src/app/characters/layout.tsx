export const metadata = {
  title: 'Characters',
  description:
    '入力した文字列の検索など、文章や文字列に対する操作を提供します。',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-medium">Characters</h2>
      {children}
    </div>
  );
}