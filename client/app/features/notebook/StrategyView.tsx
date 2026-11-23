import type { NotepadMode, MovePair } from "./types";
import { sampleStrategies } from '../../test-data/sampleStrategies';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

type Props = {
    strategyId: string;
    onModeChange: (mode: NotepadMode) => void;
}

export function StrategyView({ strategyId, onModeChange }: Props)  {
    const strategy = sampleStrategies.find((s) => s.id === strategyId);
    if (!strategy) return <p>Strategy not found.</p>

    const toPairs = (moves: string[]) => {
        const pairs: MovePair[] = [];
        for (let i = 0; i < moves.length; i += 2) {
            pairs.push({ number: i / 2 + 1, white: moves[i], black: moves[i + 1]});

        }
        return pairs;
    }

    return (
        <>
            <Button
                startIcon={<ArrowBackIcon />}
                onClick={() => onModeChange({ kind: 'list' })}
                >
                Back
            </Button>
            <Box>
                {toPairs(strategy.moves).map((pair) => (
                    <p key={pair.number}>
                        {pair.number}. {pair.white} {pair.black}
                    </p>
                ))}
            </Box>
        </>
    );
}