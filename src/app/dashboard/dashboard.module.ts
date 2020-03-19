import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DashboardContainerComponent } from './containers/dashboard-container/dashboard-container.component'
import { ColumnComponent } from './components/column/column.component'
import { FolderComponent } from './components/folder/folder.component'


@NgModule({
  declarations: [ DashboardContainerComponent, ColumnComponent, FolderComponent ],
  exports: [
    DashboardContainerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
