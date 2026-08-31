"use client";

import React, { useState, type ReactNode } from "react";

export default function SpoilersClientWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  function walk(
    node: ReactNode,
    counter: number,
  ): {
    node: ReactNode;
    counter: number;
  } {
    if (!React.isValidElement(node)) {
      return { node, counter };
    }

    const props = node.props || {};

    const mappedChildren = React.Children.toArray(props.children).reduce<{
      nodes: ReactNode[];
      counter: number;
    }>(
      (acc, child) => {
        const result = walk(child, acc.counter);
        return {
          nodes: [...acc.nodes, result.node],
          counter: result.counter,
        };
      },
      { nodes: [], counter },
    );

    const isSpoilerButtonsBlock = typeof props.buttons !== "undefined";

    if (isSpoilerButtonsBlock) {
      const groupId = `produkciya-${mappedChildren.counter + 1}`;
      return {
        node: React.cloneElement(node, {
          ...props,
          groupId,
          activeKey,
          onActiveKeyChange: setActiveKey,
          children: mappedChildren.nodes,
        }),
        counter: mappedChildren.counter + 1,
      };
    }

    return {
      node: React.cloneElement(node, {
        ...props,
        children: mappedChildren.nodes,
      }),
      counter: mappedChildren.counter,
    };
  }

  const result = React.Children.toArray(children).reduce<{
    nodes: ReactNode[];
    counter: number;
  }>(
    (acc, child) => {
      const mapped = walk(child, acc.counter);
      return {
        nodes: [...acc.nodes, mapped.node],
        counter: mapped.counter,
      };
    },
    { nodes: [], counter: 0 },
  );

  return <>{result.nodes}</>;
}
