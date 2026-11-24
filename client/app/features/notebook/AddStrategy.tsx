import { StrategyForm } from './StrategyForm';
import { useState } from 'react';
import { createEmptyStrategy } from './types';
import { saveStrategy } from './api';

export function AddStrategy() {
    const [draft, setDraft] = useState(createEmptyStrategy);

    const handleSave = async () => {
        const res = await saveStrategy(draft);
        console.log(res);
        setDraft(createEmptyStrategy);
    }

    return (
        <>
            <StrategyForm value={draft} onChange={setDraft} onSave={handleSave}/>
        </>
    )
}