import { Component, OnInit } from '@angular/core';
import { IpstackService } from '../ipstack.service';
import { CatfactService } from '../catfact.service';
import { ApixuService } from '../apixu.service';
import { YerkeeService } from '../yerkee.service';
import { PokeapiService } from '../pokeapi.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  ipStackInfo;
  catFact;
  weatherInfo;
  fortune;
  pokemon;

  constructor(
    private ipstackservice: IpstackService,
    private catfactservice: CatfactService,
    private apixuservice: ApixuService,
    private yerkeeservice: YerkeeService,
    private pokeapiservice: PokeapiService
    ) { }

  ngOnInit() {
    this.getInfo();
    this.getCatFact();
    this.getFortune();
    this.getPokemonRandom();
  }

getInfo() {
  this.ipstackservice.getSelfInfo()
  .subscribe(info => {
    this.ipStackInfo = info;
    if (this.weatherInfo == null) {
      this.getCurrentWeather();
    }
  });
}

getCatFact(event?) {
  if (event != null) {
    event.target.classList.add('is-loading');
  }
  this.catfactservice.getCatFact().subscribe(catFact => {
    this.catFact = catFact;
    if (event != null) {
        event.target.classList.remove('is-loading');
      }
    });
}

getCurrentWeather(event?) {
  if (event != null) {
    event.target.classList.add('is-loading');
  }
  this.apixuservice.getCurrentWeather(this.ipStackInfo.region_name).subscribe(weatherInfo => {
      this.weatherInfo = weatherInfo;
      if (event != null) {
        event.target.classList.remove('is-loading');
      }
    });
}

getFortune(event?) {
  if (event != null) {
    event.target.classList.add('is-loading');
  }
  this.yerkeeservice.getFortune().subscribe(fortune => {
      this.fortune = fortune;
      if (event != null) {
        event.target.classList.remove('is-loading');
      }
    });
}

// getPokemonWithID(pokeID: number) {
//   this.pokeapiservice.getPokemonWithID(pokeID).subscribe(pokemon => this.pokemon = pokemon);
// }

// getPokemonWithName(pokeName: string) {
//   this.pokeapiservice.getPokemonWithName(pokeName).subscribe(pokemon => this.pokemon = pokemon);
// }

getPokemonRandom(event?) {
  if (event != null) {
    event.target.classList.add('is-loading');
  }
  this.pokeapiservice.getPokemonRandom().subscribe(pokemon => {
    this.pokemon = pokemon;
    if (event != null) {
      event.target.classList.remove('is-loading');
    }
  }
    );
}


}
