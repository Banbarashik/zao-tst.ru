"use client";

import React, { useState, type ReactNode } from "react";

export default function SpoilersClientWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  let counter = 0;

  function walk(node: ReactNode): ReactNode {
    if (!React.isValidElement(node)) return node;

    const props = node.props || {};

    const mappedChildren = React.Children.map(props.children, walk);

    const isSpoilerButtonsBlock = typeof props.buttons !== "undefined";

    if (isSpoilerButtonsBlock) {
      counter += 1;
      const groupId = `produkciya-${counter}`;
      return React.cloneElement(node, {
        ...props,
        groupId,
        activeKey,
        onActiveKeyChange: setActiveKey,
        children: mappedChildren,
      });
    }

    // preserve element but with mapped children
    return React.cloneElement(node, { ...props, children: mappedChildren });
  }

  return <>{React.Children.map(children, walk)}</>;
}
