export interface mapRequest {
  id: number;
  coordinates: number;
}

export interface mapResponse {
  id: number;
  coordinates: number;
  enemy: boolean;
}

export default mapRequest;
