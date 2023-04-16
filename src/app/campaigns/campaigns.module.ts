import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CampaignsRoutes } from './campaigns.routing';

import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBadgeModule } from 'ng-zorro-antd/badge';

import { ListCampaignComponent } from './component/list-campaign/list-campaign.component';
import { EditCampaignComponent } from './component/edit-campaign/edit-campaign.component';



@NgModule({
  declarations: [
    ListCampaignComponent,
    EditCampaignComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(CampaignsRoutes),
    NzTypographyModule,
    NzDatePickerModule,
    NzFormModule,
    NzCardModule,
    NzButtonModule,
    NzInputModule,
    NzCheckboxModule,
    NzSpaceModule,
    NzSelectModule,
    NzIconModule,
    NzBadgeModule
  ]
})
export class CampaignsModule { }
