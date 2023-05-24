import * as React from "react";
import { Link } from "wouter";
import { SimLayout, PovertySim, ProgressGroup } from '../components/povertysim'

//Home page
export default function Home() {
  return (
    <>
      <h1 className="title">welcome to the home</h1>
      <h2>During COVID-19, {"<statistic>"}</h2>
      <SimLayout sim={PovertySim}>
        <ProgressGroup>
            Let's say that you work a minimum wage. As of 2023 in America, that means that
            you'd make a solid $7.25 for each hour you'd be working.
            <div className="muted">Psst! Move the "salary" slider to $7.25! </div>
        </ProgressGroup>
      </SimLayout>
    </>
  );
}
