"use client";

import React, { useState, useEffect } from "react";

type FormProps = {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  searchUser: (query: any) => Promise<void>;
};

const GithubForm = ({ user, setUser, searchUser }: FormProps) => {
  const [queryHandler, setQueryHandler] = useState("");

  const handleSearch = (e: any) => {
    e.preventDefault();
    searchUser(queryHandler);
    setQueryHandler("");
  };

  return (
    <div className="w-80 border-2 border-pink-500">
      <form className="w-full border-2 border-orange-400">
        <div className="flex">
          <span>
            <img src="/assets/icon-search.svg" alt="search icon" />
          </span>
          <input
            className="w-full"
            type="text"
            value={queryHandler}
            onChange={(e) => setQueryHandler(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </form>
    </div>
  );
};

export default GithubForm;
