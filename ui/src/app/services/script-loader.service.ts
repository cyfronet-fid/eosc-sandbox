import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptLoaderService {
  loadScript(src: string): Promise<void> {
    
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) {
        resolve(); 
        return;
      }

      const script = document.createElement('script');
      script.innerHTML = '';
      script.id = 'zammad_form_script';
      script.src = src;
      script.async = false;
      script.onload = () => resolve();
      script.onerror = () => reject(`Could not load script ${src}`);
      document.head.appendChild(script);
    });
  }
}
