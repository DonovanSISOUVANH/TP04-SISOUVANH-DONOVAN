import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import {AddReference} from '../../../shared/actions/panier.action';
import {Reference} from '../../../shared/models/reference';
import { PanierState } from 'src/shared/states/panier-state';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  constructor(private store : Store) { }

  ngOnInit(): void {
  }

  addPanier (ref : string) {
    console.log (ref);
    
    this.store.dispatch (new AddReference ({"reference":ref}));
  }

}
