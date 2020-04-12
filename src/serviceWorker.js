// self.addEventListener('push', e =>{
//     console.log("push received", e);
//     const data = e.data.json();
//     console.log(data);
//     self.registration.showNotification("Work in progress...", {
//         body: "Notified by sh4r10",
//         icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"
//     });
//     console.log("Notification sent");
// })

self.addEventListener('push', function(event) {
    console.log('Received a push message', event);
  
    var title = 'hoopla.';
    var body = 'We have received a push message.';
    var icon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png';
    var tag = 'simple-push-demo-notification-tag';
  
    event.waitUntil(
      self.registration.showNotification(title, {
        body: body,
        icon: icon,
      })
    );
  });