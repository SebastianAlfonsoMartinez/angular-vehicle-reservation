export interface ReservationDetail {
    startDate: string;
    endDate: string;
    vehicle: {
      id: number;
    };
    user: {
      id: number;
    };
  }
  