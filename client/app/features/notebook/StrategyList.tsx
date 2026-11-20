import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { sampleStrategies } from '../../test-data/sampleStrategies';
import { ListItemText } from '@mui/material';
import { ListItemButton } from '@mui/material';
import { useState } from 'react';

export function StrategyList() {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        
    }


    return (
        <Box>

            <List>
                <ListItem>
                {sampleStrategies.map((s) => (

                    <ListItemButton onClick={handleClick}>
                        <ListItemText key={s.id} primary={s.name} />
                    </ListItemButton>
                ))}
                </ListItem>
            </List>

        </Box>
    )
}