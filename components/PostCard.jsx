import React from "react";
import { AuthorDetails } from ".";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md  mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="w-full h-80 object-cover object-top shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
      <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 font-semibold">
        <Link href={`/posts/${post.slug}`}>{post.title}</Link>
      </h1>
      <AuthorDetails post={post} />
      <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
        {post.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
