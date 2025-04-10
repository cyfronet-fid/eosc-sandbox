import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  // imports: [
  //   FormsModule,
  //   ReactiveFormsModule,
  //   CommonModule
  // ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  lastSubmittedData: any = null;
  isResendingBlocked: boolean = false;
  isLoading: boolean = false;
  submissionError: string | null = null;

  constructor(private fb: FormBuilder, private contactService: ContactService) {}

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

      // Block resending the same message
      if (this.isResendingBlocked) {
        alert('This message has already been sent.');
        return;
      }

      // Show loading state
      this.isLoading = true;
      this.submissionError = null;

      this.contactService.sendMessage(currentData).subscribe({
        next: (response) => {
          this.lastSubmittedData = currentData;
          this.isResendingBlocked = true;
          this.isLoading = false;
          alert('Thanks for contacting us! Your message has been submitted.');
        },
        error: (err) => {
          this.isLoading = false;
          this.submissionError = 'Failed to send the message. Please try again later.';
          console.error('Error sending contact message:', err);
        }
      });
    }
  }

  checkForResending(): void {
    const currentData = this.contactForm.value;
    this.isResendingBlocked =
      this.lastSubmittedData &&
      JSON.stringify(this.lastSubmittedData) === JSON.stringify(currentData);
  }
}
