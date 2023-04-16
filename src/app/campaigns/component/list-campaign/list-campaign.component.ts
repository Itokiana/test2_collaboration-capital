import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../service/brand.service';
import { Brand } from '../../model/brand.model';
import { RequestService } from '../../service/request.service';
import { Request } from '../../model/request.model';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-campaign',
  templateUrl: './list-campaign.component.html',
  styleUrls: ['./list-campaign.component.scss']
})
export class ListCampaignComponent implements OnInit {
  searchText?: string | null = '';
  brandId?: number | null;
  brands:  Brand[] = [];
  requests: Request[] = [];
  searchFilter: string = '';
  brandFilter: number | null = null;

  constructor(
    private brandService: BrandService,
    private requestServce: RequestService,
    private router:  Router
  ) {}

  ngOnInit() {
    this.brandService.getBrands()
      .subscribe((data: Brand[]) => {
        this.brands = data;
      });

    this.requestServce.getRequests()
      .subscribe((data: any) => {
        this.requests = data.requests;
      });
  }

  filterRequest(): void {
    this.searchFilter = JSON.parse(JSON.stringify(this.searchText));
    this.brandFilter = JSON.parse(JSON.stringify(this.brandId));
  }

  formatDate(date: string) {
    return moment(date).format('LLL');
  }

  redirectToEdit(requestId: number): void {
    this.router.navigate(['/campaigns/edit', requestId]);
  }
}
