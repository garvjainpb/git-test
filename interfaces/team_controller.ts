import { ErrorResponse } from "./type";

interface JoinTeamByCodeRequestBody {
  code: string;   
}

type JoinTeamByCodeFailureResponse = {
  status: "failed";
  message: "Invalid request body" | "Invalid team code" | "User is already in a team" | "Team already checked in" | "Team code not provided" | "Team not found" | "Team is full" | "Invalid Configuration" ;  
}

type JoinTeamByCodeSuccessResponse = {
  status: "success";
  message: "Team joined successfully";
  data: {
    team_id: string;
    team_name: string;
    team_code: string;
  }
}

type JoinTeamByCodeResponse = JoinTeamByCodeFailureResponse | JoinTeamByCodeSuccessResponse | ErrorResponse

type CreateTeamRequestBody = {
  name: string;
}

type CreateTeamFailureResponse = {
  status: "failed";
  message: "Invalid request body" | "Team name is required" | "User is already in a team" | "Team name already exists";
}

type CreateTeamSuccessResponse = {
  status: "success";
  message: "Team created successfully";
  data: string;
}

type CreateTeamResponse = CreateTeamFailureResponse | CreateTeamSuccessResponse | ErrorResponse

type LeaveTeamFailureResponse = {
  status: "failed";
  message: "User is not in a team" | "Cannot leave the team as the team has checked in";
}

type LeaveTeamSuccessResponse = {
  status: "success";
  message: "Successfully left the team";
  data: string;
}

export type LeaveTeamResponse = LeaveTeamFailureResponse | LeaveTeamSuccessResponse | ErrorResponse