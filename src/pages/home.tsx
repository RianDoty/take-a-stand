import { useState } from "react";
import { Link } from "wouter";
import { SimLayout, PovertySim1, PovertySim2, PovertySim3 } from "../components/povertysim";
import { ProgressManager, ProgressGroup, Exclusive } from "../components/progress";

//Home page
export default function Home() {


  return (
    <>
          <h1 className="title">welcome to the home</h1>
          <h2>
            During COVID-19, 18 million people reported not having
            consistent access to food.
          </h2>
          <p className="inverted">
            It's fairly safe to say that COVID-19 shut down the world as we
            knew it. But when you shut down the world, you shut down supply
            chains. And when you shut down supply chains, prices rise
            like <i>crazy,</i> endangering the food and fuel security
            of many who, had they been living just a few years earlier,
            would be perfectly fine.
          </p>
          <p>
            Fast forward to 2023, and the lasting effects on the <b>Cost of
              Living,</b> or the total amount of money spent on basic needs,
            are still suffered by many. Food prices are up 19.1%, electricity
            prices are up 67%, and domestic gas prices are up <i>129%</i> from just
            last year.
          </p>
          <p className="inverted">
            People can always speculate on how these prices are going to
            change or fluctuate in the future, but that can't change one simple
            fact:<br /><br />

            People need financial security, <i>now,</i> and they aren't getting it.<br /><br />
            <Link to='/information' style={{background: 'lightgray', padding: '5px', borderRadius: '7px'}}>How can we, Labor Unions for All, change that?</Link>
          </p>
        
    </>
  );
}
