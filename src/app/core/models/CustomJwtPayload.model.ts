import { JwtPayload } from 'jwt-decode';

export interface CustomJwtPayload extends JwtPayload {
    fullName?: string;
    id_user?: number;
    roles?: string[];
  }