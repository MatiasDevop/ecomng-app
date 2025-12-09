import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogRef,
} from '@angular/material/dialog';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatAnchor } from '@angular/material/button';
import { EcommerceStore } from '../../ecommerce-store';
import { SignUpParams } from '../../models/user';
import { SignInDialog } from '../sign-in-dialog/sign-in-dialog';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-sign-up-dialog',
  imports: [
    MatIcon,
    MatDialogClose,
    MatFormField,
    ReactiveFormsModule,
    MatAnchor,
    MatInputModule,
  ],
  template: `
    <div class="p-8 min-w-[400px] flex flex-col">
      <div class="flex justify-between">
        <div>
          <h2 class="text-xl font-medium mb-1">Sign Up</h2>
          <p class="text-sm text-gray-500">Join us and start shopping today</p>
        </div>
        <button tabindex="-1" class="-mt-2" mat-dialog-close>
          <mat-icon>close</mat-icon>
        </button>
      </div>
      <form class="mt-6" [formGroup]="signUpForm" (ngSubmit)="signUp()">
        <mat-form-field class="w-full mb-4">
          <input
            matInput
            formControlName="name"
            type="text"
            placeholder="Name"
            required
          />
          <mat-icon matPrefix>person</mat-icon>
        </mat-form-field>
        <mat-form-field class="w-full mb-4">
          <input
            matInput
            formControlName="email"
            placeholder="Email"
            required
            type="email"
          />
          <mat-icon matPrefix>email</mat-icon>
        </mat-form-field>
        <mat-form-field class="w-full mb-4">
          <input
            matInput
            formControlName="password"
            placeholder="Password"
            required
            type="password"
          />
          <mat-icon matPrefix>lock</mat-icon>
        </mat-form-field>
        <mat-form-field class="w-full mb-4">
          <input
            matInput
            formControlName="confirmPassword"
            placeholder="Confirm Password"
            required
            type="password"
          />
          <mat-icon matPrefix>lock</mat-icon>
        </mat-form-field>
        <button
          type="submit"
          [disabled]="signUpForm.invalid"
          class="w-full"
          matButton="filled"
        >
          Create Account
        </button>
      </form>
      <p class="text-sm text-gray-500 mt-2 text-center">
        Already have an account?
        <a class="text-blue-600 cursor-pointer" (click)="openSignInDialog()">
          Sign in
        </a>
      </p>
    </div>
  `,
  styles: ``,
})
export class SignUpDialog {
  fb = inject(NonNullableFormBuilder);

  dialogRef = inject(MatDialogRef);

  store = inject(EcommerceStore);
  matDialog = inject(MatDialog);
  data = inject<{ checkout: boolean }>(MAT_DIALOG_DATA);

  signUpForm = this.fb.group({
    name: ['Jhon D', Validators.required],
    email: ['jond@test.com', [Validators.required, Validators.email]],
    password: ['password123', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['password123', Validators.required],
  });

  signUp() {
    if (!this.signUpForm.valid) {
      this.signUpForm.markAllAsTouched();
      return;
    }

    const { name, email, password } = this.signUpForm.value;

    this.store.signUp({
      name: name!,
      email: email!,
      password: password!,
      dialogId: this.dialogRef.id,
      checkout: this.data?.checkout,
    } as SignUpParams);
  }

  openSignInDialog() {
    this.dialogRef.close();
    this.matDialog.open(SignInDialog, {
      disableClose: true,
      data: {
        checkout: this.data?.checkout,
      },
    });
  }
}
