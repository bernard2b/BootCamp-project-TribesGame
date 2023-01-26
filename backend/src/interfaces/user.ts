export interface userSettingsRequest{
  name?: string,
  email?: string,
  oldPassword?: string,
  newPassword?: string
}

export interface userIdRequest{
  id: number
}

export interface userSettingsResponse{
  name: string,
  email: string,
  password: string
}

export interface getUserDetailsResponse{
  name: string,
  email: string
}