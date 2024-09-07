import { ErrorResponse, Timeline } from "./type";

interface GetTimelinesFailureResponse{
    status: "failed";
    message: "Timelines not found"
}

interface GetTimelinesSuccessResponse{
    status: "success";
    message: "Timelines fetched successfully";
    data: Timeline[]
}

export type GetTimelineResponses = GetTimelinesFailureResponse | GetTimelinesSuccessResponse | ErrorResponse