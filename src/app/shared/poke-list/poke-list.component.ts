import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {

  private setAllPokemons: any;
  public getAllPokemons: any;
  public apiError: boolean = false;

  constructor(private pokeApiService: PokeApiService) { }

  ngOnInit() {
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
      this.setAllPokemons = res.results;
      this.getAllPokemons = this.setAllPokemons;
      this.apiError = true;
      });

  }

public getSearch(value: string) {
  const filter = this.setAllPokemons.filter((res: any) => {
    return !res.name.indexOf(value.toLowerCase());
  });

  this.getAllPokemons = filter
}

}
