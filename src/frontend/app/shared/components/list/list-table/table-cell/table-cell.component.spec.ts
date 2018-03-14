import { ApplicationStateComponent } from '../../../application-state/application-state.component';
import {
  ApplicationStateIconComponent,
} from '../../../application-state/application-state-icon/application-state-icon.component';
import { ApplicationStateIconPipe } from '../../../application-state/application-state-icon/application-state-icon.pipe';
import { ApplicationStateService } from '../../../application-state/application-state.service';
import { TableCellComponent, listTableCells } from './table-cell.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EventTabActorIconPipe } from '../../list-types/app-event/table-cell-event-action/event-tab-actor-icon.pipe';
import { ValuesPipe } from '../../../../pipes/values.pipe';
import { CoreModule } from '../../../../../core/core.module';
import { UsageGaugeComponent } from '../../../usage-gauge/usage-gauge.component';
import { UtilsService } from '../../../../../core/utils.service';
import { SharedModule } from '../../../../shared.module';
import { PercentagePipe } from '../../../../pipes/percentage.pipe';
import { RunningInstancesComponent } from '../../../running-instances/running-instances.component';
import { getBaseTestModules } from '../../../../../test-framework/cloud-foundry-endpoint-service.helper';
import { AppChipsComponent } from '../../../chips/chips.component';
import { BooleanIndicatorComponent } from '../../../boolean-indicator/boolean-indicator.component';

describe('TableCellComponent', () => {
  let component: TableCellComponent<any>;
  let fixture: ComponentFixture<TableCellComponent<any>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TableCellComponent,
        ...listTableCells,
        EventTabActorIconPipe,
        ValuesPipe,
        ApplicationStateComponent,
        ApplicationStateIconComponent,
        ApplicationStateIconPipe,
        UsageGaugeComponent,
        PercentagePipe,
        RunningInstancesComponent,
        AppChipsComponent,
        BooleanIndicatorComponent
      ],
      imports: [
        CoreModule
      ],
      providers: [
        ApplicationStateService,
        UtilsService,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});