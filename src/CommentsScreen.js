import React, { useState, useEffect } from "react";
import "./style.css";

export default function CommentsScreen(props) {
  const { kids } = props.location.state;
  const [topStories, setTopStories] = useState([]);

  useEffect(() => {
    for (let i = 0; i < (kids.length > 20 ? 20 : kids.length); i++) {
      fetch(
        `https://hacker-news.firebaseio.com/v0/item/${
          kids[i]
        }.json?print=pretty`
      )
        .then(response => response.json())
        .then(data => {
          // setTopStoriesIds([...data]);
          // console.log("enter");
          // for (let i = 0; i < 10; i++) {
          console.log("is", data);
          // onApiCall(data[i]);
          // }
        });
    }
  }, []);

  const timeStampConvertor = timeStamp => {
    let dateStamp = new Date(timeStamp);
    return dateStamp;
  };
  // console.log("topStories", topStories);
  return (
    <div>
      <div style={{ background: "red", width: "100%" }}>
        <h1>sdfsdfsdfs Nedfsdfsdws</h1>
        <p>Top 20 Comments</p>
      </div>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {topStories?.length > 0 &&
          topStories.map((doc, index) => (
            <div
              key={index}
              onClick={() => props.history.push("/")}
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
