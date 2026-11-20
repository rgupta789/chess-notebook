import type { Strategy } from "~/features/notebook/types";

export const sampleStrategies: Strategy[] =
[
  {
    "id": "a1b2c3d4-0001-4000-8000-000000000001",
    "name": "Italian Game (Giuoco Piano)",
    "notes": "Develop quickly, aim at f7, and build the center with c3 and d4.",
    "moves": ["e4", "e5", "Nf3", "Nc6", "Bc4", "Bc5", "c3", "Nf6", "d4", "exd4", "cxd4", "Bb4+"],
    "createdAt": "2026-11-01T09:00:00.000Z"
  },
  {
    "id": "a1b2c3d4-0002-4000-8000-000000000002",
    "name": "Queen's Gambit Declined",
    "notes": "Black holds the center with ...e6. White keeps pressure with Bg5 and Nc3.",
    "moves": ["d4", "d5", "c4", "e6", "Nc3", "Nf6", "Bg5", "Be7"],
    "createdAt": "2026-11-03T14:30:00.000Z"
  },
  {
    "id": "a1b2c3d4-0003-4000-8000-000000000003",
    "name": "Sicilian Najdorf",
    "notes": "Sharp, theory-heavy. ...a6 stops Nb5 and prepares ...b5.",
    "moves": ["e4", "c5", "Nf3", "d6", "d4", "cxd4", "Nxd4", "Nf6", "Nc3", "a6"],
    "createdAt": "2026-11-05T18:15:00.000Z"
  },
  {
    "id": "a1b2c3d4-0004-4000-8000-000000000004",
    "name": "Scholar's Mate",
    "notes": "Four-move trap to recognise and avoid. Queen and bishop both hit f7.",
    "moves": ["e4", "e5", "Qh5", "Nc6", "Bc4", "Nf6", "Qxf7#"],
    "createdAt": "2026-11-07T08:00:00.000Z"
  },
  {
    "id": "a1b2c3d4-0005-4000-8000-000000000005",
    "name": "Fool's Mate",
    "notes": "Shortest possible checkmate. Never open the king's diagonal like this.",
    "moves": ["f3", "e5", "g4", "Qh4#"],
    "createdAt": "2026-11-08T20:45:00.000Z"
  }
];