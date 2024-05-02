import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  
  url = 'http://localhost:3000/locations';

  //these functions allow dependencies to access service's data
  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }
  
  async getHousingLocationById(id: string): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }
  
  submitApplication(firstName: string, lastName: string, email: string)
  {
    console.log(`First: ${firstName}, Last: ${lastName}, Email: ${email}`);
  }
}
