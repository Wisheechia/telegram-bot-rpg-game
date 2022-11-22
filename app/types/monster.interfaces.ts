export interface MonsterInterface {
    id: number | string;

	monster_type: string;

	name?: string;

	health: number;

    attack_power?: number;

	error?: string;
}
