import { Directive, ElementRef, HostBinding, HostListener, Renderer2,  } from "@angular/core";

@Directive(
    {
        selector: '[appDropdown]'
    }
)
export class DropdownDirective {

    @HostBinding('class.open') isOpen = false;

    constructor(private element: ElementRef) {}

    @HostListener('document:click', ['$event'])
    toggleMenu(eventData: Event) {
        this.isOpen = this.element.nativeElement.contains(event.target) ? !this.isOpen : false;
    }


}