import { PokeApiService } from './../../service/poke-api.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {

  private setAllPokemons: any;
  public getAllPokemons: any;
  public apiError: boolean = false;
  p = 0


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
