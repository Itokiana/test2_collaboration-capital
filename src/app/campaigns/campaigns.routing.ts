import { Routes } from '@angular/router';
import { ListCampaignComponent } from './list-campaign/list-campaign.component';
import { EditCampaignComponent } from './edit-campaign/edit-campaign.component';

export const CampaignsRoutes: Routes = [
  {
    path: 'campaigns',
    children: [
      {
        path: '',
        component: ListCampaignComponent,
        data: {
          heading: 'Tous les campagnes',
        },
      },
      {
        path: 'edit/:campaignId',
        component: EditCampaignComponent,
        data: {
          heading: 'Edition campagne',
        },
      },
    ],
  }
];
