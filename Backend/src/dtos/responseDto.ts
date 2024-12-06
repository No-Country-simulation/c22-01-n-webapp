export class ResponseDto {
  pk_appointment: number;
  registration_date: Date;
  appointment_date?: Date;
  hour_appointment?: string;
  is_cancelled: boolean;
  fk_user?: {
    name: string;
    lastname: string;
    age: number;
    dni: string;
    picture: string | null;
    histories?: {
      pk_history: number;
      description: string;
      recipe: string;
      registrationDate: Date;
    }[];
  };
}
