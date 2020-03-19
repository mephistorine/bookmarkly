import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core'
import { Folder } from '../../models'

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: [ './column.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColumnComponent implements OnInit {

  @Input()
  public folder: Folder

  constructor() { }

  ngOnInit(): void {
  }

}
