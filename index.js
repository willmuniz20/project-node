 const express= require('express')

 const app= express()

 app.get('/users', (require,response)=>{

return response.send('Hello Node')

 })

 

app.listen(3000)