import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { json } from 'body-parser';

@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.scss']
})
export class MycoursesComponent implements OnInit {

  server = 'http://localhost:3000';
  array_cursos: any[]
  nomes: string[];
  links: string[];
  desc: string[];
  imagens: string[];

  constructor() {this.nomes = [];this.links = [];this.desc = [];this.imagens = [];
    this.array_cursos = [];}
  ngOnInit(): void {this.get_courses();}

  async get_courses(){
    const data1 = () => {return axios.get(this.server + '/Courseon', {})
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    })
    }
    data1().then(data => {
      let dados = data;
      let resp = ""
      for (var i = 0; i < dados.length; i++) {
        resp += dados[i];
        if(dados[i] == '}'){
          this.array_cursos.push(JSON.parse(resp));
          resp = '';
        }
      }
    })
  }
}
