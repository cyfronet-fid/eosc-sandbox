import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule, ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  lastSubmittedData: any = null;
  isResendingBlocked: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });

    this.contactForm.valueChanges.subscribe(() => {
      this.checkForResending();
    });
  }

  get formControls() {
    return this.contactForm.controls;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const currentData = this.contactForm.value;
      this.lastSubmittedData = currentData;
      this.isResendingBlocked = true;
      alert('Thanks for contacting us! Message has been submitted.');
    }
  }

  checkForResending(): void {
    const currentData = this.contactForm.value;
    this.isResendingBlocked =
      this.lastSubmittedData &&
      JSON.stringify(this.lastSubmittedData) === JSON.stringify(currentData);
  }
}
