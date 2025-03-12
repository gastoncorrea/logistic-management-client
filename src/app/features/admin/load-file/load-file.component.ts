import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild, inject } from '@angular/core';
import { LoadFileService } from 'src/app/services/load-file.service';


@Component({
  selector: 'app-load-file',
  templateUrl: './load-file.component.html',
  styleUrls: ['./load-file.component.css']
})
export class LoadFileComponent implements OnInit, AfterViewInit {

  allowMultipleFiles = true;
  dragOver = false;
  selectedFiles: File[] = [];
  title = 'filesSelector';

  @ViewChild('inputFileElement') inputFileElement!: ElementRef;
  @ViewChild('dropArea') dropArea!: ElementRef;


  constructor(private renderer2: Renderer2, private uploadService: LoadFileService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.listenDragOver();
    this.listenDragLeave();
    this.listenDrop();
  }

  openSelectFileDialog() {
    this.inputFileElement.nativeElement.value = null;
    this.inputFileElement.nativeElement.click();
  }

  onSelectFiles(evt: any) {
    const input = evt.target as HTMLInputElement;
    if (!input.files) return;
    const files: File[] = Array.from(input.files);
    files.forEach(f => {
      if (this.isCSV(f)) {
        this.pushFilesInArray(f);
      } else {
        alert(`El archivo "${f.name}" no es un CSV válido.`);
      }
    });
  }

  pushFilesInArray(file: any) {
    const fileAlreadyExists = this.selectedFiles.find(f => f.name === file.name);
    if (fileAlreadyExists) {
      return;
    }

    if (!this.allowMultipleFiles) {
      this.selectedFiles = [];
    }

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.selectedFiles.unshift(file);
    }
  }

  listenDragOver() {
    this.renderer2.listen(
      this.dropArea.nativeElement, 'dragover', (event: DragEvent) => {
        event.preventDefault();
        event.stopPropagation();
        this.dragOver = true;
      }
    )
  }

  listenDragLeave() {
    this.renderer2.listen(
      this.dropArea.nativeElement, 'dragleave', (event: DragEvent) => {
        event.preventDefault();
        event.stopPropagation();
        this.dragOver = false;
      }
    )
  }

  listenDrop() {
    this.renderer2.listen(
      this.dropArea.nativeElement, 'drop', (event: DragEvent) => {
        event.preventDefault();
        event.stopPropagation();
        this.dragOver = false;
        let files = Array.from(event?.dataTransfer?.files ?? []);
        files.forEach(f => {
          if (this.isCSV(f)) {
            this.pushFilesInArray(f);
          } else {
            alert(`El archivo "${f.name}" no es un CSV válido.`);
          }
        });
      }
    )
  }

  isCSV(file: File): boolean {
    const validMimeTypes = ['text/csv', 'application/vnd.ms-excel'];
    const validExtensions = ['.csv'];
    
    // Verifica el tipo MIME
    if (validMimeTypes.includes(file.type)) {
      return true;
    }
  
    // Si el tipo MIME no está definido, verifica la extensión del nombre de archivo
    const fileExtension = file.name.slice(file.name.lastIndexOf('.')).toLowerCase();
    return validExtensions.includes(fileExtension);
  }


  

  uploadFiles() {
    console.log("Enviar", this.selectedFiles);
    if (this.selectedFiles.length === 0) {
      alert("No hay archivos para enviar.");
      return;
    }

    this.uploadService.uploadFiles(this.selectedFiles).subscribe(
      response => {
        console.log('Archivos subidos con éxito:', response);
        alert(response.mensaje+"\n"+
         "Pedidos guardados: " + response.guardados + "\n" +
         "Pedidos duplicados: "  +response.duplicados
        );
      },
      error => {
        console.error('Error al subir archivos:', error);
        alert('Error al enviar los archivos');
      }
    );
  }
}
