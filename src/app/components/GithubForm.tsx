"use client";

import React from "react";

const GithubForm = () => {
  return (
    <div className="w-80 border-2 border-pink-500">
      <form className="w-full border-2 border-orange-400">
        <div className="flex">
          <span>
            <img src="/assets/icon-search.svg" alt="search icon" />
          </span>
          <input className="w-full" type="text" />
          <button>Search</button>
        </div>
      </form>
    </div>
  );
};

export default GithubForm;
