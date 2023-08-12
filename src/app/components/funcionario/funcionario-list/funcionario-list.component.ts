import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Funcionario } from 'src/app/models/funcionario';

@Component({
  selector: 'app-funcionario-list',
  templateUrl: './funcionario-list.component.html',
  styleUrls: ['./funcionario-list.component.scss']
})
export class FuncionarioListComponent implements OnInit {

  ELEMENT_DATA: Funcionario[] = []

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'status'];
  dataSource = new MatTableDataSource<Funcionario>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(
  //  private service: TecnicoService
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    // //this.service.findAll().subscribe(resposta => {
    //   this.ELEMENT_DATA = resposta
    //   this.dataSource = new MatTableDataSource<Funcionario>(resposta);
    //   this.dataSource.paginator = this.paginator;
    // })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}