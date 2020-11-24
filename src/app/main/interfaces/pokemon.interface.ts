import { nameAndUrl } from './commons.interface';

export interface Ability {
    ability: nameAndUrl;
    is_hidden: boolean;
    slot: number;
}

interface Form {
    name: string;
    url: string;
}

interface GameIndice {
    game_index: number;
    version: nameAndUrl;
}

interface VersionDetail {
    rarity: number;
    version: nameAndUrl;
}

interface HeldItem {
    item: nameAndUrl;
    version_details: VersionDetail[];
}

interface VersionGroupDetail {
    level_learned_at: number;
    move_learn_method: nameAndUrl;
    version_group: nameAndUrl;
}

interface Move {
    move: nameAndUrl;
    version_group_details: VersionGroupDetail[];
}

interface Sprites {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
    other: any;
    versions: any;
}

interface Stat {
    base_stat: number;
    effort: number;
    stat: nameAndUrl;
}

interface Type {
    slot: number;
    type: nameAndUrl;
}

export interface Pokemon {
    abilities: Ability[];
    base_experience: number;
    forms: Form[];
    game_indices: GameIndice[];
    height: number;
    held_items: HeldItem[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    name: string;
    order: number;
    species: nameAndUrl;
    sprites: Sprites;
    stats: Stat[];
    types: Type[];
    weight: number;
    }