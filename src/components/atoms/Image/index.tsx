import React from "react";

interface Props {
  source: string;
  width?: string;
  height?: string;
}

export const Image = (props: Props) => {
  return (
    <img src={props.source} height={props.height} width={props.width}></img>
  );
};