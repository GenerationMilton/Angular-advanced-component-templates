import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  output,
  Output,
  viewChild,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements AfterViewInit, OnInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  //private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  //@Output() add = new EventEmitter<{title: string; text: string}>();

  enteredTitle='';
  enteredText='';
  add = output<{title: string; text: string}>();



  ngOnInit(): void {
    console.log('ONINIT');
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit(): void {
    console.log('AFTER VIEW INIT');
    console.log(this.form?.nativeElement);
  }

  onSubmit() {
    // console.log(title);
    // console.log(ticketText);

    this.add.emit({title: this.enteredTitle, text: this.enteredText});
    //two way binding
    // this.form?.nativeElement.reset();
    this.enteredTitle='';
    this.enteredText='';
  }
}
