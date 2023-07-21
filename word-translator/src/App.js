import "./App.css";
import axios from "axios";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Definitions from "./Components/Definitions";
import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";

function App() {
  const [word, setWord] = useState("");
  const [category, setCategory] = useState("en");
  const [meanings, setMeanings] = useState([]);

  // Create a API Calling function
  const dictionaryAPI = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      setMeanings(data.data);
    } catch (error) {
      console.log("fetch-error", error);
    }
  };

  console.log(meanings);
  console.log(category);
  console.log(word);

  useEffect(() => {
    dictionaryAPI();
  }, [word, category]);

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        color: "#282c34",
        fontWeight: "bold",
        backgroundColor: "white",
        transition: "all 0.5s linear",
      }}
    >
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          height: "100vh",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
          setMeanings={setMeanings}
        />

        {meanings && <Definitions word={word} meanings={meanings} />}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
