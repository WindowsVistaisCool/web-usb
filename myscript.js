document.addEventListener('DOMContentLoaded', event => {
  let connec = document.getElementById('connect')
  let show = document.getElementById('showID')
  var vndrID = 0x0781
  
  show.addEventListener('click', async() => {
    alert("The current vendor ID is: " + vndrID)
  })
  connec.addEventListener('click', async() => {
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
