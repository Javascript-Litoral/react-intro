const subscriptions = []

export function apiPostSubscription({mail, name}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!name || !mail) {
        reject({message: 'Missing fields!', status: 400})
      } else if (isSubscribed(mail)) {
        resolve({
          message: 'Your email is already subscribed. Not enough spam eh?',
          status: 200
        })
      } else {
        subscriptions.push({mail, name})
        resolve({
          message: 'Subscribed! Brace yourself the spam is comming!',
          status: 201
        })
      }
    }, 2000);
  });
}

function isSubscribed(mail) {
  return subscriptions.findIndex(item => item.mail === mail) > -1
}
