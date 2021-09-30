import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {CommonAppServiceService} from './common-app-service.service';
export class posts {
  title:string;
  description:string;
  organization_id:number;
} 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-crud-test';
  postList:any = [];
  isCreate:boolean = true;
  postModel:{
    "id":number
    "title":string,
    "description":string,
    "organization_id": number
  }
  constructor(public appServ:CommonAppServiceService){}
  ngOnInit(){
    this.postModel = {
      id:1,
      title:'',
      description:'',
      organization_id:1
    }
    this.getPostDetails();
  }
  getPostDetails(){
    this.appServ.getList().subscribe(result=>{
      console.log(result);  
      this.postList = result.data;
    },err=>{
      console.log(err);
    })
  }
  createPostDetails(formData: any){
    console.log(formData.postTitle);
    console.log(formData.postDescription);
    this.postModel.title = formData.postTitle;
    this.postModel.description = formData.postDescription;
    console.log(this.postModel);
    this.appServ.saveList(this.postModel).subscribe(data=>{
      this.getPostDetails();
    },err=>{
      console.log(err);
    })
  }
  onEdit(post:any){
    console.log(post);
    this.isCreate = false;
    this.postModel = {
      id:post.id,
      title:post.title,
      description:post.description,
      organization_id:1
    }
  }
  onEditAction(post:any,id:any){
    this.postModel = {
      id:id,
      title:post.postTitle,
      description:post.postDescription,
      organization_id:1
    }
    this.appServ.editList(this.postModel).subscribe(data=>{
      console.log(data);
      this.getPostDetails();
    },err=>{
      console.log(err); 
    });
  }
  onDelete(id:any){
    console.log(id);
    this.appServ.deleteList(id).subscribe(response=>{
        console.log(response);
        this.getPostDetails();
    },err=>{
      console.log(err);
    });
  }
}
