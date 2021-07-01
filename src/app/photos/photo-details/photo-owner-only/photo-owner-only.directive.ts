import { UserService } from './../../../core/user/user.service';
import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";
import { Photo } from "../../photo/photo";
import { Input } from "@angular/core";

@Directive({
  selector :'[photoOwnerOnly]'
})
export class PhotoOwnerOnlyDirective implements OnInit {

  @Input() ownedPhoto!: Photo;
  @Input() trash: any;

  constructor(
    private element: ElementRef<any>,
    private renderer: Renderer2,
    private userService: UserService
  ) {}

  ngOnInit() : void {
    this.userService
      .getUser()
      .subscribe(user => {
        if(!user || user.id !== this.ownedPhoto.userId) {
          this.renderer.removeChild(this.trash, this.element.nativeElement)
        }
      });
  }
}
