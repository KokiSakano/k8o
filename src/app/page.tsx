import { AppCard } from './_components/app-card';
import { Heading } from './_components/heading';

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Heading type="h2">Collection</Heading>
      <AppCard
        link="/characters"
        emotion="📄"
        title="Characters"
        description="テキストエリアに入力した文字数をカウントする機能など、文字に対する操作についての機能を提供するサービスです。"
      />
      <AppCard
        link="/converter"
        emotion="🧬"
        title="Converter"
        description="入力した数値の進数変換など、いくつかの変換処理を提供します。"
      />
      <AppCard
        link="/blog"
        emotion="📕"
        title="Blog"
        description="ブログです。"
      />
    </div>
  );
}
