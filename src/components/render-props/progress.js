export default function Progressbar({ bgcolor = "orange", progress = 0 }) {
  const Parentdiv = {
    // height: height,
    heigh: "20px",
    width: "100%",
    backgroundColor: "whitesmoke",
    borderRadius: 5,
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 5,
    textAlign: "right",
  };

  const progresstext = {
    padding: 5,
    color: "black",
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
  );
}
