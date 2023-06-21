import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {
  digits:number[] = Array.from({length:9},(_,i)=>i+1)

  rows: number[][] = []

  calcValue!: number;
  
  first!:number
  second!:number;
  ngOnInit(): void {
      this.rows = this.chunkArray(this.digits,3)
      console.log(this.calcValue)
  }

  chunkArray(arr:any[], size: number): any[][]{
    const chunkedArray = []
    for(let i = 0;i < arr.length; i+=size){
      chunkedArray.push(arr.slice(i,i+size))
    }
    return chunkedArray
  }

  numClick(num:number){
    this.calcValue = this.calcValue ? this.calcValue*10 + num : num;
  }

  clearInput(){
    this.calcValue = 0;
  }

  percent(){
    this.calcValue = this.calcValue/100
  }
  adding(){
      if(this.first && this.second){
        this.calcValue = this.first + this.second;
        this.first = 0;
        this.second = 0
      }
      else if (this.first){
        this.second = this.calcValue
        this.calcValue = 0
      }
      else{
        this.first = this.calcValue
        this.calcValue = 0;
      }
  }
  minus(){
    if(this.first && this.second){
      this.calcValue = this.first - this.second
      this.first = 0
      this.second = 0
    }
    else if(this.first){
      this.second = this.calcValue
      this.calcValue = 0
    }
    else{
      this.first = this.calcValue
      this.calcValue = 0
    }
  }
}
