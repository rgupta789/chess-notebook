import type { Strategy } from "./types";

export async function saveStrategy(strategy: Strategy): Promise<string> {
    const res = `${strategy.name} has been saved.`
    
    return res;
}