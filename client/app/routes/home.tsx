
import Box from '@mui/material/Box';
import { useGame } from '../features/board/useGame';
import { Notepad } from '../features/notebook/Notepad';

import { Chessboard as Board } from '../features/board/Chessboard';



export default function Home() {
    const { fen, history, makeMove } = useGame();


    // const chessboardOptions = {
    //     position: fen,
    //     onPieceDrop
    // };

    return(
        <>
          <Box sx={{ width: '50%', }}>
            {/* <Chessboard options={ chessboardOptions } /> */}
            <Board fen={fen} onMove={makeMove} />

          </Box>
          <Box sx={{ width: '50%', length: '50%', background: 'red'}}>
            <Notepad mode={{ kind: 'list'}} />
          </Box>
        </>
    );
}


// onPieceDrop prop -> handles the piece drop event
// position prop -> updates board position when move is made

// chessGameRed -> prevent stale closures when making moves