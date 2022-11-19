# RPG TELEGRAM BOT

## Database

### User Schema
    id: number | string;
    is_bot?: boolean;
	first_name?: string;
	username?: string;
	score: number;
    attack_power: number;
	group_id?: number;
	error?: string;

### Mob Schema
    id: number;
    name: string;
    health: number;
    