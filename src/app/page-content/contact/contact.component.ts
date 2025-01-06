import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactMessageboxComponent } from './contact-messagebox/contact-messagebox.component';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ContactMessageboxComponent
  ],
  animations: [
    trigger('showHide', [
      state('hide', style({ opacity: '0', visibility: 'hidden'})),
      state('show', style({ opacity: '1', visibility: 'visible'})),
      transition('hide <=> show', [animate('300ms ease-in')])
    ])
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  protected messageBoxState: 'show' | 'hide' = 'hide';

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  privacyPolicy:boolean = false;

  post = {
    endPoint: 'https://csaba-miska.net/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.showMessageBox();
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => {
            this.showMessageBox();
          },
        });
    }
  }

  showMessageBox() {
    this.messageBoxState = 'show';
    setTimeout(() => {
      this.messageBoxState = 'hide';
    }, 2000);
  }
}
