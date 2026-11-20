export type NotepadMode =
  | { kind: 'list' }
  | { kind: 'view'; strategyId: string }
  | { kind: 'edit'; strategyId: string | null };

export type Strategy = {
    id: string;
    name: string;
    notes: string;
    moves: string[];
    createdAt: string;
}