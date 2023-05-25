import { useState } from "react";
import { Link } from "wouter";
import { SimLayout, PovertySim1 } from "../components/povertysim";
import { ProgressManager, ProgressGroup, Exclusive } from "../components/progress";

//Home page
export default function Home() {
  
  const [progress, setProgress] = useState(0);

  function progressMain() {
    setProgress((p:number) => p+1)
  }

  return (
    <>
      <h1 className="title">welcome to the home</h1>
      
      <h2>During COVID-19, {"<statistic>"}</h2>
      <ProgressManager progress={progress} exclusive={true}>
        <ProgressGroup>
          <SimLayout sim={PovertySim1}>
            <ProgressGroup>
              <Exclusive progress={0}><button>Unlock Everything (for grading)</button></Exclusive>
              <br/>
              Let's say that you work at minimum wage. As of 2023 in America, that
              means that you'd make at least $7.25 for each hour you'd be working.
              <Exclusive progress={0}><div className="muted">
                Psst! Move the "salary" slider to $7.25!{" "}
              </div></Exclusive>
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
              <button onClick={progressMain}>The real situation...</button>
            </ProgressGroup>
          </SimLayout>
        </ProgressGroup>

        <ProgressGroup>
          ...is much worse.<br/><br/>
          Taking into account inflation rates from the past 14 years,
          that $7.25
        </ProgressGroup>
      </ProgressManager>
    </>
  );
}
