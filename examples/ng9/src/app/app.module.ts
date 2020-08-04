import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroService } from './hero.service';
import { HttpClientModule } from '@angular/common/http';
import { OnPushStratComponent } from './on-push-strat/on-push-strat.component';
import { NetworkComponent } from './network/network.component';
import { NetworkService } from './network.service';
import { HtmlMountComponent } from './html-mount/html-mount.component';
import { OutputSubscribeComponent } from './output-subscribe/output-subscribe.component';
import { ImageSnapshotComponent } from './image-snapshot/image-snapshot.component';

@NgModule({
  declarations: [
    AppComponent,
    OnPushStratComponent,
    NetworkComponent,
    HtmlMountComponent,
    OutputSubscribeComponent,
    ImageSnapshotComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [HeroService, NetworkService],
  bootstrap: [AppComponent]
})
export class AppModule { }