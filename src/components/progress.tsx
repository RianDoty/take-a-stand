import React, { Children, useContext } from "react";

const ProgressContext = React.createContext(0)

export function ChapterSelect() {
  const progress = useContext(ProgressContext);

  return (
    <></>
  )
}

export function Exclusive({children, progress}: {children: React.ReactNode, progress: number}) {
  const currentProgress = useContext(ProgressContext)

  if (currentProgress === progress) {
    return <>{children}</>
  }
  return null
}

export function ProgressManager({
  progress,
  children,
  exclusive = false
}: {
  progress: number;
  children: React.ReactNode;
  exclusive?: boolean
}) {
  //Check if "show all" has been clicked, if so, just show everything
  const aboveProgress = useContext(ProgressContext);
  if (aboveProgress >= 999) {
    progress = 999
  }


  const childrenArray = Children.toArray(children) as React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  >[];
  const newChildren = childrenArray.map((child, index) => {
    if ((exclusive && index === progress) || (!exclusive && index <= progress)) {
      return child
    }
  });

  return <ProgressContext.Provider value={progress}>{newChildren}</ProgressContext.Provider>;
}

export function ProgressGroup({
  children,
}: {
  children: React.ReactNode;
  shown?: boolean;
}) {
  return <div className="fadein">{children}</div>;
}
