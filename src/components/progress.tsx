import { Children } from "react";

export function ProgressManager({
  progress,
  children,
}: {
  progress: number;
  children: React.ReactNode;
}) {
  const childrenArray = Children.toArray(children) as React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  >[];
  const newChildren = childrenArray.map((child, index) => {
    if (index <= progress) {
      return child;
    }
  });

  return <>{newChildren}</>;
}

export function ProgressGroup({
  children,
}: {
  children: React.ReactNode;
  shown?: boolean;
}) {
  return <div className="fadein">{children}</div>;
}
