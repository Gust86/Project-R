import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModalModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomModalComponent } from './custom-modal.component';

@NgModule({
    declarations: [CustomModalComponent, NgbActiveModal],
    imports: [CommonModule, FormsModule, NgbModalModule],
    exports: [CustomModalComponent, NgbActiveModal],
    providers: [NgbActiveModal]
})
export class CustomModalModule {}