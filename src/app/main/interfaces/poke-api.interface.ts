import { nameAndUrl } from './commons.interface'

export interface PokeApiResponse{
    count: number,
    next: string | null,
    previous: string | null,
    results: nameAndUrl[]
}