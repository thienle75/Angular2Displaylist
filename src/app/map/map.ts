export class Map{
   constructor(
               public id: string, 
               public name: string,
               public logo_url: string,
               public website_url: string,
               public latitude: string, 
               public longitude: string,
               public address: string){
                  this.id = id;
                  this.name = name;
                  this.logo_url = logo_url;
                  this.website_url = website_url;
                  this.latitude = latitude;
                  this.longitude = longitude;
                  this.address = address;
               } 
 }