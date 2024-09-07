
import type { User, Question, ErrorResponse } from "./type";

export interface OnboardingIncompleteResponse {
	status: "ONBOARDING_INCOMPLETE";
	message: "User details must be submitted";
}

export interface NoTeamResponse {
	status: "NO_TEAM";
	message: "User needs to join or create a team";
}

export interface TeamBlacklistedResponse {
	status: "TEAM_BLACKLISTED";
	message: "Team is blacklisted";
}

export interface TeamNotCheckedInResponse {
	status: "TEAM_NOT_CHECKED_IN";
	message: "Team needs to check in";
	data: {
		name: string;
		code: string;
		members: User[];
	};
}

export interface PhaseNotStartedResponse {
	status: "PHASE_NOT_STARTED";
	message: "Phase has not started yet";
	data: string;
}

export interface SuccessResponse {
	status: "success";
	message: "fetched AppStateAndData";
	data: {
		active_phase: number;
		current_phase_time: string;
		current_server_time: string;
		questions: Question[];
	};
}

export type GetAppStateAndDataResponse =
	| OnboardingIncompleteResponse
	| NoTeamResponse
	| TeamBlacklistedResponse
	| TeamNotCheckedInResponse
	| PhaseNotStartedResponse
	| SuccessResponse
	| ErrorResponse;
