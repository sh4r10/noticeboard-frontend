self.addEventListener('push', async function(event) {
  console.log('Received a push message', event);
  const data = event.data.json();
  console.log(data);
  const title = data.title;
  const body = data.title;
  const icon = `${process.env.PUBLIC_URL}/mb-logo.png`;

  event.waitUntil(
    self.registration.showNotification(title, {
      body: body,
      icon: icon
    })
  );
});