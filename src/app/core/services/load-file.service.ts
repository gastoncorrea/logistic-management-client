import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoadFileService {

  private apiUrl = environment.apiUrl+'upload';  // Cambia esto según tu backend

  constructor(private http: HttpClient) {}

  uploadFiles(files: File[]): Observable<any> {
    const formData = new FormData();
    
    files.forEach(file => {
      formData.append('file', file, file.name);
    });

    return this.http.post(this.apiUrl, formData).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Error en la subida de archivos:', error);
    return throwError(() => new Error('Error al subir archivos. Inténtalo de nuevo.'));
  }


}
