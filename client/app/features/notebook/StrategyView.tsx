import type { NotepadMode } from "./types";
import { sampleStrategies } from '../../test-data/sampleStrategies';
import Box from '@mui/material/Box';

type Props = {
    strategyId: string;
    onModeChange: (mode: NotepadMode) => void;
}

export function StrategyView({ strategyId, onModeChange }: Props)  {
    return (
        <>
            {sampleStrategies.find((s) => (s.id === strategyId))?.moves ?? "Strategy not found."}
        </>
    );
}