document.addEventListener('DOMContentLoaded', event => {
  let button = document.getElementById('connect')
  let show = document.getElementById('showID')
  let cvendor = document.getElementById('changeID')
  let data = document.getElementById('showData')
  let connect = document.getElementById('connectOld')
  var vndrID = 0x0781
  
  show.addEventListener('click', async() => {
    alert("The current vendor ID is: " + vndrID)
  })
  data.addEventListener('click', async() => {
    alert("this feature is coming soon, srry")
  })
  cvendor.addEventListener('click', async() => {
    var newID = window.prompt("enter new hex (0x0 form)")
    if (newID == null or newID == NaN) {
	return
    }
    var newerID = parseFloat(newID)
    vndrID = newerID
    alert("changed vendor id to: " + vndrID + "(dec form)")
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
  connect.addEventListener('click', async() => {
    let device
    const vid = 0x0781
    
    try {
      device = await navigator.usb.requestDevice({
        filters: [{
          vendorId: vid
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
