import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';

export function Board() {
    const chess = new Chess();
    

    return(
        <>
            <Chessboard />
        </>
    );
}