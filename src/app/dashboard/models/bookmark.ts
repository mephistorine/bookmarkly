import { Bookmarks } from 'webextension-polyfill-ts'

export class Bookmark {
  constructor(public raw: Bookmarks.BookmarkTreeNode) {
  }
}
