import { Booking } from "./booking.model";

export interface UserInfoModel {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    enable: boolean;
    bookings: Booking[];
    roles: string[];
  }