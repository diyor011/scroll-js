// class Human{
//     constructor(data){
//     // console.info(data)
// this.hi =1
//     }
// } 

// const human = new Human('salom dunyo')
// const human1 = new Human('salom uzb')
// const human2= new Human('salom kz')
// const human3 = new Human('salom tjk')


// class Human {
//     constructor(data) {
//         this.name = data.name
//         this.age = data.age
//     }
// }

// const human = new Human ({
//     name:'dior',
//     age:32
// })

// class Women extends Human {
//     constructor(data) {
//         super(data)
//         this.gender = 'ayol'
//     }
// }

// // const women = new Women({
// //     name: 'diyora',
// //     age: 20

// // })

// class Men extends Human {
//     constructor(data) {
//         super(data)
//         this.gender = 'erkak'
//     }
// }
// // const men = new Men({
// //     name: 'diyor',
// //     age: 25

// // })
// class Child extends Women{
//     constructor(data){
//     super(data)
//     this.mather = data.mather
//     this.name = data .mather
//     this.gender =data.gender
//     this.child = `${this.mather}ni bolasiman,ismi${this.name}.${this.gender}man`
//     }
// }

// const human = new Human({
//     name: 'dior',
//     age:'18'
// })

// const men  = new Men ({
//     name: 'ali',
//     age: 30
// })
// const women =  new Women ({
//     name: 'sayora',
//     age: 18
// })

// const child = new Child({
//     name: 'mamaraim',
//     gender: 'erkak',
//     mather: 'gulchapchap',
//     age: 2
// })

// class ElementQuery {
//     constructor(data) {
//         if (typeof data.el === 'string')
//             this.el = document.querySelector(data.el)
//         else if (data.el instanceof HTMLElement)
//             this.el = data.el
//     }
// }
// class Scroll extends ElementQuery {
//     constructor(data) {
//         super(data)
//         this.top = data.top
//         this.unit = data.unit
//         this.scroll()
//         this.el.style.position = 'fixed'
//         window.onscroll = () => this.scroll()
//     }
//     scroll() {
//         const int = this.scrollUnit
//         const geo = int - pageYOffset
//         if (geo > 0) this.el.style.top = `${geo}px`
//         else this.el.style.top = 0
//         // sobitya qilamiz
//         window.onscroll = () => this.scroll()

//     }
//     scrollUnit() {
//         if (this.unit === 'px') return this.top >= 0 ? this.top : 0
//         else if (this.unit === '%' || !this.unit)
//             return this.calc(innerHeight, this.top)

//     }
//     calc(height, top) {
//         return height / 100 * top

//     }
// }

// const scroll = new Scroll({
//     el: '.header__nav',
//     top: 100,
//     unit: '%'

// })

class ElementQuery {
    constructor(data){
        if(typeof data.el === 'string')
            this.el = document.querySelector(data.el)
        else if(data.el instanceof HTMLElement)/*instanceof - agar HTML element bolsa */
            this.el = data.el
    }
}

class Scroll extends ElementQuery {
    constructor(data) {
        super(data)
        this.top = data.top
        this.unit = data.unit

        // this.el.style.top = this.scroll()
        this.scroll()

        this.el.style.position = 'fixed'

        window.onscroll = () => this.scroll()
    }

    scroll() {
        const int = this.scrollUnit()
        const geo = int - pageYOffset
        if(geo > 0 ) this.el.style.top = `${geo}px`
        else this.el.style.top = 0

        /* sobitya qilamiz */
        window.onscroll = () => this.scroll()
    }
    scrollUnit() {
        if(this.unit === 'px') return this.top >= 0 ? this.top : 0
        else if(this.unit === '%' || !this.unit)
        return this.calc(innerHeight, this.top)
    }
    calc(height, top) {
        return height / 100 * top
    }
}


const scroll = new Scroll({
    el: '.header__nav',
    top: 100,
    unit: '%'

})


class Hover extends ElementQuery {
    constructor(data){
        super(data)
        this.el.onmouseover = ()=> this.move()

        
    }
    random(min,max){
        return Math.floor(Math.random()* (max - min +1)-min)
    }
    move(){
        this.el.style.marginLeft = this.random(0,innerWidth - this.el.clientWidth)+'px'
        this.el.style.marginTop = this.random(0,innerHeight - this.el.clientHeight)+'px'
        this.el.style.color = `rgb(${this.random(0,225)},${this.random(0,225)},${this.random(0,225)})`
        this.el.style.background = `rgb(${this.random(0,225)},${this.random(0,225)},${this.random(0,225)})`
    }
}

const hover =  new Hover({
    el:'.header__content'

})