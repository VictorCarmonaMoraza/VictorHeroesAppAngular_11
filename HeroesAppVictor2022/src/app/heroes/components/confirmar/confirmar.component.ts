import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.css'
  ]
})
export class ConfirmarComponent implements OnInit {

  constructor(private dialofRef:MatDialogRef<ConfirmarComponent>) { }

  ngOnInit(): void {
  }

  borrar() {
    this.dialofRef.close(true);
  }

  cerrar() {
    this.dialofRef.close();
  }

}
