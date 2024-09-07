import { ErrorResponse, Hint } from "./type";

interface FetchHintFailureResponse {
    status: "failed";
    message: "Question Part ID not provided" | "Question Part not found" | "Phase not started yet" | "User not in team" | "Hint not found" ;
}

interface FetchHintSuccessResponse {
    status: "success";
    message: "Hint Fetched" | "Hint not purchased" ;
    data: string | number;
}

type FetchHintResponses = FetchHintFailureResponse | FetchHintSuccessResponse | ErrorResponse

interface PurchaseHintFailureResponse {
    status: "failed";
    message: "Question Part ID not provided" | "Question Part not found" | "Phase not started yet" | "TeamID not found" | "Team not found" | "Hint not found" | "Hint already purchased";
}

interface PurchaseHintSuccessResponse {
    status: "success";
    message: "Hint purchased and fetched";
    data: string;
}

export type PurchaseHintResponses = PurchaseHintFailureResponse | PurchaseHintSuccessResponse | ErrorResponse