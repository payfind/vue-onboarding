export interface Profile {
  id: number;
  name: string;
  surname: string;
  tel: string;
}

export interface Status {
  success: boolean | string;
  error: boolean | string;
  loading: boolean;
}

export interface ProfileState {
  profile: Profile;
  status: Status;
}
