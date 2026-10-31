import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { App } from './app/app';

platformBrowser()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
