import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
       styles: [`
       .green {color: #003300 !important }
    .thumbnail {min-height : 210px;}
     .pad-left{margin-left:20px;}
     .well div{color:red}
   `]
})
export class EventThumbnailComponent{
    @Input() event:any
   
    getStartTimeStyle():any {
        if (this.event && this.event.time === '8:00 am')
          return {color: '#003300', 'font-weight': 'bold'}
        return {}
      }
}