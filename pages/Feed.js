const Feed = () => {
  return (
    <div className="w-[80%]">
      <h1 className="text-start text-white text-3xl">Your Feed</h1>

      <div className="flex justify-between px-6 py-4">
        <div className="flex flex-col gap-4 pb-4 pr-6 sm:w-20 sm:gap-0 text-white sm:pb-0">
          <button
            className="inline-flex items-center justify-center text-sm font-medium   h-9  px-3"
            aria-label="upvote"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-5 w-5 text-secondary-foreground"
            >
              <path d="M9 18v-6H5l7-7 7 7h-4v6H9z"></path>
            </svg>
          </button>
          <p className="py-2 text-center text-sm font-medium ">0</p>
          <button
            className="inline-flex items-center justify-center text-sm font-medium    h-9  px-3"
            aria-label="downvote"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-5 w-5 text-secondary-foreground"
            >
              <path d="M15 6v6h4l-7 7-7-7h4V6h6z"></path>
            </svg>
          </button>
        </div>
        <div className="w-0 flex-1">
          <div className="mt-1 max-h-40 text-xs text-white ">
            <a className="text-sm underline underline-offset-2" href="/r/funny">
              funny
            </a>
            <span className="px-1">•</span>
            <span>Posted by</span>{" "}
          </div>
          <a href="/r/funny/post/clmyl0tb30001l708d3ykop7l">
            <h1 className="py-2 text-lg text-white font-semibold leading-6 ">
              Test Post
            </h1>
          </a>
          <div className="relative max-h-40 w-full text-white  text-sm">
            <p
              style={{
                margin: "5px 0px",
                textAlign: "left",
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
              }}
            >
              Test
            </p>
          </div>
        </div>
      </div>

      <div className="z-20 bg-secondary px-4 py-4 text-white text-sm sm:px-6">
        <a
          className="flex w-fit items-center gap-2"
          href="/r/funny/post/clmyl0tb30001l708d3ykop7l"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-4 w-4"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>{" "}
          comments
        </a>
      </div>
    </div>
  );
};

export default Feed;
