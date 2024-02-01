import { VehicleModel } from "./vehicle.model";

export interface Booking {
    id: number;
    startDate: string;
    endDate: string;
    state: string;
    vehicle: VehicleModel;
  }