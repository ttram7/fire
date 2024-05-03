import { Injectable } from '@angular/core';
import { ResearchReferences } from './researchreferences';

@Injectable({
  providedIn: 'root'
})
export class References {
  
  url = 'http://localhost:3000/research-references';

  //these functions allow dependencies to access service's data
  async getAllResearchReferences(): Promise<ResearchReferences> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }
  
  submitApplication(firstName: string, lastName: string, email: string)
  {
    console.log(`First: ${firstName}, Last: ${lastName}, Email: ${email}`);
  }
}
