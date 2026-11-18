
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import { useRef, useState } from 'react';
import Box from '@mui/material/Box';



export default function Home() {
    const chessRef = useRef(new Chess());
    const chess = chessRef.current;

    const [fen, setFen] = useState(chess.fen());

    function onPieceDrop({ sourceSquare, targetSquare }: {
      sourceSquare: string;
      targetSquare: string | null;
    }) {
      if (!targetSquare) return false; // dropped off board
      try {
        chess.move({ from: sourceSquare, to: targetSquare, promotion: 'q' });
      } catch {
        console.log("You cannot make that move.");
        return false;
      }
      console.log(chess.fen());
      setFen(chess.fen());
      return true;
    }

    function playRandomMove() {
      if (chess.isGameOver()) return;
      const moves = chess.moves();
      const move = moves[Math.floor(Math.random() * moves.length)];
      chess.move(move);
      setFen(chess.fen());
    }

    function reset() {
      chess.reset();
      setFen(chess.fen());
    }


    const chessboardOptions = {
        position: fen,
        onPieceDrop
    };
    

    return(
        <>
          <Box sx={{ width: '50%', }}>
            <Chessboard options={ chessboardOptions } />
          </Box>
        </>
    );
}


// onPieceDrop prop -> handles the piece drop event
// position prop -> updates board position when move is made

// chessGameRed -> prevent stale closures when making moves