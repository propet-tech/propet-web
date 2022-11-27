import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable } from "rxjs";
import { NotificationService } from "src/app/core/service/notify.Service";
import { Client } from "../model/client.model";
import { ClientService } from "../service/client.service";

export class ClientDataSource implements DataSource<Client> {

    private dataSubject = new BehaviorSubject<Client[]>([]);
    public totalElements: number = 0;

    constructor(
        private clientService: ClientService,
        private notify: NotificationService
    ) {}

    connect(collectionViewer: CollectionViewer): Observable<readonly Client[]> {
        return this.dataSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.dataSubject.complete();
    }

    load(): void {
        this.clientService.getAll().subscribe(
            result => {
                this.dataSubject.next(result.content);
                this.totalElements = result.totalElements;
            },
            error => {
                console.log(error)
            }
        )
    }

}
