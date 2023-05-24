import React, { Children, FunctionComponent, ReactChildren, useState } from 'react'
import underconstruction from '../assets/underconstruction.png'


export function ProgressGroup({ children }: { children: React.ReactNode, shown?: boolean }) {
    return (
        <div>
            {children}
        </div>
    )
}

export function PovertySim() {
    return (
        <img src={underconstruction} style={{ height: '120px', float: 'left' }} />
    )
}

export function SimLayout({ children, sim: Sim }: { children: React.ReactNode, sim: FunctionComponent<{ onProgress: () => void }> },) {
    const [progressIndex, setProgress] = useState(0)

    function onProgress() {
        setProgress((p: number) => p + 1)
    }

    const childrenArray = Children.toArray(children) as React.ReactElement<any, string | React.JSXElementConstructor<any>>[]
    const newChildren = childrenArray.map((child, index) => {
        if (index <= progressIndex) {
            return child
        }
    })

    return (
        <div className='simlayout'>
            <div className='simlayout-text'>
                {newChildren}
            </div>
            <div className='simlayout-povertysim'>
                <Sim onProgress={onProgress} />
                <button onClick={onProgress}>Progress</button>
            </div>
        </div>
    )
}

