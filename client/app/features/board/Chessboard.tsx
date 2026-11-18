import { Chessboard as Board } from 'react-chessboard';

type Props = {
    fen: string;
    onMove?: (from: string, to: string) => boolean;
    orientation?: 'white' | 'black';
    interactive?: boolean;
}


export function Chessboard({fen, onMove, orientation = 'white', interactive = true }: Props) {
    return (
        <Board
            options={{
                position: fen,
                boardOrientation: orientation,
                allowDragging: interactive,
                onPieceDrop: ({ sourceSquare, targetSquare }) => 
                    targetSquare && onMove ? onMove(sourceSquare, targetSquare) : false,
            }}
        />
    )
}