import { useState } from "react";
import { Link } from "wouter";
import { SimLayout, PovertySim1 } from "../components/povertysim";
import { ProgressManager, ProgressGroup } from "../components/progress";

//Home page
export default function Home() {
  const [progress, setProgress] = useState(0);

  return (
    <>
      <h1 className="title">welcome to the home</h1>
      <h2>During COVID-19, {"<statistic>"}</h2>
      <ProgressManager progress={progress}>
        <SimLayout sim={PovertySim1}>
          <ProgressGroup>
            Let's say that you work a minimum wage. As of 2023 in America, that
            means that you'd make a solid $7.25 for each hour you'd be working.
            <div className="muted">
              Psst! Move the "salary" slider to $7.25!{" "}
            </div>
          </ProgressGroup>
          <ProgressGroup>
            That seems like a pretty good monthly salary! <br />
            Comparing it to the montly costs, that leaves a pretty good chunk of
            pocket change.
          </ProgressGroup>
          <ProgressGroup>
            Except... <br />
            Those aren't numbers from 2023. <br />
            <i>Those are the numbers from 2009.</i>
          </ProgressGroup>
        </SimLayout>
      </ProgressManager>
    </>
  );
}
