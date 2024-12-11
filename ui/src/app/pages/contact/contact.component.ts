import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { ContactService } from "./contact.service";


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule, ReactiveFormsModule, CommonModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  lastSubmittedData: any = null;
  isResendingBlocked: boolean = false;

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
      this.isResendingBlocked = true;

      this.contactService.sendMessage(currentData).subscribe({
        next: (response) => {
          console.log(response.detail);
          alert('Thanks for contacting us! Message has been submitted.');
          this.lastSubmittedData = currentData;
          this.contactForm.reset();
          this.isResendingBlocked = true; // Block resending same message.
        },
        error: (error) => {
          console.error('Error sending message:', error);
          alert('Failed to send the message. Please try again later.');
          this.isResendingBlocked = false; // Allow retrying if submission failed.
        },
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
