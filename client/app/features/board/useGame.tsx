import { Chess } from 'chess.js';
import { useState } from 'react';

export function useGame() {
    const [chess] = useState(() => new Chess());

    const [fen, setFen] = useState(chess.fen());
    const [history, setHistory] = useState<string[]>([]);

    function sync() {
        setFen(chess.fen());
        setHistory(chess.history());

    }

    const makeMove = (from: string, to: string): boolean => {
        try {
            chess.move({ from, to, promotion: 'q'});

        } catch {
            console.log("You cannot make that move.");
            return false;
        }
        sync();
                console.log(history);

        return true;
    }

    const undo = () => {
        chess.undo();
        sync();
    }

    const reset = () => {
        chess.reset();
        sync();
    }

    return {
        fen,
        history,
        turn: chess.turn(),
        isGameOver: chess.isGameOver(),
        makeMove,
        undo,
        reset,
    };
}