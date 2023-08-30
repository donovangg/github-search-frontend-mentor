"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import GithubForm from "./GithubForm";
import UserCard from "./UserCard";

const Card = () => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);

  const searchUser = async (query: any) => {
    try {
      const res = await fetch(`https://api.github.com/users/${query}`);
      const data = await res.json();
      setUser(data);
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Navbar />
      <GithubForm user={user} setUser={setUser} searchUser={searchUser} />
      <UserCard />
    </div>
  );
};

export default Card;
