const Others = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(500px, 1fr))",
        justifyItems: "center",
      }}
    >
      {Array.from({ length: 40 }).map((_, index) => (
        <img
          key={index}
          src="/images/500x500.png"
          alt="img alt"
          height={500}
          width={500}
          style={{ margin: "1rem" }}
        ></img>
      ))}
    </div>
  );
};

export default Others;
