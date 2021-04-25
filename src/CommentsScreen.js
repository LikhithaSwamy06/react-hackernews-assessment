import React, { useState, useEffect } from "react";
import { timeStampConvertor } from "./timestampconvertor.js";
import "./style.css";

export default function CommentsScreen(props) {
  const { kids } = props.location.state;
  const { title } = props.location.state;
  const [comments, setComments] = useState([]);

  useEffect(() => {
    for (let i = 0; i < (kids.length > 20 ? 20 : kids.length); i++) {
      fetch(
        `https://hacker-news.firebaseio.com/v0/item/${
          kids[i]
        }.json?print=pretty`
      )
        .then(response => response.json())
        .then(data => {
          comments.push(data);
          setComments([...comments]);
        });
    }
  }, []);

  return (
    <div>
      <div style={{ background: "red", width: "100%" }}>
        <h1>{title}</h1>
        <p>Top 20 Comments</p>
      </div>
      <div>
        {comments?.length > 0 &&
          comments.map((doc, index) => (
            <div key={index} style={{ margin: "10px" }}>
              <div style={{ fontWeight: "bold" }}>
                {index + 1}.{doc.by}
              </div>
              <div style={{ color: "#888" }}>{doc.time}</div>
              <div>{doc.text}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
