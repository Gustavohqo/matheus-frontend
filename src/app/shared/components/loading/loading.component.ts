import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();

  loadingSubscription?: Subscription;

  loading = false;

  numberOfActiveLoading = 0;

  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.verifyLoadingState();
  }

  verifyLoadingState() {
    this.loadingSubscription = this.loadingService.changeLoading.subscribe((loadingIsVisible: boolean) => {
      if (loadingIsVisible) {
        this.numberOfActiveLoading += 1;
      } else {
        this.numberOfActiveLoading -= 1;
      }

      this.loading = this.numberOfActiveLoading > 0;
    });
  }

  ngOnDestroy(): void {
    this.loadingSubscription?.unsubscribe();
  }
}
