import React, { useContext } from 'react';

const MaxContext = React.createContext(1);

function Breakdown({children, max}: {children: React.ReactNode, max: number}) {
    return (
        <div className='breakdown'>
            <MaxContext.Provider value={max}>
                {children}
            </MaxContext.Provider>
        </div>
    )
}

function Factor({src, amt}: {src: string, amt: number}) {
    const max = useContext(MaxContext);

    return (
        <div className='factor' style={{height: `${amt/max}%`}}/>
    )
} 