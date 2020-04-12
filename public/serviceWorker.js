self.addEventListener('push', async function(event) {
  console.log('Received a push message', event);
  var title = 'Yay a message.';
  var body = 'We have received a push message.';

  event.waitUntil(
    self.registration.showNotification(title, {
      body: body,
    })
  );
});