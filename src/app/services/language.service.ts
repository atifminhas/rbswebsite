import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LanguageService {

  constructor(
  ) { 

  }

  public get currentLanguage() {
      if(!localStorage.getItem("app_lang"))
          location.href= "/";

      return localStorage.getItem("app_lang");
  }

  setLanguage(language) {
      localStorage.setItem('app_lang', language);
  }
}
