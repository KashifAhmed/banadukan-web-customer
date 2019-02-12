import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = "Top Startups"
  startups = [{
    logo: 'https://rentmycar.pk/images/logo.png',
    title: 'rentmycar.pk',
    summary: 'Car Rentals Marketplace, where Members can rent any car they want, from a Community of Local Car Owners and Car Rental Companies',
    categories: ['health', 'finance', 'travel', 'entertainment']
  },{
    logo: 'https://labcloud.pk/images/logo/LabCloud.png',
    title: 'LabCloud.pk',
    summary: 'LabCloud is connecting patients with labs through its online platform to provide lab services at home and let you view reports online.',
    categories: ['health', 'finance', 'travel', 'entertainment']
  },{
    logo: 'https://scontent.fkhi13-1.fna.fbcdn.net/v/t1.0-9/18698081_230206080807837_7593425153084052581_n.png?_nc_cat=108&_nc_eui2=AeFyb4Wa7LnjDC1LsPWWDEut8s1DCNGsBbJHdM2U06LqLxVZlOVgEZfO-oaAeZuHT6_AKoSAF1yJzkJI7DRQJGT1jKWXpXjkObIP5fVYqYlwNA&_nc_ht=scontent.fkhi13-1.fna&oh=3f9deb6df7da51ed38907b3ca1dc8a37&oe=5CFEA8E7',
    title: 'READUP',
    summary: 'ReadUp is a digital publishing house and ebook marketplace.',
    categories: ['health', 'finance', 'travel', 'entertainment']
  },{
    logo: 'http://paysyslabs.com/wp-content/uploads/2017/03/paysys_logo.jpg',
    title: 'Paysys Labs Private Limited',
    summary: 'Paysys Labs provides reliable and secure technology platforms that enable Banks, Telcos and Businesses to offer their customers a vast array',
    categories: ['health', 'finance', 'travel', 'entertainment']
  },
  {
    logo: 'http://paysyslabs.com/wp-content/uploads/2017/03/paysys_logo.jpg',
    title: 'Paysys Labs Private Limited',
    summary: 'Paysys Labs provides reliable and secure technology platforms that enable Banks, Telcos and Businesses to offer their customers a vast array',
    categories: ['health', 'finance', 'travel', 'entertainment']
  },
  {
    logo: 'http://paysyslabs.com/wp-content/uploads/2017/03/paysys_logo.jpg',
    title: 'Paysys Labs Private Limited',
    summary: 'Paysys Labs provides reliable and secure technology platforms that enable Banks, Telcos and Businesses to offer their customers a vast array',
    categories: ['health', 'finance', 'travel', 'entertainment']
  },
  {
    logo: 'http://paysyslabs.com/wp-content/uploads/2017/03/paysys_logo.jpg',
    title: 'Paysys Labs Private Limited',
    summary: 'Paysys Labs provides reliable and secure technology platforms that enable Banks, Telcos and Businesses to offer their customers a vast array',
    categories: ['health', 'finance', 'travel', 'entertainment']
  },
  {
    logo: 'http://paysyslabs.com/wp-content/uploads/2017/03/paysys_logo.jpg',
    title: 'Paysys Labs Private Limited',
    summary: 'Paysys Labs provides reliable and secure technology platforms that enable Banks, Telcos and Businesses to offer their customers a vast array',
    categories: ['health', 'finance', 'travel', 'entertainment']
  }
];
  constructor() { 
    
    
  }

  ngOnInit() {
  }
}
