import React from "react";
import moment from "moment";

const AuthorDetails = ({ post }) => {
  return (
    <div className="block lg:flex text-center items-center  mb-8 w-full">
      <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
        <img
          src={post.author.photo.url}
          alt={post.author.name}
          className="align-middle roudned-full"
          height="30px"
          width="30px"
        />
        <p className="inline align-middle text-gray-700 ml-2 text-lg">
          {post.author.name}
        </p>
      </div>
      <div className="font-mediun text-gray-700">
        <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
      </div>
    </div>
  );
};

export default AuthorDetails;
