import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Input } from "@angular/core";
import { PhotoService } from "../../photo/photo.service";
import { PhotoComment } from '../../photo/photo-comment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-photo-comments',
  templateUrl: './photo-comments.component.html'
})
export class PhotoCommentsComponent implements OnInit {

  @Input() photoId!: number;

  comments$!: Observable<PhotoComment[]>;
  commentForm!: FormGroup;

  constructor(
    private photoService: PhotoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.comments$ = this.photoService.getComments(this.photoId);


    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.maxLength(300)]
    });
  }

  save() {
    const comment = this.commentForm.get('comment')?.value;
    this.comments$ = this.photoService
      .addComment(this.photoId, comment)
      .pipe(switchMap(() => this.photoService.getComments(this.photoId)))
      .pipe(tap(() => {
          this.commentForm.reset();
          alert('Comentário adicionado com sucesso');
    }));
  }
}
