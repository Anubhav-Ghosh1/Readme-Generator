"use client"
import clsx from "clsx"

type Props = {
  name: string
  selected: boolean
  onClick: () => void
}

export default function TechCard({ name, selected, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "cursor-pointer border rounded-md p-4 text-center font-medium transition",
        selected ? "bg-blue-100 border-blue-500" : "border-gray-300"
      )}
    >
      {name}
    </div>
  )
}
