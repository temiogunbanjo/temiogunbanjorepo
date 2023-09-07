import React from "react";
import { Avatar, IconButton } from "@mui/material";
import { BsHeart as LeftIcon } from "react-icons/bs";

const BasicsOfProgramming = () => {
  return (
    <>
      <section style={{ minHeight: "unset" }}>
        <h2
          className="text-6xl font-bold mb-10"
          style={{ color: "var(--text-color)" }}
        >
          Learn The Basics of Programming
        </h2>
        <div className="flex flex-row items-center">
          <Avatar />
          <div className="ml-6">
            <h4
              className="text-2xl mb-1"
              style={{ color: "var(--text-color)" }}
            >
              Ogunbanjo Temiloluwa
            </h4>
            <span className="text-md" style={{ color: "var(--light-text-color)" }}>
              Published on Aug 24, 2023
            </span>
          </div>
        </div>
        <div className="border-t border-b p-3 mt-10">
          <IconButton
            href="/home"
            className="flex flex-row items-center rounded-md"
            sx={{
              mr: "auto",
              borderRadius: "8px",
              color: "var(--primary-color-light)",
            }}
          >
            <LeftIcon />
          </IconButton>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <h3
          className="text-5xl font-medium"
          style={{ color: "var(--text-color)" }}
        >
          Table of Contents
        </h3>
        <article>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            tempora esse, corporis eveniet, maxime iste repudiandae, deleniti
            quam ipsam facilis tenetur adipisci eligendi iure! Quia magni porro
            rerum ad ipsam.
          </p>
        </article>
      </section>
    </>
  );
};

export default BasicsOfProgramming;
