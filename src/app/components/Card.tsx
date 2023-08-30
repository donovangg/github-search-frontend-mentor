"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import GithubForm from "./GithubForm";
import UserCard from "./UserCard";
import UserData from "../UserData";

const Card = () => {
  const [user, setUser] = useState<UserData | null>(null);
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

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div>
      <Navbar />
      <GithubForm user={user} setUser={setUser} searchUser={searchUser} />
      <UserCard user={user} />
    </div>
  );
};

export default Card;
