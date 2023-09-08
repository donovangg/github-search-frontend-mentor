import React from "react";

const DefaultCard = () => {
  return (
    <div className="w-96 border-2 bg-white border-green-500 flex flex-col gap-4">
      <div className="w-64 border-2 border-purple-400 flex gap-2 p-1 mx-auto">
        <div>
          <img
            className="w-16 h-16 rounded-full "
            src="/assets/octocat.png"
            alt="avatar"
          />
        </div>
        <div>
          <h3>Octocat</h3>
          <a href="https://github.com/github" target="_blank">
            @Octocat
          </a>
          <p>Joined 25 Jan 2011</p>
        </div>
      </div>
      <div className="w-60 border-red-500 mx-auto border-2">
        How people build software.
      </div>
      <div className="w-60 bg-light-gray border-purple-500 border-2 mx-auto">
        <div className="flex gap-2 justify-center border-2 light-gray border-slate-600">
          <div className=" text-center">
            <h3>Repos</h3>
            <p>8</p>
          </div>
          <div className=" text-center">
            <h3>Followers</h3>
            <p>
              <a
                href="https://github.com/orgs/github/followers"
                target="_blank"
              >
                28.5k
              </a>
            </p>
          </div>
          <div className=" text-center">
            <h3>Following</h3>
            <p>
              <a href="#" target="_blank">
                9
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="border-2 border-red-700 w-60 mx-auto">
        <ul className="flex flex-col gap-2">
          <li className="flex gap-2">
            <img
              className="w-3.5 h-5"
              src="/assets/icon-location.svg"
              alt="location"
            />
            <p>San Francisco</p>
          </li>

          <li className="flex gap-2">
            <img
              className="w-5 h-5"
              src="/assets/icon-website.svg"
              alt="website"
            />
            <a href="https://github.blog/" target="_blank">
              https://github.blog/
            </a>
          </li>
          <li className="flex gap-2">
            <img
              className="w-5 h-5 opacity-25"
              src="/assets/icon-twitter.svg"
              alt="twitter"
            />
            <a
              href="https://twitter.com/github"
              className="opacity-25"
              target="_blank"
            >
              Not Available
            </a>
          </li>
          <li className="flex gap-2">
            <img
              className="w-5 h-5"
              src="/assets/icon-company.svg"
              alt="company"
            />
            <a
              href="https://new-game.fandom.com/wiki/Eagle_Jump"
              target="_blank"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DefaultCard;
