import { Directive, HostListener, HostBinding, ElementRef, ContentChild, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appDropdown]"
})
export class DropdownDirective {

  @HostBinding("class.show")
  @ContentChild('dropdown') dropdown: ElementRef;
  private isOpen = false;

  constructor(private renderer: Renderer2) { }

  @HostListener("click")

  toggleOpen() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.renderer.addClass(this.dropdown.nativeElement, 'show');
    } else {
      this.renderer.removeClass(this.dropdown.nativeElement, 'show');
    }
  }
}
