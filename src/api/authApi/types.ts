export type LoginData = {
  email: string;
  password: string;
};

export type RegistrationData = LoginData & {
  fullName: string;
};

export type AuthResponseData = {
  accessToken: string;
  refreshToken: string;
  user: {
    email: string;
    id: string;
    isActivated: boolean;
  };
};

export type ActivateEmailData = {
  activationCode: string;
  email: string;
};
