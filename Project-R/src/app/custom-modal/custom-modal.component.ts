import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild
} from "@angular/core";
import {
  NgbModal,
  NgbModalRef,
  NgbModalOptions
} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.css']
})
export class CustomModalComponent implements  OnChanges{
  @ViewChild("content", {static: false}) modalContent;
  @Input() title: string;
  @Input() size: "sm" | "md" | "lg" | "xl" = "md";
  @Input() backdrop: boolean | "static" = "static";
  @Input() isOpen: boolean = false;
  @Output() isOpenChange = new EventEmitter()
  modalOption: NgbModalOptions = {};

  modalRef: NgbModalRef;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.isOpen) {
      this.isOpen ? this.openModal() : this.closeModal();
    }
  }

  openModal() {
    setTimeout(() => {
      this.modalRef = this.modalService.open(this.modalContent), {
        backdrop: this.backdrop,
        size: this.size as any,
        beforeDismiss: () => {
          this.isOpenChange.emit(false)
          return true;
        }
      } 
    });
  }

  closeModal() {
    if(this.modalRef) {
      this.modalRef.dismiss();
    }
  }

}
