"use client";

import React, { useState, useEffect } from "react";
import UserData from "../UserData";

type FormProps = {
  user: UserData | null; // Use UserData type here
  setUser: React.Dispatch<React.SetStateAction<UserData | null>>; // Use the same type
  searchUser: (query: string) => Promise<void>; // Specify query as string
};

const GithubForm = ({ user, setUser, searchUser }: FormProps) => {
  const [queryHandler, setQueryHandler] = useState("");

  const handleSearch = (e: any) => {
    e.preventDefault();
    searchUser(queryHandler);
    setQueryHandler("");
  };

  return (
    <div className="w-96 border-2 border-pink-500">
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
