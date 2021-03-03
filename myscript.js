document.addEventListener('DOMContentLoaded', event => {
  let button = document.getElementById('connect')
  let cvendor = document.getElementById('changeID')
  var VENDOR_ID = 0x0781
  
  cvendor.addEventListener('click', async() => {
    var newID = window.prompt("enter new ID (---- format w/ no 0x):")
    alert("changed vendor id to" + newID)
    var newerID = parseInt(newID, 10)
    VENDOR_ID = newerID
  })
  button.addEventListener('click', async() => {
    let device
    
    try {
      device = await navigator.usb.requestDevice({
        filters: [{
          vendorId: VENDOR_ID
        }]
      })

      console.log('open')
      await device.open()
      console.log('opened:', device)
    } catch (error) {
      console.log(error)
    }
	  await device.close()
  })
})
