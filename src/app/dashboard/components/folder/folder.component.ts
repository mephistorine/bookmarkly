import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core'
import { Folder } from '../../models'

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: [ './folder.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FolderComponent implements OnInit {

  @Input()
  public folder: Folder

  constructor() { }

  ngOnInit(): void {
  }

}
