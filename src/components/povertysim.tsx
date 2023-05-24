import React, { FunctionComponent, useState } from "react";
import { ProgressManager } from "./progress";

export function PovertySim1() {



  return <canvas width="240" height="240" />;
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
