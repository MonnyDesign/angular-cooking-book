import { Directive, HostListener, HostBinding, ElementRef, Host} from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    constructor(private elRef: ElementRef) {}

    @HostBinding('class.open') isOpen = false;
    @HostBinding('class.bg-yellow') isSelected = false;

    // @HostListener('click') toggleOpen(){
    //     this.isOpen = !this.isOpen;
    // }

    @HostListener('document:click', ['$event'])
    toggleOpen(event: Event){
        if(this.elRef.nativeElement.contains(event.target)){
            this.isOpen = !this.isOpen;
            this.isSelected = !this.isSelected;
        }else{
            this.isOpen = false;
            this.isSelected = false;
        }
    }   
}

// @HostListener('document:click', ['$event']) 
// 1vi argument - za kakwo sybitie slusham, kogato ima ":" moje da e document, window - dekorator
// 2ri atgument - [$event] - masiv koito sydyrja argumentite, koito iskam da zadam na funkciqta - dekorator
// toggleOpen - tova e funkciqta - handler - kazwam che shte podam 1 argument, koito e "event"