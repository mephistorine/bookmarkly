import { Bookmark } from './bookmark'
import { Bookmarks } from 'webextension-polyfill-ts'

export class Folder {
  public children: (Folder | Bookmark)[] = []

  constructor(public raw: Bookmarks.BookmarkTreeNode) {
    this.makeChildren()
  }

  private makeChildren() {
    if (!this.raw.children) return

    for (const child of this.raw.children) {
      if (child.type === 'bookmark') {
        this.children.push(new Bookmark(child))
        continue
      }

      if (child.type === 'folder') {
        this.children.push(new Folder(child))
      }
    }
  }
}
