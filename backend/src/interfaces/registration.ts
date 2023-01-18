export interface createUserRequest {
  name: string;
  password: string;
  email: string;
  imperiumName: string;
}

export interface createUserResponse {
  id: number;
  name: string;
  imperiumId: string;
}