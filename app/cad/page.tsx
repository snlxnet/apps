"use client"

type ObjectId = string

type Anchor = "center" | "N" | "NE" | "E" | "SE" | "S" | "SW" | "W" | "NW"
type Place = {
  relativeTo: ObjectId,
  anchor: Anchor,
  dx: number,
  dy: number,
}
type Stroke = "solid" | "thin" | "symmetry" | "dashed"

type Line = {
  stroke: Stroke,
  start: Place,
  end: Place, // if the size is not relative to other objects, the anchor is the same as it is for the start point
}
type Text = {
  value: string,
  size: number,
  italic: boolean,
  bold: boolean,
  align: "left" | "center" | "right",
  place: Place,
}
type Circle = {
  anchor: Anchor,
  place: Place,
}
type Arc = {
  start: Anchor,
  end: Anchor,
  radius: number,
  direction: "CW" | "CCW",
}

export default function Cad() {
  return (
    <div>TODO</div>
  )
}
