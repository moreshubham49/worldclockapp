import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-settime',
  templateUrl: './settime.component.html',
  styleUrls: ['./settime.component.css'],
  // template: `{{ now }}`
})
export class SettimeComponent implements OnInit {

public now: Date = new Date();
public diffIndia = 0;
public diffLondon = 0;
  constructor(public datePipe : DatePipe ) {
    setInterval(() => {
      var time = datePipe.transform(new Date().getTime(),'HH:mm:ss','GMT-4');
      var ss = time.split(':');

      console.log(ss);
      console.log(time);

      var timLondon = parseInt(ss[0])+this.diffLondon+":"+ss[1]+":"+ss[2];
      var timIndia = parseInt(ss[0])+this.diffIndia+":"+ss[1]+":"+ss[2];

      document.getElementById('USATIME').innerHTML=time;
      document.getElementById('LONDONTIME').innerHTML=timLondon;
      document.getElementById('INDIATIME').innerHTML=timIndia;
    }, 5000);
    console.log(this.now);
   }

  ngOnInit() {
  }
  SetTime(myform){
    // var x=document.getElementById("usatime");
    console.log(myform.value["time"]);
    document.getElementById('USATIME').innerHTML=myform.value["time"];
    document.getElementById('LONDONTIME').innerHTML=myform.value["time"];
    document.getElementById('INDIATIME').innerHTML=myform.value["time"];
    console.log(myform.value)
    // alert("Functiom");
    // console.log(this.msToTime(561))

  }

  // $scope.onFnBegChange = function(fnBeg) {
  //   // $scope.fnBeg = fnBeg.toLocaleTimeString();
  //   // console.log(fnBeg)
  // }

getDifference(myform)
{

  this.diffIndia=myform.value.diffIndia;
this.diffLondon=myform.value.diffLondon;
}
}
