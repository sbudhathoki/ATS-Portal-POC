import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from '../admin.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  dataSource: MatTableDataSource<User>

  displayedColumns: string[] = [
      'companyId', 'companyName', 'lastName', 
      'firstName', 'email', 'phoneNumber', 'reportType', 
      'reportCreationDate', 'pdfPath'];
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  constructor(private adminService: AdminService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.getUsers();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
         case 'reportType': return item.companyHtmlPdfPath.reportType;
         case 'reportCreationDate': return item.companyHtmlPdfPath.reportCreationDate;
         case 'pdfPath': return item.companyHtmlPdfPath.pdfPath;
         default: return item[property];
      }
    };
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getUsers() {
    this.adminService.getUsersFromServer()
    .subscribe(
      (data: User[]) => {
      console.log(data);
      this.dataSource.data = data;
      return data;
    },
    (err) => {  
      console.error(err)
    });
  }
}
  