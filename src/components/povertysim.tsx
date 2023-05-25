import React, { FunctionComponent, useState } from "react";
import { ProgressManager } from "./progress";
import { StackedBars, Bar } from "./stackedbars";

export function PovertySim1() {
  return (
    <div className="povertysim" style={{ width: "240px", height: "240px" }}>
      <StackedBars max={20000}>
        <Bar src="" amt={600} color="#FDE74C" />
        <Bar src="" amt={10000} color="#236711" />
        
      </StackedBars>
    </div>
  );
}

export function SimLayout({
  children,
  sim: Sim,
}: {
  children: React.ReactNode;
  sim: FunctionComponent<{ onProgress: () => void }>;
}) {
  const [progressIndex, setProgress] = useState(0);

  function onProgress() {
    setProgress((p: number) => p + 1);
  }

  return (
    <div className="simlayout">
      <div className="simlayout-text">
        <ProgressManager progress={progressIndex}>{children}</ProgressManager>
      </div>
      <div className="simlayout-povertysim">
        <Sim onProgress={onProgress} />
        <button onClick={onProgress}>Progress</button>
      </div>
    </div>
  );
}
