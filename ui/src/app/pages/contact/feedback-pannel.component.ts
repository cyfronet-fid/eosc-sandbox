import { Component, AfterViewInit } from '@angular/core';
import "jquery";

declare var $: JQueryStatic;
declare var jQuery: JQueryStatic;

@Component({
  selector: 'app-feedback-panel',
  standalone: true,
  template: `
  <div  class="contact" id="contact">
  <a id="zammad-feedback-form">Submit feedback</a>
  </div>
  `
})
export class FeedbackPanelComponent implements AfterViewInit {
  url: string = 'https://helpdesk.sandbox.eosc-beyond.eu/assets/form/form.js'
  

  ngAfterViewInit() {
    this._loadScript(this.url);
    setTimeout(()=> {this._makeFeedbackForm()}, 10)
  }

  private _loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    script.id = 'zammad_form_script';
    body.insertBefore(script, body.firstChild);
  }



  private _makeFeedbackForm() {
    
    $('#zammad-feedback-form').ZammadForm({
      agreementMessage: '  Accept EOSC Helpdesk <a target="_blank" href="https://eosc-helpdesk.scc.kit.edu/privacy-policy">Data Privacy Policy</a> & <a target="_blank" href="https://eosc-helpdesk.scc.kit.edu/aup">Acceptable Use Policy</a>',
      messageTitle: 'Report a problem/feedback',
      messageSubmit: 'Send message',
      messageThankYou: 'Thank you for your inquiry (#%s)! We\'ll contact you as soon as possible.',
      modal: false,
      targetGroupID: 3,
      attributes: [
        {
          display: 'Name',
          name: 'name',
          tag: 'input',
          type: 'text',
          id: 'zammad-form-name',
          required: true,
          placeholder: 'Your Name',
          defaultValue: '',
        },
        {
          display: 'Email',
          name: 'email',
          tag: 'input',
          type: 'email',
          id: 'zammad-form-email',
          required: true,
          placeholder: 'Your Email',
          defaultValue: '',
        },
        {
          display: 'Subject',
          name: 'title',
          tag: 'input',
          id: 'zammad-form-subject',
          required: false,
          placeholder: 'My subject',
          defaultValue: '',
        },
        {
          display: 'Message',
          name: 'body',
          tag: 'textarea',
          id: 'zammad-form-body',
          required: true,
          placeholder: 'Your Message...',
          defaultValue: '',
          rows: 7,
        }
          ]
        });
  }

 
}
