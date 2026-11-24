import TextField from '@mui/material/TextField';
import type { Strategy } from './types';
import { MovePairFields } from './MovePairFields';
import { Button } from '@mui/material';

type Props = {
    value: Strategy;
    onChange: (value: Strategy) => void;
    onSave: () => void;
}

export function StrategyForm({ value, onChange, onSave }: Props) {

    return (
        <>
            <TextField 
                label="Name"
                variant="outlined"
                value={value.name}
                onChange={e => onChange({ ...value, name: e.target.value})}
            />

            <MovePairFields
                moves={value.moves}
                onChange={moves => onChange({ ...value, moves })}
            />

            <TextField
                label="Notes"
                variant="outlined"
                value={value.notes}
                onChange={e => onChange({ ...value, notes: e.target.value})}
            />

            <Button onClick={onSave}>
                Save
            </Button>

        </>
    )
}