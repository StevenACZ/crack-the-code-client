export interface ReqResCourse {
	name: string;
	slug: string;
	age_range: AgeRange;
	amount_usd: string;
	amount_pen: string;
	has_discount: boolean;
	discount_percentage: string;
	amount_after_discount_usd: string;
	amount_after_discount_pen: string;
	thumbnail: null | string;
	next_start_date: Date | null;
	duration: string;
}

export enum AgeRange {
	The12_Plus = '12_plus',
	The5_To7 = '5_to_7',
	The8_Plus = '8_plus',
	The9_Plus = '9_plus',
}
