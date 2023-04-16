import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-campaign',
  templateUrl: './edit-campaign.component.html',
  styleUrls: ['./edit-campaign.component.scss']
})
export class EditCampaignComponent {
  validateForm!: UntypedFormGroup;
  checkOptionsOne = [
    { label: 'Collaboration', value: 'Collaboration'},
    { label: 'New Product/Innovation', value: 'New Product/Innovation' },
    { label: 'Print', value: 'Print' },
    { label: 'Radio', value: 'Radio' },
    { label: 'Sponsorship', value: 'Sponsorship' },
    { label: 'Website', value: 'Website' },
    { label: 'Labeling/Packaging', value: 'Labeling/Packaging' },
    { label: 'OOH', value: 'OOH' },
    { label: 'Promotions', value: 'Promotions' },
    { label: 'Social Media', value: 'Social Media' },
    { label: 'TVC/Online videos', value: 'TVC/Online videos' },
    { label: 'Others', value: 'Others' },
  ];

  constructor(private fb: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      brand: [null, [Validators.required]],
      campaignName: [null, [Validators.required]],
      media: [null, [Validators.required]],
      decisionDeadline: [null, [Validators.required]],
    });
  }

  log(value: object[]): void {
    console.log(value);
  }

  submitForm(): void {
    //
  }
}
