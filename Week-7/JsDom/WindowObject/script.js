document.addEventListener("DOMContentLoaded", function () {
  displayWindowProperties();
});

function displayWindowProperties() {
  console.log("User agent", navigator.userAgent);
  console.log("width", screen.width, " ", "height", screen.height);
  console.log("Url and path", location.href, location.pathname);
  const windowProperties = {
    width: screen.width,
    height: screen.height,
  };
  localStorage.setItem(
    "window-localstorage-properties",
    JSON.stringify(windowProperties)
  );
  sessionStorage.setItem(
    "window-sessionstorage-properties",
    JSON.stringify(windowProperties)
  );
  console.log(
    "inside local storage",
    JSON.parse(localStorage.getItem("window-localstorage-properties"))
  );
  console.log(
    "inside session storage",
    JSON.parse(sessionStorage.getItem("window-sessionstorage-properties"))
  );
}
