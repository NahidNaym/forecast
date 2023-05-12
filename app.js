 const request = require ("request")
// const { json } = require("stream/consumers")
// //                             weather api site                                       //
// const url = "https://api.weatherapi.com/v1/current.json?key=af1e1f4d54b6441899d25634231005&q=egypt"

// // weatherstack url
// // const url ="http://api.weatherstack.com/current?access_key=8e6f0e05ba4c7833af254509df6fa00c&query=egypt"
// // {url} shorthand for url
// request ({url, json: true},(error , response) => {
//    if(error)
//    {console.log("ERROR HAS OCCURED")}
//    else if(response.body.error) {console.log(response.body.error.message)}
//    else {console.log(response.body.location.name,response.body.current.condition.text)}
  
// })
// /////////////////////////////////////////////////////////////////////////////////
const geocodeurl = "https://api.mapbox.com/geocoding/v5/mapbox.places/egypt.json?access_token=pk.eyJ1IjoibmFoZWQzNjAiLCJhIjoiY2xoaThzdzZoMDVxZDNocXBydDFnN3RpcyJ9.a0uRwa1Gs-BdOXHmq4487w"
request({url: geocodeurl, json : true},(error, response) =>{
   if (error) 
      { 
         console.log("CAN'T CONNECT")
   }
   else if(response.body.message) 
   {
      console.log(response.body.message)
   }

   else if (response.body.features[0].length == 0)
    {
      console.log("invalid location")
   }
   
   else {
      const longtitude = response.body.features[0].center[0]
      const latitude = response.body.features[0].center[1]
      console.log(response.body.features[0].text,longtitude , latitude)
   }
})
// weather api http://api.weatherapi.com/v1/current.json?key=af1e1f4d54b6441899d25634231005&q=London&aqi=no
