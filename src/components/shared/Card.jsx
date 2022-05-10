const Card = ({ children, reverse, classname }) => {
  // return (
  //   <div className={`card ${reverse && 'reverse'}`}>
  //     {children}
  //   </div>
  // );

  return (
    <div
      className={`card ${classname}`}
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
        color: reverse ? "#fff" : "#000",
      }}
    >
      {children}
    </div>
  );
};

Card.defaultProps = {
  reverse: false,
};

export default Card;
