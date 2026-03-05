"use client"

type ObjectId = string
type Equation = string // can use global variables, be a number, use Math, anything `eval`able

type Anchor = "center" | "N" | "NE" | "E" | "SE" | "S" | "SW" | "W" | "NW"
type Place = {
  relativeTo: ObjectId,
  anchor: Anchor,
  dx?: Equation,
  dy?: Equation,
}
type Stroke = "solid" | "thin" | "symmetry" | "dashed"

type Line = {
  stroke: Stroke,
  start: Place,
  end: Place, // if the size is not relative to other objects, the anchor is the same as it is for the start point
}
type Text = {
  value: string,
  size: Equation,
  italic: boolean,
  bold: boolean,
  align: "left" | "center" | "right",
  place: Place,
}
type Circle = {
  anchor: Anchor,
  place: Place,
}
type Rect = {
  anchor: Anchor,
  place: Place,
  width: Equation,
  height: Equation,
}
type Arc = {
  start: Anchor,
  end: Anchor,
  radius: Equation,
  direction: "CW" | "CCW",
}

export default function Cad() {
  return (
    <div>TODO</div>
  )
}
