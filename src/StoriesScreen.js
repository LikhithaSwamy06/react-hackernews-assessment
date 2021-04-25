import React, { useState, useEffect } from "react";
import { timeStampConvertor } from "./timestampconvertor.js";
import "./style.css";

export default function StoriesScreen(props) {
  const [topStories, setTopStories] = useState([]);
  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
      .then(response => response.json())
      .then(data => {
        for (let i = 0; i < 10; i++) {
          onApiCall(data[i]);
        }
      });
  }, []);

  const onApiCall = id => {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
      .then(response => response.json())
      .then(data => {
        topStories.push(data);
        setTopStories([...topStories]);
      });
  };

  return (
    <div>
      <div style={{ background: "red", width: "100%" }}>
        <h1>Hacker News</h1>
        <p>Top 10 Stories</p>
      </div>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {topStories?.length > 0 &&
          topStories.map((doc, index) => (
            <div
              key={index}
              onClick={() =>
                props.history.push({
                  pathname: "/comments",
                  state: doc
                })
              }
              style={{ margin: "20px", width: "200px", cursor: "pointer" }}
            >
              <div style={{ fontWeight: "bold" }}>{doc.title}</div>
              <div style={{ color: "#888" }}>{doc.time}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
