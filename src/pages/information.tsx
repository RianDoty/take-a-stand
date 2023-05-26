import { ProgressManager, ProgressGroup, Exclusive } from "../components/progress"
import { SimLayout, PovertySim1, PovertySim2, PovertySim3 } from "../components/povertysim"
import { useState } from "react";
import { Link } from "wouter";

export default function Information() {
    const [exclusive, setExclusive] = useState(true);
    const [progress, setProgress] = useState(0);

    function showAll() {
        setExclusive(false)
        setProgress(999)
    }

    function progressMain() {
        setProgress((p: number) => p + 1)
    }

    return (
        <div>
            <h1>Information</h1>
            <ProgressManager progress={progress} exclusive={exclusive}>
                <ProgressGroup>
                    <button onClick={showAll}>Unlock Everything (for grading)</button>
                    <div className="muted">It'd still be really cool for you to play through
                        as intended, if you are grading!</div>
                    <br /><br /><br />
                    <SimLayout sim={PovertySim1}>
                        <ProgressGroup>
                            Let's say that you work at minimum wage. As of 2023 in America, that
                            means that you'd make at least $7.25 for each hour you'd be working. <cite className="muted">("Living wage calculator - Living wage calculation for California," n.d.)</cite>
                            <Exclusive progress={0}><div className="muted">
                                Psst! Move the "salary" slider to $7.25!{" "}
                            </div></Exclusive>
                        </ProgressGroup>
                        <ProgressGroup>
                            That seems like a pretty good monthly salary! <br />
                            Comparing it to the montly costs, <span className="muted">(EXTREMELY minimal)</span> <cite className="muted">(U.S. Bureau of Labor Statistics, 2011)</cite> that leaves a pretty good chunk of
                            pocket change.
                            Except... <br />
                            Those aren't numbers from 2023. <br />
                            <i>Those are the numbers from 2009.</i>
                            <button onClick={progressMain}>The real situation...</button>
                        </ProgressGroup>
                    </SimLayout>
                </ProgressGroup>

                <ProgressGroup>
                    <br /><br /><br />
                    <SimLayout sim={PovertySim2}>
                        <ProgressGroup>
                            <p>
                                ...is much worse.<cite className="muted"> ("Living wage calculator - Living wage calculation for California," n.d.)</cite><br /><br />
                                As it turns out, the "minimum wage" is more like
                                a "poverty wage," and a "poverty wage" is nowhere near
                                a "living wage." <br /> A <b>living wage</b> is the minimum wage
                                that an individual must earn to support themself and their
                                family. As you might notice, there's a bit of a difference
                                between that and the minimum wage.
                                <br />
                                Try setting the slider to the <b>living wage</b> for this
                                cost breakdown.
                            </p>
                        </ProgressGroup>
                        <ProgressGroup>
                            <p>
                                That's about right! The living wage here is around $25/hr.
                                However, many people with full-time jobs that require full
                                attention can't get pay nearly that good. <cite className="muted">(Paz, 2021)</cite>
                            </p>
                            <p>
                                It <i>would</i> make sense that the minimum wage is tuned
                                to the living wage, but the living wage keeps increasing,
                                and bureaucracy is <i>slow.</i> <cite className="muted">(Kujawski, 2021)</cite>
                            </p>
                            <button onClick={progressMain}>So, what's the solution? How can workers negotiate for a living wage?</button>
                        </ProgressGroup>
                    </SimLayout>
                </ProgressGroup>
                <ProgressGroup>
                    <br /><br /><br />
                    <SimLayout sim={PovertySim3}>
                        <ProgressGroup>
                            <p>
                                Short answer: Unions!
                            </p>
                            <p>
                                Unions allow for people to have collective bargaining power
                                and negotiate for higher wages. With a unionized
                                workplace, the people who need it can get
                                well deserved and much overdue pay raises, and
                                they can be protected against wrongful termination.
                                <cite className="muted">(Beyer, 2021)</cite>
                            </p>
                            <p>
                                Not to mention, workers in a union earn 10% more
                                than non-union peers on average!
                                <cite className="muted">(Beyer, 2021)</cite>
                            </p>
                            <p>
                                The biggest problem with unionization is that people
                                don't know their rights and ability to form one;<br />
                                the average person needs to be educated on the benefits
                                of unions, and how to make one. And <i>YOU</i> can help!
                            </p>
                            <Link to="/action" style={{ background: 'lightgray', padding: '10px' }}>Take Action</Link>
                        </ProgressGroup>
                    </SimLayout>
                </ProgressGroup>
            </ProgressManager>
        </div>
    )
}