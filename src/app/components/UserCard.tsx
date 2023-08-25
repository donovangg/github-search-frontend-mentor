"use client";

import React from "react";

const UserCard = () => {
  return (
    <div className="w-80 border-2 border-green-500 flex flex-col gap-4">
      <div className="w-60 border-2 border-purple-400 flex gap-2 p-1 mx-auto">
        <div>
          <img
            className="w-16 h-16 rounded-full"
            src="https://avatars.githubusercontent.com/u/29687217?v=4"
            alt="avatar"
          />
        </div>
        <div>
          <h3>The Octocat</h3>
          <a href="">@octocat</a>
          <p>Joined 25 Jan 2011</p>
        </div>
      </div>
      <div className="w-60 border-red-500 mx-auto border-2">
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </p>
      </div>
      <div className="w-60 border-purple-500 border-2 mx-auto">
        <div className="flex gap-2 justify-center border-2 border-slate-600">
          <div className="border-2 border-pink-400 text-center">
            <h3>Repos</h3>
            <p>8</p>
          </div>
          <div className="border-2 border-pink-400 text-center">
            <h3>Followers</h3>
            <p>3938</p>
          </div>
          <div className="border-2 border-pink-400 text-center">
            <h3>Following</h3>
            <p>9</p>
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
            <a href="#">Sunlight Tea Studio</a>
          </li>
          <li className="flex gap-2">
            <img
              className="w-5 h-5"
              src="/assets/icon-website.svg"
              alt="website"
            />
            <a href="#">hireme.net</a>
          </li>
          <li className="flex gap-2">
            <img
              className="w-5 h-5"
              src="/assets/icon-twitter.svg"
              alt="twitter"
            />
            <a href="#">@hireme</a>
          </li>
          <li className="flex gap-2">
            <img
              className="w-5 h-5"
              src="/assets/icon-company.svg"
              alt="company"
            />
            <a href="#">Your Company</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserCard;
