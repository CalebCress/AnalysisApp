import { writable } from 'svelte/store';

export const data = writable({
    events: [],
    teams: [],
    data: []
})

export const teams = writable({})