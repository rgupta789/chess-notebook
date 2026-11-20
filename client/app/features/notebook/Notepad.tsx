import type { NotepadMode } from './types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import { StrategyList } from './StrategyList';

const cardStyle = {
    backgroundImage: `
        linear-gradient(to right, transparent 27px, #e57373 27px, #e57373 29px, transparent 29px),
        repeating-linear-gradient(transparent, transparent 39px, #b8c4d6 39px, #b8c4d6 40px)
    `,   
}

type Props = {
    mode: NotepadMode;
}

export function Notepad({ mode }: Props) {
    const kind = 'list'
    // switch (mode.kind) {
    //     case 'list':
    //         return <StrategyList />
        
    // }
    return (
        <Box>
            <Card>
                <CardContent sx={cardStyle}>
                    content
                    <StrategyList/>
                </CardContent>
            </Card>
        </Box>
    )
}