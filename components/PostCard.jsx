import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { graphCMSImageLoader } from '../util';

const PostCard = ({ post }) => (
  <div className="bg-white shadow-lag rounded-lg p-0 lg:p-8 pb-12 mg-8 mb-8">
    <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img 
            src={post.featuredImage.url}
            alt={post.title}
            className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
    </div>   
    <h1 className="transition duration-100 text-center text-gray-700 mb-1 cursor-pointer hover:text-yellow-500 text-2xl font-semibold">
        <Link href={`/post/${post.slug}`}>
            {post.title}
        </Link>
    </h1>
    <div className="bloc text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-1 w-full mr-8">
            <img
                alt={post.author.name}
                height="300px"
                width="30px"
                className="align-middle rounded-full"
                src={post.author.photo.url}
            />
            <p className="inline align-middle text-gray-700 ml-2 text-base">{post.author.name}</p>
        </div>
        <div className="font-medium text-gray-700 mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>
                {moment(post.createdAt).format('MMM DD, YYYY')}
            </span>
        </div>
        <p className="text-center text-base text-gray-700 font-normal px-4 lg:pd-20 mb-6">{post.excerpt}</p>
        <div className="text-center">
            <Link href={`/post/${post.slug}`}>
                <span className="transition duration-400 transform hover:-translate-y-1 hover:bg-yellow-500 inline-block bg-gray-200 text-lg font-medium rounded-full text-gray-500 hover:text-white px-8 py-2 cursor-pointer">
                    続きを読む
                </span>
            </Link>
        </div>
    </div>
  </div>
);

export default PostCard;
