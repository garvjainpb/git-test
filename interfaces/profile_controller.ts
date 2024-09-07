import { ErrorResponse, UserDetail } from "./type";

interface GetProfileFailureResponse{
    status: "failed";
    message: "User Details not found"
}

interface GetProfileSuccessResponse{
    status: "success";
    data: {
        "user": string;
        "team_members":string[];
        "correct_responses_count": number;
        "team_rank": number;
        "points": number;
    }
}

export type GetProfileResponse = GetProfileFailureResponse | GetProfileSuccessResponse | ErrorResponse;