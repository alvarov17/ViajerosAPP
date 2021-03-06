export interface Aviso {
  avi_id: string;
  avi_fecha: string;
  avi_estado: string;
  avi_lat: string;
  avi_lng: string;
  avi_titulo: string;
  anf_nombre: string;
  anf_apellido: string;
  anf_correo: string;
  anf_numeroCel: string;
}

export interface RootObject {
  error: boolean;
  avisos: Aviso[];
}
