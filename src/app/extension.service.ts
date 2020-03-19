import { Injectable } from '@angular/core'
import { Bookmarks } from 'webextension-polyfill-ts'
// @ts-ignore
import bookmarksJson from '../assets/mocks/bookmarks.json'
import { of } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class ExtensionService {

  constructor() { }

  public getBookmarksTree() {
    // return from(browser.bookmarks.getTree())
    return of<Bookmarks.BookmarkTreeNode[]>(bookmarksJson as any)
  }
}
