import React, { FunctionComponent, useState } from "react";
import { ProgressManager } from "./progress";
import { StackedBars, Bar } from "./stackedbars";

import coins from '../assets/coin-stack.svg';
import chickenleg from '../assets/chicken-leg.svg';
import house from '../assets/house.svg';
import lightning from '../assets/lightning-bolt.svg';
import gascan from '../assets/gas-can.svg';
import cross from '../assets/health.svg';
import popcorn from '../assets/popcorn.svg';
import taxes from '../assets/taxes.svg';
import question from '../assets/question-mark.svg'

import puppetbliss from '../assets/puppet-bliss.png';
import puppethappy from '../assets/puppet-happy.png';
import puppetehh from '../assets/puppet-ehh.png';
import puppetohno from '../assets/puppet-ohno.png';
import puppetsadness from '../assets/puppet-sadness.png';
import puppetshock from '../assets/puppet-shock.png';

function PuppetReaction({ factor, style }: { factor: number, style?: React.CSSProperties }) {
  //Factor is earnings / costs
  const factorThresholds: [string, number][] = [
    [puppetshock, 0.3],
    [puppetsadness, 0.5],
    [puppetohno, 0.75],
    [puppetehh, 1.1],
    [puppethappy, 1.5],
    [puppetbliss, 999]
  ]

  function getReaction() {
    for (const [reaction, threshold] of factorThresholds) {
      if (factor <= threshold) return reaction;
    }
    return puppetehh
  }

  const reaction = getReaction();

  return <img src={reaction} style={style} />
}

export function PovertySim1({ onProgress }: { onProgress: (to: number) => any }) {
  const [salary, setSalary] = useState(0);
  const weeklyHours = 40;

  // 12 months per year * Avg of 4 weeks per month * 
  // X hours per week * Y salary per hour
  const yearlyEarnings = 12 * 4 * weeklyHours * salary

  const costs = {
    food: 3501,
    housing: 3291,
    utilities: 2238,
    gas: 1800
  }
  const totalCosts = Object.values(costs).reduce((a, b) => a + b)
  const factor = yearlyEarnings / totalCosts

  const preferred = 7.25
  function onChange(value: number) {
    const offset = preferred - value
    if (Math.abs(offset) < 2) {
      //ignore the lethal dose of math spaghetti here
      setSalary(value + offset / Math.exp((1 / ((offset - 2) * (offset + 2))) ** 2))
    } else {
      setSalary(value)
    }
  }

  function onRelease() {
    //Snap to preferred
    const offset = preferred - salary
    if (Math.abs(offset) < 2) {
      setSalary(preferred)
      onProgress(1)
    }
  }

  return (
    <div className="povertysim" style={{ width: "240px", height: "240px" }}>
      

      <StackedBars max={20000} style={{ float: 'right' }}>
        <Bar src={chickenleg} amt={costs.food} color="#d17b2a" />
        <Bar src={house} amt={costs.housing} color="#236711" />
        <Bar src={lightning} amt={costs.utilities} color="#e4e892" />
        <Bar src={gascan} amt={costs.gas} color="#d16243" />

      </StackedBars>
      <StackedBars max={20000} style={{ float: 'right' }}>
        <Bar src={coins} amt={yearlyEarnings} color="#FDE74C" />

      </StackedBars>
      <div style={{position: 'absolute', bottom: 0}}>
        <PuppetReaction factor={factor} style={{ height: '125px' }} />
        <br/>
        <input
          type='range'
          min={0}
          max={20}
          step={0.01}
          onChange={e => onChange(parseFloat(e.target.value))}
          value={salary}
          onMouseUp={onRelease}
          onTouchEnd={onRelease}
        />
        <br />
        ${Math.round(salary * 100) / 100}/hr
      </div>

    </div>
  );
}

export function PovertySim2({ onProgress }: { onProgress: (to: number) => any }) {
  const [salary, setSalary] = useState(7.5);
  const weeklyHours = 40;

  // 12 months per year * Avg of 4 weeks per month * 
  // X hours per week * Y salary per hour
  const yearlyEarnings = 12 * 4 * weeklyHours * salary

  const costs = {
    food: 4686,
    housing: 17076,
    gas: 5316,
    medical: 3136,
    civic: 2920,
    other: 4596,
    taxes: 6312
  }
  const totalCosts = Object.values(costs).reduce((a, b) => a + b)
  const factor = yearlyEarnings / totalCosts

  const preferred = 25
  function onChange(value: number) {
    const offset = preferred - value
    if (Math.abs(offset) < 2) {
      //ignore the lethal dose of math spaghetti here
      setSalary(value + offset / Math.exp((1 / ((offset - 2) * (offset + 2))) ** 2))
    } else {
      setSalary(value)
    }
  }

  function onRelease() {
    //Snap to preferred
    const offset = preferred - salary
    if (Math.abs(offset) < 2) {
      setSalary(preferred)
      onProgress(1)
    }
  }

  return (
    <div className="povertysim" style={{ width: "240px", height: "240px" }}>
      

      <StackedBars max={60000} style={{ float: 'right' }}>
        <Bar src={chickenleg} amt={costs.food} color="#d17b2a" />
        <Bar src={house} amt={costs.housing} color="#236711" />
        <Bar src={gascan} amt={costs.gas} color="#d16243" />
        <Bar src={cross} amt={costs.medical} color="#e30b00" />
        <Bar src={popcorn} amt={costs.civic} color="#db2d21" />
        <Bar src={taxes} amt={costs.taxes} color="#d9d4c1" />
        <Bar src={question} amt={costs.other} color="#c9c8c5" />
        

      </StackedBars>
      <StackedBars max={60000} style={{ float: 'right' }}>
        <Bar src={coins} amt={yearlyEarnings} color="#FDE74C" />

      </StackedBars>
      <div style={{position: 'absolute', bottom: 0}}>
        <PuppetReaction factor={factor} style={{ height: '125px' }} />
        <br/>
        <input
          type='range'
          min={0}
          max={40}
          step={0.01}
          onChange={e => onChange(parseFloat(e.target.value))}
          value={salary}
          onMouseUp={onRelease}
          onTouchEnd={onRelease}
        />
        <br />
        ${Math.round(salary * 100) / 100}/hr
      </div>

    </div>
  );
}

export function PovertySim3({ onProgress }: { onProgress: (to: number) => any }) {
  const [salary, setSalary] = useState(20);
  const weeklyHours = 40;

  // 12 months per year * Avg of 4 weeks per month * 
  // X hours per week * Y salary per hour
  const yearlyEarnings = 12 * 4 * weeklyHours * salary

  const costs = {
    food: 4686,
    housing: 17076,
    gas: 5316,
    medical: 3136,
    civic: 2920,
    other: 4596,
    taxes: 6312
  }
  const totalCosts = Object.values(costs).reduce((a, b) => a + b)
  const factor = yearlyEarnings * 1.102 / totalCosts

  const preferred = 25
  function onChange(value: number) {
    const offset = preferred - value
    if (Math.abs(offset) < 2) {
      //ignore the lethal dose of math spaghetti here
      setSalary(value + offset / Math.exp((1 / ((offset - 2) * (offset + 2))) ** 2))
    } else if (value < 20) {
      setSalary(Math.exp((value-20)/20)+19)
    } else {
      setSalary(value)
    }
  }

  function onRelease() {
    //Snap to preferred
    const offset = preferred - salary
    if (Math.abs(offset) < 2) {
      setSalary(preferred)
    }
  }

  return (
    <div className="povertysim" style={{ width: "240px", height: "240px" }}>
      

      <StackedBars max={60000} style={{ float: 'right' }}>
        <Bar src={chickenleg} amt={costs.food} color="#d17b2a" />
        <Bar src={house} amt={costs.housing} color="#236711" />
        <Bar src={gascan} amt={costs.gas} color="#d16243" />
        <Bar src={cross} amt={costs.medical} color="#e30b00" />
        <Bar src={popcorn} amt={costs.civic} color="#db2d21" />
        <Bar src={taxes} amt={costs.taxes} color="#d9d4c1" />
        <Bar src={question} amt={costs.other} color="#c9c8c5" />
        

      </StackedBars>
      <StackedBars max={60000} style={{ float: 'right' }}>
        <Bar src={coins} amt={yearlyEarnings * 1.102} color="#ddfd4c" />

      </StackedBars>

      <StackedBars max={60000} style={{ float: 'right' }}>
        <Bar src={coins} amt={yearlyEarnings} color="#FDE74C" />

      </StackedBars>
      
      <div style={{position: 'absolute', bottom: 0}}>
        <PuppetReaction factor={factor} style={{ height: '125px' }} />
        <br/>
        <input
          type='range'
          min={0}
          max={40}
          step={0.01}
          onChange={e => onChange(parseFloat(e.target.value))}
          value={salary}
          onMouseUp={onRelease}
          onTouchEnd={onRelease}
        />
        <br />
        ${Math.round(salary * 100) / 100}/hr
        <br />
        {"->"} ${Math.round(salary * 1.102 * 100) / 100}/hr
      </div>

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

  function onProgress(to?: number) {
    setProgress(p => {
      if (to !== undefined && to !== null) {
        if (to > p) {
          return to
        } else {
          return p
        }
      } else {
        return p + 1
      }
    })
  }

  return (
    <div className="simlayout">
      <div className="simlayout-text">
        <ProgressManager progress={progressIndex}>{children}</ProgressManager>
      </div>
      <div className="simlayout-povertysim">
        <Sim onProgress={onProgress} />
      </div>
    </div>
  );
}

