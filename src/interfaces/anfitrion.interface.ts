export interface Anfitrion {
  anf_id: string;
  anf_rut: string;
  anf_nombre: string;
  anf_apellido: string;
  anf_fechaNacimiento: string;
  anf_numeroCel: string;
  anf_correo: string;
  anf_fotoPerfil: string;
  anf_direccion: string;
  anf_password: string;
}

export interface RootObject {
  error: boolean;
  anfitrion: Anfitrion;
}
