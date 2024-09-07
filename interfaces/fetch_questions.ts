import { ErrorResponse, QuestionPart } from "./type";

interface GetQuestionFailureResponse{
    status: "failed";
    message: "Question not found" | "Question belongs to a future phase and is not currently accessible"
}

interface GetQuestionSuccessResponse{
    status: "success";
    message: "Question fetched successfully";
    data: {
        question_name: string;
        question_parts: QuestionPart
    }
}

export type GetQuestionResponses = GetQuestionFailureResponse | GetQuestionSuccessResponse | ErrorResponse