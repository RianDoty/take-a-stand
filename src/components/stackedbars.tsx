import React, { useContext } from "react";

const MaxContext = React.createContext(1);

export function StackedBars({
  children,
  max,
}: {
  children: React.ReactNode;
  max: number;
}) {
  return (
    <div className="breakdown">
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
  color: string;
}) {
  const max = useContext(MaxContext);

  return (
    <div
      className="bar"
      style={{
        height: `${(amt / max) * 100}%`,
        backgroundColor: color,
      }}
    >
      {(amt / max) * 100}
      <img src={src} />
    </div>
  );
}
