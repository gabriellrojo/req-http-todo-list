import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit{

  constructor(private httpService: ServiceService){}

  public taskList: any = []
  public value: string = ""

  ngAfterViewInit(){
    this.httpService.getTasks().subscribe(
      res => this.taskList = res
    )
  }

  addTask(value: string){
    this.httpService.addTask(value).subscribe(
      res => this.taskList.push(res)
    )
    this.value = ""
  }

  deleteTask(id: number){
    this.httpService.deleteTask(id).subscribe(
      res => this.taskList = this.taskList.filter((obj: any) => obj.id != id)
    )
  }

  /*deleteAllTasks(){
    this.httpService.deleteAll().subscribe(res => console.log(res))
  }*/

}
