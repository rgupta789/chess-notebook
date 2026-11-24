import type { NotepadMode } from './types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import { StrategyList } from './StrategyList';
import { StrategyView } from './StrategyView';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const cardStyle = {
    backgroundImage: `
        linear-gradient(to right, transparent 27px, #e57373 27px, #e57373 29px, transparent 29px),
        repeating-linear-gradient(transparent, transparent 39px, #b8c4d6 39px, #b8c4d6 40px)
    `,   
}

type Props = {
    mode: NotepadMode;
    onModeChange: (mode: NotepadMode) => void;
}

const renderContent = (mode: NotepadMode, onModeChange: Props['onModeChange']) => {
    switch (mode.kind) {
        case 'list':
            return <StrategyList onModeChange={onModeChange} />;
        case 'view':
            return <StrategyView strategyId={mode.strategyId} onModeChange={onModeChange} />;
    }
}

export function Notepad({ mode, onModeChange }: Props) {

    return (
        <Box>
            <Card>
                <CardContent sx={cardStyle}>
                    {mode.kind === 'view' && (
                    <Button
                        startIcon={<ArrowBackIcon />}
                        onClick={() => onModeChange({ kind: 'list' })}
                        >
                        Back
                    </Button>
                    )}

                   {renderContent(mode, onModeChange)}
                </CardContent>
            </Card>
        </Box>
    )
}