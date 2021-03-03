document.addEventListener('DOMContentLoaded', event => {
  let button = document.getElementById('connect')
  let cvendor = document.getElementById('changeID')
  var vndrID = 0x0781
  
  cvendor.addEventListener('click', async() => {
    var newID = window.prompt("enter new ID (---- format w/ no 0x):")
    if (newID === null) {
	alert("invalid id")
	return
    }
    var newerID = parseInt(newID, 10)
    vndrID = newerID
    alert("changed vendor id to: " + vndrID)
  })
  button.addEventListener('click', async() => {
    let device
    
    try {
      device = await navigator.usb.requestDevice({
        filters: [{
          vendorId: vndrID
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
