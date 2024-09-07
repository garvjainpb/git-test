export interface Base {
	id: string;
	created_at: string;
	updated_at: string;
}

export interface User extends Base {
	email: string;
	reg_no: string;
	name: string;
	team_id: string;
	team?: Team;
}

export interface UserDetail extends Base {
	gender: UserGender;
	phone: string;
	user_id: string;
	user?: User;
}

export type UserGender = "male" | "female" | "other";

export interface Team extends Base {
	name: string;
	code: string;
	blacklist: boolean;
	points: number;
	checked_in: boolean;
	users?: User[];
}

export interface Question extends Base {
	name: string;
	display: boolean;
	authors: string[];
	difficulty_id: string;
	difficulty?: Difficulty;
	phase_id: string;
	phase?: Phase;
	first_blood_team: string | null;
	team?: Team;
	parts?: QuestionPart[];
}

export interface QuestionPart extends Base {
	sequence: number;
	weightage: number;
	question_id: string;
	question?: Question;
	answer?: Answer;
	hint?: Hint;
	content?: Content[];
}

export interface Answer extends Base {
	answer: string;
	type: AnswerType;
	question_part_id: string;
}

export type AnswerType = "qr" | "string";

export interface Hint extends Base {
	data: string;
	cost: number;
	question_part_id: string;
}

export interface Content extends Base {
	type: ContentType;
	data: string;
	sequence: number;
	question_part_id: string;
	question_part?: QuestionPart;
}

export type ContentType = string;

export interface Difficulty extends Base {
	level: number;
	points: number;
}

export interface Phase extends Base {
	phase: number;
	start_time: string;
}

export interface Response extends Base {
	data: string;
	type: string;
	latitude: number;
	longitude: number;
	timestamp: string;
	question_part_id: string;
	question_part?: QuestionPart;
	user_id: string;
	user?: User;
	is_correct: boolean;
}

export interface QRPhoto extends Base {
	photo_url: string;
	response_id: string;
	response?: Response;
}

export interface Admin extends Base {
	checkin_access: boolean;
	anticheat_access: boolean;
	qrmgmt_access: boolean;
	question_management_access: boolean;
	user_id: string;
	user?: User;
}

export interface QRData extends Base {
	value: string;
	qr_photo: string;
	latitude: number;
	longitude: number;
	timestamp: string;
	damaged: boolean;
	answer_id: string;
	answer?: Answer;
	admin_id: string;
	admin?: Admin;
}

export interface PurchasedHint extends Base {
	question_part_id: string;
	question_part?: QuestionPart;
	team_id: string;
	team?: Team;
}

export interface Timeline extends Base {
	start_time: string;
	end_time: string;
	title: string;
	description: string;
}

export interface Whitelist extends Base {
	email: string;
	reg_no: string;
}

export interface QuestionAccessLog extends Base {
	timestamp: string;
	user_id: string;
	user?: User;
	question_part_id: string;
	question_part?: QuestionPart;
}

export interface ErrorResponse{
	status: "error";
	message: string;
}