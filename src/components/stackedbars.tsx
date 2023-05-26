import React, { useContext } from "react";

const MaxContext = React.createContext(1);

export function StackedBars({
  children,
  max,
  style
}: {
  children: React.ReactNode;
  max: number;
  style?: React.CSSProperties
}) {
  return (
    <div className="breakdown" style={style}>
      <MaxContext.Provider value={max}>{children}</MaxContext.Provider>
    </div>
  );
}

export function Bar({
  src,
  amt,
  color,
}: {
  src: string;
  amt: number;
  color: `#${string}`;
}) {
  const max = useContext(MaxContext);

  return (
    <div
      className="bar"
      style={{
        height: `${Math.min((amt / max) * 100, 100)}%`,
        backgroundColor: color,
      }}
    >

      <img src={src} />
    </div>
  );
}
