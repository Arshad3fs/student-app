
app.put('/school/update', (req, res) => {
        const body = req.body;
        console.log(body)
        updateSchool({id:body.id,name:body.name},(update)=>{
                    console.log(update)
                     getSchool(body.id,(results)=>{
                           console.log(results)
                           if(body.address){
                           updateAddress({...body.address,addressid:results.ADDRESSID},(addr)=>{
                             console.log(addr)
                               res.send(addr? {message:"school update successfully"}:{message:"update address id not update chekyour query"})
                           })
                          }else{
                            updateSchool({id:body.id,name:body.name},(results)=>{
                                      res.send(results ? {message:"school updated successfully"}:{message:"school not update"})
                            })
                          }
                   })
        })
        
  
  
   export function updateSchool(schObj, callbackFn) {
    const connection = getConnection();
    connection.connect()
    connection.query(`update school set name='${schObj.name}' where id=${schObj.id}`, (error, result,field) => {
        if (error) throw error
        connection.end();
      getSchool(schObj.id,(addr)=>{
              callbackFn(addr)
      })
    });
}
  
  
  
  
  
   export function updateAddress(address,callbackFn){
              const connection=getConnection()
              connection.connect()
              connection.query(`update address set houseno="${address.houseno}",street='${address.street}',town='${address.town}',district='${address.district}',state='${address.state}',country='${address.country}' where addressid=${address.addressid}`,(error,result)=>{
                if(error) throw error;
                connection.end();
                callbackFn(result ? true:false)
               
   })
 }
