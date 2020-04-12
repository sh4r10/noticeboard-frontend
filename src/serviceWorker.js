self.addEventListener('push', e =>{
    console.log("push received", e);
    const data = e.data.json();
    console.log(data);
    self.registration.showNotification("Work in progress...", {
        body: "Notified by sh4r10",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"
    });
    console.log("Notification sent");
})

// self.addEventListener('push', function(event) {
//     console.log("push recieved");
//     navigator.serviceWorker.ready.then(function(registration) {
//         registration.showNotification('Vibration Sample', {
//           body: 'Buzz! Buzz!',
//           icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png',
//           vibrate: [200, 100, 200, 100, 200, 100, 200],
//           tag: 'vibration-sample'
//         });
//     });
//   });