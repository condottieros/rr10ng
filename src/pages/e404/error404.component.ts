import { Component, OnInit } from '@angular/core'
import { from } from 'rxjs'
import { zip } from 'rxjs/operators'

@Component({
    templateUrl: './error404.component.html',
    selector: 'error404-page'
})
export class Error404PageComponent implements OnInit {
    ngOnInit() {
        console.log('qqqqqq')
        //const str1 = from([1, 2, 3, 4, 5])
        //const str2 = from(['a', 'b', 'c', 'd', 'e'])
            //.pipe(zip(str1))
            //.subscribe(x => console.log('~~~x === ', x))
        //zip(str1)
    }
}