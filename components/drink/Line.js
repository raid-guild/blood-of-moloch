export default function Line(bgColor) {
  let color = bgColor ? bgColor : `#D52731`;
  return (
    <>
      <div
        style={{
          position: `absolute`,
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
          transform: `translateX(35vw) translateY(-10vw)`,
        }}
      >
        <div
          style={{
            borderRadius: `100px`,
            width: `12px`,
            height: `12px`,
            backgroundColor: color,
          }}
        ></div>
        <div
          style={{
            height: `30vw`,
            width: `5px`,
            backgroundColor: color,
            transform: `translateY(-8px)`,
          }}
        ></div>
        <div
          style={{
            borderRadius: `100px`,
            width: `12px`,
            height: `12px`,
            backgroundColor: color,
            transform: `translateY(-16px)`,
          }}
        ></div>
      </div>
    </>
  );
}
