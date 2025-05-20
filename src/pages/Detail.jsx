import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { posts } from '../data/posts';

export const Detail = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

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
