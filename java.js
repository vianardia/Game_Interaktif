const pertanyaan = document.getElementById('pertanyaan')
const hadiah = document.querySelector('.hadiah_1')
const hadiah2 = document.querySelector('.hadiah_2')
const hadiah3 = document.querySelector('.hadiah_3')
const hadiah4 = document.querySelector('.hadiah_4')
const hadiah5 = document.querySelector('.cekpoint')
const hadiah6 = document.querySelector('.hadiah_6')
const hadiah7 = document.querySelector('.hadiah_7')
const hadiah8 = document.querySelector('.hadiah_8')
const hadiah9 = document.querySelector('.hadiah_9')
const hadiah10 = document.querySelector('.cekpoint')
const hadiah11 = document.querySelector('.hadiah_11')
const hadiah12 = document.querySelector('.hadiah_12')
const hadiah13 = document.querySelector('.hadiah_13')
const hadiah14 = document.querySelector('.hadiah_14')
const hadiah15 = document.querySelector('.cekpoint')


const a = document.querySelector('.a')
const b = document.querySelector('.b')
const c = document.querySelector('.c')
const d = document.querySelector('.d')

function box_pertanyaan(){
    pertanyaan.innerText = 'Satu ton ada berapa kilo?'
    a.innerText = 'A: 10000 kg'
    b.innerText = 'B: 10 Kg'
    c.innerText = 'C: 1000 Kg'
    d.innerText = 'D: 100 Kg'

    a.addEventListener('click',()=>{
        a.classList.add('false')
        c.classList.add('true')
    })
    b.addEventListener('click',()=>{
        b.classList.add('false')
        c.classList.add('true')
    })

    c.addEventListener('click',()=>{
        c.classList.add('true')
        hadiah.classList.add('win')
        setInterval(()=>{
            c.classList.remove('true')
            box_pertanyaan2()
            a.classList.remove('false')
            b.classList.remove('false')
            d.classList.remove('false')
        },1500)

    })
    d.addEventListener('click',()=>{
        d.classList.add('false')
        c.classList.add('true')
    })
}
function box_pertanyaan2(){
    pertanyaan.innerText = 'Senjata Khas suku aborigin adalah?'
    a.innerText = 'A: Boomerang'
    b.innerText = 'B: Tombak'
    c.innerText = 'C: Pedang'
    d.innerText = 'D: Panah'

    a.addEventListener('click',()=>{
        a.classList.add('true')
        hadiah2.classList.add('win')
        setInterval(()=>{
            a.classList.remove('true')
            box_pertanyaan3()
            b.classList.remove('false')
            c.classList.remove('false')
            d.classList.remove('false')
        },1500)
    })
    b.addEventListener('click',()=>{
        b.classList.add('false')
        a.classList.add('true')
    })
    c.addEventListener('click',()=>{
        c.classList.add('false')
        a.classList.add('true')
    })
    d.addEventListener('click',()=>{
        d.classList.add('false')
        a.classList.add('true')
    })
}
function box_pertanyaan3(){
    pertanyaan.innerText = 'Yang tidak termasuk pahlawan revolusi adalah?'
    a.innerText = 'A: Tuanku Imam Bonjol'
    b.innerText = 'B: Ki Hajar Dewantara'
    c.innerText = 'C: Kapten Pattimura'
    d.innerText = 'D: A.H. Nasution'

    a.addEventListener('click',()=>{
        a.classList.add('false')
        d.classList.add('true')
    })
    b.addEventListener('click',()=>{
        b.classList.add('false')
        d.classList.add('true')
    })
    c.addEventListener('click',()=>{
        c.classList.add('false')
        d.classList.add('true')
    })
    d.addEventListener('click',()=>{
        d.classList.add('true')
        hadiah3.classList.add('win')
        setInterval(()=>{
            d.classList.remove('true')
            box_pertanyaan4()
            a.classList.remove('false')
            b.classList.remove('false')
            c.classList.remove('false')
        },1500)
    })
}
function box_pertanyaan4(){
    pertanyaan.innerText = 'Pembuluh darah yang menyalurkan darah ke jantung adalah?'
    a.innerText = 'A: Arteri'
    b.innerText = 'B: Vena'
    c.innerText = 'C: Kapiler'
    d.innerText = 'D: Aorta'

    a.addEventListener('click',()=>{
        a.classList.add('true')
        hadiah2.classList.add('win')
        setInterval(()=>{
            a.classList.remove('true')
            box_pertanyaan5()
            b.classList.remove('false')
            c.classList.remove('false')
            d.classList.remove('false')
        },1500)
    })
    b.addEventListener('click',()=>{
        b.classList.add('false')
        a.classList.add('true')
    })
    c.addEventListener('click',()=>{
        c.classList.add('false')
        a.classList.add('true')
    })
    d.addEventListener('click',()=>{
        d.classList.add('false')
        a.classList.add('true')
    })
}
box_pertanyaan()