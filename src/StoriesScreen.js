import React, { useState, useEffect } from "react";
import "./style.css";

export default function StoriesScreen() {
  const [topStories, setTopStories] = useState([]);

  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
      .then(response => response.json())
      .then(data => {
        for (let i = 0; i < 10; i++) {
          // onApiCall(data[i]);
        }
      });
  });

  // useEffect(() => {
  //   if (topStories?.length) {
  //     console.log("topStories");
  //     for (let i = 0; i < topStories.length; i++) {
  //       onApiCall(
  //         "https://hacker-news.firebaseio.com/v0/item/26925197.json?print=pretty"
  //       );
  //     }x
  //   }
  // }, [topStories]);

  const onApiCall = id => {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
      .then(response => response.json())
      .then(data => {
        topStories.push(data);
        setTopStories(topStories);
      });
  };

  const timeStampConvertor = timeStamp => {
    let dateStamp = new Date(timeStamp);
    return dateStamp;
  };
  // console.log(topStories);
  return (
    <div>
      <div style={{ background: "red", width: "100%" }}>
        <h1>Hacker News</h1>
        <p>Top 10 Stories</p>
      </div>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {topStories?.length > 0 &&
          topStories.map((doc, index) => (
            <div key={index}>
              <div>{doc.title}</div>
              <div>{doc.time}</div>
            </div>
          ))}
      </div>
    </div>
  );
}