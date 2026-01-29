import { Component, inject, signal } from '@angular/core';
import { ViewPanel } from '../../../directives/view-panel.directive';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { OptionItem } from '../../../models/option-item';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatSelect, MatOption } from '@angular/material/select';
import { EcommerceStore } from '../../../ecommerce-store';
import { MatButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-write-review',
  imports: [
    ViewPanel,
    MatFormField,
    MatLabel,
    MatSelect,
    MatOption,
    ReactiveFormsModule,
    MatButton,
    MatInput,
  ],
  template: `
    <div appViewPanel>
      <h2 class="text-xl font-semibold mb-6">Write a Review</h2>
      <form [formGroup]="reviewForm" (ngSubmit)="saveReview()" class="flex flex-col gap-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <mat-form-field appearance="fill" class="w-full">
            <mat-label>Review title</mat-label>
            <input
              formControlName="title"
              placeholder="Summarize your review"
              matInput
              type="text"
            />
          </mat-form-field>
          <mat-form-field>
            <mat-select formControlName="rating" placeholder="Rating">
              @for (option of ratingOptions(); track option.value) {
                <mat-option [value]="option.value">{{ option.label }}</mat-option>
              }
            </mat-select>
          </mat-form-field>
          <mat-form-field class="col-span-2">
            <mat-label>Review</mat-label>
            <textarea
              matInput
              formControlName="comment"
              placeholder="Tell others about your experience with the product"
              rows="4"
              type="text"
            ></textarea>
          </mat-form-field>
        </div>
        <div class="flex gap-4">
          <button matButton="filled" type="submit" [disabled]="store.loading()">
            {{ store.loading() ? 'Submitting...' : 'Submit Review' }}
          </button>
          <button matButton="outlined" type="button" (click)="store.hideWriteReview()">
            Cancel
          </button>
        </div>
      </form>
    </div>
  `,
  styles: ``,
  host: { class: 'block' },
})
export class WriteReview {
  fb = inject(FormBuilder);

  store = inject(EcommerceStore);

  ratingOptions = signal<OptionItem[]>([
    { label: '5 Stars - Excellent', value: 5 },
    { label: '4 Stars - Good', value: 4 },
    { label: '3 Stars - Average', value: 3 },
    { label: '2 Stars - Poor', value: 2 },
    { label: '1 Stars - Terrible', value: 1 },
  ]);

  reviewForm = this.fb.group({
    title: ['', Validators.required],
    comment: ['', Validators.required],
    rating: [5, Validators.required],
  });

  saveReview() {
    if (this.reviewForm.invalid) {
      return;
    }
  }
}
