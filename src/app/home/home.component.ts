import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

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

  public district: string[] =['Quận Huyện'];
  public vietnamData=[ {city:'Chọn thành phố', district:['Quận Huyện']},
    {city:'An Giang', district:["Thành phố Long Xuyên","Thành phố Châu Đốc","Thị xã Tân Châu","Huyện An Phú","Huyện Châu Phú","Huyện Châu Thành","Huyện Chợ Mới","Huyện Phú Tân","Huyện Thoại Sơn","Huyện Tịnh Biên","Huyện Tri Tôn"]}
  ,{city:'Bà Rịa- Vũng Tàu', district:["Thành phố Vũng Tàu","Thị xã Bà Rịa","Thị xã Phú Mỹ","Huyện Châu Đức","Huyện Côn Đảo","Huyện Đất Đỏ","Huyện Long Điền","Huyện Tân Thành","Huyện Xuyên Mộc"]},
  {city:'Hải Dương', district:["Thành phố Hải Dương","Thị xã Chí Linh","Huyện Bình Giang","Huyện Cẩm Giàng","Huyện Gia Lộc","Huyện Kim Thành","Huyện Kinh Môn","Huyện Nam Sách","Huyện Ninh Giang","Huyện Thanh Hà","Huyện Thanh Miện","Huyện Tứ Kỳ"]},
  {city:'Hà Nội', district:["Quận Ba Đình","Huyện Ba Vì","Quận Bắc Từ Liêm","Quận Cầu Giấy","Huyện Chương Mỹ","Huyện Đan Phượng","Huyện Đông Anh","Quận Đống Đa","Huyện Gia Lâm","Quận Hà Đông","Quận Hai Bà Trưng","Huyện Hoài Đức","Quận Hoàn Kiếm","Quận Hoàng Mai","Quận Long Biên","Huyện Mê Linh","Huyện Mỹ Đức","Quận Nam Từ Liêm","Huyện Phú Xuyên","Huyện Phúc Thọ","Huyện Quốc Oai","Huyện Sóc Sơn","Thị xã Sơn Tây","Quận Tây Hồ","Huyện Thạch Thất","Huyện Thanh Oai","Huyện Thanh Trì","Quận Thanh Xuân","Huyện Thường Tín","Huyện Ứng Hòa"]}
  
  ]

  public counter = 0;
  public counterBinhphuong=0;

  constructor(private common:CommonService){}

  public ngOnInit(): void {
    // console.log('HomeComponent ngOnInit = ', this.common.getCounter());
    console.log('HomeComponent ngOnInit = ', this.common.counter);
    this.counter= this.common.counter;
    this.counterBinhphuong=this.common.binhPhuong(this.counter);
    this.common.counter++;
  }

  public changeCity(event:any): void{
    const city =event.target.value;
    if(!city){
      return;
    }

    // cách 1
    // const search = this.vietnamData.filter(data => data.city === city);
    // console.log('search', search);
    // if(search && search.length>0){
    //   this.district = search[0].district;
    // }

    // cách 2
    this.district = this.vietnamData.find(data => data.city === city)?.district || [];
  }
}
