import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-gallery';

  componentToShow: string = null;

  onLinkClick(event) {
    this.componentToShow = event;
  }

  shouldShowRecipeComponent(): boolean {
    return this.componentToShow === 'recipe'
  }

  shouldShowShoppingListComponent(): boolean {
    return this.componentToShow === 'shoppingList'
  }
}
