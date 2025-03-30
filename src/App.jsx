import { useState } from "react";

// ユーティリティクラスを複数行に分割しつつ、重複や競合を整理してくれる関数
import { twMerge } from "tailwind-merge";

function App() {
  const [count, setCount] = useState(0);
  const countUp = () => setCount(count + 1);
  return (
    // text-center: テキストを中央揃えにする
    <div className="text-center">
      {/* 
        mb-2: 下側のマージンを0.5rem (8px)に設定
        text-2xl: フォントサイズを1.5rem (24px)に設定
        font-bold: フォントの太さを太字に設定
      */}
      <h1 className="mb-2 text-2xl font-bold">Counter test</h1>
      <p>{count}</p>
      <button
        className={twMerge(
          // rounded-md: 角を丸くする (border-radius: 0.375rem)
          // px-3: 左右のパディングを0.75rem (12px)に設定
          // py-1: 上下のパディングを0.25rem (4px)に設定
          "rounded-md px-3 py-1",

          // bg-indigo-500: 背景色をインディゴ色のカラーパレット500に設定
          // text-white: テキスト色を白に設定
          "bg-indigo-500 text-white",

          // hover:bg-indigo-500/75: ホバー時に背景色を75%の透明度のインディゴ500に変更
          "hover:bg-indigo-500/75",

          // hover:cursor-pointer: ホバー時にカーソルをポインター（手の形）に変更
          "hover:cursor-pointer",
        )}
        onClick={countUp}
      >
        カウントアップ
      </button>
    </div>
  );
}

export default App;
