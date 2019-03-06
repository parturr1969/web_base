import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[isdDropdown]'
})

export class DropdownDirectiive {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') onClicl() {
    this.isOpen = !this.isOpen;
  }
}
