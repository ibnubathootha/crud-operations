import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonAppServiceService {
  baseUrl = 'https://v2-dev-api.isorobot.io/api/v1/';
  jsonHttpHeader: any;
  
  constructor(private httpClient: HttpClient) { 
    var authToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjU5YmM2MTkzMGIzZmU2NjY1N2JhYjEwZjE4NmM5MDcxOGEwMmMzNzcyMGEzYzM3N2UyMjZkZjEwYTc1ODVjMjk5YWEzNmUzNjliODAyMGQ1In0.eyJhdWQiOiIxIiwianRpIjoiNTliYzYxOTMwYjNmZTY2NjU3YmFiMTBmMTg2YzkwNzE4YTAyYzM3NzIwYTNjMzc3ZTIyNmRmMTBhNzU4NWMyOTlhYTM2ZTM2OWI4MDIwZDUiLCJpYXQiOjE2MzI5OTAwNjYsIm5iZiI6MTYzMjk5MDA2NiwiZXhwIjoxNjY0NTI2MDY2LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.J_gEjO0LErbSTREuumoibVTZSyrolYdHB0sM-hx-T6A8i3Spf8W-IbRhuA_aTOh-NWo_w6BkTUW1lXETKsHOrQ-ZUzkwJZwE7pzsSNR6UFhYJ-l9T3rMJzTD7_gJiEvWcgSph1pFv2ElseorKq6NpYvyu0Dvc8B-jNqrC3LVG6UB8EcMO8eqCOOwNMX7tHIm8OjpJi71lauUCGmEtw-oaBt92VnQ7NpyK7q6xrHNYqKRmnLzTQecKLfLfYoasDnZP4RErYLp0RI83fUeYwasfMGweQQIh8wecy_tWN3rpCx2Xycw2P-GJ2NOooJXNQgWnogkZeoMSc4d6V8HLQgQNe6hhjm0RI2-K49k7jx8UDDN3a5S40QDrYTYvfBv51jSDem3OzHB7bh67dJQLp3P1SMR80_yStCcRD-VHxo__BQO5UdgacGHtkat1rLAm9TDLtPRlQjKGDYHubTm6rtOjLtbfSWEYzJbjlmQv3GoQbu97yNR6RHzvuYcGZHFUf5uQh743TjnFrx3hlZ5vexBDcLmsRUos70QDLxST4YipOKKXoOUVI8JpEuGHbiQDdC9suuoHX9K_jZp52u0_B6gEDVRnTGBpLqTnXXmD174tgljSx-kz1LYUattfnOVCOOcU77iadZ4jk4VcOWcdKWlC4kOhvL4YVj6nstBCyg9dyw";
    this.jsonHttpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      })
    }
  }
  getList(){
    return this.httpClient.get('https://v2-dev-api.isorobot.io/api/v1/organization-policies', this.jsonHttpHeader).pipe(
      map((res: any) => res)
    )
  }
  saveList(post:any){
    return this.httpClient.post('https://v2-dev-api.isorobot.io/api/v1/organization-policies',post,this.jsonHttpHeader).pipe(
      map((res: any) => res)
    )
  }
  editList(post:any){
    console.log(post);
    
    return this.httpClient.patch('https://v2-dev-api.isorobot.io/api/v1/organization-policies/'+post.id,post,this.jsonHttpHeader).pipe(
      map((res: any) => res)
    )
  }
  deleteList(id:any){
    console.log(id);
    return this.httpClient.delete('https://v2-dev-api.isorobot.io/api/v1/organization-policies/'+id,this.jsonHttpHeader).pipe(
      map((res: any) => res)
    )
  }
}
