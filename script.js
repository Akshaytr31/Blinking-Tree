// const blick=document.querySelector('.blinking')



// function pyramidPattern(rows) {
//     let result = '';  

//     for (let i = 0; i <= rows; i++) {
//         let line = '';

//         for (let k = 1; k <= i; k++) {
//             line += '<div class="circle"></div>'
//         }

//         result += `<div>${line}</div>`
//     }

//     return result;  
// }
// // const pyramid = document.querySelector('.pyramid');
// // pyramid.innerHTML = pyramidPattern(0, 7, 0);


// const play=document.querySelector('.fa-play')
// const pause=document.querySelector('.fa-pause')
// const rowsInput=document.querySelector('.rows') 
// const delayInput=document.querySelector('.delay')
// const btn=document.querySelector('.btn')
// const colorinput=document.querySelector('.color input')
// let blinking=true
// let timeoutId=null
// let blinkingColor=true
// let selectedColor=''
// let rowValue = 13;

// rowsInput.value=rowValue
// rowsInput.dispatchEvent(new Event('input'))

// rowsInput.addEventListener('input', (e) => {
//     rowValue = e.target.value;

//     if (window.innerWidth < 500 && rowValue > 13) {
//         alert("Can't enter more than 13 rows on screens less than 500px wide.");
//         e.target.value = 13;
//         rowValue = 13;
//     } else if (window.innerWidth >= 500 && rowValue > 50) {
//         alert("Can't enter more than 50 rows on screens.");
//         e.target.value = 50;
//         rowValue = 50;
//     }

//     const pyramid = document.querySelector('.pyramid')
//     pyramid.innerHTML = pyramidPattern(rowValue)

//     if (rowValue > 30) {
//         pyramid.classList.add('extraExtraSmall-padding')
//         pyramid.classList.remove('extraSmall-padding', 'small-padding')
//     } else if (rowValue > 20) {
//         pyramid.classList.add('extraSmall-padding')
//         pyramid.classList.remove('extraExtraSmall-padding', 'small-padding')
//     } else if (rowValue > 11) {
//         pyramid.classList.add('small-padding');
//         pyramid.classList.remove('extraSmall-padding', 'extraExtraSmall-padding')
//     } else {
//         pyramid.classList.remove('small-padding', 'extraSmall-padding', 'extraExtraSmall-padding')
//     }
// });




// colorinput.addEventListener('input',(ev)=>{
//     blinkingColor=false
//     selectedColor=ev.target.value
// })



// let delayValue=500
// delayInput.addEventListener('input',(event)=>{
//     delayValue =event.target.value
//     // console.log(delayValue)
// })




// let rowIndex=0
// play.addEventListener('click',()=>{
//     blinking=true
//     const pyramidRows=document.querySelectorAll('.pyramid > div')
   


//     function blikRow() {
//         if (!blinking) {
//             return;
//         }
    
//         if (rowIndex > 0) {
//             const lastRow = pyramidRows[rowIndex - 1].querySelectorAll('.circle')
//             lastRow.forEach(circle => {
//                 circle.classList.remove('blinking')
//             });
//         } else if (rowIndex === 0) {
//             const lastRow = pyramidRows[pyramidRows.length-1 ].querySelectorAll('.circle')
//             lastRow.forEach(circle => {
//                 circle.classList.remove('blinking')
//             });
//         }
    
//         const circles = pyramidRows[rowIndex].querySelectorAll('.circle')
//         circles.forEach(circle => {
//             circle.classList.add('blinking')
//             if(blinkingColor){
//                 circle.style.animation=''
//             }else{
//                 circle.style.background=selectedColor
//                 circle.style.animation='none'
//             }
//         });
//         rowIndex = (rowIndex + 1) % pyramidRows.length
//         timeoutId = setTimeout(blikRow, delayValue)
    
//     }
//     blikRow()
// })


// pause.addEventListener('click', () => {
//     clearTimeout(timeoutId)
//     blinking = false;
// });

// const restart=document.querySelector('.fa-arrows-rotate')
// restart.addEventListener('click',()=>{
//     restart.style.transform='scale(1.05)'
    
//     setTimeout(()=>{
//         location.reload()
//     },300)
// })


// const startpage=document.querySelector('.start')
// const start=document.querySelector('.startBtn')


// start.addEventListener('click',()=>{
//     startpage.classList.add('letsStart')
// })















const play=document.querySelector('.Play')
const pause=document.querySelector('.Pause')
const rowsInput=document.querySelector('.rows')
const delayInput=document.querySelector('.delay')
const colorinput=document.querySelector('.color input')

let blinking=true
let timeoutId=null
let blinkingColor=true
let selectedColor=''
let rowValue=13

rowsInput.value=rowValue
rowsInput.dispatchEvent(new Event('input'))

rowsInput.addEventListener('input',(e)=>{
    rowValue=e.target.value

  
    if (window.innerWidth<500 && rowValue > 13) {
        alert("Can't enter more than 13 rows on screens less than 500px wide.")
        e.target.value =13
        rowValue =13
    } else if (window.innerWidth>= 500 && rowValue > 50) {
        alert("Can't enter more than 50 rows on screens.")
        e.target.value =50
        rowValue =50
    }

    const pyramid = document.querySelector('.pyramid')
    pyramid.innerHTML = pyramidPattern(rowValue)

    if (rowValue > 30) {
        pyramid.classList.add('extraExtraSmall-padding')
        pyramid.classList.remove('extraSmall-padding', 'small-padding')
    } else if (rowValue > 20) {
        pyramid.classList.add('extraSmall-padding')
        pyramid.classList.remove('extraExtraSmall-padding', 'small-padding')
    } else if (rowValue > 11) {
        pyramid.classList.add('small-padding')
        pyramid.classList.remove('extraSmall-padding', 'extraExtraSmall-padding')
    } else {
        pyramid.classList.remove('small-padding', 'extraSmall-padding', 'extraExtraSmall-padding')
    }
});


colorinput.addEventListener('input',(ev)=>{
    blinkingColor=false
    selectedColor=ev.target.value
})

let delayValue=500
delayInput.addEventListener('input',(event)=>{
    delayValue=event.target.value
});


function pyramidPattern(rows) {
    let result='';
    for (let i=0;i<=rows;i++){
        let line='';
        for (let k=1;k<=i;k++){
            line+='<div class="circle"></div>'
        }
        result+=`<div>${line}</div>`
    }
    return result
}


let rowIndex =0;
play.addEventListener('click',()=> {
    blinking =true
    const pyramidRows =document.querySelectorAll('.pyramid > div')

    function blinkRow() {
        if (!blinking) {
            return
        }

        if (rowIndex > 0) {
            const lastRow = pyramidRows[rowIndex - 1].querySelectorAll('.circle')
            lastRow.forEach(circle=> {
                circle.classList.remove('blinking')
                circle.style.background = ''
            })
        } else if (rowIndex ===0) {
            const lastRow = pyramidRows[pyramidRows.length - 1].querySelectorAll('.circle')
            lastRow.forEach(circle => {
                circle.classList.remove('blinking')
                circle.style.background =''
            });
        }

        const circles = pyramidRows[rowIndex].querySelectorAll('.circle')
        circles.forEach(circle => {
            circle.classList.add('blinking')
            if (blinkingColor) {
                circle.style.animation =''
            } else {
                circle.style.background=selectedColor
                circle.style.animation= 'none'
            }
        });

        rowIndex =(rowIndex + 1)%pyramidRows.length
        timeoutId =setTimeout(blinkRow, delayValue)
    }

    blinkRow()
})


pause.addEventListener('click',()=>{
    blinking =false
})



const restart =document.querySelector('.fa-arrows-rotate')
restart.addEventListener('click',()=>{
    restart.style.transform = 'scale(1.05)'
    setTimeout(()=> {
        location.reload()
    }, 300)
})




const base=document.querySelector('.container_btn')
const topsub=document.querySelector('.top_sub')
const blurAn=document.querySelector('.blurAn')
const startpage =document.querySelector('.start')
const start =document.querySelector('.startBtn')
start.addEventListener('click',()=>{
    startpage.classList.add('letsStart')
    rowsInput.classList.remove('blurAn')
    topsub.classList.remove('blurAn')
    base.classList.remove('blurAn')
    
})













