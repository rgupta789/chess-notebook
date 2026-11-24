// MovePairFields.tsx
import { useState } from "react";

type Props = {
  moves: string[];                     // flat SAN list, used only for the initial rows
  onChange: (moves: string[]) => void;
};

// ["e4","e5","Nf3"] -> ["e4 e5", "Nf3"]
const toRows = (moves: string[]) => {
  const rows: string[] = [];
  for (let i = 0; i < moves.length; i += 2) {
    rows.push(moves.slice(i, i + 2).join(" "));
  }
  return rows.length ? rows : [""];
};

// ["e4 e5", "Nf3 Nc6"] -> ["e4","e5","Nf3","Nc6"]
const toMoves = (rows: string[]) =>
  rows.flatMap(row => row.trim().split(/\s+/).filter(Boolean));

export function MovePairFields({ moves, onChange }: Props) {
  const [rows, setRows] = useState<string[]>(() => toRows(moves));

  const commit = (next: string[]) => {
    setRows(next);
    onChange(toMoves(next));
  };

  const updateRow = (index: number, value: string) =>
    commit(rows.map((r, i) => (i === index ? value : r)));

  const addRow = () => commit([...rows, ""]);

  return (
    <div>
      {rows.map((row, i) => (
        <div key={i}>
          <span>{i + 1}.</span>
          <input
            value={row}
            onChange={e => updateRow(i, e.target.value)}
            placeholder="e4 e5"
          />
        </div>
      ))}
      <button type="button" onClick={addRow}>Add move</button>
    </div>
  );
}