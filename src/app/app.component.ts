import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgForm,NgModel } from '@angular/forms';

interface Voter {
  name: string;
  hasVoted: boolean;
}

interface Candidate {
  name: string;
  votes: number;
} 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  voters: Voter[] = [
    { name: 'Pappa', hasVoted: true },
    { name: 'Rumcajs', hasVoted: false }
  ];

  candidates: Candidate[] = [
    { name: 'Johnny Bravo', votes: 1 },
    { name: 'Pluto', votes: 0 }
  ];

  selectedVoter: Voter | null = null;
  selectedCandidate : Candidate | null = null;

  submitVote() {
    console.log(this.selectedCandidate,this.selectedVoter);
    if (this.selectedVoter && !this.selectedVoter.hasVoted) {
      this.selectedCandidate!.votes++;
      this.selectedVoter.hasVoted = true;
      // Reset selections
      this.selectedVoter = null;
      this.selectedCandidate = null;
    }
  }
  addCandidate (){
    let name = prompt('Please enter Candidate name:');
    if (name !== null) {
      name = name.toLowerCase()
      let isExit = this.candidates.find(cand => cand.name.toLowerCase() == name);
      if(!isExit){
        let candidate: Candidate = { name: name, votes: 0 };
        this.candidates.push(candidate)
      }
      else
        alert('Candidate Name Already Exit: ');

    }
    else
      alert('Candidate Name Cannot be Empty: ');

  }
  addVoter (){
    let name = prompt('Please enter Voter name:');
    if (name !== null) {
      name = name.toLowerCase()
      let isExit = this.voters.find(voter => voter.name.toLowerCase() == name);
      if(!isExit){
        let voter: Voter = { name: name, hasVoted: false };
        this.voters.push(voter)
      }
      else
        alert('Voter Name Already Exit: ');
    }
    else
      alert('Voter NameCannot be Empty: ');

  }
}
