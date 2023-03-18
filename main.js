


const body = document.body
const h3 = document.createElement('h3')
h3.innerHTML ='Name:'
body.prepend(h3)


const input = document.createElement('input')
input.setAttribute("placeholder","Ваше имя" )
input.setAttribute("class","input" )
h3.after(input)


const h3b = document.createElement('h3')
h3b.innerHTML ='Number:'
input.after(h3b)


const input2 = document.createElement('input')
input2.setAttribute("placeholder","Number" )
input2.setAttribute("class","input" )
h3b.after(input2)



const h3c = document.createElement('h3')
h3c.innerHTML ='Email:'
input.after(h3c)


const input3 = document.createElement('input')
input3.setAttribute("placeholder","Email" )
input3.setAttribute("class","input" )
h3c.after(input3)



const h3d = document.createElement('h3')
h3d.innerHTML ='Sum:'
input.after(h3d)


const input4 = document.createElement('input')
input4.setAttribute("placeholder","Sum" )
input4.setAttribute("class","input" )
h3d.after(input4)



const btn = document.createElement('button')
btn.innerHTML ='Go to the payment'
btn.setAttribute("class","btn")
input4.after(btn)