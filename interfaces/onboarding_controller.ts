import { ErrorResponse } from "./type";


export interface PostUserDetailsRequestBody {
  phone: string;
  gender: Gender;
}

export enum Gender {
  MALE = "male",
  FEMALE = "female",
  OTHER = "other",
}

export interface PostUserDetailsFailureResponse {
  status: "failed";
  message:
    | "Invalid Request Body"
    | "Phone number is required"
    | "Gender is required"
    | "Invalid gender value";
}

export interface PostUserDetailsSuccessResponse {
  status: "success";
  message: "User details updated successfully";
  data: {
    user_id: string;
    phone: string;
    gender: Gender;
  };
}

export type PostUserDetailsResponse =
  | PostUserDetailsFailureResponse
  | PostUserDetailsSuccessResponse
  | ErrorResponse;