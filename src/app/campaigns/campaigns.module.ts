import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CampaignsRoutes } from './campaigns.routing';

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
  ]
})
export class CampaignsModule { }
