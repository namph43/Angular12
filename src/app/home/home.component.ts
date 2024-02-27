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
  public traiCay2=[
    {ten: 'Táo', gia: 12, haGia: true},
    {ten: 'Nho', gia: -3, haGia: false},
    {ten: 'Cam', gia: 34, haGia: false},
    {ten: 'Quýt', gia: 32, haGia: true},
  ];

  public ngOnInit(): void {
    console.log('trai cay = ', this.traiCay2);
  }
}
