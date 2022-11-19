export interface PlayerInterface {
    id: number | string;

	is_bot?: boolean;

	first_name?: string;

	username?: string;

	score?: number;

    attack_power?: number;

	group_id?: number;

	error?: string;
}
