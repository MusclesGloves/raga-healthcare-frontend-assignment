type BrowserNotificationInput = {
  title: string;
  body: string;
};

export async function showBrowserNotification({
  title,
  body,
}: BrowserNotificationInput) {
  if (!('Notification' in window)) {
    return;
  }

  if (Notification.permission !== 'granted') {
    return;
  }

  if ('serviceWorker' in navigator) {
    const registration = await navigator.serviceWorker.getRegistration();

    if (registration) {
      await registration.showNotification(title, {
        body,
        icon: '/vite.svg',
        badge: '/vite.svg',
        tag: 'raga-healthcare-alert',
      });
      return;
    }
  }

  new Notification(title, { body });
}