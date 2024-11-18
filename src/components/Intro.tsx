import { BOARD_TITLE, RULES } from "../helpers/constants";

const Intro = () => {
  if (!BOARD_TITLE && !RULES) return <></>; // Check if optional constants are defined

  return (
    <div className="intro-wrapper">
      <h1>{BOARD_TITLE}</h1>
      {RULES && (
        <>
          <h3>Rules:</h3>
          <ol className="rules-list">
            {RULES.map((rule, index) => {
              return <li key={index}>{rule}</li>;
            })}
          </ol>
        </>
      )}
    </div>
  );
};

export default Intro;
