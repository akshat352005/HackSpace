/**
 * Types shared between the client and server go here.
 */

export type Nullable<T> = T | null;

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}