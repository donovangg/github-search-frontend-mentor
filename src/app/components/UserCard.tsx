"use client";

import React from "react";
import UserData from "../UserData";

type UserCardProps = {
  user: UserData | null;
};

const UserCard = ({ user }: UserCardProps) => {
  if (!user || Object.keys(user).length === 0) {
    return <div>Loading...</div>; // or some other loading indicator
  }
  return (
    <div className="w-80 border-2 border-green-500 flex flex-col gap-4">
      <div className="w-60 border-2 border-purple-400 flex gap-2 p-1 mx-auto">
        <div>
          <img
            className="w-16 h-16 rounded-full"
            src={user.avatar_url}
            alt="avatar"
          />
        </div>
        <div>
          <h3>{user.name}</h3>
          <a href={user.html_url} target="_blank">
            @{user.login}
          </a>
          {/* <p>Joined {user.created_at}</p> */}
        </div>
      </div>
      <div className="w-60 border-red-500 mx-auto border-2">
        {user.bio ? <p>{user.bio}</p> : ""}
      </div>
      <div className="w-60 border-purple-500 border-2 mx-auto">
        <div className="flex gap-2 justify-center border-2 border-slate-600">
          <div className="border-2 border-pink-400 text-center">
            <h3>Repos</h3>
            <p>{user.public_repos}</p>
          </div>
          <div className="border-2 border-pink-400 text-center">
            <h3>Followers</h3>
            <p>
              <a href={user.followers_url} target="_blank">
                {user.followers}
              </a>
            </p>
          </div>
          <div className="border-2 border-pink-400 text-center">
            <h3>Following</h3>
            <p>
              <a href={user.following_url} target="_blank">
                {user.following}
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="border-2 border-red-700 w-60 mx-auto">
        <ul className="flex flex-col gap-2">
          {user.location ? (
            <li className="flex gap-2">
              <img
                className="w-3.5 h-5"
                src="/assets/icon-location.svg"
                alt="location"
              />
              <p>{user.location}</p>
            </li>
          ) : (
            ""
          )}
          {user.blog ? (
            <li className="flex gap-2">
              <img
                className="w-5 h-5"
                src="/assets/icon-website.svg"
                alt="website"
              />
              <a href="#">{user.blog}</a>
            </li>
          ) : (
            ""
          )}
          {user.twitter_username ? (
            <li className="flex gap-2">
              <img
                className="w-5 h-5"
                src="/assets/icon-twitter.svg"
                alt="twitter"
              />
              <a href="https://twitter.com/" target="_blank">
                @{user.twitter_username}
              </a>
            </li>
          ) : (
            ""
          )}
          {user.company ? (
            <li className="flex gap-2">
              <img
                className="w-5 h-5"
                src="/assets/icon-company.svg"
                alt="company"
              />
              <a href="#">{user.company}</a>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
    </div>
  );
};

export default UserCard;
