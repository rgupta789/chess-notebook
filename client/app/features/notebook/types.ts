export type NotepadMode =
  | { kind: 'list' }
  | { kind: 'add'}
  | { kind: 'view'; strategyId: string }
  | { kind: 'edit'; strategyId: string | null };

export type MovePair = {
  number: number;
  white: string;
  black?: string;
}

export type Strategy = {
    id: string;
    name: string;
    notes: string;
    moves: string[];
    createdAt: string;
}

export const createEmptyStrategy = (): Strategy => ({
  id: crypto.randomUUID(),
  name: "",
  moves: ["", ""],
  notes: "",
  createdAt: ""
})