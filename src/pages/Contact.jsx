import React, { useState } from "react";

export const Contact = () => {

  
  return(
    <div className="max-w-[800px] mx-auto py-8 px-4">
    <h1 className="text-xl font-bold mb-15">問い合わせフォーム</h1>
    <form onSubmit="" className="space-y-6">
      {/* お名前 */}
      <div className="flex items-start">
        <label className="w-28 pt-2">お名前</label>
        <div className="flex-1 ml-10 pb-5">
          <input
            type="text"
            className="w-full border p-2 rounded-md"
            value=''
            onChange=''
          /> 
        </div> 
      </div>

      {/* メールアドレス */}
      <div className="flex item-start">
        <label className="w-28 pt-2">メールアドレス</label>
        <div className="flex-1 ml-10 pb-5">
          <input
          type="email"
          className="w-full border p-2 rounded-md"
          value=""
          onChange=""
          />
        </div>
      </div>

      {/* 本文 */}
      <div className="flex items-start">
        <label className="w-28 pt-2">本文</label>
        <div className="flex-1 ml-10 pb-5">
          <textarea
            className="w-full border p-2 rounded-md"
            rows={5}
            value=""
            onChange=""
          />
        </div>
      </div>

      {/* ボタン */}
      <div className="flex space-x-4 justify-center pt-4">
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded-md"
        >
          送信
        </button>
        <button
        type="button"
        className="bg-gray-300 text-black px-4 py-2 rounded-md"
        onclick={()=> {
          setName('');
          setEmail('');
          setMessage('');
        }}
        >
          クリア
        </button>
      </div>
      </form>
  </div>
  );
}
