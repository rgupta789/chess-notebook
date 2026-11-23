import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { sampleStrategies } from '../../test-data/sampleStrategies';
import { ListItemText } from '@mui/material';
import { ListItemButton } from '@mui/material';
import { useState } from 'react';
import type { NotepadMode } from './types';

type Props = {
    onModeChange: (mode: NotepadMode) => void;
}

export function StrategyList({ onModeChange }: Props) {
    const [open, setOpen] = useState(false);

    return (
        <Box>

            <List>
                <ListItem>
                {sampleStrategies.map((s) => (

                    <ListItemButton onClick={() => onModeChange({ kind: 'view', strategyId: s.id})}>
                        <ListItemText key={s.id} primary={s.name} />
                    </ListItemButton>
                ))}
                </ListItem>
            </List>

        </Box>
    )
}