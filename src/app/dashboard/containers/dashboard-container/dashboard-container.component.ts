import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { ExtensionService } from '../../../extension.service'
import { map, tap } from 'rxjs/operators'
import { Folder } from '../../models'

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: [ './dashboard-container.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardContainerComponent implements OnInit {

  constructor(private extensionService: ExtensionService) { }

  public folder$ = this.extensionService.getBookmarksTree().pipe(
    map((trees) => trees[ 0 ]),
    map((treeRaw) => new Folder(treeRaw)),
    tap(data => {console.log(data)})
  )

  public ngOnInit(): void {
  }

}
