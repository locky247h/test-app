import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Detail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null)

  // APIでpostsを取得する処理をuseEffectで実行します。
  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch(`https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`)
      const data = await res.json()
      setPost(data.post)
    }

    fetcher()
  }, [id])

  if (!post) return <div>記事が見つかりません</div>;

  return (
    <div className="py-8">
      <div className="max-w-[800px] mx-auto">
        <img src={post.thumbnailUrl} alt="" />
          <ul>
            <li key={post.id}>
              <div className="flex justify-between pb-3 mt-4">
                <div className="text-xs">
                  {new Date(post.createdAt).toLocaleDateString()}
                </div>
                <div className="flex  space-x-2">
                  {post.categories.map((category) => {
                    return (
                      <div key={category} className="border-2 border-blue-300 rounded px-2 py-0.5 text-sm text-blue-300">
                      {category}
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="text-2xl ">
                  {post.title}
              </div>
              <div 
                className="py-4" 
                dangerouslySetInnerHTML={{ __html: post.content }}
                >
              </div>
            </li>
        </ul>
      </div>
    </div>
  );
};
