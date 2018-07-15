export interface Servicio {
  ser_id: string;
  ser_categoria: string;
  ser_precio: string;
  aviso_avi_id: string;
}

export interface RootObject {
  error: boolean;
  servicios: Servicio[];
}
