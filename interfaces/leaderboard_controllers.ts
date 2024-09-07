import { ErrorResponse, Team} from "./type";

interface FetchLeaderboardFailureResponse {
    status: "failed";
    message: "No teams found";
}

interface FetchLeaderboardSuccessResponse {
    status: "success";
    message: "Leaderboard fetched";
    data: {
        user_team: Team;
        team_ranking: Team[];
    };
}

export type FetchLeaderboardResponses = FetchLeaderboardFailureResponse | FetchLeaderboardSuccessResponse | ErrorResponse