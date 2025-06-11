import React, { useState } from "react";

export const Contact = () => {
  // ユーザーが入力した文字を保持する状態
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // エラー状態管理
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const valid = () => {
    let isValid = true;

    //名前のバリデーション
    if (!name) {
      setNameError('名前は必須です');
      isValid = false;
    } else if (name.length > 30) {
      setNameError('名前は30文字以内で入力してください');
      isValid = false;
    } else {
      setNameError('');
    }

    //メールのバリデーション
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email){
      setEmailError('メールアドレスは必須です');
      isValid = false;
    } else if (!emailPattern.test(email)) {
      setEmailError('有効なメールアドレスを入力してください');
      isValid = false;
    } else {
      setEmailError('');
    }

    // 本文のバリデーション
    if (!message) {
      setMessageError('本文は必須です');
      isValid = false;
    } else if (message.length > 500) {
      setMessageError('本文は500文字以内で入力してください');
      isValid = false;
    } else {
      setMessageError('');
    }

    if (!isValid) return;

    return isValid;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!valid()) return;
  
    try {
      const res = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
      });

      const data = await res.json();

      alert("送信しました！");
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error("送信に失敗しました", error);
      alert("送信に失敗しました。もう一度お試しください。");
    }
  };

  return(
    <div className="max-w-[800px] mx-auto py-8 px-4">
    <h1 className="text-xl font-bold mb-15">問い合わせフォーム</h1>
    <form onSubmit={handleSubmit} className="space-y-6">

      {/* お名前 */}
      <div className="flex items-start">
        <label className="w-28 pt-2">お名前</label>
        <div className="flex-1 ml-10 pb-5">
          <input
            type="text"
            className="w-full border p-2 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          /> 
          {nameError && <p className="text-red-500 text-sm mt-1">{nameError}</p>}
        </div> 
      </div>

      {/* メールアドレス */}
      <div className="flex item-start">
        <label className="w-28 pt-2">メールアドレス</label>
        <div className="flex-1 ml-10 pb-5">
          <input
          type="email"
          className="w-full border p-2 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
        </div>
      </div>

      {/* 本文 */}
      <div className="flex items-start">
        <label className="w-28 pt-2">本文</label>
        <div className="flex-1 ml-10 pb-5">
          <textarea
            className="w-full border p-2 rounded-md"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {messageError && <p className="text-red-500 text-sm mt-1">{messageError}</p>}
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
        onClick={()=> {
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
