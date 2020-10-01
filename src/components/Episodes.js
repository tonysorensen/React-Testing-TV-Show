import React from "react";
import parse from "html-react-parser";

export default function Episodes(props) {
  // console.log("Props from Episodes Component", props);
  return (
    <section className="episode-list">
      {props.error ? (
        <div data-testid="episodes-error" className="error">
          {props.error}
        </div>
      ) : (
        <div className="episodes">
          {props.episodes.map((e) => (
            <div data-testid="episode" className="episode" key={e.id}>
              {e.image && (
                <img
                  className="episode-image"
                  src={e.image.medium}
                  alt={e.name}
                />
              )}
              <div className="episode-info">
                <p className="episode-number">
                  Season {e.season}, Episode {e.number}
                </p>
                <h3>{e.name}</h3>
                {e.summary && parse(e.summary)}
                <div className="flex-spacer" />
                <p className="episode-runtime">{e.runtime} minutes</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
