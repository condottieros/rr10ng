import { Component, OnInit } from '@angular/core'
import { from, interval, of } from 'rxjs'
import { zip, switchMap, switchAll, switchMapTo, take, map } from 'rxjs/operators'

@Component({
    templateUrl: './login.component.html',
    selector: 'login-page'
})
export class LoginPageComponent implements OnInit {
    ngOnInit() {
        console.log('qqqqqq')
        const str1 = interval(2000).pipe(take(3))
        const str2 = of('azaza')
        str1.pipe(
            map(x => interval(300).pipe(take(10)) ),
            switchAll()
        )
            .subscribe(x => console.log('~~~~>', x))
            /*
        const emitter1 = interval(1200)
        const emitter2 = interval(3800)

        emitter2.pipe(
            switchMap(
                val => interval(600),
                (outer, inner) => [outer, inner]
            )
        ).subscribe(x => console.log(x))*/


    }
}