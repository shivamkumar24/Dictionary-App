import React from "react";
import "../Styles/Definitions.css";

const Definitions = ({ word, meanings }) => {
  return (
    <div className="meanings">
      {word === "" ? (
        <span className="subTitle">Start by typing a word in search box</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((el) => (
              <div
                className="singleMean"
                style={{
                  backgroundColor: "white",
                  color: "black",
                }}
              >
                <b>{el.definition}</b>
                <hr style={{ backgroundColor: "black", width: "100%" }} />
                {el.example && (
                  <span>
                    <b>Example :</b> {el.example}
                  </span>
                )}
                {el.synonyms && (
                  <span>
                    <b>Synonyms :</b> {el.synonyms.map((s) => `${s}, `)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definitions;
