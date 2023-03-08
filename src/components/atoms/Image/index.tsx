import React from "react";

interface ImageProps {
  source: string;
  width?: string;
  height?: string;
}

export const Image = (props: ImageProps) => {
  return (
    <img src={props.source} height={props.height} width={props.width}></img>
  );
};
