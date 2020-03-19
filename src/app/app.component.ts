import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'bookmarkly Extenstion'

  constructor() {
    // browser.bookmarks.getTree().then(console.log)
  }
}
