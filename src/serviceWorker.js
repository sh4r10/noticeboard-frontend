self.addEventListener('push', e =>{
    console.log(e);
    const data = e.data.json();
    console.log(data);
    self.registration.showNotification(data.title, {body: "Notified by sh4r10"});
    console.log("Notification sent");
})