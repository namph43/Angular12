import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  public name = 'Nam Pham';
  public age = 23;
  public traiCay =['Táo','Nho','Cam','Quýt','Mít','Dừa','Ổi'];

  public ngOnInit(): void {
    console.log('trai cay = ', this.traiCay);
  }
}
