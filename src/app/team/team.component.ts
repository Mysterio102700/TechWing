import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {

  Images=[
    {
      img:'../assets/images/Team/jaggan.jpg',
      name:'MVD Jagannadham',
      pos:'AWS DevOps trainers (OPS-HEAD)'
    },
    {
      img:'../assets/images/Team/shiva.jpg',
      name:'Shiva',
      pos:'HR'
    },{
      img:'../assets/images/Team/surya.jpg',
      name:'K Surya Narayana murthy',
      pos:'Java fullstack /UI/UX Trainer'
    },{
      img:'../assets/images/Team/mohan.jpg',
      name:'K.Mohan Reddy',
      pos:'Aws / RedHat Trainer'
    }
  ]

}
