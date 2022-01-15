import React, { useEffect } from "react";

const Comments = ({ slug }) => {
  useEffect(() => {
    window.disqus_config = function () {
      this.page.url = window.location.href;
      this.page.identifier = slug;
    };

    const script = document.createElement("script");
    script.src = "https://grahpl-blog.disqus.com/embed.js";
    script.setAttribute("data-timestamp", Date.now().toString());

    document.body.appendChild(script);
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-18">
      <div id="disqus_thread"></div>
    </div>
  );
};

export default Comments;
