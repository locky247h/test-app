import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

export const Home = () => {
  
  return (
    <div className="py-8">
      <div className="max-w-[800px] mx-auto">
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`} className="block mb-8 border-4 border-gray-300 p-4">
                <div className="flex justify-between pb-3">
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
                  className="line-clamp-2 w-120 py-3" 
                  dangerouslySetInnerHTML={{ __html: post.content }}
                  >
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

